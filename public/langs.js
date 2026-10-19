// Daftar bahasa: [kode, nama asli, bendera, aksara]
// Aksara menentukan font Noto Sans tambahan yang dimuat (satu keluarga font untuk semua bahasa).
window.INB_LANGS = [
  ['en', 'English', 'gb'],
  ['id', 'Bahasa Indonesia', 'id'],
  ['ms', 'Bahasa Melayu', 'my'],
  ['jv', 'Basa Jawa', 'id'],
  ['su', 'Basa Sunda', 'id'],
  ['fil', 'Filipino', 'ph'],
  ['ceb', 'Cebuano', 'ph'],
  ['vi', 'Tiếng Việt', 'vn'],
  ['th', 'ไทย', 'th', 'Thai'],
  ['lo', 'ລາວ', 'la', 'Lao'],
  ['km', 'ខ្មែរ', 'kh', 'Khmer'],
  ['my', 'မြန်မာ', 'mm', 'Myanmar'],
  ['zh-CN', '简体中文', 'cn', 'SC'],
  ['zh-TW', '繁體中文', 'tw', 'TC'],
  ['ja', '日本語', 'jp', 'JP'],
  ['ko', '한국어', 'kr', 'KR'],
  ['mn', 'Монгол', 'mn'],
  ['hi', 'हिन्दी', 'in'],
  ['bn', 'বাংলা', 'bd', 'Bengali'],
  ['ur', 'اردو', 'pk', 'Arabic'],
  ['pa', 'ਪੰਜਾਬੀ', 'in', 'Gurmukhi'],
  ['gu', 'ગુજરાતી', 'in', 'Gujarati'],
  ['mr', 'मराठी', 'in'],
  ['ta', 'தமிழ்', 'in', 'Tamil'],
  ['te', 'తెలుగు', 'in', 'Telugu'],
  ['kn', 'ಕನ್ನಡ', 'in', 'Kannada'],
  ['ml', 'മലയാളം', 'in', 'Malayalam'],
  ['or', 'ଓଡ଼ିଆ', 'in', 'Oriya'],
  ['as', 'অসমীয়া', 'in', 'Bengali'],
  ['ne', 'नेपाली', 'np'],
  ['si', 'සිංහල', 'lk', 'Sinhala'],
  ['ar', 'العربية', 'sa', 'Arabic'],
  ['fa', 'فارسی', 'ir', 'Arabic'],
  ['ps', 'پښتو', 'af', 'Arabic'],
  ['ku', 'Kurdî', 'iq'],
  ['he', 'עברית', 'il', 'Hebrew'],
  ['tr', 'Türkçe', 'tr'],
  ['az', 'Azərbaycanca', 'az'],
  ['uz', 'Oʻzbekcha', 'uz'],
  ['kk', 'Қазақша', 'kz'],
  ['ky', 'Кыргызча', 'kg'],
  ['tg', 'Тоҷикӣ', 'tj'],
  ['tk', 'Türkmençe', 'tm'],
  ['ka', 'ქართული', 'ge', 'Georgian'],
  ['hy', 'Հայերեն', 'am', 'Armenian'],
  ['ru', 'Русский', 'ru'],
  ['uk', 'Українська', 'ua'],
  ['be', 'Беларуская', 'by'],
  ['pl', 'Polski', 'pl'],
  ['cs', 'Čeština', 'cz'],
  ['sk', 'Slovenčina', 'sk'],
  ['sl', 'Slovenščina', 'si'],
  ['hr', 'Hrvatski', 'hr'],
  ['sr', 'Српски', 'rs'],
  ['bs', 'Bosanski', 'ba'],
  ['mk', 'Македонски', 'mk'],
  ['bg', 'Български', 'bg'],
  ['ro', 'Română', 'ro'],
  ['hu', 'Magyar', 'hu'],
  ['el', 'Ελληνικά', 'gr'],
  ['sq', 'Shqip', 'al'],
  ['lt', 'Lietuvių', 'lt'],
  ['lv', 'Latviešu', 'lv'],
  ['et', 'Eesti', 'ee'],
  ['fi', 'Suomi', 'fi'],
  ['sv', 'Svenska', 'se'],
  ['nb', 'Norsk', 'no'],
  ['da', 'Dansk', 'dk'],
  ['is', 'Íslenska', 'is'],
  ['de', 'Deutsch', 'de'],
  ['nl', 'Nederlands', 'nl'],
  ['fr', 'Français', 'fr'],
  ['es', 'Español', 'es'],
  ['pt-BR', 'Português (Brasil)', 'br'],
  ['pt-PT', 'Português (Portugal)', 'pt'],
  ['it', 'Italiano', 'it'],
  ['ca', 'Català', 'es-ct'],
  ['gl', 'Galego', 'es-ga'],
  ['eu', 'Euskara', 'es-pv'],
  ['cy', 'Cymraeg', 'gb-wls'],
  ['ga', 'Gaeilge', 'ie'],
  ['mt', 'Malti', 'mt'],
  ['lb', 'Lëtzebuergesch', 'lu'],
  ['af', 'Afrikaans', 'za'],
  ['sw', 'Kiswahili', 'tz'],
  ['am', 'አማርኛ', 'et', 'Ethiopic'],
  ['ti', 'ትግርኛ', 'er', 'Ethiopic'],
  ['ha', 'Hausa', 'ng'],
  ['yo', 'Yorùbá', 'ng'],
  ['ig', 'Igbo', 'ng'],
  ['zu', 'isiZulu', 'za'],
  ['xh', 'isiXhosa', 'za'],
  ['so', 'Soomaali', 'so'],
  ['rw', 'Kinyarwanda', 'rw'],
  ['mg', 'Malagasy', 'mg'],
  ['ht', 'Kreyòl ayisyen', 'ht'],
  ['mi', 'Te Reo Māori', 'nz'],
  ['sm', 'Gagana Sāmoa', 'ws']
];

