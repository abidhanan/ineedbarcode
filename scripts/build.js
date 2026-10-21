// Siapkan situs sebelum deploy: node scripts/build.js
// - Beranda: section Artikel, tautan navbar, data terstruktur (JSON-LD), teks [data-i18n] terisi Bahasa
//   Indonesia, dan window.INB_BOOT, sehingga halaman langsung tampil lengkap (seperti ineedsave.site).
// - Halaman /artikel dan /artikel/<slug> dari scripts/articles.js.
// - sitemap.xml & robots.txt.
// - Penanda versi aset (?v=) agar pengunjung tidak memakai cache lama.
const fs = require('fs');
const path = require('path');
// Windows kadang mengunci file sesaat (antivirus / server pratinjau): ulangi penulisan beberapa kali
const writeOnce = fs.writeFileSync;
fs.writeFileSync = function () {
  for (let i = 0; ; i++) {
    try { return writeOnce.apply(fs, arguments); } catch (e) {
      if (i >= 30 || !/^(UNKNOWN|EPERM|EBUSY|EACCES)$/.test(e.code)) throw e;
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 100);
    }
  }
};
const articles = require('./articles');
const articleFaq = require('./articles-faq');
const photos = require('./articles-photos');

const SITE = 'https://ineedbarcode.com';
const root = path.join(__dirname, '..', 'public');
const srcDir = path.join(__dirname, '..', 'src');

