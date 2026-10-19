// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Diferans ant Barcode 1D ak 2D: Kiyès ou Bezwen?",
  desc: "Barcode an liy ak QR Code se tou de barcode, men yo pa sèvi pou menm bagay. Konpare kapasite yo, fason pou eskane yo, ak egzanp kote yo itilize yo.",
  tags: ["Baz", "Barcode"],
  coverCaption: "Yon eskanè nan men nan yon depo li barcode 1D ak 2D.",
  inlineCaption: "Etikèt livrezon yo anjeneral sèvi ak barcode an liy.",
  faq: [
    ["Èske eskanè kès yo ka li QR Code?", "Se pa tout. Eskanè lazè 1D yo li sèlman barcode an liy. Pou QR Code, ou bezwen yon eskanè 2D ki sèvi ak kamera oswa kamera yon telefòn."],
    ["Ki barcode ki pi piti?", "Data Matrix se youn nan barcode 2D yo ka enprime piti anpil, se pou sa yo sèvi avè l souvan sou konpozan elektwonik, aparèy medikal, ak etikèt medikaman."],
    ["Èske ou ka sèvi ak yon QR Code olye yon EAN-13 sou yon pwodui pou magazen?", "Pou yo vann li nan magazen, pwodui a toujou bezwen yon EAN-13 oswa yon UPC ki anrejistre. Ou ka ajoute yon QR Code sou anbalaj la kòm konpleman, pa egzanp pou enfòmasyon sou pwodui a oswa pou piblisite."]
  ],
  body: `
<p>Lè w ap fè yon barcode, premye kesyon ki souvan parèt se: èske pou m sèvi ak yon barcode an liy oswa yon QR Code? Yo rele tou de barcode, men fason yo sere done diferan, kidonk yo pa sèvi pou menm bagay non plis.</p>

<h2>Barcode 1D (lineyè)</h2>
<p>Barcode 1D se yon barcode ki fèt ak liy vètikal. Done yo sere nan yon sèl direksyon, sa vle di de goch a dwat. Egzanp ki pi popilè yo se <a href="/?type=ean13">EAN-13</a> sou anbalaj pwodui ak <a href="/?type=code128">Code 128</a> sou etikèt livrezon.</p>
<ul>
  <li>Ti kapasite, anjeneral kèk douzèn karaktè.</li>
  <li>Eskanè lazè kès ki pa chè e ki rapid anpil ka li l.</li>
  <li>Li bon pou kòd pwodui, nimewo seri, ak nimewo koli.</li>
</ul>

<h2>Barcode 2D</h2>
<p>Barcode 2D sere done nan de direksyon, sou kote ak anba, kidonk li ka kenbe plis toujou. Pa egzanp <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, ak <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Gwo kapasite, depi kèk douzèn rive plizyè milye karaktè.</li>
  <li>Ou ka eskane l ak kamera yon telefòn nan plizyè direksyon.</li>
  <li>Li gen koreksyon erè, kidonk li rete lizib menm si yon pati ladan l domaje.</li>
  <li>Ou ka fè l piti anpil, pa egzanp Data Matrix sou konpozan elektwonik.</li>
</ul>

<h2>Yon ti konparezon</h2>
<table>
  <thead><tr><th></th><th>Barcode 1D</th><th>Barcode 2D</th></tr></thead>
  <tbody>
    <tr><td>Fòm</td><td>Liy vètikal</td><td>Kare/pwen nan yon kare</td></tr>
    <tr><td>Kapasite</td><td>Piti</td><td>Gwo</td></tr>
    <tr><td>Aparèy pou eskane</td><td>Eskanè lazè oswa kamera</td><td>Kamera oswa eskanè 2D</td></tr>
    <tr><td>Rezistans a domaj</td><td>Limite</td><td>Gen koreksyon erè</td></tr>
    <tr><td>Egzanp</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Ki lè pou w sèvi ak youn oswa lòt?</h2>
<ul>
  <li><strong>Pwodui yo vann nan magazen oswa nan ti magazen</strong>: sèvi ak yon EAN-13 ofisyèl GS1. Gade <a href="/artikel/cara-mendapatkan-barcode-ean-13">kijan pou w jwenn yon barcode EAN-13</a>.</li>
  <li><strong>Etikèt depo, etajè, oswa livrezon</strong>: Code 128 se chwa ki pi komen paske li konpak e li aksepte lèt ak chif.</li>
  <li><strong>Lyen, meni, WiFi, oswa kontak pou kliyan</strong>: QR Code, paske ou ka eskane l dirèkteman ak kamera yon telefòn.</li>
  <li><strong>Etikèt piti anpil</strong>: Data Matrix.</li>
  <li><strong>Kat idantite, tikè avyon, oswa dokiman</strong>: PDF417 oswa Aztec.</li>
</ul>
<p>Ou ka fè tout kalite sa yo gratis sou <a href="/">I Need Barcode</a>. Si ou toujou ap ezite, kòmanse ak QR Code pou bezwen kliyan yo ak Code 128 pou bezwen entèn yo.</p>
`
};
