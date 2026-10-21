// cara-membuat-qr-code-wifi
module.exports = {
  title: "Mehmonlar parol termasligi uchun WiFi QR Code ni qanday yaratish mumkin",
  desc: "WiFi ga ulanish uchun mehmonlarga QR Code ni skanerlash kifoya. Bu kafe, ofis, mehmonxona va uy uchun juda qulay. Uni qanday yaratish va joylashtirish haqida bilib oling.",
  tags: ["Qoʻllanma", "QR Code"],
  coverCaption: "Routerdagi WiFi maʼlumotlarini bitta QR Code ga saqlash mumkin.",
  inlineCaption: "Kafe mehmonlari parol termasdan darhol ulanishlari mumkin.",
  faq: [
    ["WiFi QR Code ni barcha telefonlar skanerlay oladimi?", "iOS 11 va undan yuqori versiyali iPhone hamda Android 10 va undan yuqori versiyali aksariyat qurilmalarning oʻrnatilgan kamerasi uni darhol oʻqiy oladi. Eski telefonlarga QR skaner ilovasi kerak boʻlishi mumkin."],
    ["WiFi QR Code xavfsizmi?", "Ushbu QR Code ni skanerlagan har qanday kishi WiFi tarmogʻingizga ulana oladi. Shuning uchun mehmonlar tarmogʻidan foydalaning va shaxsiy tarmoq QR Code ini jamoat joylarida joylashtirmang."],
    ["WiFi paroli oʻzgartirilsa, nima qilish kerak?", "WiFi QR Code ni qaytadan yarating va chop eting, chunki eski QR Code da hali ham eski parol saqlangan."]
  ],
  body: `
<p>Mehmonlarga uzun WiFi parolini harfma-harf aytib berish, ayniqsa unda katta harflar, raqamlar va belgilar boʻlsa, koʻpincha noqulay. <strong>WiFi QR Code</strong> yordamida mehmonlar telefon kamerasini QR Code ga qaratishi kifoya - ular darhol ulanadi.</p>

<h2>WiFi QR Code qanday ishlaydi</h2>
<p>WiFi QR Code tarmoq nomi (SSID), xavfsizlik turi va parolni telefonlar taniydigan maxsus formatda saqlaydi, masalan, <code>WIFI:T:WPA;S:TarmoqNomi;P:Parol;;</code>. iPhone (iOS 11 va undan yuqori) hamda aksariyat Android qurilmalarining (Android 10 va undan yuqori) oʻrnatilgan kamerasi uni qoʻshimcha ilovasiz toʻgʻridan-toʻgʻri oʻqiy oladi.</p>

<h2>Yaratish bosqichlari</h2>
<ol>
  <li><a href="/?type=qrcode">QR Code generatori</a>ni oching va Maʼlumotlar boʻlimida <strong>WiFi</strong> yorligʻini tanlang.</li>
  <li><strong>Tarmoq nomi</strong>ni WiFi roʻyxatida qanday koʻrinsa, katta-kichik harflarini ham saqlagan holda aynan shunday yozing.</li>
  <li><strong>Parol</strong>ni kiriting va xavfsizlik turini tanlang. Aksariyat uy va ofis routerlari WPA/WPA2/WPA3 dan foydalanadi.</li>
  <li>Agar WiFi nomingiz roʻyxatda koʻrinmasa, <strong>Yashirin tarmoq</strong> belgisini qoʻying.</li>
  <li>Mehmonlar vazifasini tushunishlari uchun, masalan, «WIFI NI SKANERLANG» yozuvli ramka qoʻshing va PNG ni yuklab oling.</li>
</ol>

<h2>Uni qayerga joylashtirish kerak?</h2>
<ul>
  <li>Kafe yoki restoran stolidagi kichik kartochkaga.</li>
  <li>Mehmonxona zali, qabulxona yoki ofis majlislar xonasi devoriga.</li>
  <li>Mehmonxona xonasiga - eshik yoki televizor yoniga yopishtirib.</li>
  <li>Uydagi routerning pastki qismiga - oila aʼzolari yangi qurilmalarni oson ulashlari uchun.</li>
</ul>

<h2>Xavfsizlik boʻyicha maslahatlar</h2>
<ul>
  <li>Agar routeringiz qoʻllab-quvvatlasa, <strong>mehmonlar tarmogʻi</strong>dan (guest network) foydalaning, shunda mehmonlar ofis kompyuterlari bilan bir tarmoqqa kirmaydi.</li>
  <li>WiFi paroli oʻzgartirilsa, QR Code ni qaytadan yarating va chop eting, chunki eski QR Code da eski parol qoladi.</li>
  <li>Shaxsiy tarmoq uchun WiFi QR Code ni hamma suratga olishi mumkin boʻlgan jamoat joylarida joylashtirmang.</li>
</ul>

<h2>Agar QR Code orqali ulanib boʻlmasa</h2>
<p>Tarmoq nomi va parolning yozilishini qayta tekshiring, chunki bitta notoʻgʻri harf telefonning ulanishiga toʻsqinlik qiladi. Shuningdek, tanlangan xavfsizlik turi router sozlamalariga mos ekaniga ishonch hosil qiling. Skanerlash bilan bogʻliq boshqa muammolar uchun <a href="/artikel/barcode-tidak-bisa-dipindai">shtrix-kod skanerlanmasligining sabablari</a> maqolasini oʻqing.</p>
`
};
