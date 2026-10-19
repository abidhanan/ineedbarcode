// apa-itu-barcode
module.exports = {
  title: "Kisa yon Barcode Ye? Definisyon, Kijan li Mache, ak Kalite yo",
  desc: "Gen barcode sou prèske tout pwodui ou achte. Dekouvri kijan li mache, yon ti istwa li, ak kalite barcode yo itilize pi souvan.",
  tags: ["Baz", "Barcode"],
  coverCaption: "Barcode ki sou anbalaj la sere yon kòd inik pou pwodui a.",
  inlineCaption: "Kesye a sèvi ak yon eskanè pou li barcode la nan yon batman je.",
  faq: [
    ["Ki diferans ki genyen ant barcode ak QR Code?", "QR Code se youn nan kalite barcode yo, se yon barcode 2D. Barcode an liy (1D) sere sèlman kèk karaktè e yo li l de goch a dwat, alòske QR Code sere done nan de direksyon, kidonk li ka kenbe yon lyen, yon tèks, oswa done WiFi."],
    ["Èske barcode la sere pri pwodui a?", "Anjeneral non. Barcode yon pwodui genyen sèlman yon kòd. Pri ak non pwodui a sere nan sistèm kès la, epi yo chèche yo dapre kòd yo eskane a."],
    ["Èske fòk ou peye pou fè yon barcode?", "Non. Ou ka fè imaj barcode la gratis, pa egzanp sou I Need Barcode. Sèl sa ki bezwen anrejistre e peye se nimewo ofisyèl pou barcode pwodui yo vann nan magazen tankou EAN-13, atravè GS1."]
  ],
  body: `
<p>Barcode se yon fason pou ekri done sou fòm yon desen machin ka li. Desen sa a se souvan liy nwa ak blan ki pa gen menm lajè, oswa ti kare ki ranje nan yon kare. Lè yo eskane l, desen an tounen chif oswa tèks ankò, pa egzanp kòd yon pwodui, nimewo yon koli, oswa adrès yon sit entènèt.</p>
<p>Paske se yon machin ki li l, barcode pi rapid anpil e li fè mwens erè pase lè w tape yon kòd ak men. Se pou sa yo sèvi ak barcode nan kès, nan depo, nan lopital, sou tikè, rive menm sou anbalaj manje.</p>

<h2>Yon ti istwa barcode</h2>
<p>Lide barcode la te resevwa yon patant an 1952, se Norman Joseph Woodland ak Bernard Silver ki te fè l Ozetazini. Se an 1974 sèlman yo te vrèman kòmanse sèvi ak barcode nan magazen, lè yo te eskane yon pake chiklèt nan yon makèt nan Ohio ak yon kòd UPC. Depi lè sa a, barcode gaye nan lemonn antye e jodi a se yon òganizasyon estanda ki rele GS1 ki jere l sou nivo mondyal.</p>

<h2>Kijan yon barcode mache?</h2>
<p>Eskanè a klere barcode la epi li li limyè ki reflete a. Pati ki fonse yo reflete ti kras limyè, pati ki klè yo reflete anpil. Diferans sa a tounen yon seri chif 0 ak 1, epi yo konpare l ak règ kalite barcode sa a. Anpil barcode gen yon <strong>chif verifikasyon</strong> (check digit) tou, sa vle di dènye chif la yo kalkile apati chif ki vin anvan l yo. Si rezilta kalkil la pa koresponn, eskanè a konnen gen yon bagay ki pa bon e li refize rezilta a.</p>
<p>Barcode la li menm anjeneral sere sèlman yon kòd. Enfòmasyon tankou non pwodui a oswa pri a sere nan sistèm kès la oswa nan yon baz done (database), epi yo chèche yo dapre kòd sa a.</p>

<h2>Kalite barcode yo itilize souvan</h2>
<p>An jeneral, barcode divize an de gwo gwoup:</p>
<ul>
  <li><strong>Barcode 1D (lineyè)</strong>: se liy vètikal yo li de goch a dwat. Pa egzanp <a href="/?type=ean13">EAN-13</a> ak <a href="/?type=upca">UPC-A</a> pou pwodui yo vann nan magazen, ansanm ak <a href="/?type=code128">Code 128</a> ak <a href="/?type=code39">Code 39</a> pou lojistik ak depo.</li>
  <li><strong>Barcode 2D</strong>: se yon desen an kare ki sere done nan de direksyon, kidonk li ka kenbe plis toujou. Pa egzanp <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, ak <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Anplis de sa, gen barcode espesyal pou lapòs ak livrezon, pou sante, ansanm ak estanda GS1 pou chèn apwovizyonman. Ou ka li plis detay sou diferans yo nan atik <a href="/artikel/perbedaan-barcode-1d-dan-2d">Diferans ant Barcode 1D ak 2D</a>.</p>

<h2>Pou kisa yo sèvi ak barcode?</h2>
<ul>
  <li><strong>Komès an detay</strong>: li fè kès la ale pi vit e li anrejistre stòk la otomatikman.</li>
  <li><strong>Depo ak livrezon</strong>: li swiv machandiz ak koli soti yon kote pou rive yon lòt kote.</li>
  <li><strong>Tikè ak evènman</strong>: li verifye si yon tikè otantik ak yon sèl eskanaj.</li>
  <li><strong>Maketing</strong>: QR Code sou yon bwochi oswa yon anbalaj mennen moun dirèkteman sou sit ou, sou meni ou, oswa sou WhatsApp ou.</li>
</ul>

<h2>Fè barcode pa w</h2>
<p>Ou pa bezwen yon aplikasyon ou peye pou fè barcode. Sou <a href="/">I Need Barcode</a>, chwazi kalite barcode la, ranpli done yo, epi telechaje l kòm yon imaj PNG. Gen plis pase 100 kalite ou ka chwazi, e yo tout gratis san ou pa bezwen enskri.</p>
`
};
