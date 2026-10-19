// Desain barcode: bentuk (hati, lingkaran, dll.), gaya titik, dan bingkai bertulisan.
// Semua digambar ke <canvas>, sehingga pratinjau dan PNG yang diunduh identik.
window.INB_DESIGN = (function () {
  'use strict';

  // Jenis 2D dengan modul persegi yang bisa digambar ulang
  var SHAPEABLE = /qrcode|datamatrix|aztec|hanxin/;
  var QR_FULL = /^(qrcode|gs1qrcode|gs1dlqrcode|hibcqrcode)$/;
  var QR_ONE_FINDER = /^(microqrcode|rectangularmicroqrcode)$/;
  var QUIET = 1; // jarak (modul) antara kode asli dan hiasan; teruji tetap terbaca

  // Swiss QR wajib tampil baku (standar tagihan Swiss) dan salibnya tidak sejajar grid modul
  function shapeable(bcid) { return SHAPEABLE.test(bcid || '') && bcid !== 'swissqrcode'; }

  // ---------- Membaca pola modul dari hasil bwip-js ----------
  function readMatrix(opts) {
    var o = {};
    Object.keys(opts).forEach(function (k) { o[k] = opts[k]; });
    o.scale = 2; // bwip-js menggambar 2 x skala piksel per modul -> 4 px
    o.padding = 0;
    o.rotate = 'N';
    o.barcolor = '000000';
    o.backgroundcolor = 'FFFFFF';
    delete o.textcolor;
    delete o.includetext;
    delete o.height;
    var c = document.createElement('canvas');
    bwipjs.toCanvas(c, o);
    var px = 4;
    var cols = Math.round(c.width / px), rows = Math.round(c.height / px);
    var data = c.getContext('2d', { willReadFrequently: true }).getImageData(0, 0, c.width, c.height).data;
    var m = [];
    for (var r = 0; r < rows; r++) {
      var row = [];
      for (var q = 0; q < cols; q++) {
        var i = ((r * px + 2) * c.width + (q * px + 2)) * 4;
        row.push(data[i] < 128);
      }
      m.push(row);
    }
    return { rows: rows, cols: cols, dark: m };
  }

  // Area penanda (finder) QR yang selalu digambar utuh agar mudah dipindai
  function finders(bcid, rows, cols) {
    if (QR_FULL.test(bcid)) return [[0, 0], [0, cols - 7], [rows - 7, 0]];
    if (QR_ONE_FINDER.test(bcid)) return [[0, 0]];
    return [];
  }
  function inFinder(list, r, c) {
    for (var i = 0; i < list.length; i++) {
      if (r >= list[i][0] && r < list[i][0] + 7 && c >= list[i][1] && c < list[i][1] + 7) return true;
    }
    return false;
  }

  // ---------- Bentuk luar ----------
  function polygon(points) {
    return function (p, x, y, s) {
      points.forEach(function (pt, i) {
        var px = x + pt[0] * s, py = y + pt[1] * s;
        if (i) p.lineTo(px, py); else p.moveTo(px, py);
      });
      p.closePath();
    };
  }
  function regular(n, rot) {
    var pts = [];
    for (var i = 0; i < n; i++) {
      var a = rot + i * 2 * Math.PI / n;
      pts.push([0.5 + 0.5 * Math.cos(a), 0.5 + 0.5 * Math.sin(a)]);
    }
    return pts;
  }
  function fitPoints(pts) {
    // Skalakan titik agar memenuhi kotak 0..1 dengan proporsi tetap
    var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    pts.forEach(function (p) {
      minX = Math.min(minX, p[0]); maxX = Math.max(maxX, p[0]);
      minY = Math.min(minY, p[1]); maxY = Math.max(maxY, p[1]);
    });
    var w = maxX - minX, h = maxY - minY, k = 1 / Math.max(w, h);
    var ox = (1 - w * k) / 2, oy = (1 - h * k) / 2;
    return pts.map(function (p) { return [(p[0] - minX) * k + ox, (p[1] - minY) * k + oy]; });
  }
  var heartPts = (function () {
    var pts = [];
    for (var i = 0; i < 120; i++) {
      var t = i / 120 * 2 * Math.PI;
      pts.push([16 * Math.pow(Math.sin(t), 3), -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))]);
    }
    return fitPoints(pts);
  })();
  var starPts = (function () {
    var pts = [];
    for (var i = 0; i < 10; i++) {
      var a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? 0.5 : 1;
      pts.push([Math.cos(a) * r, Math.sin(a) * r]);
    }
    return fitPoints(pts);
  })();

  var SHAPES = {
    square: null,
    circle: function (p, x, y, s) { p.arc(x + s / 2, y + s / 2, s / 2, 0, Math.PI * 2); },
    heart: polygon(heartPts),
    hexagon: polygon(fitPoints(regular(6, -Math.PI / 2))),
    octagon: polygon(regular(8, Math.PI / 8).map(function (p) {
      var k = 1 / Math.cos(Math.PI / 8); return [0.5 + (p[0] - 0.5) * k, 0.5 + (p[1] - 0.5) * k];
    })),
    star: polygon(starPts),
    diamond: polygon([[0.5, 0], [1, 0.5], [0.5, 1], [0, 0.5]])
  };

  function shapePath(name, x, y, s) {
    var p = new Path2D();
    SHAPES[name](p, x, y, s);
    return p;
  }

  // Kotak terbesar (pusat & setengah sisi, skala 0..1) yang muat di dalam bentuk
  var fitCache = {};
  var probe = document.createElement('canvas').getContext('2d');
  function inscribed(name) {
    if (fitCache[name]) return fitCache[name];
    var S = 400, path = shapePath(name, 0, 0, S), best = { cy: 0.5, h: 0 };
    function fits(cy, h) {
      for (var i = 0; i <= 24; i++) {
        var f = i / 24;
        var xs = [0.5 - h + 2 * h * f, 0.5 + h, 0.5 + h - 2 * h * f, 0.5 - h];
        var ys = [cy - h, cy - h + 2 * h * f, cy + h, cy + h - 2 * h * f];
        for (var j = 0; j < 4; j++) if (!probe.isPointInPath(path, xs[j] * S, ys[j] * S)) return false;
      }
      return true;
    }
    for (var cy = 0.3; cy <= 0.7; cy += 0.01) {
      var lo = 0, hi = 0.5;
      for (var k = 0; k < 18; k++) { var mid = (lo + hi) / 2; if (fits(cy, mid)) lo = mid; else hi = mid; }
      if (lo > best.h) best = { cy: cy, h: lo };
    }
    best.h *= 0.97;
    fitCache[name] = best;
    return best;
  }

  // Angka acak stabil (pola hiasan sama untuk data yang sama)
  function rng(seedText) {
    var h = 2166136261;
    for (var i = 0; i < seedText.length; i++) { h ^= seedText.charCodeAt(i); h = Math.imul(h, 16777619); }
    return function () {
      h += 0x6D2B79F5;
      var t = h;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // ---------- Menggambar modul ----------
  function drawModule(ctx, style, x, y, m, nb) {
    if (style === 'dots') {
      ctx.beginPath();
      ctx.arc(x + m / 2, y + m / 2, m * 0.5, 0, Math.PI * 2);
      ctx.fill();
    } else if (style === 'rounded') {
      // Sudut dibulatkan hanya bila kedua tetangga di sisi itu kosong -> bentuk menyatu
      var r = m * 0.5;
      var tl = !nb.up && !nb.left ? r : 0, tr = !nb.up && !nb.right ? r : 0;
      var br = !nb.down && !nb.right ? r : 0, bl = !nb.down && !nb.left ? r : 0;
      ctx.beginPath();
      roundRect(ctx, x, y, m, m, [tl, tr, br, bl]);
      ctx.fill();
    } else {
      ctx.fillRect(x, y, m, m);
    }
  }
  function roundRect(ctx, x, y, w, h, r) {
    var tl = r[0], tr = r[1], br = r[2], bl = r[3];
    ctx.moveTo(x + tl, y);
    ctx.lineTo(x + w - tr, y);
    if (tr) ctx.arcTo(x + w, y, x + w, y + tr, tr); else ctx.lineTo(x + w, y);
    ctx.lineTo(x + w, y + h - br);
    if (br) ctx.arcTo(x + w, y + h, x + w - br, y + h, br); else ctx.lineTo(x + w, y + h);
    ctx.lineTo(x + bl, y + h);
    if (bl) ctx.arcTo(x, y + h, x, y + h - bl, bl); else ctx.lineTo(x, y + h);
    ctx.lineTo(x, y + tl);
    if (tl) ctx.arcTo(x, y, x + tl, y, tl); else ctx.lineTo(x, y);
    ctx.closePath();
  }
  function drawFinder(ctx, style, x, y, m) {
    var outerR = style === 'square' ? 0 : style === 'dots' ? m * 2.6 : m * 1.8;
    var innerR = style === 'square' ? 0 : style === 'dots' ? m * 1.4 : m * 1;
    var holeR = style === 'square' ? 0 : outerR * 0.6;
    var p = new Path2D();
    p.roundRect ? p.roundRect(x, y, 7 * m, 7 * m, outerR) : p.rect(x, y, 7 * m, 7 * m);
    p.roundRect ? p.roundRect(x + m, y + m, 5 * m, 5 * m, holeR) : p.rect(x + m, y + m, 5 * m, 5 * m);
    ctx.fill(p, 'evenodd');
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x + 2 * m, y + 2 * m, 3 * m, 3 * m, innerR);
    else ctx.rect(x + 2 * m, y + 2 * m, 3 * m, 3 * m);
    ctx.fill();
  }

  function drawCustom(opts, d) {
    var mat = readMatrix(opts);
    // Resolusi minimum 10 px per modul agar titik bulat & tepi bentuk tetap tajam
    var m = Math.max(d.minModule == null ? 10 : d.minModule, Math.round(opts.scale * 2));
    var fg = '#' + (opts.barcolor || '000000'), bg = opts.backgroundcolor ? '#' + opts.backgroundcolor : null;
    var Q = d.quiet != null ? d.quiet : QUIET;
    var span = Math.max(mat.rows, mat.cols) + Q * 2;
    var shape = SHAPES[d.shape] ? d.shape : 'square';
    var G, oy, ox, fit;
    if (shape === 'square') {
      ox = 0; oy = 0; // margin bwip-js berfungsi sebagai zona tenang
    } else {
      fit = inscribed(shape);
      G = Math.ceil(span / (2 * fit.h));
      if ((G - span) % 2) G++;
      ox = (G - mat.cols) / 2;
      oy = Math.round(fit.cy * G - mat.rows / 2);
      oy = Math.max(0, Math.min(G - mat.rows, oy));
      ox = Math.round(ox);
    }
    // Margin sama seperti bwip-js (padding x skala)
    var pad = Math.round((opts.padding || 0) * (opts.scale || 1));
    if (shape !== 'square') pad = Math.max(pad, m * 2); // ruang agar bentuk tidak menempel ke bingkai
    var W = shape === 'square' ? mat.cols * m + pad * 2 : G * m + pad * 2;
    var H = shape === 'square' ? mat.rows * m + pad * 2 : G * m + pad * 2;
    var c = document.createElement('canvas');
    c.width = W; c.height = H;
    var ctx = c.getContext('2d');
    var clip = null;
    if (shape !== 'square') {
      clip = shapePath(shape, pad - m * 0.5, pad - m * 0.5, G * m + m);
      if (bg) { ctx.fillStyle = bg; ctx.fill(clip); }
    } else if (bg) {
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    }
    ctx.fillStyle = fg;

    var f = finders(opts.bcid, mat.rows, mat.cols);
    function dark(r, q) { return r >= 0 && q >= 0 && r < mat.rows && q < mat.cols && mat.dark[r][q] && !inFinder(f, r, q); }

    // Hiasan acak di dalam bentuk, di luar kode asli + zona tenang
    if (clip) {
      var rand = rng(String(opts.text) + '|' + shape);
      var deco = [];
      for (var r = 0; r < G; r++) {
        deco.push([]);
        for (var q = 0; q < G; q++) {
          var inCode = r >= oy - Q && r < oy + mat.rows + Q && q >= ox - Q && q < ox + mat.cols + Q;
          var cx = pad + q * m + m / 2, cy = pad + r * m + m / 2;
          deco[r].push(!inCode && ctx.isPointInPath(clip, cx, cy) && rand() < 0.5);
        }
      }
      ctx.save();
      ctx.clip(clip);
      for (r = 0; r < G; r++) {
        for (q = 0; q < G; q++) {
          if (!deco[r][q]) continue;
          drawModule(ctx, d.dots, pad + q * m, pad + r * m, m, {
            up: r > 0 && deco[r - 1][q], down: r < G - 1 && deco[r + 1][q],
            left: q > 0 && deco[r][q - 1], right: q < G - 1 && deco[r][q + 1]
          });
        }
      }
      ctx.restore();
    }

    // Kode asli
    var x0 = pad + ox * m, y0 = pad + oy * m;
    for (var rr = 0; rr < mat.rows; rr++) {
      for (var qq = 0; qq < mat.cols; qq++) {
        if (!dark(rr, qq)) continue;
        drawModule(ctx, d.dots, x0 + qq * m, y0 + rr * m, m, {
          up: dark(rr - 1, qq), down: dark(rr + 1, qq), left: dark(rr, qq - 1), right: dark(rr, qq + 1)
        });
      }
    }
    f.forEach(function (pos) { drawFinder(ctx, d.dots, x0 + pos[1] * m, y0 + pos[0] * m, m); });
    return c;
  }

  // ---------- Bingkai ----------
  function contrast(hex) {
    var n = parseInt(hex.replace('#', ''), 16);
    var r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    return (0.299 * r + 0.587 * g + 0.114 * b) > 150 ? '#000000' : '#FFFFFF';
  }
  function rr(ctx, x, y, w, h, r) {
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, w, h, r); else ctx.rect(x, y, w, h);
  }
  var measureCtx = document.createElement('canvas').getContext('2d');

  // Ukuran tulisan: mulai dari ukuran ideal, kecilkan bila perlu (paling kecil 60%).
  // Bila masih tidak muat, pemanggil melebarkan bingkai -> tulisan tidak pernah keluar.
  function layoutText(text, family, ideal, maxW) {
    if (!text) return { size: 0, width: 0 };
    var min = Math.max(12, Math.round(ideal * 0.6)), s = ideal, wdt;
    for (;;) {
      measureCtx.font = '700 ' + s + 'px ' + family;
      wdt = measureCtx.measureText(text).width;
      if (wdt <= maxW || s <= min) break;
      s--;
    }
    return { size: s, width: Math.ceil(wdt) };
  }
  // Tulisan di tengah secara visual (berdasarkan tinggi huruf sebenarnya)
  function drawText(ctx, text, t, family, cx, cy, color) {
    ctx.font = '700 ' + t.size + 'px ' + family;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    var m = ctx.measureText(text);
    var asc = m.actualBoundingBoxAscent || t.size * 0.72, desc = m.actualBoundingBoxDescent || 0;
    ctx.fillText(text, Math.round(cx), Math.round(cy + (asc - desc) / 2));
  }

  function drawFrame(base, d, bgHex) {
    var w = base.width, h = base.height;
    var unit = Math.max(3, Math.round(Math.min(w, h) * 0.035));
    var gap = unit * 3;
    var fc = d.frameColor || '#000000', tc = contrast(fc);
    var text = String(d.frameText || '').trim();
    var family = getComputedStyle(document.body).fontFamily || 'sans-serif';
    var ideal = Math.max(14, Math.round(Math.min(w, h * 1.4) * 0.09));
    var bg = bgHex ? '#' + bgHex : null;
    var style = d.frame;
    var padX = unit * 2;
    var innerW = w + 2 * gap, innerH = h + 2 * gap;
    var t = layoutText(text, family, ideal, innerW - 2 * padX);
    if (text && t.width + 2 * padX > innerW) innerW = t.width + 2 * padX; // lebarkan bingkai
    innerW = Math.ceil(innerW);
    var labelH = text ? Math.round(t.size * 2) : 0;
    var c = document.createElement('canvas');
    var ctx, W, H, bx, by;

    if (style === 'bottom' || style === 'top') {
      W = innerW + 2 * unit;
      H = innerH + 2 * unit + (labelH || unit);
      c.width = W; c.height = H; ctx = c.getContext('2d');
      var rad = unit * 3;
      ctx.fillStyle = fc; rr(ctx, 0, 0, W, H, rad); ctx.fill();
      var iy = style === 'top' ? unit + (labelH || unit) : unit;
      if (bg) { ctx.fillStyle = bg; } else { ctx.globalCompositeOperation = 'destination-out'; ctx.fillStyle = '#000'; }
      rr(ctx, unit, iy, innerW, innerH, Math.round(rad * 0.6)); ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
      bx = unit + (innerW - w) / 2; by = iy + gap;
      if (text) drawText(ctx, text, t, family, W / 2, style === 'top' ? unit + labelH / 2 : H - unit - labelH / 2, tc);
    } else if (style === 'rounded' || style === 'corners' || style === 'bubble') {
      var tail = style === 'bubble' ? unit * 4 : 0;
      // Margin luar agar garis & sudut bingkai tidak terpotong oleh lengkung kartu latar
      var M = unit * 2;
      var fx = M, fy = M, fw = innerW + unit, fh = innerH + unit; // garis tengah goresan
      W = innerW + unit + 2 * M;
      H = M + fh + tail + (text ? labelH + unit : 0) + M;
      c.width = W; c.height = H; ctx = c.getContext('2d');
      if (bg) { ctx.fillStyle = bg; rr(ctx, 0, 0, W, H, unit * 3); ctx.fill(); }
      ctx.strokeStyle = fc; ctx.fillStyle = fc; ctx.lineWidth = unit; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
      if (style === 'corners') {
        var L = Math.round(Math.min(fw, fh) * 0.22);
        ctx.beginPath();
        ctx.moveTo(fx, fy + L); ctx.lineTo(fx, fy); ctx.lineTo(fx + L, fy);
        ctx.moveTo(fx + fw - L, fy); ctx.lineTo(fx + fw, fy); ctx.lineTo(fx + fw, fy + L);
        ctx.moveTo(fx + fw, fy + fh - L); ctx.lineTo(fx + fw, fy + fh); ctx.lineTo(fx + fw - L, fy + fh);
        ctx.moveTo(fx + L, fy + fh); ctx.lineTo(fx, fy + fh); ctx.lineTo(fx, fy + fh - L);
        ctx.stroke();
      } else {
        var r0 = unit * 4;
        ctx.beginPath();
        if (style === 'bubble') {
          var mx = fx + fw / 2;
          ctx.moveTo(fx + r0, fy);
          ctx.arcTo(fx + fw, fy, fx + fw, fy + fh, r0);
          ctx.arcTo(fx + fw, fy + fh, fx, fy + fh, r0);
          ctx.lineTo(mx + tail, fy + fh);
          ctx.lineTo(mx, fy + fh + tail);
          ctx.lineTo(mx - tail, fy + fh);
          ctx.arcTo(fx, fy + fh, fx, fy, r0);
          ctx.arcTo(fx, fy, fx + fw, fy, r0);
          ctx.closePath();
        } else if (ctx.roundRect) {
          ctx.roundRect(fx, fy, fw, fh, r0);
        } else {
          ctx.rect(fx, fy, fw, fh);
        }
        ctx.stroke();
      }
      bx = fx + unit / 2 + (innerW - w) / 2; by = fy + unit / 2 + gap;
      if (text) drawText(ctx, text, t, family, W / 2, fy + fh + unit + tail + labelH / 2, fc);
    } else if (style === 'circle') {
      var R = Math.sqrt(w * w + h * h) / 2 + gap + unit;
      var tp = layoutText(text, family, ideal, R * 1.4);
      var pillW = text ? tp.width + tp.size * 1.6 : 0, pillH = text ? Math.round(tp.size * 1.9) : 0;
      if (pillW > R * 1.7) R = pillW / 1.7; // lingkaran membesar bila tulisan panjang
      R = Math.ceil(R);
      W = 2 * R + 2 * unit;
      H = W + (text ? Math.ceil(pillH / 2) : 0);
      c.width = W; c.height = H; ctx = c.getContext('2d');
      var cxm = W / 2, cym = W / 2;
      if (bg) { ctx.fillStyle = bg; ctx.beginPath(); ctx.arc(cxm, cym, R, 0, Math.PI * 2); ctx.fill(); }
      ctx.strokeStyle = fc; ctx.lineWidth = unit;
      ctx.beginPath(); ctx.arc(cxm, cym, R - unit / 2, 0, Math.PI * 2); ctx.stroke();
      ctx.drawImage(base, Math.round(cxm - w / 2), Math.round(cym - h / 2));
      if (text) {
        var py = cym + R - unit / 2;
        ctx.fillStyle = fc;
        rr(ctx, Math.round(cxm - pillW / 2), Math.round(py - pillH / 2), Math.round(pillW), pillH, pillH / 2); ctx.fill();
        drawText(ctx, text, tp, family, cxm, py, tc);
      }
      return c;
    } else if (style === 'banner') {
      // Pita lebih panjang dari kotak (menjorok keluar di kedua sisi) dengan ujung bertakik
      var bh = labelH || Math.round(ideal * 2);
      var notch = Math.round(bh * 0.35);
      var over = notch + unit * 2;            // panjang pita di luar kotak, tiap sisi
      var boxW = innerW + 2 * unit;
      var tb = layoutText(text, family, t.size || ideal, boxW + 2 * over - 4 * notch);
      if (text && tb.width + 4 * notch > boxW + 2 * over) {
        boxW = tb.width + 4 * notch - 2 * over; innerW = boxW - 2 * unit;
      }
      W = boxW + 2 * over;
      H = innerH + unit + bh;
      c.width = W; c.height = H; ctx = c.getContext('2d');
      var top = innerH + unit;
      // Latar & garis kotak memakai bentuk yang sama, berhenti tepat di atas pita
      // (sudut bawah lurus, tertutup pita) -> tidak ada sisa latar di sudut maupun takik pita
      var boxPath = function () {
        ctx.beginPath();
        roundRect(ctx, over + unit / 2, unit / 2, boxW - unit, top - unit / 2, [unit * 2, unit * 2, 0, 0]);
      };
      if (bg) { ctx.fillStyle = bg; boxPath(); ctx.fill(); }
      ctx.strokeStyle = fc; ctx.lineWidth = unit;
      boxPath(); ctx.stroke();
      ctx.fillStyle = fc;
      ctx.beginPath();
      ctx.moveTo(0, top); ctx.lineTo(W, top); ctx.lineTo(W - notch, top + bh / 2); ctx.lineTo(W, top + bh);
      ctx.lineTo(0, top + bh); ctx.lineTo(notch, top + bh / 2); ctx.closePath(); ctx.fill();
      bx = over + unit + (innerW - w) / 2; by = unit + gap;
      if (text) drawText(ctx, text, tb, family, W / 2, top + bh / 2, tc);
    } else {
      return base;
    }
    ctx.drawImage(base, Math.round(bx), Math.round(by));
    return c;
  }

  function rotate(src, rot) {
    if (!rot || rot === 'N') return src;
    var c = document.createElement('canvas');
    var swap = rot === 'R' || rot === 'L';
    c.width = swap ? src.height : src.width;
    c.height = swap ? src.width : src.height;
    var ctx = c.getContext('2d');
    ctx.translate(c.width / 2, c.height / 2);
    ctx.rotate(rot === 'R' ? Math.PI / 2 : rot === 'L' ? -Math.PI / 2 : Math.PI);
    ctx.drawImage(src, -src.width / 2, -src.height / 2);
    return c;
  }

  // opts = opsi bwip-js; d = { shape, dots, frame, frameText, frameColor }
  function compose(opts, d) {
    var custom = shapeable(opts.bcid) && ((d.shape && d.shape !== 'square') || (d.dots && d.dots !== 'square'));
    var framed = d.frame && d.frame !== 'none';
    var c;
    if (!custom && !framed) {
      c = document.createElement('canvas');
      bwipjs.toCanvas(c, opts);
      return c;
    }
    var base;
    if (custom) {
      base = drawCustom(opts, d);
    } else {
      var o = {};
      Object.keys(opts).forEach(function (k) { o[k] = opts[k]; });
      o.rotate = 'N';
      base = document.createElement('canvas');
      bwipjs.toCanvas(base, o);
    }
    c = framed ? drawFrame(base, d, opts.backgroundcolor) : base;
    return rotate(c, opts.rotate);
  }

  // Skala efektif (setelah batas minimum modul) untuk memperkirakan ukuran hasil
  function isCustom(opts, d) {
    return shapeable(opts.bcid) && ((d.shape && d.shape !== 'square') || (d.dots && d.dots !== 'square'));
  }
  function effectiveScale(opts, d) {
    return isCustom(opts, d) ? Math.max((d.minModule == null ? 10 : d.minModule) / 2, opts.scale) : opts.scale;
  }

  return { shapeable: shapeable, compose: compose, effectiveScale: effectiveScale, isCustom: isCustom, shapes: Object.keys(SHAPES) };
})();
