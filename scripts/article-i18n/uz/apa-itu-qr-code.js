// apa-itu-qr-code
module.exports = {
  title: "QR Code nima va u qanday ishlaydi?",
  desc: "QR Code havola, matn va hatto WiFi maʼlumotlarini saqlay oladi hamda bir qismi shikastlangan boʻlsa ham oʻqiladi. Uning ishlash tamoyili va afzalliklari bilan tanishing.",
  tags: ["Asoslar", "QR Code"],
  coverCaption: "QR Code telefon kamerasi bilan toʻgʻridan-toʻgʻri skanerlanadi.",
  inlineCaption: "Har bir QR Code mayda qora va oq katakchalardan tashkil topgan.",
  faq: [
    ["QR Code muddati tugashi mumkinmi?", "Statik QR Code muddati hech qachon tugamaydi, chunki uning maʼlumotlari bevosita tasvirga joylangan. Dinamik QR Code esa havola xizmatini koʻrsatuvchi provayder ishini toʻxtatsa yoki obuna muddati tugasa, ishlamay qolishi mumkin."],
    ["QR Code qancha maʼlumot saqlay oladi?", "QR Code ning eng katta versiyasi 7.089 tagacha raqam yoki taxminan 2.953 bayt maʼlumot saqlay oladi. Biroq maʼlumot qancha kam boʻlsa, QR Code shuncha oson skanerlanadi."],
    ["QR Code bir qismi shikastlansa ham oʻqiladimi?", "Ha. Xatolarni tuzatish funksiyasi tufayli QR Code taxminan 7% dan 30% gacha qismi shikastlangan boʻlsa ham oʻqiladi. Bu qoʻllanilgan L, M, Q yoki H tuzatish darajasiga bogʻliq."]
  ],
  body: `
<p>QR Code (Quick Response Code - tezkor javob kodi) - mayda qora va oq katakchalardan tashkil topgan kvadrat shaklidagi 2D shtrix-kod. Faqat oʻnlab raqamlarni saqlaydigan chiziqli shtrix-koddan farqli oʻlaroq, QR Code sayt havolasi, uzun matn, telefon raqami, kontakt va hatto WiFi tarmogʻi maʼlumotlarini saqlay oladi.</p>
<p>QR Code 1994-yilda yaponiyalik Denso Wave kompaniyasi tomonidan zavoddagi avtomobil ehtiyot qismlarini kuzatish uchun ishlab chiqilgan. Bugungi kunda QR Code raqamli toʻlovlardan tortib restoran menyularigacha hamma joyda qoʻllaniladi, chunki uni telefon kamerasi bilan toʻgʻridan-toʻgʻri skanerlash mumkin.</p>

<h2>QR Code qismlari</h2>
<ul>
  <li><strong>Burchaklardagi uchta katta kvadrat</strong> (finder pattern): kameraga QR Code ni topish va uning yoʻnalishini aniqlashga yordam beradi, shu bois QR Code qiya yoki teskari holatda skanerlansa ham oʻqiladi.</li>
  <li><strong>Tekislash naqshi</strong> (alignment pattern): bukilgan yoki burchak ostidan koʻrinayotgan QR Code ni oʻqishga yordam beradigan kichik kvadrat.</li>
  <li><strong>Maʼlumotlar maydoni</strong>: siz saqlagan maʼlumotni oʻz ichiga olgan mayda katakchalar.</li>
  <li><strong>Sokin hudud</strong> (quiet zone): QR Code ni fondan oson ajratish uchun uning atrofidagi boʻsh joy.</li>
</ul>

<h2>Qancha maʼlumot saqlay oladi?</h2>
<p>QR Code ning 40 ta oʻlcham versiyasi bor. Eng katta versiyasi 7.089 tagacha raqam yoki taxminan 2.953 bayt maʼlumot saqlay oladi. Amalda saqlanadigan maʼlumot qancha kam boʻlsa, katakchalar shuncha katta boʻladi va QR Code shuncha oson skanerlanadi. Shuning uchun qisqa havola juda uzun havoladan yaxshiroq.</p>

<h2>Shikastlangan boʻlsa ham oʻqiladi</h2>
<p>QR Code xatolarni tuzatish (error correction) funksiyasidan foydalanadi. Uning toʻrt darajasi bor:</p>
<ul>
  <li><strong>L</strong>: QR Code ning taxminan 7% qismi shikastlansa ham maʼlumotni tiklash mumkin.</li>
  <li><strong>M</strong>: taxminan 15%. Bu keng tarqalgan va muvozanatli tanlov.</li>
  <li><strong>Q</strong>: taxminan 25%.</li>
  <li><strong>H</strong>: taxminan 30%. Logotip qoʻyiladigan yoki tez ifloslanadigan joyga chop etiladigan QR Code uchun mos.</li>
</ul>
<p>Tuzatish darajasi qancha yuqori boʻlsa, shuncha koʻp katakcha kerak boʻladi, shu sababli QR Code naqshi zichroq koʻrinadi.</p>

<h2>QR Code ga nimalarni saqlash mumkin?</h2>
<ul>
  <li>Sayt, onlayn doʻkon yoki shakl havolasi.</li>
  <li>WiFi maʼlumotlari - mehmonlar parolni termasdan ulanishlari mumkin. <a href="/artikel/cara-membuat-qr-code-wifi">WiFi uchun QR Code</a> qoʻllanmasini koʻring.</li>
  <li>Raqamli tashrif qogʻozi (vCard), elektron pochta, SMS va WhatsApp chati.</li>
  <li>Xaritadagi joylashuv va tadbir jadvali.</li>
</ul>

<h2>Statik va dinamik QR Code</h2>
<p>Bevosita maʼlumotdan yaratilgan QR Code <strong>statik QR Code</strong> deyiladi: uning mazmuni tasvirga joylangan va uni oʻzgartirib boʻlmaydi, ammo muddati ham hech qachon tugamaydi. <strong>Dinamik</strong> QR Code esa biror xizmatga tegishli qisqa havolani saqlaydi va u sizning manzilingizga yoʻnaltiradi; manzilni almashtirish mumkin, lekin xizmat ishini toʻxtatsa, QR Code ham ishlamay qoladi. Aksariyat ehtiyojlar uchun statik QR Code yetarli va uzoq muddatda xavfsizroq.</p>

<p>Sinab koʻrmoqchimisiz? Hoziroq <a href="/?type=qrcode">bepul QR Code</a> yarating yoki <a href="/artikel/cara-membuat-qr-code-gratis">3 qadamda QR Code yaratish usuli</a> haqida oʻqing.</p>
`
};
