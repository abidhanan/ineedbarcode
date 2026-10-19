// qr-code-menu-restoran
module.exports = {
  title: "QR Code para sa Menu ng Restawran: Kumpletong Gabay",
  desc: "Pinapadali ng digital na menu sa pamamagitan ng QR Code ang karanasan ng mga customer at nakatitipid ito sa gastos sa pag-print. Ganito ito gawin, ihanda ang menu, at ilagay sa mesa.",
  tags: ["Negosyo", "QR Code"],
  coverCaption: "Direktang dinadala ng QR Code sa mesa ang mga customer sa digital na menu.",
  inlineCaption: "Ilagay ang QR Code sa lugar na madaling maabot mula sa upuan.",
  faq: [
    ["Ano ang mas mainam gamitin para sa digital na menu: PDF o web page?", "Kadalasang mas komportableng basahin sa cellphone at mas mabilis buksan ang web page. Maaaring gamitin ang PDF kung maliit ang file at sapat ang laki ng teksto sa screen."],
    ["Gaano kalaki dapat ang QR Code ng menu sa mesa?", "Sapat na ang mga 3 hanggang 5 cm para ma-scan mula sa upuan. Gumamit ng materyal na hindi tinatablan ng natapon na likido at hindi masyadong makintab."],
    ["Kailangan bang i-print muli ang QR Code kapag nagbago ang menu?", "Hindi, basta pareho pa rin ang link. I-update lang ang laman ng page o file ng menu na itinuturo ng QR Code."]
  ],
  body: `
<p>Karaniwan na ngayon ang digital na menu sa pamamagitan ng QR Code sa mga café at restawran. I-scan lang ng mga customer ang QR Code sa mesa para makita ang listahan ng pagkain, presyo, at mga larawan. Para sa mga may-ari ng negosyo, nakatitipid ang paraang ito sa gastos sa pag-print at pinapadali ang pagbabago ng presyo o menu.</p>

<h2>Mga bentahe ng QR Code na menu</h2>
<ul>
  <li><strong>Madaling i-update</strong>: palitan ang presyo o magdagdag ng putahe nang hindi nagpi-print muli ng menu book.</li>
  <li><strong>Matipid</strong>: mag-print lang ng maliit na QR Code para sa bawat mesa.</li>
  <li><strong>Mas maraming impormasyon</strong>: magpakita ng mga larawan, paglalarawan, at label gaya ng maanghang o vegetarian.</li>
  <li><strong>Sumusuporta sa online na pag-order</strong>: idirekta ang mga customer sa order form o WhatsApp.</li>
</ul>

<h2>Hakbang 1: Maghanda ng online na menu</h2>
<p>Link lamang ang laman ng QR Code, kaya kailangan ninyo ng menu na mabubuksan sa internet. Kabilang sa mga pagpipilian ang page sa sarili ninyong website, PDF file sa online storage na pampublikong ibinahagi, o catalog page sa isang ordering platform. Tiyaking komportableng basahin ang menu sa screen ng cellphone: sapat ang laki ng teksto, hindi masyadong mabigat ang mga larawan, at malinaw ang mga presyo.</p>

<h2>Hakbang 2: Gumawa ng QR Code</h2>
<ol>
  <li>Kopyahin ang link ng inyong menu.</li>
  <li>Buksan ang <a href="/?type=qrcode">QR Code generator</a>, piliin ang tab na <strong>URL</strong>, at i-paste ang link.</li>
  <li>Magdagdag ng frame na may tekstong "MENU" o "I-SCAN PARA MAKITA ANG MENU" sa seksyong Disenyo.</li>
  <li>Itugma ang mga kulay sa pagkakakilanlan ng restawran, pero gumamit pa rin ng madilim na kulay sa maliwanag na background.</li>
  <li>I-download ang PNG nang may module size na sapat ang laki para sa pag-print.</li>
</ol>
<p>Gumamit ng link na hindi magbabago. Kung ililipat ang menu sa ibang address, hindi na maa-update ang mga QR Code na naipa-print na. Nasa artikulong <a href="/artikel/apa-itu-qr-code">ano ang QR Code</a> ang paliwanag.</p>

<h2>Hakbang 3: I-print at ilagay</h2>
<ul>
  <li>I-print sa pinakamababang laki na mga 3–5 cm para madaling ma-scan mula sa upuan.</li>
  <li>Gumamit ng materyal na hindi tinatablan ng natapon na likido, gaya ng vinyl sticker o laminated na card na hindi sobrang kintab.</li>
  <li>Ilagay ito sa posisyong madaling maabot, halimbawa sa acrylic stand sa gitna ng mesa.</li>
  <li>Idagdag ang numero ng mesa malapit sa QR Code kung umo-order ang mga customer sa pamamagitan ng chat.</li>
</ul>

<h2>Huwag kalimutan ang mga customer na walang cellphone</h2>
<p>Maghanda ng isa o dalawang naka-print na menu para sa mga customer na walang dalang cellphone, naubusan ng baterya, o mas komportableng magbasa ng pisikal na menu.</p>
<p>Maaari rin kayong gumawa ng <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a> para sa mga bisita at ilagay ito katabi ng QR Code ng menu.</p>
`
};
