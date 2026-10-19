// apa-itu-qr-code
module.exports = {
  title: "He Aha te QR Code, ā, Ka Pēhea Tōna Mahi?",
  desc: "Ka taea e te QR Code te pupuri hono, kuputuhi, tae noa ki ngā raraunga WiFi, ā, ka taea tonu te pānui ahakoa kua pakaru tētahi wāhanga. Anei tōna mahi me ōna painga.",
  tags: ["Ngā Tūāpapa", "QR Code"],
  coverCaption: "Ka taea te matawai tika i te QR Code ki te kāmera o te waea.",
  inlineCaption: "Ko ia QR Code he mea hanga ki ngā tapawhā iti pango, mā hoki.",
  faq: [
    ["Ka pau te wā o te QR Code?", "Kāore rawa e pau te wā o te QR Code pūmau (static) nā te mea kua whakaurua tikatia ōna raraunga ki te whakaahua. Ka mutu pea te mahi a te QR Code hihiko (dynamic) ki te mutu te ratonga e tuku ana i tōna hono, ki te mutu rānei te ohaurunga."],
    ["E hia te nui o ngā raraunga ka taea e te QR Code te pupuri?", "Ka taea e te putanga nui rawa o te QR Code te pupuri tae atu ki te 7.089 nama, ki te tata ki te 2.953 paita rānei. Heoi anō, ko te iti ake o ngā raraunga, ko te māmā ake o te matawai i te QR Code."],
    ["Ka taea tonu te pānui i te QR Code ki te pakaru tētahi wāhanga?", "Āe. Nā te whakatika hapa, ka taea tonu te pānui i te QR Code ahakoa kua pakaru te tata ki te 7% ki te 30% o ōna wāhanga, i runga anō i te taumata whakatika L, M, Q, H rānei e whakamahia ana."]
  ],
  body: `
<p>Ko te QR Code (Quick Response Code) he barcode 2D āhua tapawhā rite, he mea hanga ki ngā tapawhā iti pango, mā hoki. Kāore i rite ki te barcode rārangi e pupuri ana i ētahi tekau mā ngā nama noa, ka taea e te QR Code te pupuri i te hono paetukutuku, i te kuputuhi roa, i te nama waea, i ngā taipitopito whakapā, tae noa ki ngā raraunga o tētahi whatunga WiFi.</p>
<p>I whakawhanakehia te QR Code i te tau 1994 e Denso Wave, he kamupene nō Hapani, hei aroturuki i ngā wāhanga waka i ngā wheketere. I ēnei rā kei ngā wāhi katoa te QR Code, mai i ngā utu matihiko tae noa ki ngā tahua kai o ngā wharekai, nā te mea ka taea te matawai tika ki te kāmera o te waea.</p>

<h2>Ngā wāhanga o te QR Code</h2>
<ul>
  <li><strong>Ngā tapawhā nunui e toru i ngā kokonga</strong> (finder pattern): ka āwhina i te kāmera ki te kimi i te QR Code me te mōhio ki tōna ahunga, nā reira ka taea tonu te pānui i te QR Code ahakoa ka matawaitia e titaha ana, e kōaro ana rānei.</li>
  <li><strong>Tauira whakahāngai</strong> (alignment pattern): he tapawhā iti e āwhina ana ki te pānui i tētahi QR Code kua piko, kua kitea mai i te taha rānei.</li>
  <li><strong>Te rohe raraunga</strong>: ngā tapawhā iti kei roto ngā mōhiohio ka penapenatia e koe.</li>
  <li><strong>Te rohe mārie</strong> (quiet zone): he wāhi wātea huri noa i te QR Code kia māmā ai te wehe atu i tōna papamuri.</li>
</ul>

<h2>E hia te nui o ngā raraunga ka taea te pupuri?</h2>
<p>E 40 ngā putanga rahi o te QR Code. Ka taea e te putanga nui rawa te pupuri tae atu ki te 7.089 nama, ki te tata ki te 2.953 paita raraunga rānei. Ā-mahi nei, ko te iti ake o ngā raraunga ka penapenatia, ko te nui ake o ngā tapawhā, ā, ko te māmā ake o te matawai i te QR Code. Koia te take he pai ake te hono poto i te hono tino roa.</p>

<h2>Ka taea tonu te pānui ahakoa kua pakaru</h2>
<p>Ka whakamahi te QR Code i te whakatika hapa (error correction). E whā ngā taumata:</p>
<ul>
  <li><strong>L</strong>: ka taea tonu te whakaora i ngā raraunga ki te pakaru te tata ki te 7% o te QR Code.</li>
  <li><strong>M</strong>: tata ki te 15%. Koinei te kōwhiringa noa, he taurite hoki.</li>
  <li><strong>Q</strong>: tata ki te 25%.</li>
  <li><strong>H</strong>: tata ki te 30%, e tika ana mō te QR Code ka tāpirihia he waitohu (logo), ka tāngia rānei ki tētahi wāhi ka māmā te poke.</li>
</ul>
<p>Ko te teitei ake o te taumata whakatika, ko te maha ake o ngā tapawhā e hiahiatia ana, nā reira ka āhua kikī ake te tauira o te QR Code.</p>

<h2>He aha ngā mea ka taea te penapena ki te QR Code?</h2>
<ul>
  <li>Te hono o tētahi paetukutuku, o tētahi toa ipurangi, o tētahi puka rānei.</li>
  <li>Ngā raraunga WiFi, kia taea ai e ngā manuhiri te hono me te kore e pato i te kupuhipa. Tirohia te aratohu <a href="/artikel/cara-membuat-qr-code-wifi">QR Code WiFi</a>.</li>
  <li>He kāri pakihi matihiko (vCard), he īmēra, he SMS, me te kōrerorero WhatsApp.</li>
  <li>He tauwāhi i runga i te mahere me te wātaka o tētahi hui.</li>
</ul>

<h2>QR Code pūmau me te QR Code hihiko</h2>
<p>Ko te QR Code ka hangaia tikatia mai i ngā raraunga ka kīia he <strong>QR Code pūmau</strong> (static): kua whakaurua ōna ihirangi ki te whakaahua, ā, kāore e taea te huri, engari kāore hoki e pau tōna wā. Ko te QR Code <strong>hihiko</strong> (dynamic) he hono poto tōna nā tētahi ratonga, kātahi ka arahina ki tō ūnga; ka taea te huri i te ūnga, engari ka mate te QR Code ki te mutu taua ratonga. Mō te nuinga o ngā hiahia, ka nui te QR Code pūmau, ā, he haumaru ake mō te wā roa.</p>

<p>Kei te hiahia whakamātau? Hangaia he <a href="/?type=qrcode">QR Code koreutu</a> ināianei, pānuitia rānei <a href="/artikel/cara-membuat-qr-code-gratis">te hanga i te QR Code i ngā hipanga e 3</a>.</p>
`
};