// ---------- Aset: src/ -> public/ (diperkecil dengan esbuild) ----------
// JavaScript & CSS ditulis di src/, hasil kecil dan siap pakai ditulis ke public/. bwip-js dimuat belakangan
// oleh app.js, jadi daftar jenis barcode disisipkan ke app.js agar halaman tidak menunggu pustaka itu.
const esbuild = require('esbuild');
(function buildAssets() {
  const symbols = JSON.stringify(require('bwip-js').symbolList.map((x) => ({ bcid: x.bcid, desc: x.desc, text: x.text, opts: x.opts })));
  let before = 0, after = 0;
  fs.readdirSync(srcDir).forEach((name) => {
    const code = fs.readFileSync(path.join(srcDir, name), 'utf8');
    const css = name.endsWith('.css');
    const input = name === 'app.js' ? 'window.INB_SYMBOLS=' + symbols + ';\n' + code : code;
    const out = esbuild.transformSync(input, { loader: css ? 'css' : 'js', minify: true, target: css ? 'chrome90' : 'es2017', legalComments: 'none' }).code;
    fs.writeFileSync(path.join(root, name), out);
    before += code.length; after += out.length;
  });
  console.log('aset:', Math.round(before / 1024) + ' KB -> ' + Math.round(after / 1024) + ' KB');
})();
const file = path.join(root, 'index.html');
const BOOT_LANG = 'id';
const boot = JSON.parse(fs.readFileSync(path.join(root, 'i18n', BOOT_LANG + '.json'), 'utf8'));
const en = JSON.parse(fs.readFileSync(path.join(root, 'i18n', 'en.json'), 'utf8'));
const t = (k) => (boot[k] != null ? boot[k] : en[k] != null ? en[k] : k);
const escText = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = (s) => escText(s).replace(/"/g, '&quot;');
const json = (o) => JSON.stringify(o).replace(/</g, '\\u003c');
const v = new Date().toISOString().replace(/\D/g, '').slice(0, 14);
const BULAN = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const tanggal = (iso) => { const [y, m, d] = iso.split('-').map(Number); return d + ' ' + BULAN[m - 1] + ' ' + y; };
const sorted = articles.slice().sort((a, b) => (a.date < b.date ? 1 : -1));
const ctaType = (a) => (a.cover.pair ? 'qrcode' : a.cover.bcid);
// Ikon sama dengan ineedsave.site
const SV = (size, inner, fill) => '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" ' +
  (fill ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"') + ' aria-hidden="true">' + inner + '</svg>';
const icons = {
  cal: SV(16, '<path d="M8 2v4M16 2v4M3 10h18"/><rect x="3" y="4" width="18" height="18" rx="2"/>'),
  arrow: SV(16, '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>'),
  eye: SV(18, '<path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0"/><circle cx="12" cy="12" r="3"/>'),
  heart: SV(18, '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>'),
  share: SV(18, '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/>'),
  link: SV(18, '<path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5"/>'),
  wa: SV(18, '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>', true),
  fb: SV(18, '<path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>', true),
  x: SV(18, '<path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/>', true),
  li: SV(18, '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>', true),
  tg: SV(18, '<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>', true)
};
const COVER_V = 3; // versi foto sampul (1200x630)
// Kredit foto Unsplash, seperti ineedsave.site: "Foto: <nama>" menuju halaman foto
const credit = (ph) => '<span class="caption-credit">Foto: <a href="https://unsplash.com/photos/' + ph.photo +
  '?utm_source=ineedbarcode&amp;utm_medium=referral" target="_blank" rel="noopener">' + escText(ph.name) + '</a></span>';
// Foto kedua diletakkan di tengah artikel (sebelum subjudul tengah), seperti ineedsave.site
function withInlinePhoto(body, slug) {
  const ph = photos[slug].inline;
  const fig = '\n<figure class="post-figure">\n  <img src="/artikel/img/' + slug + '-2.webp?v=' + COVER_V + '" alt="' + escAttr(ph.caption) + '" width="1200" height="630" loading="lazy" decoding="async">\n' +
    '  <figcaption><span class="caption-text">' + escText(ph.caption) + '</span>' + credit(ph) + '</figcaption>\n</figure>\n';
  const heads = [];
  body.replace(/<h2>/g, (m, i) => { heads.push(i); return m; });
  if (!heads.length) return body + fig;
  const at = heads[Math.floor(heads.length / 2)];
  return body.slice(0, at) + fig.slice(1) + body.slice(at);
}
const iso = (d) => d + 'T08:00:00+07:00';

// Kategori artikel = label (tag); kunci huruf kecil tanpa spasi, seperti ineedsave.site
const catKey = (tag) => tag.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
// Urutan label: paling banyak dipakai dulu, lalu urutan kemunculan
const categories = (() => {
  const count = {}, label = {}, order = [];
  articles.slice().sort((a, b) => (a.date < b.date ? 1 : -1)).forEach((a) => a.tags.forEach((tg) => {
    const k = catKey(tg);
    if (!(k in count)) { count[k] = 0; label[k] = tg; order.push(k); }
    count[k]++;
  }));
  return order.sort((x, y) => count[y] - count[x] || order.indexOf(x) - order.indexOf(y)).map((k) => ({ key: k, label: label[k] }));
})();

// ---------- Bahasa artikel ----------
// Bahasa Indonesia dari scripts/articles*.js; bahasa lain dari scripts/article-i18n/<kode>/ (periksa dengan
// node scripts/check-article-i18n.js). Bahasa yang terjemahannya belum lengkap dilewati.
const W = {};
new Function('window', fs.readFileSync(path.join(srcDir, 'langs.js'), 'utf8'))(W);
// Hanya terjemahan yang lolos pemeriksaan struktur yang dipakai
const CHECKED = (() => {
  const r = require('child_process').spawnSync(process.execPath, [path.join(__dirname, 'check-article-i18n.js')], { encoding: 'utf8' });
  return new Set((r.stdout || '').split('\n').filter((l) => l.startsWith('OK ')).map((l) => l.slice(3).trim()));
})();
const readDict = (code) => { try { return JSON.parse(fs.readFileSync(path.join(root, 'i18n', code + '.json'), 'utf8')); } catch (e) { return {}; } };
function articleText(code) {
  if (code === BOOT_LANG) {
    const items = {};
    for (const a of articles) {
      items[a.slug] = { title: a.title, desc: a.desc, tags: a.tags, coverCaption: photos[a.slug].cover.caption,
        inlineCaption: photos[a.slug].inline.caption, faq: articleFaq[a.slug] || [], body: a.body };
    }
    return { ui: require('./article-i18n/id/ui'), items };
  }
  const dir = path.join(__dirname, 'article-i18n', code);
  if (!fs.existsSync(dir) || !CHECKED.has(code)) return null;
  try {
    const items = {};
    for (const a of articles) items[a.slug] = require(path.join(dir, a.slug + '.js'));
    return { ui: require(path.join(dir, 'ui.js')), items };
  } catch (e) { console.log('lewati ' + code + ': ' + e.message.split('\n')[0]); return null; }
}
const LOC = W.INB_LANGS.map((m) => {
  const code = m[0];
  const art = articleText(code);
  if (!art) return null;
  const dict = code === BOOT_LANG ? boot : readDict(code);
  const fmt = new Intl.DateTimeFormat(code, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  return {
    code, meta: m, ui: art.ui, items: art.items,
    dir: W.INB_RTL.indexOf(code) >= 0 ? 'rtl' : 'ltr',
    base: code === BOOT_LANG ? '' : '/' + code.toLowerCase(),
    t: (k) => (dict[k] != null ? dict[k] : en[k] != null ? en[k] : boot[k] != null ? boot[k] : k),
    date: (d) => (code === BOOT_LANG ? tanggal(d) : fmt.format(new Date(d + 'T00:00:00Z')))
  };
}).filter(Boolean);
const ID = LOC.find((L) => L.code === BOOT_LANG);
// Kebijakan Privasi & Syarat Ketentuan: scripts/legal-i18n/<kode>.js (periksa: node scripts/check-legal-i18n.js)
const LEGAL_CHECKED = (() => {
  const r = require('child_process').spawnSync(process.execPath, [path.join(__dirname, 'check-legal-i18n.js')], { encoding: 'utf8' });
  return new Set((r.stdout || '').split('\n').filter((l) => l.startsWith('OK ')).map((l) => l.slice(3).trim()));
})();
const LEGAL = {};
for (const L of LOC) {
  if (L.code === BOOT_LANG || LEGAL_CHECKED.has(L.code)) LEGAL[L.code] = require('./legal-i18n/' + L.code);
}
// Label tautan footer beranda (footer.privacy & footer.terms) disalin ke public/i18n/<kode>.json
for (const code of Object.keys(LEGAL)) {
  const p = path.join(root, 'i18n', code + '.json');
  const d = JSON.parse(fs.readFileSync(p, 'utf8'));
  const { privacy, terms } = LEGAL[code].labels;
  if (d['footer.privacy'] !== privacy || d['footer.terms'] !== terms) {
    d['footer.privacy'] = privacy;
    d['footer.terms'] = terms;
    fs.writeFileSync(p, JSON.stringify(d, null, 2) + '\n');
    if (code === BOOT_LANG) Object.assign(boot, { 'footer.privacy': privacy, 'footer.terms': terms });
    if (code === 'en') Object.assign(en, { 'footer.privacy': privacy, 'footer.terms': terms });
  }
}
const LEGAL_DATE = '2026-10-21'; // tanggal berlaku
const legalOf = (L) => LEGAL[L.code] || LEGAL.en || LEGAL[BOOT_LANG];
// Tautan ke beranda dalam bahasa yang sama, mis. /?type=qrcode&lang=en#types
const homeHref = (L, query, hash) => {
  const q = [query, L.code === BOOT_LANG ? '' : 'lang=' + L.code].filter(Boolean).join('&amp;');
  return '/' + (q ? '?' + q : '') + (hash || '');
};
// Nama kategori dalam bahasa L (label artikel diterjemahkan dengan urutan yang sama)
const catLabel = (L, key) => {
  for (const a of sorted) {
    const i = a.tags.findIndex((tg) => catKey(tg) === key);
    if (i >= 0) return L.items[a.slug].tags[i];
  }
  return key;
};

// ---------- Kartu artikel (beranda, /artikel, "Artikel Lainnya"): markup sama dengan ineedsave.site ----------
function card(a, readMoreAttr, L, level) {
  const hl = level || 'h3'; // daftar artikel (di bawah h1) memakai h2 agar urutan judul tidak melompat
  L = L || ID;
  const it = L.items[a.slug];
  return '<article class="article-card" data-slug="' + a.slug + '" data-categories="' + a.tags.map(catKey).join('|') + '"><a class="article-link" href="' + L.base + '/artikel/' + a.slug + '">' +
    '<div class="article-thumb"><img src="/artikel/img/cards/' + a.slug + '.webp?v=' + COVER_V + '" alt="' + escAttr(it.title) + '" width="640" height="336" loading="lazy" decoding="async"></div>' +
    '<div class="article-body"><div class="article-tags">' + it.tags.map((x) => '<span>' + escText(x) + '</span>').join('') + '</div>' +
    '<' + hl + ' class="article-title">' + escText(it.title) + '</' + hl + '><p class="article-excerpt">' + escText(it.desc) + '</p>' +
    '<div class="article-meta">' + icons.cal + '<time datetime="' + iso(a.date) + '">' + L.date(a.date) + '</time></div>' +
    '<span class="article-more"><span' + (readMoreAttr ? ' data-i18n="articles.readMore"' : '') + '>' + escText(readMoreAttr ? t('articles.readMore') : L.ui.readMore) + '</span>' + icons.arrow + '</span>' +
    '</div></a></article>';
}

// ---------- Beranda ----------
let html = fs.readFileSync(file, 'utf8');

// Tautan "Artikel" di navbar
if (!html.includes('data-i18n="nav.articles"')) {
  html = html.replace('<a href="#faq" data-i18n="nav.faq">FAQ</a>\n      </nav>', '<a href="#faq" data-i18n="nav.faq">FAQ</a>\n        <a href="#articles" data-i18n="nav.articles">Artikel</a>\n      </nav>');
}

// Section Artikel (setelah FAQ)
const section = '<!--articles-->\n    <section id="articles" class="section section-anchor">\n      <div class="wrap">\n' +
  '        <div class="section-head">\n          <h2 data-i18n="articles.title">Artikel</h2>\n        </div>\n' +
  '        <div class="carousel" data-carousel>\n' +
  '          <div class="carousel-track" id="articleTrack" data-i18n-aria="articles.title" aria-label="' + escAttr(t('articles.title')) + '">' + sorted.map((a) => card(a, true)).join('') + '</div>\n' +
  '          <div class="carousel-controls">\n' +
  '            <a class="btn-outline articles-all" href="/artikel" data-i18n="articles.all">' + escText(t('articles.all')) + '</a>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '      </div>\n    </section>\n    <!--/articles-->';
if (/<!--articles-->[\s\S]*?<!--\/articles-->/.test(html)) html = html.replace(/<!--articles-->[\s\S]*?<!--\/articles-->/, section);
else html = html.replace('\n  </main>', '\n\n    ' + section + '\n  </main>');

// Data terstruktur beranda: entitas penerbit, halaman, aplikasi, cara pakai, dan FAQ.
const orgId = SITE + '/#organization';
const appId = SITE + '/#application';
const ldHome = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': orgId, name: 'I Need Barcode', url: SITE + '/', logo: { '@type': 'ImageObject', url: SITE + '/apple-touch-icon.png' },
      founder: { '@type': 'Person', name: 'Abid Hanan Wicaksono', url: 'https://abidhanan.my.id' } },
    { '@type': 'WebSite', '@id': SITE + '/#website', name: 'I Need Barcode', url: SITE + '/', inLanguage: 'id-ID', publisher: { '@id': orgId } },
    { '@type': 'WebPage', '@id': SITE + '/#webpage', name: t('meta.title'), url: SITE + '/', description: t('meta.desc'),
      inLanguage: 'id-ID', isPartOf: { '@id': SITE + '/#website' }, about: { '@id': appId }, speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.hero h1', '.hero p', '#faq'] } },
    { '@type': ['WebApplication', 'SoftwareApplication'], '@id': appId, name: 'I Need Barcode', url: SITE + '/', applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript and a modern web browser', isAccessibleForFree: true, description: t('meta.desc'),
      featureList: ['100+ barcode formats', 'QR Code generator', 'Bulk barcode generation', 'Custom colors and shapes', 'Print-ready PNG download'],
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR', availability: 'https://schema.org/InStock' }, publisher: { '@id': orgId } },
    { '@type': 'HowTo', name: t('how.title'), description: t('hero.sub'), totalTime: 'PT2M',
      step: [1, 2, 3].map((n) => ({ '@type': 'HowToStep', position: n, name: t('how.s' + n + 't'), text: t('how.s' + n + 'd'), url: SITE + '/#generator' })) },
    { '@type': 'FAQPage', mainEntity: [1, 2, 3, 4].map((n) => ({ '@type': 'Question', name: t('faq.q' + n), acceptedAnswer: { '@type': 'Answer', text: t('faq.a' + n) } })) }
  ]
};
const ldTag = '<!--ld--><script type="application/ld+json">' + json(ldHome) + '</script><!--/ld-->';
if (/<!--ld-->[\s\S]*?<!--\/ld-->/.test(html)) html = html.replace(/<!--ld-->[\s\S]*?<!--\/ld-->/, ldTag);
else html = html.replace('</head>', '  ' + ldTag + '\n</head>');

// Isi teks [data-i18n], placeholder [data-i18n-ph], dan aria-label [data-i18n-aria] dengan fungsi terjemahan tf
let filled = 0;
function fillI18n(src, tf) {
  // Teks elemen: <tag ... data-i18n="kunci" ...>isi</tag> (isi tanpa elemen bersarang)
  return src.replace(/(<([a-z0-9]+)\b[^>]*\sdata-i18n="([^"]+)"[^>]*>)([^<]*)(<\/\2>)/gi, (m, open, tag, key, inner, close) => {
    filled++;
    return open + escText(tf(key)) + close;
  }).replace(/<[^>]*\sdata-i18n-ph="([^"]+)"[^>]*>/g, (m, key) =>
    /\splaceholder="[^"]*"/.test(m) ? m.replace(/\splaceholder="[^"]*"/, ' placeholder="' + escAttr(tf(key)) + '"') : m.replace(/\s*>$/, ' placeholder="' + escAttr(tf(key)) + '">'))
    .replace(/<[^>]*\sdata-i18n-aria="([^"]+)"[^>]*>/g, (m, key) =>
      /\saria-label="[^"]*"/.test(m) ? m.replace(/\saria-label="[^"]*"/, ' aria-label="' + escAttr(tf(key)) + '"') : m.replace(/\s*>$/, ' aria-label="' + escAttr(tf(key)) + '">'));
}
html = fillI18n(html, t);

