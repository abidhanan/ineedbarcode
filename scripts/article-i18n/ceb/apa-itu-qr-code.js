// apa-itu-qr-code
module.exports = {
  title: "Unsa ang QR Code ug Unsaon Kini Paglihok?",
  desc: "Ang QR Code makatipig og link, teksto, ug bisan datos sa WiFi, ug mabasa gihapon bisan kon nadaot ang usa ka bahin. Kini ang paagi sa paglihok niini ug ang nakapahimo niini nga mapuslanon.",
  tags: ["Sukaranan", "QR Code"],
  coverCaption: "Ang QR Code ma-scan dayon gamit ang camera sa cellphone.",
  inlineCaption: "Ang matag QR Code gilangkoban sa gagmay nga itom ug puti nga mga kuwadrado.",
  faq: [
    ["Mahimo bang ma-expire ang QR Code?", "Ang static nga QR Code dili gayod ma-expire tungod kay ang datos niini direktang nakabutang sa hulagway. Ang dynamic nga QR Code mahimong mohunong sa paglihok kon ang serbisyo nga naghatag sa link niini mosira o matapos ang subscription."],
    ["Pila ka datos ang matipigan sa QR Code?", "Ang kinadak-ang bersiyon sa QR Code makatipig hangtod sa 7,089 ka digit o mga 2,953 bytes. Apan, kon mas gamay ang datos, mas sayon kining i-scan."],
    ["Mabasa pa ba ang QR Code kon nadaot ang usa ka bahin niini?", "Oo. Tungod sa error correction, ang QR Code mabasa gihapon bisan kon mga 7% hangtod 30% niini ang nadaot, depende sa lebel sa koreksiyon nga gigamit: L, M, Q, o H."]
  ],
  body: `
<p>Ang QR Code (Quick Response Code) usa ka kuwadrado nga 2D nga barcode nga gilangkoban sa gagmay nga itom ug puti nga mga kuwadrado. Dili sama sa barcode nga linya nga nagtipig lamang og napulo ug pipila ka digit, ang QR Code makatipig og link sa website, taas nga teksto, numero sa telepono, kontak, ug bisan ang datos sa network sa WiFi.</p>
<p>Ang QR Code gimugna niadtong 1994 sa Denso Wave, usa ka kompanya sa Japan, aron masubay ang mga piyesa sa sakyanan sa pabrika. Karon ang QR Code gigamit bisan asa, gikan sa digital nga pagbayad hangtod sa menu sa restawran, tungod kay ma-scan kini dayon gamit ang camera sa cellphone.</p>

<h2>Mga bahin sa QR Code</h2>
<ul>
  <li><strong>Tulo ka dagkong kuwadrado sa mga eskina</strong> (finder pattern): motabang sa camera sa pagpangita sa QR Code ug pagtino sa direksiyon niini, mao nga mabasa gihapon ang QR Code bisan kon i-scan nga hiwi o baliskad.</li>
  <li><strong>Alignment pattern</strong>: gamay nga kuwadrado nga motabang sa pagbasa sa QR Code nga nabawog o gitan-aw gikan sa kilid.</li>
  <li><strong>Lugar sa datos</strong>: ang gagmay nga mga kuwadrado nga adunay impormasyon nga inyong gitipigan.</li>
  <li><strong>Quiet zone</strong>: ang bakanteng luna palibot sa QR Code nga makapasayon sa pagbulag niini gikan sa background.</li>
</ul>

<h2>Pila ka datos ang matipigan niini?</h2>
<p>Ang QR Code adunay 40 ka bersiyon sa gidak-on. Ang kinadak-ang bersiyon makatipig hangtod sa 7,089 ka digit o mga 2,953 bytes nga datos. Sa praktika, kon mas gamay ang datos nga inyong gitipigan, mas dagko ang mga kuwadrado ug mas sayon i-scan ang QR Code. Mao kana nga ang mubo nga link mas maayo kaysa sa taas kaayo nga link.</p>

<h2>Mabasa gihapon bisan kon nadaot</h2>
<p>Ang QR Code naggamit og error correction. Adunay upat ka lebel:</p>
<ul>
  <li><strong>L</strong>: ang datos mabawi pa kon mga 7% sa QR Code ang nadaot.</li>
  <li><strong>M</strong>: mga 15%. Kini ang kasagaran ug balanseng pilian.</li>
  <li><strong>Q</strong>: mga 25%.</li>
  <li><strong>H</strong>: mga 30%, angay alang sa QR Code nga butangan og logo o i-imprenta sa mga dapit nga daling mahugawan.</li>
</ul>
<p>Kon mas taas ang lebel sa koreksiyon, mas daghang kuwadrado ang gikinahanglan, mao nga ang sumbanan sa QR Code makita nga mas dasok.</p>

<h2>Unsa ang mahimong itipig sa QR Code?</h2>
<ul>
  <li>Link ngadto sa website, online nga tindahan, o porma.</li>
  <li>Datos sa WiFi, aron ang mga bisita makakonektar nga dili na mag-type og password. Tan-awa ang giya sa <a href="/artikel/cara-membuat-qr-code-wifi">QR Code sa WiFi</a>.</li>
  <li>Digital nga business card (vCard), email, SMS, ug chat sa WhatsApp.</li>
  <li>Lokasyon sa mapa ug iskedyul sa mga kalihokan.</li>
</ul>

<h2>Static ug dynamic nga QR Code</h2>
<p>Ang QR Code nga gihimo direkta gikan sa datos gitawag nga <strong>static nga QR Code</strong>: ang sulod niini nakabutang sa hulagway ug dili na mausab, apan dili usab kini ma-expire. Ang QR Code nga <strong>dynamic</strong> adunay mubo nga link nga gipanag-iya sa usa ka serbisyo, unya kini moredirect ngadto sa inyong destinasyon; ang destinasyon mausab, apan ang QR Code mohunong sa paglihok kon mosira ang maong serbisyo. Alang sa kadaghanan nga panginahanglan, igo na ang static nga QR Code ug mas luwas sa dugay nga panahon.</p>

<p>Gusto ba ninyo nga sulayan? Paghimo og <a href="/?type=qrcode">libre nga QR Code</a> karon, o basaha ang <a href="/artikel/cara-membuat-qr-code-gratis">unsaon paghimo og QR Code sa 3 ka lakang</a>.</p>
`
};
