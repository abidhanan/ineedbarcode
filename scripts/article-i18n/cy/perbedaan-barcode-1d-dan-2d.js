// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Y Gwahaniaeth rhwng Codau Bar 1D a 2D: Pa Un Sydd Ei Angen Arnoch?",
  desc: "Mae codau bar llinellau a QR Code ill dau yn godau bar, ond mae eu defnydd yn wahanol. Cymharwch eu capasiti, sut maen nhw'n cael eu sganio, ac enghreifftiau o'u defnydd.",
  tags: ["Hanfodion", "Cod Bar"],
  coverCaption: "Mae sganiwr llaw mewn warws yn darllen codau bar 1D a 2D.",
  inlineCaption: "Mae labeli cludo fel arfer yn defnyddio codau bar llinellau.",
  faq: [
    ["Ydy sganwyr til yn gallu darllen QR Code?", "Nid pob un. Dim ond codau bar llinellau y mae sganwyr laser 1D yn eu darllen. Ar gyfer QR Code mae angen sganiwr 2D sy'n seiliedig ar gamera neu gamera ffôn."],
    ["Pa god bar yw'r lleiaf?", "Mae Data Matrix yn god bar 2D y gellir ei argraffu'n fach iawn, felly mae'n cael ei ddefnyddio'n aml ar gydrannau electronig, offer meddygol a labeli meddyginiaethau."],
    ["Ga i ddefnyddio QR Code yn lle EAN-13 ar gynhyrchion manwerthu?", "I'w gwerthu mewn siopau manwerthu, mae angen EAN-13 neu UPC cofrestredig ar gynhyrchion o hyd. Gellir ychwanegu QR Code at y pecyn fel atodiad, er enghraifft ar gyfer gwybodaeth am y cynnyrch neu hyrwyddiadau."]
  ],
  body: `
<p>Wrth greu cod bar, y cwestiwn cyntaf sy'n codi fel arfer yw: cod bar llinellau neu QR Code? Gelwir y ddau yn godau bar, ond maen nhw'n storio data mewn ffyrdd gwahanol, felly mae eu defnydd hefyd yn wahanol.</p>

<h2>Codau bar 1D (llinol)</h2>
<p>Cod bar wedi'i wneud o linellau fertigol yw cod bar 1D. Mae'r data'n cael ei storio i un cyfeiriad, sef o'r chwith i'r dde. Yr enghreifftiau mwyaf adnabyddus yw <a href="/?type=ean13">EAN-13</a> ar becynnau cynhyrchion a <a href="/?type=code128">Code 128</a> ar labeli cludo.</p>
<ul>
  <li>Capasiti bach, fel arfer o ddwsin i ychydig ddegau o nodau.</li>
  <li>Gellir eu darllen gyda sganwyr laser til, sy'n rhad ac yn gyflym iawn.</li>
  <li>Addas ar gyfer codau cynnyrch, rhifau cyfresol a rhifau olrhain.</li>
</ul>

<h2>Codau bar 2D</h2>
<p>Mae codau bar 2D yn storio data i ddau gyfeiriad, ar draws ac i lawr, felly mae lle i lawer mwy. Enghreifftiau yw <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> ac <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Capasiti mawr, o ddegau i filoedd o nodau.</li>
  <li>Gellir eu sganio gyda chamera ffôn o sawl cyfeiriad.</li>
  <li>Mae ganddynt gywiro gwallau, felly maen nhw'n dal yn ddarllenadwy hyd yn oed os yw rhan wedi'i difrodi.</li>
  <li>Gellir eu gwneud yn fach iawn, er enghraifft Data Matrix ar gydrannau electronig.</li>
</ul>

<h2>Cymhariaeth gyflym</h2>
<table>
  <thead><tr><th></th><th>Cod bar 1D</th><th>Cod bar 2D</th></tr></thead>
  <tbody>
    <tr><td>Siâp</td><td>Llinellau fertigol</td><td>Sgwariau/dotiau mewn sgwâr</td></tr>
    <tr><td>Capasiti</td><td>Bach</td><td>Mawr</td></tr>
    <tr><td>Dyfais sganio</td><td>Sganiwr laser neu gamera</td><td>Camera neu sganiwr 2D</td></tr>
    <tr><td>Gwrthsefyll difrod</td><td>Cyfyngedig</td><td>Cywiro gwallau</td></tr>
    <tr><td>Enghreifftiau</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Pryd i ddefnyddio pa un?</h2>
<ul>
  <li><strong>Cynhyrchion sy'n cael eu gwerthu mewn siopau neu siopau cyfleustra</strong>: defnyddiwch EAN-13 swyddogol gan GS1. Gweler <a href="/artikel/cara-mendapatkan-barcode-ean-13">sut i gael cod bar EAN-13</a>.</li>
  <li><strong>Labeli warws, silff neu gludo</strong>: mae Code 128 yn ddewis cyffredin oherwydd ei fod yn gryno ac yn cefnogi llythrennau a rhifau.</li>
  <li><strong>Dolenni, bwydlenni, WiFi neu gysylltiadau i gwsmeriaid</strong>: QR Code, oherwydd gellir ei sganio'n uniongyrchol gyda chamera ffôn.</li>
  <li><strong>Labeli bach iawn</strong>: Data Matrix.</li>
  <li><strong>Cardiau adnabod, tocynnau awyren neu ddogfennau</strong>: PDF417 neu Aztec.</li>
</ul>
<p>Gallwch greu'r holl fathau uchod am ddim ar <a href="/">I Need Barcode</a>. Os nad ydych chi'n siŵr o hyd, dechreuwch gyda QR Code ar gyfer anghenion cwsmeriaid a Code 128 ar gyfer anghenion mewnol.</p>
`
};
