// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Hogyan szerezhet EAN-13 termékvonalkódot kis- és középvállalkozásként?",
  desc: "Szeretné, ha terméke bekerülne a boltokba vagy szupermarketekbe? Ismerje meg az EAN-13 számjegyeinek jelentését, a hivatalos szám regisztrálását a GS1 Indonesiánál, és a nyomtatás módját.",
  tags: ["Üzlet", "Kiskereskedelem"],
  coverCaption: "A kiskereskedelmi termékek csomagolásához regisztrált EAN-13 vonalkód szükséges.",
  inlineCaption: "Az üzletek a pénztárrendszerükben szereplő EAN-13 szám alapján azonosítják a terméket.",
  faq: [
    ["Létrehozhatok saját magam EAN-13 számot?", "A vonalkód képét elkészítheti saját maga, de a számnak érdemes a GS1-től származó hivatalos számnak lennie. A kitalált szám ütközhet egy másik termékkel, és az üzletek elutasíthatják."],
    ["Minden termékváltozatnak külön vonalkód kell?", "Igen. Minden eltérő változatnak, például más ízűnek, méretűnek vagy kiszerelésűnek, saját EAN-13 számra van szüksége."],
    ["Mi az ellenőrző számjegy az EAN-13-ban?", "Az ellenőrző számjegy a 13. számjegy, amelyet az előző 12 számjegyből számolnak ki. A szkenner ezzel győződik meg arról, hogy a vonalkódot helyesen olvasta be. Az I Need Barcode generátor automatikusan kiszámítja, ha 12 számjegyet ad meg."]
  ],
  body: `
<p>Ha azt szeretné, hogy terméke boltokban, szupermarketekben vagy nagy online piactereken kerüljön forgalomba, általában kérni fogják, hogy tüntessen fel <strong>EAN-13</strong> vonalkódot a csomagoláson. Ez a vonalkód 13 számjegyet tartalmaz, amelyek a termék egyedi azonosítójaként szolgálnak az egész világon.</p>

<h2>Az EAN-13 13 számjegyének jelentése</h2>
<ul>
  <li><strong>GS1 előtag</strong>: az első három számjegy a számot kiadó GS1 szervezetet jelöli. A GS1 Indonesia által kiadott számok <strong>899</strong>-cel kezdődnek.</li>
  <li><strong>Cégazonosító szám</strong>: az Ön cégének azonosítója, amelyet a regisztrációkor kap meg.</li>
  <li><strong>Termékszám</strong>: a cég maga határozza meg minden termékváltozathoz, például eltérő íz vagy eltérő méret esetén.</li>
  <li><strong>Ellenőrző számjegy</strong>: az utolsó számjegy, amelyet az előző 12 számjegyből automatikusan számolnak ki a hibás leolvasás megelőzése érdekében.</li>
</ul>

<h2>Miért kell hivatalos számot használni?</h2>
<p>EAN-13 vonalkódot bárki rajzolhat, de a <strong>számnak</strong> regisztráltnak kell lennie. Az üzletek ezt a számot használják a termék azonosítására a rendszerükben. Ha saját maga talál ki egy számot, az ütközhet egy másik cég termékével, és elutasíthatják, amikor a terméket az üzletben regisztrálják.</p>

<h2>Szám regisztrálása a GS1 Indonesiánál</h2>
<ol>
  <li>Készítse elő a vállalkozás dokumentumait, például az NIB-t (Nomor Induk Berusaha, vállalkozási azonosító szám) és az NPWP-t (adószám), valamint a vonalkóddal ellátandó termékek listáját.</li>
  <li>Regisztrálja a céget a GS1 Indonesia hivatalos weboldalán, és válassza ki, hány számra van szüksége.</li>
  <li>Fizesse be a regisztrációs díjat és az éves tagdíjat a hatályos szabályok szerint.</li>
  <li>A jóváhagyás után megkapja a cégazonosító számot, és minden termékhez létrehozhat egy számot.</li>
</ol>
<p>A feltételek és a díjak változhatnak, ezért mindig közvetlenül a GS1 Indonesia weboldalán ellenőrizze a legfrissebb információkat.</p>

<h2>A vonalkód képének elkészítése</h2>
<p>Miután megvan a szám, nyissa meg az <a href="/?type=ean13">EAN-13 generátort</a>, és adja meg a termékszám 12 vagy 13 számjegyét. Ha 12 számjegyet ad meg, az ellenőrző számjegyet automatikusan kiszámítja. Győződjön meg arról, hogy a vonalkód alatti szöveg beállítás be van kapcsolva, hogy a számok is kinyomtatódjanak, majd töltse le PNG formátumban.</p>

<h2>Tippek a csomagolásra nyomtatáshoz</h2>
<ul>
  <li>Használjon fekete vagy sötétkék vonalakat fehér háttéren. Kerülje a piros színt a vonalaknál, mert sok pénztári szkenner piros fényt használ, így a piros vonalak nem olvashatók be.</li>
  <li>Ne kicsinyítse túlzottan a vonalkódot. Az EAN-13 szabványos mérete körülbelül 37,3 × 25,9 mm, és körülbelül 80%-ig kicsinyíthető. Bővebben a <a href="/artikel/ukuran-barcode-untuk-dicetak">vonalkódméretekről szóló útmutatóban</a>.</li>
  <li>Hagyjon üres helyet a vonalkód bal és jobb oldalán, és ne helyezze a csomagolás hajtására vagy illesztésére.</li>
  <li>Nagy mennyiségű nyomtatás előtt tesztelje a nyomatot szkennerrel.</li>
</ul>
<p>Az Észak-Amerikában értékesített termékeknél előfordulhat, hogy a 12 számjegyű <a href="/?type=upca">UPC-A</a> használatát is kérik.</p>
`
};
