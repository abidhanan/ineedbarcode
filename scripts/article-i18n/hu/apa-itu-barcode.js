// apa-itu-barcode
module.exports = {
  title: "Mi az a vonalkód? Jelentése, működése és típusai",
  desc: "Szinte minden megvásárolt terméken található vonalkód. Ismerje meg, hogyan működik, mi a rövid története, és melyek a leggyakrabban használt vonalkódtípusok.",
  tags: ["Alapok", "Vonalkód"],
  coverCaption: "A csomagoláson lévő vonalkód a termék egyedi kódját tárolja.",
  inlineCaption: "A pénztáros szkennerrel egy pillanat alatt beolvassa a vonalkódot.",
  faq: [
    ["Mi a különbség a vonalkód és a QR Code között?", "A QR Code a vonalkódok egyik fajtája, mégpedig 2D vonalkód. A vonalas (1D) vonalkód csak néhány karaktert tárol, és balról jobbra olvasható, míg a QR Code két irányban tárolja az adatokat, így elfér benne egy hivatkozás, szöveg vagy WiFi-adat is."],
    ["Tárolja a vonalkód a termék árát?", "Általában nem. A termék vonalkódja csak egy kódot tartalmaz. A termék árát és nevét a pénztárrendszer tárolja, és a beolvasott kód alapján keresi ki."],
    ["Fizetni kell a vonalkód készítéséért?", "Nem. A vonalkód képe ingyenesen elkészíthető, például az I Need Barcode oldalon. Díjköteles regisztráció csak a kiskereskedelmi termékek vonalkódjához, például az EAN-13-hoz szükséges hivatalos számhoz kell, a GS1-en keresztül."]
  ],
  body: `
<p>A vonalkód az adatok gép által olvasható mintázat formájában történő rögzítésének módja. Ez a mintázat általában különböző szélességű fekete és fehér vonalakból, vagy egy négyzetbe rendezett apró négyzetekből áll. Beolvasáskor a mintázat visszaalakul számokká vagy szöveggé, például termékkóddá, csomagszámmá vagy weboldalcímmé.</p>
<p>Mivel gép olvassa, a vonalkód sokkal gyorsabb és kevesebb hibával jár, mint a kód kézi begépelése. Ezért használnak vonalkódot a pénztáraknál, raktárakban, kórházakban, jegyeken és még az élelmiszerek csomagolásán is.</p>

<h2>A vonalkód rövid története</h2>
<p>A vonalkód ötletét 1952-ben Norman Joseph Woodland és Bernard Silver szabadalmaztatta az Amerikai Egyesült Államokban. A vonalkódot az üzletekben csak 1974-ben kezdték ténylegesen használni, amikor egy ohiói szupermarketben UPC-kóddal beolvastak egy csomag rágógumit. Azóta a vonalkód az egész világon elterjedt, és ma globálisan a GS1 nevű szabványügyi szervezet kezeli.</p>

<h2>Hogyan működik a vonalkód?</h2>
<p>A szkenner megvilágítja a vonalkódot, majd leolvassa a visszavert fényt. A sötét részek kevés fényt vernek vissza, a világosak sokat. Ezt a különbséget 0-k és 1-esek sorozatává alakítja, majd összeveti az adott vonalkódtípus szabályaival. Sok vonalkódnak van <strong>ellenőrző számjegye</strong> (check digit) is, vagyis egy utolsó számjegy, amelyet az előző számjegyekből számolnak ki. Ha a számítás eredménye nem egyezik, a szkenner tudja, hogy valami hibás, és elutasítja az eredményt.</p>
<p>Maga a vonalkód általában csak egy kódot tárol. Az olyan információkat, mint a termék neve vagy ára, a pénztárrendszer vagy egy adatbázis tárolja, és e kód alapján keresi ki.</p>

<h2>A leggyakrabban használt vonalkódtípusok</h2>
<p>A vonalkódok általában két nagy csoportra oszthatók:</p>
<ul>
  <li><strong>1D (lineáris) vonalkódok</strong>: függőleges vonalak, amelyeket balról jobbra olvasnak. Ilyen például az <a href="/?type=ean13">EAN-13</a> és az <a href="/?type=upca">UPC-A</a> a kiskereskedelmi termékekhez, valamint a <a href="/?type=code128">Code 128</a> és a <a href="/?type=code39">Code 39</a> a logisztikában és a raktárakban.</li>
  <li><strong>2D vonalkódok</strong>: négyzetekből álló mintázatok, amelyek két irányban tárolják az adatokat, így sokkal többet képesek befogadni. Ilyen például a <a href="/?type=qrcode">QR Code</a>, a <a href="/?type=datamatrix">Data Matrix</a>, a <a href="/?type=pdf417">PDF417</a> és az <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Ezenkívül léteznek speciális vonalkódok a posta és a szállítás, valamint az egészségügy számára, továbbá GS1 szabványok az ellátási lánchoz. A különbségek részletesebb magyarázatát a <a href="/artikel/perbedaan-barcode-1d-dan-2d">Az 1D és 2D vonalkódok közötti különbség</a> című cikkben olvashatja.</p>

<h2>Mire használják a vonalkódokat?</h2>
<ul>
  <li><strong>Kiskereskedelem</strong>: felgyorsítják a pénztári fizetést, és automatikusan nyilvántartják a készletet.</li>
  <li><strong>Raktározás és szállítás</strong>: nyomon követik az árukat és a csomagokat egyik helyről a másikra.</li>
  <li><strong>Jegyek és rendezvények</strong>: egyetlen beolvasással ellenőrzik a jegyek hitelességét.</li>
  <li><strong>Marketing</strong>: a szórólapon vagy csomagoláson lévő QR Code egyenesen az Ön weboldalára, étlapjára vagy WhatsApp-jára vezeti az embereket.</li>
</ul>

<h2>Készítsen vonalkódot saját maga</h2>
<p>A vonalkód készítéséhez nincs szüksége fizetős alkalmazásra. Az <a href="/">I Need Barcode</a> oldalon válassza ki a vonalkód típusát, adja meg az adatokat, majd töltse le PNG képként. Több mint 100 típus közül választhat, és mindegyik ingyenes, regisztráció nélkül.</p>
`
};
