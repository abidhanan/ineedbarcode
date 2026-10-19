// apa-itu-qr-code
module.exports = {
  title: "Kí Ni QR Code, Báwo Ni Ó Sì Ṣe Ń Ṣiṣẹ́?",
  desc: "QR Code lè tọ́jú ìjápọ̀, ọ̀rọ̀, títí dé dátà WiFi, a sì tún lè kà á bí apá kan rẹ̀ tilẹ̀ bàjẹ́. Bí ó ṣe ń ṣiṣẹ́ àti àǹfààní rẹ̀ nìyí.",
  tags: ["Ìpìlẹ̀", "QR Code"],
  coverCaption: "A lè ṣàyẹ̀wò QR Code tààrà pẹ̀lú kámẹ́rà fóònù.",
  inlineCaption: "Àwọn àpótí kéékèèké dúdú àti funfun ni a fi kọ́ QR Code kọ̀ọ̀kan.",
  faq: [
    ["Ṣé QR Code lè di èyí tí àkókò rẹ̀ ti kọjá?", "QR Code aláìyípadà (static) kì í kọjá àkókò láéláé nítorí pé dátà rẹ̀ wà tààrà nínú àwòrán náà. QR Code oníyípadà (dynamic) lè dá iṣẹ́ dúró bí iṣẹ́ ìpèsè tí ó ni ìjápọ̀ rẹ̀ bá dáwọ́ dúró tàbí bí ìforúkọsílẹ̀ owó bá parí."],
    ["Dátà mélòó ni QR Code lè tọ́jú?", "Ẹ̀dà tó tóbi jùlọ ti QR Code lè tọ́jú tó nọ́ńbà 7,089 tàbí nǹkan bí byte 2,953. Ṣùgbọ́n, bí dátà bá ṣe kéré tó, bẹ́ẹ̀ ni ó ṣe rọrùn tó láti ṣàyẹ̀wò QR Code."],
    ["Ṣé a ṣì lè ka QR Code bí apá kan rẹ̀ bá bàjẹ́?", "Bẹ́ẹ̀ ni. Nítorí àtúnṣe àṣìṣe, a ṣì lè ka QR Code bí nǹkan bí 7% sí 30% rẹ̀ tilẹ̀ bàjẹ́, ó sinmi lórí ìpele àtúnṣe L, M, Q, tàbí H tí a lò."]
  ],
  body: `
<p>QR Code (Quick Response Code) jẹ́ barcode 2D onígun mẹ́rin tí a fi àwọn àpótí kéékèèké dúdú àti funfun kọ́. Yàtọ̀ sí barcode onílà tí ó ń tọ́jú nọ́ńbà mẹ́wàá-lé-díẹ̀ péré, QR Code lè tọ́jú ìjápọ̀ ojú-òpó wẹ́ẹ̀bù, ọ̀rọ̀ gígùn, nọ́ńbà fóònù, ìsọfúnni olùbásọ̀rọ̀, títí dé dátà nẹ́tíwọ́ọ̀kì WiFi.</p>
<p>Denso Wave, ilé-iṣẹ́ kan ní orílẹ̀-èdè Japan, ló ṣẹ̀dá QR Code ní ọdún 1994 láti tọpinpin àwọn ẹ̀yà ara ọkọ̀ ní ilé-iṣẹ́ ìṣelọ́pọ̀. Lónìí, a ń lo QR Code níbi gbogbo, láti ìsanwó oní-nọ́ńbà dé àkójọ oúnjẹ ilé oúnjẹ, nítorí pé a lè ṣàyẹ̀wò rẹ̀ tààrà pẹ̀lú kámẹ́rà fóònù.</p>

<h2>Àwọn apá QR Code</h2>
<ul>
  <li><strong>Àpótí ńlá mẹ́ta ní igun</strong> (finder pattern): wọ́n ń ran kámẹ́rà lọ́wọ́ láti rí QR Code àti láti mọ ìdojúkọ rẹ̀, kí a lè kà á bí a tilẹ̀ ṣàyẹ̀wò rẹ̀ ní wíwọ́ tàbí ní ìdojúdé.</li>
  <li><strong>Àpẹẹrẹ ìtòlẹ́sẹẹsẹ</strong> (alignment pattern): àpótí kékeré tí ó ń ṣèrànwọ́ láti ka QR Code tí ó ká tàbí tí a ń wò láti ẹ̀gbẹ́.</li>
  <li><strong>Agbègbè dátà</strong>: àwọn àpótí kéékèèké tí ó ní ìsọfúnni tí ẹ tọ́jú sínú rẹ̀.</li>
  <li><strong>Agbègbè ìdákẹ́jẹ́ẹ́</strong> (quiet zone): àyè òfìfo yíká QR Code kí ó lè rọrùn láti yà á sọ́tọ̀ kúrò lára ẹ̀yìn rẹ̀.</li>
</ul>

<h2>Dátà mélòó ni ó lè tọ́jú?</h2>
<p>QR Code ní ẹ̀dà ìwọ̀n 40. Ẹ̀dà tó tóbi jùlọ lè tọ́jú tó nọ́ńbà 7,089 tàbí nǹkan bí byte 2,953 dátà. Ní ìlò gidi, bí dátà tí a tọ́jú bá ṣe kéré tó, bẹ́ẹ̀ ni àwọn àpótí ṣe máa tóbi tó, bẹ́ẹ̀ sì ni QR Code ṣe máa rọrùn tó láti ṣàyẹ̀wò. Nítorí náà, ìjápọ̀ kúkúrú dára ju ìjápọ̀ tí ó gùn púpọ̀ lọ.</p>

<h2>A ṣì lè kà á bí ó tilẹ̀ bàjẹ́</h2>
<p>QR Code ń lo àtúnṣe àṣìṣe (error correction). Ìpele mẹ́rin ló wà:</p>
<ul>
  <li><strong>L</strong>: a ṣì lè gba dátà padà bí nǹkan bí 7% QR Code bá bàjẹ́.</li>
  <li><strong>M</strong>: nǹkan bí 15%. Èyí ni àṣàyàn tí ó wọ́pọ̀ tí ó sì wà níwọ̀ntúnwọ̀nsì.</li>
  <li><strong>Q</strong>: nǹkan bí 25%.</li>
  <li><strong>H</strong>: nǹkan bí 30%, ó yẹ fún QR Code tí a ó fi àmì-ìdámọ̀ (logo) sí tàbí tí a ó tẹ̀ sí ibi tí ó máa ń tètè dọ̀tí.</li>
</ul>
<p>Bí ìpele àtúnṣe bá ṣe ga tó, bẹ́ẹ̀ ni àwọn àpótí tí a nílò ṣe máa pọ̀ tó, èyí sì máa ń jẹ́ kí àpẹẹrẹ QR Code dà bí èyí tí ó há gádígádí.</p>

<h2>Kí ni a lè tọ́jú sínú QR Code?</h2>
<ul>
  <li>Ìjápọ̀ ojú-òpó wẹ́ẹ̀bù, ṣọ́ọ̀bù orí ayélujára, tàbí fọ́ọ̀mù.</li>
  <li>Dátà WiFi, kí àwọn àlejò lè sopọ̀ láìtẹ ọ̀rọ̀ aṣínà. Ẹ wo ìtọ́sọ́nà <a href="/artikel/cara-membuat-qr-code-wifi">QR Code WiFi</a>.</li>
  <li>Káàdì ìdánimọ̀ oní-nọ́ńbà (vCard), ímeèlì, SMS, àti ìjíròrò WhatsApp.</li>
  <li>Ibi kan lórí máàpù àti ètò ayẹyẹ.</li>
</ul>

<h2>QR Code aláìyípadà àti oníyípadà</h2>
<p>QR Code tí a ṣẹ̀dá tààrà láti inú dátà ni a ń pè ní <strong>QR Code aláìyípadà</strong>: ohun tí ó wà nínú rẹ̀ wà nínú àwòrán, a kò sì lè yí i padà, ṣùgbọ́n àkókò rẹ̀ kì í kọjá láéláé. QR Code <strong>oníyípadà</strong> ní ìjápọ̀ kúkúrú ti iṣẹ́ ìpèsè kan tí yóò wá darí ènìyàn sí ibi tí ẹ fẹ́; a lè yí ibi tí ó ń lọ padà, ṣùgbọ́n QR Code náà yóò kú bí iṣẹ́ ìpèsè náà bá dáwọ́ dúró. Fún ọ̀pọ̀ àìní, QR Code aláìyípadà ti tó, ó sì ní ààbò jù fún ìgbà pípẹ́.</p>

<p>Ṣé ẹ fẹ́ gbìyànjú rẹ̀? Ẹ ṣẹ̀dá <a href="/?type=qrcode">QR Code lọ́fẹ̀ẹ́</a> báyìí, tàbí ẹ ka <a href="/artikel/cara-membuat-qr-code-gratis">bí a ṣe ń ṣẹ̀dá QR Code ní ìgbésẹ̀ 3</a>.</p>
`
};
