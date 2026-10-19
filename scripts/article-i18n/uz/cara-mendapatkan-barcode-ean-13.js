// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Kichik va oʻrta biznes uchun EAN-13 mahsulot shtrix-kodini qanday olish mumkin",
  desc: "Mahsulotingiz minimarket yoki supermarketlarda sotilishini xohlaysizmi? EAN-13 raqamlarining maʼnosini, GS1 Indonesia orqali rasmiy raqamni roʻyxatdan oʻtkazish va uni chop etish usulini bilib oling.",
  tags: ["Biznes", "Chakana savdo"],
  coverCaption: "Chakana savdo mahsulotlari qadogʻiga roʻyxatdan oʻtgan EAN-13 shtrix-kodi kerak.",
  inlineCaption: "Chakana savdo doʻkoni mahsulotni kassa tizimidagi EAN-13 raqami orqali taniydi.",
  faq: [
    ["EAN-13 raqamini oʻzim yaratsam boʻladimi?", "Shtrix-kod tasvirini oʻzingiz yaratishingiz mumkin, ammo raqam GS1 tomonidan rasmiy berilgani maʼqul. Oʻzingiz oʻylab topgan raqam boshqa mahsulot raqami bilan toʻqnashishi va chakana savdo doʻkonlari tomonidan rad etilishi mumkin."],
    ["Har bir mahsulot varianti uchun alohida shtrix-kod kerakmi?", "Ha. Har bir alohida variant, masalan, taʼmi, oʻlchami yoki qadoqdagi miqdori farq qiladigan mahsulot uchun oʻz EAN-13 raqami kerak."],
    ["EAN-13 dagi nazorat raqami nima?", "Nazorat raqami — oldingi 12 ta raqamdan hisoblab chiqiladigan 13-raqam. Skaner undan shtrix-kod toʻgʻri oʻqilganiga ishonch hosil qilish uchun foydalanadi. Agar siz 12 ta raqam kiritsangiz, I Need Barcode generatori uni avtomatik hisoblaydi."]
  ],
  body: `
<p>Agar mahsulotingizni minimarket, supermarket yoki yirik marketpleyslarda sotmoqchi boʻlsangiz, odatda qadoqqa <strong>EAN-13</strong> shtrix-kodini joylashtirish talab qilinadi. Bu shtrix-kod mahsulotingizning butun dunyo boʻylab noyob identifikatori boʻlib xizmat qiladigan 13 ta raqamdan iborat.</p>

<h2>EAN-13 dagi 13 ta raqamning maʼnosi</h2>
<ul>
  <li><strong>GS1 prefiksi</strong>: dastlabki uchta raqam raqamni bergan GS1 tashkilotini bildiradi. GS1 Indonesia bergan raqamlar <strong>899</strong> bilan boshlanadi.</li>
  <li><strong>Kompaniya raqami</strong>: roʻyxatdan oʻtishda beriladigan kompaniyangiz identifikatori.</li>
  <li><strong>Mahsulot raqami</strong>: har bir mahsulot varianti, masalan, taʼmi yoki oʻlchami farq qiladigan mahsulot uchun kompaniyaning oʻzi belgilaydi.</li>
  <li><strong>Nazorat raqami</strong>: notoʻgʻri oʻqilishning oldini olish uchun oldingi 12 ta raqamdan avtomatik hisoblanadigan oxirgi raqam.</li>
</ul>

<h2>Nega rasmiy raqam boʻlishi shart?</h2>
<p>EAN-13 shtrix-kodini istalgan kishi chizishi mumkin, ammo uning <strong>raqami</strong> roʻyxatdan oʻtgan boʻlishi kerak. Chakana savdo doʻkonlari bu raqamdan oʻz tizimlarida mahsulotni tanish uchun foydalanadi. Agar raqamni oʻzingiz oʻylab topsangiz, u boshqa kompaniya mahsuloti raqami bilan toʻqnashishi va mahsulot doʻkonga roʻyxatga olinayotganda rad etilishi mumkin.</p>

<h2>GS1 Indonesia orqali raqamni roʻyxatdan oʻtkazish tartibi</h2>
<ol>
  <li>NIB (Nomor Induk Berusaha — tadbirkorlik identifikatsiya raqami) va NPWP (soliq toʻlovchi raqami) kabi biznes hujjatlarini hamda shtrix-kod beriladigan mahsulotlar roʻyxatini tayyorlang.</li>
  <li>Kompaniyani GS1 Indonesia rasmiy sayti orqali roʻyxatdan oʻtkazing va kerakli raqamlar sonini tanlang.</li>
  <li>Amaldagi qoidalarga muvofiq roʻyxatdan oʻtish toʻlovi va yillik badalni toʻlang.</li>
  <li>Tasdiqlangandan soʻng siz kompaniya raqamini olasiz va har bir mahsulot uchun raqam yaratishingiz mumkin.</li>
</ol>
<p>Talablar va toʻlovlar oʻzgarishi mumkin, shuning uchun eng soʻnggi maʼlumotlarni doimo bevosita GS1 Indonesia saytida tekshiring.</p>

<h2>Shtrix-kod tasvirini yaratish</h2>
<p>Raqamga ega boʻlgach, <a href="/?type=ean13">EAN-13 generatori</a>ni oching va mahsulotingizning 12 yoki 13 xonali raqamini kiriting. Agar 12 ta raqam kiritsangiz, nazorat raqami avtomatik hisoblanadi. Raqamlar chop etilishi uchun shtrix-kod ostidagi matn parametri yoqilganiga ishonch hosil qiling va PNG sifatida yuklab oling.</p>

<h2>Qadoqqa chop etish boʻyicha maslahatlar</h2>
<ul>
  <li>Oq fonda qora yoki toʻq koʻk chiziqlardan foydalaning. Chiziqlar uchun qizil rangdan saqlaning, chunki koʻplab kassa skanerlari qizil nurdan foydalanadi va qizil chiziqlar oʻqilmaydi.</li>
  <li>Shtrix-kodni haddan tashqari kichraytirmang. EAN-13 ning standart oʻlchami taxminan 37,3 × 25,9 mm boʻlib, uni taxminan 80% gacha kichraytirish mumkin. Batafsil <a href="/artikel/ukuran-barcode-untuk-dicetak">shtrix-kod oʻlchamlari boʻyicha qoʻllanma</a>da.</li>
  <li>Shtrix-kodning chap va oʻng tomonida boʻsh joy qoldiring va uni qadoqning buklanadigan yoki ulanadigan joyiga joylashtirmang.</li>
  <li>Katta hajmda chop etishdan oldin nusxani skaner bilan sinab koʻring.</li>
</ul>
<p>Shimoliy Amerikada sotiladigan mahsulotlar uchun sizdan 12 xonali <a href="/?type=upca">UPC-A</a> dan foydalanish ham talab qilinishi mumkin.</p>
`
};
