// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Chop etish uchun shtrix-kodning toʻgʻri oʻlchami va ruxsati",
  desc: "Juda kichik yoki xira shtrix-kodni skanerlash qiyin. Chop etish uchun xavfsiz boʻlgan minimal oʻlcham, skanerlash masofasi qoidasi va tasvir ruxsati haqida bilib oling.",
  tags: ["Qoʻllanma", "Chop etish"],
  coverCaption: "Yorliq printeri joʻnatmalar va qadoqlar uchun shtrix-kodlarni chop etadi.",
  inlineCaption: "Shtrix-kodni qanchalik katta chop etish mumkinligi yorliq oʻlchamiga bogʻliq.",
  faq: [
    ["Chop etish uchun QR Code ning minimal oʻlchami qancha?", "Yaqin masofadan skanerlash uchun taxminan 2 × 2 cm xavfsiz chegara hisoblanadi. Uzoqroq masofa uchun skanerlash masofasi va QR Code kengligi oʻrtasida taxminan 10 : 1 nisbatdan foydalaning."],
    ["EAN-13 shtrix-kodining standart oʻlchami qancha?", "EAN-13 ning standart oʻlchami taxminan 37,3 × 25,9 mm. Bu oʻlchamni taxminan 80% gacha kichraytirish yoki 200% gacha kattalashtirish mumkin."],
    ["Nega shtrix-kod chop etilgandan keyin xira chiqadi?", "Odatda tasvir kichik boʻlib, keyin kattalashtirilgani yoki past sifatli JPG sifatida saqlangani sababli. Kattaroq modul oʻlchami bilan PNG formatida yuklab oling."]
  ],
  body: `
<p>Ekranda yaxshi koʻringan shtrix-kod chop etilgandan keyin har doim ham oʻqilavermaydi. Juda kichik oʻlcham, past ruxsat yoki yoyilib ketgan siyoh skanerning oʻqiy olmasligiga sabab boʻlishi mumkin. Quyida chop etilgan nusxangiz oʻqiladigan boʻlib qolishi uchun qoʻllanma keltirilgan.</p>

<h2>Modul bilan tanishing</h2>
<p><strong>Modul</strong> — shtrix-kodning eng kichik birligi, yaʼni QR Code dagi bitta kichik katakcha yoki chiziqli shtrix-koddagi eng ingichka chiziq. Modul oʻlchami shtrix-kod qanchalik oson oʻqilishini belgilaydi. <a href="/">I Need Barcode</a> saytida modul oʻlchamini Sozlamalar boʻlimida oʻzgartirish mumkin: qiymat qancha katta boʻlsa, yuklab olinadigan tasvir shuncha katta va tiniq boʻladi.</p>

<h2>QR Code ning minimal oʻlchami</h2>
<ul>
  <li>Yaqin masofadan skanerlash uchun (masalan, tashrif qogʻozi yoki mahsulot yorligʻi) taxminan <strong>2 × 2 cm</strong> oʻlcham xavfsiz chegara hisoblanadi.</li>
  <li>Taxminan <strong>10 : 1</strong> nisbat qoidasidan foydalaning: skanerlash masofasi QR Code kengligidan taxminan oʻn baravar katta boʻladi. 2 metr masofadan skanerlanadigan plakat uchun QR Code ni kamida taxminan 20 cm qiling.</li>
  <li>Saqlanadigan maʼlumot qancha koʻp boʻlsa, naqsh shuncha zich boʻladi, shuning uchun kattaroq oʻlcham kerak boʻladi.</li>
</ul>

<h2>Mahsulot shtrix-kodining oʻlchami</h2>
<p><a href="/?type=ean13">EAN-13</a> ning standart oʻlchami taxminan 37,3 × 25,9 mm (100%). Bu oʻlchamni taxminan 80% gacha kichraytirish yoki 200% gacha kattalashtirish mumkin. Chiziqlar balandligini juda qisqa qilib kesmang, chunki kassa skaneriga turli burchaklardan oʻqish uchun joy kerak.</p>

<h2>Tasvir ruxsati</h2>
<ul>
  <li>Chop etish uchun har bir modul piksel boʻlaklari bilan emas, <strong>bir nechta toʻliq piksel</strong> bilan chizilishiga harakat qiling. Yuklab olishda kattaroq modul oʻlchamini tanlang va keyin dizayn dasturida kichraytiring, aksincha emas.</li>
  <li>Kichik shtrix-kod tasvirini kattalashtirmang, chunki katakchalar cheti xira yoki tishli boʻlib qoladi.</li>
  <li>Ranglar va chetlar JPG dagidek buzilmasligi uchun PNG formatida saqlang.</li>
</ul>

<h2>Sokin hudud</h2>
<p>Har bir shtrix-kod atrofida <strong>sokin hudud</strong> (quiet zone) deb ataladigan boʻsh joy boʻlishi kerak. QR Code uchun u ideal holda toʻrt modul kengligida boʻladi. Chiziqli shtrix-kod uchun chap va oʻng tomondagi boʻsh joy juda muhim. Yozuvlar, dizayn chiziqlari yoki qadoq chetini juda yaqin joylashtirmang.</p>

<h2>Rang va material</h2>
<ul>
  <li>Shtrix-kod uchun toʻq, fon uchun esa och rangdan foydalaning.</li>
  <li>Yaltiroq yoki shaffof materiallardan saqlaning, chunki nurning aks etishi kameraga xalaqit berishi mumkin.</li>
  <li>Koʻp nusxada chop etishdan oldin doimo bitta namunani chop etib, bir nechta telefon yoki skanerda sinab koʻring.</li>
</ul>
<p>Agar shtrix-kodingiz baribir qiyin skanerlansa, <a href="/artikel/barcode-tidak-bisa-dipindai">shtrix-kod skanerlanmasligining 7 sababi</a> maqolasini koʻrib chiqing.</p>
`
};
