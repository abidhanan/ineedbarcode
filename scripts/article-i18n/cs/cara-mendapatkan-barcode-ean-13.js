// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Jak získat čárový kód EAN-13 pro výrobky malých firem",
  desc: "Chcete, aby se váš výrobek dostal do prodejen a supermarketů? Zjistěte, co znamenají číslice EAN-13, jak zaregistrovat oficiální číslo u GS1 Indonesia a jak ho vytisknout.",
  tags: ["Podnikání", "Maloobchod"],
  coverCaption: "Obaly maloobchodních výrobků vyžadují registrovaný čárový kód EAN-13.",
  inlineCaption: "Maloobchodní prodejny rozpoznávají výrobky podle čísla EAN-13 ve svém pokladním systému.",
  faq: [
    ["Mohu si číslo EAN-13 vytvořit sám?", "Obrázek čárového kódu si vytvořit můžete, ale číslo by mělo být oficiální od GS1. Vymyšlené číslo se může krýt s jiným výrobkem a maloobchodní prodejna ho odmítne."],
    ["Potřebuje každá varianta výrobku jiný čárový kód?", "Ano. Každá odlišná varianta, například jiná příchuť, velikost nebo obsah balení, potřebuje vlastní číslo EAN-13."],
    ["Co je kontrolní číslice v EAN-13?", "Kontrolní číslice je 13. číslice vypočítaná z předchozích 12 číslic. Skener ji používá k ověření, že byl čárový kód přečten správně. Generátor I Need Barcode ji vypočítá automaticky, pokud zadáte 12 číslic."]
  ],
  body: `
<p>Pokud chcete svůj výrobek prodávat v prodejnách, supermarketech nebo na velkých online tržištích, obvykle budete požádáni, abyste na obal umístili čárový kód <strong>EAN-13</strong>. Tento čárový kód obsahuje 13 číslic, které tvoří jedinečnou identitu vašeho výrobku po celém světě.</p>

<h2>Význam 13 číslic v EAN-13</h2>
<ul>
  <li><strong>Předpona GS1</strong>: první tři číslice označují organizaci GS1, která číslo vydala. Čísla vydaná GS1 Indonesia začínají <strong>899</strong>.</li>
  <li><strong>Číslo firmy</strong>: identita vaší firmy, kterou získáte při registraci.</li>
  <li><strong>Číslo výrobku</strong>: firma ho přiděluje sama pro každou variantu výrobku, například jinou příchuť nebo velikost.</li>
  <li><strong>Kontrolní číslice</strong>: poslední číslice vypočítaná automaticky z předchozích 12 číslic, která brání chybnému přečtení.</li>
</ul>

<h2>Proč musí být číslo oficiální?</h2>
<p>Čárový kód EAN-13 může nakreslit kdokoli, ale jeho <strong>číslo</strong> musí být registrované. Maloobchodní prodejny podle tohoto čísla rozpoznávají výrobek ve svém systému. Pokud si číslo vymyslíte, může se krýt s výrobkem jiné firmy a při zalistování výrobku do prodejny bude odmítnuto.</p>

<h2>Jak zaregistrovat číslo u GS1 Indonesia</h2>
<ol>
  <li>Připravte firemní dokumenty, například NIB (indonéské identifikační číslo podniku) a NPWP (daňové identifikační číslo), a také seznam výrobků, které mají dostat čárový kód.</li>
  <li>Zaregistrujte firmu přes oficiální web GS1 Indonesia a zvolte potřebný počet čísel.</li>
  <li>Uhraďte registrační poplatek a roční příspěvek podle platných podmínek.</li>
  <li>Po schválení obdržíte číslo firmy a můžete vytvářet čísla pro jednotlivé výrobky.</li>
</ol>
<p>Požadavky a poplatky se mohou měnit, proto si vždy ověřte aktuální informace přímo na webu GS1 Indonesia.</p>

<h2>Vytvoření obrázku čárového kódu</h2>
<p>Jakmile číslo máte, otevřete <a href="/?type=ean13">generátor EAN-13</a> a zadejte 12 nebo 13 číslic čísla svého výrobku. Pokud zadáte 12 číslic, kontrolní číslice se vypočítá automaticky. Ujistěte se, že je zapnutá volba textu pod čárovým kódem, aby se číslice vytiskly, a stáhněte ho jako PNG.</p>

<h2>Tipy pro tisk na obal</h2>
<ul>
  <li>Použijte černé nebo tmavě modré čáry na bílém pozadí. Na čáry nepoužívejte červenou barvu, protože mnoho pokladních skenerů pracuje s červeným světlem, a červené čáry by tak nebyly čitelné.</li>
  <li>Čárový kód příliš nezmenšujte. Standardní velikost EAN-13 je přibližně 37,3 × 25,9 mm a lze ji zmenšit přibližně na 80 %. Více v <a href="/artikel/ukuran-barcode-untuk-dicetak">návodu k velikosti čárového kódu</a>.</li>
  <li>Ponechte vlevo a vpravo od čárového kódu prázdný prostor a neumisťujte ho na přehyby ani spoje obalu.</li>
  <li>Před tiskem ve velkém vyzkoušejte výtisk skenerem.</li>
</ul>
<p>U výrobků prodávaných v Severní Americe můžete být požádáni také o <a href="/?type=upca">UPC-A</a>, který obsahuje 12 číslic.</p>
`
};
