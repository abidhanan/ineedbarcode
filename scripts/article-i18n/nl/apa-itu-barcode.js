// apa-itu-barcode
module.exports = {
  title: "Wat is een barcode? Betekenis, werking en soorten",
  desc: "Barcodes staan op bijna elk product dat u koopt. Ontdek hoe ze werken, hun korte geschiedenis en de soorten barcodes die het vaakst worden gebruikt.",
  tags: ["Basis", "Barcode"],
  coverCaption: "De barcode op de verpakking bevat de unieke code van het product.",
  inlineCaption: "Aan de kassa wordt de barcode in een oogwenk gelezen met een scanner.",
  faq: [
    ["Wat is het verschil tussen een barcode en een QR Code?", "Een QR Code is een soort barcode, namelijk een 2D-barcode. Een streepjescode (1D) bevat maar weinig tekens en wordt van links naar rechts gelezen, terwijl een QR Code gegevens in twee richtingen opslaat en daardoor plaats biedt aan een link, tekst of WiFi-gegevens."],
    ["Bevat een barcode de prijs van het product?", "Meestal niet. Een productbarcode bevat alleen een code. De prijs en de productnaam staan in het kassasysteem en worden opgezocht aan de hand van de gescande code."],
    ["Moet u betalen om een barcode te maken?", "Nee. De afbeelding van een barcode kunt u gratis maken, bijvoorbeeld bij I Need Barcode. Alleen het officiële nummer voor barcodes van retailproducten, zoals EAN-13, moet tegen betaling worden geregistreerd via GS1."]
  ],
  body: `
<p>Een barcode is een manier om gegevens weer te geven in een patroon dat een machine kan lezen. Dat patroon bestaat meestal uit zwarte en witte strepen van verschillende breedte, of uit kleine vierkantjes die in een vierkant zijn gerangschikt. Bij het scannen wordt het patroon weer omgezet in cijfers of tekst, zoals een productcode, een trackingnummer of een websiteadres.</p>
<p>Omdat een barcode door een machine wordt gelezen, is het veel sneller en minder foutgevoelig dan een code handmatig intypen. Daarom worden barcodes gebruikt aan de kassa, in magazijnen, ziekenhuizen, op tickets en zelfs op voedselverpakkingen.</p>

<h2>Korte geschiedenis van de barcode</h2>
<p>Het idee van de barcode werd in 1952 gepatenteerd door Norman Joseph Woodland en Bernard Silver in de Verenigde Staten. Pas in 1974 werd de barcode echt in een winkel gebruikt, toen in een supermarkt in Ohio een pakje kauwgom met een UPC-code werd gescand. Sindsdien hebben barcodes zich over de hele wereld verspreid en worden ze wereldwijd beheerd door een standaardisatieorganisatie genaamd GS1.</p>

<h2>Hoe werkt een barcode?</h2>
<p>De scanner belicht de barcode en leest het weerkaatste licht. Donkere delen weerkaatsen weinig licht, lichte delen veel. Dat verschil wordt omgezet in een reeks nullen en enen en vervolgens vergeleken met de regels van dat type barcode. Veel barcodes hebben ook een <strong>controlecijfer</strong> (check digit): een laatste cijfer dat wordt berekend uit de voorgaande cijfers. Klopt de uitkomst van die berekening niet, dan weet de scanner dat er iets mis is en wijst hij het resultaat af.</p>
<p>De barcode zelf bevat meestal alleen een code. Informatie zoals de productnaam of de prijs staat in het kassasysteem of in een database en wordt aan de hand van die code opgezocht.</p>

<h2>Veelgebruikte soorten barcodes</h2>
<p>Barcodes zijn grofweg in twee grote groepen te verdelen:</p>
<ul>
  <li><strong>1D-barcodes (lineair)</strong>: bestaan uit verticale strepen die van links naar rechts worden gelezen. Voorbeelden zijn <a href="/?type=ean13">EAN-13</a> en <a href="/?type=upca">UPC-A</a> voor retailproducten, en <a href="/?type=code128">Code 128</a> en <a href="/?type=code39">Code 39</a> voor logistiek en magazijnen.</li>
  <li><strong>2D-barcodes</strong>: bestaan uit een patroon van vierkantjes dat gegevens in twee richtingen opslaat, waardoor er veel meer in past. Voorbeelden zijn <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> en <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Daarnaast zijn er speciale barcodes voor post en verzending, voor de gezondheidszorg en GS1-standaarden voor de toeleveringsketen. Een uitgebreidere uitleg over de verschillen leest u in het artikel <a href="/artikel/perbedaan-barcode-1d-dan-2d">Verschil tussen 1D- en 2D-barcodes</a>.</p>

<h2>Waarvoor worden barcodes gebruikt?</h2>
<ul>
  <li><strong>Retail</strong>: de kassa versnellen en de voorraad automatisch bijhouden.</li>
  <li><strong>Magazijn en verzending</strong>: goederen en pakketten volgen van de ene plek naar de andere.</li>
  <li><strong>Tickets en evenementen</strong>: de echtheid van een ticket met één scan controleren.</li>
  <li><strong>Marketing</strong>: een QR Code op een folder of verpakking brengt mensen direct naar uw website, menu of WhatsApp.</li>
</ul>

<h2>Zelf een barcode maken</h2>
<p>U hebt geen betaalde app nodig om een barcode te maken. Kies bij <a href="/">I Need Barcode</a> het type barcode, vul de gegevens in en download het resultaat als PNG-afbeelding. Er zijn meer dan 100 typen om uit te kiezen, allemaal gratis en zonder registratie.</p>
`
};
