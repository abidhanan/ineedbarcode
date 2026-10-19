// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Den rette størrelse og opløsning til tryk af stregkoder",
  desc: "Stregkoder, der er for små eller slørede, er svære at scanne. Lær om minimumsstørrelser, reglen for scanningsafstand og den billedopløsning, der er sikker til tryk.",
  tags: ["Guide", "Tryk"],
  coverCaption: "En etiketprinter trykker stregkoder til pakker og emballage.",
  inlineCaption: "Etikettens størrelse afgør, hvor stor stregkoden kan trykkes.",
  faq: [
    ["Hvad er minimumsstørrelsen for en trykt QR Code?", "Til scanning tæt på er cirka 2 × 2 cm den sikre grænse. Ved længere afstande skal du bruge et forhold på cirka 10 : 1 mellem scanningsafstanden og QR Codens bredde."],
    ["Hvad er standardstørrelsen for en EAN-13-stregkode?", "Standardstørrelsen for EAN-13 er cirka 37,3 × 25,9 mm. Den må formindskes til cirka 80 % eller forstørres op til 200 %."],
    ["Hvorfor bliver stregkoden sløret efter tryk?", "Som regel fordi billedet var lille og blev forstørret, eller fordi det blev gemt som JPG i lav kvalitet. Download med en større modulstørrelse i PNG-format."]
  ],
  body: `
<p>En stregkode, der ser fin ud på skærmen, kan ikke nødvendigvis læses, når den er trykt. For lille størrelse, lav opløsning eller blæk, der flyder ud, kan få scanneren til at fejle. Her er en vejledning, så dine tryk fortsat kan læses.</p>

<h2>Lær modulet at kende</h2>
<p>Et <strong>modul</strong> er stregkodens mindste enhed, det vil sige én lille firkant i en QR Code eller den smalleste streg i en lineær stregkode. Modulstørrelsen afgør, hvor let stregkoden er at læse. Hos <a href="/">I Need Barcode</a> kan modulstørrelsen justeres under Indstillinger: jo højere værdi, desto større og skarpere bliver det downloadede billede.</p>

<h2>Minimumsstørrelse for QR Codes</h2>
<ul>
  <li>Til scanning tæt på (for eksempel visitkort eller produktetiketter) er cirka <strong>2 × 2 cm</strong> den sikre grænse.</li>
  <li>Brug forholdsreglen på cirka <strong>10 : 1</strong>: scanningsafstanden er omtrent ti gange QR Codens bredde. Til en plakat, der scannes fra 2 meters afstand, skal QR Coden være mindst cirka 20 cm.</li>
  <li>Jo flere data der gemmes, desto tættere bliver mønsteret, og desto større skal størrelsen være.</li>
</ul>

<h2>Størrelse på produktstregkoder</h2>
<p>Standardstørrelsen for <a href="/?type=ean13">EAN-13</a> er cirka 37,3 × 25,9 mm (100 %). Den må formindskes til cirka 80 % eller forstørres op til 200 %. Undgå at gøre stregernes højde for lav, fordi kassescannere har brug for plads til at læse fra forskellige vinkler.</p>

<h2>Billedopløsning</h2>
<ul>
  <li>Til tryk bør hvert modul helst tegnes med <strong>flere hele pixels</strong>, ikke dele af en pixel. Vælg en større modulstørrelse, når du downloader, og gør den mindre i dit designprogram, ikke omvendt.</li>
  <li>Undgå at forstørre et lille stregkodebillede, fordi firkanternes kanter så bliver slørede eller takkede.</li>
  <li>Gem i PNG-format, så farver og kanter ikke forringes, som det sker med JPG.</li>
</ul>

<h2>Stille zone</h2>
<p>Alle stregkoder har brug for tom plads rundt om sig, den såkaldte <strong>stille zone</strong> (quiet zone). For QR Codes bør den ideelt set være fire moduler bred. For lineære stregkoder er den tomme plads til venstre og højre meget vigtig. Placér ikke tekst, designlinjer eller emballagens kant for tæt på.</p>

<h2>Farver og materialer</h2>
<ul>
  <li>Brug en mørk farve til stregkoden og en lys farve til baggrunden.</li>
  <li>Undgå blanke eller gennemsigtige materialer, fordi lysreflekser kan forstyrre kameraet.</li>
  <li>Tryk altid ét eksemplar, og test det med flere telefoner eller scannere, før du trykker mange.</li>
</ul>
<p>Hvis din stregkode stadig er svær at scanne, så tjek <a href="/artikel/barcode-tidak-bisa-dipindai">7 årsager til, at en stregkode ikke kan scannes</a>.</p>
`
};
