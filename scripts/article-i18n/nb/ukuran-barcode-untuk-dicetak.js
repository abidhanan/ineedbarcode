// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Riktig størrelse og oppløsning på strekkoder for utskrift",
  desc: "En strekkode som er for liten eller uskarp, er vanskelig å skanne. Lær minstestørrelser, regelen for skanneavstand og hvilken bildeoppløsning som er trygg for utskrift.",
  tags: ["Veiledninger", "Utskrift"],
  coverCaption: "En etikettskriver skriver ut strekkoder for pakker og emballasje.",
  inlineCaption: "Størrelsen på etiketten avgjør hvor stor strekkoden kan skrives ut.",
  faq: [
    ["Hva er minstestørrelsen på en QR Code for utskrift?", "For skanning på nært hold er rundt 2 × 2 cm en trygg grense. For lengre avstander kan du bruke et forhold på rundt 10 : 1 mellom skanneavstanden og bredden på QR Code."],
    ["Hva er standardstørrelsen for en EAN-13-strekkode?", "Standardstørrelsen for EAN-13 er rundt 37,3 × 25,9 mm. Den kan forminskes til rundt 80 % eller forstørres opptil 200 %."],
    ["Hvorfor blir strekkoden uskarp etter utskrift?", "Som regel fordi bildet var lite og deretter ble forstørret, eller ble lagret som JPG i lav kvalitet. Last ned med større modulstørrelse i PNG-format."]
  ],
  body: `
<p>En strekkode som ser bra ut på skjermen, kan ikke nødvendigvis leses når den er skrevet ut. For liten størrelse, lav oppløsning eller blekk som flyter ut, kan gjøre at skanneren ikke klarer å lese den. Her er en veiledning for at utskriften din skal forbli lesbar.</p>

<h2>Bli kjent med modulen</h2>
<p>En <strong>modul</strong> er den minste enheten i en strekkode, altså én liten rute i en QR Code eller den smaleste streken i en lineær strekkode. Modulstørrelsen avgjør hvor lett strekkoden er å lese. På <a href="/">I Need Barcode</a> kan du stille inn modulstørrelsen under Innstillinger: jo høyere verdi, desto større og skarpere blir bildet du laster ned.</p>

<h2>Minstestørrelse på en QR Code</h2>
<ul>
  <li>For skanning på nært hold (for eksempel visittkort eller produktetiketter) er rundt <strong>2 × 2 cm</strong> en trygg grense.</li>
  <li>Bruk tommelfingerregelen med forholdet rundt <strong>10 : 1</strong>: skanneavstanden er omtrent ti ganger bredden på QR Code. For en plakat som skannes fra 2 meters avstand, bør QR Code være minst rundt 20 cm.</li>
  <li>Jo mer data som lagres, desto tettere blir mønsteret, og desto større størrelse trengs.</li>
</ul>

<h2>Størrelse på produktstrekkoder</h2>
<p>Standardstørrelsen for <a href="/?type=ean13">EAN-13</a> er rundt 37,3 × 25,9 mm (100 %). Den kan forminskes til rundt 80 % eller forstørres opptil 200 %. Unngå å kutte høyden på strekene for mye, fordi kasseskanneren trenger plass til å lese fra ulike vinkler.</p>

<h2>Bildeoppløsning</h2>
<ul>
  <li>Ved utskrift bør hver modul gjengis med <strong>flere hele piksler</strong>, ikke deler av piksler. Velg en større modulstørrelse når du laster ned, og forminsk deretter i designprogrammet, ikke omvendt.</li>
  <li>Unngå å forstørre små strekkodebilder, fordi kantene på rutene da blir uskarpe eller taggete.</li>
  <li>Lagre i PNG-format, slik at farger og kanter ikke ødelegges slik de kan bli med JPG.</li>
</ul>

<h2>Stille sone</h2>
<p>Hver strekkode trenger tomt rom rundt seg, en såkalt <strong>stille sone</strong> (quiet zone). For en QR Code bør den helst være fire moduler bred. For lineære strekkoder er det tomme rommet til venstre og høyre svært viktig. Ikke plasser tekst, designlinjer eller kanten av emballasjen for nær.</p>

<h2>Farger og materiale</h2>
<ul>
  <li>Bruk en mørk farge for strekkoden og en lys farge for bakgrunnen.</li>
  <li>Unngå blanke eller gjennomsiktige materialer, fordi lysrefleksjoner kan forstyrre kameraet.</li>
  <li>Skriv alltid ut ett prøveeksemplar og test det med flere mobiler eller skannere før du skriver ut i større mengder.</li>
</ul>
<p>Hvis strekkoden din fortsatt er vanskelig å skanne, kan du lese <a href="/artikel/barcode-tidak-bisa-dipindai">7 grunner til at strekkoden ikke kan skannes</a>.</p>
`
};
