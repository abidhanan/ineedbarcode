// Tulis teks artikel Bahasa Indonesia ke scripts/article-i18n/id/ sebagai sumber terjemahan.
// Jalankan ulang setiap kali scripts/articles*.js berubah: node scripts/export-article-source.js
const fs = require('fs');
const path = require('path');
const articles = require('./articles');
const faq = require('./articles-faq');
const photos = require('./articles-photos');
const dir = path.join(__dirname, 'article-i18n', 'id');
fs.mkdirSync(dir, { recursive: true });
const BS = String.fromCharCode(92);
const tpl = (s) => '`' + s.split(BS).join(BS + BS).split('`').join(BS + '`').split('${').join(BS + '${') + '`';
const str = (s) => JSON.stringify(s);

const ui = {
  home: 'Beranda',
  articles: 'Artikel',
  readMore: 'Baca Selengkapnya',
  seeAllArticles: 'Lihat Semua Artikel',
  popular: 'Artikel Populer',
  related: 'Artikel Lainnya',
  seeAll: 'Lihat Semua',
  faqTitle: 'Pertanyaan Umum',
  tryNow: 'Coba Sekarang',
  categories: 'Kategori',
  all: 'Semua',
  photo: 'Foto:',
  views: 'Dilihat',
  viewsSr: 'kali dilihat',
  like: 'Suka artikel ini',
  share: 'Bagikan artikel ini',
  shareVia: 'Bagikan lewat {name}',
  copyLink: 'Salin tautan',
  copied: 'Tautan disalin.',
  copyPrompt: 'Salin tautan ini:',
  listDesc: 'Tips dan panduan seputar barcode, QR Code, dan cara memakainya untuk usaha Anda.'
};
fs.writeFileSync(path.join(dir, 'ui.js'), '// Teks antarmuka halaman artikel\nmodule.exports = {\n' +
  Object.keys(ui).map((k) => '  ' + k + ': ' + str(ui[k])).join(',\n') + '\n};\n');

for (const a of articles) {
  const ph = photos[a.slug];
  const out = '// ' + a.slug + '\nmodule.exports = {\n' +
    '  title: ' + str(a.title) + ',\n' +
    '  desc: ' + str(a.desc) + ',\n' +
    '  tags: [' + a.tags.map(str).join(', ') + '],\n' +
    '  coverCaption: ' + str(ph.cover.caption) + ',\n' +
    '  inlineCaption: ' + str(ph.inline.caption) + ',\n' +
    '  faq: [\n' + (faq[a.slug] || []).map((f) => '    [' + str(f[0]) + ', ' + str(f[1]) + ']').join(',\n') + '\n  ],\n' +
    '  body: ' + tpl(a.body) + '\n};\n';
  fs.writeFileSync(path.join(dir, a.slug + '.js'), out);
}
console.log('sumber ditulis:', articles.length, 'artikel +', Object.keys(ui).length, 'teks UI');
