// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Déi richteg Gréisst an Opléisung vu Barcoden fir den Drock",
  desc: "Barcoden, déi ze kleng oder verschwomme sinn, loosse sech schwéier scannen. Léiert d'Mindestgréisst, d'Reegel fir d'Scandistanz an déi Bildopléisung, déi fir den Drock sécher ass.",
  tags: ["Guide", "Drock"],
  coverCaption: "En Etikettendrécker dréckt Barcoden fir Päck a Verpackungen.",
  inlineCaption: "D'Gréisst vun der Etikett entscheet, wéi grouss de Barcode gedréckt ka ginn.",
  faq: [
    ["Wat ass d'Mindestgréisst vun engem QR Code fir den Drock?", "Fir vu no ze scannen, ass ongeféier 2 × 2 cm déi sécher Grenz. Fir méi grouss Distanze benotzt e Verhältnis vun ongeféier 10 : 1 tëscht der Scandistanz an der Breet vum QR Code."],
    ["Wat ass d'Standardgréisst vun engem EAN-13-Barcode?", "D'Standardgréisst vum EAN-13 ass ongeféier 37,3 × 25,9 mm. Si kann op ongeféier 80 % verklengert oder bis op 200 % vergréissert ginn."],
    ["Firwat ass de Barcode nom Drock verschwommen?", "Meeschtens well d'Bild kleng war an duerno vergréissert gouf, oder als JPG vun nidderger Qualitéit gespäichert gouf. Downloadt mat enger méi grousser Modulgréisst am PNG-Format."]
  ],
  body: `
<p>E Barcode, deen um Ecran gutt ausgesäit, ass nom Drock net onbedéngt liesbar. Eng ze kleng Gréisst, eng niddreg Opléisung oder Tënt, déi verleeft, kënnen dozou féieren, datt de Scanner en net liese kann. Hei ass e Guide, fir datt Är Ausdréck liesbar bleiwen.</p>

<h2>Léiert de Modul kennen</h2>
<p>E <strong>Modul</strong> ass déi klengst Eenheet vun engem Barcode, dat heescht e klenge Quadrat beim QR Code oder dee schmuelste Stréch beim Stréchbarcode. D'Modulgréisst entscheet, wéi einfach de Barcode sech liese léisst. Op <a href="/">I Need Barcode</a> kann d'Modulgréisst ënner Astellungen ugepasst ginn: wat méi héich de Wäert, wat méi grouss a méi schaarf dat erofgeluede Bild.</p>

<h2>Mindestgréisst vum QR Code</h2>
<ul>
  <li>Fir vu no ze scannen (zum Beispill Visittekaarten oder Produktetiketten), ass ongeféier <strong>2 × 2 cm</strong> déi sécher Grenz.</li>
  <li>Benotzt d'Verhältnisreegel vun ongeféier <strong>10 : 1</strong>: d'Scandistanz ass ongeféier zéngmol d'Breet vum QR Code. Fir en Affiche, deen aus 2 Meter Distanz gescannt gëtt, maacht den QR Code mindestens ongeféier 20 cm grouss.</li>
  <li>Wat méi Donnéeë gespäichert ginn, wat méi dicht d'Muster ass, an dofir brauch et eng méi grouss Gréisst.</li>
</ul>

<h2>Gréisst vu Produktbarcoden</h2>
<p>D'Standardgréisst vum <a href="/?type=ean13">EAN-13</a> ass ongeféier 37,3 × 25,9 mm (100 %). Si kann op ongeféier 80 % verklengert oder bis op 200 % vergréissert ginn. Vermeit, d'Héicht vun de Strécher ze vill ze kierzen, well Keessescanner Plaz brauchen, fir aus verschiddene Wénkelen ze liesen.</p>

<h2>Bildopléisung</h2>
<ul>
  <li>Fir den Drock sollt all Modul no Méiglechkeet mat <strong>e puer ganze Pixelen</strong> gezeechent ginn, net mat Deeler vu Pixelen. Wielt beim Download eng méi grouss Modulgréisst a maacht se duerno an Ärem Design-Programm méi kleng, net ëmgedréint.</li>
  <li>Vermeit, e klengt Barcodebild ze vergréisseren, well d'Kante vun de Quadrater soss verschwommen oder gezackt ginn.</li>
  <li>Späichert am PNG-Format, fir datt d'Faarwen an d'Kanten net beschiedegt gi wéi beim JPG.</li>
</ul>

<h2>Rouzon</h2>
<p>All Barcode brauch fräie Raum ronderëm sech, déi sougenannt <strong>Rouzon</strong> (quiet zone). Beim QR Code sollt se ideal véier Moduler breet sinn. Beim Stréchbarcode ass de fräie Raum lénks a riets ganz wichteg. Setzt keen Text, keng Designlinnen an net de Rand vun der Verpackung ze no drun.</p>

<h2>Faarwen a Materialien</h2>
<ul>
  <li>Benotzt eng donkel Faarf fir de Barcode an eng hell Faarf fir den Hannergrond.</li>
  <li>Vermeit blénkeg oder transparent Materialien, well Liichtreflexer d'Kamera stéiere kënnen.</li>
  <li>Dréckt ëmmer e Muster a testt et mat e puer Handyen oder Scanneren, ier Dir vill dréckt.</li>
</ul>
<p>Wann Äre Barcode sech ëmmer nach schwéier scanne léisst, kuckt <a href="/artikel/barcode-tidak-bisa-dipindai">7 Grënn, firwat e Barcode sech net scanne léisst</a>.</p>
`
};
