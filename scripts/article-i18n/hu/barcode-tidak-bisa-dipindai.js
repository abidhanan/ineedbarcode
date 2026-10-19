// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 ok, amiért a vonalkód nem olvasható be, és hogyan orvosolhatja őket",
  desc: "Nem sikerül beolvasni a vonalkódot vagy a QR Code-ot? Nézze át a hét leggyakoribb okot a színkontraszttól a méretig, és azt, hogyan javíthatja ki őket.",
  tags: ["Tippek", "Vonalkód"],
  coverCaption: "A kontraszt és a méret dönti el, hogy a QR Code könnyen beolvasható-e.",
  inlineCaption: "A raktárban a be nem olvasható vonalkód lelassítja a munkát.",
  faq: [
    ["Miért olvasható be a QR Code az egyik telefonon, a másikon pedig nem?", "A kamerák és a beolvasó alkalmazások képességei eltérőek. A túl kicsi, alacsony kontrasztú vagy fordított színű QR Code bizonyos telefonokon gyakrabban hibázik. Nyomtatás előtt tesztelje több telefonnal."],
    ["Beolvasható a színes vonalkód?", "Igen, ha a szín sötét, világos háttéren. Kerülje a piros színt a vonalkód vonalainál, mert sok pénztári szkenner piros fényt használ."],
    ["Hogyan ellenőrizhetem, hogy a vonalkód helyes-e?", "Olvassa be a kinyomtatott példányt több telefonnal vagy szkennerrel, és győződjön meg róla, hogy a beolvasott adatok pontosan megegyeznek a megadott adatokkal."]
  ],
  body: `
<p>Nincs bosszantóbb annál, mint amikor egy több száz példányban kinyomtatott vonalkódról kiderül, hogy nem lehet beolvasni. A jó hír az, hogy az ok általában egyszerű, és könnyen megelőzhető. Íme a hét leggyakoribb ok.</p>

<h2>1. Túl alacsony a színkontraszt</h2>
<p>A szkenner a sötét és a világos közötti különbséget olvassa. A fehéren lévő világosszürke vagy a feketén lévő sötétkék vonalkód nehezen különböztethető meg. <strong>Megoldás:</strong> használjon sötét színt világos háttéren. A fehéren fekete a legbiztonságosabb választás.</p>

<h2>2. Fordított színek vagy piros szín</h2>
<p>A sötét háttéren lévő világos vonalkódot nem minden szkenner támogatja. Ráadásul sok pénztári szkenner piros fényt használ, így a piros vonalak ugyanolyannak látszanak, mint a fehér háttér. <strong>Megoldás:</strong> kerülje a piros színt a vonalkód vonalainál vagy moduljainál, és ne fordítsa meg a színeket.</p>

<h2>3. Túl kicsi a méret</h2>
<p>A kamerának elegendő pixelre van szüksége ahhoz, hogy minden modult felismerjen. <strong>Megoldás:</strong> nagyítsa fel a vonalkódot. A közelről beolvasott QR Code esetén legalább körülbelül 2 × 2 cm-es méretet használjon. Tekintse meg a <a href="/artikel/ukuran-barcode-untuk-dicetak">nyomtatási méretekről szóló útmutatót</a>.</p>

<h2>4. Nincs csendes zóna</h2>
<p>A képhez, szöveghez vagy a papír széléhez tapadó vonalkódot nehéz elkülöníteni a környezetétől. <strong>Megoldás:</strong> hagyjon üres helyet a vonalkód körül, különösen a vonalas vonalkód bal és jobb oldalán.</p>

<h2>5. Elmosódott vagy torz kép</h2>
<p>A kis képből felnagyított, gyenge minőségű JPG-ként mentett vagy aránytalanul széthúzott vonalkód elveszíti a formáját. <strong>Megoldás:</strong> töltse le nagyobb modulmérettel, PNG formátumban, és a méretet mindig arányosan módosítsa.</p>

<h2>6. Hibás vagy a típushoz nem illő adatok</h2>
<p>Minden vonalkódtípusnak megvannak a maga szabályai. Az EAN-13 például csak 12 vagy 13 számjegyet fogad el, helyes ellenőrző számjeggyel. Az elgépelt hivatkozás miatt is előfordul, hogy a QR Code beolvasható, de nem nyit meg semmit. <strong>Megoldás:</strong> nyomtatás előtt ellenőrizze az adatokat. Az <a href="/">I Need Barcode</a> generátor üzenetet jelenít meg, ha az adatok nem felelnek meg a kiválasztott vonalkódtípus szabályainak.</p>

<h2>7. Felület és megvilágítás</h2>
<p>A fényes anyagok, az átlátszó műanyag, a hajtások és az ívelt felületek visszaverhetik a fényt, vagy eltorzíthatják a vonalkód alakját. <strong>Megoldás:</strong> nyomtasson sík, nem fényes felületre, és tesztelje a valós fényviszonyok között.</p>

<h2>A dizájnos QR Code-okról</h2>
<p>Az alakkal, színnel vagy kerettel ellátott QR Code továbbra is beolvasható, amíg a sarkokban lévő három jelölőnégyzet ép, és a kontraszt elegendő. Bővebben a <a href="/artikel/desain-qr-code-kreatif">kreatív, mégis olvasható QR Code-dizájnról</a> szóló cikkben olvashat.</p>
<p>A legjobb szokás: <strong>mindig teszteljen egy próbanyomatot</strong> több telefonnal és szkennerrel, mielőtt nagy mennyiségben nyomtatna.</p>
`
};
