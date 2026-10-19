// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 příčin, proč nejde čárový kód naskenovat, a jak je vyřešit",
  desc: "Nedaří se naskenovat čárový kód nebo QR Code? Projděte si sedm nejčastějších příčin, od barevného kontrastu po velikost, včetně způsobů, jak je napravit.",
  tags: ["Tipy", "Čárové kódy"],
  coverCaption: "Kontrast a velikost rozhodují o tom, zda se QR Code snadno naskenuje.",
  inlineCaption: "Ve skladu čárový kód, který nejde naskenovat, zpomaluje práci.",
  faq: [
    ["Proč jde QR Code naskenovat jedním telefonem, ale jiným ne?", "Fotoaparáty a skenovací aplikace mají různé schopnosti. QR Code, který je příliš malý, má nízký kontrast nebo obrácené barvy, na některých telefonech selhává častěji. Před tiskem ho vyzkoušejte na několika telefonech."],
    ["Lze naskenovat barevný čárový kód?", "Ano, pokud je barva tmavá na světlém pozadí. Na čáry čárového kódu nepoužívejte červenou barvu, protože mnoho pokladních skenerů pracuje s červeným světlem."],
    ["Jak ověřit, že je čárový kód správný?", "Naskenujte výtisk několika telefony nebo skenery a ujistěte se, že načtená data přesně odpovídají datům, která jste zadali."]
  ],
  body: `
<p>Není nic nepříjemnějšího než čárový kód, který jste vytiskli ve stovkách kusů, a pak zjistíte, že nejde naskenovat. Dobrou zprávou je, že příčina bývá jednoduchá a snadno se jí dá předejít. Zde je sedm nejčastějších příčin.</p>

<h2>1. Příliš nízký barevný kontrast</h2>
<p>Skener čte rozdíl mezi tmavou a světlou. Světle šedý čárový kód na bílém nebo tmavě modrý na černém se špatně rozlišuje. <strong>Řešení:</strong> použijte tmavou barvu na světlém pozadí. Černá na bílé je nejbezpečnější volba.</p>

<h2>2. Obrácené barvy nebo červená barva</h2>
<p>Světlý čárový kód na tmavém pozadí nepodporují všechny skenery. Navíc mnoho pokladních skenerů pracuje s červeným světlem, takže červené čáry vypadají stejně jako bílé pozadí. <strong>Řešení:</strong> na čáry nebo moduly čárového kódu nepoužívejte červenou barvu a barvy neobracejte.</p>

<h2>3. Příliš malá velikost</h2>
<p>Fotoaparát potřebuje dostatek pixelů, aby rozpoznal každý modul. <strong>Řešení:</strong> čárový kód zvětšete. U QR Code skenovaného zblízka použijte alespoň přibližně 2 × 2 cm. Viz <a href="/artikel/ukuran-barcode-untuk-dicetak">návod k tiskovým rozměrům</a>.</p>

<h2>4. Chybí klidová zóna</h2>
<p>Čárový kód, který se dotýká obrázku, textu nebo okraje papíru, se špatně odděluje od okolí. <strong>Řešení:</strong> ponechte kolem čárového kódu prázdný prostor, zejména vlevo a vpravo od lineárního čárového kódu.</p>

<h2>5. Rozmazaný nebo zdeformovaný obrázek</h2>
<p>Čárový kód zvětšený z malého obrázku, uložený jako JPG v nízké kvalitě nebo roztažený nepoměrně ztratí svůj tvar. <strong>Řešení:</strong> stáhněte ho s větší velikostí modulu ve formátu PNG a velikost vždy měňte proporcionálně.</p>

<h2>6. Chybná data nebo data neodpovídající typu</h2>
<p>Každý typ čárového kódu má svá pravidla. Například EAN-13 přijímá pouze 12 nebo 13 číslic se správnou kontrolní číslicí. Překlep v odkazu také způsobí, že se QR Code sice načte, ale nic neotevře. <strong>Řešení:</strong> před tiskem data zkontrolujte. Generátor <a href="/">I Need Barcode</a> zobrazí upozornění, pokud data neodpovídají pravidlům zvoleného typu čárového kódu.</p>

<h2>7. Povrch a osvětlení</h2>
<p>Lesklé materiály, průhledný plast, přehyby a zakřivené povrchy mohou odrážet světlo nebo měnit tvar čárového kódu. <strong>Řešení:</strong> tiskněte na rovný a nelesklý povrch a vyzkoušejte skenování za skutečných světelných podmínek.</p>

<h2>A co QR Code s designem?</h2>
<p>QR Code, kterému dáte tvar, barvu nebo rámeček, lze stále naskenovat, pokud zůstanou tři značky v rozích nedotčené a kontrast je dostatečný. Více se dočtete v článku <a href="/artikel/desain-qr-code-kreatif">kreativní design QR Code, který zůstane čitelný</a>.</p>
<p>Nejlepší zvyk: <strong>vždy vyzkoušejte jeden výtisk</strong> na několika telefonech a skenerech, než začnete tisknout ve velkém.</p>
`
};
