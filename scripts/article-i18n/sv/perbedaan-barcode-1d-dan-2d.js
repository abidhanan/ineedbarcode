// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Skillnaden mellan 1D- och 2D-streckkoder: vilken behöver du?",
  desc: "Linjära streckkoder och QR Code är båda streckkoder, men de används till olika saker. Jämför kapacitet, skanningssätt och användningsexempel.",
  tags: ["Grunder", "Streckkod"],
  coverCaption: "En handskanner på lagret läser både 1D- och 2D-streckkoder.",
  inlineCaption: "Fraktetiketter använder oftast linjära streckkoder.",
  faq: [
    ["Kan kassaskannern läsa en QR Code?", "Inte alla. En 1D-laserskanner läser bara linjära streckkoder. För QR Code behövs en kamerabaserad 2D-skanner eller en mobilkamera."],
    ["Vilken streckkod är minst?", "Data Matrix är en 2D-streckkod som kan tryckas mycket liten och används därför ofta på elektronikkomponenter, medicintekniska produkter och läkemedelsetiketter."],
    ["Får jag använda en QR Code i stället för EAN-13 på produkter i detaljhandeln?", "För att säljas i butik behöver produkten fortfarande en registrerad EAN-13 eller UPC. En QR Code kan läggas till på förpackningen som komplement, till exempel för produktinformation eller kampanjer."]
  ],
  body: `
<p>När du skapar en streckkod är den första frågan som brukar dyka upp: linjär streckkod eller QR Code? Båda kallas streckkoder, men de lagrar data på olika sätt och används därför till olika saker.</p>

<h2>1D-streckkoder (linjära)</h2>
<p>En 1D-streckkod består av lodräta streck. Data lagras i en riktning, från vänster till höger. De mest kända exemplen är <a href="/?type=ean13">EAN-13</a> på produktförpackningar och <a href="/?type=code128">Code 128</a> på fraktetiketter.</p>
<ul>
  <li>Liten kapacitet, vanligtvis från ett tiotal upp till några tiotal tecken.</li>
  <li>Kan läsas av billiga och mycket snabba laserskannrar i kassan.</li>
  <li>Passar för produktkoder, serienummer och sändningsnummer.</li>
</ul>

<h2>2D-streckkoder</h2>
<p>En 2D-streckkod lagrar data i två riktningar, i sidled och på höjden, och rymmer därför mycket mer. Exempel är <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> och <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Stor kapacitet, från några tiotal upp till tusentals tecken.</li>
  <li>Kan skannas med mobilkameran från olika håll.</li>
  <li>Har felkorrigering och går därför att läsa även om den är delvis skadad.</li>
  <li>Kan göras mycket liten, till exempel Data Matrix på elektronikkomponenter.</li>
</ul>

<h2>Snabb jämförelse</h2>
<table>
  <thead><tr><th></th><th>1D-streckkod</th><th>2D-streckkod</th></tr></thead>
  <tbody>
    <tr><td>Form</td><td>Lodräta streck</td><td>Rutor/punkter i en kvadrat</td></tr>
    <tr><td>Kapacitet</td><td>Liten</td><td>Stor</td></tr>
    <tr><td>Skanningsenhet</td><td>Laserskanner eller kamera</td><td>Kamera eller 2D-skanner</td></tr>
    <tr><td>Tålighet mot skador</td><td>Begränsad</td><td>Har felkorrigering</td></tr>
    <tr><td>Exempel</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>När ska du använda vilken?</h2>
<ul>
  <li><strong>Produkter som säljs i butiker eller närbutiker</strong>: använd en officiell EAN-13 från GS1. Se <a href="/artikel/cara-mendapatkan-barcode-ean-13">hur du får en EAN-13-streckkod</a>.</li>
  <li><strong>Etiketter för lager, hyllor eller frakt</strong>: Code 128 är ett vanligt val eftersom den är kompakt och stöder både bokstäver och siffror.</li>
  <li><strong>Länkar, menyer, WiFi eller kontaktuppgifter för kunder</strong>: QR Code, eftersom den kan skannas direkt med mobilkameran.</li>
  <li><strong>Mycket små etiketter</strong>: Data Matrix.</li>
  <li><strong>Id-kort, flygbiljetter eller dokument</strong>: PDF417 eller Aztec.</li>
</ul>
<p>Alla typerna ovan kan du skapa gratis på <a href="/">I Need Barcode</a>. Om du fortfarande är osäker kan du börja med QR Code för kundernas behov och Code 128 för interna behov.</p>
`
};
