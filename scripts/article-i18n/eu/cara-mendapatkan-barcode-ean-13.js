// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Nola lortu EAN-13 produktu-barra-kodea ETEentzat",
  desc: "Zure produktuak supermerkatu txiki edo handietan saldu nahi dituzu? Ikasi EAN-13ko zenbakien esanahia, GS1 Indonesian zenbaki ofiziala nola erregistratu eta nola inprimatu.",
  tags: ["Negozioa", "Txikizkako salmenta"],
  coverCaption: "Txikizkako produktuen ontziek erregistratutako EAN-13 barra-kodea behar dute.",
  inlineCaption: "Txikizkako dendek kutxako sistemako EAN-13 zenbakiaren bidez ezagutzen dituzte produktuak.",
  faq: [
    ["Sor al dezaket nire EAN-13 zenbakia neuk?", "Barra-kodearen irudia zeuk sor dezakezu, baina zenbakiak GS1en zenbaki ofiziala izan beharko luke. Zeuk asmatutako zenbaki batek beste produktu batzuekin talka egin dezake, eta txikizkako dendek baztertu egin dezakete."],
    ["Produktuaren aldaera bakoitzak barra-kode desberdina behar al du?", "Bai. Aldaera desberdin bakoitzak, adibidez zapore, tamaina edo ontziaren eduki desberdina duenak, bere EAN-13 zenbakia behar du."],
    ["Zer da EAN-13ko kontrol-digitua?", "Kontrol-digitua aurreko 12 digituetatik kalkulatzen den 13. digitua da. Eskanerrak barra-kodea behar bezala irakurri dela ziurtatzeko erabiltzen du. I Need Barcode-ren sorgailuak automatikoki kalkulatzen du 12 digitu sartzen badituzu."]
  ],
  body: `
<p>Zure produktuak supermerkatu txikietan, supermerkatuetan edo merkatu-plataforma handietan saldu nahi badituzu, normalean <strong>EAN-13</strong> barra-kodea ontzian jartzeko eskatuko dizute. Barra-kode horrek 13 digitu ditu, eta zure produktuaren identitate bakarra dira mundu osoan.</p>

<h2>EAN-13ko 13 digituen esanahia</h2>
<ul>
  <li><strong>GS1 aurrizkia</strong>: lehen hiru digituek zenbakia eman duen GS1 erakundea adierazten dute. GS1 Indonesiak emandako zenbakiak <strong>899</strong>-rekin hasten dira.</li>
  <li><strong>Enpresaren zenbakia</strong>: zure enpresaren identitatea, erregistratzean ematen zaizuna.</li>
  <li><strong>Produktuaren zenbakia</strong>: enpresak berak ezartzen du produktuaren aldaera bakoitzerako, adibidez zapore edo tamaina desberdinetarako.</li>
  <li><strong>Kontrol-digitua</strong>: aurreko 12 digituetatik automatikoki kalkulatzen den azken digitua, irakurketa okerrak saihesteko.</li>
</ul>

<h2>Zergatik behar da zenbaki ofiziala?</h2>
<p>EAN-13 barra-kodea edonork marraz dezake, baina <strong>zenbakiak</strong> erregistratuta egon behar du. Txikizkako dendek zenbaki hori erabiltzen dute beren sistemetan produktua ezagutzeko. Zenbakia zeuk asmatzen baduzu, beste enpresa baten produktu batekin talka egin dezake, eta baztertu egingo dute produktua dendan erregistratzean.</p>

<h2>Nola erregistratu zenbaki bat GS1 Indonesian</h2>
<ol>
  <li>Prestatu negozioaren agiriak, hala nola NIB (enpresaren identifikazio-zenbakia) eta NPWP (zergadunaren identifikazio-zenbakia), baita barra-kodea izango duten produktuen zerrenda ere.</li>
  <li>Erregistratu enpresa GS1 Indonesiaren webgune ofizialaren bidez, eta aukeratu behar dituzun zenbaki kopurua.</li>
  <li>Ordaindu izen-emate kuota eta urteko kuota, indarrean dauden arauen arabera.</li>
  <li>Onartu ondoren, enpresaren zenbakia jasoko duzu, eta produktu bakoitzerako zenbakiak sortu ahal izango dituzu.</li>
</ol>
<p>Baldintzak eta kostuak alda daitezke; beraz, egiaztatu beti informazio eguneratuena zuzenean GS1 Indonesiaren webgunean.</p>

<h2>Barra-kodearen irudia sortzea</h2>
<p>Zenbakia duzunean, ireki <a href="/?type=ean13">EAN-13 sorgailua</a> eta sartu zure produktu-zenbakiaren 12 edo 13 digituak. 12 digitu sartzen badituzu, kontrol-digitua automatikoki kalkulatuko da. Ziurtatu barra-kodearen azpiko testuaren aukera aktibatuta dagoela zenbakiak inprima daitezen, eta deskargatu PNG gisa.</p>

<h2>Ontzian inprimatzeko aholkuak</h2>
<ul>
  <li>Erabili marra beltzak edo urdin ilunak atzealde zuriaren gainean. Saihestu kolore gorria marretarako, kutxetako eskaner askok argi gorria erabiltzen baitute eta, beraz, marra gorriak ez dira irakurtzen.</li>
  <li>Ez txikitu barra-kodea gehiegi. EAN-13ren tamaina estandarra 37,3 × 25,9 mm ingurukoa da, eta % 80 ingururaino txiki daiteke. Informazio gehiago <a href="/artikel/ukuran-barcode-untuk-dicetak">barra-kodeen tamainaren gidan</a>.</li>
  <li>Utzi espazio hutsa barra-kodearen ezkerrean eta eskuinean, eta saihestu ontziaren tolesturetan edo junturetan jartzea.</li>
  <li>Probatu inprimatutakoa eskaner batekin kopuru handitan inprimatu aurretik.</li>
</ul>
<p>Ipar Amerikan saltzen diren produktuetarako, baliteke 12 digitu dituen <a href="/?type=upca">UPC-A</a> erabiltzeko ere eskatzea.</p>
`
};
