// apa-itu-barcode
module.exports = {
  title: "Shtrix-kod nima? Taʼrifi, ishlash tamoyili va turlari",
  desc: "Shtrix-kod siz sotib oladigan deyarli barcha mahsulotlarda bor. Uning qanday ishlashi, qisqacha tarixi va eng koʻp qoʻllaniladigan turlari bilan tanishing.",
  tags: ["Asoslar", "Shtrix-kod"],
  coverCaption: "Qadoqdagi shtrix-kod mahsulotning noyob kodini saqlaydi.",
  inlineCaption: "Kassir shtrix-kodni bir zumda oʻqish uchun skanerdan foydalanadi.",
  faq: [
    ["Shtrix-kod bilan QR Code oʻrtasida qanday farq bor?", "QR Code shtrix-kodning bir turi, yaʼni 2D shtrix-koddir. Chiziqli (1D) shtrix-kod faqat bir nechta belgini saqlaydi va chapdan oʻngga oʻqiladi, QR Code esa maʼlumotni ikki yoʻnalishda saqlaydi, shuning uchun unga havola, matn yoki WiFi maʼlumotlari sigʻadi."],
    ["Shtrix-kodda mahsulot narxi saqlanadimi?", "Odatda yoʻq. Mahsulot shtrix-kodida faqat kod boʻladi. Mahsulot narxi va nomi kassa tizimida saqlanadi va skanerlangan kod boʻyicha qidirib topiladi."],
    ["Shtrix-kod yaratish pullikmi?", "Yoʻq. Shtrix-kod tasvirini bepul yaratish mumkin, masalan, I Need Barcode saytida. Pullik roʻyxatdan oʻtkazish faqat EAN-13 kabi chakana savdo mahsulotlari shtrix-kodlari uchun GS1 orqali beriladigan rasmiy raqamlarga kerak."]
  ],
  body: `
<p>Shtrix-kod - bu maʼlumotni mashina oʻqiy oladigan naqsh koʻrinishida yozish usuli. Bu naqsh odatda turli kenglikdagi qora va oq chiziqlardan yoki kvadrat ichida joylashgan mayda katakchalardan iborat boʻladi. Skanerlanganda naqsh yana raqam yoki matnga aylantiriladi, masalan, mahsulot kodi, yuk xati raqami yoki sayt manzili.</p>
<p>Mashina oʻqigani uchun shtrix-kod kodni qoʻlda terishdan ancha tezroq va xatolar ham kamroq boʻladi. Shu sababli shtrix-kodlar kassalarda, omborlarda, kasalxonalarda, chiptalarda va hatto oziq-ovqat qadoqlarida qoʻllaniladi.</p>

<h2>Shtrix-kodning qisqacha tarixi</h2>
<p>Shtrix-kod gʻoyasi 1952-yilda AQShda Norman Jozef Vudlend va Bernard Silver tomonidan patentlangan. Doʻkonlarda esa shtrix-kod haqiqatan ham faqat 1974-yilda, Ogayo shtatidagi supermarketlardan birida bir quti saqich UPC kodi bilan skanerlanganda qoʻllana boshlangan. Oʻshandan beri shtrix-kod butun dunyoga tarqaldi va bugungi kunda GS1 deb ataluvchi standartlar tashkiloti tomonidan global miqyosda boshqariladi.</p>

<h2>Shtrix-kod qanday ishlaydi?</h2>
<p>Skaner shtrix-kodni yoritadi va undan qaytgan nurni oʻqiydi. Qora qismlar kam nur qaytaradi, oq qismlar esa koʻp. Bu farq 0 va 1 raqamlari ketma-ketligiga aylantiriladi va keyin oʻsha shtrix-kod turining qoidalari bilan solishtiriladi. Koʻplab shtrix-kodlarda <strong>nazorat raqami</strong> (check digit) ham bor: bu oldingi raqamlardan hisoblab chiqiladigan oxirgi raqam. Agar hisob natijasi mos kelmasa, skaner xato borligini biladi va natijani rad etadi.</p>
<p>Shtrix-kodning oʻzida odatda faqat kod saqlanadi. Mahsulot nomi yoki narxi kabi maʼlumotlar kassa tizimida yoki maʼlumotlar bazasida saqlanadi va oʻsha kod boʻyicha qidirib topiladi.</p>

<h2>Koʻp qoʻllaniladigan shtrix-kod turlari</h2>
<p>Umuman olganda, shtrix-kodlar ikkita katta guruhga boʻlinadi:</p>
<ul>
  <li><strong>1D (chiziqli) shtrix-kodlar</strong>: chapdan oʻngga oʻqiladigan vertikal chiziqlardan iborat. Masalan, chakana savdo mahsulotlari uchun <a href="/?type=ean13">EAN-13</a> va <a href="/?type=upca">UPC-A</a>, logistika va omborlar uchun esa <a href="/?type=code128">Code 128</a> va <a href="/?type=code39">Code 39</a>.</li>
  <li><strong>2D shtrix-kodlar</strong>: maʼlumotni ikki yoʻnalishda saqlaydigan katakli naqshdan iborat, shuning uchun ularga ancha koʻp maʼlumot sigʻadi. Masalan, <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> va <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Bundan tashqari, pochta va yetkazib berish, sogʻliqni saqlash uchun maxsus shtrix-kodlar hamda taʼminot zanjiri uchun GS1 standartlari ham mavjud. Ularning farqlari haqida batafsil maʼlumotni <a href="/artikel/perbedaan-barcode-1d-dan-2d">1D va 2D shtrix-kodlar oʻrtasidagi farq</a> maqolasida oʻqishingiz mumkin.</p>

<h2>Shtrix-kod nimalar uchun kerak?</h2>
<ul>
  <li><strong>Chakana savdo</strong>: kassadagi ishni tezlashtiradi va zaxirani avtomatik hisobga oladi.</li>
  <li><strong>Ombor va yetkazib berish</strong>: tovarlar va joʻnatmalarni bir joydan boshqasiga kuzatib boradi.</li>
  <li><strong>Chiptalar va tadbirlar</strong>: chiptaning haqiqiyligini bir marta skanerlash bilan tekshiradi.</li>
  <li><strong>Marketing</strong>: bukletlar yoki qadoqlardagi QR Code odamlarni toʻgʻridan-toʻgʻri saytingiz, menyuingiz yoki WhatsApp sahifangizga olib boradi.</li>
</ul>

<h2>Shtrix-kodni oʻzingiz yarating</h2>
<p>Shtrix-kod yaratish uchun pullik ilova shart emas. <a href="/">I Need Barcode</a> saytida shtrix-kod turini tanlang, maʼlumotlarni kiriting va PNG tasvir sifatida yuklab oling. Tanlash uchun 100 dan ortiq tur mavjud va ularning barchasi bepul, roʻyxatdan oʻtish ham shart emas.</p>
`
};
