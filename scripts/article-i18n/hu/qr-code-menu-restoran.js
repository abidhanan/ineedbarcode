// qr-code-menu-restoran
module.exports = {
  title: "QR Code éttermi étlaphoz: teljes útmutató",
  desc: "A QR Code-os digitális étlap megkönnyíti a vendégek dolgát, és nyomtatási költséget takarít meg. Így készítheti el, így készítheti elő az étlapot, és így helyezheti ki az asztalokra.",
  tags: ["Üzlet", "QR Code"],
  coverCaption: "Az asztalon lévő QR Code egyenesen a digitális étlapra vezeti a vendégeket.",
  inlineCaption: "Helyezze a QR Code-ot olyan helyre, amely a székről könnyen elérhető.",
  faq: [
    ["Mit érdemes használni digitális étlaphoz: PDF-et vagy weboldalt?", "A weboldal általában kényelmesebben olvasható telefonon, és gyorsabban betöltődik. PDF akkor használható, ha kis méretű, és a szöveg elég nagy a képernyőn."],
    ["Mekkora legyen az asztali étlap QR Code-ja?", "Körülbelül 3–5 cm elegendő a székről történő beolvasáshoz. Használjon kiömlésálló, nem túl fényes anyagot."],
    ["Újra kell nyomtatni a QR Code-ot, ha változik az étlap?", "Nem, amíg a hivatkozás ugyanaz marad. Elég frissíteni annak az oldalnak vagy étlapfájlnak a tartalmát, amelyre a QR Code mutat."]
  ],
  body: `
<p>A QR Code-os digitális étlap mára megszokottá vált a kávézókban és éttermekben. A vendégeknek csak be kell olvasniuk az asztalon lévő QR Code-ot, hogy lássák az ételek listáját, az árakat és a fotókat. A tulajdonosok számára ez a megoldás nyomtatási költséget takarít meg, és megkönnyíti az árak vagy az étlap módosítását.</p>

<h2>A QR Code-os étlap előnyei</h2>
<ul>
  <li><strong>Könnyen frissíthető</strong>: módosíthatja az árakat vagy új ételeket vehet fel anélkül, hogy újranyomtatná az étlapot.</li>
  <li><strong>Költségkímélő</strong>: elég minden asztalra egy kis QR Code-ot nyomtatni.</li>
  <li><strong>Informatívabb</strong>: megjeleníthet fotókat, leírásokat és olyan címkéket, mint a csípős vagy a vegetáriánus.</li>
  <li><strong>Támogatja az online rendelést</strong>: a vendégeket rendelési űrlapra vagy WhatsAppra irányíthatja.</li>
</ul>

<h2>1. lépés: Készítse elő az online étlapot</h2>
<p>A QR Code csak egy hivatkozást tartalmaz, ezért olyan étlapra van szüksége, amely az interneten megnyitható. Lehetőség például egy oldal a saját weboldalán, egy nyilvánosan megosztott PDF-fájl egy online tárhelyen, vagy egy katalógusoldal egy rendelési platformon. Győződjön meg arról, hogy az étlap kényelmesen olvasható telefon képernyőjén: elég nagy betűméret, nem túl nagy méretű fotók és egyértelmű árak.</p>

<h2>2. lépés: Készítse el a QR Code-ot</h2>
<ol>
  <li>Másolja ki az étlap hivatkozását.</li>
  <li>Nyissa meg a <a href="/?type=qrcode">QR Code generátort</a>, válassza az <strong>URL</strong> fület, majd illessze be a hivatkozást.</li>
  <li>A Dizájn részben adjon hozzá „MENÜ” vagy „OLVASSA BE AZ ÉTLAPÉRT” feliratú keretet.</li>
  <li>Igazítsa a színeket az étterem arculatához, de továbbra is sötét színt használjon világos háttéren.</li>
  <li>Töltse le a PNG-t a nyomtatáshoz elég nagy modulmérettel.</li>
</ol>
<p>Olyan hivatkozást használjon, amely nem fog változni. Ha az étlap más címre költözik, a már kinyomtatott QR Code nem frissíthető. A magyarázatot a <a href="/artikel/apa-itu-qr-code">mi az a QR Code</a> című cikkben találja.</p>

<h2>3. lépés: Nyomtassa ki és helyezze ki</h2>
<ul>
  <li>Legalább körülbelül 3–5 cm-es méretben nyomtassa, hogy a székről könnyen beolvasható legyen.</li>
  <li>Használjon kiömlésálló anyagot, például vinilmatricát vagy laminált kártyát túlzott fényesség nélkül.</li>
  <li>Helyezze könnyen elérhető helyre, például az asztal közepén álló akriltartóba.</li>
  <li>Írja az asztal számát a QR Code mellé, ha a vendégek csevegőn keresztül rendelnek.</li>
</ul>

<h2>Ne feledkezzen meg a telefon nélküli vendégekről</h2>
<p>Tartson egy-két nyomtatott étlapot azoknak a vendégeknek, akiknél nincs telefon, lemerült az akkumulátoruk, vagy szívesebben olvasnak hagyományos étlapot.</p>
<p>A vendégek számára <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code-ot</a> is készíthet, és elhelyezheti az étlap QR Code-ja mellett.</p>
`
};
