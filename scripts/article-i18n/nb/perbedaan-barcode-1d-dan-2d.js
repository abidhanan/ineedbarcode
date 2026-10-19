// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Forskjellen mellom 1D- og 2D-strekkoder: hvilken trenger du?",
  desc: "Lineære strekkoder og QR Code er begge strekkoder, men de brukes til ulike ting. Sammenlign kapasitet, skannemåte og brukseksempler.",
  tags: ["Grunnleggende", "Strekkode"],
  coverCaption: "En håndskanner på lageret leser både 1D- og 2D-strekkoder.",
  inlineCaption: "Fraktetiketter bruker som regel lineære strekkoder.",
  faq: [
    ["Kan kasseskanneren lese en QR Code?", "Ikke alle. En 1D-laserskanner leser bare lineære strekkoder. For QR Code trengs en kamerabasert 2D-skanner eller et mobilkamera."],
    ["Hvilken strekkode er minst?", "Data Matrix er en 2D-strekkode som kan trykkes svært liten, og den brukes derfor ofte på elektronikkomponenter, medisinsk utstyr og legemiddeletiketter."],
    ["Kan jeg bruke en QR Code i stedet for EAN-13 på butikkprodukter?", "For å selges i butikk trenger produktet fortsatt en registrert EAN-13 eller UPC. En QR Code kan legges til på emballasjen som et supplement, for eksempel for produktinformasjon eller kampanjer."]
  ],
  body: `
<p>Når du lager en strekkode, er det første spørsmålet som pleier å dukke opp: lineær strekkode eller QR Code? Begge kalles strekkoder, men de lagrer data på ulike måter og brukes derfor til ulike ting.</p>

<h2>1D-strekkoder (lineære)</h2>
<p>En 1D-strekkode består av loddrette streker. Dataene lagres i én retning, fra venstre mot høyre. De mest kjente eksemplene er <a href="/?type=ean13">EAN-13</a> på produktemballasje og <a href="/?type=code128">Code 128</a> på fraktetiketter.</p>
<ul>
  <li>Liten kapasitet, vanligvis fra et titalls opptil noen titalls tegn.</li>
  <li>Kan leses av billige og svært raske laserskannere i kassen.</li>
  <li>Egnet for produktkoder, serienumre og sporingsnumre.</li>
</ul>

<h2>2D-strekkoder</h2>
<p>En 2D-strekkode lagrer data i to retninger, sidelengs og nedover, og har derfor plass til mye mer. Eksempler er <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> og <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Stor kapasitet, fra noen titalls opptil tusenvis av tegn.</li>
  <li>Kan skannes med mobilkameraet fra ulike retninger.</li>
  <li>Har feilkorrigering og kan derfor leses selv om den er delvis skadet.</li>
  <li>Kan gjøres svært liten, for eksempel Data Matrix på elektronikkomponenter.</li>
</ul>

<h2>Rask sammenligning</h2>
<table>
  <thead><tr><th></th><th>1D-strekkode</th><th>2D-strekkode</th></tr></thead>
  <tbody>
    <tr><td>Form</td><td>Loddrette streker</td><td>Ruter/punkter i et kvadrat</td></tr>
    <tr><td>Kapasitet</td><td>Liten</td><td>Stor</td></tr>
    <tr><td>Skanneenhet</td><td>Laserskanner eller kamera</td><td>Kamera eller 2D-skanner</td></tr>
    <tr><td>Tåler skade</td><td>Begrenset</td><td>Har feilkorrigering</td></tr>
    <tr><td>Eksempler</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Når bør du bruke hvilken?</h2>
<ul>
  <li><strong>Produkter som selges i butikker eller nærbutikker</strong>: bruk en offisiell EAN-13 fra GS1. Se <a href="/artikel/cara-mendapatkan-barcode-ean-13">hvordan du får en EAN-13-strekkode</a>.</li>
  <li><strong>Etiketter for lager, hyller eller frakt</strong>: Code 128 er et vanlig valg fordi den er kompakt og støtter både bokstaver og tall.</li>
  <li><strong>Lenker, menyer, WiFi eller kontaktinformasjon for kunder</strong>: QR Code, fordi den kan skannes direkte med mobilkameraet.</li>
  <li><strong>Svært små etiketter</strong>: Data Matrix.</li>
  <li><strong>ID-kort, flybilletter eller dokumenter</strong>: PDF417 eller Aztec.</li>
</ul>
<p>Alle typene ovenfor kan du lage gratis på <a href="/">I Need Barcode</a>. Hvis du fortsatt er usikker, kan du begynne med QR Code for kundenes behov og Code 128 for interne behov.</p>
`
};
