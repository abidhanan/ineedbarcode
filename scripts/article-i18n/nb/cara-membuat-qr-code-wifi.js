// cara-membuat-qr-code-wifi
module.exports = {
  title: "Slik lager du en QR Code for WiFi, så gjestene slipper å skrive passordet",
  desc: "Gjestene trenger bare å skanne en QR Code for å koble til WiFi. Perfekt for kafeer, kontorer, overnattingssteder og hjemmet. Slik lager du den og setter den opp.",
  tags: ["Veiledninger", "QR Code"],
  coverCaption: "WiFi-opplysningene fra ruteren kan lagres i én enkelt QR Code.",
  inlineCaption: "Kafégjestene kan koble til med en gang uten å skrive passordet.",
  faq: [
    ["Kan alle mobiler skanne en QR Code for WiFi?", "Det innebygde kameraet på iPhone med iOS 11 eller nyere og på de fleste Android-enheter med Android 10 eller nyere kan lese den direkte. Eldre mobiler kan trenge en app for å skanne QR-koder."],
    ["Er en QR Code for WiFi trygg?", "Alle som skanner QR Code, kan koble til WiFi-en din. Bruk derfor et gjestenettverk, og ikke heng opp en QR Code for et privat nettverk på offentlige steder."],
    ["Hva gjør jeg hvis WiFi-passordet endres?", "Lag og skriv ut en ny QR Code for WiFi, fordi den gamle QR Code fortsatt inneholder det gamle passordet."]
  ],
  body: `
<p>Å stave et langt WiFi-passord for gjester er ofte tungvint, særlig hvis det inneholder store bokstaver, tall og symboler. Med en <strong>QR Code for WiFi</strong> trenger gjestene bare å rette mobilkameraet mot QR Code for å koble til med en gang.</p>

<h2>Slik fungerer en QR Code for WiFi</h2>
<p>En QR Code for WiFi lagrer nettverksnavnet (SSID), sikkerhetstypen og passordet i et spesielt format som mobiler gjenkjenner, for eksempel <code>WIFI:T:WPA;S:Nettverksnavn;P:Passord;;</code>. Det innebygde kameraet på iPhone (iOS 11 eller nyere) og på de fleste Android-enheter (Android 10 eller nyere) kan lese den direkte, uten ekstra app.</p>

<h2>Slik lager du den</h2>
<ol>
  <li>Åpne <a href="/?type=qrcode">QR Code-generatoren</a> og velg fanen <strong>WiFi</strong> under Fyll inn data.</li>
  <li>Skriv inn <strong>nettverksnavnet</strong> nøyaktig slik det vises i listen over WiFi-nettverk, inkludert store og små bokstaver.</li>
  <li>Skriv inn <strong>passordet</strong>, og velg sikkerhetstype. De fleste rutere i hjem og på kontorer bruker WPA/WPA2/WPA3.</li>
  <li>Kryss av for <strong>Skjult nettverk</strong> hvis navnet på WiFi-en din ikke vises i listen.</li>
  <li>Legg til en ramme med tekst, for eksempel «SCAN WIFI», slik at gjestene forstår hva den er til, og last deretter ned PNG.</li>
</ol>

<h2>Hvor bør den henge?</h2>
<ul>
  <li>Et lite kort på bordet på kafeen eller restauranten.</li>
  <li>Veggen i stua, resepsjonen eller kontorets møterom.</li>
  <li>Rommet på overnattingsstedet, festet ved døren eller TV-en.</li>
  <li>Undersiden av ruteren hjemme, slik at familien enkelt kan koble til nye enheter.</li>
</ul>

<h2>Sikkerhetstips</h2>
<ul>
  <li>Bruk et <strong>gjestenettverk</strong> (guest network) hvis ruteren din støtter det, slik at gjestene ikke havner på samme nettverk som kontorets datamaskiner.</li>
  <li>Hvis WiFi-passordet endres, må du lage og skrive ut en ny QR Code, fordi den gamle QR Code inneholder det gamle passordet.</li>
  <li>Ikke heng opp en QR Code for WiFi til et privat nettverk på offentlige steder der hvem som helst kan ta bilde av den.</li>
</ul>

<h2>Hvis QR Code ikke kobler til</h2>
<p>Sjekk stavingen av nettverksnavnet og passordet på nytt, fordi én feil bokstav gjør at mobilen ikke klarer å koble til. Sørg også for at den valgte sikkerhetstypen samsvarer med innstillingene på ruteren. Les om andre skanneproblemer i <a href="/artikel/barcode-tidak-bisa-dipindai">grunner til at strekkoden ikke kan skannes</a>.</p>
`
};
