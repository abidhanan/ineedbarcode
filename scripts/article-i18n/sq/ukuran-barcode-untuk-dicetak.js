// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Madhësia dhe rezolucioni i duhur i barkodit për printim",
  desc: "Barkodi që është shumë i vogël ose i turbullt skanohet me vështirësi. Mësoni madhësitë minimale, rregullin e distancës së skanimit dhe rezolucionin e sigurt të imazhit për printim.",
  tags: ["Udhëzues", "Printim"],
  coverCaption: "Printeri i etiketave printon barkode për pako dhe paketime.",
  inlineCaption: "Madhësia e etiketës përcakton sa i madh mund të printohet barkodi.",
  faq: [
    ["Cila është madhësia minimale e QR Code për printim?", "Për skanim nga afër, rreth 2 × 2 cm është kufiri i sigurt. Për distanca më të mëdha, përdorni një raport prej rreth 10 : 1 midis distancës së skanimit dhe gjerësisë së QR Code."],
    ["Cila është madhësia standarde e barkodit EAN-13?", "Madhësia standarde e EAN-13 është rreth 37,3 × 25,9 mm. Kjo madhësi mund të zvogëlohet deri në rreth 80% ose të zmadhohet deri në 200%."],
    ["Pse barkodi del i turbullt pas printimit?", "Zakonisht sepse imazhi ishte i vogël dhe u zmadhua, ose u ruajt si JPG me cilësi të ulët. Shkarkojeni me madhësi më të madhe moduli në formatin PNG."]
  ],
  body: `
<p>Barkodi që duket bukur në ekran nuk do të thotë se do të lexohet pasi të printohet. Madhësia shumë e vogël, rezolucioni i ulët ose boja e përhapur mund ta pengojnë skanerin ta lexojë. Ja një udhëzues që printimi juaj të mbetet i lexueshëm.</p>

<h2>Njihuni me modulin</h2>
<p><strong>Moduli</strong> është njësia më e vogël e barkodit, pra një katror i vogël në QR Code ose vija më e ngushtë në barkodin me vija. Madhësia e modulit përcakton sa lehtë lexohet barkodi. Në <a href="/">I Need Barcode</a>, madhësia e modulit mund të rregullohet te seksioni Cilësimet: sa më e madhe vlera, aq më i madh dhe më i mprehtë del imazhi i shkarkuar.</p>

<h2>Madhësia minimale e QR Code</h2>
<ul>
  <li>Për skanim nga afër (për shembull në kartëvizita ose etiketa produktesh), madhësia rreth <strong>2 × 2 cm</strong> është kufiri i sigurt.</li>
  <li>Përdorni rregullin e raportit rreth <strong>10 : 1</strong>: distanca e skanimit është afërsisht dhjetë herë gjerësia e QR Code. Për një poster që skanohet nga 2 metra larg, bëjeni QR Code të paktën rreth 20 cm.</li>
  <li>Sa më shumë të dhëna të ruhen, aq më i dendur bëhet modeli, prandaj nevojitet madhësi më e madhe.</li>
</ul>

<h2>Madhësia e barkodit të produktit</h2>
<p>Madhësia standarde e <a href="/?type=ean13">EAN-13</a> është rreth 37,3 × 25,9 mm (100%). Kjo madhësi mund të zvogëlohet deri në rreth 80% ose të zmadhohet deri në 200%. Shmangni shkurtimin e tepërt të lartësisë së vijave, sepse skanerit të arkës i duhet hapësirë për ta lexuar nga kënde të ndryshme.</p>

<h2>Rezolucioni i imazhit</h2>
<ul>
  <li>Për printim, synoni që çdo modul të vizatohet me <strong>disa piksela të plotë</strong>, jo me pjesë pikseli. Zgjidhni madhësi më të madhe moduli kur e shkarkoni dhe pastaj zvogëlojeni në programin e dizajnit, jo anasjelltas.</li>
  <li>Shmangni zmadhimin e imazheve të vogla të barkodit, sepse skajet e katrorëve do të bëhen të turbullta ose të dhëmbëzuara.</li>
  <li>Ruajeni në formatin PNG që ngjyrat dhe skajet të mos dëmtohen si te JPG.</li>
</ul>

<h2>Zona e qetë</h2>
<p>Çdo barkod ka nevojë për hapësirë bosh përreth, e quajtur <strong>zona e qetë</strong> (quiet zone). Për QR Code, idealisht ajo duhet të jetë e gjerë sa katër module. Për barkodet me vija, hapësira bosh majtas dhe djathtas është shumë e rëndësishme. Mos vendosni tekst, vija dizajni ose skajin e paketimit shumë afër.</p>

<h2>Ngjyrat dhe materiali</h2>
<ul>
  <li>Përdorni ngjyrë të errët për barkodin dhe ngjyrë të çelur për sfondin.</li>
  <li>Shmangni materialet me shkëlqim ose të tejdukshme, sepse reflektimi i dritës mund ta pengojë kamerën.</li>
  <li>Printoni gjithmonë një mostër dhe provojeni me disa telefona ose skanerë para se të printoni shumë.</li>
</ul>
<p>Nëse barkodi juaj skanohet ende me vështirësi, shikoni <a href="/artikel/barcode-tidak-bisa-dipindai">7 arsye pse barkodi nuk skanohet</a>.</p>
`
};
