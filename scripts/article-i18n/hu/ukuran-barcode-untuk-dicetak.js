// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "A vonalkód megfelelő mérete és felbontása nyomtatáshoz",
  desc: "A túl kicsi vagy elmosódott vonalkódot nehéz beolvasni. Ismerje meg a minimális méretet, a beolvasási távolság szabályát és a nyomtatáshoz biztonságos képfelbontást.",
  tags: ["Útmutató", "Nyomtatás"],
  coverCaption: "Címkenyomtató vonalkódokat nyomtat csomagokhoz és csomagolásokhoz.",
  inlineCaption: "A címke mérete határozza meg, mekkora vonalkód nyomtatható rá.",
  faq: [
    ["Mekkora a QR Code minimális nyomtatási mérete?", "Közelről történő beolvasáshoz körülbelül 2 × 2 cm a biztonságos határ. Nagyobb távolsághoz használjon körülbelül 10 : 1 arányt a beolvasási távolság és a QR Code szélessége között."],
    ["Mekkora az EAN-13 vonalkód szabványos mérete?", "Az EAN-13 szabványos mérete körülbelül 37,3 × 25,9 mm. Ez körülbelül 80%-ig kicsinyíthető vagy 200%-ig nagyítható."],
    ["Miért elmosódott a vonalkód nyomtatás után?", "Általában azért, mert a kép kicsi volt, és felnagyították, vagy gyenge minőségű JPG-ként mentették. Töltse le nagyobb modulmérettel, PNG formátumban."]
  ],
  body: `
<p>A képernyőn jól mutató vonalkód nyomtatás után nem feltétlenül olvasható. A túl kicsi méret, az alacsony felbontás vagy a szétfolyó tinta miatt a szkenner nem tudja beolvasni. Íme egy útmutató, hogy nyomatai olvashatók maradjanak.</p>

<h2>Ismerje meg a modult</h2>
<p>A <strong>modul</strong> a vonalkód legkisebb egysége, vagyis egy apró négyzet a QR Code-ban, vagy a legkeskenyebb vonal a vonalas vonalkódban. A modulméret határozza meg, mennyire könnyen olvasható a vonalkód. Az <a href="/">I Need Barcode</a> oldalon a modulméret a Beállítások részben adható meg: minél nagyobb az érték, annál nagyobb és élesebb a letöltött kép.</p>

<h2>A QR Code minimális mérete</h2>
<ul>
  <li>Közelről történő beolvasáshoz (például névjegykártyán vagy termékcímkén) körülbelül <strong>2 × 2 cm</strong> a biztonságos határ.</li>
  <li>Alkalmazza a körülbelül <strong>10 : 1</strong> arányszabályt: a beolvasási távolság nagyjából a QR Code szélességének tízszerese. A 2 méterről beolvasott plakáton legalább körülbelül 20 cm-es QR Code-ot használjon.</li>
  <li>Minél több adatot tárol, annál sűrűbb a mintázat, ezért nagyobb méretre van szükség.</li>
</ul>

<h2>A termékvonalkódok mérete</h2>
<p>Az <a href="/?type=ean13">EAN-13</a> szabványos mérete körülbelül 37,3 × 25,9 mm (100%). Ez körülbelül 80%-ig kicsinyíthető vagy 200%-ig nagyítható. Ne vágja túl alacsonyra a vonalak magasságát, mert a pénztári szkennernek helyre van szüksége ahhoz, hogy különböző szögekből olvashasson.</p>

<h2>Képfelbontás</h2>
<ul>
  <li>Nyomtatáshoz törekedjen arra, hogy minden modul <strong>több teljes pixelből</strong> álljon, ne pixeltöredékekből. Letöltéskor válasszon nagyobb modulméretet, majd kicsinyítse le a tervezőprogramban, és ne fordítva.</li>
  <li>Kerülje a kis vonalkódképek felnagyítását, mert a négyzetek szélei elmosódottá vagy recéssé válnak.</li>
  <li>Mentse PNG formátumban, hogy a színek és a szélek ne romoljanak el, mint a JPG esetében.</li>
</ul>

<h2>Csendes zóna</h2>
<p>Minden vonalkódnak szüksége van maga körül üres helyre, amelyet <strong>csendes zónának</strong> (quiet zone) neveznek. QR Code esetén ez ideálisan négy modul széles. Vonalas vonalkódnál a bal és jobb oldali üres hely nagyon fontos. Ne helyezzen túl közel szöveget, dizájnvonalakat vagy a csomagolás szélét.</p>

<h2>Színek és anyagok</h2>
<ul>
  <li>Használjon sötét színt a vonalkódhoz és világos színt a háttérhez.</li>
  <li>Kerülje a fényes vagy átlátszó anyagokat, mert a fényvisszaverődés zavarhatja a kamerát.</li>
  <li>Mindig nyomtasson egy mintapéldányt, és tesztelje több telefonnal vagy szkennerrel, mielőtt nagy mennyiségben nyomtatna.</li>
</ul>
<p>Ha a vonalkódot továbbra is nehéz beolvasni, nézze meg a <a href="/artikel/barcode-tidak-bisa-dipindai">7 ok, amiért a vonalkód nem olvasható be</a> című cikket.</p>
`
};
