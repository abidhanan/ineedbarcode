// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 syytä, miksi viivakoodi ei lue, ja miten ongelman korjaa",
  desc: "Eikö viivakoodi tai QR Code lue? Tarkista seitsemän yleisintä syytä värikontrastista kokoon ja opi, miten ne korjataan.",
  tags: ["Vinkit", "Viivakoodit"],
  coverCaption: "Kontrasti ja koko ratkaisevat, onko QR Code helppo lukea.",
  inlineCaption: "Varastossa lukematon viivakoodi hidastaa työtä.",
  faq: [
    ["Miksi QR Code lukee yhdellä puhelimella mutta ei toisella?", "Kameroiden ja lukusovellusten ominaisuudet vaihtelevat. Liian pieni, matalakontrastinen tai käänteisvärinen QR Code epäonnistuu useammin tietyillä puhelimilla. Testaa useammalla puhelimella ennen tulostamista."],
    ["Voiko värillisen viivakoodin lukea?", "Voi, kunhan väri on tumma vaalealla taustalla. Vältä punaista väriä viivakoodin viivoissa, koska monet kassalukijat käyttävät punaista valoa."],
    ["Miten tarkistan, että viivakoodi on oikein?", "Lue tuloste useammalla puhelimella tai lukijalla ja varmista, että luetut tiedot vastaavat täsmälleen syöttämiäsi tietoja."]
  ],
  body: `
<p>Mikään ei ole ärsyttävämpää kuin viivakoodi, joka on jo tulostettu satoihin arkkeihin ja joka ei sitten luekaan. Hyvä uutinen on, että syy on yleensä yksinkertainen ja helposti vältettävissä. Tässä ovat seitsemän yleisintä syytä.</p>

<h2>1. Liian heikko värikontrasti</h2>
<p>Lukija tunnistaa tumman ja vaalean eron. Vaaleanharmaata viivakoodia valkoisella tai tummansinistä mustalla on vaikea erottaa. <strong>Ratkaisu:</strong> käytä tummaa väriä vaalealla taustalla. Musta valkoisella on varmin valinta.</p>

<h2>2. Käänteiset värit tai punainen väri</h2>
<p>Kaikki lukijat eivät tue vaaleaa viivakoodia tummalla taustalla. Lisäksi monet kassalukijat käyttävät punaista valoa, jolloin punaiset viivat näyttävät samalta kuin valkoinen tausta. <strong>Ratkaisu:</strong> vältä punaista väriä viivakoodin viivoissa tai moduuleissa äläkä käännä värejä.</p>

<h2>3. Liian pieni koko</h2>
<p>Kamera tarvitsee riittävästi pikseleitä tunnistaakseen jokaisen moduulin. <strong>Ratkaisu:</strong> suurenna viivakoodia. Läheltä luettavassa QR Codessa käytä vähintään noin 2 × 2 cm:n kokoa. Katso <a href="/artikel/ukuran-barcode-untuk-dicetak">tulostuskokojen opas</a>.</p>

<h2>4. Hiljainen alue puuttuu</h2>
<p>Kuvaan, tekstiin tai paperin reunaan kiinni olevaa viivakoodia on vaikea erottaa ympäristöstään. <strong>Ratkaisu:</strong> jätä tyhjää tilaa viivakoodin ympärille, erityisesti viivakoodin vasemmalle ja oikealle puolelle.</p>

<h2>5. Epätarkka tai vääristynyt kuva</h2>
<p>Viivakoodi, joka on suurennettu pienestä kuvasta, tallennettu heikkolaatuisena JPG-tiedostona tai venytetty epäsuhtaiseksi, menettää muotonsa. <strong>Ratkaisu:</strong> lataa suuremmalla moduulikoolla PNG-muodossa ja muuta kokoa aina suhteessa.</p>

<h2>6. Väärät tai tyyppiin sopimattomat tiedot</h2>
<p>Jokaisella viivakoodityypillä on omat sääntönsä. Esimerkiksi EAN-13 hyväksyy vain 12 tai 13 numeroa oikealla tarkistusnumerolla. Myös kirjoitusvirheellinen linkki saa QR Coden lukeutumaan mutta avaamaan ei mitään. <strong>Ratkaisu:</strong> tarkista tiedot ennen tulostamista. <a href="/">I Need Barcoden</a> generaattori näyttää ilmoituksen, jos tiedot eivät vastaa valitun viivakoodityypin sääntöjä.</p>

<h2>7. Pinta ja valaistus</h2>
<p>Kiiltävät materiaalit, läpinäkyvä muovi, taitokset ja kaarevat pinnat voivat heijastaa valoa tai muuttaa viivakoodin muotoa. <strong>Ratkaisu:</strong> tulosta tasaiselle, kiiltämättömälle pinnalle ja testaa todellisissa valaistusolosuhteissa.</p>

<h2>Kun QR Codessa on muotoilua</h2>
<p>Muodolla, väreillä tai kehyksellä varustettu QR Code on edelleen luettavissa, kunhan sen kolme kulmamerkkiä ovat ehjiä ja kontrasti riittävä. Lue lisää artikkelista <a href="/artikel/desain-qr-code-kreatif">luova QR Code -suunnittelu, joka pysyy luettavana</a>.</p>
<p>Paras tapa: <strong>testaa aina yksi tuloste</strong> useammalla puhelimella ja lukijalla ennen suuria tulostusmääriä.</p>
`
};
