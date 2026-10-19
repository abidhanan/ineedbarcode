// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Správna veľkosť a rozlíšenie čiarového kódu na tlač",
  desc: "Príliš malý alebo rozmazaný čiarový kód sa ťažko skenuje. Zistite minimálnu veľkosť, pravidlo vzdialenosti pri skenovaní a bezpečné rozlíšenie obrázka na tlač.",
  tags: ["Návody", "Tlač"],
  coverCaption: "Tlačiareň štítkov tlačí čiarové kódy pre balíky a obaly.",
  inlineCaption: "Veľkosť štítka určuje, aký veľký čiarový kód sa dá vytlačiť.",
  faq: [
    ["Aká je minimálna veľkosť QR Code na tlač?", "Na skenovanie zblízka je bezpečnou hranicou približne 2 × 2 cm. Pre väčšie vzdialenosti použite pomer približne 10 : 1 medzi vzdialenosťou skenovania a šírkou QR Code."],
    ["Aká je štandardná veľkosť čiarového kódu EAN-13?", "Štandardná veľkosť EAN-13 je približne 37,3 × 25,9 mm. Dá sa zmenšiť približne na 80 % alebo zväčšiť až na 200 %."],
    ["Prečo je čiarový kód po vytlačení rozmazaný?", "Zvyčajne preto, že malý obrázok bol zväčšený alebo uložený ako JPG v nízkej kvalite. Stiahnite ho s väčšou veľkosťou modulu vo formáte PNG."]
  ],
  body: `
<p>Čiarový kód, ktorý vyzerá dobre na obrazovke, nemusí byť po vytlačení čitateľný. Príliš malá veľkosť, nízke rozlíšenie alebo rozpitá farba môžu spôsobiť, že ho skener neprečíta. Tu je návod, ako zabezpečiť, aby vaše výtlačky zostali čitateľné.</p>

<h2>Spoznajte modul</h2>
<p><strong>Modul</strong> je najmenšia jednotka čiarového kódu, teda jeden malý štvorček v QR Code alebo najužšia čiara v lineárnom čiarovom kóde. Veľkosť modulu určuje, ako ľahko sa čiarový kód číta. Na <a href="/">I Need Barcode</a> sa veľkosť modulu dá nastaviť v časti Nastavenia: čím vyššia hodnota, tým väčší a ostrejší je stiahnutý obrázok.</p>

<h2>Minimálna veľkosť QR Code</h2>
<ul>
  <li>Na skenovanie zblízka (napríklad na vizitke alebo štítku výrobku) je bezpečnou hranicou veľkosť približne <strong>2 × 2 cm</strong>.</li>
  <li>Použite pravidlo pomeru približne <strong>10 : 1</strong>: vzdialenosť skenovania je zhruba desaťnásobkom šírky QR Code. Pre plagát skenovaný zo vzdialenosti 2 metrov vytvorte QR Code s veľkosťou aspoň približne 20 cm.</li>
  <li>Čím viac dát uložíte, tým je vzor hustejší, a preto je potrebná väčšia veľkosť.</li>
</ul>

<h2>Veľkosť čiarového kódu výrobku</h2>
<p>Štandardná veľkosť <a href="/?type=ean13">EAN-13</a> je približne 37,3 × 25,9 mm (100 %). Dá sa zmenšiť približne na 80 % alebo zväčšiť až na 200 %. Neskracujte výšku čiar príliš, pretože pokladničný skener potrebuje priestor na čítanie z rôznych uhlov.</p>

<h2>Rozlíšenie obrázka</h2>
<ul>
  <li>Pri tlači sa snažte, aby bol každý modul vykreslený <strong>niekoľkými celými pixelmi</strong>, nie ich časťou. Pri sťahovaní zvoľte väčšiu veľkosť modulu a obrázok potom zmenšite v grafickom programe, nie naopak.</li>
  <li>Nezväčšujte malý obrázok čiarového kódu, pretože okraje štvorčekov sa rozmažú alebo budú zubaté.</li>
  <li>Ukladajte vo formáte PNG, aby sa farby a okraje nepoškodili ako pri JPG.</li>
</ul>

<h2>Pokojná zóna</h2>
<p>Každý čiarový kód potrebuje okolo seba prázdny priestor, takzvanú <strong>pokojnú zónu</strong> (quiet zone). Pri QR Code by mala byť ideálne široká štyri moduly. Pri lineárnom čiarovom kóde je veľmi dôležitý prázdny priestor vľavo a vpravo. Neumiestňujte text, grafické línie ani okraj obalu príliš blízko.</p>

<h2>Farby a materiály</h2>
<ul>
  <li>Pre čiarový kód používajte tmavú farbu a pre pozadie svetlú.</li>
  <li>Vyhnite sa lesklým alebo priehľadným materiálom, pretože odlesky svetla môžu fotoaparát rušiť.</li>
  <li>Vždy vytlačte jednu vzorku a pred tlačou vo väčšom množstve ju vyskúšajte na niekoľkých telefónoch alebo skeneroch.</li>
</ul>
<p>Ak sa váš čiarový kód stále ťažko skenuje, pozrite si <a href="/artikel/barcode-tidak-bisa-dipindai">7 príčin, prečo sa čiarový kód nedá naskenovať</a>.</p>
`
};
