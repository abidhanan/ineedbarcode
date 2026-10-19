// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 årsager til, at en stregkode ikke kan scannes, og hvad du kan gøre",
  desc: "Kan din stregkode eller QR Code ikke scannes? Se de syv hyppigste årsager, fra farvekontrast til størrelse, og hvordan du løser dem.",
  tags: ["Tips", "Stregkode"],
  coverCaption: "Kontrast og størrelse afgør, om en QR Code er let at scanne.",
  inlineCaption: "På lageret forsinker stregkoder, der ikke kan scannes, arbejdet.",
  faq: [
    ["Hvorfor kan en QR Code scannes med én telefon, men ikke med en anden?", "Kameraer og scannerapps har forskellige egenskaber. QR Codes, der er for små, har lav kontrast eller omvendte farver, fejler oftere på visse telefoner. Test med flere telefoner, før du trykker."],
    ["Kan farvede stregkoder scannes?", "Ja, så længe farven er mørk på en lys baggrund. Undgå rød til stregkodens streger, fordi mange kassescannere bruger rødt lys."],
    ["Hvordan kontrollerer jeg, at stregkoden er korrekt?", "Scan udskriften med flere telefoner eller scannere, og sørg for, at de aflæste data er nøjagtig de samme som dem, du har indtastet."]
  ],
  body: `
<p>Intet er mere irriterende end en stregkode, der er trykt i hundredvis af eksemplarer og så viser sig ikke at kunne scannes. Den gode nyhed er, at årsagen som regel er enkel og let at forebygge. Her er de syv hyppigste årsager.</p>

<h2>1. For lav farvekontrast</h2>
<p>Scanneren aflæser forskellen mellem mørkt og lyst. En lysegrå stregkode på hvid baggrund eller mørkeblå på sort er svær at skelne. <strong>Løsning:</strong> brug en mørk farve på en lys baggrund. Sort på hvid er det sikreste valg.</p>

<h2>2. Omvendte farver eller rød farve</h2>
<p>En lys stregkode på mørk baggrund understøttes ikke af alle scannere. Desuden bruger mange kassescannere rødt lys, så røde streger ser ud som den hvide baggrund. <strong>Løsning:</strong> undgå rød til stregkodens streger eller moduler, og vend ikke farverne om.</p>

<h2>3. For lille størrelse</h2>
<p>Kameraet har brug for nok pixels til at genkende hvert modul. <strong>Løsning:</strong> gør stregkoden større. Til QR Codes, der scannes tæt på, skal du bruge mindst cirka 2 × 2 cm. Se <a href="/artikel/ukuran-barcode-untuk-dicetak">vejledningen om trykstørrelse</a>.</p>

<h2>4. Ingen stille zone</h2>
<p>En stregkode, der ligger helt op ad billeder, tekst eller papirets kant, er svær at skelne fra omgivelserne. <strong>Løsning:</strong> lad der være tom plads rundt om stregkoden, især til venstre og højre for en lineær stregkode.</p>

<h2>5. Sløret eller forvrænget billede</h2>
<p>En stregkode, der er forstørret fra et lille billede, gemt som JPG i lav kvalitet eller strakt ud af proportioner, mister sin form. <strong>Løsning:</strong> download med en større modulstørrelse i PNG-format, og ændr altid størrelsen proportionalt.</p>

<h2>6. Forkerte data eller data, der ikke passer til typen</h2>
<p>Hver stregkodetype har sine regler. EAN-13 accepterer for eksempel kun 12 eller 13 cifre med et korrekt kontrolciffer. Et link med en tastefejl gør også, at QR Coden kan læses, men ikke åbner noget. <strong>Løsning:</strong> kontrollér dataene, før du trykker. Generatoren hos <a href="/">I Need Barcode</a> viser en besked, hvis dataene ikke overholder reglerne for den valgte stregkodetype.</p>

<h2>7. Overflade og belysning</h2>
<p>Blanke materialer, gennemsigtig plast, folder og buede overflader kan reflektere lys eller ændre stregkodens form. <strong>Løsning:</strong> tryk på en flad, mat overflade, og test under de faktiske lysforhold.</p>

<h2>Om QR Codes med design</h2>
<p>En QR Code med form, farver eller ramme kan stadig scannes, så længe de tre markeringsfirkanter i hjørnerne er intakte, og kontrasten er tilstrækkelig. Læs mere i <a href="/artikel/desain-qr-code-kreatif">kreativt QR Code-design, der stadig kan læses</a>.</p>
<p>Den bedste vane: <strong>test altid ét tryk</strong> med flere telefoner og scannere, før du trykker i store mængder.</p>
`
};
