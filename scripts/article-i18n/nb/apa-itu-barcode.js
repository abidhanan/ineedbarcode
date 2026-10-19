// apa-itu-barcode
module.exports = {
  title: "Hva er en strekkode? Definisjon, hvordan den fungerer og typer",
  desc: "Strekkoder finnes på nesten alle produkter du kjøper. Lær hvordan de fungerer, den korte historien deres og hvilke typer strekkoder som brukes oftest.",
  tags: ["Grunnleggende", "Strekkode"],
  coverCaption: "Strekkoden på emballasjen lagrer produktets unike kode.",
  inlineCaption: "Kassabetjeningen bruker en skanner til å lese strekkoden på et øyeblikk.",
  faq: [
    ["Hva er forskjellen på en strekkode og en QR Code?", "En QR Code er én type strekkode, nærmere bestemt en 2D-strekkode. Lineære (1D) strekkoder lagrer bare noen få tegn og leses fra venstre mot høyre, mens en QR Code lagrer data i to retninger og derfor har plass til en lenke, tekst eller WiFi-opplysninger."],
    ["Lagrer strekkoden prisen på produktet?", "Vanligvis ikke. En produktstrekkode inneholder bare en kode. Prisen og navnet på produktet lagres i kassasystemet og slås opp basert på den skannede koden."],
    ["Koster det noe å lage en strekkode?", "Nei. Strekkodebilder kan lages gratis, for eksempel på I Need Barcode. Det eneste som krever betalt registrering, er det offisielle nummeret for strekkoder på dagligvare- og butikkprodukter, som EAN-13, via GS1."]
  ],
  body: `
<p>En strekkode er en måte å skrive data på i form av et mønster som maskiner kan lese. Mønsteret består som regel av svarte og hvite streker med ulik bredde, eller av små ruter ordnet inne i et kvadrat. Når koden skannes, oversettes mønsteret tilbake til tall eller tekst, for eksempel en produktkode, et sporingsnummer eller en nettadresse.</p>
<p>Fordi strekkoder leses av maskiner, er de mye raskere og gir langt færre feil enn å taste inn koder for hånd. Derfor brukes strekkoder i kasser, på lagre, sykehus og billetter, helt til matemballasje.</p>

<h2>Strekkodens korte historie</h2>
<p>Ideen om strekkoden ble patentert i 1952 av Norman Joseph Woodland og Bernard Silver i USA. Strekkoder ble ikke tatt i bruk for alvor i butikker før i 1974, da en pakke tyggegummi ble skannet med en UPC-kode i et supermarked i Ohio. Siden den gang har strekkodene spredt seg over hele verden, og i dag forvaltes de globalt av en standardiseringsorganisasjon som heter GS1.</p>

<h2>Hvordan fungerer en strekkode?</h2>
<p>Skanneren lyser på strekkoden og leser deretter av refleksjonen. Mørke partier reflekterer lite lys, mens lyse partier reflekterer mye. Denne forskjellen gjøres om til en rekke av nuller og enere, som deretter sammenlignes med reglene for den aktuelle strekkodetypen. Mange strekkoder har også et <strong>kontrollsiffer</strong> (check digit), altså det siste sifferet, som beregnes ut fra sifrene foran. Hvis beregningen ikke stemmer, vet skanneren at noe er galt og avviser resultatet.</p>
<p>Selve strekkoden lagrer vanligvis bare en kode. Informasjon som produktnavn eller pris lagres i kassasystemet eller en database og slås opp basert på koden.</p>

<h2>Vanlige typer strekkoder</h2>
<p>Generelt deles strekkoder inn i to store grupper:</p>
<ul>
  <li><strong>1D-strekkoder (lineære)</strong>: loddrette streker som leses fra venstre mot høyre. Eksempler er <a href="/?type=ean13">EAN-13</a> og <a href="/?type=upca">UPC-A</a> for butikkprodukter, samt <a href="/?type=code128">Code 128</a> og <a href="/?type=code39">Code 39</a> for logistikk og lager.</li>
  <li><strong>2D-strekkoder</strong>: rutemønstre som lagrer data i to retninger og derfor har plass til mye mer. Eksempler er <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> og <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>I tillegg finnes det egne strekkoder for post og frakt, helsevesen og GS1-standarder for forsyningskjeder. En mer utførlig forklaring av forskjellene kan du lese i artikkelen <a href="/artikel/perbedaan-barcode-1d-dan-2d">Forskjellen mellom 1D- og 2D-strekkoder</a>.</p>

<h2>Hva brukes strekkoder til?</h2>
<ul>
  <li><strong>Detaljhandel</strong>: gjør kassen raskere og registrerer lagerbeholdningen automatisk.</li>
  <li><strong>Lager og frakt</strong>: sporer varer og pakker fra ett sted til et annet.</li>
  <li><strong>Billetter og arrangementer</strong>: sjekker at billetter er ekte med én enkelt skanning.</li>
  <li><strong>Markedsføring</strong>: en QR Code på en brosjyre eller emballasje tar folk rett til nettstedet, menyen eller WhatsApp-en din.</li>
</ul>

<h2>Lag din egen strekkode</h2>
<p>Du trenger ingen betalt app for å lage en strekkode. På <a href="/">I Need Barcode</a> velger du strekkodetype, fyller inn dataene og laster den ned som et PNG-bilde. Det finnes over 100 typer å velge mellom, og alle er gratis uten registrering.</p>
`
};
