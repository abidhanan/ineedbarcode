// cara-membuat-qr-code-wifi
module.exports = {
  title: "Zo maakt u een WiFi QR Code, zodat gasten geen wachtwoord hoeven te typen",
  desc: "Gasten scannen gewoon een QR Code om verbinding te maken met de WiFi. Ideaal voor cafés, kantoren, accommodaties en thuis. Zo maakt en plaatst u hem.",
  tags: ["Handleiding", "QR Code"],
  coverCaption: "De WiFi-gegevens van de router passen in één QR Code.",
  inlineCaption: "Cafégasten maken direct verbinding zonder een wachtwoord te typen.",
  faq: [
    ["Kunnen alle telefoons een WiFi QR Code scannen?", "De ingebouwde camera van iPhones met iOS 11 of hoger en de meeste Android-telefoons met Android 10 of hoger kunnen hem direct lezen. Oudere telefoons hebben mogelijk een QR-scanapp nodig."],
    ["Is een WiFi QR Code veilig?", "Iedereen die de QR Code scant, kan verbinding maken met uw WiFi. Gebruik daarom een gastennetwerk en hang de QR Code van uw privénetwerk niet op openbare plekken op."],
    ["Wat moet ik doen als het WiFi-wachtwoord wordt gewijzigd?", "Maak en druk de WiFi QR Code opnieuw, want de oude QR Code bevat nog het oude wachtwoord."]
  ],
  body: `
<p>Een lang WiFi-wachtwoord letter voor letter opnoemen voor gasten is vaak lastig, zeker als het hoofdletters, cijfers en symbolen bevat. Met een <strong>WiFi QR Code</strong> richten gasten gewoon de camera van hun telefoon op de QR Code en hebben ze direct verbinding.</p>

<h2>Zo werkt een WiFi QR Code</h2>
<p>Een WiFi QR Code slaat de netwerknaam (SSID), het beveiligingstype en het wachtwoord op in een speciaal formaat dat telefoons herkennen, bijvoorbeeld <code>WIFI:T:WPA;S:Netwerknaam;P:Wachtwoord;;</code>. De ingebouwde camera van iPhones (iOS 11 of hoger) en de meeste Android-telefoons (Android 10 of hoger) kan hem direct lezen, zonder extra app.</p>

<h2>Zo maakt u hem</h2>
<ol>
  <li>Open de <a href="/?type=qrcode">QR Code-generator</a> en kies het tabblad <strong>WiFi</strong> bij het onderdeel Gegevens invoeren.</li>
  <li>Typ de <strong>netwerknaam</strong> precies zoals die in de WiFi-lijst verschijnt, inclusief hoofdletters en kleine letters.</li>
  <li>Typ het <strong>wachtwoord</strong> en kies het beveiligingstype. De meeste routers thuis en op kantoor gebruiken WPA/WPA2/WPA3.</li>
  <li>Vink <strong>Verborgen netwerk</strong> aan als uw WiFi-naam niet in de lijst wordt weergegeven.</li>
  <li>Voeg een kader toe met bijvoorbeeld de tekst "SCAN WIFI", zodat gasten weten waarvoor hij dient, en download de PNG.</li>
</ol>

<h2>Waar plaatst u hem?</h2>
<ul>
  <li>Op een klein kaartje op de tafels van een café of restaurant.</li>
  <li>Aan de muur van de wachtruimte, bij de receptie of in de vergaderruimte van het kantoor.</li>
  <li>In de kamer van een accommodatie, bij de deur of de tv.</li>
  <li>Onder op de router thuis, zodat gezinsleden makkelijk nieuwe apparaten kunnen verbinden.</li>
</ul>

<h2>Veiligheidstips</h2>
<ul>
  <li>Gebruik een <strong>gastennetwerk</strong> (guest network) als uw router dat ondersteunt, zodat gasten niet op hetzelfde netwerk komen als de kantoorcomputers.</li>
  <li>Als u het WiFi-wachtwoord wijzigt, maak en druk de QR Code dan opnieuw, want de oude QR Code bevat het oude wachtwoord.</li>
  <li>Hang geen WiFi QR Code van een privénetwerk op openbare plekken op waar iedereen hem kan fotograferen.</li>
</ul>

<h2>Als de QR Code geen verbinding maakt</h2>
<p>Controleer de spelling van de netwerknaam en het wachtwoord, want één verkeerde letter zorgt ervoor dat de telefoon geen verbinding kan maken. Controleer ook of het gekozen beveiligingstype overeenkomt met de instellingen van de router. Lees voor andere scanproblemen <a href="/artikel/barcode-tidak-bisa-dipindai">oorzaken waarom een barcode niet scant</a>.</p>
`
};