// Bagian yang biasanya diisi JavaScript: tampilkan versi awalnya langsung
html = html.replace(/<img class="flag"[^>]*>/, '<img class="flag" alt="" width="20" height="15" src="/flags/id.svg">');
html = html.replace(/<span class="lang-name">[^<]*<\/span>/, '<span class="lang-name">Bahasa Indonesia</span>');
html = html.replace(/<span class="picker-value[^"]*">[^<]*<\/span>/, '<span class="picker-value placeholder">' + escText(t('how.s1t')) + '</span>');
html = html.replace(/<div class="preview[^"]*" id="preview" aria-live="polite">[^<]*<\/div>/, '<div class="preview empty" id="preview" aria-live="polite">' + escText(t('how.s1d')) + '</div>');
const made = t('footer.madeBy').split('{name}');
html = html.replace(/<span id="madeBy">[\s\S]*?<\/a>[^<]*<\/span>/, '<span id="madeBy">' + escText(made[0]) +
  '<a href="https://abidhanan.my.id" target="_blank" rel="noopener"><strong>Abid Hanan Wicaksono</strong></a>' + escText(/^s*[.。]?s*$/.test(made.slice(1).join('')) ? '' : made.slice(1).join('')) + '</span>');

// Teks awal untuk JavaScript
const bootTag = '<!--boot--><script>window.INB_BOOT={"lang":"' + BOOT_LANG + '","strings":' + json(boot) + ',"en":' + json(en) + '};</script><!--/boot-->';
if (/<!--boot-->[\s\S]*?<!--\/boot-->/.test(html)) html = html.replace(/<!--boot-->[\s\S]*?<!--\/boot-->/, bootTag);
else html = html.replace('  <script defer src="/analytics.js', '  ' + bootTag + '\n  <script defer src="/analytics.js');

