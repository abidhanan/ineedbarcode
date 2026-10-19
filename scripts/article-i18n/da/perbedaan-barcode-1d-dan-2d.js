// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Forskellen på 1D- og 2D-stregkoder: Hvilken har du brug for?",
  desc: "Lineære stregkoder og QR Codes er begge stregkoder, men de bruges til forskellige ting. Sammenlign kapacitet, scanningsmetode og eksempler på anvendelse.",
  tags: ["Grundlæggende", "Stregkode"],
  coverCaption: "En håndscanner på lageret læser både 1D- og 2D-stregkoder.",
  inlineCaption: "Forsendelsesetiketter bruger som regel lineære stregkoder.",
  faq: [
    ["Kan kassescannere læse QR Codes?", "Ikke alle. 1D-laserscannere læser kun lineære stregkoder. Til QR Codes kræves en kamerabaseret 2D-scanner eller en mobils kamera."],
    ["Hvilken stregkode er den mindste?", "Data Matrix er en 2D-stregkode, der kan trykkes meget lille, og den bruges derfor ofte på elektroniske komponenter, medicinsk udstyr og medicinetiketter."],
    ["Kan jeg bruge en QR Code i stedet for EAN-13 på detailvarer?", "For at kunne sælges i detailbutikker skal produktet stadig have en registreret EAN-13 eller UPC. En QR Code kan tilføjes på emballagen som supplement, for eksempel til produktinformation eller kampagner."]
  ],
  body: `
<p>Når man laver en stregkode, er det første spørgsmål som regel: skal det være en lineær stregkode eller en QR Code? Begge kaldes stregkoder, men de gemmer data på forskellige måder og bruges derfor også til forskellige ting.</p>

<h2>1D-stregkoder (lineære)</h2>
<p>En 1D-stregkode er en stregkode, der består af lodrette streger. Dataene gemmes i én retning, nemlig fra venstre mod højre. De mest kendte eksempler er <a href="/?type=ean13">EAN-13</a> på produktemballage og <a href="/?type=code128">Code 128</a> på forsendelsesetiketter.</p>
<ul>
  <li>Lille kapacitet, som regel fra et dusin til nogle få dusin tegn.</li>
  <li>Kan læses af kassens laserscannere, som er billige og meget hurtige.</li>
  <li>Velegnet til produktkoder, serienumre og forsendelsesnumre.</li>
</ul>

<h2>2D-stregkoder</h2>
<p>En 2D-stregkode gemmer data i to retninger, vandret og lodret, og kan derfor rumme langt mere. Eksempler er <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> og <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Stor kapacitet, fra nogle få dusin til flere tusinde tegn.</li>
  <li>Kan scannes med en mobils kamera fra forskellige retninger.</li>
  <li>Har fejlkorrektion, så den stadig kan læses, selv om en del er beskadiget.</li>
  <li>Kan gøres meget lille, for eksempel Data Matrix på elektroniske komponenter.</li>
</ul>

<h2>Kort sammenligning</h2>
<table>
  <thead><tr><th></th><th>1D-stregkode</th><th>2D-stregkode</th></tr></thead>
  <tbody>
    <tr><td>Form</td><td>Lodrette streger</td><td>Firkanter/prikker i et kvadrat</td></tr>
    <tr><td>Kapacitet</td><td>Lille</td><td>Stor</td></tr>
    <tr><td>Scanningsudstyr</td><td>Laserscanner eller kamera</td><td>Kamera eller 2D-scanner</td></tr>
    <tr><td>Modstandsdygtighed over for skader</td><td>Begrænset</td><td>Har fejlkorrektion</td></tr>
    <tr><td>Eksempler</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Hvornår skal man bruge hvilken?</h2>
<ul>
  <li><strong>Produkter, der sælges i butikker eller minimarkeder</strong>: brug en officiel EAN-13 fra GS1. Se <a href="/artikel/cara-mendapatkan-barcode-ean-13">sådan får du en EAN-13-stregkode</a>.</li>
  <li><strong>Etiketter til lager, reoler eller forsendelse</strong>: Code 128 er et almindeligt valg, fordi den er kompakt og understøtter både bogstaver og tal.</li>
  <li><strong>Links, menuer, WiFi eller kontakter til kunder</strong>: QR Code, fordi den kan scannes direkte med mobilens kamera.</li>
  <li><strong>Meget små etiketter</strong>: Data Matrix.</li>
  <li><strong>ID-kort, flybilletter eller dokumenter</strong>: PDF417 eller Aztec.</li>
</ul>
<p>Alle ovenstående typer kan du lave gratis hos <a href="/">I Need Barcode</a>. Hvis du stadig er i tvivl, så start med QR Code til kunderettede behov og Code 128 til interne behov.</p>
`
};
