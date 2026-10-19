// cara-membuat-qr-code-gratis
module.exports = {
  title: "Slik lager du en QR Code gratis i 3 trinn",
  desc: "En praktisk veiledning til å lage QR Code for lenker, WiFi, kontakter eller WhatsApp uten app og uten registrering, med tips for å gjøre den lett å skanne.",
  tags: ["Veiledninger", "QR Code"],
  coverCaption: "En QR Code klar til bruk for lenker, WiFi eller kontakter.",
  inlineCaption: "Det holder å åpne nettleseren på PC-en eller mobilen, uten ekstra apper.",
  faq: [
    ["Kan en gratis QR Code brukes i bedriften?", "Ja. Den statiske QR Code du lager, kan brukes fritt på emballasje, brosjyrer, menyer eller reklamemateriell, uten vannmerke og uten lisensavgifter."],
    ["Kan innholdet i en QR Code endres etter at den er trykt?", "En statisk QR Code kan ikke endres etter at den er trykt. Hvis innholdet kan komme til å endre seg, la QR Code peke til en side der du selv kan oppdatere innholdet, for eksempel en side på nettstedet ditt."],
    ["Hvilket bildeformat er best for å trykke en QR Code?", "PNG, fordi kantene på rutene forblir skarpe. Last ned med stor nok modulstørrelse, og forminsk deretter i designprogrammet ved behov, ikke omvendt."]
  ],
  body: `
<p>Å lage en QR Code krever i dag ingen spesiell app eller noe abonnement. Med en nettbasert generator som <a href="/">I Need Barcode</a> kan du lage en QR Code på få sekunder direkte i nettleseren, enten du bruker mobil eller PC.</p>

<h2>Trinn 1: Velg strekkodetype</h2>
<p>Åpne <a href="/?type=qrcode">QR Code-generatoren</a> og velg <strong>QR Code</strong> under Strekkodetype. QR Code er det beste valget hvis strekkoden skal skannes med et mobilkamera.</p>

<h2>Trinn 2: Fyll inn dataene</h2>
<p>Velg datatype etter behov:</p>
<ul>
  <li><strong>URL</strong>: lenke til et nettsted, en nettbutikk, Google Maps eller et skjema.</li>
  <li><strong>WiFi</strong>: nettverksnavn og passord, slik at gjester kan koble til uten å skrive noe.</li>
  <li><strong>Kontakt</strong>: navn, telefonnummer, e-post og firma i form av et digitalt visittkort.</li>
  <li><strong>WhatsApp</strong>: nummer og innledende melding, slik at kundene åpner en chat med deg med én gang.</li>
  <li><strong>Tekst, E-post, Telefon, SMS, Sted, Arrangement</strong> for andre behov.</li>
</ul>
<p>Forhåndsvisningen endres med en gang mens du skriver, så du kan sjekke resultatet før du laster ned.</p>

<h2>Trinn 3: Juster utseendet og last ned</h2>
<p>Under Innstillinger kan du justere modulstørrelse (jo større, desto skarpere utskrift), farge og marg. Under Design kan du gi koden en form, som en sirkel eller et hjerte, en punktstil og en ramme med tekst som «SKANN MEG». Når du er ferdig, trykker du på <strong>Last ned PNG</strong>.</p>

<h2>Tips for at QR Code skal være lett å skanne</h2>
<ul>
  <li><strong>Test før du trykker.</strong> Skann med to eller tre ulike mobiler fra en rimelig avstand.</li>
  <li><strong>Bruk sterk kontrast.</strong> En mørk farge mot lys bakgrunn er tryggest. Unngå en lys QR Code mot mørk bakgrunn.</li>
  <li><strong>Ikke gjør den for liten.</strong> For skanning på nært hold er rundt 2 × 2 cm en trygg grense. Jo lengre skanneavstand, desto større bør den være. Les også <a href="/artikel/ukuran-barcode-untuk-dicetak">strekkodestørrelse for utskrift</a>.</li>
  <li><strong>La det være tomt rom</strong> rundt QR Code, slik at den ikke ligger tett inntil bilder eller annen tekst.</li>
  <li><strong>Bruk en kort lenke.</strong> Mindre data gir et glissere mønster som er lettere å lese.</li>
</ul>

<h2>Trenger du mange QR Code på én gang?</h2>
<p>Slå på modusen <strong>Masseproduksjon</strong>, skriv én dataverdi per linje (opptil 100 linjer), og last ned alt i én ZIP-fil. Dette passer godt for inventaretiketter, deltakerkort eller arrangementsbilletter.</p>
`
};
