// apa-itu-barcode
module.exports = {
  title: "Mikä on viivakoodi? Määritelmä, toimintaperiaate ja tyypit",
  desc: "Viivakoodi löytyy lähes jokaisesta ostamastasi tuotteesta. Tutustu siihen, miten se toimii, sen lyhyeen historiaan ja yleisimmin käytettyihin viivakoodityyppeihin.",
  tags: ["Perusteet", "Viivakoodit"],
  coverCaption: "Pakkauksen viivakoodi sisältää tuotteen yksilöllisen koodin.",
  inlineCaption: "Kassahenkilö lukee viivakoodin lukijalla hetkessä.",
  faq: [
    ["Mitä eroa on viivakoodilla ja QR Codella?", "QR Code on yksi viivakoodityypeistä, eli 2D-viivakoodi. Viivoista koostuva (1D) viivakoodi tallentaa vain vähän merkkejä ja luetaan vasemmalta oikealle, kun taas QR Code tallentaa tietoa kahteen suuntaan, joten siihen mahtuu linkki, tekstiä tai WiFi-tiedot."],
    ["Sisältääkö viivakoodi tuotteen hinnan?", "Yleensä ei. Tuotteen viivakoodi sisältää vain koodin. Hinta ja tuotteen nimi on tallennettu kassajärjestelmään, ja ne haetaan luetun koodin perusteella."],
    ["Onko viivakoodin luominen maksullista?", "Ei. Viivakoodikuvan voi luoda ilmaiseksi esimerkiksi I Need Barcodessa. Maksullinen rekisteröinti tarvitaan vain virallisille numeroille, joita käytetään vähittäiskaupan tuotteiden viivakoodeissa, kuten EAN-13:ssa, ja ne haetaan GS1:n kautta."]
  ],
  body: `
<p>Viivakoodi on tapa kirjoittaa tietoa kuvioksi, jonka kone pystyy lukemaan. Kuvio koostuu yleensä eri levyisistä mustista ja valkoisista viivoista tai neliön muotoon järjestetyistä pienistä ruuduista. Kun kuvio luetaan, se muunnetaan takaisin numeroiksi tai tekstiksi, esimerkiksi tuotekoodiksi, lähetysnumeroksi tai verkkosivun osoitteeksi.</p>
<p>Koska viivakoodin lukee kone, se on paljon nopeampaa ja virheettömämpää kuin koodin kirjoittaminen käsin. Siksi viivakoodeja käytetään kassoilla, varastoissa, sairaaloissa, lipuissa ja jopa elintarvikepakkauksissa.</p>

<h2>Viivakoodin lyhyt historia</h2>
<p>Viivakoodin idean patentoivat vuonna 1952 Yhdysvalloissa Norman Joseph Woodland ja Bernard Silver. Kaupoissa viivakoodeja alettiin todella käyttää vasta vuonna 1974, kun ohiolaisessa supermarketissa luettiin purukumipaketti, jossa oli UPC-koodi. Siitä lähtien viivakoodit ovat levinneet kaikkialle maailmaan, ja nykyään niitä hallinnoi maailmanlaajuisesti standardointijärjestö GS1.</p>

<h2>Miten viivakoodi toimii?</h2>
<p>Lukija valaisee viivakoodin ja lukee siitä heijastuvan valon. Tummat kohdat heijastavat vähän valoa, vaaleat paljon. Tämä ero muunnetaan nollien ja ykkösten sarjaksi, jota verrataan kyseisen viivakoodityypin sääntöihin. Monissa viivakoodeissa on myös <strong>tarkistusnumero</strong> (check digit), eli viimeinen numero, joka lasketaan edeltävistä numeroista. Jos laskutulos ei täsmää, lukija tietää, että jokin on vialla, ja hylkää tuloksen.</p>
<p>Viivakoodi itse sisältää yleensä vain koodin. Tiedot, kuten tuotteen nimi tai hinta, on tallennettu kassajärjestelmään tai tietokantaan, ja ne haetaan koodin perusteella.</p>

<h2>Yleisimmin käytetyt viivakoodityypit</h2>
<p>Yleisesti viivakoodit jaetaan kahteen pääryhmään:</p>
<ul>
  <li><strong>1D-viivakoodit (lineaariset)</strong>: pystysuoria viivoja, jotka luetaan vasemmalta oikealle. Esimerkiksi <a href="/?type=ean13">EAN-13</a> ja <a href="/?type=upca">UPC-A</a> vähittäiskaupan tuotteissa sekä <a href="/?type=code128">Code 128</a> ja <a href="/?type=code39">Code 39</a> logistiikassa ja varastoissa.</li>
  <li><strong>2D-viivakoodit</strong>: ruuduista koostuva kuvio, joka tallentaa tietoa kahteen suuntaan, joten siihen mahtuu paljon enemmän. Esimerkiksi <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> ja <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Lisäksi on olemassa erityisiä viivakoodeja postille ja lähetyksille sekä terveydenhuoltoon, samoin kuin GS1-standardeja toimitusketjuja varten. Voit lukea niiden eroista tarkemmin artikkelista <a href="/artikel/perbedaan-barcode-1d-dan-2d">1D- ja 2D-viivakoodien erot</a>.</p>

<h2>Mihin viivakoodeja käytetään?</h2>
<ul>
  <li><strong>Vähittäiskauppa</strong>: nopeuttaa kassatyötä ja kirjaa varaston automaattisesti.</li>
  <li><strong>Varastot ja lähetykset</strong>: tavaroita ja paketteja voi seurata paikasta toiseen.</li>
  <li><strong>Liput ja tapahtumat</strong>: lipun aitouden voi tarkistaa yhdellä lukemisella.</li>
  <li><strong>Markkinointi</strong>: esitteessä tai pakkauksessa oleva QR Code vie ihmiset suoraan verkkosivullesi, ruokalistallesi tai WhatsAppiin.</li>
</ul>

<h2>Oman viivakoodin luominen</h2>
<p>Viivakoodin luomiseen ei tarvita maksullista sovellusta. Valitse <a href="/">I Need Barcodessa</a> viivakoodityyppi, syötä tiedot ja lataa se PNG-kuvana. Valittavana on yli 100 tyyppiä, ja kaikki ovat ilmaisia ilman rekisteröitymistä.</p>
`
};
