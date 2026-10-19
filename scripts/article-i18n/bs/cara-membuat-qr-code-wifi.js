// cara-membuat-qr-code-wifi
module.exports = {
  title: "Kako napraviti WiFi QR Code da gosti ne moraju kucati lozinku",
  desc: "Gostima je dovoljno da skeniraju QR Code da bi se povezali na WiFi. Idealno za kafiće, urede, smještaj i dom. Evo kako ga napraviti i postaviti.",
  tags: ["Vodiči", "QR Code"],
  coverCaption: "Podaci o WiFi mreži s rutera mogu stati u jedan QR Code.",
  inlineCaption: "Gosti kafića mogu se odmah povezati bez kucanja lozinke.",
  faq: [
    ["Mogu li svi telefoni skenirati WiFi QR Code?", "Ugrađena kamera na iPhone uređajima s iOS 11 ili novijim i na većini uređaja s Android 10 ili novijim može ga odmah očitati. Starijim telefonima može biti potrebna aplikacija za skeniranje QR Code."],
    ["Da li je WiFi QR Code siguran?", "Svako ko skenira taj QR Code može se povezati na vaš WiFi. Zato koristite mrežu za goste i ne postavljajte QR Code privatne mreže na javnim mjestima."],
    ["Šta učiniti ako se promijeni WiFi lozinka?", "Napravite i ponovo odštampajte WiFi QR Code, jer stari QR Code i dalje sadrži staru lozinku."]
  ],
  body: `
<p>Sricanje duge WiFi lozinke gostima često je naporno, pogotovo ako sadrži velika slova, brojeve i simbole. Uz <strong>WiFi QR Code</strong> gosti samo usmjere kameru telefona prema QR Code i odmah se povežu.</p>

<h2>Kako WiFi QR Code radi</h2>
<p>WiFi QR Code čuva naziv mreže (SSID), vrstu zaštite i lozinku u posebnom formatu koji telefoni prepoznaju, na primjer <code>WIFI:T:WPA;S:NazivMreze;P:Lozinka;;</code>. Ugrađena kamera na iPhone uređajima (iOS 11 ili noviji) i na većini Android uređaja (Android 10 ili noviji) može ga očitati direktno, bez dodatne aplikacije.</p>

<h2>Koraci izrade</h2>
<ol>
  <li>Otvorite <a href="/?type=qrcode">generator QR Code</a> i odaberite karticu <strong>WiFi</strong> u odjeljku Unos podataka.</li>
  <li>Upišite <strong>naziv mreže</strong> tačno onako kako se pojavljuje na listi WiFi mreža, uključujući velika i mala slova.</li>
  <li>Upišite <strong>lozinku</strong>, a zatim odaberite vrstu zaštite. Većina kućnih i uredskih rutera koristi WPA/WPA2/WPA3.</li>
  <li>Označite <strong>Skrivena mreža</strong> ako se naziv vašeg WiFi ne prikazuje na listi.</li>
  <li>Dodajte okvir s natpisom, na primjer „SCAN WIFI“, kako bi gosti znali čemu služi, a zatim preuzmite PNG.</li>
</ol>

<h2>Gdje ga postaviti?</h2>
<ul>
  <li>Mala kartica na stolu u kafiću ili restoranu.</li>
  <li>Zid dnevne sobe, recepcije ili sale za sastanke u uredu.</li>
  <li>Soba u smještaju, zalijepljen pored vrata ili televizora.</li>
  <li>Donja strana rutera kod kuće, kako bi ukućani lako povezali nove uređaje.</li>
</ul>

<h2>Savjeti za sigurnost</h2>
<ul>
  <li>Koristite <strong>mrežu za goste</strong> (guest network) ako je vaš ruter podržava, tako da gosti ne budu na istoj mreži kao uredski računari.</li>
  <li>Ako se WiFi lozinka promijeni, napravite i ponovo odštampajte QR Code, jer će stari QR Code sadržavati staru lozinku.</li>
  <li>Ne postavljajte WiFi QR Code privatne mreže na javnim mjestima gdje ga svako može fotografisati.</li>
</ul>

<h2>Ako se preko QR Code ne možete povezati</h2>
<p>Ponovo provjerite kako su napisani naziv mreže i lozinka, jer zbog jednog pogrešnog slova telefon neće uspjeti da se poveže. Provjerite i da li odabrana vrsta zaštite odgovara postavkama rutera. Za ostale probleme sa skeniranjem pročitajte <a href="/artikel/barcode-tidak-bisa-dipindai">razloge zašto se barkod ne može skenirati</a>.</p>
`
};
