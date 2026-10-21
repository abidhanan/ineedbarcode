// Maxfiylik siyosati va Foydalanish shartlari (o'zbekcha, lotin yozuvi).
module.exports = {
  labels: {
    privacy: "Maxfiylik siyosati",
    terms: "Foydalanish shartlari",
    effective: "Kuchga kirgan sana: {date}"
  },
  privacy: {
    title: "Maxfiylik siyosati",
    desc: "Shtrix-kod va QR Code yaratganingizda I Need Barcode qanday ma'lumotlarni qayta ishlaydi va biz ular bilan qanday munosabatda bo'lamiz.",
    body: `
<p>I Need Barcode (ineedbarcode.com) - Abid Hanan Wicaksono tomonidan boshqariladigan bepul shtrix-kod va QR Code generatori. Ushbu siyosat veb-saytdan foydalanganingizda qanday ma'lumotlarni qayta ishlashimiz va ular bilan qanday munosabatda bo'lishimizni tushuntiradi. Biz ataylab imkon qadar kam ma'lumot yig'amiz: ushbu xizmatdan foydalanish uchun ro'yxatdan o'tishingiz, tizimga kirishingiz yoki ismingiz va elektron pochtangizni berishingiz shart emas.</p>
<h2>Biz qayta ishlaydigan ma'lumotlar</h2>
<ul>
<li><strong>Shtrix-kod mazmuni.</strong> Siz kiritadigan matn, havolalar, WiFi ma'lumotlari, kontaktlar va boshqa ma'lumotlar bevosita brauzeringizda qayta ishlanadi. Shtrix-kod tasvirlari qurilmangizda yaratiladi va serverlarimizga yuborilmaydi, jumladan, bir vaqtning o'zida ko'plab shtrix-kodlar yaratganingizda ham.</li>
<li><strong>Joylashuv.</strong> "Joylashuvimdan foydalanish" tugmasi qurilma joylashuvini faqat siz brauzerda ruxsat berganingizdan keyin so'raydi. Koordinatalar faqat forma maydoniga kiritiladi va bizga yuborilmaydi.</li>
<li><strong>Taxminiy mamlakat.</strong> Boshlang'ich tilni tanlash uchun ushbu veb-sayt serverimizga yuborilgan so'rovdan taxminiy mamlakatingizni aniqlashi mumkin. Bu ma'lumot hech qanday ma'lumotlar bazasida saqlanmaydi.</li>
<li><strong>Texnik ma'lumotlar.</strong> Deyarli barcha veb-saytlardagi kabi, xosting provayderimiz (Vercel) xavfsizlik va ishlash maqsadida IP manzil, brauzer turi va kirish vaqti kabi so'rovlarga oid texnik ma'lumotlarni qayd etadi. Ushbu yozuvlar Vercel siyosatiga muvofiq faqat vaqtincha saqlanadi.</li>
<li><strong>Maqola statistikasi.</strong> Yoqilgan bo'lsa, ko'rishlar, yoqtirishlar va ulashishlar soni sizni aniqlaydigan hech qanday ma'lumotsiz faqat har bir maqola bo'yicha umumiy son sifatida saqlanadi.</li>
</ul>
<h2>Cookie fayllari va brauzerdagi saqlash</h2>
<ul>
<li><strong>inbLang</strong>: ushbu qurilmada tanlagan tilingizni eslab qoladi (localStorage).</li>
<li><strong>inbCountry</strong>: tilni qayta aniqlash kerak bo'lmasligi uchun taxminiy mamlakatni bir seans davomida saqlaydi (sessionStorage).</li>
<li><strong>Boshqa mahalliy saqlash</strong> (localStorage va sessionStorage): siz yoqtirgan maqolalarni belgilaydi va bitta tashrifning ikki marta hisoblanishining oldini oladi. Bu ma'lumotlar qurilmangizda qoladi.</li>
<li><strong>Uchinchi tomon tahliliy cookie fayllari</strong> Google Analytics va Microsoft Clarity'dan; ular quyida tushuntirilgan.</li>
</ul>
<h2>Tahlil</h2>
<p>Veb-saytdan qanday foydalanilishini tushunish va uni yaxshilash uchun tahlil vositalaridan foydalanamiz. Bu vositalar faqat siz sahifa bilan o'zaro ishlashni boshlaganingizdan keyin yuklanadi va agar brauzeringiz Global Privacy Control yoki Do Not Track signalini yuborsa, umuman yuklanmaydi. Shtrix-kod mazmuni va formalar mazmuni hech qachon tahlil vositalariga yuborilmaydi; faqat tanlangan shtrix-kod turi va yuklab olish tugmasini bosish kabi hodisalar qayd etiladi.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google LLC): ochilgan sahifalar, taxminiy mamlakat, qurilma turi va yuqoridagi hodisalarni o'lchash uchun cookie fayllaridan foydalanadi. Reklama uchun saqlash va Google Signals o'chirilgan. Ma'lumotlar Google tomonidan <a href="https://policies.google.com/privacy">Google maxfiylik siyosati</a>ga muvofiq qayta ishlanadi.</li>
<li><strong>Microsoft Clarity</strong>: issiqlik xaritalari va seans yozuvlari uchun bosish va aylantirish kabi o'zaro ta'sirlarni qayd etadi hamda kiritish maydonlari mazmunini yashiradi. Ma'lumotlar Microsoft tomonidan <a href="https://privacy.microsoft.com/privacystatement">Microsoft maxfiylik bayonoti</a>ga muvofiq qayta ishlanadi.</li>
</ul>
<p>Global Privacy Control yoki Do Not Track'ni yoqish, brauzer sozlamalarida uchinchi tomon cookie fayllarini bloklash, kuzatuv blokeridan foydalanish yoki <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a> qo'shimchasini o'rnatish orqali tahlildan voz kechishingiz mumkin. Veb-saytdan to'liq foydalanish imkoniyati saqlanib qoladi.</p>
<h2>Uchinchi tomon xizmatlari</h2>
<ul>
<li><strong>Vercel Inc.</strong> xosting xizmatini taqdim etadi. Uning serverlari Indoneziyadan tashqarida joylashgan bo'lishi mumkin.</li>
<li><strong>Google Fonts</strong> ayrim yozuv tizimlarini (masalan, arab, tay yoki yapon) ko'rsatish uchun ishlatiladi. Shriftlar yuklanganda IP manzilingiz Google'ga ko'rinadi.</li>
<li><strong>Ulashish tugmalari</strong> (WhatsApp, Facebook, X, LinkedIn, Telegram) va ijtimoiy tarmoq havolalari ushbu xizmatlar bilan faqat siz ularni bosganingizda bog'lanadi.</li>
</ul>
<h2>Xavfsizlik va ma'lumotlarni ulashish</h2>
<p>Ushbu veb-saytga barcha ulanishlar HTTPS'dan foydalanadi. Biz shaxsiy ma'lumotlarni sotmaymiz, ijaraga bermaymiz va ular bilan savdo qilmaymiz. Ma'lumotlar faqat veb-sayt ishlashi uchun zarur bo'lgan darajada yuqoridagi xizmat ko'rsatuvchilarga yoki qonun talab qilgan hollarda ulashiladi.</p>
<h2>Bolalar</h2>
<p>Ushbu xizmat 13 yoshdan kichik bolalar uchun mo'ljallanmagan va biz bolalarning shaxsiy ma'lumotlarini ataylab yig'maymiz.</p>
<h2>Sizning huquqlaringiz</h2>
<p>Shaxsiy ma'lumotlarni himoya qilish to'g'risidagi 2022-yil 27-sonli Qonunga muvofiq, siz shaxsiy ma'lumotlaringizga kirish, ularni tuzatish yoki o'chirishni talab qilish, shuningdek, ularni qayta ishlashga bergan roziligingizni qaytarib olish huquqiga egasiz. Biz sizni aniqlaydigan deyarli hech qanday ma'lumot saqlamaganimiz sababli, aksariyat so'rovlarni brauzeringizdagi cookie fayllari va sayt ma'lumotlarini o'chirish orqali hal qilish mumkin. Google yoki Microsoft tomonidan qayta ishlanadigan ma'lumotlar uchun ularning xizmatlaridagi maxfiylik sozlamalaridan ham foydalanishingiz mumkin. Boshqa so'rovlar uchun biz bilan bog'laning.</p>
<h2>Siyosatdagi o'zgarishlar</h2>
<p>Ushbu siyosat istalgan vaqtda yangilanishi mumkin. O'zgarishlar ushbu sahifada e'lon qilingan paytdan boshlab kuchga kiradi, kuchga kirish sanasi esa sahifaning yuqori qismida ko'rsatiladi.</p>
<h2>Aloqa</h2>
<p>Ushbu siyosat bo'yicha savollarni har bir sahifaning pastki qismidagi aloqa havolasi yoki <a href="https://abidhanan.my.id">abidhanan.my.id</a> orqali yuborishingiz mumkin. Shuningdek, bizning <a href="/syarat-ketentuan">Foydalanish shartlari</a>mizni ham o'qing.</p>
`
  },
  terms: {
    title: "Foydalanish shartlari",
    desc: "Bepul shtrix-kod va QR Code generatori I Need Barcode'dan foydalanish shartlari.",
    body: `
<p>I Need Barcode'dan (ineedbarcode.com) foydalanish orqali siz quyidagi shartlarga rozilik bildirasiz. Agar rozi bo'lmasangiz, iltimos, ushbu xizmatdan foydalanmang.</p>
<h2>Xizmat haqida</h2>
<p>I Need Barcode - shtrix-kod va QR Code tasvirlarini bevosita brauzerda yaratish uchun bepul vosita. I Need Barcode GS1 yoki boshqa biror shtrix-kod standarti egasi bilan bog'liq emas, ular tomonidan qo'llab-quvvatlanmaydi va ular bilan hamkorlik qilmaydi. QR Code - DENSO WAVE INCORPORATED kompaniyasining ro'yxatdan o'tgan savdo belgisi. Barcha savdo belgilari tegishli egalariga tegishli.</p>
<h2>Ruxsat etilgan foydalanish</h2>
<ul>
<li>Siz yaratgan shtrix-kod tasvirlaridan shaxsiy va tijorat maqsadlarida, masalan, mahsulotlar, qadoqlar, yorliqlar va bosma materiallar uchun suv belgisisiz va bepul foydalanishingiz mumkin.</li>
<li>Biz faqat shtrix-kod tasvirlarini yaratamiz va shtrix-kod raqamlarini bermaymiz. Chakana savdo mahsulotlari uchun EAN, UPC yoki GTIN raqamlari GS1 orqali rasman ro'yxatdan o'tkazilishi kerak.</li>
<li>Shtrix-kod ishlatiladigan joyda amal qiladigan qoidalarga ham rioya qiling, masalan, do'kon, marketpleys yoki yetkazib berish xizmati shartlariga.</li>
</ul>
<h2>Sizning javobgarligingiz</h2>
<p>Shtrix-kodga kiritgan ma'lumotlaringiz va undan qanday foydalanishingiz uchun to'liq javobgarlik sizning zimmangizda. Shtrix-kodni ko'p miqdorda chop etishdan oldin uni har doim bir nechta skaner yoki kamera ilovasi bilan sinab ko'ring va uning o'lchami, ranglari va kontrasti ehtiyojlaringizga mos ekanligiga ishonch hosil qiling.</p>
<h2>Taqiqlangan harakatlar</h2>
<ul>
<li>Firibgarlik, fishing, zararli dastur yoki qonunga zid kontentga olib boradigan shtrix-kod yoki QR Code yaratish.</li>
<li>Shtrix-kodlardan boshqalarga tegishli mahsulotlar, hujjatlar, chiptalar yoki raqamlarni qalbakilashtirish uchun foydalanish.</li>
<li>Xizmatga ommaviy kirish uchun bot, skript yoki avtomatlashtirishdan foydalanish.</li>
<li>Serverlarimiz va xizmatlarimiz ishini buzish, ularni ortiqcha yuklash yoki xavfsizligini buzishga urinish.</li>
</ul>
<h2>Xizmatning mavjudligi</h2>
<p>Xizmat bepul taqdim etiladi va istalgan vaqtda ogohlantirishsiz o'zgartirilishi, cheklanishi yoki to'xtatilishi mumkin.</p>
<h2>Kafolatlardan voz kechish</h2>
<p>Xizmat "boricha" va "mavjud holida", hech qanday kafolatlarsiz taqdim etiladi, jumladan, xizmat doimo ishlashi, xatosiz bo'lishi yoki yaratilgan har bir shtrix-kod barcha qurilmalar tomonidan skanerlanishi va muayyan maqsadga mos bo'lishi haqidagi kafolatlarsiz.</p>
<h2>Javobgarlikni cheklash</h2>
<p>Qonun ruxsat bergan darajada, biz ushbu xizmatdan foydalanish yoki siz yaratgan shtrix-kodlar natijasida yuzaga keladigan bevosita yoki bilvosita zararlar, jumladan, qayta chop etish xarajatlari va o'qib bo'lmaydigan shtrix-kodlar tufayli ko'rilgan zararlar uchun javobgar emasmiz.</p>
<h2>Uchinchi tomon havolalari</h2>
<p>Ushbu veb-saytda uchinchi tomon saytlari va xizmatlariga havolalar mavjud. Biz ushbu saytlarning mazmuni yoki siyosatlari uchun javobgar emasmiz.</p>
<h2>Shartlardagi o'zgarishlar</h2>
<p>Ushbu shartlar istalgan vaqtda yangilanishi mumkin. O'zgarishlar e'lon qilinganidan keyin xizmatdan foydalanishni davom ettirsangiz, eng so'nggi versiyaga rozilik bildirgan hisoblanasiz.</p>
<h2>Amaldagi qonunchilik</h2>
<p>Ushbu shartlar Indoneziya Respublikasi qonunchiligiga bo'ysunadi.</p>
<h2>Aloqa</h2>
<p>Savollar va xabarlarni har bir sahifaning pastki qismidagi aloqa havolasi yoki <a href="https://abidhanan.my.id">abidhanan.my.id</a> orqali yuborishingiz mumkin. Shuningdek, bizning <a href="/kebijakan-privasi">Maxfiylik siyosati</a>mizni ham o'qing.</p>
`
  }
};