// Penanda versi aset
html = html.replace(/(\/(?:styles\.css|app\.js|design\.js|langs\.js|analytics\.js|favicon(?:-light|-dark)?\.svg|apple-touch-icon\.png))\?v=[0-9]+/g, '$1?v=' + v);
fs.writeFileSync(file, html);

// ---------- Halaman artikel per bahasa (struktur sama dengan ineedsave.site) ----------
// Bahasa Indonesia di /artikel/..., bahasa lain di /<kode>/artikel/... (mis. /en/artikel/apa-itu-barcode).
// Navbar: merek + menu (Artikel ditandai) + tombol "Coba Sekarang"; footer diambil dari beranda lalu diterjemahkan.
const topbarSrc = html.match(/<header class="topbar">[\s\S]*?<\/header>/)[0]
  .replace(/<div class="topbar-actions">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/header>/, '{{cta}}\n    </div>\n  </header>');
const footerSrc = html.match(/<footer class="site-footer">[\s\S]*?<\/footer>/)[0];
const stripI18n = (s) => s.replace(/ data-i18n(-aria|-ph)?="[^"]*"/g, '');
const homeLinks = (s, L) => s.replace(/href="#([^"]*)"/g, (m, h) => 'href="' + homeHref(L, '', '#' + h) + '"');
const topbarFor = (L, onArticles) => stripI18n(homeLinks(fillI18n(topbarSrc, L.t)
  .replace('{{cta}}', '<a class="btn btn-primary header-cta" href="' + homeHref(L) + '">' + escText(L.ui.tryNow) + '</a>')
  .replace(/href="#articles"/g, 'href="' + L.base + '/artikel"' + (onArticles === false ? '' : ' aria-current="page"')), L));
