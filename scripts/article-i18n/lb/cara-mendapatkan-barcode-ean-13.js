// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Wéi kleng a mëttel Betriber en EAN-13-Produktbarcode kréien",
  desc: "Wëllt Dir Är Produkter an d'Minimarchéen oder Supermarchéë bréngen? Léiert, wat d'Zuelen am EAN-13 bedeiten, wéi Dir eng offiziell Nummer bei GS1 Indonesia registréiert a wéi Dir se dréckt.",
  tags: ["Business", "Eenzelhandel"],
  coverCaption: "Verpackunge vun Detailhandelsprodukter brauchen e registréierten EAN-13-Barcode.",
  inlineCaption: "Geschäfter erkennen d'Produkter un der EAN-13-Nummer an hirem Keessesystem.",
  faq: [
    ["Däerf ech meng EAN-13-Nummer selwer erfannen?", "D'Bild vum Barcode dierft Dir selwer maachen, mä d'Nummer sollt eng offiziell vu GS1 sinn. Eng selwer erfonnten Nummer ka mat anere Produkter kollidéieren a vun de Geschäfter refuséiert ginn."],
    ["Brauch all Produktvariant en anere Barcode?", "Jo. All ënnerschiddlech Variant, zum Beispill mat engem anere Goût, enger anerer Gréisst oder engem aneren Inhalt vun der Verpackung, brauch hir eegen EAN-13-Nummer."],
    ["Wat ass d'Kontrollziffer beim EAN-13?", "D'Kontrollziffer ass déi 13. Ziffer, déi aus den 12 Ziffere virdru berechent gëtt. De Scanner benotzt se, fir sécherzestellen, datt de Barcode richteg gelies gouf. De Generator vun I Need Barcode berechent se automatesch, wann Dir 12 Ziffer agitt."]
  ],
  body: `
<p>Wann Är Produkter a Minimarchéen, Supermarchéen oder op grousse Marktplazen verkaf solle ginn, gëtt Dir normalerweis gefrot, en <strong>EAN-13</strong>-Barcode op d'Verpackung ze drécken. Dëse Barcode enthält 13 Ziffer, déi déi weltwäit eenzegaarteg Identitéit vun Ärem Produkt sinn.</p>

<h2>D'Bedeitung vun den 13 Ziffer vum EAN-13</h2>
<ul>
  <li><strong>GS1-Präfix</strong>: déi éischt dräi Ziffere weisen, wéi eng GS1-Organisatioun d'Nummer erausginn huet. Nummeren, déi vu GS1 Indonesia erausgi ginn, fänke mat <strong>899</strong> un.</li>
  <li><strong>Firmennummer</strong>: d'Identitéit vun Ärer Firma, déi Dir bei der Registréierung kritt.</li>
  <li><strong>Produktnummer</strong>: gëtt vun der Firma selwer fir all Produktvariant festgeluecht, zum Beispill fir en anere Goût oder eng aner Gréisst.</li>
  <li><strong>Kontrollziffer</strong>: déi lescht Ziffer, déi automatesch aus den 12 Ziffere virdru berechent gëtt, fir Liesfeeler ze vermeiden.</li>
</ul>

<h2>Firwat muss et eng offiziell Nummer sinn?</h2>
<p>En EAN-13-Barcode ka jiddereen zeechnen, mä d'<strong>Nummer</strong> muss registréiert sinn. D'Geschäfter benotzen dës Nummer, fir d'Produkt an hire Systemer z'erkennen. Wann Dir eng Nummer selwer erfannt, ka se mam Produkt vun enger anerer Firma kollidéieren a refuséiert ginn, wann d'Produkt am Geschäft registréiert gëtt.</p>

<h2>Wéi Dir eng Nummer bei GS1 Indonesia registréiert</h2>
<ol>
  <li>Preparéiert d'Dokumenter vun Ärem Betrib, wéi d'NIB (Identifikatiounsnummer vum Betrib) an d'NPWP (Steiernummer), souwéi eng Lëscht vun de Produkter, déi e Barcode kréie sollen.</li>
  <li>Registréiert d'Firma iwwer déi offiziell Websäit vu GS1 Indonesia a wielt d'Zuel vun den Nummeren, déi Dir braucht.</li>
  <li>Bezuelt d'Registréierungsgebühr an de Joresbäitrag no de geltende Bestëmmungen.</li>
  <li>Nodeems Är Demande ugeholl gouf, kritt Dir eng Firmennummer a kënnt Nummere fir all Produkt erstellen.</li>
</ol>
<p>D'Konditiounen an d'Käschte kënne sech änneren, kontrolléiert dofir ëmmer déi neiste Informatiounen direkt op der Websäit vu GS1 Indonesia.</p>

<h2>D'Bild vum Barcode maachen</h2>
<p>Wann Dir eng Nummer hutt, maacht den <a href="/?type=ean13">EAN-13-Generator</a> op a gitt déi 12 oder 13 Ziffere vun Ärer Produktnummer an. Wann Dir 12 Ziffer agitt, gëtt d'Kontrollziffer automatesch berechent. Vergewëssert Iech, datt d'Optioun fir den Text ënner dem Barcode aktivéiert ass, fir datt d'Zuele matgedréckt ginn, an downloadt en dann als PNG.</p>

<h2>Tipps fir den Drock op der Verpackung</h2>
<ul>
  <li>Benotzt schwaarz oder donkelblo Strécher op wäissem Hannergrond. Vermeit rout Faarf fir d'Strécher, well vill Keessescanner rout Liicht benotzen, sou datt rout Strécher net gelies ginn.</li>
  <li>Maacht de Barcode net ze kleng. D'Standardgréisst vum EAN-13 ass ongeféier 37,3 × 25,9 mm a ka bis op ongeféier 80 % verklengert ginn. Méi doriwwer am <a href="/artikel/ukuran-barcode-untuk-dicetak">Guide iwwer d'Gréisst vu Barcoden</a>.</li>
  <li>Loosst fräie Raum lénks a riets vum Barcode, a vermeit, en op Falen oder Nät vun der Verpackung ze placéieren.</li>
  <li>Testt den Ausdrock mat engem Scanner, ier Dir a grousse Quantitéiten dréckt.</li>
</ul>
<p>Fir Produkter, déi an Nordamerika verkaf ginn, kann et sinn, datt Dir och gefrot gitt, <a href="/?type=upca">UPC-A</a> mat 12 Ziffer ze benotzen.</p>
`
};
