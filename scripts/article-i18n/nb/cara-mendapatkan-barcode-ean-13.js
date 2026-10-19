// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Slik får du en EAN-13-strekkode til produktet ditt som småbedrift",
  desc: "Vil du at produktet ditt skal selges i nærbutikker eller supermarkeder? Lær hva sifrene i EAN-13 betyr, hvordan du registrerer et offisielt nummer hos GS1 Indonesia, og hvordan du skriver det ut.",
  tags: ["Bedrift", "Detaljhandel"],
  coverCaption: "Emballasje for detaljhandelen trenger en registrert EAN-13-strekkode.",
  inlineCaption: "Butikkene gjenkjenner produktet ut fra EAN-13-nummeret i kassasystemet.",
  faq: [
    ["Kan jeg lage mitt eget EAN-13-nummer?", "Selve strekkodebildet kan du lage selv, men nummeret bør være offisielt fra GS1. Et nummer du har funnet på selv, kan kollidere med andre produkter og bli avvist av butikkene."],
    ["Trenger hver produktvariant sin egen strekkode?", "Ja. Hver variant som er forskjellig, for eksempel i smak, størrelse eller pakningsinnhold, trenger sitt eget EAN-13-nummer."],
    ["Hva er kontrollsifferet i EAN-13?", "Kontrollsifferet er det 13. sifferet, som beregnes ut fra de 12 foregående sifrene. Skanneren bruker det til å sikre at strekkoden er lest riktig. Generatoren på I Need Barcode beregner det automatisk hvis du skriver inn 12 sifre."]
  ],
  body: `
<p>Hvis du vil selge produktet ditt i nærbutikker, supermarkeder eller på store markedsplasser på nett, blir du som regel bedt om å ha en <strong>EAN-13</strong>-strekkode på emballasjen. Strekkoden inneholder 13 sifre som utgjør produktets unike identitet i hele verden.</p>

<h2>Hva de 13 sifrene i EAN-13 betyr</h2>
<ul>
  <li><strong>GS1-prefiks</strong>: de tre første sifrene viser hvilken GS1-organisasjon som har utstedt nummeret. Numre utstedt av GS1 Indonesia begynner med <strong>899</strong>.</li>
  <li><strong>Bedriftsnummer</strong>: bedriftens identitet, som du får når du registrerer deg.</li>
  <li><strong>Produktnummer</strong>: fastsettes av bedriften selv for hver produktvariant, for eksempel ulike smaker eller størrelser.</li>
  <li><strong>Kontrollsiffer</strong>: det siste sifferet, som beregnes automatisk ut fra de 12 foregående sifrene for å hindre feillesing.</li>
</ul>

<h2>Hvorfor må nummeret være offisielt?</h2>
<p>En EAN-13-strekkode kan tegnes av hvem som helst, men <strong>nummeret</strong> må være registrert. Butikkene bruker nummeret til å gjenkjenne produktet i systemene sine. Hvis du finner på et nummer selv, kan det kollidere med et annet selskaps produkt og bli avvist når produktet registreres hos butikken.</p>

<h2>Slik registrerer du et nummer hos GS1 Indonesia</h2>
<ol>
  <li>Gjør klar bedriftsdokumenter, som NIB (bedriftens registreringsnummer) og NPWP (skatteregistreringsnummer), samt en liste over produktene som skal få strekkode.</li>
  <li>Registrer bedriften via det offisielle nettstedet til GS1 Indonesia, og velg hvor mange numre du trenger.</li>
  <li>Betal registreringsgebyret og årsavgiften i henhold til gjeldende vilkår.</li>
  <li>Når søknaden er godkjent, får du et bedriftsnummer og kan lage et nummer for hvert produkt.</li>
</ol>
<p>Krav og gebyrer kan endres, så sjekk alltid den nyeste informasjonen direkte på nettstedet til GS1 Indonesia.</p>

<h2>Lag strekkodebildet</h2>
<p>Når du har fått nummeret, åpner du <a href="/?type=ean13">EAN-13-generatoren</a> og skriver inn de 12 eller 13 sifrene i produktnummeret. Hvis du skriver inn 12 sifre, beregnes kontrollsifferet automatisk. Sørg for at alternativet for tekst under strekkoden er slått på, slik at sifrene skrives ut, og last den deretter ned som PNG.</p>

<h2>Tips for trykk på emballasjen</h2>
<ul>
  <li>Bruk svarte eller mørkeblå streker mot hvit bakgrunn. Unngå rødt til strekene, fordi mange kasseskannere bruker rødt lys, slik at røde streker ikke kan leses.</li>
  <li>Ikke forminsk strekkoden for mye. Standardstørrelsen for EAN-13 er rundt 37,3 × 25,9 mm og kan forminskes til rundt 80 %. Les mer i <a href="/artikel/ukuran-barcode-untuk-dicetak">veiledningen om strekkodestørrelse</a>.</li>
  <li>La det være tomt rom til venstre og høyre for strekkoden, og unngå å plassere den på bretter eller skjøter i emballasjen.</li>
  <li>Test utskriften med en skanner før du trykker i store mengder.</li>
</ul>
<p>For produkter som selges i Nord-Amerika, kan du også bli bedt om å bruke <a href="/?type=upca">UPC-A</a>, som inneholder 12 sifre.</p>
`
};
