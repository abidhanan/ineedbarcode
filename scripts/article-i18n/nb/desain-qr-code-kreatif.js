// desain-qr-code-kreatif
module.exports = {
  title: "Kreativ design av QR Code som fortsatt kan skannes",
  desc: "En QR Code kan formes som et hjerte eller en sirkel, eller få ramme og farger. Lær reglene for å gjøre designet pent og samtidig lett å skanne.",
  tags: ["Design", "QR Code"],
  coverCaption: "Farger gjør en QR Code mer tiltalende, så lenge kontrasten forblir sterk.",
  inlineCaption: "En designet QR Code bør alltid testes før den trykkes.",
  faq: [
    ["Kan en hjerteformet QR Code skannes?", "Ja. Den opprinnelige QR Code er fortsatt intakt i midten, og resten er bare et dekorativt mønster. Så lenge kontrasten er sterk og størrelsen stor nok, kan den leses."],
    ["Hvilke farger er trygge for en QR Code?", "Mørke farger som svart, mørkeblått, mørkegrønt, lilla eller mørkebrunt mot en hvit eller svært lys bakgrunn."],
    ["Kan en QR Code få tekst eller ramme?", "Ja. En ramme med en oppfordring som «SKANN MEG» hjelper faktisk folk med å forstå hva den er til, så lenge rammen ikke dekker QR Code."]
  ],
  body: `
<p>En svart-hvit QR Code er riktignok funksjonell, men ser ofte stiv ut på emballasje, invitasjoner eller reklamemateriell. Med litt design kan en QR Code bli mer tiltalende uten å miste funksjonen sin. Nøkkelen er å forstå hvilke deler som kan endres, og hvilke som må forbli intakte.</p>

<h2>Ytre form: hjerte, sirkel og mer</h2>
<p>Under Design i <a href="/?type=qrcode">QR Code-generatoren</a> kan du velge former som sirkel, hjerte, sekskant, åttekant, stjerne eller rombe. Den opprinnelige QR Code blir liggende i midten, og resten fylles med et dekorativt mønster til den valgte formen er dannet. Det dekorative mønsteret inneholder ingen data og forstyrrer derfor ikke skanningen, så lenge det er tomt rom rundt den opprinnelige QR Code.</p>

<h2>Punktstil</h2>
<p>Rutene i en QR Code kan gjøres om til avrundede former eller runde punkter. For at koden skal forbli lett å skanne, bør de tre store rutene i hjørnene (finder pattern) beholdes som hele ruter, fordi det er dem kameraet ser etter først. Generatoren vår tegner alltid disse delene som hele ruter, i det meste med avrundede hjørner, uansett hvilken punktstil du velger.</p>

<h2>Farger</h2>
<ul>
  <li>Bruk en <strong>mørk</strong> farge for QR Code og en <strong>lys</strong> farge for bakgrunnen. Mørkeblått, mørkegrønt, lilla eller mørkebrunt er som regel trygge valg.</li>
  <li>Unngå bleke farger for QR Code, som gult, lys rosa eller lysegrått.</li>
  <li>Ikke inverter fargene til en lys QR Code mot mørk bakgrunn, fordi ikke alle skanneapper støtter det.</li>
</ul>

<h2>Rammer og oppfordringer</h2>
<p>Rammer med oppfordringer som «SKANN MEG», «MENY» eller «SCAN WIFI» har vist seg å hjelpe folk med å forstå hva QR Code er til. Du kan velge en ramme med etikett nederst, etikett øverst, hjørne, snakkeboble, sirkel eller bånd, og deretter endre tekst og farge.</p>

<h2>Regler for at designet skal forbli lesbart</h2>
<ol>
  <li>Hold en sterk <strong>kontrast</strong> mellom QR Code og bakgrunnen.</li>
  <li>La de <strong>tre markeringsrutene</strong> i hjørnene forbli tydelige og utildekte.</li>
  <li>La det være <strong>tomt rom</strong> rundt QR Code og rammen.</li>
  <li>Ikke forminsk en designet QR Code for mye. Former som hjertet gjør at den opprinnelige QR Code blir mindre enn den totale bildestørrelsen.</li>
  <li><strong>Test</strong> med flere mobiler før du trykker.</li>
</ol>

<p>Hvis designet ditt er vanskelig å skanne, kan du tilbakestille innstillingene én etter én med knappen <strong>Tilbakestill</strong> for å finne årsaken. Andre vanlige årsaker kan du lese om i <a href="/artikel/barcode-tidak-bisa-dipindai">7 grunner til at strekkoden ikke kan skannes</a>.</p>
`
};
