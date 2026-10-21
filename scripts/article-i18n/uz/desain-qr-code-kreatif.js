// desain-qr-code-kreatif
module.exports = {
  title: "Skanerlanishi saqlanib qoladigan ijodiy QR Code dizayni",
  desc: "QR Code ni yurak yoki doira shaklida yaratish, unga ramka va rang berish mumkin. Dizayn ham jozibali, ham oson skanerlanadigan boʻlishi uchun qoidalarni bilib oling.",
  tags: ["Dizayn", "QR Code"],
  coverCaption: "Rang QR Code ni jozibaliroq qiladi, faqat kontrast kuchli boʻlib qolishi kerak.",
  inlineCaption: "QR Code dizaynini chop etishdan oldin doimo sinab koʻrish maʼqul.",
  faq: [
    ["Yurak shaklidagi QR Code skanerlanadimi?", "Ha. Asl QR Code markazda butunligicha qoladi, qolgan qismi esa shunchaki bezak naqshidir. Kontrast kuchli va oʻlcham yetarli boʻlsa, QR Code oʻqilaveradi."],
    ["QR Code uchun qaysi ranglar xavfsiz?", "Oq yoki juda och fondagi qora, toʻq koʻk, toʻq yashil, binafsha yoki toʻq jigarrang kabi toʻq ranglar."],
    ["QR Code ga yozuv yoki ramka qoʻshish mumkinmi?", "Mumkin. «MENI SKANERLANG» kabi chaqiriqli ramka, agar QR Code ni yopib qoʻymasa, aksincha, odamlarga uning vazifasini tushunishga yordam beradi."]
  ],
  body: `
<p>Oq-qora QR Code, albatta, oʻz vazifasini bajaradi, ammo qadoq, taklifnoma yoki reklama materiallarida koʻpincha quruq koʻrinadi. Ozgina dizayn qoʻshib, QR Code ni vazifasini yoʻqotmagan holda jozibaliroq qilish mumkin. Asosiysi - qaysi qismlarni oʻzgartirish mumkinligi va qaysilari butunligicha qolishi kerakligini tushunish.</p>

<h2>Tashqi shakl: yurak, doira va boshqalar</h2>
<p><a href="/?type=qrcode">QR Code generatori</a>ning Dizayn boʻlimida doira, yurak, olti burchak, sakkiz burchak, yulduz yoki romb kabi shakllarni tanlashingiz mumkin. Asl QR Code markazda qoladi, qolgan qismi esa tanlangan shakl hosil boʻlguncha bezak naqshi bilan toʻldiriladi. Bezak naqshida maʼlumot boʻlmaydi, shuning uchun asl QR Code atrofida boʻsh oraliq boʻlsa, u skanerlashga xalaqit bermaydi.</p>

<h2>Nuqtalar uslubi</h2>
<p>QR Code katakchalarini yumaloq shakl yoki dumaloq nuqtalarga aylantirish mumkin. Oson skanerlanishi uchun burchaklardagi uchta katta kvadrat (finder pattern) kvadrat holida butun qolgani maʼqul, chunki kamera birinchi navbatda aynan shu qismni qidiradi. Siz qaysi nuqtalar uslubini tanlamang, generatorimiz bu qismni doimo butun kvadrat sifatida, koʻpi bilan burchaklari yumaloqlangan holda chizadi.</p>

<h2>Rang</h2>
<ul>
  <li>QR Code uchun <strong>toʻq</strong>, fon uchun esa <strong>och</strong> rangdan foydalaning. Toʻq koʻk, toʻq yashil, binafsha yoki toʻq jigarrang odatda xavfsiz.</li>
  <li>QR Code uchun sariq, och pushti yoki och kulrang kabi xira ranglardan saqlaning.</li>
  <li>Ranglarni teskari qilib, toʻq fonda och rangli QR Code yaratmang, chunki buni hamma skaner ilovalari ham qoʻllab-quvvatlamaydi.</li>
</ul>

<h2>Ramka va chaqiriq</h2>
<p>«MENI SKANERLANG», «MENYU» yoki «WIFI NI SKANERLANG» kabi chaqiriq yozilgan ramka odamlarga QR Code vazifasini tushunishga yordam berishi isbotlangan. Pastki yorliq, yuqori yorliq, burchak, pufak, doira yoki lenta koʻrinishidagi ramkani tanlab, uning yozuvi va rangini oʻzgartirishingiz mumkin.</p>

<h2>Dizayn oʻqiladigan boʻlib qolishi uchun qoidalar</h2>
<ol>
  <li>QR Code va uning foni oʻrtasida kuchli <strong>kontrast</strong>ni saqlang.</li>
  <li>Burchaklardagi <strong>uchta belgi kvadrati</strong> aniq koʻrinib tursin va yopilib qolmasin.</li>
  <li>QR Code va ramka atrofida <strong>boʻsh joy</strong> qoldiring.</li>
  <li>Dizayn berilgan QR Code ni haddan tashqari kichraytirmang. Yurak kabi shakllar asl QR Code maydonini tasvirning umumiy oʻlchamidan kichikroq qiladi.</li>
  <li>Chop etishdan oldin bir nechta telefonda <strong>sinab koʻring</strong>.</li>
</ol>

<p>Agar dizayningiz qiyin skanerlansa, sababini topish uchun <strong>Asl holatga qaytarish</strong> tugmasi yordamida sozlamalarni birma-bir asosiy holatga qaytaring. Boshqa keng tarqalgan sabablar haqida <a href="/artikel/barcode-tidak-bisa-dipindai">shtrix-kod skanerlanmasligining 7 sababi</a> maqolasida oʻqishingiz mumkin.</p>
`
};
