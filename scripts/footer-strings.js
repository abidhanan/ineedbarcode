// Menambahkan teks footer baru ke semua file bahasa: node scripts/footer-strings.js
// [Kontak, Dibuat oleh {name}]
const T = {
  en: ['Contact', 'Made by {name}.'],
  id: ['Kontak', 'Dibuat oleh {name}.'],
  ms: ['Hubungi', 'Dibuat oleh {name}.'],
  jv: ['Kontak', 'Digawe dening {name}.'],
  su: ['Kontak', 'Dijieun ku {name}.'],
  fil: ['Makipag-ugnayan', 'Ginawa ni {name}.'],
  ceb: ['Kontaka', 'Gihimo ni {name}.'],
  vi: ['Liên hệ', 'Được tạo bởi {name}.'],
  th: ['ติดต่อ', 'สร้างโดย {name}'],
  lo: ['ຕິດຕໍ່', 'ສ້າງໂດຍ {name}'],
  km: ['ទំនាក់ទំនង', 'បង្កើតដោយ {name}'],
  my: ['ဆက်သွယ်ရန်', 'ဖန်တီးသူ - {name}'],
  'zh-CN': ['联系方式', '由 {name} 制作。'],
  'zh-TW': ['聯絡方式', '由 {name} 製作。'],
  ja: ['お問い合わせ', '制作：{name}'],
  ko: ['연락처', '제작: {name}'],
  mn: ['Холбоо барих', 'Бүтээсэн: {name}'],
  hi: ['संपर्क', '{name} द्वारा बनाया गया।'],
  bn: ['যোগাযোগ', 'নির্মাতা: {name}'],
  ur: ['رابطہ', 'تیار کردہ: {name}'],
  pa: ['ਸੰਪਰਕ', 'ਨਿਰਮਾਤਾ: {name}'],
  gu: ['સંપર્ક', 'નિર્માતા: {name}'],
  mr: ['संपर्क', 'निर्माता: {name}'],
  ta: ['தொடர்பு', 'உருவாக்கியவர்: {name}'],
  te: ['సంప్రదించండి', 'రూపొందించినవారు: {name}'],
  kn: ['ಸಂಪರ್ಕ', 'ರಚನೆ: {name}'],
  ml: ['ബന്ധപ്പെടുക', 'നിർമ്മാണം: {name}'],
  or: ['ଯୋଗାଯୋଗ', 'ନିର୍ମାତା: {name}'],
  as: ['যোগাযোগ', 'নিৰ্মাতা: {name}'],
  ne: ['सम्पर्क', 'निर्माता: {name}'],
  si: ['සම්බන්ධ වන්න', 'නිර්මාණය: {name}'],
  ar: ['تواصل معنا', 'من إعداد {name}.'],
  fa: ['تماس', 'ساخته‌شده توسط {name}.'],
  ps: ['اړیکه', 'جوړونکی: {name}'],
  ku: ['Têkilî', 'Çêker: {name}'],
  he: ['צור קשר', 'נוצר על ידי {name}.'],
  tr: ['İletişim', 'Yapımcı: {name}'],
  az: ['Əlaqə', 'Hazırlayan: {name}'],
  uz: ['Aloqa', 'Muallif: {name}'],
  kk: ['Байланыс', 'Авторы: {name}'],
  ky: ['Байланыш', 'Автору: {name}'],
  tg: ['Тамос', 'Муаллиф: {name}'],
  tk: ['Habarlaşmak', 'Awtory: {name}'],
  ka: ['კონტაქტი', 'ავტორი: {name}'],
  hy: ['Կապ', 'Հեղինակ՝ {name}'],
  ru: ['Контакты', 'Автор: {name}'],
  uk: ['Контакти', 'Автор: {name}'],
  be: ['Кантакты', 'Аўтар: {name}'],
  pl: ['Kontakt', 'Autor: {name}'],
  cs: ['Kontakt', 'Autor: {name}'],
  sk: ['Kontakt', 'Autor: {name}'],
  sl: ['Stik', 'Avtor: {name}'],
  hr: ['Kontakt', 'Autor: {name}'],
  sr: ['Контакт', 'Аутор: {name}'],
  bs: ['Kontakt', 'Autor: {name}'],
  mk: ['Контакт', 'Автор: {name}'],
  bg: ['Контакти', 'Автор: {name}'],
  ro: ['Contact', 'Creat de {name}.'],
  hu: ['Kapcsolat', 'Készítette: {name}'],
  el: ['Επικοινωνία', 'Δημιουργός: {name}'],
  sq: ['Kontakt', 'Krijuar nga {name}.'],
  lt: ['Kontaktai', 'Autorius: {name}'],
  lv: ['Kontakti', 'Autors: {name}'],
  et: ['Kontakt', 'Autor: {name}'],
  fi: ['Yhteystiedot', 'Tekijä: {name}'],
  sv: ['Kontakt', 'Skapad av {name}.'],
  nb: ['Kontakt', 'Laget av {name}.'],
  da: ['Kontakt', 'Lavet af {name}.'],
  is: ['Hafa samband', 'Höfundur: {name}'],
  de: ['Kontakt', 'Erstellt von {name}.'],
  nl: ['Contact', 'Gemaakt door {name}.'],
  fr: ['Contact', 'Créé par {name}.'],
  es: ['Contacto', 'Creado por {name}.'],
  'pt-BR': ['Contato', 'Criado por {name}.'],
  'pt-PT': ['Contacto', 'Criado por {name}.'],
  it: ['Contatti', 'Creato da {name}.'],
  ca: ['Contacte', 'Creat per {name}.'],
  gl: ['Contacto', 'Creado por {name}.'],
  eu: ['Harremana', 'Egilea: {name}'],
  cy: ['Cysylltu', 'Crëwyd gan {name}.'],
  ga: ['Teagmháil', 'Cruthaithe ag {name}.'],
  mt: ['Kuntatt', 'Maħluq minn {name}.'],
  lb: ['Kontakt', 'Erstallt vum {name}.'],
  af: ['Kontak', 'Geskep deur {name}.'],
  sw: ['Mawasiliano', 'Imetengenezwa na {name}.'],
  am: ['ያግኙን', 'አዘጋጅ፦ {name}'],
  ti: ['ርኸቡና', 'ኣዳላዊ፦ {name}'],
  ha: ['Tuntuɓe mu', 'Wanda ya ƙirƙira: {name}'],
  yo: ['Kàn sí wa', 'Láti ọwọ́ {name}.'],
  ig: ['Kpọtụrụ anyị', 'Onye mepụtara ya: {name}'],
  zu: ['Xhumana nathi', 'Umenzi: {name}'],
  xh: ['Qhagamshelana nathi', 'Umenzi: {name}'],
  so: ['La xiriir', 'Waxaa sameeyay {name}.'],
  rw: ['Twandikire', 'Byakozwe na {name}.'],
  mg: ['Fifandraisana', "Noforonin'i {name}."],
  ht: ['Kontak', 'Kreye pa {name}.'],
  mi: ['Whakapā mai', 'Nā {name} i hanga.'],
  sm: ['Fesoʻotaʻi mai', 'Na faia e {name}.']
};

const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'public', 'i18n');
let n = 0;
for (const file of fs.readdirSync(dir)) {
  const code = file.replace(/\.json$/, '');
  if (!T[code]) throw new Error('No footer strings for ' + code);
  const p = path.join(dir, file);
  const d = JSON.parse(fs.readFileSync(p, 'utf8'));
  delete d['footer.nav'];
  delete d['footer.rights'];
  d['footer.contact'] = T[code][0];
  d['footer.madeBy'] = T[code][1];
  fs.writeFileSync(p, JSON.stringify(d, null, 2) + '\n');
  n++;
}
const missing = Object.keys(T).filter(c => !fs.existsSync(path.join(dir, c + '.json')));
console.log('updated', n, 'files; unused codes:', missing.join(' ') || '-');
