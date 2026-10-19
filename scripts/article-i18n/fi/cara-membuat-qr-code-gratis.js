// cara-membuat-qr-code-gratis
module.exports = {
  title: "Näin luot ilmaisen QR Coden 3 vaiheessa",
  desc: "Käytännön opas QR Coden luomiseen linkille, WiFille, yhteystiedoille tai WhatsAppille ilman sovellusta ja rekisteröitymistä, sekä vinkit helppoon luettavuuteen.",
  tags: ["Oppaat", "QR Code"],
  coverCaption: "QR Code valmiina linkille, WiFille tai yhteystiedoille.",
  inlineCaption: "Riittää, että avaat selaimen kannettavalla tai puhelimella, lisäsovelluksia ei tarvita.",
  faq: [
    ["Voiko ilmaiseksi luotua QR Codea käyttää liiketoiminnassa?", "Voi. Luomaasi staattista QR Codea voi käyttää vapaasti pakkauksissa, esitteissä, ruokalistoissa tai markkinointimateriaaleissa ilman vesileimaa ja lisenssimaksuja."],
    ["Voiko QR Coden sisältöä muuttaa tulostamisen jälkeen?", "Staattista QR Codea ei voi muuttaa tulostamisen jälkeen. Jos sisältö saattaa muuttua, ohjaa QR Code sivulle, jonka sisältöä voit päivittää itse, esimerkiksi oman verkkosivustosi sivulle."],
    ["Mikä kuvamuoto on paras QR Coden tulostamiseen?", "PNG, koska ruutujen reunat pysyvät terävinä. Lataa riittävän suurella moduulikoolla ja pienennä tarvittaessa taittosovelluksessa, ei päinvastoin."]
  ],
  body: `
<p>QR Coden luomiseen ei nykyään tarvita erityistä sovellusta tai tilausmaksua. Verkkogeneraattorilla, kuten <a href="/">I Need Barcode</a>, voit luoda QR Coden sekunneissa suoraan selaimessa, niin puhelimella kuin kannettavallakin.</p>

<h2>Vaihe 1: Valitse viivakoodityyppi</h2>
<p>Avaa <a href="/?type=qrcode">QR Code -generaattori</a> ja valitse kohdassa ”Viivakoodityyppi” <strong>QR Code</strong>. QR Code on sopivin valinta, jos koodi luetaan puhelimen kameralla.</p>

<h2>Vaihe 2: Syötä tiedot</h2>
<p>Valitse tarpeisiisi sopiva tietotyyppi:</p>
<ul>
  <li><strong>URL</strong>: linkki verkkosivulle, verkkokauppaan, Google Mapsiin tai lomakkeeseen.</li>
  <li><strong>WiFi</strong>: verkon nimi ja salasana, jotta vieraat voivat muodostaa yhteyden kirjoittamatta mitään.</li>
  <li><strong>Yhteystieto</strong>: nimi, puhelinnumero, sähköposti ja yritys digitaalisen käyntikortin muodossa.</li>
  <li><strong>WhatsApp</strong>: numero ja aloitusviesti, jolloin asiakas avaa suoraan keskustelun kanssasi.</li>
  <li><strong>Teksti, sähköposti, puhelin, tekstiviesti, sijainti, tapahtuma</strong> muihin tarpeisiin.</li>
</ul>
<p>Esikatselu päivittyy heti kirjoittaessasi, joten voit tarkistaa tuloksen ennen lataamista.</p>

<h2>Vaihe 3: Säädä ulkoasu ja lataa</h2>
<p>Säädä kohdassa ”Asetukset” moduulikoko (mitä suurempi, sitä terävämpi tuloste), värit ja marginaalit. Kohdassa ”Muotoilu” voit valita muodon, kuten ympyrän tai sydämen, pistetyylin sekä kehyksen, jossa on teksti, esimerkiksi ”SKANNAA MINUT”. Kun olet valmis, paina <strong>Lataa PNG</strong>.</p>

<h2>Vinkit helposti luettavaan QR Codeen</h2>
<ul>
  <li><strong>Testaa ennen tulostamista.</strong> Lue koodi kahdella tai kolmella eri puhelimella kohtuulliselta etäisyydeltä.</li>
  <li><strong>Käytä vahvaa kontrastia.</strong> Tumma väri vaalealla taustalla on varmin. Vältä vaaleaa QR Codea tummalla taustalla.</li>
  <li><strong>Älä tee liian pientä.</strong> Läheltä luettaessa noin 2 × 2 cm on turvallinen raja. Mitä pidempi lukuetäisyys, sitä suurempi koon on oltava. Lue myös <a href="/artikel/ukuran-barcode-untuk-dicetak">viivakoodin koko tulostettaessa</a>.</li>
  <li><strong>Jätä tyhjää tilaa</strong> QR Coden ympärille, jotta se ei ole kiinni muissa kuvissa tai teksteissä.</li>
  <li><strong>Käytä lyhyttä linkkiä.</strong> Vähemmän tietoa tuottaa harvemman kuvion, joka on helpompi lukea.</li>
</ul>

<h2>Tarvitsetko monta QR Codea kerralla?</h2>
<p>Ota käyttöön <strong>Joukko</strong>-tila, kirjoita yksi tieto riviä kohden (enintään 100 riviä) ja lataa kaikki yhtenä ZIP-tiedostona. Tämä sopii inventaariotarroihin, osallistujakortteihin tai tapahtumalippuihin.</p>
`
};