window.INB_RTL = ['ar', 'fa', 'ps', 'ur', 'he'];

// Bahasa utama per negara (kode ISO 3166-1), dipakai bila browser berbahasa Inggris
// atau bahasanya tidak tersedia.
window.INB_COUNTRY_LANG = (function () {
  var m = {};
  function set(lang, list) { list.split(' ').forEach(function (c) { m[c] = lang; }); }
  set('id', 'ID');
  set('ms', 'MY BN');
  set('fil', 'PH');
  set('vi', 'VN');
  set('th', 'TH');
  set('lo', 'LA');
  set('km', 'KH');
  set('my', 'MM');
  set('zh-CN', 'CN SG');
  set('zh-TW', 'TW HK MO');
  set('ja', 'JP');
  set('ko', 'KR KP');
  set('mn', 'MN');
  set('hi', 'IN');
  set('bn', 'BD');
  set('ur', 'PK');
  set('ne', 'NP');
  set('si', 'LK');
  set('ar', 'SA AE EG IQ JO KW LB LY MA OM QA SY TN YE BH DZ SD PS MR');
  set('fa', 'IR');
  set('ps', 'AF');
  set('he', 'IL');
  set('tr', 'TR CY');
  set('az', 'AZ');
  set('uz', 'UZ');
  set('kk', 'KZ');
  set('ky', 'KG');
  set('tg', 'TJ');
  set('tk', 'TM');
  set('ka', 'GE');
  set('hy', 'AM');
  set('ru', 'RU');
  set('uk', 'UA');
  set('be', 'BY');
  set('pl', 'PL');
  set('cs', 'CZ');
  set('sk', 'SK');
  set('sl', 'SI');
  set('hr', 'HR');
  set('sr', 'RS ME');
  set('bs', 'BA');
  set('mk', 'MK');
  set('bg', 'BG');
  set('ro', 'RO MD');
  set('hu', 'HU');
  set('el', 'GR');
  set('sq', 'AL XK');
  set('lt', 'LT');
  set('lv', 'LV');
  set('et', 'EE');
  set('fi', 'FI');
  set('sv', 'SE');
  set('nb', 'NO');
  set('da', 'DK');
  set('is', 'IS');
  set('de', 'DE AT CH LI');
  set('nl', 'NL BE SR');
  set('fr', 'FR MC LU SN CI ML BF NE TG BJ CM CD CG GA GN TD CF DJ KM');
  set('es', 'ES MX AR CO PE VE CL EC GT CU BO DO HN PY SV NI CR PA UY GQ PR');
  set('pt-BR', 'BR');
  set('pt-PT', 'PT AO MZ CV GW ST TL');
  set('it', 'IT SM VA');
  set('ca', 'AD');
  set('mt', 'MT');
  set('sw', 'TZ KE');
  set('am', 'ET');
  set('ti', 'ER');
  set('so', 'SO');
  set('rw', 'RW');
  set('mg', 'MG');
  set('ht', 'HT');
  set('sm', 'WS');
  return m;
})();
