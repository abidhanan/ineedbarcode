// apa-itu-barcode
module.exports = {
  title: "Kas ir svītrkods? Definīcija, darbības princips un veidi",
  desc: "Svītrkods ir gandrīz uz katras preces, ko jūs pērkat. Uzziniet, kā tas darbojas, iepazīstieties ar tā īso vēsturi un biežāk izmantotajiem svītrkodu veidiem.",
  tags: ["Pamati", "Svītrkodi"],
  coverCaption: "Svītrkods uz iepakojuma glabā unikālu preces kodu.",
  inlineCaption: "Kasieris ar skeneri svītrkodu nolasa acumirklī.",
  faq: [
    ["Kāda ir atšķirība starp svītrkodu un QR Code?", "QR Code ir viens no svītrkodu veidiem, proti, 2D svītrkods. Lineārais (1D) svītrkods glabā tikai dažas rakstzīmes un tiek lasīts no kreisās uz labo pusi, savukārt QR Code datus glabā divos virzienos, tāpēc tajā ietilpst saite, teksts vai WiFi dati."],
    ["Vai svītrkodā ir saglabāta preces cena?", "Parasti nē. Preces svītrkodā ir tikai kods. Cena un preces nosaukums tiek glabāti kases sistēmā un atrasti pēc noskenētā koda."],
    ["Vai par svītrkoda izveidi ir jāmaksā?", "Nē. Svītrkoda attēlu var izveidot bez maksas, piemēram, I Need Barcode. Par maksu jāreģistrē tikai oficiālais numurs mazumtirdzniecības preču svītrkodiem, piemēram, EAN-13, ar GS1 starpniecību."]
  ],
  body: `
<p>Svītrkods ir veids, kā pierakstīt datus rakstā, ko var nolasīt mašīna. Šis raksts parasti sastāv no dažāda platuma melnām un baltām svītrām vai no maziem kvadrātiņiem, kas sakārtoti kvadrātā. Skenējot raksts tiek atkal pārvērsts ciparos vai tekstā, piemēram, preces kodā, sūtījuma numurā vai vietnes adresē.</p>
<p>Tā kā svītrkodu nolasa mašīna, tas ir daudz ātrāk un ar mazāk kļūdām nekā kodu ievadīt ar roku. Tāpēc svītrkodus izmanto kasēs, noliktavās, slimnīcās, uz biļetēm un pat pārtikas iepakojumiem.</p>

<h2>Īsa svītrkoda vēsture</h2>
<p>Svītrkoda ideju 1952. gadā Amerikas Savienotajās Valstīs patentēja Normans Džozefs Vudlends un Bernards Silvers. Veikalos svītrkodus patiešām sāka lietot tikai 1974. gadā, kad kādā Ohaio lielveikalā tika noskenēta košļājamās gumijas paciņa ar UPC kodu. Kopš tā laika svītrkodi izplatījās visā pasaulē, un tagad tos globāli pārvalda standartu organizācija GS1.</p>

<h2>Kā darbojas svītrkods?</h2>
<p>Skeneris apgaismo svītrkodu un nolasa atstaroto gaismu. Tumšās daļas atstaro maz gaismas, gaišās – daudz. Šī atšķirība tiek pārvērsta nullīšu un vieninieku virknē, ko pēc tam salīdzina ar attiecīgā svītrkoda veida noteikumiem. Daudziem svītrkodiem ir arī <strong>kontrolcipars</strong> (check digit) – pēdējais cipars, ko aprēķina no iepriekšējiem cipariem. Ja aprēķina rezultāts nesakrīt, skeneris saprot, ka kaut kas nav kārtībā, un rezultātu noraida.</p>
<p>Pats svītrkods parasti glabā tikai kodu. Tāda informācija kā preces nosaukums vai cena tiek glabāta kases sistēmā vai datubāzē un atrasta pēc šī koda.</p>

<h2>Biežāk izmantotie svītrkodu veidi</h2>
<p>Kopumā svītrkodi iedalās divās lielās grupās:</p>
<ul>
  <li><strong>1D (lineārie) svītrkodi</strong>: vertikālas svītras, ko nolasa no kreisās uz labo pusi. Piemēram, <a href="/?type=ean13">EAN-13</a> un <a href="/?type=upca">UPC-A</a> mazumtirdzniecības precēm, kā arī <a href="/?type=code128">Code 128</a> un <a href="/?type=code39">Code 39</a> loģistikai un noliktavām.</li>
  <li><strong>2D svītrkodi</strong>: kvadrātiņu raksts, kas datus glabā divos virzienos, tāpēc tajā ietilpst daudz vairāk. Piemēram, <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> un <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Turklāt ir īpaši svītrkodi pastam un sūtījumiem, veselības aprūpei, kā arī GS1 standarti piegādes ķēdei. Sīkāk par to atšķirībām varat lasīt rakstā <a href="/artikel/perbedaan-barcode-1d-dan-2d">1D un 2D svītrkodu atšķirības</a>.</p>

<h2>Kam izmanto svītrkodus?</h2>
<ul>
  <li><strong>Mazumtirdzniecība</strong>: paātrina darbu kasē un automātiski uzskaita krājumus.</li>
  <li><strong>Noliktavas un sūtījumi</strong>: ļauj izsekot precēm un pakām no vienas vietas uz citu.</li>
  <li><strong>Biļetes un pasākumi</strong>: biļetes autentiskumu var pārbaudīt ar vienu skenējumu.</li>
  <li><strong>Mārketings</strong>: QR Code uz brošūras vai iepakojuma ved cilvēkus tieši uz jūsu vietni, ēdienkarti vai WhatsApp.</li>
</ul>

<h2>Svītrkoda izveide pašam</h2>
<p>Lai izveidotu svītrkodu, maksas lietotne nav vajadzīga. Vietnē <a href="/">I Need Barcode</a> izvēlieties svītrkoda veidu, ievadiet datus un lejupielādējiet to kā PNG attēlu. Pieejami vairāk nekā 100 veidi, un visi ir bez maksas un bez reģistrācijas.</p>
`
};
