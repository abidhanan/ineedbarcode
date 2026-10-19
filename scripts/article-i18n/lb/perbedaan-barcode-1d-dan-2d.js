// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Den Ënnerscheed tëscht 1D- an 2D-Barcoden: Wat braucht Dir?",
  desc: "Stréchbarcoden an QR Coden si béid Barcoden, hunn awer ënnerschiddlech Asazzwecker. Vergläicht d'Kapazitéit, d'Scanmethod an Uwendungsbeispiller.",
  tags: ["Grondlagen", "Barcode"],
  coverCaption: "En Handscanner am Lager liest 1D- an 2D-Barcoden.",
  inlineCaption: "Versandetikette benotze meeschtens Stréchbarcoden.",
  faq: [
    ["Kënne Keessescanner QR Coden liesen?", "Net all. 1D-Laserscanner liesen nëmme Stréchbarcoden. Fir QR Coden brauch een en 2D-Scanner mat Kamera oder d'Kamera vun engem Handy."],
    ["Wéi e Barcode ass dee klengsten?", "Data Matrix ass en 2D-Barcode, dee ganz kleng gedréckt ka ginn, an dofir dacks op elektroneschen Komponenten, medizineschen Apparater a Medikamentenetikette benotzt gëtt."],
    ["Kann ech en QR Code amplaz vum EAN-13 op Detailhandelsprodukter benotzen?", "Fir am Detailhandel verkaf ze ginn, brauch d'Produkt ëmmer nach e registréierten EAN-13 oder UPC. En QR Code kann als Ergänzung op d'Verpackung bäigefüügt ginn, zum Beispill fir Produktinformatiounen oder Promotiounen."]
  ],
  body: `
<p>Wann ee e Barcode mécht, ass déi éischt Fro meeschtens: Stréchbarcode oder QR Code? Béid ginn Barcode genannt, mä si späicheren d'Donnéeën op eng aner Aart a Weis, an dofir sinn och hir Asazzwecker ënnerschiddlech.</p>

<h2>1D-Barcoden (linear)</h2>
<p>En 1D-Barcode ass e Barcode aus vertikale Strécher. D'Donnéeë ginn an enger Richtung gespäichert, nämlech vu lénks no riets. Déi bekanntst Beispiller sinn den <a href="/?type=ean13">EAN-13</a> op Produktverpackungen an de <a href="/?type=code128">Code 128</a> op Versandetiketten.</p>
<ul>
  <li>Kleng Kapazitéit, meeschtens vun engem Dosen bis e puer Dosen Zeechen.</li>
  <li>Kann vu Laserscanneren un der Keess gelies ginn, déi bëlleg a ganz séier sinn.</li>
  <li>Gëeegent fir Produktcoden, Seriennummeren a Versandnummeren.</li>
</ul>

<h2>2D-Barcoden</h2>
<p>En 2D-Barcode späichert d'Donnéeën an zwou Richtungen, horizontal a vertikal, a kann doduerch vill méi ophuelen. Beispiller sinn <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> an <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Grouss Kapazitéit, vun e puer Dosen bis zu Dausende vun Zeechen.</li>
  <li>Kann mat der Kamera vum Handy aus verschiddene Richtunge gescannt ginn.</li>
  <li>Huet eng Feelerkorrektur, sou datt en och liesbar bleift, wann en Deel beschiedegt ass.</li>
  <li>Kann ganz kleng gemaach ginn, zum Beispill Data Matrix op elektroneschen Komponenten.</li>
</ul>

<h2>Kuerze Verglach</h2>
<table>
  <thead><tr><th></th><th>1D-Barcode</th><th>2D-Barcode</th></tr></thead>
  <tbody>
    <tr><td>Form</td><td>Vertikal Strécher</td><td>Quadrater/Punkten an engem Véiereck</td></tr>
    <tr><td>Kapazitéit</td><td>Kleng</td><td>Grouss</td></tr>
    <tr><td>Scangeräit</td><td>Laserscanner oder Kamera</td><td>Kamera oder 2D-Scanner</td></tr>
    <tr><td>Widderstandsfäegkeet</td><td>Limitéiert</td><td>Mat Feelerkorrektur</td></tr>
    <tr><td>Beispiller</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Wéini benotzt een wat?</h2>
<ul>
  <li><strong>Produkter, déi a Geschäfter oder Minimarchéë verkaf ginn</strong>: benotzt en offiziellen EAN-13 vu GS1. Kuckt <a href="/artikel/cara-mendapatkan-barcode-ean-13">wéi een en EAN-13-Barcode kritt</a>.</li>
  <li><strong>Etikette fir Lager, Regaler oder Versand</strong>: Code 128 ass eng üblech Wiel, well e kompakt ass a Buschtawen an Zuelen ënnerstëtzt.</li>
  <li><strong>Linken, Menükaarten, WiFi oder Kontakter fir Clienten</strong>: QR Code, well e sech direkt mat der Kamera vum Handy scanne léisst.</li>
  <li><strong>Ganz kleng Etiketten</strong>: Data Matrix.</li>
  <li><strong>Identitéitskaarten, Fligertickete oder Dokumenter</strong>: PDF417 oder Aztec.</li>
</ul>
<p>All dës Typen kënnt Dir gratis op <a href="/">I Need Barcode</a> maachen. Wann Dir nach net sécher sidd, fänkt mam QR Code fir d'Besoine vun de Clienten un an mam Code 128 fir intern Besoinen.</p>
`
};
