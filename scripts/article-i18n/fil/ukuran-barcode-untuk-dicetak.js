// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Ang Tamang Laki at Resolusyon ng Barcode para sa Pag-print",
  desc: "Mahirap i-scan ang barcode na masyadong maliit o malabo. Alamin ang pinakamababang laki, ang patakaran sa distansya ng pag-scan, at ang ligtas na resolusyon ng larawan para sa pag-print.",
  tags: ["Gabay", "Pag-print"],
  coverCaption: "Nagpi-print ang label printer ng barcode para sa mga parsela at packaging.",
  inlineCaption: "Ang laki ng label ang nagtatakda kung gaano kalaki maipi-print ang barcode.",
  faq: [
    ["Ano ang pinakamababang laki ng QR Code para sa pag-print?", "Para sa pag-scan nang malapitan, ang mga 2 × 2 cm ang ligtas na pinakamababang laki. Para sa mas malayong distansya, gumamit ng ratio na mga 10 : 1 sa pagitan ng distansya ng pag-scan at lapad ng QR Code."],
    ["Ano ang karaniwang laki ng EAN-13 na barcode?", "Ang karaniwang laki ng EAN-13 ay mga 37.3 × 25.9 mm. Maaari itong paliitin hanggang mga 80% o palakihin hanggang 200%."],
    ["Bakit malabo ang barcode pagkatapos i-print?", "Kadalasan ay dahil maliit ang larawan at pinalaki ito, o na-save ito bilang mababang kalidad na JPG. I-download ito nang may mas malaking module size sa format na PNG."]
  ],
  body: `
<p>Ang barcode na mukhang maganda sa screen ay hindi tiyak na mababasa kapag na-print na. Ang sobrang liit na sukat, mababang resolusyon, o kumakalat na tinta ay maaaring maging dahilan para hindi ito mabasa ng scanner. Narito ang gabay para manatiling nababasa ang inyong mga print.</p>

<h2>Kilalanin ang module</h2>
<p>Ang <strong>module</strong> ay ang pinakamaliit na yunit ng barcode, ibig sabihin ay isang maliit na kahon sa QR Code o ang pinakamakitid na guhit sa barcode na guhit. Ang laki ng module ang nagtatakda kung gaano kadaling mabasa ang barcode. Sa <a href="/">I Need Barcode</a>, maaaring itakda ang module size sa seksyong Mga Setting: habang lumalaki ang halaga, mas lumalaki at tumatalas ang larawang nada-download.</p>

<h2>Pinakamababang laki ng QR Code</h2>
<ul>
  <li>Para sa pag-scan nang malapitan (halimbawa sa business card o label ng produkto), ang laking mga <strong>2 × 2 cm</strong> ang ligtas na pinakamababa.</li>
  <li>Gamitin ang patakaran ng ratio na mga <strong>10 : 1</strong>: ang distansya ng pag-scan ay humigit-kumulang sampung beses ng lapad ng QR Code. Para sa poster na isa-scan mula sa layong 2 metro, gawing hindi bababa sa mga 20 cm ang QR Code.</li>
  <li>Habang dumarami ang iniimbak na data, sumisiksik ang pattern, kaya kailangan ng mas malaking sukat.</li>
</ul>

<h2>Laki ng barcode ng produkto</h2>
<p>Ang karaniwang laki ng <a href="/?type=ean13">EAN-13</a> ay mga 37.3 × 25.9 mm (100%). Maaari itong paliitin hanggang mga 80% o palakihin hanggang 200%. Iwasang putulin nang masyadong maikli ang taas ng mga guhit, dahil kailangan ng scanner sa kahera ng espasyo para makabasa mula sa iba't ibang anggulo.</p>

<h2>Resolusyon ng larawan</h2>
<ul>
  <li>Para sa pag-print, sikaping maiguhit ang bawat module nang may <strong>ilang buong pixel</strong>, hindi bahagi lamang ng pixel. Pumili ng mas malaking module size kapag nagda-download, saka paliitin sa design app, hindi ang kabaligtaran.</li>
  <li>Iwasang palakihin ang maliit na larawan ng barcode, dahil magiging malabo o pagulong-gulo ang gilid ng mga kahon.</li>
  <li>I-save sa format na PNG para hindi masira ang mga kulay at gilid gaya ng nangyayari sa JPG.</li>
</ul>

<h2>Quiet zone</h2>
<p>Kailangan ng bawat barcode ng bakanteng espasyo sa paligid nito, na tinatawag na <strong>quiet zone</strong>. Para sa QR Code, mainam na may lapad itong apat na module. Para sa barcode na guhit, napakahalaga ng bakanteng espasyo sa kaliwa at kanan. Huwag ilapit nang husto ang teksto, linya ng disenyo, o gilid ng packaging.</p>

<h2>Kulay at materyal</h2>
<ul>
  <li>Gumamit ng madilim na kulay para sa barcode at maliwanag na kulay para sa background.</li>
  <li>Iwasan ang makintab o transparent na materyal, dahil ang repleksyon ng liwanag ay maaaring makagulo sa camera.</li>
  <li>Palaging mag-print ng isang sample at subukan ito gamit ang ilang cellphone o scanner bago mag-print nang marami.</li>
</ul>
<p>Kung mahirap pa ring i-scan ang inyong barcode, tingnan ang <a href="/artikel/barcode-tidak-bisa-dipindai">7 dahilan kung bakit hindi ma-scan ang barcode</a>.</p>
`
};
