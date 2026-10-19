// cara-membuat-qr-code-wifi
module.exports = {
  title: "Näin luot WiFi QR Coden, jotta vieraiden ei tarvitse kirjoittaa salasanaa",
  desc: "Vieraiden riittää lukea QR Code, niin he pääsevät WiFi-verkkoon. Sopii kahviloihin, toimistoihin, majoituspaikkoihin ja koteihin. Näin luot ja sijoitat sen.",
  tags: ["Oppaat", "QR Code"],
  coverCaption: "Reitittimen WiFi-tiedot voi tallentaa yhteen QR Codeen.",
  inlineCaption: "Kahvilan asiakkaat pääsevät verkkoon heti kirjoittamatta salasanaa.",
  faq: [
    ["Voivatko kaikki puhelimet lukea WiFi QR Coden?", "iPhonen sisäänrakennettu kamera iOS 11:ssä ja uudemmissa sekä useimmat Android 10 -puhelimet ja uudemmat lukevat sen suoraan. Vanhemmat puhelimet saattavat tarvita QR-lukusovelluksen."],
    ["Onko WiFi QR Code turvallinen?", "Kuka tahansa, joka lukee QR Coden, voi muodostaa yhteyden WiFi-verkkoosi. Käytä siksi vierasverkkoa äläkä sijoita yksityisen verkon QR Codea julkisiin tiloihin."],
    ["Mitä teen, jos WiFi-salasana vaihtuu?", "Luo ja tulosta WiFi QR Code uudelleen, koska vanha QR Code sisältää edelleen vanhan salasanan."]
  ],
  body: `
<p>Pitkän WiFi-salasanan tavaaminen vieraille on usein hankalaa, varsinkin jos siinä on isoja kirjaimia, numeroita ja erikoismerkkejä. <strong>WiFi QR Coden</strong> avulla vieraiden riittää osoittaa puhelimen kameralla QR Codea, ja yhteys muodostuu heti.</p>

<h2>Miten WiFi QR Code toimii</h2>
<p>WiFi QR Code tallentaa verkon nimen (SSID), suojaustyypin ja salasanan erityisessä muodossa, jonka puhelimet tunnistavat, esimerkiksi <code>WIFI:T:WPA;S:VerkonNimi;P:Salasana;;</code>. iPhonen (iOS 11 tai uudempi) ja useimpien Android-puhelinten (Android 10 tai uudempi) sisäänrakennettu kamera lukee sen suoraan ilman lisäsovelluksia.</p>

<h2>Näin luot sen</h2>
<ol>
  <li>Avaa <a href="/?type=qrcode">QR Code -generaattori</a> ja valitse kohdassa ”Tiedot” välilehti <strong>WiFi</strong>.</li>
  <li>Kirjoita <strong>verkon nimi</strong> täsmälleen niin kuin se näkyy WiFi-luettelossa, isot ja pienet kirjaimet mukaan lukien.</li>
  <li>Kirjoita <strong>salasana</strong> ja valitse suojaustyyppi. Useimmat koti- ja toimistoreitittimet käyttävät WPA/WPA2/WPA3-suojausta.</li>
  <li>Valitse <strong>Piilotettu verkko</strong>, jos WiFi-verkkosi nimi ei näy luettelossa.</li>
  <li>Lisää kehys, jossa on esimerkiksi teksti ”SCAN WIFI”, jotta vieraat ymmärtävät sen tarkoituksen, ja lataa PNG.</li>
</ol>

<h2>Mihin sen voi sijoittaa?</h2>
<ul>
  <li>Pieni kortti kahvilan tai ravintolan pöydälle.</li>
  <li>Olohuoneen, vastaanoton tai toimiston neuvotteluhuoneen seinälle.</li>
  <li>Majoituspaikan huoneeseen, kiinnitettynä oven tai television lähelle.</li>
  <li>Kodin reitittimen pohjaan, jotta perheenjäsenet voivat helposti yhdistää uusia laitteita.</li>
</ul>

<h2>Turvallisuusvinkit</h2>
<ul>
  <li>Käytä <strong>vierasverkkoa</strong> (guest network), jos reitittimesi tukee sitä, jotta vieraat eivät pääse samaan verkkoon toimiston tietokoneiden kanssa.</li>
  <li>Jos WiFi-salasana vaihtuu, luo ja tulosta QR Code uudelleen, koska vanhassa QR Codessa on vanha salasana.</li>
  <li>Älä sijoita yksityisen verkon WiFi QR Codea julkiseen paikkaan, jossa kuka tahansa voi valokuvata sen.</li>
</ul>

<h2>Jos yhteys QR Codella ei onnistu</h2>
<p>Tarkista vielä verkon nimen ja salasanan kirjoitusasu, koska yksikin väärä kirjain estää puhelinta muodostamasta yhteyttä. Varmista myös, että valittu suojaustyyppi vastaa reitittimen asetuksia. Muista lukuongelmista voit lukea artikkelista <a href="/artikel/barcode-tidak-bisa-dipindai">syyt, miksi viivakoodi ei lue</a>.</p>
`
};
