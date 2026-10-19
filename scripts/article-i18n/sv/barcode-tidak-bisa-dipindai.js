// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 orsaker till att streckkoden inte går att skanna och hur du åtgärdar dem",
  desc: "Går streckkoden eller QR Code inte att skanna? Kontrollera de sju vanligaste orsakerna, från färgkontrast till storlek, och hur du rättar till dem.",
  tags: ["Tips", "Streckkod"],
  coverCaption: "Kontrast och storlek avgör om en QR Code är lätt att skanna.",
  inlineCaption: "På lagret gör streckkoder som inte går att skanna att arbetet går långsammare.",
  faq: [
    ["Varför går en QR Code att skanna med en mobil men inte med en annan?", "Kameror och skanningsappar har olika förmåga. En QR Code som är för liten, har låg kontrast eller inverterade färger misslyckas oftare på vissa mobiler. Testa med flera mobiler innan du trycker."],
    ["Går färgade streckkoder att skanna?", "Ja, så länge färgen är mörk mot en ljus bakgrund. Undvik rött för streckkodens streck, eftersom många kassaskannrar använder rött ljus."],
    ["Hur kontrollerar jag att streckkoden är korrekt?", "Skanna utskriften med flera mobiler eller skannrar och se till att den avlästa datan är exakt densamma som den data du har angett."]
  ],
  body: `
<p>Inget är mer irriterande än en streckkod som redan har tryckts i hundratals exemplar och sedan visar sig inte gå att skanna. Den goda nyheten är att orsaken oftast är enkel och lätt att förebygga. Här är de sju vanligaste orsakerna.</p>

<h2>1. För låg färgkontrast</h2>
<p>Skannern läser skillnaden mellan mörkt och ljust. En ljusgrå streckkod på vitt, eller mörkblå på svart, är svår att urskilja. <strong>Lösning:</strong> använd en mörk färg mot en ljus bakgrund. Svart på vitt är det säkraste valet.</p>

<h2>2. Inverterade färger eller röd färg</h2>
<p>En ljus streckkod på mörk bakgrund stöds inte av alla skannrar. Dessutom använder många kassaskannrar rött ljus, så röda streck ser likadana ut som den vita bakgrunden. <strong>Lösning:</strong> undvik rött för streckkodens streck eller moduler, och invertera inte färgerna.</p>

<h2>3. För liten storlek</h2>
<p>Kameran behöver tillräckligt många pixlar för att känna igen varje modul. <strong>Lösning:</strong> gör streckkoden större. För en QR Code som skannas på nära håll bör du använda minst cirka 2 × 2 cm. Se <a href="/artikel/ukuran-barcode-untuk-dicetak">guiden om utskriftsstorlek</a>.</p>

<h2>4. Ingen tyst zon</h2>
<p>En streckkod som ligger tätt intill bilder, text eller papperskanten är svår att skilja från omgivningen. <strong>Lösning:</strong> lämna tomt utrymme runt streckkoden, särskilt till vänster och höger om en linjär streckkod.</p>

<h2>5. Suddig eller förvrängd bild</h2>
<p>En streckkod som har förstorats från en liten bild, sparats som JPG i låg kvalitet eller dragits ut så att proportionerna inte stämmer förlorar sin form. <strong>Lösning:</strong> ladda ner den med större modulstorlek i PNG-format och ändra alltid storleken proportionellt.</p>

<h2>6. Felaktiga data eller data som inte passar typen</h2>
<p>Varje streckkodstyp har sina regler. EAN-13 accepterar till exempel bara 12 eller 13 siffror med korrekt kontrollsiffra. En felskriven länk gör också att QR Code går att läsa men inte öppnar något. <strong>Lösning:</strong> kontrollera uppgifterna innan du trycker. Generatorn på <a href="/">I Need Barcode</a> visar ett meddelande om uppgifterna inte följer reglerna för den valda streckkodstypen.</p>

<h2>7. Yta och belysning</h2>
<p>Blanka material, genomskinlig plast, vikningar och böjda ytor kan reflektera ljus eller förändra streckkodens form. <strong>Lösning:</strong> tryck på en plan yta som inte är blank och testa sedan under verkliga ljusförhållanden.</p>

<h2>Om QR Code med design</h2>
<p>En QR Code som har fått en form, färg eller ram går fortfarande att skanna så länge de tre markeringsrutorna i hörnen är intakta och kontrasten är tillräcklig. Läs mer i <a href="/artikel/desain-qr-code-kreatif">kreativ design av QR Code som fortfarande går att läsa</a>.</p>
<p>Den bästa vanan: <strong>testa alltid en utskrift</strong> med flera mobiler och skannrar innan du trycker i stora mängder.</p>
`
};
