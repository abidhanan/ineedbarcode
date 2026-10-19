// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Rozdiel medzi 1D a 2D čiarovými kódmi: Ktorý potrebujete?",
  desc: "Lineárny čiarový kód aj QR Code sú čiarové kódy, ale slúžia na rôzne účely. Porovnajte ich kapacitu, spôsob skenovania a príklady použitia.",
  tags: ["Základy", "Čiarové kódy"],
  coverCaption: "Ručný skener v sklade číta 1D aj 2D čiarové kódy.",
  inlineCaption: "Prepravné štítky zvyčajne používajú lineárny čiarový kód.",
  faq: [
    ["Dokáže pokladničný skener prečítať QR Code?", "Nie každý. Laserový 1D skener číta iba lineárne čiarové kódy. Na QR Code je potrebný 2D skener s kamerou alebo fotoaparát telefónu."],
    ["Ktorý čiarový kód je najmenší?", "Data Matrix patrí medzi 2D čiarové kódy, ktoré sa dajú vytlačiť vo veľmi malej veľkosti, preto sa často používa na elektronických súčiastkach, zdravotníckych pomôckach a štítkoch liekov."],
    ["Môžem QR Code použiť namiesto EAN-13 na maloobchodnom výrobku?", "Na predaj v maloobchodných predajniach výrobok stále potrebuje registrovaný EAN-13 alebo UPC. QR Code sa dá na obal pridať ako doplnok, napríklad pre informácie o výrobku alebo propagáciu."]
  ],
  body: `
<p>Pri vytváraní čiarového kódu zvyčajne ako prvá vyvstane otázka: použiť lineárny čiarový kód, alebo QR Code? Obe sa nazývajú čiarový kód, ale dáta ukladajú odlišne, a preto sa líši aj ich použitie.</p>

<h2>1D (lineárny) čiarový kód</h2>
<p>1D čiarový kód tvoria zvislé čiary. Dáta sú uložené v jednom smere, a to zľava doprava. Najznámejším príkladom je <a href="/?type=ean13">EAN-13</a> na obaloch výrobkov a <a href="/?type=code128">Code 128</a> na prepravných štítkoch.</p>
<ul>
  <li>Malá kapacita, zvyčajne od desať do niekoľkých desiatok znakov.</li>
  <li>Prečíta ho lacný a veľmi rýchly laserový pokladničný skener.</li>
  <li>Vhodný pre kódy výrobkov, sériové čísla a čísla zásielok.</li>
</ul>

<h2>2D čiarový kód</h2>
<p>2D čiarový kód ukladá dáta v dvoch smeroch, do strany aj nadol, takže sa doň zmestí oveľa viac. Príkladom sú <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> a <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Veľká kapacita, od desiatok až po tisíce znakov.</li>
  <li>Dá sa naskenovať fotoaparátom telefónu z rôznych smerov.</li>
  <li>Má opravu chýb, takže zostane čitateľný, aj keď je čiastočne poškodený.</li>
  <li>Môže byť veľmi malý, napríklad Data Matrix na elektronických súčiastkach.</li>
</ul>

<h2>Stručné porovnanie</h2>
<table>
  <thead><tr><th></th><th>1D čiarový kód</th><th>2D čiarový kód</th></tr></thead>
  <tbody>
    <tr><td>Tvar</td><td>Zvislé čiary</td><td>Štvorčeky/bodky v štvorci</td></tr>
    <tr><td>Kapacita</td><td>Malá</td><td>Veľká</td></tr>
    <tr><td>Snímacie zariadenie</td><td>Laserový skener alebo fotoaparát</td><td>Fotoaparát alebo 2D skener</td></tr>
    <tr><td>Odolnosť voči poškodeniu</td><td>Obmedzená</td><td>Má opravu chýb</td></tr>
    <tr><td>Príklady</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Kedy použiť ktorý?</h2>
<ul>
  <li><strong>Výrobky predávané v obchodoch alebo predajniach</strong>: použite oficiálny EAN-13 od GS1. Pozrite si, <a href="/artikel/cara-mendapatkan-barcode-ean-13">ako získať čiarový kód EAN-13</a>.</li>
  <li><strong>Štítky v sklade, na regáloch alebo na prepravu</strong>: Code 128 je bežnou voľbou, pretože je kompaktný a podporuje písmená aj číslice.</li>
  <li><strong>Odkazy, menu, WiFi alebo kontakty pre zákazníkov</strong>: QR Code, pretože sa dá naskenovať priamo fotoaparátom telefónu.</li>
  <li><strong>Veľmi malé štítky</strong>: Data Matrix.</li>
  <li><strong>Preukazy totožnosti, letenky alebo dokumenty</strong>: PDF417 alebo Aztec.</li>
</ul>
<p>Všetky uvedené typy si môžete zadarmo vytvoriť na <a href="/">I Need Barcode</a>. Ak si stále nie ste istí, začnite s QR Code pre potreby zákazníkov a s Code 128 pre interné potreby.</p>
`
};
