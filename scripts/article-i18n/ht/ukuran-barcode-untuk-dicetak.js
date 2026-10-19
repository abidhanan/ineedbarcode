// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Bon Gwosè ak Bon Rezolisyon pou Enprime yon Barcode",
  desc: "Yon barcode ki twò piti oswa ki flou difisil pou eskane. Aprann gwosè minimòm lan, règ distans pou eskane a, ak rezolisyon imaj ki an sekirite pou enprime.",
  tags: ["Gid", "Enpresyon"],
  coverCaption: "Yon enprimant etikèt ap enprime barcode pou koli ak anbalaj.",
  inlineCaption: "Gwosè etikèt la detèmine ki gwosè barcode la ka genyen lè ou enprime l.",
  faq: [
    ["Ki gwosè minimòm pou enprime yon QR Code?", "Pou yo eskane l de pre, anviwon 2 × 2 cm se limit ki an sekirite a. Pou yon distans ki pi long, sèvi ak yon rapò anviwon 10 : 1 ant distans pou eskane a ak lajè QR Code a."],
    ["Ki gwosè estanda yon barcode EAN-13?", "Gwosè estanda EAN-13 la se anviwon 37,3 × 25,9 mm. Ou ka redwi gwosè sa a jiska anviwon 80% oswa agrandi l jiska 200%."],
    ["Poukisa barcode la flou apre ou fin enprime l?", "Anjeneral se paske imaj la te piti epi yo agrandi l, oswa yo te sere l kòm JPG ki gen move kalite. Telechaje l ak yon gwosè modil ki pi gwo an fòma PNG."]
  ],
  body: `
<p>Yon barcode ki bèl sou ekran an pa vle di l ap lizib apre ou fin enprime l. Yon gwosè ki twò piti, yon rezolisyon ki ba, oswa yon lank ki gaye ka anpeche eskanè a li l. Men yon gid pou sa ou enprime yo rete lizib.</p>

<h2>Konprann sa yon modil ye</h2>
<p>Yon <strong>modil</strong> se pi piti inite yon barcode, sa vle di yon ti kare sou yon QR Code oswa liy ki pi mens lan sou yon barcode an liy. Gwosè modil la detèmine kijan barcode la fasil pou li. Sou <a href="/">I Need Barcode</a>, ou ka ajiste gwosè modil la nan seksyon Paramèt yo: plis valè a gwo, plis imaj ou telechaje a gwo e byen nèt.</p>

<h2>Gwosè minimòm yon QR Code</h2>
<ul>
  <li>Pou yo eskane l de pre (pa egzanp sou yon kat biznis oswa yon etikèt pwodui), yon gwosè anviwon <strong>2 × 2 cm</strong> se limit ki an sekirite a.</li>
  <li>Sèvi ak règ rapò anviwon <strong>10 : 1</strong> lan: distans pou eskane a se apeprè dis fwa lajè QR Code a. Pou yon afich yo eskane a 2 mèt distans, fè QR Code a omwen anviwon 20 cm.</li>
  <li>Plis done ou sere, plis desen an sere, kidonk li bezwen yon gwosè ki pi gwo.</li>
</ul>

<h2>Gwosè barcode pwodui</h2>
<p>Gwosè estanda <a href="/?type=ean13">EAN-13</a> la se anviwon 37,3 × 25,9 mm (100%). Ou ka redwi gwosè sa a jiska anviwon 80% oswa agrandi l jiska 200%. Evite koupe wotè liy yo twò kout, paske eskanè kès yo bezwen espas pou li l nan plizyè ang.</p>

<h2>Rezolisyon imaj la</h2>
<ul>
  <li>Pou enpresyon, fè efò pou chak modil desinen ak <strong>plizyè piksèl konplè</strong>, pa ak yon mòso piksèl. Chwazi yon gwosè modil ki pi gwo lè w ap telechaje, epi redwi l nan aplikasyon konsepsyon an, pa fè l nan lòt sans lan.</li>
  <li>Evite agrandi yon ti imaj barcode, paske rebò kare yo ap vin flou oswa an dan si.</li>
  <li>Sere l an fòma PNG pou koulè yo ak rebò yo pa domaje jan sa rive ak JPG.</li>
</ul>

<h2>Zòn trankil</h2>
<p>Chak barcode bezwen yon espas vid ozalantou l, yo rele l <strong>zòn trankil</strong> (quiet zone). Pou yon QR Code, idealman li ta dwe gen lajè kat modil. Pou yon barcode an liy, espas vid sou bò goch ak bò dwat la enpòtan anpil. Pa mete tèks, liy dekorasyon, oswa rebò anbalaj la twò pre.</p>

<h2>Koulè ak materyèl</h2>
<ul>
  <li>Sèvi ak yon koulè fonse pou barcode la ak yon koulè klè pou fon an.</li>
  <li>Evite materyèl ki klere oswa ki transparan, paske limyè ki reflete ka deranje kamera a.</li>
  <li>Toujou enprime yon egzanplè epi teste l ak plizyè telefòn oswa eskanè anvan ou enprime anpil.</li>
</ul>
<p>Si barcode ou a toujou difisil pou eskane, gade <a href="/artikel/barcode-tidak-bisa-dipindai">7 rezon ki fè yon barcode pa eskane</a>.</p>
`
};