const footerFor = (L) => {
  const parts = L.t('footer.madeBy').split('{name}');
  const lg = legalOf(L).labels;
  return stripI18n(homeLinks(fillI18n(footerSrc, L.t), L)
    .replace(/<a [^>]*href="\/kebijakan-privasi"[^>]*>[^<]*<\/a>/, '<a class="btn btn-outline" href="' + L.base + '/kebijakan-privasi">' + escText(lg.privacy) + '</a>')
    .replace(/<a [^>]*href="\/syarat-ketentuan"[^>]*>[^<]*<\/a>/, '<a class="btn btn-outline" href="' + L.base + '/syarat-ketentuan">' + escText(lg.terms) + '</a>')
    .replace(/ data-lang-href="[^"]*"/g, '')
    .replace(/<span id="madeBy">[\s\S]*?<\/a>[^<]*<\/span>/, '<span id="madeBy">' + escText(parts[0]) +
      '<a href="https://abidhanan.my.id" target="_blank" rel="noopener"><strong>Abid Hanan Wicaksono</strong></a>' + escText(/^\s*[.。]?\s*$/.test(parts.slice(1).join('')) ? '' : parts.slice(1).join('')) + '</span>'));
};
// Tautan di isi artikel: artikel lain & beranda tetap dalam bahasa yang sama
const localizeLinks = (body, L) => (L.code === BOOT_LANG ? body : body
  .replace(/href="\/artikel\//g, 'href="' + L.base + '/artikel/')
  .replace(/href="\/(kebijakan-privasi|syarat-ketentuan)"/g, 'href="' + L.base + '/$1"')
  .replace(/href="\/(\?[^"#]*)?(#[^"]*)?"/g, (m, q, h) => 'href="' + homeHref(L, q ? q.slice(1).replace(/&(?!amp;)/g, '&amp;') : '', h) + '"'));
const ogLocale = (code) => (code === BOOT_LANG ? 'id_ID' : code.replace('-', '_'));
const urlFor = (L, rest) => SITE + L.base + rest;
const X_DEFAULT = LOC.find((L) => L.code === 'en') || ID;
const AVAILABLE = LOC.map((L) => L.code);

const GEO_EARLY = html.match(/<!--geo-->([\s\S]*?)<!--\/geo-->/)[1];
const FAVICON_SWAP = html.match(/<!--favicon-->([\s\S]*?)<!--\/favicon-->/)[1];

function page({ L, rest, title, desc, image, imageAlt, imageH, type, ld, main, scripts, langs, onArticles }) {
  const ALT = langs ? LOC.filter((A) => langs.indexOf(A.code) >= 0) : LOC;
  const url = urlFor(L, rest);
  const font = L.meta[3] ? 'Noto Sans ' + L.meta[3] : '';
  return '<!doctype html>\n<html lang="' + L.code + '" dir="' + L.dir + '">\n<head>\n' +
    '  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n' +
    '  <title>' + escText(title) + '</title>\n' +
    '  <meta name="description" content="' + escAttr(desc) + '">\n' +
    '  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">\n' +
    '  <meta name="author" content="Abid Hanan Wicaksono">\n' +
    '  <meta name="color-scheme" content="dark">\n' +
    '  <meta name="theme-color" content="#0A0A0A">\n' +
    '  <link rel="manifest" href="/manifest.webmanifest">\n  <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs">\n' +
    '  <link rel="canonical" href="' + url + '">\n' +
    ALT.map((A) => '  <link rel="alternate" hreflang="' + A.code + '" href="' + urlFor(A, rest) + '">\n').join('') +
    '  <link rel="alternate" hreflang="x-default" href="' + urlFor(X_DEFAULT, rest) + '">\n' +
    // Pindah ke bahasa pengunjung (sama seperti beranda) sebelum halaman tampil
    '  <script>window.INB_PAGE={"lang":"' + L.code + '","rest":"' + rest + '","langs":' + json(langs || AVAILABLE) + '};</script>\n' +
    '  <script defer src="/analytics.js?v=' + v + '"></script>\n  <script defer src="/langs.js?v=' + v + '"></script>\n  <script defer src="/article-lang.js?v=' + v + '"></script>\n' +
    '  <meta property="og:title" content="' + escAttr(title) + '">\n  <meta property="og:url" content="' + url + '">\n' +
    '  <meta property="og:description" content="' + escAttr(desc) + '">\n  <meta property="og:type" content="' + type + '">\n' +
    '  <meta property="og:site_name" content="I Need Barcode">\n  <meta property="og:locale" content="' + ogLocale(L.code) + '">\n' +
    '  <meta property="og:image" content="' + image + '">\n  <meta property="og:image:width" content="1200">\n  <meta property="og:image:height" content="' + imageH + '">\n' +
    '  <meta property="og:image:alt" content="' + escAttr(imageAlt) + '">\n' +
    '  <meta name="twitter:card" content="summary_large_image">\n  <meta name="twitter:title" content="' + escAttr(title) + '">\n' +
    '  <meta name="twitter:description" content="' + escAttr(desc) + '">\n  <meta name="twitter:image" content="' + image + '">\n' +
    '  <link rel="icon" href="/favicon.svg?v=' + v + '" type="image/svg+xml" data-light="/favicon-light.svg?v=' + v + '" data-dark="/favicon-dark.svg?v=' + v + '">\n' +
    '  ' + GEO_EARLY + '\n  ' + FAVICON_SWAP + '\n  <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=' + v + '">\n' +
    '  <link rel="preload" href="/fonts/noto-sans-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>\n' +
    (font ? '  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=' + font.replace(/ /g, '+') + ':wght@400;500;600;700&amp;display=swap">\n' : '') +
    '  <link rel="stylesheet" href="/styles.css?v=' + v + '">\n' +
    (font ? '  <style>:root{--font:"Noto Sans","' + font + '",sans-serif}</style>\n' : '') +
    '  <script type="application/ld+json">' + json(ld) + '</script>\n' +
    '</head>\n<body class="article-page-body">\n  ' + topbarFor(L, onArticles) + '\n\n' + main + '\n\n  ' + footerFor(L) + '\n' +
    '  <div class="toast-float" id="toast" role="status" aria-live="polite" hidden></div>\n' +
    (scripts || '') + '</body>\n</html>\n';
}

const outDir = path.join(root, 'artikel');
// Halaman bahasa lama dihapus dulu agar tidak tersisa halaman yang sudah tidak dibuat
for (const m of W.INB_LANGS) {
  if (m[0] !== BOOT_LANG) fs.rmSync(path.join(root, m[0].toLowerCase()), { recursive: true, force: true });
}
const publisher = { '@type': 'Organization', name: 'I Need Barcode', url: SITE + '/', logo: { '@type': 'ImageObject', url: SITE + '/apple-touch-icon.png' } };
const author = { '@type': 'Person', name: 'Abid Hanan Wicaksono', url: 'https://abidhanan.my.id' };
const enc = encodeURIComponent;
const stat0 = (key) => '<span class="mini-stat">' + icons[key === 'views' ? 'eye' : key === 'likes' ? 'heart' : 'share'] + '<span data-' + key + '>0</span></span>';
const popularItem = (a, L) => '<li data-slug="' + a.slug + '"><a class="popular-item" href="' + L.base + '/artikel/' + a.slug + '"><img src="/artikel/img/cards/' + a.slug + '.webp?v=' + COVER_V + '" alt="" width="96" height="50" loading="lazy" decoding="async">' +
  '<span class="popular-text"><span class="popular-title">' + escText(L.items[a.slug].title) + '</span><span class="popular-stats" aria-hidden="true">' + stat0('views') + stat0('likes') + stat0('shares') + '</span></span></a></li>';
// Kredit foto Unsplash dalam bahasa L
const creditFor = (ph, L) => credit(ph).replace('>Foto: <', '>' + escText(L.ui.photo) + ' <');
let pages = 0;

for (const L of LOC) {
  const dir = path.join(root, L.base.slice(1), 'artikel');
  fs.mkdirSync(dir, { recursive: true });
  const ui = L.ui;
  const crumbs = [{ name: ui.home, item: SITE + homeHref(L).replace(/&amp;/g, '&') }, { name: ui.articles, item: urlFor(L, '/artikel') }];
  const articleScripts = '  <script>window.INB_T=' + json({ copied: ui.copied, copyPrompt: ui.copyPrompt }) + ';window.INB_BASE="' + L.base + '";window.INB_ARTICLES=' +
    json(sorted.map((a) => ({ slug: a.slug, title: L.items[a.slug].title }))) + ';</script>\n' +
    '  <script src="/article.js?v=' + v + '"></script>\n';

  for (const a of sorted) {
    const it = L.items[a.slug];
    const rest = '/artikel/' + a.slug;
    const url = urlFor(L, rest);
    const img = SITE + '/artikel/img/' + a.slug + '.jpg?v=' + COVER_V; // JPG untuk pratinjau link
    const others = sorted.filter((x) => x.slug !== a.slug);
    const faq = it.faq || [];
    const faqHtml = faq.length ? '\n<h2>' + escText(ui.faqTitle) + '</h2>\n' + faq.map((f) => '<h3>' + escText(f[0]) + '</h3>\n<p>' + escText(f[1]) + '</p>').join('\n') + '\n' : '';
    const shareText = enc(it.title + ' ' + url);
    const via = (name) => escAttr(ui.shareVia.replace('{name}', name));
    const inline = { ...photos[a.slug].inline, caption: it.inlineCaption };
    const body = withInlinePhoto(localizeLinks(it.body, L), a.slug)
      .replace(/(<figure class="post-figure">[\s\S]*?alt=")[^"]*(")/, (m, p1, p2) => p1 + escAttr(inline.caption) + p2)
      .replace(/<figcaption><span class="caption-text">[^<]*<\/span>[\s\S]*?<\/figcaption>/, '<figcaption><span class="caption-text">' + escText(inline.caption) + '</span>' + creditFor(inline, L) + '</figcaption>');
    const main =
      '  <main id="main" tabindex="-1" class="article-page">\n' +
      '    <div class="wrap post-layout">\n      <div class="post-main">\n' +
      '      <nav class="breadcrumb" aria-label="Breadcrumb">\n        <ol>\n          <li><a href="' + homeHref(L) + '">' + escText(ui.home) + '</a></li>\n          <li><a href="' + L.base + '/artikel">' + escText(ui.articles) + '</a></li>\n' +
      '          <li aria-current="page">' + escText(it.title) + '</li>\n        </ol>\n      </nav>\n' +
      '      <article class="post">\n        <header class="post-head">\n' +
      '          <div class="article-tags">' + it.tags.map((x) => '<span>' + escText(x) + '</span>').join('') + '</div>\n' +
      '          <h1>' + escText(it.title) + '</h1>\n' +
      '          <p class="post-meta">' + icons.cal + '<time datetime="' + iso(a.date) + '">' + L.date(a.date) + '</time></p>\n' +
      '        </header>\n' +
      '        <figure class="post-cover">\n          <img src="/artikel/img/' + a.slug + '.webp?v=' + COVER_V + '" alt="' + escAttr(it.title) + '" width="1200" height="630" fetchpriority="high">\n' +
      '          <figcaption><span class="caption-text">' + escText(it.coverCaption) + '</span>' + creditFor(photos[a.slug].cover, L) + '</figcaption>\n        </figure>\n' +
      '        <div class="post-body">' + body + faqHtml + '</div>\n' +
      '        <div class="post-stats" data-slug="' + a.slug + '" data-url="' + url + '" data-title="' + escAttr(it.title) + '">\n' +
      '          <div class="stats-left">\n' +
      '            <span class="stat" title="' + escAttr(ui.views) + '">' + icons.eye + '<span class="stat-count" data-views>0</span><span class="sr-only">' + escText(ui.viewsSr) + '</span></span>\n' +
      '            <button class="stat stat-button" type="button" data-like aria-pressed="false" aria-label="' + escAttr(ui.like) + '">' + icons.heart + '<span class="stat-count" aria-hidden="true" data-likes>0</span></button>\n' +
      '            <button class="stat stat-button" type="button" data-share aria-label="' + escAttr(ui.share) + '">' + icons.share + '<span class="stat-count" aria-hidden="true" data-shares>0</span></button>\n' +
      '          </div>\n          <div class="socials share-links">\n' +
      '            <a class="social" href="https://wa.me/?text=' + shareText + '" target="_blank" rel="noopener" data-share-link aria-label="' + via('WhatsApp') + '">' + icons.wa + '</a>\n' +
      '            <a class="social" href="https://www.facebook.com/sharer/sharer.php?u=' + enc(url) + '" target="_blank" rel="noopener" data-share-link aria-label="' + via('Facebook') + '">' + icons.fb + '</a>\n' +
      '            <a class="social" href="https://twitter.com/intent/tweet?url=' + enc(url) + '&amp;text=' + enc(it.title) + '" target="_blank" rel="noopener" data-share-link aria-label="' + via('X') + '">' + icons.x + '</a>\n' +
      '            <a class="social" href="https://www.linkedin.com/sharing/share-offsite/?url=' + enc(url) + '" target="_blank" rel="noopener" data-share-link aria-label="' + via('LinkedIn') + '">' + icons.li + '</a>\n' +
      '            <a class="social" href="https://t.me/share/url?url=' + enc(url) + '&amp;text=' + enc(it.title) + '" target="_blank" rel="noopener" data-share-link aria-label="' + via('Telegram') + '">' + icons.tg + '</a>\n' +
      '            <button class="social" type="button" data-copy aria-label="' + escAttr(ui.copyLink) + '">' + icons.link + '</button>\n' +
      '          </div>\n        </div>\n      </article>\n      </div>\n' +
      '      <aside class="popular" aria-labelledby="popular-title">\n        <h2 id="popular-title">' + escText(ui.popular) + '</h2>\n' +
      '        <ol class="popular-list" data-popular data-current="' + a.slug + '">\n          ' + others.slice(0, 4).map((x) => popularItem(x, L)).join('\n          ') + '\n        </ol>\n      </aside>\n' +
      '    </div>\n' +
      '    <div class="wrap cta-wrap">\n      <aside class="post-cta">\n        <p>' + escText(L.t('footer.tagline')) + '</p>\n' +
      '        <a class="btn btn-primary" href="' + homeHref(L, 'type=' + ctaType(a)) + '">' + escText(ui.tryNow) + '</a>\n      </aside>\n    </div>\n' +
      '    <section class="related" aria-labelledby="related-title">\n      <div class="wrap">\n        <div class="related-head">\n' +
      '          <h2 id="related-title">' + escText(ui.related) + '</h2>\n          <a class="btn-outline" href="' + L.base + '/artikel">' + escText(ui.seeAll) + '</a>\n        </div>\n' +
      '        <div class="article-grid">' + others.slice(0, 3).map((x) => card(x, false, L)).join('') + '</div>\n      </div>\n    </section>\n' +
      '  </main>';
    const ld = {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'Article', headline: it.title, description: it.desc, image: [img], datePublished: iso(a.date), dateModified: iso(a.date),
          inLanguage: L.code, author, publisher, mainEntityOfPage: { '@type': 'WebPage', '@id': url }, keywords: it.tags.join(', '),
          '@id': url + '#article', url, isAccessibleForFree: true, articleSection: it.tags[0], thumbnailUrl: img,
          wordCount: it.body.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length,
          isPartOf: { '@id': SITE + '/#website' }, about: { '@id': SITE + '/#application' },
          speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.post-head h1', '.post-body > p:first-of-type'] } },
        { '@type': 'BreadcrumbList', itemListElement: crumbs.concat([{ name: it.title, item: url }]).map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item })) }
      ].concat(faq.length ? [{ '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f[0], acceptedAnswer: { '@type': 'Answer', text: f[1] } })) }] : [])
    };
    fs.writeFileSync(path.join(dir, a.slug + '.html'),
      page({ L, rest, title: it.title + ' - I Need Barcode', desc: it.desc, image: img, imageAlt: it.title, imageH: 630, type: 'article', ld, main, scripts: articleScripts }));
    pages++;
  }

  // Daftar artikel: /artikel (dan /<kode>/artikel)
  const listMain =
    '  <main id="main" tabindex="-1" class="article-page">\n    <div class="wrap">\n' +
    '      <nav class="breadcrumb" aria-label="Breadcrumb">\n        <ol>\n          <li><a href="' + homeHref(L) + '">' + escText(ui.home) + '</a></li>\n          <li aria-current="page">' + escText(ui.articles) + '</li>\n        </ol>\n      </nav>\n' +
    '      <header class="list-head">\n        <h1>' + escText(ui.articles) + '</h1>\n      </header>\n' +
    // Label kategori: "Semua" + setiap kategori; memilih satu hanya menampilkan artikelnya (article.js)
    '      <div class="category-filter" role="group" aria-label="' + escAttr(ui.categories) + '" data-category-filter>\n' +
    '        <button class="category-chip" type="button" data-category="" aria-pressed="true">' + escText(ui.all) + '</button>\n' +
    categories.map((c) => '        <button class="category-chip" type="button" data-category="' + c.key + '" aria-pressed="false">' + escText(catLabel(L, c.key)) + '</button>\n').join('') +
    '      </div>\n' +
    '      <div class="article-grid">' + sorted.map((x) => card(x, false, L, 'h2')).join('') + '</div>\n' +
    '    </div>\n  </main>';
  const listTitle = ui.articles + ' - I Need Barcode';
  const listLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CollectionPage', name: listTitle, url: urlFor(L, '/artikel'), description: ui.listDesc, inLanguage: L.code,
        hasPart: sorted.map((a) => ({ '@type': 'Article', headline: L.items[a.slug].title, url: urlFor(L, '/artikel/' + a.slug) })) },
      { '@type': 'BreadcrumbList', itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item })) }
    ]
  };
  fs.writeFileSync(path.join(dir, 'index.html'),
    page({ L, rest: '/artikel', title: listTitle, desc: ui.listDesc, image: SITE + '/og-image.png?v=1', imageAlt: 'I Need Barcode', imageH: 630, type: 'website', ld: listLd, main: listMain, scripts: '  <script src="/article.js?v=' + v + '"></script>\n' }));
  pages++;

  // Kartu artikel beranda dalam bahasa ini (dipakai app.js saat bahasa diganti)
  fs.mkdirSync(path.join(outDir, 'cards'), { recursive: true });
  fs.writeFileSync(path.join(outDir, 'cards', L.code + '.json'), JSON.stringify({
    base: L.base,
    items: sorted.map((a) => ({ slug: a.slug, title: L.items[a.slug].title, desc: L.items[a.slug].desc, tags: L.items[a.slug].tags, date: L.date(a.date) }))
  }));
}

