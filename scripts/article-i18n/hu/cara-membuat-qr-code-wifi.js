// cara-membuat-qr-code-wifi
module.exports = {
  title: "WiFi QR Code készítése, hogy a vendégeknek ne kelljen begépelniük a jelszót",
  desc: "A vendégeknek elég beolvasniuk egy QR Code-ot, hogy csatlakozzanak a WiFi-hez. Kávézókba, irodákba, szálláshelyekre és otthonokba ideális. Így készítheti el és helyezheti ki.",
  tags: ["Útmutató", "QR Code"],
  coverCaption: "A router WiFi-adatai egyetlen QR Code-ban tárolhatók.",
  inlineCaption: "A kávézó vendégei jelszó begépelése nélkül, azonnal csatlakozhatnak.",
  faq: [
    ["Minden telefon be tudja olvasni a WiFi QR Code-ot?", "Az iOS 11 vagy újabb rendszerű iPhone-ok és a legtöbb Android 10 vagy újabb rendszerű készülék beépített kamerája közvetlenül beolvassa. Régebbi telefonokon QR-olvasó alkalmazásra lehet szükség."],
    ["Biztonságos a WiFi QR Code?", "Bárki, aki beolvassa a QR Code-ot, csatlakozhat az Ön WiFi-hálózatához. Ezért használjon vendéghálózatot, és ne helyezze ki a magánhálózat QR Code-ját nyilvános helyen."],
    ["Mi a teendő, ha megváltoztatom a WiFi jelszavát?", "Készítse el és nyomtassa ki újra a WiFi QR Code-ot, mert a régi QR Code még a régi jelszót tartalmazza."]
  ],
  body: `
<p>Egy hosszú WiFi-jelszót betűzni a vendégeknek gyakran fáradságos, különösen, ha nagybetűket, számokat és szimbólumokat is tartalmaz. A <strong>WiFi QR Code</strong> segítségével a vendégeknek csak a telefon kameráját kell a QR Code-ra irányítaniuk, és máris csatlakoznak.</p>

<h2>Hogyan működik a WiFi QR Code?</h2>
<p>A WiFi QR Code a hálózat nevét (SSID), a biztonsági típust és a jelszót egy speciális, a telefonok által felismert formátumban tárolja, például: <code>WIFI:T:WPA;S:HalozatNeve;P:Jelszo;;</code>. Az iPhone (iOS 11 vagy újabb) és a legtöbb Android-készülék (Android 10 vagy újabb) beépített kamerája közvetlenül, további alkalmazás nélkül beolvassa.</p>

<h2>Az elkészítés lépései</h2>
<ol>
  <li>Nyissa meg a <a href="/?type=qrcode">QR Code generátort</a>, és az Adatok megadása részben válassza a <strong>WiFi</strong> fület.</li>
  <li>Írja be a <strong>hálózat nevét</strong> pontosan úgy, ahogyan a WiFi-listában megjelenik, a kis- és nagybetűket is beleértve.</li>
  <li>Írja be a <strong>jelszót</strong>, majd válassza ki a biztonsági típust. A legtöbb otthoni és irodai router WPA/WPA2/WPA3-at használ.</li>
  <li>Jelölje be a <strong>Rejtett hálózat</strong> lehetőséget, ha a WiFi-hálózat neve nem jelenik meg a listában.</li>
  <li>Adjon hozzá keretet például „SCAN WIFI” felirattal, hogy a vendégek tudják, mire szolgál, majd töltse le a PNG-t.</li>
</ol>

<h2>Hova érdemes kihelyezni?</h2>
<ul>
  <li>Kis kártyára a kávézó vagy étterem asztalán.</li>
  <li>A váróterem, a recepció vagy az irodai tárgyaló falára.</li>
  <li>A szálláshely szobájában, az ajtó vagy a tévé mellé ragasztva.</li>
  <li>Otthon a router aljára, hogy a család könnyen csatlakoztathassa az új eszközöket.</li>
</ul>

<h2>Biztonsági tippek</h2>
<ul>
  <li>Használjon <strong>vendéghálózatot</strong> (guest network), ha a routere támogatja, így a vendégek nem kerülnek ugyanarra a hálózatra, mint az irodai számítógépek.</li>
  <li>Ha megváltoztatja a WiFi jelszavát, készítse el és nyomtassa ki újra a QR Code-ot, mert a régi QR Code a régi jelszót tartalmazza.</li>
  <li>Ne helyezze ki a magánhálózat WiFi QR Code-ját olyan nyilvános helyen, ahol bárki lefényképezheti.</li>
</ul>

<h2>Ha a QR Code nem csatlakozik</h2>
<p>Ellenőrizze újra a hálózatnév és a jelszó írásmódját, mert egyetlen elírt betű miatt is meghiúsulhat a csatlakozás. Győződjön meg arról is, hogy a kiválasztott biztonsági típus megfelel a router beállításainak. Egyéb beolvasási problémák esetén olvassa el, <a href="/artikel/barcode-tidak-bisa-dipindai">miért nem olvasható be a vonalkód</a>.</p>
`
};
