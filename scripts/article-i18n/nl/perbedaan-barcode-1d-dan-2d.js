// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Verschil tussen 1D- en 2D-barcodes: welke hebt u nodig?",
  desc: "Streepjescodes en QR Codes zijn allebei barcodes, maar ze worden voor verschillende doelen gebruikt. Vergelijk de capaciteit, de manier van scannen en voorbeelden van gebruik.",
  tags: ["Basis", "Barcode"],
  coverCaption: "Een handscanner in het magazijn leest 1D- en 2D-barcodes.",
  inlineCaption: "Verzendlabels gebruiken meestal een streepjescode.",
  faq: [
    ["Kan een kassascanner een QR Code lezen?", "Niet allemaal. 1D-laserscanners lezen alleen streepjescodes. Voor een QR Code is een 2D-scanner met camera of een telefooncamera nodig."],
    ["Welke barcode is het kleinst?", "Data Matrix is een 2D-barcode die heel klein kan worden afgedrukt en wordt daarom vaak gebruikt op elektronische componenten, medische hulpmiddelen en medicijnetiketten."],
    ["Mag ik een QR Code gebruiken in plaats van een EAN-13 op een retailproduct?", "Om in winkels te worden verkocht, heeft een product nog steeds een geregistreerde EAN-13 of UPC nodig. Een QR Code kan als aanvulling op de verpakking worden toegevoegd, bijvoorbeeld voor productinformatie of promoties."]
  ],
  body: `
<p>Bij het maken van een barcode is de eerste vraag meestal: een streepjescode of een QR Code? Beide heten barcode, maar ze slaan gegevens op een andere manier op en worden daardoor ook voor andere doelen gebruikt.</p>

<h2>1D-barcodes (lineair)</h2>
<p>Een 1D-barcode bestaat uit verticale strepen. De gegevens worden in één richting opgeslagen, namelijk van links naar rechts. De bekendste voorbeelden zijn <a href="/?type=ean13">EAN-13</a> op productverpakkingen en <a href="/?type=code128">Code 128</a> op verzendlabels.</p>
<ul>
  <li>Kleine capaciteit, meestal een stuk of tien tot enkele tientallen tekens.</li>
  <li>Leesbaar met goedkope en zeer snelle laserscanners aan de kassa.</li>
  <li>Geschikt voor productcodes, serienummers en trackingnummers.</li>
</ul>

<h2>2D-barcodes</h2>
<p>Een 2D-barcode slaat gegevens in twee richtingen op, horizontaal en verticaal, waardoor er veel meer in past. Voorbeelden zijn <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> en <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Grote capaciteit, van enkele tientallen tot duizenden tekens.</li>
  <li>Te scannen met een telefooncamera vanuit verschillende richtingen.</li>
  <li>Heeft foutcorrectie, waardoor hij leesbaar blijft, ook als hij gedeeltelijk beschadigd is.</li>
  <li>Kan heel klein worden gemaakt, zoals Data Matrix op elektronische componenten.</li>
</ul>

<h2>Korte vergelijking</h2>
<table>
  <thead><tr><th></th><th>1D-barcode</th><th>2D-barcode</th></tr></thead>
  <tbody>
    <tr><td>Vorm</td><td>Verticale strepen</td><td>Vierkantjes/punten in een vierkant</td></tr>
    <tr><td>Capaciteit</td><td>Klein</td><td>Groot</td></tr>
    <tr><td>Scanapparaat</td><td>Laserscanner of camera</td><td>Camera of 2D-scanner</td></tr>
    <tr><td>Bestand tegen schade</td><td>Beperkt</td><td>Foutcorrectie aanwezig</td></tr>
    <tr><td>Voorbeelden</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Wanneer gebruikt u welke?</h2>
<ul>
  <li><strong>Producten die in winkels of buurtsupermarkten worden verkocht</strong>: gebruik een officiële EAN-13 van GS1. Zie <a href="/artikel/cara-mendapatkan-barcode-ean-13">zo krijgt u een EAN-13-barcode</a>.</li>
  <li><strong>Magazijn-, schap- of verzendlabels</strong>: Code 128 is een gangbare keuze, omdat hij compact is en letters en cijfers ondersteunt.</li>
  <li><strong>Links, menu's, WiFi of contactgegevens voor klanten</strong>: QR Code, omdat hij direct met een telefooncamera te scannen is.</li>
  <li><strong>Zeer kleine labels</strong>: Data Matrix.</li>
  <li><strong>Identiteitskaarten, instapkaarten of documenten</strong>: PDF417 of Aztec.</li>
</ul>
<p>Al deze typen kunt u gratis maken bij <a href="/">I Need Barcode</a>. Twijfelt u nog? Begin dan met een QR Code voor uw klanten en Code 128 voor intern gebruik.</p>
`
};