// ---------- Kebijakan Privasi & Syarat Ketentuan (struktur sama dengan ineedsave.com) ----------
// Bahasa Indonesia di /kebijakan-privasi & /syarat-ketentuan, bahasa lain di /<kode>/kebijakan-privasi, dst.
const LEGAL_PAGES = [{ key: 'privacy', rest: '/kebijakan-privasi' }, { key: 'terms', rest: '/syarat-ketentuan' }];
const LEGAL_LANGS = LOC.filter((L) => LEGAL[L.code]).map((L) => L.code);
let legalPages = 0;
for (const L of LOC.filter((A) => LEGAL[A.code])) {
  const lg = LEGAL[L.code];
  for (const pg of LEGAL_PAGES) {
    const p = lg[pg.key];
    const url = urlFor(L, pg.rest);
    const main =
      '  <main id="main" tabindex="-1" class="article-page">\n    <div class="wrap legal-layout">\n' +
      '      <nav class="breadcrumb" aria-label="Breadcrumb">\n        <ol>\n          <li><a href="' + homeHref(L) + '">' + escText(L.ui.home) + '</a></li>\n' +
      '          <li aria-current="page">' + escText(p.title) + '</li>\n        </ol>\n      </nav>\n' +
      '      <article class="post legal">\n        <header class="post-head">\n          <h1>' + escText(p.title) + '</h1>\n' +
      '          <p class="post-meta">' + icons.cal + '<span>' + escText(lg.labels.effective.replace('{date}', L.date(LEGAL_DATE))) + '</span></p>\n' +
      '        </header>\n        <div class="post-body legal-body">' + localizeLinks(p.body, L) + '</div>\n      </article>\n    </div>\n  </main>';
    const ld = {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'WebPage', name: p.title, url, description: p.desc, inLanguage: L.code, datePublished: iso(LEGAL_DATE), dateModified: iso(LEGAL_DATE), publisher },
        { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: L.ui.home, item: SITE + homeHref(L).replace(/&amp;/g, '&') },
          { '@type': 'ListItem', position: 2, name: p.title, item: url }
        ] }
      ]
    };
    const dir = path.join(root, L.base.slice(1));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, pg.rest.slice(1) + '.html'),
      page({ L, rest: pg.rest, title: p.title + ' - I Need Barcode', desc: p.desc, image: SITE + '/og-image.png?v=1', imageAlt: 'I Need Barcode', imageH: 630, type: 'website', ld, main, langs: LEGAL_LANGS, onArticles: false,
        scripts: '  <script src="/article.js?v=' + v + '"></script>\n' }));
    legalPages++;
  }
}

