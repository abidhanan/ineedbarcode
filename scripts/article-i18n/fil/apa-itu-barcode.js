// apa-itu-barcode
module.exports = {
  title: "Ano ang Barcode? Kahulugan, Paano Ito Gumagana, at Mga Uri Nito",
  desc: "May barcode sa halos lahat ng produktong binibili ninyo. Alamin kung paano ito gumagana, ang maikling kasaysayan nito, at ang mga uri ng barcode na pinakamadalas gamitin.",
  tags: ["Batayan", "Barcode"],
  coverCaption: "Ang barcode sa packaging ay nag-iimbak ng natatanging code ng produkto.",
  inlineCaption: "Gumagamit ang kahero ng scanner para mabasa ang barcode sa isang iglap.",
  faq: [
    ["Ano ang pagkakaiba ng barcode at QR Code?", "Ang QR Code ay isang uri ng barcode, ang tinatawag na 2D barcode. Ang barcode na guhit (1D) ay nag-iimbak lamang ng kaunting character at binabasa mula kaliwa pakanan, samantalang ang QR Code ay nag-iimbak ng data sa dalawang direksyon kaya kasya rito ang link, teksto, o detalye ng WiFi."],
    ["Nakaimbak ba sa barcode ang presyo ng produkto?", "Kadalasan ay hindi. Code lamang ang laman ng barcode ng produkto. Ang presyo at pangalan ng produkto ay nakaimbak sa sistema ng kahera, at hinahanap batay sa code na na-scan."],
    ["Kailangan bang magbayad para gumawa ng barcode?", "Hindi. Puwedeng gumawa ng larawan ng barcode nang libre, halimbawa sa I Need Barcode. Ang tanging kailangang irehistro nang may bayad ay ang opisyal na numero para sa barcode ng retail na produkto gaya ng EAN-13, sa pamamagitan ng GS1."]
  ],
  body: `
<p>Ang barcode ay isang paraan ng pagsulat ng data sa anyo ng pattern na nababasa ng makina. Kadalasan, ang pattern na ito ay binubuo ng mga itim at puting guhit na magkakaiba ang lapad, o ng maliliit na kahon na nakaayos sa loob ng isang parisukat. Kapag na-scan, isinasalin muli ang pattern na ito sa mga numero o teksto, halimbawa ang code ng produkto, tracking number, o address ng website.</p>
<p>Dahil makina ang bumabasa, mas mabilis at mas kaunti ang pagkakamali sa barcode kumpara sa manu-manong pag-type ng code. Kaya naman ginagamit ang barcode sa kahera, bodega, ospital, tiket, hanggang sa packaging ng pagkain.</p>

<h2>Maikling kasaysayan ng barcode</h2>
<p>Ang ideya ng barcode ay na-patent noong 1952 nina Norman Joseph Woodland at Bernard Silver sa Estados Unidos. Noong 1974 lamang talaga ito nagamit sa mga tindahan, nang i-scan ang isang pakete ng chewing gum sa isang supermarket sa Ohio gamit ang UPC code. Mula noon, lumaganap ang barcode sa buong mundo at ngayon ay pinamamahalaan ito sa buong mundo ng isang organisasyon ng pamantayan na tinatawag na GS1.</p>

<h2>Paano gumagana ang barcode?</h2>
<p>Iniilawan ng scanner ang barcode at binabasa ang repleksyon nito. Kaunting liwanag ang ibinabalik ng madidilim na bahagi, at marami naman ang ibinabalik ng maliliwanag na bahagi. Ang pagkakaibang ito ay ginagawang serye ng 0 at 1, at itinutugma sa mga patakaran ng uri ng barcode na iyon. Maraming barcode din ang may <strong>check digit</strong>, ang huling numero na kinukuwenta mula sa mga naunang numero. Kapag hindi tugma ang resulta ng kuwenta, alam ng scanner na may mali at tinatanggihan nito ang resulta.</p>
<p>Ang barcode mismo ay kadalasang code lamang ang iniimbak. Ang impormasyon gaya ng pangalan ng produkto o presyo ay nakaimbak sa sistema ng kahera o sa database, at hinahanap batay sa code na iyon.</p>

<h2>Mga uri ng barcode na madalas gamitin</h2>
<p>Sa pangkalahatan, nahahati ang barcode sa dalawang malaking grupo:</p>
<ul>
  <li><strong>1D (linear) barcode</strong>: mga patayong guhit na binabasa mula kaliwa pakanan. Halimbawa nito ang <a href="/?type=ean13">EAN-13</a> at <a href="/?type=upca">UPC-A</a> para sa mga retail na produkto, pati na ang <a href="/?type=code128">Code 128</a> at <a href="/?type=code39">Code 39</a> para sa logistics at bodega.</li>
  <li><strong>2D barcode</strong>: mga pattern na kahon na nag-iimbak ng data sa dalawang direksyon, kaya mas marami ang kasya rito. Halimbawa nito ang <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, at <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Bukod dito, may mga espesyal na barcode para sa koreo at pagpapadala, sa kalusugan, at mga pamantayan ng GS1 para sa supply chain. Mababasa ninyo ang mas detalyadong paliwanag tungkol sa kanilang pagkakaiba sa artikulong <a href="/artikel/perbedaan-barcode-1d-dan-2d">Pagkakaiba ng 1D at 2D na Barcode</a>.</p>

<h2>Para saan ang barcode?</h2>
<ul>
  <li><strong>Retail</strong>: pinabibilis ang kahera at awtomatikong itinatala ang stock.</li>
  <li><strong>Bodega at pagpapadala</strong>: sinusubaybayan ang mga produkto at parsela mula sa isang lugar patungo sa iba.</li>
  <li><strong>Tiket at event</strong>: sinusuri kung tunay ang tiket sa isang scan lamang.</li>
  <li><strong>Marketing</strong>: ang QR Code sa brochure o packaging ay direktang nagdadala ng mga tao sa inyong website, menu, o WhatsApp.</li>
</ul>

<h2>Paggawa ng sariling barcode</h2>
<p>Hindi ninyo kailangan ng bayad na app para gumawa ng barcode. Sa <a href="/">I Need Barcode</a>, piliin ang uri ng barcode, ilagay ang data, at i-download ito bilang larawang PNG. Mahigit 100 uri ang mapagpipilian, at libre ang lahat ng ito nang hindi na kailangang mag-sign up.</p>
`
};
