// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "1D va 2D shtrix-kodlar oʻrtasidagi farq: sizga qaysi biri kerak?",
  desc: "Chiziqli shtrix-kod ham, QR Code ham shtrix-kod hisoblanadi, ammo ularning vazifalari turlicha. Sigʻimi, skanerlash usuli va qoʻllanish misollarini taqqoslang.",
  tags: ["Asoslar", "Shtrix-kod"],
  coverCaption: "Ombordagi qoʻl skaneri 1D va 2D shtrix-kodlarni oʻqiydi.",
  inlineCaption: "Joʻnatma yorliqlarida odatda chiziqli shtrix-kod ishlatiladi.",
  faq: [
    ["Kassa skaneri QR Code ni oʻqiy oladimi?", "Hammasi ham emas. 1D lazer skanerlari faqat chiziqli shtrix-kodlarni oʻqiydi. QR Code uchun kameraga asoslangan 2D skaner yoki telefon kamerasi kerak."],
    ["Qaysi shtrix-kod eng kichik?", "Data Matrix juda kichik oʻlchamda chop etish mumkin boʻlgan 2D shtrix-kodlar qatoriga kiradi, shuning uchun u koʻpincha elektron komponentlar, tibbiy asboblar va dori yorliqlarida qoʻllaniladi."],
    ["Chakana savdo mahsulotlarida EAN-13 oʻrniga QR Code ishlatsa boʻladimi?", "Chakana savdo doʻkonlarida sotish uchun mahsulotga baribir roʻyxatdan oʻtgan EAN-13 yoki UPC kerak. QR Code ni qadoqqa qoʻshimcha sifatida, masalan, mahsulot haqida maʼlumot yoki aksiyalar uchun qoʻshish mumkin."]
  ],
  body: `
<p>Shtrix-kod yaratayotganda odatda tugʻiladigan birinchi savol: chiziqli shtrix-koddan foydalanish kerakmi yoki QR Code danmi? Ikkalasi ham shtrix-kod deb ataladi, biroq ular maʼlumotni turlicha saqlaydi, shuning uchun vazifalari ham farq qiladi.</p>

<h2>1D (chiziqli) shtrix-kod</h2>
<p>1D shtrix-kod — vertikal chiziqlardan iborat shtrix-kod. Maʼlumot bir yoʻnalishda, yaʼni chapdan oʻngga saqlanadi. Eng mashhur misollar — mahsulot qadogʻidagi <a href="/?type=ean13">EAN-13</a> va joʻnatma yorliqlaridagi <a href="/?type=code128">Code 128</a>.</p>
<ul>
  <li>Sigʻimi kichik, odatda oʻndan bir necha oʻngacha belgi.</li>
  <li>Arzon va juda tez ishlaydigan kassa lazer skanerlari bilan oʻqiladi.</li>
  <li>Mahsulot kodlari, seriya raqamlari va yuk xati raqamlari uchun mos.</li>
</ul>

<h2>2D shtrix-kod</h2>
<p>2D shtrix-kod maʼlumotni ikki yoʻnalishda — gorizontal va vertikal saqlaydi, shuning uchun unga ancha koʻp maʼlumot sigʻadi. Masalan, <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> va <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Sigʻimi katta — oʻnlab belgidan minglab belgigacha.</li>
  <li>Telefon kamerasi bilan turli yoʻnalishlardan skanerlash mumkin.</li>
  <li>Xatolarni tuzatish funksiyasi bor, shuning uchun bir qismi shikastlangan boʻlsa ham oʻqiladi.</li>
  <li>Juda kichik qilib yaratish mumkin, masalan, elektron komponentlardagi Data Matrix.</li>
</ul>

<h2>Qisqacha taqqoslash</h2>
<table>
  <thead><tr><th></th><th>1D shtrix-kod</th><th>2D shtrix-kod</th></tr></thead>
  <tbody>
    <tr><td>Shakli</td><td>Vertikal chiziqlar</td><td>Kvadrat ichidagi katakchalar/nuqtalar</td></tr>
    <tr><td>Sigʻimi</td><td>Kichik</td><td>Katta</td></tr>
    <tr><td>Skanerlash vositasi</td><td>Lazer skaner yoki kamera</td><td>Kamera yoki 2D skaner</td></tr>
    <tr><td>Shikastlanishga chidamliligi</td><td>Cheklangan</td><td>Xatolarni tuzatish funksiyasi bor</td></tr>
    <tr><td>Misollar</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Qaysi birini qachon ishlatish kerak?</h2>
<ul>
  <li><strong>Doʻkon yoki minimarketda sotiladigan mahsulotlar</strong>: GS1 tomonidan rasmiy berilgan EAN-13 dan foydalaning. <a href="/artikel/cara-mendapatkan-barcode-ean-13">EAN-13 shtrix-kodini olish usuli</a>ni koʻring.</li>
  <li><strong>Ombor, javon yoki joʻnatma yorliqlari</strong>: Code 128 keng tarqalgan tanlov, chunki u ixcham va harflar hamda raqamlarni qoʻllab-quvvatlaydi.</li>
  <li><strong>Mijozlar uchun havola, menyu, WiFi yoki kontakt</strong>: QR Code, chunki uni telefon kamerasi bilan toʻgʻridan-toʻgʻri skanerlash mumkin.</li>
  <li><strong>Juda kichik yorliqlar</strong>: Data Matrix.</li>
  <li><strong>Shaxsiy guvohnomalar, aviachiptalar yoki hujjatlar</strong>: PDF417 yoki Aztec.</li>
</ul>
<p>Yuqoridagi barcha turlarni <a href="/">I Need Barcode</a> saytida bepul yaratishingiz mumkin. Agar hali ham ikkilanayotgan boʻlsangiz, mijozlar ehtiyojlari uchun QR Code dan, ichki ehtiyojlar uchun esa Code 128 dan boshlang.</p>
`
};
