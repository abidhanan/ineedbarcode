// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 príčin, prečo sa čiarový kód nedá naskenovať, a ako ich vyriešiť",
  desc: "Nedarí sa naskenovať čiarový kód alebo QR Code? Pozrite si sedem najčastejších príčin, od farebného kontrastu po veľkosť, aj so spôsobmi, ako ich napraviť.",
  tags: ["Tipy", "Čiarové kódy"],
  coverCaption: "Kontrast a veľkosť rozhodujú o tom, či sa QR Code ľahko naskenuje.",
  inlineCaption: "V sklade čiarový kód, ktorý sa nedá naskenovať, spomaľuje prácu.",
  faq: [
    ["Prečo sa QR Code dá naskenovať jedným telefónom, ale iným nie?", "Fotoaparáty a skenovacie aplikácie majú rôzne schopnosti. QR Code, ktorý je príliš malý, má nízky kontrast alebo obrátené farby, na niektorých telefónoch zlyháva častejšie. Pred tlačou ho vyskúšajte na niekoľkých telefónoch."],
    ["Dá sa naskenovať farebný čiarový kód?", "Áno, ak je farba tmavá na svetlom pozadí. Na čiary čiarového kódu nepoužívajte červenú farbu, pretože mnohé pokladničné skenery pracujú s červeným svetlom."],
    ["Ako overiť, že je čiarový kód správny?", "Naskenujte výtlačok niekoľkými telefónmi alebo skenermi a uistite sa, že načítané dáta presne zodpovedajú dátam, ktoré ste zadali."]
  ],
  body: `
<p>Nie je nič nepríjemnejšie než čiarový kód, ktorý ste vytlačili v stovkách kusov, a potom zistíte, že sa nedá naskenovať. Dobrou správou je, že príčina býva jednoduchá a ľahko sa jej dá predísť. Tu je sedem najčastejších príčin.</p>

<h2>1. Príliš nízky farebný kontrast</h2>
<p>Skener číta rozdiel medzi tmavou a svetlou. Svetlosivý čiarový kód na bielom alebo tmavomodrý na čiernom sa ťažko rozlišuje. <strong>Riešenie:</strong> použite tmavú farbu na svetlom pozadí. Čierna na bielej je najbezpečnejšia voľba.</p>

<h2>2. Obrátené farby alebo červená farba</h2>
<p>Svetlý čiarový kód na tmavom pozadí nepodporujú všetky skenery. Navyše mnohé pokladničné skenery pracujú s červeným svetlom, takže červené čiary vyzerajú rovnako ako biele pozadie. <strong>Riešenie:</strong> na čiary alebo moduly čiarového kódu nepoužívajte červenú farbu a farby neobracajte.</p>

<h2>3. Príliš malá veľkosť</h2>
<p>Fotoaparát potrebuje dostatok pixelov, aby rozpoznal každý modul. <strong>Riešenie:</strong> čiarový kód zväčšite. Pri QR Code skenovanom zblízka použite aspoň približne 2 × 2 cm. Pozrite si <a href="/artikel/ukuran-barcode-untuk-dicetak">návod k tlačovým rozmerom</a>.</p>

<h2>4. Chýba pokojná zóna</h2>
<p>Čiarový kód, ktorý sa dotýka obrázka, textu alebo okraja papiera, sa ťažko oddeľuje od okolia. <strong>Riešenie:</strong> ponechajte okolo čiarového kódu prázdny priestor, najmä vľavo a vpravo od lineárneho čiarového kódu.</p>

<h2>5. Rozmazaný alebo zdeformovaný obrázok</h2>
<p>Čiarový kód zväčšený z malého obrázka, uložený ako JPG v nízkej kvalite alebo nepomerne roztiahnutý stratí svoj tvar. <strong>Riešenie:</strong> stiahnite ho s väčšou veľkosťou modulu vo formáte PNG a veľkosť vždy meňte proporcionálne.</p>

<h2>6. Chybné dáta alebo dáta nezodpovedajúce typu</h2>
<p>Každý typ čiarového kódu má svoje pravidlá. Napríklad EAN-13 prijíma iba 12 alebo 13 číslic so správnou kontrolnou číslicou. Preklep v odkaze tiež spôsobí, že sa QR Code síce načíta, ale nič neotvorí. <strong>Riešenie:</strong> pred tlačou dáta skontrolujte. Generátor <a href="/">I Need Barcode</a> zobrazí upozornenie, ak dáta nezodpovedajú pravidlám zvoleného typu čiarového kódu.</p>

<h2>7. Povrch a osvetlenie</h2>
<p>Lesklé materiály, priehľadný plast, prehyby a zakrivené povrchy môžu odrážať svetlo alebo meniť tvar čiarového kódu. <strong>Riešenie:</strong> tlačte na rovný a nelesklý povrch a vyskúšajte skenovanie v skutočných svetelných podmienkach.</p>

<h2>A čo QR Code s dizajnom?</h2>
<p>QR Code, ktorému dáte tvar, farbu alebo rámik, sa dá stále naskenovať, ak zostanú tri značky v rohoch nedotknuté a kontrast je dostatočný. Viac sa dočítate v článku <a href="/artikel/desain-qr-code-kreatif">kreatívny dizajn QR Code, ktorý zostane čitateľný</a>.</p>
<p>Najlepší zvyk: <strong>vždy vyskúšajte jeden výtlačok</strong> na niekoľkých telefónoch a skeneroch, skôr než začnete tlačiť vo veľkom.</p>
`
};
