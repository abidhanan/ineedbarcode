// apa-itu-qr-code
module.exports = {
  title: "Çfarë është QR Code dhe si funksionon?",
  desc: "QR Code mund të ruajë lidhje, tekst e madje edhe të dhëna WiFi, dhe mbetet i lexueshëm edhe kur është pjesërisht i dëmtuar. Ja si funksionon dhe cilat janë përparësitë e tij.",
  tags: ["Bazat", "QR Code"],
  coverCaption: "QR Code mund të skanohet drejtpërdrejt me kamerën e telefonit.",
  inlineCaption: "Çdo QR Code përbëhet nga katrorë të vegjël bardhë e zi.",
  faq: [
    ["A mund të skadojë një QR Code?", "QR Code statik nuk skadon kurrë, sepse të dhënat e tij janë të ngulitura drejtpërdrejt në imazh. QR Code dinamik mund të pushojë së funksionuari nëse shërbimi që ofron lidhjen e tij ndalon ose nëse skadon abonimi."],
    ["Sa të dhëna mund të ruajë një QR Code?", "Versioni më i madh i QR Code mund të ruajë deri në 7.089 shifra ose rreth 2.953 bajte. Megjithatë, sa më pak të dhëna, aq më lehtë skanohet QR Code."],
    ["A mbetet i lexueshëm QR Code nëse është pjesërisht i dëmtuar?", "Po. Falë korrigjimit të gabimeve, QR Code mbetet i lexueshëm edhe kur rreth 7% deri në 30% e tij është e dëmtuar, në varësi të nivelit të korrigjimit L, M, Q ose H që përdoret."]
  ],
  body: `
<p>QR Code (Quick Response Code) është një barkod 2D në formë katrori, i përbërë nga katrorë të vegjël bardhë e zi. Ndryshe nga barkodi me vija, që ruan vetëm rreth një duzinë shifrash, QR Code mund të ruajë lidhjen e një faqeje interneti, tekst të gjatë, numër telefoni, kontakt e madje edhe të dhënat e një rrjeti WiFi.</p>
<p>QR Code u zhvillua në vitin 1994 nga Denso Wave, një kompani japoneze, për të gjurmuar pjesët e automjeteve në fabrikë. Sot QR Code përdoret kudo, nga pagesat dixhitale te menytë e restoranteve, sepse mund të skanohet drejtpërdrejt me kamerën e telefonit.</p>

<h2>Pjesët e QR Code</h2>
<ul>
  <li><strong>Tre katrorë të mëdhenj në qoshe</strong> (finder pattern): e ndihmojnë kamerën të gjejë QR Code dhe të kuptojë drejtimin e tij, kështu që QR Code mbetet i lexueshëm edhe kur skanohet i pjerrët ose përmbys.</li>
  <li><strong>Modeli i shtrirjes</strong> (alignment pattern): katror i vogël që ndihmon në leximin e QR Code të përkulur ose të parë nga një kënd.</li>
  <li><strong>Zona e të dhënave</strong>: katrorët e vegjël që përmbajnë informacionin që ruani.</li>
  <li><strong>Zona e qetë</strong> (quiet zone): hapësira bosh përreth QR Code që të dallohet lehtë nga sfondi.</li>
</ul>

<h2>Sa të dhëna mund të ruajë?</h2>
<p>QR Code ka 40 versione madhësie. Versioni më i madh mund të ruajë deri në 7.089 shifra ose rreth 2.953 bajte të dhëna. Në praktikë, sa më pak të dhëna të ruhen, aq më të mëdhenj janë katrorët dhe aq më lehtë skanohet QR Code. Prandaj një lidhje e shkurtër është më e mirë se një lidhje shumë e gjatë.</p>

<h2>I lexueshëm edhe kur dëmtohet</h2>
<p>QR Code përdor korrigjimin e gabimeve (error correction). Ka katër nivele:</p>
<ul>
  <li><strong>L</strong>: të dhënat mund të rikuperohen nëse rreth 7% e QR Code është e dëmtuar.</li>
  <li><strong>M</strong>: rreth 15%. Kjo është zgjedhja e zakonshme dhe e ekuilibruar.</li>
  <li><strong>Q</strong>: rreth 25%.</li>
  <li><strong>H</strong>: rreth 30%, i përshtatshëm për QR Code që do të ketë logo ose do të printohet në vende që ndoten lehtë.</li>
</ul>
<p>Sa më i lartë niveli i korrigjimit, aq më shumë katrorë nevojiten, prandaj modeli i QR Code duket më i dendur.</p>

<h2>Çfarë mund të ruhet në QR Code?</h2>
<ul>
  <li>Lidhje për faqe interneti, dyqane online ose formularë.</li>
  <li>Të dhëna WiFi, që mysafirët të lidhen pa shtypur fjalëkalimin. Shikoni udhëzuesin për <a href="/artikel/cara-membuat-qr-code-wifi">QR Code WiFi</a>.</li>
  <li>Kartëvizitë dixhitale (vCard), email, SMS dhe bisedë në WhatsApp.</li>
  <li>Vendndodhje në hartë dhe orare eventesh.</li>
</ul>

<h2>QR Code statik dhe dinamik</h2>
<p>QR Code që krijohet drejtpërdrejt nga të dhënat quhet <strong>QR Code statik</strong>: përmbajtja e tij është e ngulitur në imazh dhe nuk mund të ndryshohet, por gjithashtu nuk skadon kurrë. QR Code <strong>dinamik</strong> përmban një lidhje të shkurtër të një shërbimi, e cila më pas ju ridrejton te destinacioni juaj; destinacioni mund të ndryshohet, por QR Code pushon së funksionuari nëse ai shërbim ndalon. Për shumicën e nevojave, QR Code statik mjafton dhe është më i sigurt për një kohë të gjatë.</p>

<p>Doni ta provoni? Krijoni një <a href="/?type=qrcode">QR Code falas</a> tani, ose lexoni <a href="/artikel/cara-membuat-qr-code-gratis">si të krijoni QR Code në 3 hapa</a>.</p>
`
};
