// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Barra-kodeak inprimatzeko tamaina eta bereizmen egokiak",
  desc: "Txikiegiak edo lausoak diren barra-kodeak zailak dira eskaneatzen. Ikasi gutxieneko tamaina, eskaneatze-distantziaren araua eta inprimatzeko irudi-bereizmen segurua.",
  tags: ["Gida", "Inprimaketa"],
  coverCaption: "Etiketa-inprimagailu batek paketeetarako eta ontzietarako barra-kodeak inprimatzen ditu.",
  inlineCaption: "Etiketaren tamainak erabakitzen du barra-kodea zenbateko handia inprima daitekeen.",
  faq: [
    ["Zein da QR Code bat inprimatzeko gutxieneko tamaina?", "Hurbiletik eskaneatzeko, 2 × 2 cm inguru da muga segurua. Distantzia handiagoetarako, erabili 10 : 1 inguruko proportzioa eskaneatze-distantziaren eta QR Codearen zabaleraren artean."],
    ["Zein da EAN-13 barra-kodearen tamaina estandarra?", "EAN-13ren tamaina estandarra 37,3 × 25,9 mm ingurukoa da. % 80 ingururaino txiki daiteke edo % 200eraino handitu."],
    ["Zergatik geratzen da barra-kodea lauso inprimatu ondoren?", "Normalean, irudia txikia zelako eta gero handitu delako, edo kalitate txikiko JPG gisa gorde delako. Deskargatu modulu-tamaina handiagoarekin PNG formatuan."]
  ],
  body: `
<p>Pantailan ondo ikusten den barra-kode bat ez da nahitaez irakurgarria izango inprimatu ondoren. Tamaina txikiegiak, bereizmen txikiak edo zabaldutako tintak eskanerrak irakurtzean huts egitea eragin dezakete. Hona hemen gida bat zure inprimaketak irakurgarriak izan daitezen.</p>

<h2>Ezagutu modulua</h2>
<p><strong>Modulua</strong> barra-kodearen unitaterik txikiena da, hau da, QR Code bateko lauki txiki bat edo barra-kode lineal bateko marrarik estuena. Modulu-tamainak erabakitzen du barra-kodea zenbateko erraz irakurtzen den. <a href="/">I Need Barcode</a>-n, modulu-tamaina Ezarpenak atalean doi daiteke: zenbat eta balio handiagoa, orduan eta handiagoa eta zorrotzagoa izango da deskargatutako irudia.</p>

<h2>QR Codearen gutxieneko tamaina</h2>
<ul>
  <li>Hurbiletik eskaneatzeko (adibidez bisita-txartelak edo produktu-etiketak), <strong>2 × 2 cm</strong> inguru da muga segurua.</li>
  <li>Erabili <strong>10 : 1</strong> inguruko proportzio-araua: eskaneatze-distantzia QR Codearen zabalera hamar aldiz da gutxi gorabehera. 2 metrora eskaneatzen den kartel baterako, egin gutxienez 20 cm inguruko QR Codea.</li>
  <li>Zenbat eta datu gehiago gorde, orduan eta trinkoagoa da eredua, eta tamaina handiagoa behar du.</li>
</ul>

<h2>Produktuen barra-kodeen tamaina</h2>
<p><a href="/?type=ean13">EAN-13</a>ren tamaina estandarra 37,3 × 25,9 mm ingurukoa da (% 100). % 80 ingururaino txiki daiteke edo % 200eraino handitu. Saihestu marren altuera gehiegi moztea, kutxetako eskanerrek tartea behar baitute hainbat angelutatik irakurtzeko.</p>

<h2>Irudiaren bereizmena</h2>
<ul>
  <li>Inprimatzeko, saiatu modulu bakoitza <strong>hainbat pixel osorekin</strong> marrazten, ez pixel zatiekin. Aukeratu modulu-tamaina handiagoa deskargatzean, eta txikitu diseinu-aplikazioan, ez alderantziz.</li>
  <li>Saihestu barra-kodearen irudi txiki bat handitzea, laukien ertzak lauso edo zerradun geratuko baitira.</li>
  <li>Gorde PNG formatuan, koloreak eta ertzak JPGrekin bezala hondatu ez daitezen.</li>
</ul>

<h2>Eremu lasaia</h2>
<p>Barra-kode orok espazio hutsa behar du inguruan, <strong>eremu lasaia</strong> (quiet zone) deritzona. QR Codeetarako, lau moduluko zabalera izan beharko luke, ahal dela. Barra-kode linealetan, ezkerreko eta eskuineko espazio hutsa oso garrantzitsua da. Ez jarri testurik, diseinu-marrarik edo ontziaren ertzik gertuegi.</p>

<h2>Koloreak eta materialak</h2>
<ul>
  <li>Erabili kolore iluna barra-koderako eta kolore argia atzealderako.</li>
  <li>Saihestu material distiratsuak edo gardenak, argiaren islek kamera oztopa dezaketelako.</li>
  <li>Inprimatu beti lagin bat eta probatu hainbat telefono edo eskanerrekin asko inprimatu aurretik.</li>
</ul>
<p>Zure barra-kodea eskaneatzen zaila bada oraindik, begiratu <a href="/artikel/barcode-tidak-bisa-dipindai">barra-kode bat eskaneatu ezin izateko 7 arrazoi</a>.</p>
`
};
