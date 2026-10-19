// apa-itu-barcode
module.exports = {
  title: "Wat ass e Barcode? Bedeitung, Funktiounsweis an Typen",
  desc: "Barcoden sinn op bal all de Produkter, déi Dir kaaft. Léiert, wéi se funktionéieren, hir kuerz Geschicht an déi Barcodetypen, déi am meeschte benotzt ginn.",
  tags: ["Grondlagen", "Barcode"],
  coverCaption: "De Barcode op der Verpackung enthält den eenzegaartege Code vum Produkt.",
  inlineCaption: "D'Keesepersonal benotzt e Scanner, fir de Barcode an engem Abléck ze liesen.",
  faq: [
    ["Wat ass den Ënnerscheed tëscht engem Barcode an engem QR Code?", "Den QR Code ass eng Zort Barcode, nämlech en 2D-Barcode. E Stréchbarcode (1D) späichert nëmme wéineg Zeechen a gëtt vu lénks no riets gelies, wärend den QR Code Donnéeën an zwou Richtunge späichert an doduerch e Link, en Text oder WiFi-Donnéeën ophuele kann."],
    ["Späichert de Barcode de Präis vum Produkt?", "Normalerweis net. E Produktbarcode enthält just e Code. De Präis an den Numm vum Produkt sinn am Keessesystem gespäichert a ginn op Basis vum gescannte Code gesicht."],
    ["Muss een eppes bezuelen, fir e Barcode ze maachen?", "Nee. D'Bild vum Barcode kann een gratis erstellen, zum Beispill op I Need Barcode. Dat Eenzegt, wat Dir géint Bezuelung registréiere musst, ass déi offiziell Nummer fir Barcoden op Detailhandelsprodukter wéi EAN-13 iwwer GS1."]
  ],
  body: `
<p>E Barcode ass eng Manéier, Donnéeën a Form vun engem Muster ze schreiwen, dat eng Maschinn liese kann. Dëst Muster besteet normalerweis aus schwaarzen a wäisse Strécher vu verschiddener Breet oder aus klenge Quadrater, déi an engem Véiereck ugeuerdent sinn. Beim Scanne gëtt d'Muster nees an Zuelen oder Text iwwersat, zum Beispill e Produktcode, eng Versandnummer oder eng Websäitadress.</p>
<p>Well e vun enger Maschinn gelies gëtt, ass e Barcode vill méi séier a mécht vill manner Feeler, wéi wann een de Code mat der Hand antippt. Dofir ginn Barcoden un der Keess, am Lager, an de Spideeler, op Ticketen a bis op Liewensmëttelverpackunge benotzt.</p>

<h2>Eng kuerz Geschicht vum Barcode</h2>
<p>D'Iddi vum Barcode gouf 1952 vum Norman Joseph Woodland an dem Bernard Silver an den USA patentéiert. Eréischt 1974 gouf de Barcode wierklech an de Geschäfter benotzt, wéi an engem Supermarché an Ohio e Pak Kaugummi mat engem UPC-Code gescannt gouf. Zënterhier hu Barcoden sech op der ganzer Welt verbreet a ginn haut weltwäit vun der Normenorganisatioun GS1 verwalt.</p>

<h2>Wéi funktionéiert e Barcode?</h2>
<p>De Scanner beliicht de Barcode a liest d'Reflexioun. Donkel Deeler reflektéiere wéineg Liicht, hell Deeler vill. Dësen Ënnerscheed gëtt an eng Rei vun 0 an 1 ëmgewandelt an duerno mat de Reegele vun deem jeeweilegen Typ vu Barcode verglach. Vill Barcoden hunn och eng <strong>Kontrollziffer</strong> (check digit), dat heescht eng lescht Ziffer, déi aus de Ziffere virdru berechent gëtt. Wann d'Resultat vun der Berechnung net stëmmt, weess de Scanner, datt eppes falsch ass, a refuséiert d'Resultat.</p>
<p>De Barcode selwer späichert normalerweis just e Code. Informatioune wéi den Numm vum Produkt oder de Präis sinn am Keessesystem oder an enger Datebank gespäichert a ginn op Basis vun deem Code gesicht.</p>

<h2>Déi heefegst Barcodetypen</h2>
<p>Allgemeng ginn d'Barcoden an zwou grouss Gruppen opgedeelt:</p>
<ul>
  <li><strong>1D-Barcoden (linear)</strong>: vertikal Strécher, déi vu lénks no riets gelies ginn. Beispiller sinn <a href="/?type=ean13">EAN-13</a> an <a href="/?type=upca">UPC-A</a> fir Detailhandelsprodukter, souwéi <a href="/?type=code128">Code 128</a> an <a href="/?type=code39">Code 39</a> fir Logistik a Lager.</li>
  <li><strong>2D-Barcoden</strong>: Quadratmuster, déi Donnéeën an zwou Richtunge späicheren an domat vill méi ophuele kënnen. Beispiller sinn <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> an <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Doriwwer eraus gëtt et speziell Barcoden fir Post a Versand, fir d'Gesondheet, souwéi GS1-Standarde fir d'Liwwerketten. Eng méi detailléiert Erklärung vun den Ënnerscheeder kënnt Dir am Artikel <a href="/artikel/perbedaan-barcode-1d-dan-2d">Den Ënnerscheed tëscht 1D- an 2D-Barcoden</a> liesen.</p>

<h2>Fir wat ginn Barcoden benotzt?</h2>
<ul>
  <li><strong>Detailhandel</strong>: maachen d'Keess méi séier an erfaassen de Stock automatesch.</li>
  <li><strong>Lager a Versand</strong>: verfollegen Wueren a Päck vun enger Plaz op déi aner.</li>
  <li><strong>Ticketen an Evenementer</strong>: kontrolléieren d'Echtheet vun engem Ticket mat engem eenzege Scan.</li>
  <li><strong>Marketing</strong>: en QR Code op enger Broschür oder enger Verpackung bréngt d'Leit direkt op Är Websäit, Är Menükaart oder Äre WhatsApp.</li>
</ul>

<h2>Äre Barcode selwer maachen</h2>
<p>Dir braucht keng bezuelt App, fir e Barcode ze maachen. Op <a href="/">I Need Barcode</a> wielt Dir den Typ vu Barcode, fëllt d'Donnéeën aus an downloadt en als PNG-Bild. Et ginn iwwer 100 Typen zur Auswiel, an all sinn se gratis an ouni Umeldung.</p>
`
};
