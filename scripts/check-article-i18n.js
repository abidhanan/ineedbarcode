// Periksa terjemahan artikel: node scripts/check-article-i18n.js <kode> [kode ...]   (tanpa kode = semua)
// Struktur harus sama dengan sumber Bahasa Indonesia (scripts/article-i18n/id/): kunci, jumlah label & FAQ,
// serta urutan tag HTML dan nilai href di isi artikel.
const fs = require('fs');
const path = require('path');
const base = path.join(__dirname, 'article-i18n');
const load = (code, name) => { const p = path.join(base, code, name + '.js'); delete require.cache[require.resolve(p)]; return require(p); };
const slugs = fs.readdirSync(path.join(base, 'id')).filter((f) => f.endsWith('.js') && f !== 'ui.js').map((f) => f.slice(0, -3));
const skeleton = (html) => (html.match(/<\/?[a-z0-9]+(\s[^>]*)?>/gi) || []).map((t) => t.replace(/\s(?!href=)[a-z-]+="[^"]*"/gi, '').replace(/\s+/g, ' '));
const codes = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(base).filter((d) => d !== 'id' && fs.statSync(path.join(base, d)).isDirectory());
let bad = 0;
for (const code of codes) {
  const errs = [];
  const nonEmpty = (v, where) => { if (typeof v !== 'string' || !v.trim()) errs.push(where + ': kosong'); };
  try {
    const ui0 = load('id', 'ui'), ui = load(code, 'ui');
    for (const k of Object.keys(ui0)) nonEmpty(ui[k], 'ui.' + k);
    if (ui.shareVia && !ui.shareVia.includes('{name}')) errs.push('ui.shareVia: harus memuat {name}');
  } catch (e) { errs.push('ui.js: ' + e.message.split('\n')[0]); }
  for (const s of slugs) {
    let a, src;
    try { src = load('id', s); a = load(code, s); } catch (e) { errs.push(s + '.js: ' + e.message.split('\n')[0]); continue; }
    ['title', 'desc', 'coverCaption', 'inlineCaption', 'body'].forEach((k) => nonEmpty(a[k], s + '.' + k));
    if (!Array.isArray(a.tags) || a.tags.length !== src.tags.length) errs.push(s + '.tags: harus ' + src.tags.length + ' label');
    else a.tags.forEach((x, i) => nonEmpty(x, s + '.tags[' + i + ']'));
    if (!Array.isArray(a.faq) || a.faq.length !== src.faq.length) errs.push(s + '.faq: harus ' + src.faq.length + ' pasang');
    else a.faq.forEach((f, i) => { if (!Array.isArray(f) || f.length !== 2) errs.push(s + '.faq[' + i + ']: harus [tanya, jawab]'); else { nonEmpty(f[0], s + '.faq[' + i + '][0]'); nonEmpty(f[1], s + '.faq[' + i + '][1]'); } });
    if (typeof a.body === 'string') {
      const x = skeleton(src.body), y = skeleton(a.body);
      const n = Math.max(x.length, y.length);
      for (let i = 0; i < n; i++) if (x[i] !== y[i]) { errs.push(s + '.body: tag HTML ke-' + (i + 1) + ' beda (sumber ' + x[i] + ', terjemahan ' + y[i] + ')'); break; }
      if (a.body === src.body) errs.push(s + '.body: belum diterjemahkan');
    }
    if (a.title === src.title && code !== 'ms') errs.push(s + '.title: belum diterjemahkan');
  }
  if (errs.length) { bad++; console.log('GAGAL ' + code + ' (' + errs.length + ')\n  ' + errs.slice(0, 30).join('\n  ')); } else console.log('OK ' + code);
}
process.exitCode = bad ? 1 : 0;
