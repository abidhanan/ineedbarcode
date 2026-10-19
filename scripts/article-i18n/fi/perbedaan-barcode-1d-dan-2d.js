// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "1D- ja 2D-viivakoodien erot: kumman tarvitset?",
  desc: "Viivoista koostuva viivakoodi ja QR Code ovat molemmat viivakoodeja, mutta niiden käyttötarkoitukset eroavat. Vertaa kapasiteettia, lukutapaa ja käyttöesimerkkejä.",
  tags: ["Perusteet", "Viivakoodit"],
  coverCaption: "Varaston käsilukija lukee 1D- ja 2D-viivakoodeja.",
  inlineCaption: "Lähetystarroissa käytetään yleensä viivoista koostuvia viivakoodeja.",
  faq: [
    ["Voiko kassalukija lukea QR Coden?", "Kaikki eivät voi. 1D-laserlukijat lukevat vain viivoista koostuvia viivakoodeja. QR Coden lukemiseen tarvitaan kamerapohjainen 2D-lukija tai puhelimen kamera."],
    ["Mikä viivakoodi on pienin?", "Data Matrix on 2D-viivakoodi, jonka voi tulostaa hyvin pienenä, joten sitä käytetään usein elektroniikkakomponenteissa, lääkinnällisissä laitteissa ja lääkkeiden etiketeissä."],
    ["Voiko vähittäiskaupan tuotteessa käyttää QR Codea EAN-13:n sijaan?", "Kaupoissa myytävä tuote tarvitsee edelleen rekisteröidyn EAN-13- tai UPC-koodin. QR Coden voi lisätä pakkaukseen täydennykseksi, esimerkiksi tuotetietoja tai kampanjoita varten."]
  ],
  body: `
<p>Viivakoodia luodessa ensimmäinen kysymys on yleensä: käytänkö viivoista koostuvaa viivakoodia vai QR Codea? Molempia kutsutaan viivakoodeiksi, mutta ne tallentavat tietoa eri tavoin, joten myös niiden käyttötarkoitukset eroavat.</p>

<h2>1D-viivakoodi (lineaarinen)</h2>
<p>1D-viivakoodi koostuu pystysuorista viivoista. Tieto tallennetaan yhteen suuntaan eli vasemmalta oikealle. Tunnetuimpia esimerkkejä ovat <a href="/?type=ean13">EAN-13</a> tuotepakkauksissa ja <a href="/?type=code128">Code 128</a> lähetystarroissa.</p>
<ul>
  <li>Pieni kapasiteetti, yleensä kymmenestä muutamaan kymmeneen merkkiin.</li>
  <li>Luettavissa edullisilla ja erittäin nopeilla kassan laserlukijoilla.</li>
  <li>Sopii tuotekoodeille, sarjanumeroille ja lähetysnumeroille.</li>
</ul>

<h2>2D-viivakoodi</h2>
<p>2D-viivakoodi tallentaa tietoa kahteen suuntaan, vaaka- ja pystysuunnassa, joten siihen mahtuu paljon enemmän. Esimerkiksi <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> ja <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Suuri kapasiteetti, kymmenistä tuhansiin merkkeihin.</li>
  <li>Luettavissa puhelimen kameralla eri suunnista.</li>
  <li>Sisältää virheenkorjauksen, joten se on luettavissa osittain vaurioituneenakin.</li>
  <li>Voi olla hyvin pieni, kuten Data Matrix elektroniikkakomponenteissa.</li>
</ul>

<h2>Lyhyt vertailu</h2>
<table>
  <thead><tr><th></th><th>1D-viivakoodi</th><th>2D-viivakoodi</th></tr></thead>
  <tbody>
    <tr><td>Muoto</td><td>Pystysuorat viivat</td><td>Ruudut/pisteet neliössä</td></tr>
    <tr><td>Kapasiteetti</td><td>Pieni</td><td>Suuri</td></tr>
    <tr><td>Lukulaite</td><td>Laserlukija tai kamera</td><td>Kamera tai 2D-lukija</td></tr>
    <tr><td>Vauriokestävyys</td><td>Rajallinen</td><td>Virheenkorjaus</td></tr>
    <tr><td>Esimerkit</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Milloin käyttää kumpaakin?</h2>
<ul>
  <li><strong>Kaupoissa tai lähikaupoissa myytävät tuotteet</strong>: käytä virallista GS1:n EAN-13-koodia. Katso <a href="/artikel/cara-mendapatkan-barcode-ean-13">miten EAN-13-viivakoodi hankitaan</a>.</li>
  <li><strong>Varasto-, hylly- tai lähetystarrat</strong>: Code 128 on yleinen valinta, koska se on tiivis ja tukee sekä kirjaimia että numeroita.</li>
  <li><strong>Linkit, ruokalistat, WiFi tai yhteystiedot asiakkaille</strong>: QR Code, koska sen voi lukea suoraan puhelimen kameralla.</li>
  <li><strong>Hyvin pienet etiketit</strong>: Data Matrix.</li>
  <li><strong>Henkilökortit, lentoliput tai asiakirjat</strong>: PDF417 tai Aztec.</li>
</ul>
<p>Kaikki edellä mainitut tyypit voit luoda ilmaiseksi <a href="/">I Need Barcodessa</a>. Jos olet vielä epävarma, aloita QR Codella asiakkaiden tarpeisiin ja Code 128:lla sisäisiin tarpeisiin.</p>
`
};
