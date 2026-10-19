// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Te Rerekētanga o te Barcode 1D me te 2D: Ko Tēhea e Hiahiatia ana e Koe?",
  desc: "He barcode te barcode rārangi me te QR Code, engari he rerekē ō rāua mahi. Whakatairitea te nui ka taea te pupuri, te huarahi matawai, me ētahi tauira o te whakamahinga.",
  tags: ["Ngā Tūāpapa", "Barcode"],
  coverCaption: "Ka pānui te pūmatawai ā-ringa i te whare putunga i ngā barcode 1D me te 2D.",
  inlineCaption: "I te nuinga o te wā ka whakamahi ngā tapanga tuku i te barcode rārangi.",
  faq: [
    ["Ka taea e ngā pūmatawai tahua te pānui i te QR Code?", "Kāore katoa. Ko ngā pūmatawai taiaho 1D ka pānui noa i ngā barcode rārangi. Mō te QR Code me whai pūmatawai 2D e whakamahi ana i te kāmera, i te kāmera rānei o te waea."],
    ["Ko tēhea barcode te mea iti rawa?", "Ko te Data Matrix tētahi barcode 2D ka taea te tā kia tino iti, nā reira e auau ana te whakamahia ki ngā wāhanga hiko, ki ngā taputapu hauora, ki ngā tapanga rongoā hoki."],
    ["Ka āhei te whakamahi i te QR Code hei whakakapi i te EAN-13 i runga i ngā hua hokohoko?", "Kia hokona ai ki ngā toa, me whai tonu te hua i te EAN-13, i te UPC rānei kua rēhitatia. Ka taea te tāpiri i te QR Code ki te pōkai hei tāpiritanga, hei tauira mō ngā mōhiohio hua, mō te whakatairanga rānei."]
  ],
  body: `
<p>Ina hanga barcode, ko te pātai tuatahi ka puta ake i te nuinga o te wā: me whakamahi i te barcode rārangi, i te QR Code rānei? E kīia ana he barcode ēnei e rua, engari he rerekē te huarahi pupuri raraunga, nā reira he rerekē hoki ō rāua mahi.</p>

<h2>Barcode 1D (rārangi)</h2>
<p>Ko te barcode 1D he barcode he rārangi poutū. Ka penapenatia ngā raraunga ki tētahi ahunga kotahi, arā, mai i te mauī ki te matau. Ko ngā tauira rongonui rawa ko te <a href="/?type=ean13">EAN-13</a> i runga i ngā pōkai hua me te <a href="/?type=code128">Code 128</a> i runga i ngā tapanga tuku.</p>
<ul>
  <li>He iti te nui ka taea te pupuri, i te nuinga o te wā mai i te tekau mā ngā pūāhua tae noa ki ētahi tekau.</li>
  <li>Ka taea te pānui e ngā pūmatawai taiaho tahua he iti te utu, he tino tere hoki.</li>
  <li>He pai mō ngā waehere hua, ngā tau raupapa, me ngā tau tuku mōkihi.</li>
</ul>

<h2>Barcode 2D</h2>
<p>Ka penapena te barcode 2D i ngā raraunga i ngā ahunga e rua, whakapae, whakararo hoki, nā reira he nui ake te nui ka taea te pupuri. Hei tauira, ko te <a href="/?type=qrcode">QR Code</a>, te <a href="/?type=datamatrix">Data Matrix</a>, te <a href="/?type=pdf417">PDF417</a>, me te <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>He nui te nui ka taea te pupuri, mai i ētahi tekau tae noa ki ngā mano pūāhua.</li>
  <li>Ka taea te matawai ki te kāmera o te waea mai i ngā ahunga maha.</li>
  <li>He whakatika hapa tōna, nā reira ka taea tonu te pānui ahakoa kua pakaru tētahi wāhanga.</li>
  <li>Ka taea te hanga kia tino iti, hei tauira te Data Matrix i runga i ngā wāhanga hiko.</li>
</ul>

<h2>He whakatairitenga poto</h2>
<table>
  <thead><tr><th></th><th>Barcode 1D</th><th>Barcode 2D</th></tr></thead>
  <tbody>
    <tr><td>Āhua</td><td>Ngā rārangi poutū</td><td>Ngā tapawhā/ira i roto i te tapawhā rite</td></tr>
    <tr><td>Te nui ka pupuri</td><td>Iti</td><td>Nui</td></tr>
    <tr><td>Taputapu matawai</td><td>Pūmatawai taiaho, kāmera rānei</td><td>Kāmera, pūmatawai 2D rānei</td></tr>
    <tr><td>Te ātete ki te pakaru</td><td>Whāiti</td><td>He whakatika hapa</td></tr>
    <tr><td>Tauira</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Āhea whakamahi ai i tēhea?</h2>
<ul>
  <li><strong>Ngā hua ka hokona i ngā toa, i ngā toa iti rānei</strong>: whakamahia te EAN-13 ōkawa nō GS1. Tirohia <a href="/artikel/cara-mendapatkan-barcode-ean-13">te whiwhi i tētahi barcode EAN-13</a>.</li>
  <li><strong>Ngā tapanga whare putunga, whata, tuku rānei</strong>: ko te Code 128 te kōwhiringa noa nā te mea he kiato, ā, ka tautoko i ngā pū me ngā nama.</li>
  <li><strong>Ngā hono, ngā tahua kai, te WiFi, ngā taipitopito whakapā rānei mō ngā kiritaki</strong>: ko te QR Code, nā te mea ka taea te matawai tika ki te kāmera o te waea.</li>
  <li><strong>Ngā tapanga tino iti</strong>: ko te Data Matrix.</li>
  <li><strong>Ngā kāri tuakiri, ngā tīkiti rererangi, ngā tuhinga rānei</strong>: ko te PDF417, ko te Aztec rānei.</li>
</ul>
<p>Ka taea e koe te hanga koreutu i ngā momo katoa i runga ake nei i <a href="/">I Need Barcode</a>. Ki te rangirua tonu koe, tīmata ki te QR Code mō ngā hiahia o ngā kiritaki, ki te Code 128 hoki mō ngā hiahia ā-roto.</p>
`
};
