// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Id-Daqs u r-Riżoluzzjoni t-Tajba tal-Barcode għall-Istampar",
  desc: "Barcode li jkun żgħir wisq jew imċajpar huwa diffiċli biex jiġi skenjat. Tgħallem id-daqs minimu, ir-regola tad-distanza tal-iskenjar, u r-riżoluzzjoni tal-istampa li hija sikura għall-istampar.",
  tags: ["Gwida", "Stampar"],
  coverCaption: "Printer tat-tikketti jistampa barcodes għall-pakketti u l-imballaġġ.",
  inlineCaption: "Id-daqs tat-tikketta jiddetermina kemm jista' jkun kbir il-barcode stampat.",
  faq: [
    ["X'inhu d-daqs minimu biex tistampa QR Code?", "Biex jiġi skenjat mill-qrib, madwar 2 × 2 cm huwa l-limitu sikur. Għal distanzi ikbar, uża proporzjon ta' madwar 10 : 1 bejn id-distanza tal-iskenjar u l-wisa' tal-QR Code."],
    ["X'inhu d-daqs standard tal-barcode EAN-13?", "Id-daqs standard ta' EAN-13 huwa madwar 37.3 × 25.9 mm. Dan id-daqs jista' jiċċekken sa madwar 80% jew jitkabbar sa 200%."],
    ["Għaliex il-barcode joħroġ imċajpar wara l-istampar?", "Normalment għax l-istampa kienet żgħira u tkabbret, jew ġiet issejvjata bħala JPG ta' kwalità baxxa. Niżżel b'daqs ta' modulu ikbar fil-format PNG."]
  ],
  body: `
<p>Barcode li jidher tajjeb fuq l-iskrin mhux bilfors jinqara wara li jiġi stampat. Daqs żgħir wisq, riżoluzzjoni baxxa jew linka li tinfirex jistgħu jagħmlu li l-iskaner ifalli. Hawn gwida biex l-istampar tiegħek jibqa' jinqara.</p>

<h2>Agħraf il-modulu</h2>
<p>Il-<strong>modulu</strong> huwa l-iżgħar unità ta' barcode, jiġifieri kwadru żgħir wieħed f'QR Code jew l-idjaq linja f'barcode bil-linji. Id-daqs tal-modulu jiddetermina kemm huwa faċli li l-barcode jinqara. Fuq <a href="/">I Need Barcode</a>, id-daqs tal-modulu jista' jiġi rranġat fit-taqsima Settings: iktar ma jkun għoli l-valur, iktar tkun kbira u ħadina l-istampa mniżżla.</p>

<h2>Id-daqs minimu ta' QR Code</h2>
<ul>
  <li>Biex jiġi skenjat mill-qrib (pereżempju fuq biljett tan-negozju jew tikketta tal-prodott), madwar <strong>2 × 2 cm</strong> huwa l-limitu sikur.</li>
  <li>Uża r-regola tal-proporzjon ta' madwar <strong>10 : 1</strong>: id-distanza tal-iskenjar hija bejn wieħed u ieħor għaxar darbiet il-wisa' tal-QR Code. Għal poster li jiġi skenjat minn distanza ta' 2 metri, agħmel il-QR Code mill-inqas madwar 20 cm.</li>
  <li>Iktar ma tkun maħżuna data, iktar ikun dens id-disinn, u għalhekk hemm bżonn daqs ikbar.</li>
</ul>

<h2>Id-daqs tal-barcodes tal-prodotti</h2>
<p>Id-daqs standard ta' <a href="/?type=ean13">EAN-13</a> huwa madwar 37.3 × 25.9 mm (100%). Dan id-daqs jista' jiċċekken sa madwar 80% jew jitkabbar sa 200%. Evita li tqassar l-għoli tal-linji wisq, għax l-iskaners tal-kaxxa jeħtieġu spazju biex jaqraw minn angoli differenti.</p>

<h2>Ir-riżoluzzjoni tal-istampa</h2>
<ul>
  <li>Għall-istampar, ipprova tiżgura li kull modulu jitpinġa b'<strong>diversi pixels sħaħ</strong>, u mhux b'parti minn pixel. Agħżel daqs ta' modulu ikbar meta tniżżel, u mbagħad ċekknu fl-app tad-disinn, u mhux bil-maqlub.</li>
  <li>Evita li tkabbar stampa żgħira ta' barcode, għax it-truf tal-kwadri jsiru mċajpra jew imsennen.</li>
  <li>Issejvja fil-format PNG biex il-kuluri u t-truf ma jiġrilhomx ħsara kif jiġri b'JPG.</li>
</ul>

<h2>Żona kwieta</h2>
<p>Kull barcode jeħtieġ spazju vojt madwaru, imsejjaħ <strong>żona kwieta</strong> (quiet zone). Għal QR Code, idealment din għandha tkun wiesgħa erba' moduli. Għal barcodes bil-linji, l-ispazju vojt fuq ix-xellug u l-lemin huwa importanti ħafna. Tpoġġix test, linji tad-disinn jew it-tarf tal-imballaġġ qrib wisq.</p>

<h2>Kulur u materjal</h2>
<ul>
  <li>Uża kulur skur għall-barcode u kulur ċar għall-isfond.</li>
  <li>Evita materjali li jleqqu jew trasparenti, għax ir-rifless tad-dawl jista' jfixkel il-kamera.</li>
  <li>Dejjem stampa kampjun wieħed u ttestjah b'diversi mowbajls jew skaners qabel tistampa ħafna.</li>
</ul>
<p>Jekk il-barcode tiegħek xorta jkun diffiċli biex jiġi skenjat, iċċekkja <a href="/artikel/barcode-tidak-bisa-dipindai">7 raġunijiet għaliex barcode ma jiġix skenjat</a>.</p>
`
};
