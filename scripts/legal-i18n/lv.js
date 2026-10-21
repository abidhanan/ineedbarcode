// Privātuma politika & Lietošanas noteikumi (latviešu), tulkots no scripts/legal-i18n/id.js.
module.exports = {
  labels: {
    privacy: "Privātuma politika",
    terms: "Lietošanas noteikumi",
    effective: "Spēkā no {date}"
  },
  privacy: {
    title: "Privātuma politika",
    desc: "Kādus datus I Need Barcode apstrādā, kad jūs veidojat svītrkodus un QR Code, un kā mēs ar tiem rīkojamies.",
    body: `
<p>I Need Barcode (ineedbarcode.com) ir bezmaksas svītrkodu un QR Code ģenerators, ko pārvalda Abid Hanan Wicaksono. Šī politika paskaidro, kādus datus mēs apstrādājam, kad jūs izmantojat šo vietni, un kā mēs ar tiem rīkojamies. Mēs apzināti vācam pēc iespējas mazāk datu: lai izmantotu šo pakalpojumu, jums nav jāreģistrējas, jāpiesakās vai jānorāda savs vārds un e-pasta adrese.</p>
<h2>Dati, ko mēs apstrādājam</h2>
<ul>
<li><strong>Svītrkoda saturs.</strong> Teksts, saites, WiFi dati, kontakti un citi jūsu ievadītie dati tiek apstrādāti tieši jūsu pārlūkprogrammā. Svītrkodu attēli tiek izveidoti jūsu ierīcē un netiek sūtīti uz mūsu serveriem, arī tad, ja jūs veidojat daudz svītrkodu vienlaikus.</li>
<li><strong>Atrašanās vieta.</strong> Poga “Izmantot manu atrašanās vietu” pieprasa ierīces atrašanās vietu tikai pēc tam, kad esat to atļāvis savā pārlūkprogrammā. Koordinātas tiek ievietotas tikai veidlapas laukā un netiek sūtītas mums.</li>
<li><strong>Aptuvenā valsts.</strong> Lai izvēlētos sākotnējo valodu, vietne var noteikt jūsu aptuveno valsti pēc pieprasījuma mūsu serverim. Šī informācija netiek saglabāta datubāzē.</li>
<li><strong>Tehniskie dati.</strong> Tāpat kā gandrīz visās vietnēs, mūsu mitināšanas pakalpojumu sniedzējs (Vercel) drošības un darbības nolūkos reģistrē pieprasījumu tehniskos datus, piemēram, IP adresi, pārlūkprogrammas veidu un piekļuves laiku. Šie žurnāli tiek glabāti tikai īslaicīgi saskaņā ar Vercel politiku.</li>
<li><strong>Rakstu statistika.</strong> Ja funkcija ir ieslēgta, skatījumu, atzīmju “patīk” un kopīgojumu skaits tiek saglabāts tikai kā kopējais skaits katram rakstam, bez datiem, kas jūs identificē.</li>
</ul>
<h2>Sīkdatnes un glabāšana pārlūkprogrammā</h2>
<ul>
<li><strong>inbLang</strong>: atceras valodu, ko izvēlējāties šajā ierīcē (localStorage).</li>
<li><strong>inbCountry</strong>: saglabā aptuveno valsti vienas sesijas laikā, lai valodu nebūtu jānosaka atkārtoti (sessionStorage).</li>
<li><strong>Cita lokālā krātuve</strong> (localStorage un sessionStorage): atzīmē rakstus, kas jums patīk, un novērš viena apmeklējuma divkāršu uzskaiti. Šie dati paliek jūsu ierīcē.</li>
<li><strong>Trešo pušu analītikas sīkdatnes</strong> no Google Analytics un Microsoft Clarity, kas aprakstītas tālāk.</li>
</ul>
<h2>Analītika</h2>
<p>Mēs izmantojam analītikas rīkus, lai saprastu, kā vietne tiek lietota, un to uzlabotu. Šie rīki tiek ielādēti tikai pēc tam, kad sākat mijiedarboties ar lapu, un netiek ielādēti vispār, ja jūsu pārlūkprogramma sūta Global Privacy Control vai Do Not Track signālu. Svītrkodu un veidlapu saturs nekad netiek sūtīts analītikas rīkiem; tiek reģistrēti tikai notikumi, piemēram, izvēlētais svītrkoda veids un lejupielādes pogas klikšķi.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google LLC): izmanto sīkdatnes, lai mērītu atvērtās lapas, aptuveno valsti, ierīces veidu un iepriekš minētos notikumus. Glabāšana reklāmas nolūkos un Google Signals ir atspējoti. Datus apstrādā Google saskaņā ar <a href="https://policies.google.com/privacy">Google konfidencialitātes politiku</a>.</li>
<li><strong>Microsoft Clarity</strong>: reģistrē mijiedarbību, piemēram, klikšķus un ritināšanu, siltuma kartēm un sesiju ierakstiem, un maskē ievades lauku saturu. Datus apstrādā Microsoft saskaņā ar <a href="https://privacy.microsoft.com/privacystatement">Microsoft paziņojumu par konfidencialitāti</a>.</li>
</ul>
<p>Jūs varat atteikties no analītikas, ieslēdzot Global Privacy Control vai Do Not Track, bloķējot trešo pušu sīkdatnes pārlūkprogrammas iestatījumos, izmantojot izsekošanas bloķētāju vai instalējot <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a>. Vietni joprojām var pilnībā izmantot.</p>
<h2>Trešo pušu pakalpojumi</h2>
<ul>
<li><strong>Vercel Inc.</strong> nodrošina mitināšanu. Serveri var atrasties ārpus Indonēzijas.</li>
<li><strong>Google Fonts</strong> tiek izmantots, lai attēlotu noteiktas rakstības (piemēram, arābu, taju vai japāņu). Kad fonti tiek ielādēti, jūsu IP adrese ir redzama Google.</li>
<li><strong>Kopīgošanas pogas</strong> (WhatsApp, Facebook, X, LinkedIn, Telegram) un sociālo mediju saites sazinās ar šiem pakalpojumiem tikai tad, kad uz tām noklikšķināt.</li>
</ul>
<h2>Drošība un datu kopīgošana</h2>
<p>Visi savienojumi ar šo vietni izmanto HTTPS. Mēs nepārdodam, neiznomājam un netirgojam personas datus. Dati tiek kopīgoti tikai ar iepriekš minētajiem pakalpojumu sniedzējiem, ciktāl tas nepieciešams vietnes darbībai, vai ja to pieprasa likums.</p>
<h2>Bērni</h2>
<p>Šis pakalpojums nav paredzēts bērniem, kas jaunāki par 13 gadiem, un mēs apzināti nevācam bērnu personas datus.</p>
<h2>Jūsu tiesības</h2>
<p>Saskaņā ar 2022. gada Likumu Nr. 27 par personas datu aizsardzību jums ir tiesības pieprasīt piekļuvi saviem personas datiem, to labošanu vai dzēšanu, kā arī atsaukt savu piekrišanu apstrādei. Tā kā mēs gandrīz neglabājam datus, kas jūs identificē, lielāko daļu pieprasījumu var atrisināt, izdzēšot sīkdatnes un vietnes datus savā pārlūkprogrammā. Attiecībā uz datiem, ko apstrādā Google vai Microsoft, varat izmantot arī privātuma iestatījumus to pakalpojumos. Citu pieprasījumu gadījumā sazinieties ar mums.</p>
<h2>Politikas izmaiņas</h2>
<p>Šī politika var tikt atjaunināta jebkurā laikā. Izmaiņas stājas spēkā no to publicēšanas brīža šajā lapā, un spēkā stāšanās datums ir norādīts lapas augšdaļā.</p>
<h2>Kontakti</h2>
<p>Jautājumus par šo politiku varat sūtīt, izmantojot kontaktu saiti katras lapas apakšā vai vietnē <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Izlasiet arī mūsu <a href="/syarat-ketentuan">Lietošanas noteikumus</a>.</p>
`
  },
  terms: {
    title: "Lietošanas noteikumi",
    desc: "Lietošanas noteikumi I Need Barcode, bezmaksas svītrkodu un QR Code ģeneratoram.",
    body: `
<p>Izmantojot I Need Barcode (ineedbarcode.com), jūs piekrītat turpmāk minētajiem lietošanas noteikumiem. Ja nepiekrītat, lūdzu, neizmantojiet šo pakalpojumu.</p>
<h2>Par pakalpojumu</h2>
<p>I Need Barcode ir bezmaksas rīks svītrkodu un QR Code attēlu izveidei tieši pārlūkprogrammā. I Need Barcode nav saistīts ar GS1 vai jebkuru citu svītrkodu standarta īpašnieku, nav to atbalstīts un nesadarbojas ar tiem. QR Code ir DENSO WAVE INCORPORATED reģistrēta preču zīme. Visas preču zīmes pieder to attiecīgajiem īpašniekiem.</p>
<h2>Atļautā izmantošana</h2>
<ul>
<li>Jūsu izveidotos svītrkodu attēlus drīkst izmantot gan personīgiem, gan komerciāliem mērķiem, piemēram, produktiem, iepakojumam, etiķetēm un iespieddarbiem, bez ūdenszīmes un bez maksas.</li>
<li>Mēs tikai veidojam svītrkodu attēlus un neizsniedzam svītrkodu numurus. Mazumtirdzniecības produktiem EAN, UPC vai GTIN numuri ir oficiāli jāreģistrē ar GS1 starpniecību.</li>
<li>Ievērojiet arī noteikumus, kas ir spēkā vietā, kur svītrkods tiek izmantots, piemēram, veikalu, tirdzniecības platformu vai piegādes pakalpojumu prasības.</li>
</ul>
<h2>Jūsu atbildība</h2>
<p>Jūs esat pilnībā atbildīgs par datiem, ko ievadāt svītrkodos, un par to, kā jūs tos izmantojat. Pirms svītrkodu drukāšanas lielā apjomā vienmēr pārbaudiet tos ar vairākiem skeneriem vai kameras lietotnēm un pārliecinieties, ka izmērs, krāsa un kontrasts atbilst jūsu vajadzībām.</p>
<h2>Aizliegtās darbības</h2>
<ul>
<li>Veidot svītrkodus vai QR Code, kas ved uz krāpšanu, pikšķerēšanu, ļaunprogrammatūru vai nelikumīgu saturu.</li>
<li>Izmantot svītrkodus, lai viltotu citām personām piederošus produktus, dokumentus, biļetes vai numurus.</li>
<li>Izmantot robotus, skriptus vai automatizāciju, lai lielā apjomā piekļūtu pakalpojumam.</li>
<li>Traucēt, pārslogot vai mēģināt uzlauzt mūsu serveru un pakalpojumu drošību.</li>
</ul>
<h2>Pakalpojuma pieejamība</h2>
<p>Pakalpojums tiek sniegts bez maksas, un to jebkurā laikā bez iepriekšēja brīdinājuma var mainīt, ierobežot vai pārtraukt.</p>
<h2>Atruna</h2>
<p>Pakalpojums tiek sniegts “tāds, kāds tas ir” un “tāds, kāds tas ir pieejams”, bez jebkādām garantijām, tostarp garantijām, ka pakalpojums vienmēr darbojas, ir bez kļūdām vai ka katru izveidoto svītrkodu var noskenēt ar visām ierīcēm un tas ir piemērots noteiktam mērķim.</p>
<h2>Atbildības ierobežojums</h2>
<p>Ciktāl to pieļauj likums, mēs neesam atbildīgi par tiešiem vai netiešiem zaudējumiem, kas radušies šī pakalpojuma izmantošanas vai jūsu izveidoto svītrkodu dēļ, tostarp par atkārtotas drukāšanas izmaksām un zaudējumiem nenolasāmu svītrkodu dēļ.</p>
<h2>Saites uz trešajām pusēm</h2>
<p>Šajā vietnē ir saites uz trešo pušu vietnēm un pakalpojumiem. Mēs neesam atbildīgi par šo vietņu saturu vai politiku.</p>
<h2>Noteikumu izmaiņas</h2>
<p>Šie lietošanas noteikumi var tikt atjaunināti jebkurā laikā. Turpinot izmantot pakalpojumu pēc izmaiņu publicēšanas, tiek uzskatīts, ka jūs piekrītat jaunākajai versijai.</p>
<h2>Piemērojamie tiesību akti</h2>
<p>Šos lietošanas noteikumus reglamentē Indonēzijas Republikas tiesību akti.</p>
<h2>Kontakti</h2>
<p>Jautājumus un ziņojumus varat sūtīt, izmantojot kontaktu saiti katras lapas apakšā vai vietnē <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Izlasiet arī mūsu <a href="/kebijakan-privasi">Privātuma politiku</a>.</p>
`
  }
};
