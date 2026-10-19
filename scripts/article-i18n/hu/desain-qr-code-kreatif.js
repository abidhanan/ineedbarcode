// desain-qr-code-kreatif
module.exports = {
  title: "Kreatív QR Code-dizájn, amely továbbra is beolvasható",
  desc: "A QR Code lehet szív vagy kör alakú, kaphat keretet és színeket. Ismerje meg azokat a szabályokat, amelyekkel a dizájn vonzó marad, és közben könnyen beolvasható.",
  tags: ["Dizájn", "QR Code"],
  coverCaption: "A színek vonzóbbá teszik a QR Code-ot, ha a kontraszt erős marad.",
  inlineCaption: "A QR Code-dizájnt nyomtatás előtt mindig érdemes tesztelni.",
  faq: [
    ["Beolvasható a szív alakú QR Code?", "Igen. Az eredeti QR Code épen marad középen, a többi pedig csak díszítő minta. Amíg a kontraszt erős és a méret elegendő, a QR Code olvasható marad."],
    ["Milyen színek biztonságosak egy QR Code-hoz?", "Sötét színek, például fekete, sötétkék, sötétzöld, lila vagy sötétbarna, fehér vagy nagyon világos háttéren."],
    ["Tehetek szöveget vagy keretet a QR Code-ra?", "Igen. Az „OLVASS BE” jellegű felhívást tartalmazó keret kifejezetten segít megérteni a QR Code funkcióját, amíg a keret nem takarja el a QR Code-ot."]
  ],
  body: `
<p>A fekete-fehér QR Code funkcionális, de a csomagolásokon, meghívókon vagy promóciós anyagokon gyakran merevnek hat. Egy kis dizájnnal a QR Code vonzóbb lehet anélkül, hogy elveszítené a funkcióját. A kulcs annak megértése, hogy mely részek módosíthatók, és melyeknek kell épen maradniuk.</p>

<h2>Külső forma: szív, kör és egyebek</h2>
<p>A <a href="/?type=qrcode">QR Code generátor</a> Dizájn részében olyan formák közül választhat, mint a kör, a szív, a hatszög, a nyolcszög, a csillag vagy a rombusz. Az eredeti QR Code középen marad, a többi részt pedig díszítő minta tölti ki, amíg el nem éri a kiválasztott formát. A díszítő minta nem tartalmaz adatot, így nem zavarja a beolvasást, amíg az eredeti QR Code körül van üres hely.</p>

<h2>Pontstílus</h2>
<p>A QR Code négyzetei lekerekített formákká vagy kerek pontokká alakíthatók. Hogy könnyen beolvasható maradjon, a sarkokban lévő három nagy négyzetnek (finder pattern) érdemes teljes négyzetként megmaradnia, mert a kamera először ezeket keresi. A generátorunk ezeket a részeket mindig teljes négyzetként rajzolja meg, legfeljebb lekerekített sarkokkal, függetlenül attól, hogy milyen pontstílust választ.</p>

<h2>Színek</h2>
<ul>
  <li>Használjon <strong>sötét</strong> színt a QR Code-hoz és <strong>világos</strong> színt a háttérhez. A sötétkék, sötétzöld, lila vagy sötétbarna általában biztonságos.</li>
  <li>Kerülje a halvány színeket a QR Code-nál, például a sárgát, a halvány rózsaszínt vagy a világosszürkét.</li>
  <li>Ne fordítsa meg a színeket sötét háttéren lévő világos QR Code-ra, mert nem minden beolvasó alkalmazás támogatja.</li>
</ul>

<h2>Keretek és felhívások</h2>
<p>Az olyan felhívást tartalmazó keret, mint az „OLVASS BE”, a „MENÜ” vagy a „SCAN WIFI”, bizonyítottan segít az embereknek megérteni a QR Code funkcióját. Választhat alsó címkés, felső címkés, sarok-, buborék-, kör- vagy szalagkeretet, majd módosíthatja a feliratot és a színt.</p>

<h2>Szabályok, hogy a dizájn olvasható maradjon</h2>
<ol>
  <li>Tartson erős <strong>kontrasztot</strong> a QR Code és a háttér között.</li>
  <li>A sarkokban lévő <strong>három jelölőnégyzet</strong> maradjon jól látható és fedetlen.</li>
  <li>Hagyjon <strong>üres helyet</strong> a QR Code és a keret körül.</li>
  <li>Ne kicsinyítse túlzottan a dizájnnal ellátott QR Code-ot. Az olyan formák, mint a szív, az eredeti QR Code területét a kép teljes méreténél kisebbé teszik.</li>
  <li>Nyomtatás előtt <strong>tesztelje</strong> több telefonnal.</li>
</ol>

<p>Ha a dizájnt nehéz beolvasni, a <strong>Visszaállítás</strong> gombbal állítsa vissza egyenként az alapbeállításokat, hogy megtalálja az okot. A további gyakori okokról a <a href="/artikel/barcode-tidak-bisa-dipindai">7 ok, amiért a vonalkód nem olvasható be</a> című cikkben olvashat.</p>
`
};
