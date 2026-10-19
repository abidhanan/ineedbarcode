// apa-itu-barcode
module.exports = {
  title: "Co je čárový kód? Význam, princip fungování a typy",
  desc: "Čárový kód najdete téměř na každém výrobku, který koupíte. Zjistěte, jak funguje, jaká je jeho stručná historie a které typy čárových kódů se používají nejčastěji.",
  tags: ["Základy", "Čárové kódy"],
  coverCaption: "Čárový kód na obalu uchovává jedinečný kód výrobku.",
  inlineCaption: "Pokladní přečte čárový kód skenerem během okamžiku.",
  faq: [
    ["Jaký je rozdíl mezi čárovým kódem a QR Code?", "QR Code je jedním z typů čárového kódu, konkrétně 2D kódem. Čárový kód tvořený čarami (1D) uchovává jen několik znaků a čte se zleva doprava, zatímco QR Code ukládá data ve dvou směrech, takže se do něj vejde odkaz, text nebo údaje o WiFi."],
    ["Obsahuje čárový kód cenu výrobku?", "Obvykle ne. Čárový kód výrobku obsahuje pouze kód. Cena a název výrobku jsou uloženy v pokladním systému a dohledají se podle naskenovaného kódu."],
    ["Musím za vytvoření čárového kódu platit?", "Ne. Obrázek čárového kódu můžete vytvořit zdarma, například na I Need Barcode. Placenou registraci vyžaduje pouze oficiální číslo pro maloobchodní čárové kódy, jako je EAN-13, a to prostřednictvím GS1."]
  ],
  body: `
<p>Čárový kód je způsob, jak zapsat data ve formě vzoru, který dokáže přečíst stroj. Tento vzor obvykle tvoří černé a bílé čáry různé šířky nebo malé čtverečky uspořádané do čtverce. Při skenování se vzor převede zpět na čísla nebo text, například na kód výrobku, číslo zásilky nebo adresu webu.</p>
<p>Protože čárový kód čte stroj, je mnohem rychlejší a méně náchylný k chybám než ruční opisování kódu. Proto se čárové kódy používají u pokladen, ve skladech, v nemocnicích, na vstupenkách i na obalech potravin.</p>

<h2>Stručná historie čárového kódu</h2>
<p>Myšlenku čárového kódu si v roce 1952 nechali v USA patentovat Norman Joseph Woodland a Bernard Silver. Skutečně se v obchodech začal používat až v roce 1974, kdy bylo v jednom supermarketu v Ohiu naskenováno balení žvýkaček s kódem UPC. Od té doby se čárové kódy rozšířily po celém světě a dnes je globálně spravuje normalizační organizace GS1.</p>

<h2>Jak čárový kód funguje?</h2>
<p>Skener čárový kód osvítí a čte odražené světlo. Tmavé části odrážejí málo světla, světlé části hodně. Tento rozdíl se převede na řadu nul a jedniček a porovná se s pravidly daného typu čárového kódu. Mnoho čárových kódů má také <strong>kontrolní číslici</strong> (check digit), tedy poslední číslici vypočítanou z předchozích čísel. Pokud výpočet nesouhlasí, skener pozná, že je něco špatně, a výsledek odmítne.</p>
<p>Samotný čárový kód obvykle uchovává jen kód. Informace jako název výrobku nebo cena jsou uloženy v pokladním systému či databázi a dohledávají se podle tohoto kódu.</p>

<h2>Nejčastěji používané typy čárových kódů</h2>
<p>Obecně se čárové kódy dělí do dvou velkých skupin:</p>
<ul>
  <li><strong>1D (lineární) čárové kódy</strong>: tvoří je svislé čáry, které se čtou zleva doprava. Příkladem jsou <a href="/?type=ean13">EAN-13</a> a <a href="/?type=upca">UPC-A</a> pro maloobchodní výrobky a také <a href="/?type=code128">Code 128</a> a <a href="/?type=code39">Code 39</a> pro logistiku a sklady.</li>
  <li><strong>2D čárové kódy</strong>: tvoří je čtvercový vzor, který ukládá data ve dvou směrech, takže se do nich vejde mnohem více. Příkladem jsou <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> a <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Kromě toho existují speciální čárové kódy pro poštu a přepravu, zdravotnictví a také standardy GS1 pro dodavatelské řetězce. Podrobnější vysvětlení rozdílů najdete v článku <a href="/artikel/perbedaan-barcode-1d-dan-2d">Rozdíl mezi 1D a 2D čárovými kódy</a>.</p>

<h2>K čemu se čárové kódy používají?</h2>
<ul>
  <li><strong>Maloobchod</strong>: zrychlují práci u pokladny a automaticky evidují zásoby.</li>
  <li><strong>Sklady a přeprava</strong>: sledují zboží a balíky z jednoho místa na druhé.</li>
  <li><strong>Vstupenky a akce</strong>: ověřují pravost vstupenky jediným naskenováním.</li>
  <li><strong>Marketing</strong>: QR Code na letáku nebo obalu přivede lidi přímo na váš web, menu nebo WhatsApp.</li>
</ul>

<h2>Vytvořte si vlastní čárový kód</h2>
<p>K vytvoření čárového kódu nepotřebujete placenou aplikaci. Na <a href="/">I Need Barcode</a> zvolte typ čárového kódu, vyplňte data a stáhněte si ho jako obrázek PNG. Vybírat můžete z více než 100 typů a všechny jsou zdarma a bez registrace.</p>
`
};
