/* ==========================================================================
   MIRACLE & NEWMAN, WEDDING INVITATION
   ALL TEXT AND SETTINGS LIVE IN THE CONFIG OBJECT BELOW.
   Everything under the line "APP CODE" never needs editing.
   ========================================================================== */
const CONFIG = {
  site: {
    url: 'https://gocportfolio.github.io/mn2026/',   // your live address, ends with /
    title: 'Miracle & Newman | #NewMiracle2027',
    description: 'You are invited to celebrate our union in marriage.'
  },
  couple: {
    short: 'Miracle & Newman',            // used for titles, calendar, share + RSVP messages
    seal: 'M&N',
    hashtag: '#NewMiracle2027',
    tagline: 'Bound by love, Blessed by Grace',
    heroBride: 'MIMI',
    heroGroom: 'MR SPEAKER',
    bride: { title: 'Miss', given: 'MIRACLE', surname: 'John', parents: 'Daughter of Rev & Mrs Dickson John Chimereucheya' },
    groom: { title: 'Mr', given: 'NEWMAN', surname: 'Achor', parents: 'Son of Deacon & Deaconess Nkiruka Achor' }
  },
  intro: { text: 'YOU ARE INVITED' },
  event: {
    startISO: '2027-01-04T10:00:00+01:00',   // Africa/Lagos (WAT, UTC+1)
    hours: 6,
    dateLong: 'Monday, 4th January 2027',
    dateShort: '4 January 2027',
    time: '10:00 AM',
    city: 'Aba'
  },
  calendar: { title: 'Miracle & Newman’s Wedding', file: 'miracle-newman-wedding.ics',
    details: 'Join us as we celebrate our union in marriage. #NewMiracle2027' },
  colours: [
    { name: 'White / Ivory', hex: '#b8adad' },
    { name: 'Burgundy', hex: '#331313' },
    { name: 'Olive Green', hex: '#1a2b1c' },
    { name: 'Bluish Pink', hex: '#ed93d7' },
    { name: 'Champagne Gold', hex: '#9c8d59', metallic: true }
  ],
  venues: [
    { label: 'Ceremony', name: 'SDA Church', sub: 'Abayi, Aba', address: '',
      mapQuery: 'SDA Church Abayi Aba',
      mapsUrl: 'https://maps.app.goo.gl/mkphvbB15JDBh9Bk7?g_st=ac' },
    { label: 'Reception', name: 'Rev. & Mrs. Dickson John Chimereucheya', sub: 'Umuegesi Kindred',
      address: 'Umuobo Village, Okpu Ancient Kingdom',
      mapQuery: 'Umuobo Village, Okpu Ancient Kingdom', mapsUrl: '' }
  ],
  fatherOfTheDay: { name: '', role: '' },         // leave name empty to hide this section
  hero: {
    interval: 5500,
    slides: [
      { src: 'assets/photos/trad1.webp', w: 864, h: 1080, pos: '50% 30%', alt: 'Miracle and Newman in burgundy traditional attire' },
      { src: 'assets/photos/redstand.webp', w: 864, h: 1080, pos: '50% 28%', alt: 'Miracle and Newman standing together in red and black' },
      { src: 'assets/photos/white1.webp', w: 863, h: 1080, pos: '50% 30%', alt: 'Miracle and Newman dancing in white' },
      { src: 'assets/photos/marble1.webp', w: 720, h: 1080, pos: '50% 25%', alt: 'Newman and Miracle against a marble wall' }
    ]
  },
  story: {
    title: 'From a Simple Hello to a Lifetime of Love',
    intro: 'It all began with a simple Facebook message: “Hello, dear.” What started as an ordinary greeting soon became countless calls, conversations, and my persistent attempts to get her attention. Funny enough, whenever I called, she would ask, “Who is this?” and I would patiently introduce myself all over again. Then came our first date, and somewhere between the conversations, laughter, and growing connection, something beautiful began to unfold. What started as an ordinary friendship slowly became a love story neither of us could have imagined.',
    moments: [
      { label: 'Where it began', title: 'Hello dear', tag: 'Groom to bride', img: 'assets/photos/selfie-sm.webp', w: 520, h: 749, alt: 'Miracle and Newman together, early days' },
      { label: 'Her reply', title: 'Hiii', tag: 'Bride to groom', img: 'assets/photos/redhug-sm.webp', w: 520, h: 650, alt: 'Newman gently touching Miracle’s face' },
      { label: 'And now', title: 'The rest is history', tag: '', img: 'assets/photos/white1-sm.webp', w: 520, h: 651, alt: 'Miracle and Newman dancing in white' }
    ],
    outro: 'Our journey wasn’t without its uncertainties, but through the moments of silence, distance, and doubt, we somehow kept finding our way back to each other. With patience, understanding, grace, and faith, we grew into what we share today. To my Miracle, thank you for choosing us, for being part of my story, and for making this journey worthwhile. I may not promise a perfect life, but I promise to keep choosing you, growing with you, and building a home filled with love, friendship, and God’s presence.',
    closing: 'And to God, who makes all things beautiful in His time, thank You for turning an ordinary “Hello” into an extraordinary forever.'
  },
  gallery: {
    credit: 'Pre-wedding photography by Air Studio',
    photos: [
      { f: 'trad2', w: 520, h: 651, alt: 'Miracle and Newman holding hands in traditional attire' },
      { f: 'redhug', w: 520, h: 650, alt: 'Newman gently touching Miracle’s face' },
      { f: 'white2', w: 520, h: 650, alt: 'A tender kiss on the forehead, both dressed in white' },
      { f: 'marble2', w: 520, h: 780, alt: 'Miracle and Newman leaning on the stair rail' },
      { f: 'closeup', w: 520, h: 636, alt: 'Close-up portrait of Miracle and Newman smiling' },
      { f: 'white1', w: 520, h: 651, alt: 'Miracle and Newman dancing in white' },
      { f: 'redstand', w: 520, h: 650, alt: 'Miracle and Newman standing together in red and black' },
      { f: 'marble1', w: 520, h: 780, alt: 'Newman and Miracle against a marble wall' },
      { f: 'trad1', w: 520, h: 650, alt: 'Miracle and Newman in burgundy traditional attire' }
    ]
  },
  toast: [
    'Here’s to two hearts joined by grace,',
    'and a love that began with a simple “Hello.”',
    'May God be the centre of your home,',
    'and His peace the roof above your heads.',
    'May laughter fill your days and faith carry your nights.',
    'Bound by love, blessed by grace, to Miracle and Newman!'
  ],
  contact: {
    call: ['08162873253', '09037101307'],             // shown + tel: links (Nigerian format)
    whatsapp: ['2348108675826', '2348132342729'],     // international format, no +
    person: 'Our coordinators'
  },
  rsvp: {
    endpoint: '',            // paste your Google Apps Script Web App URL here (see README)
    maxGuests: 10
  },
  gifts: {
    message: 'Your presence is the greatest gift. If you would like to bless us further, you may send a gift using the details below. Thank you for your love and generosity.',
    bank: 'FCMB', name: 'Achor Newman', number: '5555025011'
  },
  faq: {
    dress: 'Dress by default. Asoebi: Bluish Pink.',
    parking: 'Limited parking space, please arrive early.',
    accommodation: 'Accommodation details will be shared soon. In the meantime, please reach out to our coordinators.'
  },
  vendors: [
    ['Event Planner', 'D MIRAVA EVENTS'],
    ['Decorator', 'Fabulous CC Events (FCCE), 200B Obohia Road, Aba'],
    ['Make-up Artist', 'Nehmeh Glam'],
    ['Photographer & Videographer', 'Claris Midia'],
    ['Bride’s Outfit', 'Kaka’s Couture'],
    ['Groom’s Outfit', 'AB Dozzy Fashion Home'],
    ['Entertainment', 'DJ Kellyfan'],
    ['Master of Ceremony', 'The Anchor DMC'],
    ['Website Design', 'G.O.C | Brand Strategist × AI']      // developer credit (last item)
  ],
  developer: {
    name: 'G.O.C | Brand Strategist × AI',
    whatsapp: ''             // G.O.C WhatsApp number, international format, no +. Button stays hidden until filled.
  },
  footer: { thanks: 'Thank you for celebrating with us. Your love, prayers and presence mean the world to us.' },
  share: 'You are invited to celebrate the union of Miracle & Newman, Monday, 4th January 2027. #NewMiracle2027',
  music: { volume: 0.6 },
  pass: { prefix: 'MN27' }
};

