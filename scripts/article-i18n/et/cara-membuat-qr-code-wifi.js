// cara-membuat-qr-code-wifi
module.exports = {
  title: "Kuidas luua WiFi QR Code, et külalised ei peaks parooli sisestama",
  desc: "Külalistel piisab WiFi-ga ühendumiseks QR Code'i skannimisest. Sobib kohvikutele, kontoritele, majutusasutustele ja kodudele. Siit leiate, kuidas see luua ja üles panna.",
  tags: ["Juhendid", "QR Code"],
  coverCaption: "Ruuteri WiFi andmed saab salvestada ühte QR Code'i.",
  inlineCaption: "Kohviku külalised saavad kohe ühenduse luua ilma parooli sisestamata.",
  faq: [
    ["Kas kõik telefonid saavad WiFi QR Code'i skannida?", "iOS 11 või uuemaga iPhone'i sisseehitatud kaamera ja enamik Android 10 või uuemaga telefone loevad seda otse. Vanemad telefonid võivad vajada QR-skannimisrakendust."],
    ["Kas WiFi QR Code on turvaline?", "Igaüks, kes selle QR Code'i skannib, saab teie WiFi-ga ühenduse luua. Seepärast kasutage külalisvõrku ja ärge pange privaatvõrgu QR Code'i avalikku kohta."],
    ["Mida teha, kui WiFi parool muutub?", "Looge ja printige WiFi QR Code uuesti, sest vana QR Code sisaldab endiselt vana parooli."]
  ],
  body: `
<p>Pika WiFi parooli külalistele ette veerimine on sageli tülikas, eriti kui selles on suurtähti, numbreid ja sümboleid. <strong>WiFi QR Code</strong>'i abil piisab külalistel telefoni kaamera suunamisest QR Code'ile ja nad on kohe ühendatud.</p>

<h2>Kuidas WiFi QR Code töötab</h2>
<p>WiFi QR Code salvestab võrgu nime (SSID), turvatüübi ja parooli spetsiaalses vormingus, mille telefonid ära tunnevad, näiteks <code>WIFI:T:WPA;S:VorguNimi;P:Parool;;</code>. iPhone'i (iOS 11 või uuem) ja enamiku Androidi (Android 10 või uuem) sisseehitatud kaamera loeb seda otse, ilma lisarakendusteta.</p>

<h2>Kuidas seda luua</h2>
<ol>
  <li>Avage <a href="/?type=qrcode">QR Code'i generaator</a> ja valige jaotises „Andmed“ vahekaart <strong>WiFi</strong>.</li>
  <li>Sisestage <strong>võrgu nimi</strong> täpselt nii, nagu see WiFi loendis kuvatakse, sealhulgas suur- ja väiketähed.</li>
  <li>Sisestage <strong>parool</strong> ja valige turvatüüp. Enamik kodu- ja kontoriruutereid kasutab WPA/WPA2/WPA3.</li>
  <li>Märkige <strong>Peidetud võrk</strong>, kui teie WiFi nime loendis ei kuvata.</li>
  <li>Lisage raam tekstiga, näiteks „SCAN WIFI“, et külalised mõistaksid selle otstarvet, ja laadige alla PNG.</li>
</ol>

<h2>Kuhu see üles panna?</h2>
<ul>
  <li>Väike kaart kohviku või restorani lauale.</li>
  <li>Elutoa, vastuvõtu või kontori koosolekuruumi seinale.</li>
  <li>Majutusasutuse tuppa, kleebituna ukse või teleri lähedale.</li>
  <li>Kodu ruuteri alumisele küljele, et pereliikmed saaksid uusi seadmeid hõlpsasti ühendada.</li>
</ul>

<h2>Turvanõuanded</h2>
<ul>
  <li>Kasutage <strong>külalisvõrku</strong> (guest network), kui teie ruuter seda toetab, et külalised ei satuks samasse võrku kontori arvutitega.</li>
  <li>Kui WiFi parool muutub, looge ja printige QR Code uuesti, sest vana QR Code sisaldab vana parooli.</li>
  <li>Ärge pange privaatvõrgu WiFi QR Code'i avalikku kohta, kus igaüks saab sellest pilti teha.</li>
</ul>

<h2>Kui QR Code'iga ühendus ei õnnestu</h2>
<p>Kontrollige uuesti võrgu nime ja parooli õigekirja, sest ühe vale tähe tõttu ei õnnestu telefonil ühendust luua. Veenduge ka, et valitud turvatüüp vastab ruuteri seadetele. Muude skannimisprobleemide kohta lugege <a href="/artikel/barcode-tidak-bisa-dipindai">põhjused, miks vöötkood ei skanni</a>.</p>
`
};
