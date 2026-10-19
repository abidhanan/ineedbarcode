// qr-code-menu-restoran
module.exports = {
  title: "QR Code restorani menüü jaoks: põhjalik juhend",
  desc: "QR Code'iga digimenüü teeb klientide elu lihtsamaks ja säästab trükikulusid. Siit leiate, kuidas see luua, menüü ette valmistada ja lauale paigutada.",
  tags: ["Äri", "QR Code"],
  coverCaption: "Laual olev QR Code viib kliendid otse digimenüüsse.",
  inlineCaption: "Paigutage QR Code kohta, kuhu toolilt on lihtne ulatuda.",
  faq: [
    ["Mida on digimenüü jaoks parem kasutada: PDF-i või veebilehte?", "Veebilehte on telefonis tavaliselt mugavam lugeda ja see avaneb kiiremini. PDF-i võib kasutada, kui fail on väike ja tekst ekraanil piisavalt suur."],
    ["Kui suur peaks laual olev menüü QR Code olema?", "Umbes 3–5 cm on toolilt skannimiseks piisav. Kasutage materjali, mis peab vastu mahavalgunud jookidele ega ole liiga läikiv."],
    ["Kas menüü muutumisel tuleb QR Code uuesti printida?", "Ei, kui link jääb samaks. Piisab lehe või menüüfaili sisu uuendamisest, kuhu QR Code suunab."]
  ],
  body: `
<p>QR Code'iga digimenüü on tänapäeval kohvikutes ja restoranides tavaline. Klientidel piisab laual oleva QR Code'i skannimisest, et näha roogade loendit, hindu ja fotosid. Ettevõtte omanikele säästab see trükikulusid ning lihtsustab hindade või menüü muutmist.</p>

<h2>QR Code'iga menüü eelised</h2>
<ul>
  <li><strong>Lihtne uuendada</strong>: muutke hindu või lisage roogi menüüraamatut uuesti trükkimata.</li>
  <li><strong>Säästlik</strong>: piisab iga laua jaoks väikese QR Code'i printimisest.</li>
  <li><strong>Informatiivsem</strong>: näidake fotosid, kirjeldusi ja märgiseid, nagu „vürtsikas“ või „taimetoit“.</li>
  <li><strong>Toetab veebitellimusi</strong>: suunake kliendid tellimisvormile või WhatsAppi.</li>
</ul>

<h2>1. samm: valmistage menüü veebis ette</h2>
<p>QR Code sisaldab ainult linki, seega on teil vaja menüüd, mida saab internetis avada. Valikud on näiteks leht teie enda veebilehel, PDF-fail avalikult jagatud pilvesalvestuses või kataloogileht tellimisplatvormil. Veenduge, et menüüd on telefoni ekraanilt mugav lugeda: tekst piisavalt suur, fotod mitte liiga rasked ja hinnad selged.</p>

<h2>2. samm: looge QR Code</h2>
<ol>
  <li>Kopeerige oma menüü link.</li>
  <li>Avage <a href="/?type=qrcode">QR Code'i generaator</a>, valige vahekaart <strong>URL</strong> ja kleepige link.</li>
  <li>Lisage jaotises „Disain“ raam tekstiga „MENÜÜ“ või „SKANNI JA VAATA MENÜÜD“.</li>
  <li>Kohandage värvid restorani identiteediga, kuid kasutage endiselt tumedat värvi heledal taustal.</li>
  <li>Laadige alla PNG printimiseks piisavalt suure moodulisuurusega.</li>
</ol>
<p>Kasutage linki, mis ei muutu. Kui menüü kolib teisele aadressile, ei saa juba prinditud QR Code'i uuendada. Selgituse leiate artiklist <a href="/artikel/apa-itu-qr-code">mis on QR Code</a>.</p>

<h2>3. samm: printige ja paigutage</h2>
<ul>
  <li>Printige vähemalt umbes 3–5 cm suurusena, et seda oleks toolilt lihtne skannida.</li>
  <li>Kasutage mahavalgumisele vastupidavat materjali, näiteks vinüülkleebist või lamineeritud kaarti ilma liigse läiketa.</li>
  <li>Paigutage hõlpsasti ligipääsetavasse kohta, näiteks laua keskel olevasse akrüülhoidikusse.</li>
  <li>Lisage QR Code'i juurde laua number, kui kliendid tellivad vestluse kaudu.</li>
</ul>

<h2>Ärge unustage telefonita kliente</h2>
<p>Hoidke üks või kaks trükitud menüüd klientide jaoks, kellel pole telefoni kaasas, kelle aku on tühi või kellele meeldib rohkem lugeda paberist menüüd.</p>
<p>Samuti saate luua külalistele <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a>'i ja paigutada selle menüü QR Code'i kõrvale.</p>
`
};
