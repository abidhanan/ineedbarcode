// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Diferència entre codis de barres 1D i 2D: quin necessita?",
  desc: "El codi de barres lineal i el QR Code són tots dos codis de barres, però tenen usos diferents. Compari'n la capacitat, la manera d'escanejar-los i exemples d'ús.",
  tags: ["Conceptes bàsics", "Codis de barres"],
  coverCaption: "El lector portàtil del magatzem llegeix codis de barres 1D i 2D.",
  inlineCaption: "Les etiquetes d'enviament solen utilitzar codis de barres lineals.",
  faq: [
    ["El lector de la caixa pot llegir QR Codes?", "No tots. Els lectors làser 1D només llegeixen codis de barres lineals. Per als QR Codes cal un lector 2D amb càmera o la càmera del mòbil."],
    ["Quin és el codi de barres més petit?", "El Data Matrix és un codi de barres 2D que es pot imprimir en mides molt petites, per això s'utilitza sovint en components electrònics, productes sanitaris i etiquetes de medicaments."],
    ["Es pot utilitzar un QR Code en lloc de l'EAN-13 en productes de venda al detall?", "Per vendre's en botigues, el producte continua necessitant un EAN-13 o un UPC registrat. El QR Code es pot afegir a l'envàs com a complement, per exemple per a informació del producte o promocions."]
  ],
  body: `
<p>Quan es crea un codi de barres, la primera pregunta que sol sorgir és: utilitzar un codi de barres lineal o un QR Code? Tots dos s'anomenen codis de barres, però emmagatzemen les dades de manera diferent i, per tant, també tenen usos diferents.</p>

<h2>Codis de barres 1D (lineals)</h2>
<p>El codi de barres 1D està format per línies verticals. Les dades s'emmagatzemen en una sola direcció, d'esquerra a dreta. Els exemples més coneguts són l'<a href="/?type=ean13">EAN-13</a> als envasos de productes i el <a href="/?type=code128">Code 128</a> a les etiquetes d'enviament.</p>
<ul>
  <li>Capacitat petita, normalment d'una dotzena a unes quantes desenes de caràcters.</li>
  <li>Es poden llegir amb els lectors làser de caixa, que són barats i molt ràpids.</li>
  <li>Adequats per a codis de producte, números de sèrie i números d'enviament.</li>
</ul>

<h2>Codis de barres 2D</h2>
<p>El codi de barres 2D emmagatzema dades en dues direccions, en horitzontal i en vertical, de manera que hi cap molta més informació. En són exemples el <a href="/?type=qrcode">QR Code</a>, el <a href="/?type=datamatrix">Data Matrix</a>, el <a href="/?type=pdf417">PDF417</a> i l'<a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Gran capacitat, de desenes a milers de caràcters.</li>
  <li>Es poden escanejar amb la càmera del mòbil des de qualsevol direcció.</li>
  <li>Tenen correcció d'errors, de manera que es poden llegir encara que estiguin parcialment malmesos.</li>
  <li>Poden ser molt petits, com el Data Matrix en components electrònics.</li>
</ul>

<h2>Comparació ràpida</h2>
<table>
  <thead><tr><th></th><th>Codi de barres 1D</th><th>Codi de barres 2D</th></tr></thead>
  <tbody>
    <tr><td>Forma</td><td>Línies verticals</td><td>Quadrats/punts dins d'un quadrat</td></tr>
    <tr><td>Capacitat</td><td>Petita</td><td>Gran</td></tr>
    <tr><td>Lector</td><td>Lector làser o càmera</td><td>Càmera o lector 2D</td></tr>
    <tr><td>Resistència als danys</td><td>Limitada</td><td>Correcció d'errors</td></tr>
    <tr><td>Exemples</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Quan cal utilitzar cadascun?</h2>
<ul>
  <li><strong>Productes que es venen en botigues o establiments de proximitat</strong>: utilitzi un EAN-13 oficial de GS1. Consulti <a href="/artikel/cara-mendapatkan-barcode-ean-13">com obtenir un codi de barres EAN-13</a>.</li>
  <li><strong>Etiquetes de magatzem, prestatge o enviament</strong>: el Code 128 és l'opció habitual perquè és compacte i admet lletres i números.</li>
  <li><strong>Enllaços, cartes, WiFi o contactes per als clients</strong>: QR Code, perquè es pot escanejar directament amb la càmera del mòbil.</li>
  <li><strong>Etiquetes molt petites</strong>: Data Matrix.</li>
  <li><strong>Documents d'identitat, targetes d'embarcament o documents</strong>: PDF417 o Aztec.</li>
</ul>
<p>Pot crear gratuïtament tots aquests tipus a <a href="/">I Need Barcode</a>. Si encara té dubtes, comenci pel QR Code per a les necessitats dels clients i pel Code 128 per a les necessitats internes.</p>
`
};
