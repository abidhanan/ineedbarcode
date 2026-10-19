// apa-itu-barcode
module.exports = {
  title: "Inona no Atao hoe Barcode? Famaritana, Fomba Fiasa, ary Karazany",
  desc: "Misy barcode eo amin'ny ankamaroan'ny vokatra vidinao. Fantaro ny fomba fiasany, ny tantarany fohifohy, ary ireo karazana barcode fampiasa indrindra.",
  tags: ["Fototra", "Barcode"],
  coverCaption: "Ny barcode eo amin'ny fonosana dia mitahiry kaody manokana ho an'ny vokatra.",
  inlineCaption: "Mampiasa scanner ny mpandray vola mba hamakiana ny barcode ao anatin'ny indray mipy maso.",
  faq: [
    ["Inona no mampiavaka ny barcode sy ny QR Code?", "Karazana barcode iray ny QR Code, dia ny barcode 2D. Ny barcode tsipika (1D) dia tsy mitahiry afa-tsy litera vitsivitsy ary vakiana avy any ankavia mankany ankavanana, fa ny QR Code kosa mitahiry angona amin'ny lalana roa ka afaka mahazaka rohy, lahatsoratra, na angona WiFi."],
    ["Mitahiry ny vidin'ny vokatra ve ny barcode?", "Matetika tsia. Kaody fotsiny no ao amin'ny barcode vokatra. Ny vidiny sy ny anaran'ny vokatra dia voatahiry ao amin'ny rafitry ny toeram-pandoavam-bola, ary tadiavina araka ny kaody voascanne."],
    ["Mila mandoa vola ve ny famoronana barcode?", "Tsia. Azo atao maimaim-poana ny sarin'ny barcode, ohatra ao amin'ny I Need Barcode. Ny tokony hosoratana anarana sy aloa vola ihany dia ny laharana ofisialy ho an'ny barcode vokatra amidy any amin'ny fivarotana toy ny EAN-13, amin'ny alalan'ny GS1."]
  ],
  body: `
<p>Ny barcode dia fomba fanoratana angona amin'ny endrika sary azon'ny milina vakiana. Matetika io sary io dia tsipika mainty sy fotsy tsy mitovy sakany, na efajoro madinika voalamina ao anaty efamira iray. Rehefa scannena izy, dia averina ho isa na lahatsoratra indray io sary io, ohatra kaodim-bokatra, laharam-pandefasana entana, na adiresin-tranonkala.</p>
<p>Satria milina no mamaky azy, dia haingana lavitra sy tsy dia misy diso loatra ny barcode raha oharina amin'ny fanoratana tanana ny kaody. Izany no mahatonga ny barcode ampiasaina any amin'ny toeram-pandoavam-bola, trano fitehirizana entana, hopitaly, tapakila, hatramin'ny fonosana sakafo.</p>

<h2>Tantara fohifohy momba ny barcode</h2>
<p>Ny hevitra momba ny barcode dia nahazo patanty tamin'ny 1952 avy amin'i Norman Joseph Woodland sy Bernard Silver tany Etazonia. Tamin'ny 1974 vao tena nampiasaina tao amin'ny fivarotana ny barcode, rehefa nisy fonosana sigara-mamy iray voascanne tao amin'ny supermarket iray tany Ohio tamin'ny kaody UPC. Nanomboka teo, niely nanerana izao tontolo izao ny barcode ary ankehitriny dia tantanin'ny fikambanana mpametraka fenitra antsoina hoe GS1 eran-tany.</p>

<h2>Ahoana no fiasan'ny barcode?</h2>
<p>Ny scanner dia manazava ny barcode ary mamaky ny hazavana miverina. Ny faritra maizina dia mamerina hazavana kely, ny faritra mazava kosa mamerina be. Io fahasamihafana io dia avadika ho andian-isa 0 sy 1, ary ampitahaina amin'ny fitsipiky ny karazana barcode. Barcode maro koa no manana <strong>isa fanamarinana</strong> (check digit), izany hoe ny isa farany kajiana avy amin'ireo isa teo alohany. Raha tsy mifanaraka ny valin'ny kajy, dia fantatry ny scanner fa misy olana ary laviny ny valiny.</p>
<p>Ny barcode mihitsy dia matetika tsy mitahiry afa-tsy kaody. Ny fampahalalana toy ny anaran'ny vokatra na ny vidiny dia voatahiry ao amin'ny rafitry ny toeram-pandoavam-bola na ao amin'ny tahiry angona (database), ary tadiavina araka io kaody io.</p>

<h2>Karazana barcode matetika ampiasaina</h2>
<p>Amin'ny ankapobeny, mizara ho vondrona lehibe roa ny barcode:</p>
<ul>
  <li><strong>Barcode 1D (tsipika)</strong>: tsipika mitsangana vakiana avy any ankavia mankany ankavanana. Ohatra amin'izany ny <a href="/?type=ean13">EAN-13</a> sy ny <a href="/?type=upca">UPC-A</a> ho an'ny vokatra amidy, ary ny <a href="/?type=code128">Code 128</a> sy ny <a href="/?type=code39">Code 39</a> ho an'ny lojistika sy ny trano fitehirizana entana.</li>
  <li><strong>Barcode 2D</strong>: sary misy efajoro mitahiry angona amin'ny lalana roa, ka mahazaka bebe kokoa lavitra. Ohatra amin'izany ny <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, ary <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Ankoatra izany, misy barcode manokana ho an'ny paositra sy ny fandefasana entana, ho an'ny fahasalamana, ary ireo fenitra GS1 ho an'ny rojom-pamatsiana. Azonao vakiana ao amin'ny lahatsoratra <a href="/artikel/perbedaan-barcode-1d-dan-2d">Fahasamihafan'ny Barcode 1D sy 2D</a> ny fanazavana amin'ny antsipiriany momba ny fahasamihafany.</p>

<h2>Ampiasaina amin'ny inona ny barcode?</h2>
<ul>
  <li><strong>Varotra antsinjarany</strong>: manafaingana ny fandoavam-bola ary mandrakitra ho azy ny tahirin'entana.</li>
  <li><strong>Trano fitehirizana sy fandefasana</strong>: manara-maso ny entana sy ny fonosana avy amin'ny toerana iray mankany amin'ny toerana hafa.</li>
  <li><strong>Tapakila sy hetsika</strong>: manamarina ny maha-tena izy ny tapakila amin'ny scan iray monja.</li>
  <li><strong>Varotra sy dokam-barotra</strong>: ny QR Code eo amin'ny taratasy fanentanana na fonosana dia mitondra mivantana ny olona any amin'ny tranonkalanao, ny menionao, na ny WhatsApp-nao.</li>
</ul>

<h2>Mamorona barcode ho anao</h2>
<p>Tsy mila rindranasa mandoa vola ianao vao afaka mamorona barcode. Ao amin'ny <a href="/">I Need Barcode</a>, safidio ny karazana barcode, fenoy ny angona, ary alaivo ho sary PNG. Misy karazany maherin'ny 100 azonao isafidianana, ary maimaim-poana daholo izy ireo tsy mila misoratra anarana.</p>
`
};
