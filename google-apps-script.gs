/**
 * MIRACLE & NEWMAN, RSVP + QR ENTRY CHECK-IN
 * Paste this whole file into Extensions > Apps Script of your Google Sheet, then Deploy as a Web app.
 * See README.md for the step-by-step.
 *
 * What it does
 *  1. doPost  : receives each RSVP from the website and writes it to the "RSVPs" sheet
 *               (guests who accept arrive with a unique entry code, which is also inside their QR code).
 *  2. doGet   : used by checkin.html on the wedding day. It looks the code up, and marks the guest as ARRIVED.
 */

// >>> CHANGE THIS to a private word/phrase only your ushers know. Never share it with guests. <<<
var CHECKIN_KEY = 'CHANGE-ME-usher-key';

var SHEET_NAME = 'RSVPs';
var HEADERS = ['Timestamp', 'Name', 'Phone', 'Attending', 'Guests', 'Message', 'Entry code', 'Status', 'Arrived at', 'Arrived guests'];
var COL = { TS: 1, NAME: 2, PHONE: 3, ATT: 4, GUESTS: 5, MSG: 6, CODE: 7, STATUS: 8, ARR_AT: 9, ARR_N: 10 };

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) {
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
    sh.getRange('A1:J1').setFontWeight('bold');
    sh.getRange('C:C').setNumberFormat('@');   // plain text keeps the leading 0 of phone numbers
    sh.getRange('G:G').setNumberFormat('@');
    sh.setColumnWidth(2, 180); sh.setColumnWidth(6, 260); sh.setColumnWidth(7, 150);
  }
  return sh;
}

// Stops spreadsheet formulas being injected through text fields (a leading = + - @ is neutralised).
function clean_(v, max) {
  var s = String(v == null ? '' : v).replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, max);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}
function cleanPhone_(v) {
  return String(v == null ? '' : v).replace(/[^0-9+ ]/g, '').trim().slice(0, 20);
}
function makeCode_() {
  var A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789', s = '', i;
  for (i = 0; i < 8; i++) s += A.charAt(Math.floor(Math.random() * A.length));
  return 'MN27-' + s;
}
function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
function findRow_(sh, code) {
  if (!code) return 0;
  var last = sh.getLastRow();
  if (last < 2) return 0;
  var codes = sh.getRange(2, COL.CODE, last - 1, 1).getValues();
  for (var i = 0; i < codes.length; i++) if (String(codes[i][0]).toUpperCase() === code) return i + 2;
  return 0;
}

/* ---------- 1. RSVP from the website ---------- */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(20000);
  try {
    var d = JSON.parse(e.postData.contents);
    if (d.website) return json_({ ok: true });                      // honeypot: bots fill this in
    var name = clean_(d.name, 100);
    if (!name) return json_({ ok: false, error: 'name' });
    var yes = d.attending === 'yes';
    var guests = yes ? Math.max(1, Math.min(20, parseInt(d.guests, 10) || 1)) : 0;
    var code = String(d.code || '').toUpperCase().trim();
    if (!/^[A-Z0-9]{2,6}-[A-Z2-9]{8}$/.test(code)) code = '';
    if (yes && !code) code = makeCode_();

    var sh = sheet_();
    var row = findRow_(sh, code);
    var status = yes ? 'Not arrived yet' : 'Declined';
    var vals = [new Date(), name, cleanPhone_(d.phone), yes ? 'Joyfully accept' : 'Regretfully decline', guests, clean_(d.message, 500), code, status];
    if (row) {
      // same guest changing their RSVP: update their row, keep arrival info if they had already arrived
      var old = sh.getRange(row, COL.STATUS).getValue();
      if (yes && old === 'ARRIVED') vals[7] = 'ARRIVED';
      sh.getRange(row, 1, 1, 8).setValues([vals]);
    } else {
      sh.appendRow(vals);
      row = sh.getLastRow();
    }
    sh.getRange(row, COL.PHONE).setNumberFormat('@').setValue(cleanPhone_(d.phone));
    sh.getRange(row, COL.CODE).setNumberFormat('@').setValue(code);
    return json_({ ok: true, code: code });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/* ---------- 2. Check-in on the wedding day (used by checkin.html) ---------- */
function doGet(e) {
  var p = (e && e.parameter) || {};
  if (!p.action) return ContentService.createTextOutput('RSVP service is running.');
  if (p.key !== CHECKIN_KEY) return json_({ ok: false, error: 'bad_key' });
  var sh = sheet_();

  if (p.action === 'stats') {
    var n = Math.max(0, sh.getLastRow() - 1), expected = 0, arrived = 0, parties = 0;
    if (n) {
      var all = sh.getRange(2, 1, n, 10).getValues();
      all.forEach(function (r) {
        if (r[COL.ATT - 1] === 'Joyfully accept') { expected += Number(r[COL.GUESTS - 1]) || 0; parties++; }
        if (r[COL.STATUS - 1] === 'ARRIVED') arrived += Number(r[COL.ARR_N - 1]) || 0;
      });
    }
    return json_({ ok: true, parties: parties, expected: expected, arrived: arrived });
  }

  var code = String(p.c || p.code || '').toUpperCase().trim();
  var row = findRow_(sh, code);
  if (!row) return json_({ ok: true, found: false });
  var r = sh.getRange(row, 1, 1, 10).getValues()[0];
  var res = { ok: true, found: true, name: r[COL.NAME - 1], guests: Number(r[COL.GUESTS - 1]) || 0,
              attending: r[COL.ATT - 1], status: r[COL.STATUS - 1], arrivedAt: '', already: false };
  if (r[COL.ATT - 1] !== 'Joyfully accept') return json_(res);

  if (r[COL.STATUS - 1] === 'ARRIVED') {
    res.already = true;
    res.arrivedAt = r[COL.ARR_AT - 1] ? Utilities.formatDate(new Date(r[COL.ARR_AT - 1]), 'Africa/Lagos', 'HH:mm, d MMM') : '';
    return json_(res);
  }
  if (p.action === 'checkin') {
    var now = new Date();
    var arrivedN = Math.max(1, Math.min(res.guests, parseInt(p.guests, 10) || res.guests));
    sh.getRange(row, COL.STATUS).setValue('ARRIVED');
    sh.getRange(row, COL.ARR_AT).setValue(now);
    sh.getRange(row, COL.ARR_N).setValue(arrivedN);
    sh.getRange(row, 1, 1, 10).setBackground('#dcefdc');
    res.status = 'ARRIVED';
    res.arrivedAt = Utilities.formatDate(now, 'Africa/Lagos', 'HH:mm, d MMM');
    res.justCheckedIn = true;
  }
  return json_(res);
}
