// apa-itu-qr-code
module.exports = {
  title: "Ano ang QR Code at Paano Ito Gumagana?",
  desc: "Ang QR Code ay nakapag-iimbak ng link, teksto, at maging ng detalye ng WiFi, at nababasa pa rin kahit may bahaging sira. Ganito ito gumagana at ito ang mga bentahe nito.",
  tags: ["Batayan", "QR Code"],
  coverCaption: "Maaaring i-scan ang QR Code nang direkta gamit ang camera ng cellphone.",
  inlineCaption: "Bawat QR Code ay binubuo ng maliliit na itim at puting kahon.",
  faq: [
    ["Nag-e-expire ba ang QR Code?", "Hindi kailanman nag-e-expire ang static na QR Code dahil direktang nakabaon ang data nito sa larawan. Ang dynamic na QR Code ay maaaring tumigil sa paggana kapag huminto ang serbisyong nagbibigay ng link nito o natapos ang subscription."],
    ["Gaano karaming data ang kayang iimbak ng QR Code?", "Ang pinakamalaking bersyon ng QR Code ay kayang mag-imbak ng hanggang 7,089 na numero o mga 2,953 byte. Gayunman, habang kumakaunti ang data, mas madaling ma-scan ang QR Code."],
    ["Nababasa pa rin ba ang QR Code kung may bahaging sira?", "Oo. Dahil sa error correction, nababasa pa rin ang QR Code kahit mga 7% hanggang 30% nito ang sira, depende sa antas ng correction na L, M, Q, o H na ginamit."]
  ],
  body: `
<p>Ang QR Code (Quick Response Code) ay isang parisukat na 2D barcode na binubuo ng maliliit na itim at puting kahon. Hindi tulad ng barcode na guhit na labindalawa o higit pang numero lamang ang naiimbak, ang QR Code ay kayang mag-imbak ng link ng website, mahabang teksto, numero ng telepono, contact, at maging ng detalye ng WiFi network.</p>
<p>Binuo ang QR Code noong 1994 ng Denso Wave, isang kumpanyang Hapon, para subaybayan ang mga piyesa ng sasakyan sa pabrika. Ngayon, ginagamit na ang QR Code saanman, mula sa digital na pagbabayad hanggang sa menu ng restawran, dahil maaari itong i-scan nang direkta gamit ang camera ng cellphone.</p>

<h2>Mga bahagi ng QR Code</h2>
<ul>
  <li><strong>Tatlong malalaking kahon sa mga sulok</strong> (finder pattern): tumutulong sa camera na mahanap ang QR Code at malaman ang direksyon nito, kaya nababasa pa rin ito kahit na-scan nang pahilis o baligtad.</li>
  <li><strong>Alignment pattern</strong>: maliit na kahon na tumutulong sa pagbasa ng QR Code na nakabaluktot o tinitingnan mula sa gilid.</li>
  <li><strong>Data area</strong>: ang maliliit na kahon na naglalaman ng impormasyong iniimbak ninyo.</li>
  <li><strong>Quiet zone</strong>: ang bakanteng espasyo sa paligid ng QR Code para madali itong maihiwalay sa background.</li>
</ul>

<h2>Gaano karaming data ang kaya nitong iimbak?</h2>
<p>May 40 bersyon ng laki ang QR Code. Ang pinakamalaking bersyon ay kayang mag-imbak ng hanggang 7,089 na numero o mga 2,953 byte ng data. Sa praktika, habang kumakaunti ang iniimbak na data, lumalaki ang mga kahon at mas madaling ma-scan ang QR Code. Kaya mas mabuti ang maikling link kaysa sa napakahabang link.</p>

<h2>Nababasa pa rin kahit may sira</h2>
<p>Gumagamit ang QR Code ng error correction. May apat na antas ito:</p>
<ul>
  <li><strong>L</strong>: maaari pang maibalik ang data kung mga 7% ng QR Code ang sira.</li>
  <li><strong>M</strong>: mga 15%. Ito ang karaniwan at balanseng pagpipilian.</li>
  <li><strong>Q</strong>: mga 25%.</li>
  <li><strong>H</strong>: mga 30%, angkop para sa QR Code na lalagyan ng logo o ipi-print sa lugar na madaling madumihan.</li>
</ul>
<p>Habang tumataas ang antas ng correction, mas maraming kahon ang kailangan, kaya mas siksik tingnan ang pattern ng QR Code.</p>

<h2>Ano-ano ang maaaring iimbak sa QR Code?</h2>
<ul>
  <li>Link ng website, online store, o form.</li>
  <li>Detalye ng WiFi, para makakonekta ang mga bisita nang hindi nagta-type ng password. Tingnan ang gabay sa <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a>.</li>
  <li>Digital na business card (vCard), email, SMS, at chat sa WhatsApp.</li>
  <li>Lokasyon sa mapa at iskedyul ng event.</li>
</ul>

<h2>Static at dynamic na QR Code</h2>
<p>Ang QR Code na direktang ginawa mula sa data ay tinatawag na <strong>static na QR Code</strong>: nakabaon sa larawan ang laman nito at hindi na mababago, pero hindi rin ito kailanman mag-e-expire. Ang <strong>dynamic</strong> na QR Code ay naglalaman ng maikling link na pag-aari ng isang serbisyo na siyang magre-redirect sa inyong destinasyon; maaaring palitan ang destinasyon, pero hihinto ang QR Code kapag huminto ang serbisyong iyon. Para sa karamihan ng pangangailangan, sapat na ang static na QR Code at mas ligtas ito sa pangmatagalan.</p>

<p>Gusto ninyong subukan? Gumawa ng <a href="/?type=qrcode">libreng QR Code</a> ngayon, o basahin ang <a href="/artikel/cara-membuat-qr-code-gratis">paano gumawa ng QR Code sa 3 hakbang</a>.</p>
`
};
