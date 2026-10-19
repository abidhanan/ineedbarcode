// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Sådan får du en EAN-13-produktstregkode til små og mellemstore virksomheder",
  desc: "Vil du have dine produkter ind i minimarkeder eller supermarkeder? Lær, hvad tallene i EAN-13 betyder, hvordan du registrerer et officielt nummer hos GS1 Indonesia, og hvordan du trykker det.",
  tags: ["Erhverv", "Detailhandel"],
  coverCaption: "Emballage til detailvarer kræver en registreret EAN-13-stregkode.",
  inlineCaption: "Detailbutikker genkender produkter ud fra EAN-13-nummeret i kassesystemet.",
  faq: [
    ["Må jeg selv finde på et EAN-13-nummer?", "Selve stregkodebilledet må du gerne lave selv, men nummeret bør være officielt fra GS1. Et selvopfundet nummer kan kollidere med andre produkter og blive afvist af detailbutikker."],
    ["Skal hver produktvariant have sin egen stregkode?", "Ja. Hver forskellig variant, for eksempel med en anden smag, størrelse eller pakningsstørrelse, kræver sit eget EAN-13-nummer."],
    ["Hvad er kontrolcifferet i EAN-13?", "Kontrolcifferet er det 13. ciffer, som beregnes ud fra de 12 foregående cifre. Scanneren bruger det til at sikre, at stregkoden er læst korrekt. Generatoren hos I Need Barcode beregner det automatisk, hvis du indtaster 12 cifre."]
  ],
  body: `
<p>Hvis dine produkter skal sælges i minimarkeder, supermarkeder eller på store markedspladser, bliver du som regel bedt om at have en <strong>EAN-13</strong>-stregkode på emballagen. Stregkoden indeholder 13 cifre, som udgør dit produkts unikke identitet over hele verden.</p>

<h2>Hvad de 13 cifre i EAN-13 betyder</h2>
<ul>
  <li><strong>GS1-præfiks</strong>: de første tre cifre angiver den GS1-organisation, der har udstedt nummeret. Numre udstedt af GS1 Indonesia begynder med <strong>899</strong>.</li>
  <li><strong>Virksomhedsnummer</strong>: din virksomheds identitet, som du får tildelt ved registreringen.</li>
  <li><strong>Produktnummer</strong>: fastsættes af virksomheden selv for hver produktvariant, for eksempel en anden smag eller størrelse.</li>
  <li><strong>Kontrolciffer</strong>: det sidste ciffer, der beregnes automatisk ud fra de 12 foregående cifre for at forhindre fejlaflæsning.</li>
</ul>

<h2>Hvorfor skal nummeret være officielt?</h2>
<p>En EAN-13-stregkode kan tegnes af hvem som helst, men <strong>nummeret</strong> skal være registreret. Detailbutikker bruger nummeret til at genkende produktet i deres systemer. Hvis du selv finder på et nummer, kan det kollidere med en anden virksomheds produkt og blive afvist, når produktet registreres i butikken.</p>

<h2>Sådan registrerer du et nummer hos GS1 Indonesia</h2>
<ol>
  <li>Forbered virksomhedsdokumenter som NIB (virksomhedens registreringsnummer) og NPWP (skatteregistreringsnummer) samt en liste over de produkter, der skal have stregkode.</li>
  <li>Registrér virksomheden via GS1 Indonesias officielle hjemmeside, og vælg det antal numre, du har brug for.</li>
  <li>Betal registreringsgebyret og det årlige kontingent i henhold til de gældende regler.</li>
  <li>Når ansøgningen er godkendt, modtager du et virksomhedsnummer og kan lave numre til hvert produkt.</li>
</ol>
<p>Krav og gebyrer kan ændre sig, så tjek altid de seneste oplysninger direkte på GS1 Indonesias hjemmeside.</p>

<h2>Lav selve stregkodebilledet</h2>
<p>Når du har et nummer, åbner du <a href="/?type=ean13">EAN-13-generatoren</a> og indtaster de 12 eller 13 cifre i dit produktnummer. Hvis du indtaster 12 cifre, beregnes kontrolcifferet automatisk. Sørg for, at indstillingen for tekst under stregkoden er slået til, så tallene bliver trykt med, og download den som PNG.</p>

<h2>Tips til tryk på emballagen</h2>
<ul>
  <li>Brug sorte eller mørkeblå streger på hvid baggrund. Undgå rød til stregerne, fordi mange kassescannere bruger rødt lys, så røde streger ikke kan læses.</li>
  <li>Gør ikke stregkoden for lille. Standardstørrelsen for EAN-13 er cirka 37,3 × 25,9 mm og må formindskes til cirka 80 %. Læs mere i <a href="/artikel/ukuran-barcode-untuk-dicetak">vejledningen om stregkodestørrelser</a>.</li>
  <li>Lad der være tom plads til venstre og højre for stregkoden, og undgå at placere den på emballagens folder eller samlinger.</li>
  <li>Test trykket med en scanner, før du trykker i store mængder.</li>
</ul>
<p>Til produkter, der sælges i Nordamerika, kan du også blive bedt om at bruge <a href="/?type=upca">UPC-A</a>, der indeholder 12 cifre.</p>
`
};
