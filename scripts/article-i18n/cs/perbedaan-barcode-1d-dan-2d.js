// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Rozdíl mezi 1D a 2D čárovými kódy: Který potřebujete?",
  desc: "Lineární čárový kód i QR Code jsou čárové kódy, ale slouží k různým účelům. Porovnejte jejich kapacitu, způsob skenování a příklady použití.",
  tags: ["Základy", "Čárové kódy"],
  coverCaption: "Ruční skener ve skladu čte 1D i 2D čárové kódy.",
  inlineCaption: "Přepravní štítky obvykle používají lineární čárový kód.",
  faq: [
    ["Dokáže pokladní skener přečíst QR Code?", "Ne každý. Laserový 1D skener čte pouze lineární čárové kódy. Pro QR Code je potřeba 2D skener s kamerou nebo fotoaparát telefonu."],
    ["Který čárový kód je nejmenší?", "Data Matrix patří mezi 2D čárové kódy, které lze vytisknout ve velmi malé velikosti, proto se často používá na elektronických součástkách, zdravotnických prostředcích a štítcích léků."],
    ["Mohu QR Code použít místo EAN-13 na maloobchodním výrobku?", "Pro prodej v maloobchodních prodejnách výrobek stále potřebuje registrovaný EAN-13 nebo UPC. QR Code lze na obal přidat jako doplněk, například pro informace o výrobku nebo propagaci."]
  ],
  body: `
<p>Při vytváření čárového kódu obvykle jako první vyvstane otázka: použít lineární čárový kód, nebo QR Code? Obojí se nazývá čárový kód, ale data ukládají odlišně, a proto se liší i jejich použití.</p>

<h2>1D (lineární) čárový kód</h2>
<p>1D čárový kód tvoří svislé čáry. Data jsou uložena v jednom směru, a to zleva doprava. Nejznámějším příkladem je <a href="/?type=ean13">EAN-13</a> na obalech výrobků a <a href="/?type=code128">Code 128</a> na přepravních štítcích.</p>
<ul>
  <li>Malá kapacita, obvykle od deseti do několika desítek znaků.</li>
  <li>Přečte ho levný a velmi rychlý laserový pokladní skener.</li>
  <li>Vhodný pro kódy výrobků, sériová čísla a čísla zásilek.</li>
</ul>

<h2>2D čárový kód</h2>
<p>2D čárový kód ukládá data ve dvou směrech, do strany i dolů, takže se do něj vejde mnohem více. Příkladem jsou <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> a <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Velká kapacita, od desítek až po tisíce znaků.</li>
  <li>Lze ho naskenovat fotoaparátem telefonu z různých směrů.</li>
  <li>Má opravu chyb, takže zůstane čitelný, i když je částečně poškozený.</li>
  <li>Může být velmi malý, například Data Matrix na elektronických součástkách.</li>
</ul>

<h2>Stručné srovnání</h2>
<table>
  <thead><tr><th></th><th>1D čárový kód</th><th>2D čárový kód</th></tr></thead>
  <tbody>
    <tr><td>Tvar</td><td>Svislé čáry</td><td>Čtverečky/tečky ve čtverci</td></tr>
    <tr><td>Kapacita</td><td>Malá</td><td>Velká</td></tr>
    <tr><td>Snímací zařízení</td><td>Laserový skener nebo fotoaparát</td><td>Fotoaparát nebo 2D skener</td></tr>
    <tr><td>Odolnost vůči poškození</td><td>Omezená</td><td>Má opravu chyb</td></tr>
    <tr><td>Příklady</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Kdy použít který?</h2>
<ul>
  <li><strong>Výrobky prodávané v obchodech nebo prodejnách</strong>: použijte oficiální EAN-13 od GS1. Viz <a href="/artikel/cara-mendapatkan-barcode-ean-13">jak získat čárový kód EAN-13</a>.</li>
  <li><strong>Štítky ve skladu, na regálech nebo pro přepravu</strong>: Code 128 je běžnou volbou, protože je kompaktní a podporuje písmena i číslice.</li>
  <li><strong>Odkazy, menu, WiFi nebo kontakty pro zákazníky</strong>: QR Code, protože ho lze naskenovat přímo fotoaparátem telefonu.</li>
  <li><strong>Velmi malé štítky</strong>: Data Matrix.</li>
  <li><strong>Průkazy totožnosti, letenky nebo dokumenty</strong>: PDF417 nebo Aztec.</li>
</ul>
<p>Všechny výše uvedené typy si můžete zdarma vytvořit na <a href="/">I Need Barcode</a>. Pokud si stále nejste jisti, začněte s QR Code pro potřeby zákazníků a s Code 128 pro interní potřeby.</p>
`
};
