/* Tiny QR-code generator (byte mode, error correction M, versions 1-6 = up to 106 characters).
   Written for this site, no dependencies.  Usage: QR.draw(canvas, "text", pixelSize) */
(function (g) {
  'use strict';
  // [ecCodewordsPerBlock, blockCount, dataCodewordsPerBlock] for level M
  var EC = { 1: [10, 1, 16], 2: [16, 1, 28], 3: [26, 1, 44], 4: [18, 2, 32], 5: [24, 2, 43], 6: [16, 4, 27] };
  var ALIGN = { 1: [], 2: [6, 18], 3: [6, 22], 4: [6, 26], 5: [6, 30], 6: [6, 34] };
  var EXP = [], LOG = [], x = 1, i;
  for (i = 0; i < 255; i++) { EXP[i] = x; LOG[x] = i; x <<= 1; if (x & 256) x ^= 0x11d; }
  for (i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
  function mul(a, b) { return a && b ? EXP[LOG[a] + LOG[b]] : 0; }
  function rsGen(n) {
    var p = [1], q, j, k;
    for (k = 0; k < n; k++) { q = []; for (j = 0; j <= p.length; j++) q[j] = 0;
      for (j = 0; j < p.length; j++) { q[j] ^= p[j]; q[j + 1] ^= mul(p[j], EXP[k]); } p = q; }
    return p;
  }
  function rsEnc(data, n) {
    var gen = rsGen(n), res = data.slice(), j, k, c;
    for (k = 0; k < n; k++) res.push(0);
    for (k = 0; k < data.length; k++) { c = res[k]; if (c) for (j = 0; j < gen.length; j++) res[k + j] ^= mul(gen[j], c); }
    return res.slice(data.length);
  }
  function utf8(s) { var o = [], b = unescape(encodeURIComponent(s)), k; for (k = 0; k < b.length; k++) o.push(b.charCodeAt(k)); return o; }
  function fmtBits(mask) {
    var d = mask, r = d << 10, k;
    for (k = 14; k >= 10; k--) if ((r >> k) & 1) r ^= 0x537 << (k - 10);
    return ((d << 10) | r) ^ 0x5412;
  }
  function make(text) {
    var bytes = utf8(text), v, ec;
    for (v = 1; v <= 6; v++) { ec = EC[v]; if (ec[1] * ec[2] * 8 >= 12 + bytes.length * 8) break; }
    if (v > 6) throw new Error('QR text too long');
    var total = ec[1] * ec[2], bits = [];
    function put(val, len) { for (var k = len - 1; k >= 0; k--) bits.push((val >> k) & 1); }
    put(4, 4); put(bytes.length, 8); bytes.forEach(function (b) { put(b, 8); });
    for (i = 0; i < 4 && bits.length < total * 8; i++) bits.push(0);
    while (bits.length % 8) bits.push(0);
    var data = [], pad = [0xec, 0x11];
    for (i = 0; i < bits.length; i += 8) { var by = 0; for (var k = 0; k < 8; k++) by = (by << 1) | bits[i + k]; data.push(by); }
    for (i = 0; data.length < total; i++) data.push(pad[i % 2]);
    // blocks + interleave
    var blocks = [], ecs = [];
    for (i = 0; i < ec[1]; i++) { var bl = data.slice(i * ec[2], (i + 1) * ec[2]); blocks.push(bl); ecs.push(rsEnc(bl, ec[0])); }
    var out = [];
    for (i = 0; i < ec[2]; i++) blocks.forEach(function (b) { out.push(b[i]); });
    for (i = 0; i < ec[0]; i++) ecs.forEach(function (b) { out.push(b[i]); });
    var size = 17 + 4 * v, m = [], fn = [], r, c;
    for (r = 0; r < size; r++) { m.push([]); fn.push([]); for (c = 0; c < size; c++) { m[r].push(false); fn[r].push(false); } }
    function setF(cx, cy, dark) { m[cy][cx] = dark; fn[cy][cx] = true; }
    function finder(cx, cy) {
      for (var dy = -4; dy <= 4; dy++) for (var dx = -4; dx <= 4; dx++) {
        var xx = cx + dx, yy = cy + dy;
        if (xx >= 0 && xx < size && yy >= 0 && yy < size) { var d = Math.max(Math.abs(dx), Math.abs(dy)); setF(xx, yy, d !== 2 && d !== 4); }
      }
    }
    for (i = 0; i < size; i++) { setF(6, i, i % 2 === 0); setF(i, 6, i % 2 === 0); }
    finder(3, 3); finder(size - 4, 3); finder(3, size - 4);
    var ap = ALIGN[v];
    ap.forEach(function (ay) { ap.forEach(function (ax) {
      if ((ax === 6 && ay === 6) || (ax === 6 && ay === ap[ap.length - 1]) || (ay === 6 && ax === ap[ap.length - 1])) return;
      for (var dy = -2; dy <= 2; dy++) for (var dx = -2; dx <= 2; dx++) setF(ax + dx, ay + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
    }); });
    function drawFormat(mask) {
      var f = fmtBits(mask), k;
      function b(n) { return ((f >> n) & 1) === 1; }
      for (k = 0; k <= 5; k++) setF(8, k, b(k));
      setF(8, 7, b(6)); setF(8, 8, b(7)); setF(7, 8, b(8));
      for (k = 9; k < 15; k++) setF(14 - k, 8, b(k));
      for (k = 0; k < 8; k++) setF(size - 1 - k, 8, b(k));
      for (k = 8; k < 15; k++) setF(8, size - 15 + k, b(k));
      setF(8, size - 8, true);
    }
    drawFormat(0);
    // place data
    var n = 0, right, vert, j, up, yy;
    for (right = size - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;
      for (vert = 0; vert < size; vert++) for (j = 0; j < 2; j++) {
        var xx = right - j; up = ((right + 1) & 2) === 0; yy = up ? size - 1 - vert : vert;
        if (!fn[yy][xx] && n < out.length * 8) { m[yy][xx] = ((out[n >> 3] >> (7 - (n & 7))) & 1) === 1; n++; }
      }
    }
    var MASKS = [
      function (x, y) { return (x + y) % 2 === 0; }, function (x, y) { return y % 2 === 0; },
      function (x, y) { return x % 3 === 0; }, function (x, y) { return (x + y) % 3 === 0; },
      function (x, y) { return (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0; },
      function (x, y) { return (x * y) % 2 + (x * y) % 3 === 0; },
      function (x, y) { return ((x * y) % 2 + (x * y) % 3) % 2 === 0; },
      function (x, y) { return ((x + y) % 2 + (x * y) % 3) % 2 === 0; }];
    function penalty(mm) {
      var p = 0, a, b, run, prev, dark = 0, s1, s2;
      for (a = 0; a < size; a++) {
        s1 = ''; s2 = '';
        for (b = 0; b < size; b++) { s1 += mm[a][b] ? 1 : 0; s2 += mm[b][a] ? 1 : 0; if (mm[a][b]) dark++; }
        [s1, s2].forEach(function (s) {
          run = 1; for (var k = 1; k <= s.length; k++) { if (s[k] === s[k - 1]) run++; else { if (run >= 5) p += 3 + run - 5; run = 1; } }
          var pos = -1; while ((pos = s.indexOf('10111010000', pos + 1)) >= 0) p += 40;
          pos = -1; while ((pos = s.indexOf('00001011101', pos + 1)) >= 0) p += 40;
        });
      }
      for (a = 0; a < size - 1; a++) for (b = 0; b < size - 1; b++) if (mm[a][b] === mm[a][b + 1] && mm[a][b] === mm[a + 1][b] && mm[a][b] === mm[a + 1][b + 1]) p += 3;
      var tot = size * size; p += (Math.ceil(Math.abs(dark * 20 - tot * 10) / tot) - 1) * 10;
      return p;
    }
    var best = null, bestP = 1e9, mk;
    var base = m.map(function (row) { return row.slice(); });
    for (mk = 0; mk < 8; mk++) {
      m = base.map(function (row) { return row.slice(); });
      for (r = 0; r < size; r++) for (c = 0; c < size; c++) if (!fn[r][c] && MASKS[mk](c, r)) m[r][c] = !m[r][c];
      drawFormat(mk);
      var pe = penalty(m); if (pe < bestP) { bestP = pe; best = m.map(function (row) { return row.slice(); }); }
    }
    return { size: size, version: v, get: function (cx, cy) { return best[cy][cx]; } };
  }
  function draw(canvas, text, px, opt) {
    opt = opt || {};
    var q = make(text), quiet = opt.quiet == null ? 4 : opt.quiet, mod = Math.max(2, Math.floor(px / (q.size + quiet * 2)));
    var side = mod * (q.size + quiet * 2); canvas.width = canvas.height = side;
    var ctx = canvas.getContext('2d'); ctx.fillStyle = opt.light || '#ffffff'; ctx.fillRect(0, 0, side, side);
    ctx.fillStyle = opt.dark || '#000000';
    for (var r = 0; r < q.size; r++) for (var c = 0; c < q.size; c++) if (q.get(c, r)) ctx.fillRect((c + quiet) * mod, (r + quiet) * mod, mod, mod);
    return canvas;
  }
  g.QR = { make: make, draw: draw };
})(window);
