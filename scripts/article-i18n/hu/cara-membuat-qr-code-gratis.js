// cara-membuat-qr-code-gratis
module.exports = {
  title: "Ingyenes QR Code készítése 3 lépésben",
  desc: "Gyakorlati útmutató QR Code készítéséhez hivatkozáshoz, WiFi-hez, névjegyhez vagy WhatsApp-hoz alkalmazás és regisztráció nélkül, tippekkel a könnyű beolvasáshoz.",
  tags: ["Útmutató", "QR Code"],
  coverCaption: "Hivatkozáshoz, WiFi-hez vagy névjegyhez kész QR Code.",
  inlineCaption: "Elég megnyitni a böngészőt laptopon vagy telefonon, további alkalmazások nélkül.",
  faq: [
    ["Használható üzleti célra az ingyenesen készített QR Code?", "Igen. Az Ön által készített statikus QR Code szabadon felhasználható csomagoláson, szórólapon, étlapon vagy promóciós anyagokon, vízjel és licencdíj nélkül."],
    ["Módosítható a QR Code tartalma a nyomtatás után?", "A statikus QR Code nyomtatás után nem módosítható. Ha a tartalom valószínűleg változni fog, irányítsa a QR Code-ot egy olyan oldalra, amelynek tartalmát Ön maga frissítheti, például a saját weboldala egyik oldalára."],
    ["Melyik képformátum a legjobb a QR Code nyomtatásához?", "A PNG, mert a négyzetek szélei élesek maradnak. Töltse le elég nagy modulmérettel, majd szükség esetén kicsinyítse le egy tervezőprogramban, és ne fordítva."]
  ],
  body: `
<p>QR Code készítéséhez ma már nincs szükség külön alkalmazásra vagy előfizetésre. Egy olyan online generátorral, mint az <a href="/">I Need Barcode</a>, másodpercek alatt elkészítheti a QR Code-ot közvetlenül a böngészőből, akár telefonon, akár laptopon.</p>

<h2>1. lépés: Válassza ki a vonalkód típusát</h2>
<p>Nyissa meg a <a href="/?type=qrcode">QR Code generátort</a>, és a Vonalkód típusa részben válassza a <strong>QR Code</strong> lehetőséget. A QR Code a legmegfelelőbb választás, ha a vonalkódot telefonkamerával fogják beolvasni.</p>

<h2>2. lépés: Adja meg az adatokat</h2>
<p>Válassza ki az igényeinek megfelelő adattípust:</p>
<ul>
  <li><strong>URL</strong>: weboldal, webáruház, Google Maps vagy űrlap hivatkozása.</li>
  <li><strong>WiFi</strong>: hálózatnév és jelszó, hogy a vendégek gépelés nélkül csatlakozhassanak.</li>
  <li><strong>Névjegy</strong>: név, telefonszám, e-mail és cég digitális névjegykártya formátumban.</li>
  <li><strong>WhatsApp</strong>: telefonszám és kezdő üzenet, hogy az ügyfelek azonnal csevegést nyithassanak Önnel.</li>
  <li><strong>Szöveg, e-mail, telefon, SMS, helyszín, esemény</strong> egyéb igényekhez.</li>
</ul>
<p>Az előnézet gépelés közben azonnal frissül, így letöltés előtt ellenőrizheti az eredményt.</p>

<h2>3. lépés: Állítsa be a megjelenést, majd töltse le</h2>
<p>A Beállítások részben állítsa be a modulméretet (minél nagyobb, annál élesebb nyomtatáskor), a színt és a margót. A Dizájn részben megadhat olyan alakot, mint a kör vagy a szív, pontstílust, valamint keretet olyan felirattal, mint az „OLVASS BE”. Ha elkészült, kattintson a <strong>PNG letöltése</strong> gombra.</p>

<h2>Tippek a könnyen beolvasható QR Code-hoz</h2>
<ul>
  <li><strong>Nyomtatás előtt teszteljen.</strong> Olvassa be két-három különböző telefonnal, ésszerű távolságból.</li>
  <li><strong>Használjon erős kontrasztot.</strong> A világos háttéren lévő sötét szín a legbiztonságosabb. Kerülje a sötét háttéren lévő világos QR Code-ot.</li>
  <li><strong>Ne legyen túl kicsi.</strong> Közelről történő beolvasáshoz a körülbelül 2 × 2 cm-es méret a biztonságos alsó határ. Minél nagyobb a beolvasási távolság, annál nagyobb méret kell. Olvassa el a <a href="/artikel/ukuran-barcode-untuk-dicetak">nyomtatandó vonalkódok méretéről</a> szóló cikket is.</li>
  <li><strong>Hagyjon üres helyet</strong> a QR Code körül, hogy ne érjen hozzá más képekhez vagy szövegekhez.</li>
  <li><strong>Használjon rövid hivatkozást.</strong> A kevesebb adat ritkább, könnyebben olvasható mintázatot eredményez.</li>
</ul>

<h2>Sok QR Code-ra van szüksége egyszerre?</h2>
<p>Kapcsolja be a <strong>Tömeges</strong> módot, írjon soronként egy adatot (legfeljebb 100 sort), majd töltse le az összeset egyetlen ZIP-fájlban. Ez a módszer leltárcímkékhez, résztvevői kártyákhoz vagy rendezvényjegyekhez ideális.</p>
`
};
