// Tietosuojakäytäntö & Käyttöehdot (suomi), käännetty tiedostosta scripts/legal-i18n/id.js.
module.exports = {
  labels: {
    privacy: "Tietosuojakäytäntö",
    terms: "Käyttöehdot",
    effective: "Voimassa {date} alkaen"
  },
  privacy: {
    title: "Tietosuojakäytäntö",
    desc: "Mitä tietoja I Need Barcode käsittelee, kun luot viivakoodeja ja QR Codeja, ja miten käsittelemme niitä.",
    body: `
<p>I Need Barcode (ineedbarcode.com) on ilmainen viivakoodi- ja QR Code -generaattori, jota ylläpitää Abid Hanan Wicaksono. Tämä käytäntö kertoo, mitä tietoja käsittelemme, kun käytät tätä verkkosivustoa, ja miten käsittelemme niitä. Keräämme tarkoituksella mahdollisimman vähän tietoja: sinun ei tarvitse rekisteröityä, kirjautua sisään eikä antaa nimeäsi tai sähköpostiosoitettasi käyttääksesi palvelua.</p>
<h2>Käsittelemämme tiedot</h2>
<ul>
<li><strong>Viivakoodin sisältö.</strong> Syöttämäsi tekstit, linkit, WiFi-tiedot, yhteystiedot ja muut tiedot käsitellään suoraan selaimessasi. Viivakoodikuvat luodaan laitteellasi, eikä niitä lähetetä palvelimillemme, ei silloinkaan, kun luot monta viivakoodia kerralla.</li>
<li><strong>Sijainti.</strong> ”Käytä sijaintiani” -painike pyytää laitteen sijaintia vasta, kun olet sallinut sen selaimessasi. Koordinaatit syötetään vain lomakkeen kenttään, eikä niitä lähetetä meille.</li>
<li><strong>Arvioitu maa.</strong> Aloituskielen valitsemiseksi sivusto voi päätellä arvioidun maasi palvelimellemme tehdystä pyynnöstä. Tätä tietoa ei tallenneta tietokantaan.</li>
<li><strong>Tekniset tiedot.</strong> Kuten lähes kaikilla verkkosivustoilla, palveluntarjoajamme (Vercel) kirjaa pyyntöjen teknisiä tietoja, kuten IP-osoitteen, selaintyypin ja käyttöajankohdan, tietoturvaa ja ylläpitoa varten. Näitä lokeja säilytetään vain tilapäisesti Vercelin käytäntöjen mukaisesti.</li>
<li><strong>Artikkelitilastot.</strong> Jos toiminto on käytössä, katselut, tykkäykset ja jaot tallennetaan vain artikkelikohtaisina kokonaismäärinä ilman tietoja, joista sinut voisi tunnistaa.</li>
</ul>
<h2>Evästeet ja selaimeen tallennettavat tiedot</h2>
<ul>
<li><strong>inbLang</strong>: muistaa tällä laitteella valitsemasi kielen (localStorage).</li>
<li><strong>inbCountry</strong>: tallentaa arvioidun maan yhden istunnon ajaksi, jotta kieltä ei tarvitse selvittää uudelleen (sessionStorage).</li>
<li><strong>Muu paikallinen tallennus</strong> (localStorage ja sessionStorage): merkitsee artikkelit, joista pidät, ja estää yhden käynnin laskemisen kahteen kertaan. Nämä tiedot pysyvät laitteellasi.</li>
<li><strong>Kolmansien osapuolten analytiikkaevästeet</strong> Google Analyticsilta ja Microsoft Claritylta, joita kuvataan alla.</li>
</ul>
<h2>Analytiikka</h2>
<p>Käytämme analytiikkatyökaluja ymmärtääksemme, miten sivustoa käytetään, ja parantaaksemme sitä. Työkalut ladataan vasta, kun alat käyttää sivua, eikä niitä ladata lainkaan, jos selaimesi lähettää Global Privacy Control- tai Do Not Track -signaalin. Viivakoodien ja lomakkeiden sisältöä ei koskaan lähetetä analytiikkatyökaluille; vain tapahtumat, kuten valittu viivakoodityyppi ja latauspainikkeen napsautukset, kirjataan.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google LLC): käyttää evästeitä mitatakseen avatut sivut, arvioidun maan, laitetyypin ja edellä mainitut tapahtumat. Mainontaan liittyvä tallennus ja Google Signals on poistettu käytöstä. Google käsittelee tiedot <a href="https://policies.google.com/privacy">Googlen tietosuojakäytännön</a> mukaisesti.</li>
<li><strong>Microsoft Clarity</strong>: kirjaa vuorovaikutuksia, kuten napsautuksia ja vierityksiä, lämpökarttoja ja istuntotallenteita varten ja peittää syöttökenttien sisällön. Microsoft käsittelee tiedot <a href="https://privacy.microsoft.com/privacystatement">Microsoftin tietosuojalausunnon</a> mukaisesti.</li>
</ul>
<p>Voit kieltäytyä analytiikasta ottamalla käyttöön Global Privacy Controlin tai Do Not Trackin, estämällä kolmansien osapuolten evästeet selaimen asetuksissa, käyttämällä seurannanestoa tai asentamalla <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a> -lisäosan. Sivusto on silti täysin käytettävissä.</p>
<h2>Kolmansien osapuolten palvelut</h2>
<ul>
<li><strong>Vercel Inc.</strong> tarjoaa palvelintilan. Palvelimet voivat sijaita Indonesian ulkopuolella.</li>
<li><strong>Google Fontsia</strong> käytetään tiettyjen kirjoitusjärjestelmien näyttämiseen (esimerkiksi arabia, thai tai japani). Kun fontit ladataan, IP-osoitteesi näkyy Googlelle.</li>
<li><strong>Jakopainikkeet</strong> (WhatsApp, Facebook, X, LinkedIn, Telegram) ja sosiaalisen median linkit ottavat yhteyttä näihin palveluihin vain, kun napsautat niitä.</li>
</ul>
<h2>Tietoturva ja tietojen luovuttaminen</h2>
<p>Kaikki yhteydet tälle sivustolle käyttävät HTTPS:ää. Emme myy, vuokraa tai välitä henkilötietoja kaupallisesti. Tietoja luovutetaan vain edellä mainituille palveluntarjoajille siinä määrin kuin sivuston toiminta edellyttää, tai jos laki sitä vaatii.</p>
<h2>Lapset</h2>
<p>Palvelua ei ole tarkoitettu alle 13-vuotiaille lapsille, emmekä tietoisesti kerää lasten henkilötietoja.</p>
<h2>Oikeutesi</h2>
<p>Henkilötietojen suojaamisesta annetun lain nro 27/2022 mukaisesti sinulla on oikeus pyytää pääsyä henkilötietoihisi, niiden oikaisemista tai poistamista sekä peruuttaa suostumuksesi käsittelyyn. Koska emme juuri tallenna tietoja, joista sinut voisi tunnistaa, useimmat pyynnöt voidaan hoitaa poistamalla evästeet ja sivustotiedot selaimestasi. Googlen tai Microsoftin käsittelemien tietojen osalta voit käyttää myös niiden palveluiden tietosuoja-asetuksia. Muissa pyynnöissä ota meihin yhteyttä.</p>
<h2>Muutokset käytäntöön</h2>
<p>Tätä käytäntöä voidaan päivittää milloin tahansa. Muutokset tulevat voimaan, kun ne julkaistaan tällä sivulla, ja voimaantulopäivä näkyy sivun yläosassa.</p>
<h2>Yhteystiedot</h2>
<p>Tätä käytäntöä koskevia kysymyksiä voi lähettää jokaisen sivun alaosassa olevan yhteyslinkin kautta tai osoitteessa <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Lue myös <a href="/syarat-ketentuan">Käyttöehtomme</a>.</p>
`
  },
  terms: {
    title: "Käyttöehdot",
    desc: "I Need Barcode -palvelun, ilmaisen viivakoodi- ja QR Code -generaattorin, käyttöehdot.",
    body: `
<p>Käyttämällä I Need Barcode -palvelua (ineedbarcode.com) hyväksyt seuraavat käyttöehdot. Jos et hyväksy niitä, älä käytä tätä palvelua.</p>
<h2>Tietoa palvelusta</h2>
<p>I Need Barcode on ilmainen työkalu viivakoodi- ja QR Code -kuvien luomiseen suoraan selaimessa. I Need Barcode ei ole sidoksissa GS1:een tai mihinkään muuhun viivakoodistandardin omistajaan, ei ole niiden tukema eikä tee niiden kanssa yhteistyötä. QR Code on DENSO WAVE INCORPORATEDin rekisteröity tavaramerkki. Kaikki tavaramerkit ovat omistajiensa omaisuutta.</p>
<h2>Sallittu käyttö</h2>
<ul>
<li>Luomiasi viivakoodikuvia saa käyttää sekä henkilökohtaisiin että kaupallisiin tarkoituksiin, esimerkiksi tuotteisiin, pakkauksiin, tarroihin ja painotuotteisiin, ilman vesileimaa ja maksutta.</li>
<li>Luomme vain viivakoodikuvia emmekä myönnä viivakoodinumeroita. Vähittäiskaupan tuotteiden EAN-, UPC- tai GTIN-numerot on rekisteröitävä virallisesti GS1:n kautta.</li>
<li>Noudata myös sääntöjä, jotka koskevat viivakoodin käyttöpaikkaa, esimerkiksi kauppojen, verkkokauppapaikkojen tai kuljetuspalveluiden ehtoja.</li>
</ul>
<h2>Vastuusi</h2>
<p>Olet täysin vastuussa tiedoista, jotka syötät viivakoodeihin, sekä siitä, miten käytät niitä. Testaa viivakoodit aina useilla lukijoilla tai kamerasovelluksilla ennen kuin tulostat niitä suuria määriä, ja varmista, että koko, väri ja kontrasti vastaavat tarpeitasi.</p>
<h2>Kielletty käyttö</h2>
<ul>
<li>Sellaisten viivakoodien tai QR Codejen luominen, jotka johtavat petoksiin, tietojenkalasteluun, haittaohjelmiin tai lainvastaiseen sisältöön.</li>
<li>Viivakoodien käyttäminen muiden tuotteiden, asiakirjojen, lippujen tai numeroiden väärentämiseen.</li>
<li>Bottien, skriptien tai automaation käyttäminen palvelun käyttämiseen suuressa mittakaavassa.</li>
<li>Palvelimiemme ja palveluidemme häiritseminen, kuormittaminen tai yritys murtaa niiden tietoturva.</li>
</ul>
<h2>Palvelun saatavuus</h2>
<p>Palvelu tarjotaan maksutta, ja sitä voidaan muuttaa, rajoittaa tai se voidaan lopettaa milloin tahansa ilman ennakkoilmoitusta.</p>
<h2>Vastuuvapauslauseke</h2>
<p>Palvelu tarjotaan ”sellaisenaan” ja ”saatavuuden mukaan” ilman minkäänlaisia takuita, mukaan lukien takuut siitä, että palvelu toimii aina, on virheetön tai että jokainen luotu viivakoodi on luettavissa kaikilla laitteilla ja soveltuu tiettyyn tarkoitukseen.</p>
<h2>Vastuunrajoitus</h2>
<p>Lain sallimissa rajoissa emme ole vastuussa välittömistä tai välillisistä vahingoista, jotka aiheutuvat tämän palvelun käytöstä tai luomistasi viivakoodeista, mukaan lukien uusintapainatusten kustannukset ja lukukelvottomista viivakoodeista aiheutuvat menetykset.</p>
<h2>Linkit kolmansille osapuolille</h2>
<p>Tämä sivusto sisältää linkkejä kolmansien osapuolten sivustoille ja palveluihin. Emme vastaa näiden sivustojen sisällöstä emmekä käytännöistä.</p>
<h2>Muutokset ehtoihin</h2>
<p>Näitä käyttöehtoja voidaan päivittää milloin tahansa. Jatkamalla palvelun käyttöä muutosten julkaisemisen jälkeen sinun katsotaan hyväksyneen uusimman version.</p>
<h2>Sovellettava laki</h2>
<p>Näihin käyttöehtoihin sovelletaan Indonesian tasavallan lakia.</p>
<h2>Yhteystiedot</h2>
<p>Kysymyksiä ja ilmoituksia voi lähettää jokaisen sivun alaosassa olevan yhteyslinkin kautta tai osoitteessa <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Lue myös <a href="/kebijakan-privasi">Tietosuojakäytäntömme</a>.</p>
`
  }
};
