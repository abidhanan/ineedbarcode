// Periksa terjemahan Kebijakan Privasi & Syarat Ketentuan: node scripts/check-legal-i18n.js <kode> [kode ...]
// (tanpa kode = semua). Struktur harus sama dengan sumber scripts/legal-i18n/id.js: kunci, placeholder {date},
// serta urutan tag HTML dan nilai href di isi halaman.
const fs = require('fs');
const path = require('path');
const base = path.join(__dirname, 'legal-i18n');
const load = (code) => { const p = path.join(base, code + '.js'); delete require.cache[require.resolve(p)]; return require(p); };
const skeleton = (html) => (html.match(/<\/?[a-z0-9]+(\s[^>]*)?>/gi) || []).map((t) => t.replace(/\s(?!href=)[a-z-]+="[^"]*"/gi, '').replace(/\s+/g, ' '));
const codes = process.argv.slice(2).length ? process.argv.slice(2)
  : fs.readdirSync(base).filter((f) => f.endsWith('.js') && f !== 'id.js').map((f) => f.slice(0, -3));
const src = load('id');
let bad = 0;
for (const code of codes) {
  const errs = [];
  let L;
  try { L = load(code); } catch (e) { console.log('GAGAL ' + code + '\n  ' + e.message.split('\n')[0]); bad++; continue; }
  const nonEmpty = (v, where) => { if (typeof v !== 'string' || !v.trim()) errs.push(where + ': kosong'); };
  for (const k of Object.keys(src.labels)) nonEmpty(L.labels && L.labels[k], 'labels.' + k);
  if (L.labels && L.labels.effective && !L.labels.effective.includes('{date}')) errs.push('labels.effective: harus memuat {date}');
  for (const pg of ['privacy', 'terms']) {
    const a = L[pg] || {};
    ['title', 'desc', 'body'].forEach((k) => nonEmpty(a[k], pg + '.' + k));
    if (typeof a.body === 'string') {
      const x = skeleton(src[pg].body), y = skeleton(a.body);
      const n = Math.max(x.length, y.length);
      for (let i = 0; i < n; i++) if (x[i] !== y[i]) { errs.push(pg + '.body: tag HTML ke-' + (i + 1) + ' beda (sumber ' + x[i] + ', terjemahan ' + y[i] + ')'); break; }
      if (a.body === src[pg].body) errs.push(pg + '.body: belum diterjemahkan');
    }
  }
  if (errs.length) { bad++; console.log('GAGAL ' + code + ' (' + errs.length + ')\n  ' + errs.join('\n  ')); } else console.log('OK ' + code);
}
process.exitCode = bad ? 1 : 0;
