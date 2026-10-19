// apa-itu-qr-code
module.exports = {
  title: "Mi az a QR Code, és hogyan működik?",
  desc: "A QR Code hivatkozást, szöveget, sőt WiFi-adatokat is tárolhat, és akkor is olvasható marad, ha részben sérült. Így működik, és ezek az előnyei.",
  tags: ["Alapok", "QR Code"],
  coverCaption: "A QR Code közvetlenül a telefon kamerájával beolvasható.",
  inlineCaption: "Minden QR Code apró fekete és fehér négyzetekből áll.",
  faq: [
    ["Lejárhat egy QR Code?", "A statikus QR Code soha nem jár le, mert az adatok közvetlenül a képbe vannak ágyazva. A dinamikus QR Code működése leállhat, ha a hivatkozást biztosító szolgáltatás megszűnik, vagy lejár az előfizetés."],
    ["Mennyi adatot tárolhat egy QR Code?", "A QR Code legnagyobb verziója akár 7.089 számjegyet vagy körülbelül 2.953 bájtot tárolhat. Minél kevesebb azonban az adat, annál könnyebben beolvasható a QR Code."],
    ["Olvasható marad a QR Code, ha részben sérült?", "Igen. A hibajavításnak köszönhetően a QR Code akkor is olvasható marad, ha körülbelül 7–30%-a sérült, attól függően, hogy L, M, Q vagy H hibajavítási szintet használnak."]
  ],
  body: `
<p>A QR Code (Quick Response Code) egy négyzet alakú 2D vonalkód, amely apró fekete és fehér négyzetekből áll. A vonalas vonalkóddal ellentétben, amely csak egy tucatnyi számjegyet tárol, a QR Code képes weboldal-hivatkozást, hosszú szöveget, telefonszámot, névjegyet, sőt WiFi-hálózati adatokat is tárolni.</p>
<p>A QR Code-ot 1994-ben fejlesztette ki a japán Denso Wave vállalat, hogy nyomon kövesse a járműalkatrészeket a gyárakban. Ma a QR Code mindenhol jelen van, a digitális fizetéstől az éttermi étlapokig, mert közvetlenül a telefon kamerájával beolvasható.</p>

<h2>A QR Code részei</h2>
<ul>
  <li><strong>Három nagy négyzet a sarkokban</strong> (finder pattern): segít a kamerának megtalálni a QR Code-ot és meghatározni az irányát, így akkor is olvasható marad, ha ferdén vagy fejjel lefelé olvassák be.</li>
  <li><strong>Igazítási minta</strong> (alignment pattern): egy kis négyzet, amely segít beolvasni a meghajlott vagy szögből látott QR Code-ot.</li>
  <li><strong>Adatterület</strong>: az apró négyzetek, amelyek az Ön által tárolt információt tartalmazzák.</li>
  <li><strong>Csendes zóna</strong> (quiet zone): üres terület a QR Code körül, hogy könnyen elkülöníthető legyen a háttértől.</li>
</ul>

<h2>Mennyi adatot tárolhat?</h2>
<p>A QR Code-nak 40 méretverziója van. A legnagyobb verzió akár 7.089 számjegyet vagy körülbelül 2.953 bájt adatot tárolhat. A gyakorlatban minél kevesebb adatot tárol, annál nagyobbak a négyzetek, és annál könnyebb beolvasni a QR Code-ot. Ezért a rövid hivatkozás jobb, mint a nagyon hosszú.</p>

<h2>Sérülten is olvasható marad</h2>
<p>A QR Code hibajavítást (error correction) használ. Négy szint létezik:</p>
<ul>
  <li><strong>L</strong>: az adatok helyreállíthatók, ha a QR Code körülbelül 7%-a sérült.</li>
  <li><strong>M</strong>: körülbelül 15%. Ez a szokásos, kiegyensúlyozott választás.</li>
  <li><strong>Q</strong>: körülbelül 25%.</li>
  <li><strong>H</strong>: körülbelül 30%, olyan QR Code-hoz ajánlott, amelyre logó kerül, vagy amelyet könnyen szennyeződő helyre nyomtatnak.</li>
</ul>
<p>Minél magasabb a hibajavítás szintje, annál több négyzetre van szükség, így a QR Code mintázata sűrűbbnek tűnik.</p>

<h2>Mit lehet tárolni egy QR Code-ban?</h2>
<ul>
  <li>Weboldal, webáruház vagy űrlap hivatkozását.</li>
  <li>WiFi-adatokat, így a vendégek a jelszó begépelése nélkül csatlakozhatnak. Nézze meg a <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a> útmutatót.</li>
  <li>Digitális névjegykártyát (vCard), e-mailt, SMS-t és WhatsApp-csevegést.</li>
  <li>Helyszínt a térképen és rendezvény időpontját.</li>
</ul>

<h2>Statikus és dinamikus QR Code</h2>
<p>A közvetlenül az adatokból készült QR Code-ot <strong>statikus QR Code</strong>-nak nevezik: a tartalma a képbe van ágyazva, és nem módosítható, viszont soha nem is jár le. A <strong>dinamikus</strong> QR Code egy szolgáltatás rövid hivatkozását tartalmazza, amely aztán az Ön céloldalára irányít; a cél módosítható, de a QR Code működésképtelenné válik, ha a szolgáltatás megszűnik. A legtöbb igényhez a statikus QR Code is elegendő, és hosszú távon biztonságosabb.</p>

<p>Szeretné kipróbálni? Készítsen most <a href="/?type=qrcode">ingyenes QR Code-ot</a>, vagy olvassa el, <a href="/artikel/cara-membuat-qr-code-gratis">hogyan készíthet QR Code-ot 3 lépésben</a>.</p>
`
};
