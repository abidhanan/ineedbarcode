// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Näin pienyritys saa tuotteelleen EAN-13-viivakoodin",
  desc: "Haluatko tuotteesi lähikauppoihin tai supermarketteihin? Opi, mitä EAN-13:n numerot tarkoittavat, miten virallinen numero rekisteröidään GS1 Indonesiassa ja miten se tulostetaan.",
  tags: ["Liiketoiminta", "Vähittäiskauppa"],
  coverCaption: "Vähittäiskaupan tuotepakkaus tarvitsee rekisteröidyn EAN-13-viivakoodin.",
  inlineCaption: "Kauppa tunnistaa tuotteen kassajärjestelmänsä EAN-13-numerosta.",
  faq: [
    ["Saako EAN-13-numeron keksiä itse?", "Viivakoodikuvan voi tehdä itse, mutta numeron kannattaa olla virallinen, GS1:n myöntämä. Itse keksitty numero voi olla sama kuin jonkin toisen tuotteen, ja kaupat hylkäävät sen."],
    ["Tarvitseeko jokainen tuoteversio oman viivakoodin?", "Kyllä. Jokainen eri versio, esimerkiksi eri maku, koko tai pakkauksen sisältö, tarvitsee oman EAN-13-numeron."],
    ["Mikä on EAN-13:n tarkistusnumero?", "Tarkistusnumero on 13. numero, joka lasketaan 12 edeltävästä numerosta. Lukija käyttää sitä varmistaakseen, että viivakoodi on luettu oikein. I Need Barcoden generaattori laskee sen automaattisesti, jos syötät 12 numeroa."]
  ],
  body: `
<p>Jos haluat tuotettasi myytävän lähikaupoissa, supermarketeissa tai suurilla verkkokauppa-alustoilla, sinua pyydetään yleensä lisäämään pakkaukseen <strong>EAN-13</strong>-viivakoodi. Tämä viivakoodi sisältää 13 numeroa, jotka toimivat tuotteesi yksilöllisenä tunnisteena kaikkialla maailmassa.</p>

<h2>Mitä EAN-13:n 13 numeroa tarkoittavat</h2>
<ul>
  <li><strong>GS1-etuliite</strong>: kolme ensimmäistä numeroa kertovat, mikä GS1-organisaatio numeron on myöntänyt. GS1 Indonesian myöntämät numerot alkavat <strong>899</strong>.</li>
  <li><strong>Yritysnumero</strong>: yrityksesi tunniste, joka annetaan rekisteröitymisen yhteydessä.</li>
  <li><strong>Tuotenumero</strong>: yritys määrittää sen itse jokaiselle tuoteversiolle, esimerkiksi eri maulle tai koolle.</li>
  <li><strong>Tarkistusnumero</strong>: viimeinen numero, joka lasketaan automaattisesti 12 edeltävästä numerosta lukuvirheiden estämiseksi.</li>
</ul>

<h2>Miksi tarvitaan virallinen numero?</h2>
<p>EAN-13-viivakoodin voi piirtää kuka tahansa, mutta <strong>numeron</strong> on oltava rekisteröity. Kaupat tunnistavat tuotteen järjestelmissään tämän numeron avulla. Jos keksit numeron itse, se voi olla sama kuin jonkin toisen yrityksen tuotteella, ja se hylätään, kun tuotetta rekisteröidään kauppaan.</p>

<h2>Näin rekisteröit numeron GS1 Indonesiassa</h2>
<ol>
  <li>Valmistele yrityksen asiakirjat, kuten NIB (Nomor Induk Berusaha) ja NPWP, sekä luettelo tuotteista, joille viivakoodi annetaan.</li>
  <li>Rekisteröi yritys GS1 Indonesian virallisella verkkosivustolla ja valitse tarvittava numeromäärä.</li>
  <li>Maksa rekisteröintimaksu ja vuosimaksu voimassa olevien ehtojen mukaisesti.</li>
  <li>Hyväksynnän jälkeen saat yritysnumeron ja voit luoda numerot jokaiselle tuotteelle.</li>
</ol>
<p>Vaatimukset ja maksut voivat muuttua, joten tarkista aina uusimmat tiedot suoraan GS1 Indonesian verkkosivustolta.</p>

<h2>Viivakoodikuvan luominen</h2>
<p>Kun numero on saatu, avaa <a href="/?type=ean13">EAN-13-generaattori</a> ja syötä tuotenumerosi 12 tai 13 numeroa. Jos syötät 12 numeroa, tarkistusnumero lasketaan automaattisesti. Varmista, että viivakoodin alla olevan tekstin valinta on päällä, jotta numerot tulostuvat, ja lataa PNG-muodossa.</p>

<h2>Vinkit pakkaukseen tulostamiseen</h2>
<ul>
  <li>Käytä mustia tai tummansinisiä viivoja valkoisella taustalla. Vältä punaisia viivoja, koska monet kassalukijat käyttävät punaista valoa, jolloin punaiset viivat eivät lue.</li>
  <li>Älä pienennä viivakoodia liikaa. EAN-13:n vakiokoko on noin 37,3 × 25,9 mm, ja sitä saa pienentää noin 80 %:iin. Lisää tietoa <a href="/artikel/ukuran-barcode-untuk-dicetak">viivakoodien kokoja käsittelevässä oppaassa</a>.</li>
  <li>Jätä tyhjää tilaa viivakoodin vasemmalle ja oikealle puolelle äläkä sijoita sitä pakkauksen taitoksiin tai saumoihin.</li>
  <li>Testaa tuloste lukijalla ennen suuria tulostusmääriä.</li>
</ul>
<p>Pohjois-Amerikassa myytäville tuotteille sinulta saatetaan edellyttää myös 12-numeroista <a href="/?type=upca">UPC-A</a>-koodia.</p>
`
};
