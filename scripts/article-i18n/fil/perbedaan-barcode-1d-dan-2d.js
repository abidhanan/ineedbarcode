// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Pagkakaiba ng 1D at 2D na Barcode: Alin ang Kailangan Ninyo?",
  desc: "Parehong barcode ang barcode na guhit at QR Code, pero magkaiba ang gamit nila. Paghambingin ang kapasidad, paraan ng pag-scan, at mga halimbawa ng paggamit.",
  tags: ["Batayan", "Barcode"],
  coverCaption: "Binabasa ng handheld scanner sa bodega ang 1D at 2D na barcode.",
  inlineCaption: "Kadalasang gumagamit ng barcode na guhit ang mga shipping label.",
  faq: [
    ["Nababasa ba ng scanner sa kahera ang QR Code?", "Hindi lahat. Ang 1D laser scanner ay barcode na guhit lamang ang nababasa. Para sa QR Code, kailangan ng camera-based na 2D scanner o ng camera ng cellphone."],
    ["Aling barcode ang pinakamaliit?", "Ang Data Matrix ay isang 2D barcode na maaaring i-print nang napakaliit, kaya madalas itong ginagamit sa mga electronic component, kagamitang medikal, at label ng gamot."],
    ["Puwede bang gamitin ang QR Code bilang kapalit ng EAN-13 sa retail na produkto?", "Para maibenta sa mga retail store, kailangan pa rin ng produkto ang rehistradong EAN-13 o UPC. Maaaring idagdag ang QR Code sa packaging bilang karagdagan, halimbawa para sa impormasyon ng produkto o promosyon."]
  ],
  body: `
<p>Kapag gumagawa ng barcode, ang unang tanong na kadalasang lumilitaw ay: barcode na guhit ba o QR Code ang gagamitin? Parehong tinatawag na barcode ang dalawa, pero magkaiba ang paraan ng pag-iimbak nila ng data kaya magkaiba rin ang gamit nila.</p>

<h2>1D (linear) na barcode</h2>
<p>Ang 1D barcode ay barcode na binubuo ng mga patayong guhit. Iniimbak ang data sa iisang direksyon, mula kaliwa pakanan. Ang pinakakilalang halimbawa ay ang <a href="/?type=ean13">EAN-13</a> sa packaging ng produkto at ang <a href="/?type=code128">Code 128</a> sa mga shipping label.</p>
<ul>
  <li>Maliit ang kapasidad, karaniwang sampu hanggang ilang dosenang character.</li>
  <li>Nababasa ng mura at napakabilis na laser scanner sa kahera.</li>
  <li>Angkop para sa code ng produkto, serial number, at tracking number.</li>
</ul>

<h2>2D na barcode</h2>
<p>Ang 2D barcode ay nag-iimbak ng data sa dalawang direksyon, pahalang at pababa, kaya mas marami ang kasya rito. Halimbawa nito ang <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, at <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Malaki ang kapasidad, mula sa ilang dosena hanggang libu-libong character.</li>
  <li>Maaaring i-scan ng camera ng cellphone mula sa iba't ibang direksyon.</li>
  <li>May error correction, kaya nababasa pa rin kahit may bahaging sira.</li>
  <li>Maaaring gawing napakaliit, halimbawa ang Data Matrix sa mga electronic component.</li>
</ul>

<h2>Mabilis na paghahambing</h2>
<table>
  <thead><tr><th></th><th>1D Barcode</th><th>2D Barcode</th></tr></thead>
  <tbody>
    <tr><td>Hugis</td><td>Mga patayong guhit</td><td>Mga kahon/tuldok sa loob ng parisukat</td></tr>
    <tr><td>Kapasidad</td><td>Maliit</td><td>Malaki</td></tr>
    <tr><td>Pang-scan</td><td>Laser scanner o camera</td><td>Camera o 2D scanner</td></tr>
    <tr><td>Tibay sa pagkasira</td><td>Limitado</td><td>May error correction</td></tr>
    <tr><td>Halimbawa</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Kailan gagamitin ang alin?</h2>
<ul>
  <li><strong>Mga produktong ibinebenta sa tindahan o convenience store</strong>: gumamit ng opisyal na EAN-13 mula sa GS1. Tingnan ang <a href="/artikel/cara-mendapatkan-barcode-ean-13">paano kumuha ng EAN-13 na barcode</a>.</li>
  <li><strong>Label sa bodega, istante, o pagpapadala</strong>: karaniwang pinipili ang Code 128 dahil siksik ito at sumusuporta sa mga titik at numero.</li>
  <li><strong>Link, menu, WiFi, o contact para sa mga customer</strong>: QR Code, dahil maaari itong i-scan nang direkta gamit ang camera ng cellphone.</li>
  <li><strong>Napakaliliit na label</strong>: Data Matrix.</li>
  <li><strong>ID card, boarding pass, o dokumento</strong>: PDF417 o Aztec.</li>
</ul>
<p>Lahat ng uri sa itaas ay magagawa ninyo nang libre sa <a href="/">I Need Barcode</a>. Kung nag-aalinlangan pa, magsimula sa QR Code para sa pangangailangan ng mga customer at sa Code 128 para sa panloob na pangangailangan.</p>
`
};
