// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Husto nga Gidak-on ug Resolusyon sa Barcode alang sa Pag-imprenta",
  desc: "Ang barcode nga gamay kaayo o hanap lisod i-scan. Ilha ang kinagamyang gidak-on, ang lagda sa gilay-on sa pag-scan, ug ang luwas nga resolusyon sa hulagway alang sa pag-imprenta.",
  tags: ["Giya", "Pag-imprenta"],
  coverCaption: "Ang label printer nag-imprenta og barcode alang sa mga padala ug putos.",
  inlineCaption: "Ang gidak-on sa label mao ang motino kon unsa kadako ma-imprenta ang barcode.",
  faq: [
    ["Unsa ang kinagamyang gidak-on sa QR Code alang sa pag-imprenta?", "Alang sa pag-scan sa duol, mga 2 × 2 cm ang luwas nga kinagamyan. Alang sa mas layo nga gilay-on, gamita ang ratio nga mga 10 : 1 tali sa gilay-on sa pag-scan ug sa gilapdon sa QR Code."],
    ["Unsa ang sumbanang gidak-on sa EAN-13 nga barcode?", "Ang sumbanang gidak-on sa EAN-13 mga 37.3 × 25.9 mm. Mahimo kining gamayon hangtod sa mga 80% o padakoon hangtod sa 200%."],
    ["Nganong nahanap ang akong barcode human ma-imprenta?", "Kasagaran tungod kay gipadako ang gamay nga hulagway, o gitipigan kini isip ubos-kalidad nga JPG. I-download kini nga mas dako ang gidak-on sa module sa format nga PNG."]
  ],
  body: `
<p>Ang barcode nga nindot tan-awon sa screen dili sigurado nga mabasa human ma-imprenta. Ang gidak-on nga gamay kaayo, ubos nga resolusyon, o tinta nga mokaylap mahimong makapapakyas sa scanner sa pagbasa niini. Ania ang giya aron mabasa gihapon ang inyong mga imprenta.</p>

<h2>Sabta ang module</h2>
<p>Ang <strong>module</strong> mao ang kinagamyang yunit sa barcode, nga mao ang usa ka gamay nga kuwadrado sa QR Code o ang kinanipisan nga linya sa barcode nga linya. Ang gidak-on sa module mao ang motino kon unsa kasayon mabasa ang barcode. Sa <a href="/">I Need Barcode</a>, ang gidak-on sa module mahimong itakda sa bahin nga Settings: kon mas taas ang bili, mas dako ug mas hait ang hulagway nga ma-download.</p>

<h2>Kinagamyang gidak-on sa QR Code</h2>
<ul>
  <li>Alang sa pag-scan sa duol (pananglitan business card o label sa produkto), ang gidak-on nga mga <strong>2 × 2 cm</strong> mao ang luwas nga kinagamyan.</li>
  <li>Gamita ang lagda sa ratio nga mga <strong>10 : 1</strong>: ang gilay-on sa pag-scan mga napulo ka pilo sa gilapdon sa QR Code. Alang sa poster nga i-scan gikan sa 2 metros, himoa ang QR Code nga dili moubos sa mga 20 cm.</li>
  <li>Kon mas daghang datos ang inyong gitipigan, mas dasok ang sumbanan, mao nga mas dako nga gidak-on ang gikinahanglan.</li>
</ul>

<h2>Gidak-on sa barcode sa produkto</h2>
<p>Ang sumbanang gidak-on sa <a href="/?type=ean13">EAN-13</a> mga 37.3 × 25.9 mm (100%). Mahimo kining gamayon hangtod sa mga 80% o padakoon hangtod sa 200%. Likayi ang pagputol sa gitas-on sa mga linya nga mubo kaayo, tungod kay ang mga scanner sa kahera nagkinahanglan og luna aron makabasa gikan sa lainlaing anggulo.</p>

<h2>Resolusyon sa hulagway</h2>
<ul>
  <li>Alang sa pag-imprenta, paningkamuti nga ang matag module madrowing gamit ang <strong>pipila ka buo nga pixel</strong>, dili tunga-tunga nga pixel. Pilia ang mas dako nga gidak-on sa module sa pag-download, unya gamaya kini sa inyong app sa disenyo, dili ang sukwahi.</li>
  <li>Likayi ang pagpadako sa gagmay nga hulagway sa barcode, tungod kay ang mga ngilit sa kuwadrado mahimong hanap o gisi-gisi.</li>
  <li>Tipigi sa format nga PNG aron ang mga kolor ug ngilit dili mous-os ang kalidad sama sa JPG.</li>
</ul>

<h2>Quiet zone</h2>
<p>Ang matag barcode nagkinahanglan og bakanteng luna palibot niini, nga gitawag og <strong>quiet zone</strong>. Alang sa QR Code, ang labing maayo upat ka module ang gilapdon niini. Alang sa barcode nga linya, ang bakanteng luna sa wala ug tuo importante kaayo. Ayaw ibutang ang teksto, mga linya sa disenyo, o ngilit sa putos nga duol kaayo.</p>

<h2>Kolor ug materyal</h2>
<ul>
  <li>Gamita ang ngitngit nga kolor alang sa barcode ug hayag nga kolor alang sa background.</li>
  <li>Likayi ang sinaw o tin-aw nga materyal, tungod kay ang pagbanaag sa kahayag makabalda sa camera.</li>
  <li>Kanunay pag-imprenta og usa ka sample ug sulayi kini gamit ang pipila ka cellphone o scanner sa dili pa mag-imprenta og daghan.</li>
</ul>
<p>Kon lisod gihapon i-scan ang inyong barcode, susiha ang <a href="/artikel/barcode-tidak-bisa-dipindai">7 ka hinungdan nganong dili ma-scan ang barcode</a>.</p>
`
};
