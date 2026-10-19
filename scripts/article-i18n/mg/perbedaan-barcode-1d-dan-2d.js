// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Fahasamihafan'ny Barcode 1D sy 2D: Iza no Ilainao?",
  desc: "Samy barcode ny barcode tsipika sy ny QR Code, saingy tsy mitovy ny ilàna azy. Ampitahao ny fahafahany mitahiry, ny fomba fanaovana scan, ary ohatra amin'ny fampiasana azy.",
  tags: ["Fototra", "Barcode"],
  coverCaption: "Mamaky barcode 1D sy 2D ny scanner tanana any amin'ny trano fitehirizana entana.",
  inlineCaption: "Matetika mampiasa barcode tsipika ny marika fandefasana entana.",
  faq: [
    ["Afaka mamaky QR Code ve ny scanner amin'ny toeram-pandoavam-bola?", "Tsy izy rehetra. Ny scanner laser 1D dia tsy mamaky afa-tsy barcode tsipika. Ho an'ny QR Code dia ilaina ny scanner 2D mampiasa fakan-tsary na ny fakan-tsarin'ny finday."],
    ["Barcode inona no kely indrindra?", "Ny Data Matrix dia anisan'ny barcode 2D azo atonta kely dia kely, ka matetika ampiasaina amin'ny singa elektronika, fitaovana ara-pahasalamana, ary marika fanafody."],
    ["Azo ampiasaina hisolo ny EAN-13 amin'ny vokatra amidy ve ny QR Code?", "Mba hamidy any amin'ny fivarotana, mbola mila EAN-13 na UPC voasoratra ny vokatra. Azo ampiana eo amin'ny fonosana ho famenony ny QR Code, ohatra ho an'ny fampahalalana momba ny vokatra na ny dokam-barotra."]
  ],
  body: `
<p>Rehefa mamorona barcode, ny fanontaniana voalohany matetika mipoitra dia hoe: barcode tsipika sa QR Code? Samy antsoina hoe barcode izy roa, saingy tsy mitovy ny fomba fitahirizany angona ka tsy mitovy koa ny ilàna azy.</p>

<h2>Barcode 1D (tsipika)</h2>
<p>Ny barcode 1D dia barcode miendrika tsipika mitsangana. Voatahiry amin'ny lalana iray ny angona, izany hoe avy any ankavia mankany ankavanana. Ny ohatra malaza indrindra dia ny <a href="/?type=ean13">EAN-13</a> eo amin'ny fonosan'ny vokatra sy ny <a href="/?type=code128">Code 128</a> eo amin'ny marika fandefasana entana.</p>
<ul>
  <li>Kely ny fahafahany mitahiry, matetika litera am-polony vitsivitsy ka hatramin'ny am-polony maromaro.</li>
  <li>Azo vakian'ny scanner laser mora vidy sy haingana be amin'ny toeram-pandoavam-bola.</li>
  <li>Mety amin'ny kaodim-bokatra, laharana filaharana, ary laharam-pandefasana entana.</li>
</ul>

<h2>Barcode 2D</h2>
<p>Ny barcode 2D dia mitahiry angona amin'ny lalana roa, mitsivalana sy midina, ka mahazaka bebe kokoa lavitra. Ohatra amin'izany ny <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, ary <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Lehibe ny fahafahany mitahiry, manomboka amin'ny litera am-polony ka hatramin'ny an'arivony.</li>
  <li>Azo scannena amin'ny fakan-tsarin'ny finday avy amin'ny lafiny samihafa.</li>
  <li>Manana fanitsiana hadisoana, ka mbola azo vakiana na dia simba aza ny ampahany.</li>
  <li>Azo atao kely dia kely, ohatra ny Data Matrix eo amin'ny singa elektronika.</li>
</ul>

<h2>Fampitahana fohifohy</h2>
<table>
  <thead><tr><th></th><th>Barcode 1D</th><th>Barcode 2D</th></tr></thead>
  <tbody>
    <tr><td>Endrika</td><td>Tsipika mitsangana</td><td>Efajoro/teboka ao anaty efamira</td></tr>
    <tr><td>Fahafahana mitahiry</td><td>Kely</td><td>Lehibe</td></tr>
    <tr><td>Fitaovana scan</td><td>Scanner laser na fakan-tsary</td><td>Fakan-tsary na scanner 2D</td></tr>
    <tr><td>Fahazakana fahasimbana</td><td>Voafetra</td><td>Misy fanitsiana hadisoana</td></tr>
    <tr><td>Ohatra</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Rahoviana no hampiasana ny iray na ny iray?</h2>
<ul>
  <li><strong>Vokatra amidy any amin'ny fivarotana na fivarotana madinika</strong>: ampiasao ny EAN-13 ofisialy avy amin'ny GS1. Jereo ny <a href="/artikel/cara-mendapatkan-barcode-ean-13">fomba hahazoana barcode EAN-13</a>.</li>
  <li><strong>Marika any amin'ny trano fitehirizana, talantalana, na fandefasana</strong>: ny Code 128 no safidy mahazatra satria mahazaka angona betsaka amin'ny toerana kely ary mahazaka litera sy isa.</li>
  <li><strong>Rohy, menio, WiFi, na mombamomba ny olona ifandraisana ho an'ny mpanjifa</strong>: QR Code, satria azo scannena mivantana amin'ny fakan-tsarin'ny finday.</li>
  <li><strong>Marika kely dia kely</strong>: Data Matrix.</li>
  <li><strong>Kara-panondro, tapakila fiaramanidina, na antontan-taratasy</strong>: PDF417 na Aztec.</li>
</ul>
<p>Ireo karazana rehetra voalaza etsy ambony ireo dia azonao amboarina maimaim-poana ao amin'ny <a href="/">I Need Barcode</a>. Raha mbola misalasala ianao, atombohy amin'ny QR Code ho an'ny filan'ny mpanjifa sy Code 128 ho an'ny filana anatiny.</p>
`
};
