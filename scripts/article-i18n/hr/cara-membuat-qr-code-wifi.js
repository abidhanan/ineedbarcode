// cara-membuat-qr-code-wifi
module.exports = {
  title: "Kako izraditi QR Code za WiFi da gosti ne moraju upisivati lozinku",
  desc: "Gosti samo skeniraju QR Code i spojeni su na WiFi. Idealno za kafiće, urede, smještaj i domove. Evo kako ga izraditi i postaviti.",
  tags: ["Vodiči", "QR Code"],
  coverCaption: "Podaci o WiFi mreži s usmjerivača mogu se pohraniti u jedan QR Code.",
  inlineCaption: "Gosti kafića mogu se odmah spojiti, bez upisivanja lozinke.",
  faq: [
    ["Mogu li svi mobiteli skenirati QR Code za WiFi?", "Ugrađena kamera iPhonea s iOS-om 11 ili novijim i većine mobitela s Androidom 10 ili novijim može ga izravno očitati. Starijim mobitelima možda će trebati aplikacija za skeniranje QR kodova."],
    ["Je li QR Code za WiFi siguran?", "Svatko tko skenira taj QR Code može se spojiti na vaš WiFi. Zato koristite mrežu za goste i ne postavljajte QR Code privatne mreže na javnim mjestima."],
    ["Što učiniti ako promijenim lozinku za WiFi?", "Izradite i ponovno ispišite QR Code za WiFi jer stari QR Code i dalje sadrži staru lozinku."]
  ],
  body: `
<p>Sricanje dugačke lozinke za WiFi gostima često je zamorno, osobito ako sadrži velika slova, brojeve i simbole. Uz <strong>QR Code za WiFi</strong> gosti samo usmjere kameru mobitela prema QR Code i odmah su spojeni.</p>

<h2>Kako radi QR Code za WiFi</h2>
<p>QR Code za WiFi pohranjuje naziv mreže (SSID), vrstu zaštite i lozinku u posebnom formatu koji mobiteli prepoznaju, primjerice <code>WIFI:T:WPA;S:NazivMreze;P:Lozinka;;</code>. Ugrađena kamera iPhonea (iOS 11 ili noviji) i većine Android mobitela (Android 10 ili noviji) može ga izravno očitati, bez dodatne aplikacije.</p>

<h2>Koraci izrade</h2>
<ol>
  <li>Otvorite <a href="/?type=qrcode">generator QR Code</a> i u odjeljku Podaci odaberite karticu <strong>WiFi</strong>.</li>
  <li>Upišite <strong>naziv mreže</strong> točno onako kako se prikazuje na popisu WiFi mreža, uključujući velika i mala slova.</li>
  <li>Upišite <strong>lozinku</strong> i odaberite vrstu zaštite. Većina kućnih i uredskih usmjerivača koristi WPA/WPA2/WPA3.</li>
  <li>Označite <strong>Skrivena mreža</strong> ako se naziv vaše WiFi mreže ne prikazuje na popisu.</li>
  <li>Dodajte okvir s natpisom, primjerice „SCAN WIFI“, kako bi gosti znali čemu služi, a zatim preuzmite PNG.</li>
</ol>

<h2>Gdje ga postaviti?</h2>
<ul>
  <li>Mala kartica na stolu u kafiću ili restoranu.</li>
  <li>Zid dnevnog boravka, recepcije ili uredske sobe za sastanke.</li>
  <li>Soba u smještaju, zalijepljen pokraj vrata ili televizora.</li>
  <li>Donja strana usmjerivača kod kuće, kako bi ukućani lako spojili nove uređaje.</li>
</ul>

<h2>Sigurnosni savjeti</h2>
<ul>
  <li>Koristite <strong>mrežu za goste</strong> (guest network) ako je vaš usmjerivač podržava, kako se gosti ne bi spajali na istu mrežu kao uredska računala.</li>
  <li>Ako promijenite lozinku za WiFi, izradite i ponovno ispišite QR Code jer će stari QR Code sadržavati staru lozinku.</li>
  <li>Ne postavljajte QR Code za WiFi privatne mreže na javnim mjestima gdje ga svatko može fotografirati.</li>
</ul>

<h2>Ako se putem QR Code ne možete spojiti</h2>
<p>Ponovno provjerite pravopis naziva mreže i lozinke jer se zbog jednog pogrešnog slova mobitel neće uspjeti spojiti. Provjerite i odgovara li odabrana vrsta zaštite postavkama usmjerivača. Za ostale probleme sa skeniranjem pročitajte <a href="/artikel/barcode-tidak-bisa-dipindai">razloge zašto se barkod ne može skenirati</a>.</p>
`
};
