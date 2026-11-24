/* Wedding-day check-in. Uses the RSVP endpoint from CONFIG in script.js. Staff only (needs the key set in google-apps-script.gs). */
(function () {
  'use strict';
  var C = window.WEDDING_CONFIG, $ = function (s) { return document.querySelector(s); };
  var store = { get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { } } };
  var qs = new URLSearchParams(location.search);
  var keyEl = $('#key'), codeEl = $('#code'), res = $('#res'), stream = null, scanning = false;
  var re = new RegExp(C.pass.prefix + '-[A-HJ-NP-Z2-9]{8}', 'i');
  $('#who').textContent = C.couple.short + ' · ' + C.event.dateShort;

  if (qs.get('k')) { store.set('mn27-key', qs.get('k')); history.replaceState(null, '', location.pathname + (qs.get('c') ? '?c=' + encodeURIComponent(qs.get('c')) : '')); }
  keyEl.value = store.get('mn27-key') || '';
  var code0 = (qs.get('c') || '').toUpperCase(); if (code0) codeEl.value = code0;

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function show(kind, html) { res.innerHTML = '<div class="res ' + kind + '">' + html + '</div>'; }
  function call(params) {
    if (!C.rsvp.endpoint) return Promise.reject(new Error('no_endpoint'));
    var u = C.rsvp.endpoint + (C.rsvp.endpoint.indexOf('?') < 0 ? '?' : '&') + new URLSearchParams(params).toString();
    return fetch(u).then(function (r) { return r.json(); });
  }
  function stats() {
    if (!keyEl.value) return;
    call({ action: 'stats', key: keyEl.value }).then(function (d) {
      if (!d.ok) return;
      $('#stats').hidden = false; $('#stParties').textContent = d.parties; $('#stExpected').textContent = d.expected; $('#stArrived').textContent = d.arrived;
    }, function () { });
  }
  function lookup(code, action, guests) {
    code = (code || '').toUpperCase().trim();
    var m = code.match(re); if (m) code = m[0].toUpperCase();
    if (!keyEl.value) { show('warn', '<h2>Staff key needed</h2><p>Enter the staff key above, then check the code again.</p>'); keyEl.focus(); return; }
    if (!code) { show('warn', '<h2>Enter a code</h2>'); return; }
    store.set('mn27-key', keyEl.value); codeEl.value = code;
    show('warn', '<p>Checking…</p>');
    var p = { action: action || 'verify', c: code, key: keyEl.value }; if (guests) p.guests = guests;
    call(p).then(function (d) {
      if (!d.ok) { show('bad', '<h2>' + (d.error === 'bad_key' ? 'Wrong staff key' : 'Something went wrong') + '</h2>'); return; }
      if (!d.found) { show('bad', '<h2>Code not found</h2><p>This code is not on the guest list. Ask the guest for their name and phone number.</p>'); return; }
      if (d.attending !== 'Joyfully accept') { show('warn', '<h2>Declined RSVP</h2><p class="big">' + esc(d.name) + '</p><p>This guest said they could not attend.</p>'); return; }
      if (d.already) { show('warn', '<h2>Already checked in</h2><p class="big">' + esc(d.name) + '</p><p>' + d.guests + ' guest' + (d.guests === 1 ? '' : 's') + ' · arrived ' + esc(d.arrivedAt) + '</p>'); stats(); return; }
      if (d.justCheckedIn) { show('ok', '<h2>✓ Checked in</h2><p class="big">' + esc(d.name) + '</p><p>' + d.guests + ' guest' + (d.guests === 1 ? '' : 's') + '</p>'); stats(); return; }
      show('ok', '<h2>✓ Valid entry pass</h2><p class="big">' + esc(d.name) + '</p><p>' + d.guests + ' guest' + (d.guests === 1 ? '' : 's') + '</p><button type="button" id="mark">Mark as arrived</button>');
      $('#mark').addEventListener('click', function () { lookup(code, 'checkin'); });
    }, function (e) { show('bad', '<h2>' + (e.message === 'no_endpoint' ? 'RSVP link not set up' : 'No connection') + '</h2><p>' + (e.message === 'no_endpoint' ? 'Paste the Apps Script URL into rsvp.endpoint in script.js.' : 'Check the internet connection and try again.') + '</p>'); });
  }
  $('#go').addEventListener('click', function () { lookup(codeEl.value); });
  codeEl.addEventListener('keydown', function (e) { if (e.key === 'Enter') lookup(codeEl.value); });
  keyEl.addEventListener('change', function () { store.set('mn27-key', keyEl.value); stats(); });

  /* camera scanning (Chrome/Android; other browsers: use the phone camera app or type the code) */
  if ('BarcodeDetector' in window && navigator.mediaDevices) {
    $('#scan').hidden = false;
    $('#scan').addEventListener('click', function () {
      if (scanning) return stop();
      var det = new BarcodeDetector({ formats: ['qr_code'] }), v = $('#vid');
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then(function (s) {
        stream = s; v.srcObject = s; v.hidden = false; v.play(); scanning = true; $('#scan').textContent = 'Stop';
        (function loop() {
          if (!scanning) return;
          det.detect(v).then(function (r) {
            if (r && r.length) { var m = String(r[0].rawValue).match(re); if (m) { stop(); lookup(m[0]); return; } }
            setTimeout(loop, 250);
          }, function () { setTimeout(loop, 400); });
        })();
      }, function () { show('warn', '<h2>Camera blocked</h2><p>Allow camera access, or type the code.</p>'); });
    });
  }
  function stop() { scanning = false; if (stream) stream.getTracks().forEach(function (t) { t.stop(); }); stream = null; $('#vid').hidden = true; $('#scan').textContent = 'Scan QR'; }

  stats();
  if (code0 && keyEl.value) lookup(code0);
  else if (code0) show('warn', '<h2>Staff key needed</h2><p>Enter the staff key above, then tap Check code.</p>');
})();
