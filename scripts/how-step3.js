// "siap dicetak atau dibagikan" -> "siap dicetak dan dibagikan" di semua bahasa: node scripts/how-step3.js
// [teks lama, teks baru]; null = kalimat sudah bermakna "dan"
const R = {
  af: ['om te druk of te deel', 'om te druk en te deel'],
  am: ['ለማተም ወይም ለማጋራት', 'ለማተም እና ለማጋራት'],
  ar: ['للطباعة أو المشاركة', 'للطباعة والمشاركة'],
  as: ['প্ৰিণ্ট বা শ্বেয়াৰৰ', 'প্ৰিণ্ট আৰু শ্বেয়াৰৰ'],
  az: ['çapa və ya paylaşmağa', 'çapa və paylaşmağa'],
  be: ['для друку ці адпраўкі', 'для друку і адпраўкі'],
  bg: ['за печат или споделяне', 'за печат и споделяне'],
  bn: ['প্রিন্ট বা শেয়ারের', 'প্রিন্ট ও শেয়ারের'],
  bs: ['za štampu ili dijeljenje', 'za štampu i dijeljenje'],
  ca: ['per imprimir o compartir', 'per imprimir i compartir'],
  ceb: ['i-print o ipaambit', 'i-print ug ipaambit'],
  cs: ['k tisku nebo sdílení', 'k tisku a sdílení'],
  cy: ['i’w argraffu neu ei rannu', 'i’w argraffu a’i rannu'],
  da: ['til print eller deling', 'til print og deling'],
  de: ['zum Drucken oder Teilen', 'zum Drucken und Teilen'],
  el: ['για εκτύπωση ή κοινοποίηση', 'για εκτύπωση και κοινοποίηση'],
  en: ['ready to print or share', 'ready to print and share'],
  es: ['para imprimir o compartir', 'para imprimir y compartir'],
  et: ['printimiseks või jagamiseks', 'printimiseks ja jagamiseks'],
  eu: ['inprimatzeko edo partekatzeko', 'inprimatzeko eta partekatzeko'],
  fa: ['آماده چاپ یا اشتراک‌گذاری', 'آماده چاپ و اشتراک‌گذاری'],
  fi: ['tulostettavaksi tai jaettavaksi', 'tulostettavaksi ja jaettavaksi'],
  fil: ['i-print o ibahagi', 'i-print at ibahagi'],
  fr: ['prêt à imprimer ou à partager', 'prêt à imprimer et à partager'],
  ga: ['le priontáil nó le roinnt', 'le priontáil agus le roinnt'],
  gl: ['para imprimir ou compartir', 'para imprimir e compartir'],
  gu: ['છાપવા કે શેર કરવા', 'છાપવા અને શેર કરવા'],
  ha: ['don bugawa ko rabawa', 'don bugawa da rabawa'],
  he: ['להדפסה או לשיתוף', 'להדפסה ולשיתוף'],
  hi: ['प्रिंट या शेयर करने', 'प्रिंट और शेयर करने'],
  hr: ['za ispis ili dijeljenje', 'za ispis i dijeljenje'],
  ht: ['pou enprime oswa pataje', 'pou enprime epi pataje'],
  hu: ['nyomtatásra vagy megosztásra', 'nyomtatásra és megosztásra'],
  hy: ['տպելու կամ կիսվելու', 'տպելու և կիսվելու'],
  id: ['siap dicetak atau dibagikan', 'siap dicetak dan dibagikan'],
  ig: ['maka ibipụta ma ọ bụ ịkekọrịta', 'maka ibipụta na ịkekọrịta'],
  is: ['til prentunar eða deilingar', 'til prentunar og deilingar'],
  it: ['pronto da stampare o condividere', 'pronto da stampare e condividere'],
  ja: null,
  jv: ['siap dicithak utawa dibagekake', 'siap dicithak lan dibagekake'],
  ka: ['ბეჭდვისა თუ გაზიარებისთვის', 'ბეჭდვისა და გაზიარებისთვის'],
  kk: ['басып шығаруға не бөлісуге', 'басып шығаруға және бөлісуге'],
  km: ['សម្រាប់បោះពុម្ព ឬចែករំលែក', 'សម្រាប់បោះពុម្ព និងចែករំលែក'],
  kn: ['ಮುದ್ರಿಸಲು ಅಥವಾ ಹಂಚಿಕೊಳ್ಳಲು', 'ಮುದ್ರಿಸಲು ಮತ್ತು ಹಂಚಿಕೊಳ್ಳಲು'],
  ko: ['인쇄하거나 공유할 수 있는', '인쇄하고 공유할 수 있는'],
  ku: ['ji bo çapkirin an parvekirinê', 'ji bo çapkirin û parvekirinê'],
  ky: ['басып чыгарууга же бөлүшүүгө', 'басып чыгарууга жана бөлүшүүгө'],
  lb: ['fir ze drécken oder ze deelen', 'fir ze drécken an ze deelen'],
  lo: ['ທີ່ພ້ອມພິມ ຫຼື ແບ່ງປັນ', 'ທີ່ພ້ອມພິມ ແລະ ແບ່ງປັນ'],
  lt: ['spausdinti ar bendrinti', 'spausdinti ir bendrinti'],
  lv: ['drukai vai kopīgošanai', 'drukai un kopīgošanai'],
  mg: ['hatao printy na hozaraina', 'hatao printy sy hozaraina'],
  mi: ['hei tā, hei tiri rānei', 'hei tā, hei tiri hoki'],
  mk: ['за печатење или споделување', 'за печатење и споделување'],
  ml: ['പ്രിന്റ് ചെയ്യാനോ പങ്കിടാനോ', 'പ്രിന്റ് ചെയ്യാനും പങ്കിടാനും'],
  mn: ['хэвлэх эсвэл хуваалцахад', 'хэвлэх болон хуваалцахад'],
  mr: ['छपाई किंवा शेअरिंगसाठी', 'छपाई आणि शेअरिंगसाठी'],
  ms: ['sedia untuk dicetak atau dikongsi', 'sedia untuk dicetak dan dikongsi'],
  mt: ['lest għall-istampar jew biex taqsmu', 'lest għall-istampar u biex taqsmu'],
  my: ['ပုံနှိပ်ရန် သို့မဟုတ် မျှဝေရန်', 'ပုံနှိပ်ရန်နှင့် မျှဝေရန်'],
  nb: ['klar til utskrift eller deling', 'klar til utskrift og deling'],
  ne: ['छाप्न वा साझा गर्न', 'छाप्न र साझा गर्न'],
  nl: ['klaar om te printen of te delen', 'klaar om te printen en te delen'],
  or: ['ପ୍ରିଣ୍ଟ କିମ୍ବା ସେୟାର', 'ପ୍ରିଣ୍ଟ ଓ ସେୟାର'],
  pa: ['ਪ੍ਰਿੰਟ ਜਾਂ ਸਾਂਝਾ', 'ਪ੍ਰਿੰਟ ਅਤੇ ਸਾਂਝਾ'],
  pl: ['gotowy do druku lub udostępnienia', 'gotowy do druku i udostępnienia'],
  ps: ['د چاپ یا شریکولو', 'د چاپ او شریکولو'],
  'pt-BR': ['pronto para imprimir ou compartilhar', 'pronto para imprimir e compartilhar'],
  'pt-PT': ['pronto a imprimir ou partilhar', 'pronto a imprimir e partilhar'],
  ro: ['gata de tipărit sau distribuit', 'gata de tipărit și distribuit'],
  ru: ['для печати или отправки', 'для печати и отправки'],
  rw: ['yiteguye gucapwa cyangwa gusangizwa', 'yiteguye gucapwa no gusangizwa'],
  si: ['මුද්‍රණයට හෝ බෙදා ගැනීමට', 'මුද්‍රණයට සහ බෙදා ගැනීමට'],
  sk: ['na tlač alebo zdieľanie', 'na tlač a zdieľanie'],
  sl: ['za tisk ali deljenje', 'za tisk in deljenje'],
  sm: ["ua sauni e lolomi pe fa'asoa", "ua sauni e lolomi ma fa'asoa"],
  so: ['diyaar u ah daabacaad ama wadaag', 'diyaar u ah daabacaad iyo wadaag'],
  sq: ['gati për printim ose ndarje', 'gati për printim dhe ndarje'],
  sr: ['спреман за штампу или дељење', 'спреман за штампу и дељење'],
  su: ['siap dicitak atanapi dibagikeun', 'siap dicitak sareng dibagikeun'],
  sv: ['redo att skriva ut eller dela', 'redo att skriva ut och dela'],
  sw: ['tayari kuchapishwa au kushirikiwa', 'tayari kuchapishwa na kushirikiwa'],
  ta: ['அச்சிட அல்லது பகிரத் தயாரான', 'அச்சிடவும் பகிரவும் தயாரான'],
  te: ['ప్రింట్ లేదా షేర్ చేయడానికి', 'ప్రింట్ మరియు షేర్ చేయడానికి'],
  tg: ['барои чоп ё мубодила', 'барои чоп ва мубодила'],
  th: ['ที่พร้อมพิมพ์หรือแชร์', 'ที่พร้อมพิมพ์และแชร์'],
  ti: ['ንሕትመት ወይ ንምክፋል', 'ንሕትመትን ንምክፋልን'],
  tk: ['çap etmäge ýa-da paýlaşmaga', 'çap etmäge we paýlaşmaga'],
  tr: ['yazdırmaya veya paylaşmaya', 'yazdırmaya ve paylaşmaya'],
  uk: ['для друку чи надсилання', 'для друку й надсилання'],
  ur: ['پرنٹ یا شیئر کرنے', 'پرنٹ اور شیئر کرنے'],
  uz: ['chop etish yoki ulashishga', 'chop etish va ulashishga'],
  vi: ['sẵn sàng để in hoặc chia sẻ', 'sẵn sàng để in và chia sẻ'],
  xh: ['elungele ukuprintwa okanye ukwabelana', 'elungele ukuprintwa nokwabelana'],
  yo: ['fún títẹ̀ tàbí pínpín', 'fún títẹ̀ àti pínpín'],
  'zh-CN': ['可直接打印或分享', '可直接打印和分享'],
  'zh-TW': ['可直接列印或分享', '可直接列印和分享'],
  zu: ['elungele ukuphrintwa noma ukwabelana', 'elungele ukuphrintwa nokwabelana']
};

const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'public', 'i18n');
const failed = [];
let n = 0;
for (const file of fs.readdirSync(dir)) {
  const code = file.replace(/\.json$/, '');
  if (!(code in R)) { failed.push(code + ' (no rule)'); continue; }
  if (R[code] === null) continue;
  const p = path.join(dir, file);
  const d = JSON.parse(fs.readFileSync(p, 'utf8'));
  const [from, to] = R[code];
  if (d['how.s3d'].includes(to)) continue; // sudah diubah
  if (!d['how.s3d'].includes(from)) { failed.push(code + ' (text not found)'); continue; }
  d['how.s3d'] = d['how.s3d'].replace(from, to);
  fs.writeFileSync(p, JSON.stringify(d, null, 2) + '\n');
  n++;
}
console.log('updated', n, 'files; problems:', failed.join(', ') || '-');
