// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Ìyàtọ̀ Láàrin Barcode 1D àti 2D: Èwo Ni Ẹ Nílò?",
  desc: "Barcode onílà àti QR Code jẹ́ barcode méjèèjì, ṣùgbọ́n ìlò wọn yàtọ̀. Ẹ fi agbára ìtọ́jú, ọ̀nà ìṣàyẹ̀wò, àti àpẹẹrẹ ìlò wọn wé ara wọn.",
  tags: ["Ìpìlẹ̀", "Barcode"],
  coverCaption: "Ẹ̀rọ ìṣàyẹ̀wò ọwọ́ ní ilé ìkẹ́rùsí ń ka barcode 1D àti 2D.",
  inlineCaption: "Àmì ìkẹ́rù sábà máa ń lo barcode onílà.",
  faq: [
    ["Ṣé ẹ̀rọ ìṣàyẹ̀wò ibi ìsanwó lè ka QR Code?", "Kì í ṣe gbogbo wọn. Ẹ̀rọ ìṣàyẹ̀wò laser 1D máa ń ka barcode onílà nìkan. Fún QR Code, a nílò ẹ̀rọ ìṣàyẹ̀wò 2D tí ó ń lo kámẹ́rà tàbí kámẹ́rà fóònù."],
    ["Barcode wo ló kéré jùlọ?", "Data Matrix wà lára àwọn barcode 2D tí a lè tẹ̀ jáde ní kékeré gan-an, nítorí náà a sábà máa ń lò ó lórí àwọn ẹ̀yà ẹ̀rọ abánáṣiṣẹ́, ohun èlò ìlera, àti àmì oògùn."],
    ["Ṣé a lè lo QR Code dípò EAN-13 lórí ọjà ìtajà?", "Kí a tó lè tà á ní ṣọ́ọ̀bù ìtajà, ọjà ṣì nílò EAN-13 tàbí UPC tí a ti forúkọ rẹ̀ sílẹ̀. A lè ṣàfikún QR Code sórí àpò ọjà gẹ́gẹ́ bí àfikún, fún àpẹẹrẹ fún ìsọfúnni ọjà tàbí ìpolówó."]
  ],
  body: `
<p>Nígbà tí a bá ń ṣẹ̀dá barcode, ìbéèrè àkọ́kọ́ tí ó sábà máa ń jáde ni: ṣé barcode onílà ni kí a lò ni tàbí QR Code? Barcode ni a ń pè àwọn méjèèjì, ṣùgbọ́n ọ̀nà tí wọ́n gbà ń tọ́jú dátà yàtọ̀, nítorí náà ìlò wọn náà yàtọ̀.</p>

<h2>Barcode 1D (onílà)</h2>
<p>Barcode 1D jẹ́ barcode tí ó ní àwọn ìlà ìdúró. A ń tọ́jú dátà ní ọ̀nà kan, ìyẹn láti òsì sí ọ̀tún. Àpẹẹrẹ tí a mọ̀ jùlọ ni <a href="/?type=ean13">EAN-13</a> lórí àpò ọjà àti <a href="/?type=code128">Code 128</a> lórí àmì ìkẹ́rù.</p>
<ul>
  <li>Agbára ìtọ́jú kékeré, sábà máa ń jẹ́ ohun kíkọ mẹ́wàá-lé-díẹ̀ títí dé mẹ́wàá mélòó kan.</li>
  <li>Ẹ̀rọ ìṣàyẹ̀wò laser ibi ìsanwó tí kò wọ́n tí ó sì yára gan-an lè kà á.</li>
  <li>Ó yẹ fún kóòdù ọjà, nọ́ńbà ìtẹ̀léra (serial), àti nọ́ńbà ìtọpinpin ẹrù.</li>
</ul>

<h2>Barcode 2D</h2>
<p>Barcode 2D ń tọ́jú dátà ní ọ̀nà méjì, sí ẹ̀gbẹ́ àti sí ìsàlẹ̀, nítorí náà ó ń gba dátà púpọ̀ jù bẹ́ẹ̀ lọ. Àpẹẹrẹ wọn ni <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, àti <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Agbára ìtọ́jú ńlá, láti mẹ́wàá mélòó kan títí dé ẹgbẹẹgbẹ̀rún ohun kíkọ.</li>
  <li>Kámẹ́rà fóònù lè ṣàyẹ̀wò rẹ̀ láti oríṣiríṣi ọ̀nà.</li>
  <li>Ó ní àtúnṣe àṣìṣe, nítorí náà a ṣì lè kà á bí apá kan rẹ̀ tilẹ̀ bàjẹ́.</li>
  <li>A lè ṣe é ní kékeré gan-an, fún àpẹẹrẹ Data Matrix lórí àwọn ẹ̀yà ẹ̀rọ abánáṣiṣẹ́.</li>
</ul>

<h2>Àfiwé ní ṣókí</h2>
<table>
  <thead><tr><th></th><th>Barcode 1D</th><th>Barcode 2D</th></tr></thead>
  <tbody>
    <tr><td>Ìrísí</td><td>Ìlà ìdúró</td><td>Àpótí/àmì nínú onígun mẹ́rin</td></tr>
    <tr><td>Agbára ìtọ́jú</td><td>Kékeré</td><td>Ńlá</td></tr>
    <tr><td>Ohun èlò ìṣàyẹ̀wò</td><td>Ẹ̀rọ ìṣàyẹ̀wò laser tàbí kámẹ́rà</td><td>Kámẹ́rà tàbí ẹ̀rọ ìṣàyẹ̀wò 2D</td></tr>
    <tr><td>Ìfaradà fún ìbàjẹ́</td><td>Ní ààlà</td><td>Ó ní àtúnṣe àṣìṣe</td></tr>
    <tr><td>Àpẹẹrẹ</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Ìgbà wo ni kí a lo èwo?</h2>
<ul>
  <li><strong>Ọjà tí a ń tà ní ṣọ́ọ̀bù tàbí ṣọ́ọ̀bù kékeré</strong>: ẹ lo EAN-13 ti ìjọba láti GS1. Ẹ wo <a href="/artikel/cara-mendapatkan-barcode-ean-13">bí a ṣe lè gba barcode EAN-13</a>.</li>
  <li><strong>Àmì ilé ìkẹ́rùsí, pẹpẹ, tàbí ìkẹ́rù</strong>: Code 128 jẹ́ àṣàyàn tí ó wọ́pọ̀ nítorí pé ó kéré níwọ̀n, ó sì ń ṣàtìlẹ́yìn fún lẹ́tà àti nọ́ńbà.</li>
  <li><strong>Ìjápọ̀, àkójọ oúnjẹ, WiFi, tàbí ìsọfúnni olùbásọ̀rọ̀ fún àwọn oníbàárà</strong>: QR Code, nítorí pé a lè ṣàyẹ̀wò rẹ̀ tààrà pẹ̀lú kámẹ́rà fóònù.</li>
  <li><strong>Àmì tí ó kéré gan-an</strong>: Data Matrix.</li>
  <li><strong>Káàdì ìdánimọ̀, tíkẹ́ẹ̀tì ọkọ̀ òfurufú, tàbí ìwé àṣẹ</strong>: PDF417 tàbí Aztec.</li>
</ul>
<p>Ẹ lè ṣẹ̀dá gbogbo àwọn oríṣi tí ó wà lókè yìí lọ́fẹ̀ẹ́ lórí <a href="/">I Need Barcode</a>. Bí ẹ bá ṣì ń ṣiyèméjì, ẹ bẹ̀rẹ̀ pẹ̀lú QR Code fún àìní àwọn oníbàárà àti Code 128 fún àìní inú ilé.</p>
`
};
