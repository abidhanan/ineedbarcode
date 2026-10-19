// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Správná velikost a rozlišení čárového kódu pro tisk",
  desc: "Příliš malý nebo rozmazaný čárový kód se špatně skenuje. Zjistěte minimální velikost, pravidlo vzdálenosti při skenování a bezpečné rozlišení obrázku pro tisk.",
  tags: ["Návody", "Tisk"],
  coverCaption: "Tiskárna štítků tiskne čárové kódy pro balíky a obaly.",
  inlineCaption: "Velikost štítku určuje, jak velký čárový kód lze vytisknout.",
  faq: [
    ["Jaká je minimální velikost QR Code pro tisk?", "Pro skenování zblízka je bezpečnou hranicí přibližně 2 × 2 cm. Pro větší vzdálenosti použijte poměr přibližně 10 : 1 mezi vzdáleností skenování a šířkou QR Code."],
    ["Jaká je standardní velikost čárového kódu EAN-13?", "Standardní velikost EAN-13 je přibližně 37,3 × 25,9 mm. Lze ji zmenšit přibližně na 80 % nebo zvětšit až na 200 %."],
    ["Proč je čárový kód po vytištění rozmazaný?", "Obvykle proto, že malý obrázek byl zvětšen nebo uložen jako JPG v nízké kvalitě. Stáhněte ho s větší velikostí modulu ve formátu PNG."]
  ],
  body: `
<p>Čárový kód, který vypadá dobře na obrazovce, nemusí být po vytištění čitelný. Příliš malá velikost, nízké rozlišení nebo rozpitá barva mohou způsobit, že ho skener nepřečte. Zde je návod, jak zajistit, aby vaše výtisky zůstaly čitelné.</p>

<h2>Seznamte se s modulem</h2>
<p><strong>Modul</strong> je nejmenší jednotka čárového kódu, tedy jeden malý čtvereček v QR Code nebo nejužší čára v lineárním čárovém kódu. Velikost modulu určuje, jak snadno se čárový kód čte. Na <a href="/">I Need Barcode</a> lze velikost modulu nastavit v části Nastavení: čím vyšší hodnota, tím větší a ostřejší je stažený obrázek.</p>

<h2>Minimální velikost QR Code</h2>
<ul>
  <li>Pro skenování zblízka (například na vizitce nebo štítku výrobku) je bezpečnou hranicí velikost přibližně <strong>2 × 2 cm</strong>.</li>
  <li>Použijte pravidlo poměru přibližně <strong>10 : 1</strong>: vzdálenost skenování je zhruba desetinásobkem šířky QR Code. Pro plakát skenovaný ze vzdálenosti 2 metrů vytvořte QR Code alespoň přibližně 20 cm velký.</li>
  <li>Čím více dat uložíte, tím je vzor hustší, a proto je potřeba větší velikost.</li>
</ul>

<h2>Velikost čárového kódu výrobku</h2>
<p>Standardní velikost <a href="/?type=ean13">EAN-13</a> je přibližně 37,3 × 25,9 mm (100 %). Lze ji zmenšit přibližně na 80 % nebo zvětšit až na 200 %. Nezkracujte výšku čar příliš, protože pokladní skener potřebuje prostor ke čtení z různých úhlů.</p>

<h2>Rozlišení obrázku</h2>
<ul>
  <li>Pro tisk se snažte, aby byl každý modul vykreslen <strong>několika celými pixely</strong>, nikoli jejich částí. Při stahování zvolte větší velikost modulu a obrázek pak zmenšete v grafickém programu, ne naopak.</li>
  <li>Nezvětšujte malý obrázek čárového kódu, protože okraje čtverečků se rozmažou nebo budou zubaté.</li>
  <li>Ukládejte ve formátu PNG, aby se barvy a okraje nepoškodily jako u JPG.</li>
</ul>

<h2>Klidová zóna</h2>
<p>Každý čárový kód potřebuje kolem sebe prázdný prostor, takzvanou <strong>klidovou zónu</strong> (quiet zone). U QR Code by měla být ideálně široká čtyři moduly. U lineárního čárového kódu je velmi důležitý prázdný prostor vlevo a vpravo. Neumisťujte text, grafické linie ani okraj obalu příliš blízko.</p>

<h2>Barvy a materiály</h2>
<ul>
  <li>Pro čárový kód používejte tmavou barvu a pro pozadí světlou.</li>
  <li>Vyhněte se lesklým nebo průhledným materiálům, protože odlesky světla mohou fotoaparát rušit.</li>
  <li>Vždy vytiskněte jeden vzorek a před tiskem ve větším množství ho vyzkoušejte na několika telefonech nebo skenerech.</li>
</ul>
<p>Pokud se váš čárový kód stále špatně skenuje, podívejte se na <a href="/artikel/barcode-tidak-bisa-dipindai">7 příčin, proč nejde čárový kód naskenovat</a>.</p>
`
};
