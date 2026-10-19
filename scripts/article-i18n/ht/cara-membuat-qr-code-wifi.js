// cara-membuat-qr-code-wifi
module.exports = {
  title: "Kijan pou w Fè yon QR Code WiFi pou Envite yo pa Bezwen Tape Modpas la",
  desc: "Envite yo jis bezwen eskane yon QR Code pou yo konekte sou WiFi a. Li bon pou kafe, biwo, kote pou moun desann, ak lakay. Men kijan pou fè l e kijan pou mete l.",
  tags: ["Gid", "QR Code"],
  coverCaption: "Ou ka sere done WiFi routè a nan yon sèl QR Code.",
  inlineCaption: "Kliyan kafe a ka konekte touswit san yo pa tape modpas la.",
  faq: [
    ["Èske tout telefòn ka eskane yon QR Code WiFi?", "Kamera ki vini ak iPhone ki gen iOS 11 oswa plis ak pifò Android 10 oswa plis ka li l dirèkteman. Ansyen telefòn ka bezwen yon aplikasyon pou eskane QR."],
    ["Èske yon QR Code WiFi an sekirite?", "Nenpòt moun ki eskane QR Code sa a ka konekte sou WiFi ou. Se pou sa, sèvi ak yon rezo pou envite e pa mete QR Code yon rezo prive nan yon kote piblik."],
    ["Kisa pou w fè si yo chanje modpas WiFi a?", "Fè yon nouvo QR Code WiFi epi enprime l ankò, paske ansyen QR Code a toujou genyen ansyen modpas la."]
  ],
  body: `
<p>Eple yon modpas WiFi ki long bay envite souvan ennuiyan, sitou lè gen lèt majiskil, chif, ak senbòl ladan l. Avèk yon <strong>QR Code WiFi</strong>, envite yo jis bezwen vize QR Code a ak kamera telefòn yo epi yo konekte touswit.</p>

<h2>Kijan yon QR Code WiFi mache</h2>
<p>Yon QR Code WiFi sere non rezo a (SSID), kalite sekirite a, ak modpas la nan yon fòma espesyal telefòn yo rekonèt, pa egzanp <code>WIFI:T:WPA;S:NamaJaringan;P:Sandi;;</code>. Kamera ki vini ak iPhone (iOS 11 oswa plis) ak pifò Android (Android 10 oswa plis) ka li l dirèkteman, san okenn lòt aplikasyon.</p>

<h2>Etap pou fè l</h2>
<ol>
  <li>Louvri <a href="/?type=qrcode">jeneratè QR Code</a> a epi chwazi onglè <strong>WiFi</strong> a nan seksyon Ranpli done yo.</li>
  <li>Tape <strong>non rezo a</strong> egzakteman jan li parèt nan lis WiFi a, ak lèt majiskil ak miniskil yo.</li>
  <li>Tape <strong>modpas la</strong>, epi chwazi kalite sekirite a. Pifò routè lakay ak nan biwo sèvi ak WPA/WPA2/WPA3.</li>
  <li>Make <strong>Rezo kache</strong> si non WiFi ou a pa parèt nan lis la.</li>
  <li>Ajoute yon ankadreman ak yon tèks tankou "SCAN WIFI" pou envite yo konnen pou kisa li ye, epi telechaje PNG la.</li>
</ol>

<h2>Ki kote pou mete l?</h2>
<ul>
  <li>Yon ti kat sou tab yon kafe oswa yon restoran.</li>
  <li>Sou mi salon an, nan resepsyon an, oswa nan sal reyinyon biwo a.</li>
  <li>Nan chanm kote moun desann yo, kole bò pòt la oswa bò televizyon an.</li>
  <li>Anba routè a lakay ou, pou fanmi an ka konekte nouvo aparèy fasilman.</li>
</ul>

<h2>Konsèy sekirite</h2>
<ul>
  <li>Sèvi ak yon <strong>rezo pou envite</strong> (guest network) si routè ou a pèmèt sa, pou envite yo pa antre sou menm rezo ak òdinatè biwo a.</li>
  <li>Si yo chanje modpas WiFi a, fè yon nouvo QR Code epi enprime l ankò, paske ansyen QR Code a ap genyen ansyen modpas la.</li>
  <li>Pa mete yon QR Code WiFi pou yon rezo prive nan yon kote piblik kote nenpòt moun ka pran l an foto.</li>
</ul>

<h2>Si QR Code a pa konekte</h2>
<p>Verifye òtograf non rezo a ak modpas la ankò, paske yon sèl lèt ki pa bon ase pou telefòn nan pa rive konekte. Asire w tou kalite sekirite ou chwazi a koresponn ak paramèt routè a. Pou lòt pwoblèm eskanaj, li <a href="/artikel/barcode-tidak-bisa-dipindai">rezon ki fè yon barcode pa eskane</a>.</p>
`
};
