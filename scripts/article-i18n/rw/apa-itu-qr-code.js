// apa-itu-qr-code
module.exports = {
  title: "QR Code ni Iki kandi Ikora Ite?",
  desc: "QR Code ishobora kubika umurongo (link), inyandiko, ndetse n'amakuru ya WiFi kandi igakomeza gusomeka nubwo igice cyayo cyangiritse. Dore uko ikora n'ibyiza byayo.",
  tags: ["Ibanze", "QR Code"],
  coverCaption: "QR Code ishobora gusikanwa mu buryo butaziguye na kamera ya telefoni.",
  inlineCaption: "Buri QR Code igizwe n'udusanduku duto tw'umukara n'umweru.",
  faq: [
    ["Ese QR Code ishobora guta agaciro (kurangira igihe)?", "QR Code idahinduka (static) ntijya irangira kuko amakuru yayo ashyizwe mu buryo butaziguye mu ishusho. QR Code ihinduka (dynamic) ishobora guhagarika gukora iyo serivisi itanga umurongo wayo ihagaze cyangwa ifatabuguzi rirangiye."],
    ["QR Code ishobora kubika amakuru angana iki?", "Verisiyo nini ya QR Code ishobora kubika imibare igera ku 7.089 cyangwa hafi byte 2.953. Ariko, uko amakuru aba make, ni ko QR Code iba yoroshye gusikana."],
    ["Ese QR Code ikomeza gusomeka nubwo igice cyayo cyangiritse?", "Yego. Kubera ikosora ry'amakosa, QR Code ikomeza gusomeka nubwo hafi 7% kugeza kuri 30% byayo byangiritse, bitewe n'urwego rw'ikosora L, M, Q, cyangwa H rwakoreshejwe."]
  ],
  body: `
<p>QR Code (Quick Response Code) ni barcode ya 2D ifite ishusho ya kare igizwe n'udusanduku duto tw'umukara n'umweru. Bitandukanye na barcode y'imirongo ibika imibare icumi n'indi mike gusa, QR Code ishobora kubika umurongo w'urubuga, inyandiko ndende, nimero ya telefoni, aderesi z'abantu, ndetse n'amakuru y'umuyoboro wa WiFi.</p>
<p>QR Code yakozwe mu 1994 na Denso Wave, sosiyete yo mu Buyapani, kugira ngo ikurikirane ibice by'imodoka mu nganda. Ubu QR Code ikoreshwa hose, kuva ku kwishyura mu buryo bw'ikoranabuhanga kugeza ku rutonde rw'ibiribwa mu maresitora, kuko ishobora gusikanwa mu buryo butaziguye na kamera ya telefoni.</p>

<h2>Ibice bya QR Code</h2>
<ul>
  <li><strong>Udusanduku dutatu tunini mu mfuruka</strong> (finder pattern): dufasha kamera kubona QR Code no kumenya icyerekezo cyayo, ku buryo QR Code ikomeza gusomeka nubwo isikanywe ihengamye cyangwa icuramye.</li>
  <li><strong>Igishushanyo cy'iringaniza</strong> (alignment pattern): agasanduku gato gafasha gusoma QR Code yagonze cyangwa irebwa ku ruhande.</li>
  <li><strong>Agace k'amakuru</strong>: udusanduku duto turimo amakuru mubika.</li>
  <li><strong>Agace gatuje</strong> (quiet zone): umwanya w'ubusa ukikije QR Code kugira ngo byoroshye kuyitandukanya n'inyuma yayo.</li>
</ul>

<h2>Ishobora kubika amakuru angana iki?</h2>
<p>QR Code ifite verisiyo 40 z'ingano. Verisiyo nini ishobora kubika imibare igera ku 7.089 cyangwa hafi byte 2.953 z'amakuru. Mu bikorwa, uko amakuru abitswe aba make, ni ko udusanduku tuba tunini kandi QR Code ikoroha gusikana. Ni yo mpamvu umurongo mugufi ari mwiza kurusha umurongo muremure cyane.</p>

<h2>Ikomeza gusomeka nubwo yangiritse</h2>
<p>QR Code ikoresha ikosora ry'amakosa (error correction). Hari inzego enye:</p>
<ul>
  <li><strong>L</strong>: amakuru ashobora kugarurwa nubwo hafi 7% bya QR Code byangiritse.</li>
  <li><strong>M</strong>: hafi 15%. Iri ni ihitamo risanzwe kandi riringaniye.</li>
  <li><strong>Q</strong>: hafi 25%.</li>
  <li><strong>H</strong>: hafi 30%, ibereye QR Code izashyirwaho ikirango (logo) cyangwa izacapwa ahantu hakunda kwanduzwa.</li>
</ul>
<p>Uko urwego rw'ikosora ruzamuka, ni ko hakenerwa udusanduku twinshi, bityo igishushanyo cya QR Code kikagaragara kegeranye cyane.</p>

<h2>Ni iki gishobora kubikwa muri QR Code?</h2>
<ul>
  <li>Umurongo w'urubuga, iduka rya interineti, cyangwa ifishi.</li>
  <li>Amakuru ya WiFi, ku buryo abashyitsi bashobora kwihuza batanditse ijambobanga. Reba ubuyobozi bwa <a href="/artikel/cara-membuat-qr-code-wifi">QR Code ya WiFi</a>.</li>
  <li>Ikarita y'ubucuruzi y'ikoranabuhanga (vCard), imeri, SMS, n'ikiganiro cya WhatsApp.</li>
  <li>Aho ahantu hari ku ikarita n'ingengabihe y'ibirori.</li>
</ul>

<h2>QR Code idahinduka n'ihinduka</h2>
<p>QR Code ikozwe mu buryo butaziguye ivuye ku makuru yitwa <strong>QR Code idahinduka</strong> (static): ibiyirimo bishyirwa mu ishusho kandi ntibishobora guhindurwa, ariko nanone ntijya irangira. QR Code <strong>ihinduka</strong> (dynamic) irimo umurongo mugufi wa serivisi runaka, hanyuma ukabajyana aho mushaka; aho mujya hashobora guhindurwa, ariko QR Code izahagarika gukora iyo iyo serivisi ihagaze. Ku bikenewe byinshi, QR Code idahinduka irahagije kandi itekanye kurushaho mu gihe kirekire.</p>

<p>Murashaka kugerageza? Mukore <a href="/?type=qrcode">QR Code ku buntu</a> ubu, cyangwa musome <a href="/artikel/cara-membuat-qr-code-gratis">uko wakora QR Code mu ntambwe 3</a>.</p>
`
};
