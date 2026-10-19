// apa-itu-qr-code
module.exports = {
  title: "Inona no Atao hoe QR Code ary Ahoana no Fiasany?",
  desc: "Afaka mitahiry rohy, lahatsoratra, hatramin'ny angona WiFi ny QR Code ary mbola azo vakiana na dia simba aza ny ampahany. Ity ny fomba fiasany sy ny tombony azo aminy.",
  tags: ["Fototra", "QR Code"],
  coverCaption: "Azo scannena mivantana amin'ny fakan-tsarin'ny finday ny QR Code.",
  inlineCaption: "Ny QR Code tsirairay dia ahitana efajoro madinika mainty sy fotsy.",
  faq: [
    ["Mety ho lany daty ve ny QR Code?", "Ny QR Code tsy miova (statique) dia tsy lany daty mihitsy satria tafiditra mivantana ao anaty sary ny angony. Ny QR Code miova (dynamique) kosa mety hijanona tsy miasa raha mijanona ny sampan-draharaha manome ny rohiny na tapitra ny famandrihana."],
    ["Angona ohatrinona no azon'ny QR Code tahirizina?", "Ny dikan-teny lehibe indrindra amin'ny QR Code dia afaka mitahiry isa hatramin'ny 7.089 na eo amin'ny 2.953 byte eo ho eo. Na izany aza, arakaraka ny hahakelin'ny angona no mahamora kokoa ny fanaovana scan ny QR Code."],
    ["Mbola azo vakiana ve ny QR Code raha simba ny ampahany?", "Eny. Noho ny fanitsiana hadisoana, mbola azo vakiana ny QR Code na dia simba aza ny eo amin'ny 7% ka hatramin'ny 30% aminy, arakaraka ny ambaratonga fanitsiana L, M, Q, na H ampiasaina."]
  ],
  body: `
<p>Ny QR Code (Quick Response Code) dia barcode 2D miendrika efamira ahitana efajoro madinika mainty sy fotsy. Tsy toy ny barcode tsipika izay tsy mitahiry afa-tsy isa am-polony vitsivitsy, ny QR Code dia afaka mitahiry rohin-tranonkala, lahatsoratra lava, laharana finday, mombamomba ny olona ifandraisana, hatramin'ny angon'ny tambajotra WiFi.</p>
<p>Novolavolain'ny Denso Wave, orinasa japoney, tamin'ny 1994 ny QR Code mba hanaraha-maso ireo kojakojan'ny fiara tao amin'ny ozinina. Ankehitriny dia ampiasaina na aiza na aiza ny QR Code, manomboka amin'ny fandoavam-bola nomerika ka hatramin'ny menion'ny trano fisakafoanana, satria azo scannena mivantana amin'ny fakan-tsarin'ny finday.</p>

<h2>Ireo ampahany amin'ny QR Code</h2>
<ul>
  <li><strong>Efajoro lehibe telo eo amin'ny zoro</strong> (finder pattern): manampy ny fakan-tsary hahita ny QR Code sy hahafantatra ny fitodiany, ka mbola azo vakiana ny QR Code na dia scannena mitongilana na mivadika aza.</li>
  <li><strong>Lamina fampifanarahana</strong> (alignment pattern): efajoro kely manampy amin'ny famakiana QR Code miforitra na hita avy amin'ny zorony.</li>
  <li><strong>Faritry ny angona</strong>: efajoro madinika ahitana ny fampahalalana tahirizinao.</li>
  <li><strong>Faritra mangina</strong> (quiet zone): toerana banga manodidina ny QR Code mba hanamora ny fanavahana azy amin'ny ambadika.</li>
</ul>

<h2>Angona ohatrinona no azony tahirizina?</h2>
<p>Manana dikan-teny 40 amin'ny habeny ny QR Code. Ny dikan-teny lehibe indrindra dia afaka mitahiry isa hatramin'ny 7.089 na angona eo amin'ny 2.953 byte eo ho eo. Raha ny tena izy, arakaraka ny hahakelin'ny angona voatahiry no mahalehibe kokoa ny efajorony ary mahamora kokoa ny fanaovana scan ny QR Code. Noho izany, tsara kokoa ny rohy fohy noho ny rohy lava be.</p>

<h2>Mbola azo vakiana na dia simba aza</h2>
<p>Mampiasa fanitsiana hadisoana (error correction) ny QR Code. Misy ambaratonga efatra:</p>
<ul>
  <li><strong>L</strong>: mbola azo averina ny angona raha simba ny eo amin'ny 7% amin'ny QR Code.</li>
  <li><strong>M</strong>: eo amin'ny 15% eo ho eo. Io no safidy mahazatra sy voalanjalanja.</li>
  <li><strong>Q</strong>: eo amin'ny 25% eo ho eo.</li>
  <li><strong>H</strong>: eo amin'ny 30% eo ho eo, mety amin'ny QR Code hasiana logo na hatonta amin'ny toerana mora maloto.</li>
</ul>
<p>Arakaraka ny hahavon'ny ambaratonga fanitsiana no mahabetsaka ny efajoro ilaina, ka mihasarotra kokoa ny endriky ny QR Code.</p>

<h2>Inona avy no azo tahirizina ao amin'ny QR Code?</h2>
<ul>
  <li>Rohin-tranonkala, fivarotana an-tserasera, na taratasy fenoina.</li>
  <li>Angona WiFi, mba hahafahan'ny vahiny mifandray tsy mila manoratra tenimiafina. Jereo ny torolalana momba ny <a href="/artikel/cara-membuat-qr-code-wifi">QR Code WiFi</a>.</li>
  <li>Karatra nomerika (vCard), mailaka, SMS, ary resaka WhatsApp.</li>
  <li>Toerana eo amin'ny sarintany sy fandaharam-potoanan'ny hetsika.</li>
</ul>

<h2>QR Code tsy miova sy miova</h2>
<p>Ny QR Code namboarina mivantana avy amin'ny angona dia antsoina hoe <strong>QR Code tsy miova</strong> (statique): tafiditra ao anaty sary ny votoatiny ary tsy azo ovaina, nefa tsy lany daty mihitsy koa. Ny QR Code <strong>miova</strong> (dynamique) kosa dia misy rohy fohy an'ny sampan-draharaha iray izay mitondra any amin'ny toerana tianao; azo ovaina io toerana alehany io, fa ho faty ny QR Code raha mijanona io sampan-draharaha io. Ho an'ny ankamaroan'ny filana, ampy ny QR Code tsy miova ary azo antoka kokoa amin'ny fotoana maharitra.</p>

<p>Te hanandrana ve ianao? Mamorona <a href="/?type=qrcode">QR Code maimaim-poana</a> izao, na vakio ny <a href="/artikel/cara-membuat-qr-code-gratis">fomba famoronana QR Code amin'ny dingana 3</a>.</p>
`
};
