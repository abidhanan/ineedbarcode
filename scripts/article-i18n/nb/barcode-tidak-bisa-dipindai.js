// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 grunner til at strekkoden ikke kan skannes, og hvordan du løser det",
  desc: "Lar ikke strekkoden eller QR Code seg skanne? Sjekk de sju vanligste årsakene, fra fargekontrast til størrelse, og hvordan du retter dem opp.",
  tags: ["Tips", "Strekkode"],
  coverCaption: "Kontrast og størrelse avgjør om en QR Code er lett å skanne.",
  inlineCaption: "På lageret gjør strekkoder som ikke kan skannes, at arbeidet går tregere.",
  faq: [
    ["Hvorfor kan en QR Code skannes med én mobil, men ikke med en annen?", "Kameraer og skanneapper har ulike egenskaper. En QR Code som er for liten, har lav kontrast eller inverterte farger, feiler oftere på enkelte mobiler. Test med flere mobiler før du trykker."],
    ["Kan fargede strekkoder skannes?", "Ja, så lenge fargen er mørk mot en lys bakgrunn. Unngå rødt til strekkodens streker, fordi mange kasseskannere bruker rødt lys."],
    ["Hvordan sjekker jeg at strekkoden er riktig?", "Skann utskriften med flere mobiler eller skannere, og sørg for at dataene som leses av, er nøyaktig de samme som dataene du har lagt inn."]
  ],
  body: `
<p>Ingenting er mer irriterende enn en strekkode som allerede er trykt i hundrevis av eksemplarer, og som så viser seg å ikke kunne skannes. Den gode nyheten er at årsaken som regel er enkel og lett å forebygge. Her er de sju vanligste årsakene.</p>

<h2>1. For lav fargekontrast</h2>
<p>Skanneren leser forskjellen mellom mørkt og lyst. En lysegrå strekkode på hvitt, eller mørkeblå på svart, er vanskelig å skille. <strong>Løsning:</strong> bruk en mørk farge mot en lys bakgrunn. Svart på hvitt er det tryggeste valget.</p>

<h2>2. Inverterte farger eller rød farge</h2>
<p>En lys strekkode på mørk bakgrunn støttes ikke av alle skannere. I tillegg bruker mange kasseskannere rødt lys, slik at røde streker ser like ut som den hvite bakgrunnen. <strong>Løsning:</strong> unngå rødt til strekkodens streker eller moduler, og ikke inverter fargene.</p>

<h2>3. For liten størrelse</h2>
<p>Kameraet trenger nok piksler til å gjenkjenne hver modul. <strong>Løsning:</strong> gjør strekkoden større. For en QR Code som skannes på nært hold, bør du bruke minst rundt 2 × 2 cm. Se <a href="/artikel/ukuran-barcode-untuk-dicetak">veiledningen om utskriftsstørrelse</a>.</p>

<h2>4. Ingen stille sone</h2>
<p>En strekkode som ligger tett inntil bilder, tekst eller papirkanten, er vanskelig å skille fra omgivelsene. <strong>Løsning:</strong> la det være tomt rom rundt strekkoden, særlig til venstre og høyre for en lineær strekkode.</p>

<h2>5. Uskarpt eller forvrengt bilde</h2>
<p>En strekkode som er forstørret fra et lite bilde, lagret som JPG i lav kvalitet eller strukket slik at proporsjonene ikke stemmer, mister formen sin. <strong>Løsning:</strong> last den ned med større modulstørrelse i PNG-format, og endre alltid størrelsen proporsjonalt.</p>

<h2>6. Feil data eller data som ikke passer typen</h2>
<p>Hver strekkodetype har sine regler. EAN-13 godtar for eksempel bare 12 eller 13 sifre med riktig kontrollsiffer. En feilskrevet lenke gjør også at QR Code kan leses, men ikke åpner noe. <strong>Løsning:</strong> sjekk dataene før du trykker. Generatoren på <a href="/">I Need Barcode</a> viser en melding hvis dataene ikke følger reglene for den valgte strekkodetypen.</p>

<h2>7. Overflate og belysning</h2>
<p>Blanke materialer, gjennomsiktig plast, bretter og buede overflater kan reflektere lys eller endre formen på strekkoden. <strong>Løsning:</strong> trykk på en flat overflate som ikke er blank, og test deretter under reelle lysforhold.</p>

<h2>Om QR Code med design</h2>
<p>En QR Code som har fått en form, farge eller ramme, kan fortsatt skannes så lenge de tre markeringsrutene i hjørnene er intakte og kontrasten er god nok. Les mer i <a href="/artikel/desain-qr-code-kreatif">kreativ design av QR Code som fortsatt kan leses</a>.</p>
<p>Den beste vanen: <strong>test alltid én utskrift</strong> med flere mobiler og skannere før du trykker i store mengder.</p>
`
};