// ---------- sitemap.xml (dengan hreflang), robots.txt, llms.txt, manifest ----------
const today = new Date().toISOString().slice(0, 10);
const xe = (x) => String(x).replace(/&/g, '&amp;');
const urls = [{ loc: SITE + '/', lastmod: today, pr: '1.0' }];
const alt = (rest, langs) => langs.map((A) => ({ code: A.code, href: urlFor(A, rest) }));
const LEGAL_L = LOC.filter((A) => LEGAL[A.code]);
for (const pg of LEGAL_PAGES) for (const L of LEGAL_L) urls.push({ loc: urlFor(L, pg.rest), lastmod: LEGAL_DATE, pr: '0.3', alt: alt(pg.rest, LEGAL_L) });
for (const L of LOC) {
  urls.push({ loc: urlFor(L, '/artikel'), lastmod: sorted[0].date, pr: L === ID ? '0.8' : '0.6', alt: alt('/artikel', LOC) });
  for (const a of sorted) urls.push({ loc: urlFor(L, '/artikel/' + a.slug), lastmod: a.date, pr: L === ID ? '0.7' : '0.5', alt: alt('/artikel/' + a.slug, LOC) });
}
const xdef = (rest, langs) => '<xhtml:link rel="alternate" hreflang="x-default" href="' + urlFor(langs.find((A) => A.code === 'en') || ID, rest) + '"/>';
fs.writeFileSync(path.join(root, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
  urls.map((u) => '  <url><loc>' + xe(u.loc) + '</loc><lastmod>' + u.lastmod + '</lastmod><priority>' + u.pr + '</priority>' +
    (u.alt ? u.alt.map((x) => '<xhtml:link rel="alternate" hreflang="' + x.code + '" href="' + xe(x.href) + '"/>').join('') : '') + '</url>').join('\n') + '\n</urlset>\n');

// robots.txt: semua crawler diizinkan, termasuk crawler AI (GEO / AIO), plus sitemap & llms.txt
const AI_BOTS = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'anthropic-ai', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot', 'DuckAssistBot', 'CCBot', 'meta-externalagent', 'Amazonbot', 'cohere-ai', 'MistralAI-User'];
fs.writeFileSync(path.join(root, 'robots.txt'), 'User-agent: *\nAllow: /\nDisallow: /api/\n\n' +
  AI_BOTS.map((b) => 'User-agent: ' + b + '\nAllow: /\nDisallow: /api/\n').join('\n') +
  '\nSitemap: ' + SITE + '/sitemap.xml\n');

// llms.txt (ringkasan untuk mesin jawaban AI) dan llms-full.txt (isi artikel lengkap)
const EN = LOC.find((A) => A.code === 'en') || ID;
const plain = (h) => h.replace(/<h2>/g, '\n## ').replace(/<h3>/g, '\n### ').replace(/<li>/g, '\n- ').replace(/<\/(p|ul|ol|table|tr|h2|h3)>/g, '\n').replace(/<\/t[dh]>/g, ' | ')
  .replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
const faqEn = [1, 2, 3, 4].map((n) => '- ' + en['faq.q' + n] + ' ' + en['faq.a' + n]).join('\n');
const langList = LOC.map((L) => L.meta[1] + ' (' + L.code + ')').join(', ');
fs.writeFileSync(path.join(root, 'llms.txt'), '# I Need Barcode\n\n' +
  '> I Need Barcode (' + SITE + '/) is a free barcode and QR Code generator that runs in the browser. It needs no registration, adds no watermark, supports 100+ barcode formats, and exports print-ready PNG files. The site is available in ' + LOC.length + ' languages and was created by Abid Hanan Wicaksono.\n\n' +
  '## What it does\n\n' +
  '- Generates QR Code, Code 128, EAN-13, UPC-A, Data Matrix, Aztec, PDF417, GS1 and 100+ other formats.\n' +
  '- Creates codes for text, URLs, Wi-Fi, contacts, email, phone, SMS, WhatsApp, locations and events.\n' +
  '- Bulk mode generates up to 100 barcodes at once and downloads them as a ZIP of PNG files.\n' +
  '- Design options: colors, module size, rotation, shapes (circle, heart, star and more), dot styles, frames with text, transparent background.\n' +
  '- Barcode contents are processed in the visitor\'s browser and are not sent to a server.\n\n' +
  '## Frequently asked questions\n\n' + faqEn + '\n\n' +
  '## Guides (English)\n\n' +
  sorted.map((a) => '- [' + EN.items[a.slug].title + '](' + urlFor(EN, '/artikel/' + a.slug) + '): ' + EN.items[a.slug].desc).join('\n') + '\n\n' +
  '## Main pages\n\n' +
  '- [Generator](' + SITE + '/)\n- [All guides](' + urlFor(EN, '/artikel') + ')\n' +
  '- [Privacy Policy](' + urlFor(EN, '/kebijakan-privasi') + ')\n- [Terms & Conditions](' + urlFor(EN, '/syarat-ketentuan') + ')\n' +
  '- [Sitemap](' + SITE + '/sitemap.xml)\n- [Full text of the guides](' + SITE + '/llms-full.txt)\n\n' +
  '## Languages\n\n' + langList + '. Pages under /<code>/ (for example /en/artikel, /ja/artikel); Indonesian is the default at the root.\n\n' +
  '## Attribution\n\nWhen citing, link to the most specific page above. Author: Abid Hanan Wicaksono (https://abidhanan.my.id).\n');
fs.writeFileSync(path.join(root, 'llms-full.txt'), '# I Need Barcode: full guides (English)\n\nSource: ' + SITE + '/ . Author: Abid Hanan Wicaksono. Language: English. Each guide is also available in ' + (LOC.length - 1) + ' other languages.\n\n' +
  sorted.map((a) => {
    const it = EN.items[a.slug];
    return '---\n\n# ' + it.title + '\n\nURL: ' + urlFor(EN, '/artikel/' + a.slug) + '\nPublished: ' + a.date + '\nTopics: ' + it.tags.join(', ') + '\n\n' + plain(it.body) +
      (it.faq && it.faq.length ? '\n\n## ' + EN.ui.faqTitle + '\n\n' + it.faq.map((q) => '**' + q[0] + '**\n' + q[1]).join('\n\n') : '') + '\n';
  }).join('\n'));

fs.writeFileSync(path.join(root, 'manifest.webmanifest'), JSON.stringify({
  name: 'I Need Barcode', short_name: 'I Need Barcode', description: en['footer.tagline'], start_url: '/', scope: '/', display: 'standalone',
  background_color: '#0A0A0A', theme_color: '#0A0A0A', lang: 'id',
  icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }, { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png', purpose: 'any' }]
}));
fs.mkdirSync(path.join(root, '.well-known'), { recursive: true });
fs.writeFileSync(path.join(root, '.well-known', 'security.txt'), 'Contact: https://abidhanan.my.id\nExpires: 2027-10-21T00:00:00.000Z\nPreferred-Languages: id, en\nCanonical: ' + SITE + '/.well-known/security.txt\n');

console.log('teks diisi:', filled, '| bahasa artikel:', LOC.length, '| halaman artikel:', pages, '| halaman legal:', legalPages, '| versi:', v, '| ukuran boot:', Math.round(bootTag.length / 1024) + ' KB');
