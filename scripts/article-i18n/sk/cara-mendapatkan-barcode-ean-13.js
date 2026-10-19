// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Ako získať čiarový kód EAN-13 pre výrobky malých firiem",
  desc: "Chcete, aby sa váš výrobok dostal do predajní a supermarketov? Zistite, čo znamenajú číslice EAN-13, ako zaregistrovať oficiálne číslo v GS1 Indonesia a ako ho vytlačiť.",
  tags: ["Podnikanie", "Maloobchod"],
  coverCaption: "Obaly maloobchodných výrobkov vyžadujú registrovaný čiarový kód EAN-13.",
  inlineCaption: "Maloobchodné predajne rozpoznávajú výrobky podľa čísla EAN-13 vo svojom pokladničnom systéme.",
  faq: [
    ["Môžem si číslo EAN-13 vytvoriť sám?", "Obrázok čiarového kódu si vytvoriť môžete, ale číslo by malo byť oficiálne od GS1. Vymyslené číslo sa môže zhodovať s iným výrobkom a maloobchodná predajňa ho odmietne."],
    ["Potrebuje každý variant výrobku iný čiarový kód?", "Áno. Každý odlišný variant, napríklad iná príchuť, veľkosť alebo obsah balenia, potrebuje vlastné číslo EAN-13."],
    ["Čo je kontrolná číslica v EAN-13?", "Kontrolná číslica je 13. číslica vypočítaná z predchádzajúcich 12 číslic. Skener ju používa na overenie, že bol čiarový kód prečítaný správne. Generátor I Need Barcode ju vypočíta automaticky, ak zadáte 12 číslic."]
  ],
  body: `
<p>Ak chcete svoj výrobok predávať v predajniach, supermarketoch alebo na veľkých online trhoviskách, zvyčajne vás požiadajú, aby ste na obal umiestnili čiarový kód <strong>EAN-13</strong>. Tento čiarový kód obsahuje 13 číslic, ktoré tvoria jedinečnú identitu vášho výrobku na celom svete.</p>

<h2>Význam 13 číslic v EAN-13</h2>
<ul>
  <li><strong>Predpona GS1</strong>: prvé tri číslice označujú organizáciu GS1, ktorá číslo vydala. Čísla vydané GS1 Indonesia začínajú <strong>899</strong>.</li>
  <li><strong>Číslo firmy</strong>: identita vašej firmy, ktorú získate pri registrácii.</li>
  <li><strong>Číslo výrobku</strong>: firma ho prideľuje sama pre každý variant výrobku, napríklad inú príchuť alebo veľkosť.</li>
  <li><strong>Kontrolná číslica</strong>: posledná číslica vypočítaná automaticky z predchádzajúcich 12 číslic, ktorá bráni chybnému prečítaniu.</li>
</ul>

<h2>Prečo musí byť číslo oficiálne?</h2>
<p>Čiarový kód EAN-13 môže nakresliť ktokoľvek, ale jeho <strong>číslo</strong> musí byť registrované. Maloobchodné predajne podľa tohto čísla rozpoznávajú výrobok vo svojom systéme. Ak si číslo vymyslíte, môže sa zhodovať s výrobkom inej firmy a pri zaradení výrobku do predajne bude odmietnuté.</p>

<h2>Ako zaregistrovať číslo v GS1 Indonesia</h2>
<ol>
  <li>Pripravte firemné dokumenty, napríklad NIB (indonézske identifikačné číslo podniku) a NPWP (daňové identifikačné číslo), a tiež zoznam výrobkov, ktoré majú dostať čiarový kód.</li>
  <li>Zaregistrujte firmu cez oficiálny web GS1 Indonesia a zvoľte potrebný počet čísel.</li>
  <li>Uhraďte registračný poplatok a ročný príspevok podľa platných podmienok.</li>
  <li>Po schválení dostanete číslo firmy a môžete vytvárať čísla pre jednotlivé výrobky.</li>
</ol>
<p>Požiadavky a poplatky sa môžu meniť, preto si vždy overte aktuálne informácie priamo na webe GS1 Indonesia.</p>

<h2>Vytvorenie obrázka čiarového kódu</h2>
<p>Keď číslo máte, otvorte <a href="/?type=ean13">generátor EAN-13</a> a zadajte 12 alebo 13 číslic čísla svojho výrobku. Ak zadáte 12 číslic, kontrolná číslica sa vypočíta automaticky. Uistite sa, že je zapnutá voľba textu pod čiarovým kódom, aby sa číslice vytlačili, a stiahnite ho ako PNG.</p>

<h2>Tipy na tlač na obal</h2>
<ul>
  <li>Použite čierne alebo tmavomodré čiary na bielom pozadí. Na čiary nepoužívajte červenú farbu, pretože mnohé pokladničné skenery pracujú s červeným svetlom, a červené čiary by tak neboli čitateľné.</li>
  <li>Čiarový kód príliš nezmenšujte. Štandardná veľkosť EAN-13 je približne 37,3 × 25,9 mm a dá sa zmenšiť približne na 80 %. Viac v <a href="/artikel/ukuran-barcode-untuk-dicetak">návode k veľkosti čiarového kódu</a>.</li>
  <li>Ponechajte vľavo a vpravo od čiarového kódu prázdny priestor a neumiestňujte ho na prehyby ani spoje obalu.</li>
  <li>Pred tlačou vo veľkom vyskúšajte výtlačok skenerom.</li>
</ul>
<p>Pri výrobkoch predávaných v Severnej Amerike vás môžu požiadať aj o <a href="/?type=upca">UPC-A</a>, ktorý obsahuje 12 číslic.</p>
`
};
