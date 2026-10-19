// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Ndryshimi midis barkodeve 1D dhe 2D: cili ju nevojitet?",
  desc: "Barkodi me vija dhe QR Code janë të dy barkode, por përdorimi i tyre ndryshon. Krahasoni kapacitetin, mënyrën e skanimit dhe shembujt e përdorimit.",
  tags: ["Bazat", "Barkod"],
  coverCaption: "Skaneri dore në magazinë lexon barkode 1D dhe 2D.",
  inlineCaption: "Etiketat e dërgesave zakonisht përdorin barkod me vija.",
  faq: [
    ["A mund ta lexojë skaneri i arkës QR Code?", "Jo të gjithë. Skaneri lazer 1D lexon vetëm barkode me vija. Për QR Code nevojitet një skaner 2D me kamerë ose kamera e telefonit."],
    ["Cili barkod është më i vogli?", "Data Matrix është një barkod 2D që mund të printohet shumë i vogël, prandaj përdoret shpesh në komponentë elektronikë, pajisje mjekësore dhe etiketa ilaçesh."],
    ["A mund të përdor QR Code në vend të EAN-13 në produktet e shitjes me pakicë?", "Për t'u shitur në dyqanet e shitjes me pakicë, produkti ka nevojë gjithsesi për një EAN-13 ose UPC të regjistruar. QR Code mund të shtohet në paketim si plotësues, për shembull për informacion mbi produktin ose promovime."]
  ],
  body: `
<p>Kur krijoni një barkod, pyetja e parë që lind zakonisht është: barkod me vija apo QR Code? Të dy quhen barkode, por mënyra si ruajnë të dhënat është e ndryshme, prandaj edhe përdorimi i tyre ndryshon.</p>

<h2>Barkodi 1D (linear)</h2>
<p>Barkodi 1D është barkod në formën e vijave vertikale. Të dhënat ruhen në një drejtim, nga e majta në të djathtë. Shembujt më të njohur janë <a href="/?type=ean13">EAN-13</a> në paketimet e produkteve dhe <a href="/?type=code128">Code 128</a> në etiketat e dërgesave.</p>
<ul>
  <li>Kapacitet i vogël, zakonisht nga dhjetë deri në disa dhjetëra karaktere.</li>
  <li>Mund të lexohet nga skanerët lazer të arkave, që janë të lirë dhe shumë të shpejtë.</li>
  <li>I përshtatshëm për kode produktesh, numra serialë dhe numra gjurmimi dërgesash.</li>
</ul>

<h2>Barkodi 2D</h2>
<p>Barkodi 2D ruan të dhëna në dy drejtime, horizontalisht dhe vertikalisht, kështu që mban shumë më tepër. Shembuj janë <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> dhe <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Kapacitet i madh, nga disa dhjetëra deri në mijëra karaktere.</li>
  <li>Mund të skanohet me kamerën e telefonit nga drejtime të ndryshme.</li>
  <li>Ka korrigjim gabimesh, kështu që mbetet i lexueshëm edhe kur është pjesërisht i dëmtuar.</li>
  <li>Mund të bëhet shumë i vogël, për shembull Data Matrix në komponentë elektronikë.</li>
</ul>

<h2>Krahasim i shkurtër</h2>
<table>
  <thead><tr><th></th><th>Barkodi 1D</th><th>Barkodi 2D</th></tr></thead>
  <tbody>
    <tr><td>Forma</td><td>Vija vertikale</td><td>Katrorë/pika brenda një katrori</td></tr>
    <tr><td>Kapaciteti</td><td>I vogël</td><td>I madh</td></tr>
    <tr><td>Pajisja e skanimit</td><td>Skaner lazer ose kamerë</td><td>Kamerë ose skaner 2D</td></tr>
    <tr><td>Qëndrueshmëria ndaj dëmtimit</td><td>E kufizuar</td><td>Ka korrigjim gabimesh</td></tr>
    <tr><td>Shembuj</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Kur të përdorni secilin?</h2>
<ul>
  <li><strong>Produkte që shiten në dyqane ose minimarkete</strong>: përdorni EAN-13 zyrtar nga GS1. Shikoni <a href="/artikel/cara-mendapatkan-barcode-ean-13">si të merrni barkodin EAN-13</a>.</li>
  <li><strong>Etiketa për magazinë, rafte ose dërgesa</strong>: Code 128 është zgjedhje e zakonshme, sepse është kompakt dhe mbështet shkronja dhe numra.</li>
  <li><strong>Lidhje, meny, WiFi ose kontakte për klientët</strong>: QR Code, sepse mund të skanohet drejtpërdrejt me kamerën e telefonit.</li>
  <li><strong>Etiketa shumë të vogla</strong>: Data Matrix.</li>
  <li><strong>Karta identiteti, bileta avioni ose dokumente</strong>: PDF417 ose Aztec.</li>
</ul>
<p>Të gjitha llojet e mësipërme mund t'i krijoni falas në <a href="/">I Need Barcode</a>. Nëse ende keni dyshime, filloni me QR Code për nevojat e klientëve dhe me Code 128 për nevojat e brendshme.</p>
`
};
