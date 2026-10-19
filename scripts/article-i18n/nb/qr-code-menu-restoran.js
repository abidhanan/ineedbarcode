// qr-code-menu-restoran
module.exports = {
  title: "QR Code for restaurantmenyen: en komplett veiledning",
  desc: "En digital meny via QR Code gjør det enklere for gjestene og sparer trykkekostnader. Slik lager du den, forbereder menyen og plasserer den på bordene.",
  tags: ["Bedrift", "QR Code"],
  coverCaption: "En QR Code på bordet tar gjestene rett til den digitale menyen.",
  inlineCaption: "Plasser QR Code der den er lett å nå fra stolen.",
  faq: [
    ["Hva er best for en digital meny: PDF eller nettside?", "En nettside er som regel mer behagelig å lese på mobilen og åpnes raskere. En PDF kan brukes hvis filen er liten og teksten stor nok på skjermen."],
    ["Hvor stor bør menyens QR Code på bordet være?", "Rundt 3 til 5 cm er nok til at den kan skannes fra stolen. Bruk et materiale som tåler søl og ikke er for blankt."],
    ["Må QR Code trykkes på nytt når menyen endres?", "Nei, ikke så lenge lenken er den samme. Det holder å oppdatere innholdet på siden eller i menyfilen som QR Code peker til."]
  ],
  body: `
<p>Digitale menyer via QR Code har blitt vanlig på kafeer og restauranter. Gjestene trenger bare å skanne QR Code på bordet for å se retter, priser og bilder. For eierne sparer det trykkekostnader og gjør det enklere å endre priser eller menyen.</p>

<h2>Fordeler med en meny via QR Code</h2>
<ul>
  <li><strong>Lett å oppdatere</strong>: endre priser eller legg til retter uten å trykke menyen på nytt.</li>
  <li><strong>Sparer penger</strong>: det holder å trykke en liten QR Code for hvert bord.</li>
  <li><strong>Mer informativ</strong>: vis bilder, beskrivelser og merking som sterk eller vegetar.</li>
  <li><strong>Støtte for nettbestilling</strong>: send gjestene videre til et bestillingsskjema eller til WhatsApp.</li>
</ul>

<h2>Trinn 1: Gjør klar en meny på nett</h2>
<p>QR Code inneholder bare en lenke, så du trenger en meny som kan åpnes på internett. Noen alternativer er en side på ditt eget nettsted, en PDF-fil i en skytjeneste som er delt offentlig, eller en katalogside på en bestillingsplattform. Sørg for at menyen er behagelig å lese på mobilskjermen: stor nok tekst, bilder som ikke er for tunge, og tydelige priser.</p>

<h2>Trinn 2: Lag QR Code</h2>
<ol>
  <li>Kopier lenken til menyen din.</li>
  <li>Åpne <a href="/?type=qrcode">QR Code-generatoren</a>, velg fanen <strong>URL</strong>, og lim inn lenken.</li>
  <li>Legg til en ramme med teksten «MENY» eller «SKANN FOR Å SE MENYEN» under Design.</li>
  <li>Tilpass fargene til restaurantens profil, men bruk fortsatt en mørk farge mot lys bakgrunn.</li>
  <li>Last ned PNG med en modulstørrelse som er stor nok for trykk.</li>
</ol>
<p>Bruk en lenke som ikke kommer til å endre seg. Hvis menyen flyttes til en annen adresse, kan en QR Code som allerede er trykt, ikke oppdateres. Forklaringen finner du i artikkelen <a href="/artikel/apa-itu-qr-code">hva er en QR Code</a>.</p>

<h2>Trinn 3: Trykk og plasser</h2>
<ul>
  <li>Trykk i en størrelse på minst rundt 3–5 cm, slik at den er lett å skanne fra stolen.</li>
  <li>Bruk et materiale som tåler søl, som vinylklistremerker eller laminerte kort uten overdreven glans.</li>
  <li>Plasser den der den er lett å nå, for eksempel i et akrylstativ midt på bordet.</li>
  <li>Legg til bordnummeret ved siden av QR Code hvis gjestene bestiller via chat.</li>
</ul>

<h2>Ikke glem gjester uten mobil</h2>
<p>Ha én eller to trykte menyer klare for gjester som ikke har med seg mobilen, som er tomme for batteri, eller som heller vil lese en fysisk meny.</p>
<p>Du kan også lage en <a href="/artikel/cara-membuat-qr-code-wifi">QR Code for WiFi</a> til gjestene og plassere den ved siden av menyens QR Code.</p>
`
};