/* ==========================================================================
   APP CODE: no need to edit below this line
   ========================================================================== */
window.WEDDING_CONFIG = CONFIG;
(function () {
  'use strict';
  if (!document.getElementById('intro')) return;   // other pages (check-in) only use CONFIG

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var get = function (o, p) { return p.split('.').reduce(function (a, k) { return a == null ? a : a[k]; }, o); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { } }
  };
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var intl = function (n) { n = String(n).replace(/\D/g, ''); return n.charAt(0) === '0' ? '234' + n.slice(1) : n; };
  var C = CONFIG, html = document.documentElement;
  var timers = [];
  var later = function (fn, ms) { var t = setTimeout(fn, ms); timers.push(t); return t; };

  /* ---------- fill text from CONFIG ---------- */
  document.title = C.site.title;
  $$('[data-cfg]').forEach(function (el) { var v = get(C, el.getAttribute('data-cfg')); if (v != null) el.textContent = v; });

  /* ---------- guest name from ?guest= ---------- */
  var qs = new URLSearchParams(location.search);
  var guest = (qs.get('guest') || '').trim().slice(0, 60);
  if (guest) {
    $('#introGuest').textContent = 'Dear ' + guest; $('#introGuest').hidden = false;
    $('#cardGuest').textContent = 'Dear ' + guest + ','; $('#cardGuest').hidden = false;
    $('#fName').value = guest;
  }

  /* ---------- toast ---------- */
  var toastEl = $('#toast'), toastT;
  function toast(msg) { toastEl.textContent = msg; toastEl.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(function () { toastEl.classList.remove('show'); }, 2400); }

  /* ---------- music ---------- */
  var audio = $('#music'), soundBtn = $('#sound'), playing = false, fadeT;
  function soundUI() { soundBtn.setAttribute('aria-pressed', String(playing)); soundBtn.classList.toggle('off', !playing); soundBtn.setAttribute('aria-label', playing ? 'Mute music' : 'Play music'); }
  function fadeTo(v, ms) {
    clearInterval(fadeT); var s = audio.volume, t0 = performance.now();
    fadeT = setInterval(function () { var k = Math.min(1, (performance.now() - t0) / ms); audio.volume = Math.max(0, Math.min(1, s + (v - s) * k)); if (k >= 1) clearInterval(fadeT); }, 50);
  }
  function playMusic() {
    audio.volume = 0; var p = audio.play();
    playing = true; soundUI();
    if (p && p.then) p.then(function () { fadeTo(C.music.volume, 2000); }, function () { playing = false; soundUI(); });
  }
  function pauseMusic() { playing = false; soundUI(); fadeTo(0, 400); setTimeout(function () { if (!playing) audio.pause(); }, 450); }
  soundBtn.addEventListener('click', function () {
    if (playing) { pauseMusic(); store.set('mn27-muted', '1'); } else { playMusic(); store.set('mn27-muted', '0'); }
  });
  soundUI();

  /* ---------- envelope intro ---------- */
  var intro = $('#intro'), env = $('#env'), card = $('#envCard'), flap = $('#envFlap'), seal = $('#seal'), page = $('#page');
  var opened = false, finished = false;
  function cardStart() { var eh = env.offsetHeight; card.style.transform = 'translateY(' + Math.round(eh * 0.3) + 'px)'; }
  function lockPage() { page.inert = true; page.setAttribute('aria-hidden', 'true'); html.classList.add('lock'); }
  function unlockPage() { page.inert = false; page.removeAttribute('aria-hidden'); html.classList.remove('lock'); }
  function finishIntro() {
    if (finished) return; finished = true;
    timers.forEach(clearTimeout);
    intro.classList.add('gone'); unlockPage();
    later(function () { intro.remove(); }, 700);
    try { $('#main').focus({ preventScroll: true }); } catch (e) { }
    startAfterIntro();
  }
  function sparkle() {
    var box = $('#sparks'), n = 16, i;
    for (i = 0; i < n; i++) {
      var s = document.createElement('i'), a = (i / n) * Math.PI * 2 + Math.random() * .4, d = 50 + Math.random() * 60;
      box.appendChild(s);
      s.animate([{ transform: 'translate(-50%,-50%) scale(1)', opacity: 1 }, { transform: 'translate(calc(-50% + ' + Math.cos(a) * d + 'px),calc(-50% + ' + Math.sin(a) * d + 'px)) scale(0)', opacity: 0 }], { duration: 700 + Math.random() * 300, easing: 'ease-out', fill: 'forwards' });
    }
  }
  function openInvite() {
    if (opened) return; opened = true;
    if (store.get('mn27-muted') !== '1') playMusic();
    $('#hint').classList.add('hide'); seal.classList.add('cracked');
    if (reduce || !intro.animate) { intro.classList.add('fade'); later(finishIntro, 500); return; }
    var opt = function (d, e) { return { duration: d, fill: 'forwards', easing: e || 'cubic-bezier(.4,0,.2,1)' }; };
    var halfL = $('.seal-half.l'), halfR = $('.seal-half.r');
    seal.animate([{ transform: 'translate(-50%,-50%) scale(1)' }, { transform: 'translate(-50%,-50%) scale(.86)' }, { transform: 'translate(-50%,-50%) scale(1)' }], opt(260));
    later(function () {
      halfL.animate([{ transform: 'none', opacity: 1 }, { transform: 'translate(-22px,14px) rotate(-22deg)', opacity: 0 }], opt(560));
      halfR.animate([{ transform: 'none', opacity: 1 }, { transform: 'translate(22px,14px) rotate(22deg)', opacity: 0 }], opt(560));
      sparkle();
    }, 240);
    later(function () {
      flap.animate([{ transform: 'rotateX(0deg)' }, { transform: 'rotateX(-180deg)' }], opt(800));
      later(function () { flap.classList.add('open'); }, 380);
    }, 560);
    var eh = env.offsetHeight, ch = card.offsetHeight;
    later(function () {
      card.animate([{ transform: 'translateY(' + Math.round(eh * 0.3) + 'px)' }, { transform: 'translateY(' + Math.round(eh * 0.66 - ch) + 'px)' }], opt(900));
    }, 1200);
    later(function () {
      var cr = card.getBoundingClientRect(), w = cr.width, h = cr.height;
      var fly = card.cloneNode(true); fly.removeAttribute('id'); fly.className = 'env-card fly';
      fly.style.cssText = 'position:fixed;left:' + cr.left + 'px;top:' + cr.top + 'px;width:' + w + 'px;height:' + h + 'px;margin:0;transform:none;z-index:30';
      intro.appendChild(fly); card.style.visibility = 'hidden';
      var s = Math.min(innerWidth * 0.94 / w, innerHeight * 0.8 / h);
      var dx = innerWidth / 2 - (cr.left + w / 2), dy = innerHeight / 2 - (cr.top + h / 2);
      fly.animate([{ transform: 'none' }, { transform: 'translate(' + dx + 'px,' + dy + 'px) scale(' + s + ')' }], opt(850, 'cubic-bezier(.5,0,.2,1)'));
      env.animate([{ transform: 'none', opacity: 1 }, { transform: 'translateY(55vh) scale(.9)', opacity: 0 }], opt(800, 'ease-in'));
      var g = $('#introGuest'); g.animate([{ opacity: 1 }, { opacity: 0 }], opt(300));
    }, 2150);
    later(function () { intro.classList.add('fade'); }, 3000);
    later(finishIntro, 3550);
  }
  seal.addEventListener('click', openInvite);
  $('#skip').addEventListener('click', function () { if (!opened) { opened = true; if (store.get('mn27-muted') !== '1') playMusic(); } timers.forEach(clearTimeout); intro.classList.add('fade'); later(finishIntro, 350); });
  var skipIntro = qs.has('nointro');
  if (!skipIntro) { lockPage(); cardStart(); addEventListener('resize', function () { if (!opened) cardStart(); }); try { seal.focus({ preventScroll: true }); } catch (e) { } }

  /* ---------- hero slider ---------- */
  var slidesEl = $('#heroSlides'), dotsEl = $('#heroDots'), slideEls = [], dotEls = [], cur = 0, sliderT, sliderOn = false;
  C.hero.slides.forEach(function (s, i) {
    var im = document.createElement('img');
    im.className = 'slide' + (i === 0 ? ' on' : ''); im.width = s.w; im.height = s.h; im.alt = i === 0 ? s.alt : s.alt; im.style.objectPosition = s.pos;
    if (i === 0) { im.src = s.src; im.fetchPriority = 'high'; } else { im.setAttribute('data-src', s.src); im.alt = s.alt; }
    slidesEl.appendChild(im); slideEls.push(im);
    var d = document.createElement('button'); d.type = 'button'; d.className = 'dot' + (i === 0 ? ' on' : ''); d.setAttribute('aria-label', 'Show photo ' + (i + 1));
    d.addEventListener('click', function () { show(i); restartSlider(); });
    dotsEl.appendChild(d); dotEls.push(d);
  });
  function show(n) {
    n = (n + slideEls.length) % slideEls.length; if (n === cur) return;
    var nxt = slideEls[n];
    if (!nxt.src) nxt.src = nxt.getAttribute('data-src');
    var prev = slideEls[cur];
    prev.classList.remove('on'); prev.classList.add('prev'); nxt.classList.add('on');
    setTimeout(function () { prev.classList.remove('prev'); }, 1900);
    dotEls[cur].classList.remove('on'); dotEls[n].classList.add('on'); cur = n;
  }
  function restartSlider() { clearInterval(sliderT); if (sliderOn && !reduce && slideEls.length > 1) sliderT = setInterval(function () { if (!document.hidden) show(cur + 1); }, C.hero.interval); }
  function startAfterIntro() {
    slideEls.forEach(function (im) { if (!im.src && im.getAttribute('data-src')) im.src = im.getAttribute('data-src'); });
    sliderOn = true; restartSlider();
    if (store.get('mn27-muted') !== '1' && qs.has('nointro')) { /* music waits for the speaker button */ }
  }

  /* ---------- swatches ---------- */
  $('#cardSwatches').innerHTML = C.colours.map(function (c) {
    return '<li><span class="sw' + (c.metallic ? ' metal' : '') + '" style="--c:' + esc(c.hex) + '"></span><small>' + esc(c.name) + '</small></li>';
  }).join('');

  /* ---------- countdown + calendar ---------- */
  var start = new Date(C.event.startISO), end = new Date(start.getTime() + C.event.hours * 3600e3);
  var cdEl = { d: $('#cdD'), h: $('#cdH2'), m: $('#cdM'), s: $('#cdS') };
  function setCd(el, v) { if (el.textContent !== v) { el.textContent = v; el.classList.remove('flip'); void el.offsetWidth; if (!reduce) el.classList.add('flip'); } }
  function tick() {
    var now = Date.now(), ms = start - now, done = $('#cdDone');
    if (ms <= 0) {
      $('#cd').hidden = true; done.hidden = false;
      done.textContent = now >= end ? 'We are married! Thank you for celebrating with us.' : 'Today is the day! The celebration is underway.';
      return;
    }
    var s = Math.floor(ms / 1000), d = Math.floor(s / 86400), h = Math.floor(s % 86400 / 3600), m = Math.floor(s % 3600 / 60);
    setCd(cdEl.d, String(d)); setCd(cdEl.h, String(h).padStart(2, '0')); setCd(cdEl.m, String(m).padStart(2, '0')); setCd(cdEl.s, String(s % 60).padStart(2, '0'));
  }
  tick(); setInterval(tick, 1000);
  var ymd = function (d) { return d.toISOString().replace(/[-:]|\.\d{3}/g, ''); };
  var loc = C.venues[0].name + ', ' + C.venues[0].sub;
  $('#gcal').href = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent(C.calendar.title) +
    '&dates=' + ymd(start) + '/' + ymd(end) + '&details=' + encodeURIComponent(C.calendar.details + ' ' + C.site.url) + '&location=' + encodeURIComponent(loc) + '&ctz=' + encodeURIComponent('Africa/Lagos');
  $('#ics').addEventListener('click', function () {
    var t = function (s) { return String(s).replace(/\\/g, '\\\\').replace(/([,;])/g, '\\$1').replace(/\n/g, '\\n'); };
    var ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Miracle and Newman//Wedding//EN', 'CALSCALE:GREGORIAN', 'BEGIN:VEVENT',
      'UID:newmiracle2027-' + start.getTime() + '@wedding', 'DTSTAMP:' + ymd(new Date()), 'DTSTART:' + ymd(start), 'DTEND:' + ymd(end),
      'SUMMARY:' + t(C.calendar.title), 'LOCATION:' + t(loc), 'DESCRIPTION:' + t(C.calendar.details + ' ' + C.site.url), 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' }));
    a.download = C.calendar.file; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
  });

  /* ---------- venues ---------- */
  $('#venueGrid').innerHTML = C.venues.map(function (v) {
    var open = v.mapsUrl || 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(v.mapQuery);
    var dir = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(v.mapQuery);
    return '<article class="venue reveal"><p class="pill">' + esc(v.label) + '</p><h3>' + esc(v.name) + '</h3><p class="v-sub">' + esc(v.sub) + '</p>' +
      (v.address ? '<p class="v-addr">' + esc(v.address) + '</p>' : '') +
      '<div class="btn-row"><a class="btn primary" target="_blank" rel="noopener" href="' + esc(open) + '">Open in Google Maps</a><a class="btn outline" target="_blank" rel="noopener" href="' + esc(dir) + '">Get directions</a></div></article>';
  }).join('');

  /* ---------- father of the day ---------- */
  if (C.fatherOfTheDay.name) { $('#father').hidden = false; $('#fodName').textContent = C.fatherOfTheDay.name; $('#fodRole').textContent = C.fatherOfTheDay.role; }

  /* ---------- story ---------- */
  $('#timeline').innerHTML = C.story.moments.map(function (m) {
    return '<article class="moment reveal"><figure class="frame"><img src="' + esc(m.img) + '" width="' + m.w + '" height="' + m.h + '" alt="' + esc(m.alt) + '" loading="lazy"></figure>' +
      '<p class="m-label">' + esc(m.label) + '</p><h3>' + esc(m.title) + '</h3>' + (m.tag ? '<p class="m-tag">' + esc(m.tag) + '</p>' : '') + '</article>';
  }).join('');

  /* ---------- gallery + lightbox ---------- */
  var P = C.gallery.photos, lbEl = $('#lb'), lbImg = $('#lbImg'), li = 0, lbFrom = null;
  $('#masonry').innerHTML = P.map(function (p, i) {
    return '<button type="button" class="g-item reveal" data-i="' + i + '" aria-label="Open photo ' + (i + 1) + ': ' + esc(p.alt) + '"><img src="assets/photos/' + p.f + '-sm.webp" width="' + p.w + '" height="' + p.h + '" alt="' + esc(p.alt) + '" loading="lazy"></button>';
  }).join('');
  function lbShow(i) {
    li = (i + P.length) % P.length;
    lbImg.src = 'assets/photos/' + P[li].f + '.webp'; lbImg.alt = P[li].alt;
    $('#lbCap').textContent = P[li].alt; $('#lbCount').textContent = (li + 1) + ' / ' + P.length;
  }
  function lbOpen(i, from) { lbFrom = from; lbShow(i); lbEl.hidden = false; html.classList.add('lock'); $('#lbX').focus(); }
  function lbClose() { lbEl.hidden = true; if (finished) html.classList.remove('lock'); if (lbFrom) lbFrom.focus(); }
  $('#masonry').addEventListener('click', function (e) { var b = e.target.closest('.g-item'); if (b) lbOpen(+b.getAttribute('data-i'), b); });
  $('#lbX').onclick = lbClose; $('#lbP').onclick = function () { lbShow(li - 1); }; $('#lbN').onclick = function () { lbShow(li + 1); };
  lbEl.addEventListener('click', function (e) { if (e.target === lbEl) lbClose(); });
  document.addEventListener('keydown', function (e) {
    if (lbEl.hidden) return;
    if (e.key === 'Escape') lbClose();
    else if (e.key === 'ArrowLeft') lbShow(li - 1);
    else if (e.key === 'ArrowRight') lbShow(li + 1);
    else if (e.key === 'Tab') {
      var f = [$('#lbX'), $('#lbP'), $('#lbN')], i = f.indexOf(document.activeElement);
      e.preventDefault(); f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });
  lbImg.draggable = false; lbImg.addEventListener('dragstart', function (e) { e.preventDefault(); });
  var sx = null;
  lbEl.addEventListener('pointerdown', function (e) { sx = e.clientX; });
  lbEl.addEventListener('pointerup', function (e) { if (sx == null) return; var dx = e.clientX - sx; sx = null; if (Math.abs(dx) > 50) lbShow(li + (dx < 0 ? 1 : -1)); });

  /* ---------- toast lines ---------- */
  $('#toastLines').innerHTML = C.toast.map(function (l, i) {
    return '<p class="toast-line reveal' + (i === C.toast.length - 1 ? ' hl' : '') + '">' + esc(l) + '</p>';
  }).join('');

  /* ---------- contacts ---------- */
  var tel = function (n) { return '+' + intl(n); };
  $('#callRsvp').href = 'tel:' + tel(C.contact.call[0]);
  $('#contactLine').innerHTML = 'Call: ' + C.contact.call.map(function (n) { return '<a href="tel:' + tel(n) + '">' + esc(n) + '</a>'; }).join(' &middot; ') +
    '<br>WhatsApp: ' + C.contact.whatsapp.map(function (n) { return '<a target="_blank" rel="noopener" href="https://wa.me/' + intl(n) + '">0' + esc(intl(n).slice(3)) + '</a>'; }).join(' &middot; ');

  /* ---------- FAQ ---------- */
  var sw = C.colours.filter(function (c) { return c.name === 'Bluish Pink'; });
  var faq = [
    { q: 'What is the dress code?', a: '<p>' + esc(C.faq.dress) + '</p>' + (sw.length ? '<ul class="swatches mini">' + sw.map(function (c) { return '<li><span class="sw" style="--c:' + esc(c.hex) + '"></span><small>' + esc(c.name) + '</small></li>'; }).join('') + '</ul>' : '') },
    { q: 'Where can I park?', a: '<p>' + esc(C.faq.parking) + '</p>' },
    { q: 'Where can I stay?', a: '<p>' + esc(C.faq.accommodation) + '</p>' },
    { q: 'Who do I contact?', a: '<p>' + esc(C.contact.person) + ':</p><p>Call ' + C.contact.call.map(function (n) { return '<a href="tel:' + tel(n) + '">' + esc(n) + '</a>'; }).join(' or ') + '<br>WhatsApp ' + C.contact.whatsapp.map(function (n) { return '<a target="_blank" rel="noopener" href="https://wa.me/' + intl(n) + '">0' + esc(intl(n).slice(3)) + '</a>'; }).join(' or ') + '</p>' },
    { q: 'Who created this beautiful wedding website?', a: '<p>This website was proudly designed by <strong>' + esc(C.developer.name) + '</strong>, where we create beautiful, personalized digital wedding experiences.</p><p>Planning your wedding? Let’s create yours too!</p>' +
      (C.developer.whatsapp ? '<p><a class="btn wa" target="_blank" rel="noopener" href="https://wa.me/' + intl(C.developer.whatsapp) + '?text=' + encodeURIComponent('Hello! I saw the ' + C.couple.short + ' wedding website and I would love one for my wedding.') + '">Chat with us on WhatsApp</a></p>' : '') }
  ];
  $('#acc-list').innerHTML = faq.map(function (f, i) {
    return '<div class="acc-item"><h3><button type="button" class="acc-btn" id="ab' + i + '" aria-expanded="false" aria-controls="ap' + i + '">' + esc(f.q) + '<span class="pm" aria-hidden="true"></span></button></h3>' +
      '<div class="acc-panel" id="ap' + i + '" role="region" aria-labelledby="ab' + i + '"><div><div class="acc-in">' + f.a + '</div></div></div></div>';
  }).join('');
  $('#acc-list').addEventListener('click', function (e) {
    var b = e.target.closest('.acc-btn'); if (!b) return;
    var item = b.parentNode.parentNode, was = item.classList.contains('open');
    $$('.acc-item.open').forEach(function (o) { o.classList.remove('open'); $('.acc-btn', o).setAttribute('aria-expanded', 'false'); });
    if (!was) { item.classList.add('open'); b.setAttribute('aria-expanded', 'true'); }
  });

  /* ---------- vendors ---------- */
  $('#vendorList').innerHTML = C.vendors.map(function (v) { return '<li><span>' + esc(v[0]) + '</span><b>' + esc(v[1]) + '</b></li>'; }).join('');

  /* ---------- gifts: copy account number ---------- */
  $('#copyAcc').addEventListener('click', function () {
    var n = C.gifts.number;
    function fallback() { var t = document.createElement('textarea'); t.value = n; t.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch (e) { } t.remove(); toast('Account number copied'); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(n).then(function () { toast('Account number copied'); }, fallback); else fallback();
  });

  /* ---------- share ---------- */
  $('#shareWa').addEventListener('click', function () { window.open('https://wa.me/?text=' + encodeURIComponent(C.share + ' ' + C.site.url), '_blank', 'noopener'); });

  /* ==================== RSVP + QR ENTRY PASS ==================== */
  var form = $('#rsvpForm'), gsel = $('#fGuests'), g;
  for (g = 1; g <= C.rsvp.maxGuests; g++) gsel.add(new Option(g + (g === 1 ? ' guest' : ' guests'), g));
  $$('input[name=attending]').forEach(function (r) { r.addEventListener('change', function () { $('#guestsField').hidden = r.value === 'no' && r.checked; }); });
  var digits = function (s) { return String(s).replace(/\D/g, ''); };
  function setErr(id, msg, input) { $(id).textContent = msg; if (input) input.setAttribute('aria-invalid', msg ? 'true' : 'false'); }
  function newCode() {
    var A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789', a = new Uint8Array(8), s = '', i;
    (window.crypto || window.msCrypto).getRandomValues(a);
    for (i = 0; i < 8; i++) s += A[a[i] % A.length];
    return C.pass.prefix + '-' + s;
  }
  function savedPass() { try { return JSON.parse(store.get('mn27-pass') || 'null'); } catch (e) { return null; } }
  var passUrl = function (code) { return C.site.url + 'checkin.html?c=' + encodeURIComponent(code); };
  function loadQR(cb) {
    if (window.QR) return cb(true);
    var s = document.createElement('script'); s.src = 'qr.js'; s.onload = function () { cb(true); }; s.onerror = function () { cb(false); }; document.head.appendChild(s);
  }
  function showPass(p) {
    var box = $('#pass'); box.hidden = false;
    $('#passName').textContent = p.name; $('#passCode').textContent = p.code;
    $('#passMeta').textContent = p.guests + (p.guests === 1 ? ' guest' : ' guests') + ' · ' + C.event.dateShort + ' · ' + C.event.time;
    loadQR(function (ok) {
      var cv = $('#qrCanvas');
      if (ok) { QR.draw(cv, passUrl(p.code), 400, { dark: '#331313', light: '#faf7f4', quiet: 2 }); }
      else { cv.hidden = true; }
    });
    $('#passDl').onclick = function () { downloadPass(p); };
  }
  function showDone(p, attending, returning) {
    form.hidden = true; var d = $('#rsvpDone'); d.hidden = false;
    $('#noEndpoint').hidden = true;
    if (attending) {
      $('#doneTitle').textContent = returning ? 'Your entry pass' : 'Thank you, ' + p.name.split(' ')[0] + '!';
      $('#doneText').textContent = returning ? 'Show this QR code when you arrive.' : 'We are so happy you will be joining us. Here is your personal entry pass.';
      showPass(p);
    } else {
      $('#pass').hidden = true; $('#doneTitle').textContent = 'Thank you, ' + p.name.split(' ')[0];
      $('#doneText').textContent = 'We will miss you, and we are grateful you let us know. You will be in our hearts on the day.';
    }
    var back = $('#rsvpBack');
    if (!back) { back = document.createElement('button'); back.id = 'rsvpBack'; back.type = 'button'; back.className = 'link-btn'; back.textContent = 'Update my RSVP'; d.appendChild(back); back.addEventListener('click', function () { d.hidden = true; form.hidden = false; $('#fName').focus(); }); }
    d.focus({ preventScroll: false });
  }
  function downloadPass(p) {
    var go = function () {
      loadQR(function (ok) {
        var W = 900, H = 1240, c = document.createElement('canvas'); c.width = W; c.height = H; var x = c.getContext('2d');
        x.fillStyle = '#ece6e2'; x.fillRect(0, 0, W, H);
        x.fillStyle = '#331313'; x.fillRect(0, 0, W, 200);
        x.strokeStyle = '#9c8d59'; x.lineWidth = 3; x.strokeRect(24, 24, W - 48, H - 48); x.lineWidth = 1; x.strokeRect(36, 36, W - 72, H - 72);
        x.textAlign = 'center'; x.fillStyle = '#c9bb85'; x.font = '600 44px Cinzel, Georgia, serif'; x.fillText('ENTRY PASS', W / 2, 105);
        x.font = '28px Montserrat, Arial, sans-serif'; x.fillText(C.couple.hashtag, W / 2, 158);
        x.fillStyle = '#331313'; x.font = '600 46px Cinzel, Georgia, serif'; x.fillText(C.couple.short.toUpperCase(), W / 2, 290);
        x.font = 'italic 32px "Cormorant Garamond", Georgia, serif'; x.fillText(C.event.dateLong + ' · ' + C.event.time, W / 2, 340);
        if (ok) { var q = document.createElement('canvas'); QR.draw(q, passUrl(p.code), 560, { dark: '#331313', light: '#faf7f4', quiet: 2 }); x.drawImage(q, (W - 560) / 2, 380, 560, 560); }
        x.font = '600 52px Montserrat, Arial, sans-serif'; x.fillStyle = '#331313'; x.fillText(p.code, W / 2, 1010);
        x.font = '600 40px "Cormorant Garamond", Georgia, serif'; x.fillText(p.name, W / 2, 1076);
        x.font = '30px "Cormorant Garamond", Georgia, serif'; x.fillText(p.guests + (p.guests === 1 ? ' guest' : ' guests') + '  ·  Please show this pass at the entrance', W / 2, 1130);
        x.fillStyle = '#6f6538'; x.font = '24px Montserrat, Arial, sans-serif'; x.fillText(C.couple.tagline, W / 2, 1176);
        c.toBlob(function (b) { var a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'entry-pass-' + p.code + '.png'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000); }, 'image/png');
      });
    };
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(go);
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements, name = f.name.value.trim(), phone = f.phone.value.trim(), att = (form.querySelector('input[name=attending]:checked') || {}).value, ok = true;
    setErr('#eName', '', f.name); setErr('#ePhone', '', f.phone); setErr('#eAtt', ''); $('#eForm').textContent = '';
    if (name.length < 2) { setErr('#eName', 'Please enter your full name.', f.name); ok = false; }
    if (digits(phone).length < 7 || digits(phone).length > 15) { setErr('#ePhone', 'Please enter a valid phone number.', f.phone); ok = false; }
    if (!att) { setErr('#eAtt', 'Please choose one option.'); ok = false; }
    if (!ok) { var bad = form.querySelector('[aria-invalid=true]') || form.querySelector('input[name=attending]'); bad.focus(); return; }
    var guests = att === 'yes' ? +gsel.value : 0;
    if (f.website.value) { showDone({ name: name, guests: guests, code: '' }, false); return; }   // honeypot: bots see a fake success
    if (!C.rsvp.endpoint) { $('#noEndpoint').hidden = false; $('#noEndpoint').scrollIntoView({ block: 'center' }); return; }
    var sp = savedPass(), code = '';
    if (att === 'yes') code = (sp && sp.code && digits(sp.phone) === digits(phone)) ? sp.code : newCode();
    else if (sp && sp.code && digits(sp.phone) === digits(phone)) code = sp.code;     // keeps the same row if they change their mind
    var payload = { name: name, phone: phone, attending: att, guests: guests, message: f.message.value.trim(), code: code, passUrl: code ? passUrl(code) : '', website: '', sentAt: new Date().toISOString() };
    var btn = $('#rsvpBtn'); btn.disabled = true; btn.textContent = 'Sending…';
    var ctl = window.AbortController ? new AbortController() : null, to = setTimeout(function () { if (ctl) ctl.abort(); }, 20000);
    fetch(C.rsvp.endpoint, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload), signal: ctl ? ctl.signal : undefined })
      .then(function () {
        clearTimeout(to); btn.disabled = false; btn.textContent = 'Send RSVP';
        var p = { name: name, phone: phone, guests: guests, code: code, attending: att };
        store.set('mn27-pass', JSON.stringify(p));
        showDone(p, att === 'yes'); $('#myPass').hidden = att !== 'yes';
      }, function () {
        clearTimeout(to); btn.disabled = false; btn.textContent = 'Send RSVP';
        $('#eForm').textContent = 'Sorry, we could not send your RSVP. Please check your connection or use the WhatsApp or Call buttons below.';
      });
  });
  var sp0 = savedPass();
  if (sp0 && sp0.attending === 'yes' && sp0.code) {
    $('#myPass').hidden = false;
    $('#myPass').addEventListener('click', function () { showDone(sp0 = savedPass(), true, true); $('#rsvpDone').scrollIntoView({ block: 'center' }); });
  }
  $('#waRsvp').addEventListener('click', function () {
    var n = $('#fName').value.trim() || guest || '', att = (form.querySelector('input[name=attending]:checked') || {}).value;
    var msg = 'Hello! This is ' + (n || '[my name]') + '. ' + (att === 'no' ? 'Regrettably, I will not be able to attend' : 'I will be attending') + ' the wedding of ' + C.couple.short + ' on ' + C.event.dateShort + '.' + (att !== 'no' ? ' Number of guests: ' + gsel.value + '.' : '');
    this.href = 'https://wa.me/' + intl(C.contact.whatsapp[0]) + '?text=' + encodeURIComponent(msg);
  });
  $('#waRsvp').href = 'https://wa.me/' + intl(C.contact.whatsapp[0]);

  if (skipIntro) { opened = true; finished = true; intro.remove(); startAfterIntro(); }

  /* ---------- reveal on scroll ---------- */
  var rv = $$('.reveal');
  if (reduce || !('IntersectionObserver' in window)) rv.forEach(function (el) { el.classList.add('in'); });
  else {
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }); }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    rv.forEach(function (el) { io.observe(el); });
  }
})();
