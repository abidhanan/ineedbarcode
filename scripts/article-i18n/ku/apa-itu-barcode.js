// apa-itu-barcode
module.exports = {
  title: "Barkod Çi Ye? Wate, Awayê Xebatê û Cureyên Wê",
  desc: "Barkod hema li ser hemû berhemên ku hûn dikirin heye. Fêr bibin ka ew çawa dixebite, dîroka wê ya kurt û cureyên barkodê yên herî zêde tên bikaranîn.",
  tags: ["Bingehîn", "Barkod"],
  coverCaption: "Barkoda li ser pakêtê koda yekane ya berhemê vedihewîne.",
  inlineCaption: "Kasiyer bi skanerê di kêliyekê de barkodê dixwîne.",
  faq: [
    ["Ferqa barkod û QR Code çi ye?", "QR Code cureyekî barkodê ye, ango barkoda 2D. Barkoda xêzikî (1D) tenê çend tîpan vedihewîne û ji çepê ber bi rastê ve tê xwendin, lê QR Code daneyan bi du alî ve hilan, ji ber vê yekê girêdan, nivîs an jî daneyên WiFi jî tê de cih digirin."],
    ["Gelo barkod bihayê berhemê hildigire?", "Bi gelemperî na. Barkoda berhemê tenê kodekê vedihewîne. Biha û navê berhemê di pergala kasê de tên tomarkirin û li gorî koda skankirî tên dîtin."],
    ["Gelo çêkirina barkodê bi pere ye?", "Na. Wêneyê barkodê dikare belaş were çêkirin, wek mînak li ser I Need Barcode. Tiştê ku divê bi pere were tomarkirin tenê hejmara fermî ye ji bo barkodên berhemên firotana hûrde yên wek EAN-13, ku bi rêya GS1 tê wergirtin."]
  ],
  body: `
<p>Barkod awayek e ji bo nivîsandina daneyan bi şiklê nexşeyekê ku makîne dikare bixwîne. Ev nexşe bi gelemperî ji xêzikên reş û spî yên bi firehiyên cuda, an jî ji çargoşeyên piçûk ên di hundirê çargoşeyekê de rêzkirî pêk tê. Dema ku tê skankirin, ev nexşe dîsa vediguhere hejmar an nivîsê, wek koda berhemê, hejmara şopandina pakêtê an navnîşana malperekê.</p>
<p>Ji ber ku makîne wê dixwîne, barkod ji nivîsandina kodekê bi destan gelekî zûtir e û şaşiyên wê pir kêm in. Ji ber vê yekê barkod li kasan, embaran, nexweşxaneyan, bilêtan û heta li ser pakêtên xwarinê tê bikaranîn.</p>

<h2>Dîroka kurt a barkodê</h2>
<p>Fikra barkodê di sala 1952an de li Dewletên Yekbûyî yên Amerîkayê ji aliyê Norman Joseph Woodland û Bernard Silver ve hate patentkirin. Barkod bi rastî di sala 1974an de li firoşgehan dest pê kir ku were bikaranîn, dema ku pakêteke benîştê li supermarketeke li Ohio bi koda UPC hate skankirin. Ji wê demê ve barkod li seranserê cîhanê belav bû û niha ji aliyê rêxistina standardan a bi navê GS1 ve li ser asta cîhanî tê birêvebirin.</p>

<h2>Barkod çawa dixebite?</h2>
<p>Skaner ronahiyê dide ser barkodê û paşê vegerandina wê dixwîne. Beşên tarî hindik ronahiyê vedigerînin, beşên ronî gelek. Ev ferq vediguhere rêzeke hejmarên 0 û 1, û paşê bi qaîdeyên wê cureya barkodê re tê berhevdan. Gelek barkod <strong>hejmareke kontrolê</strong> (check digit) jî hene, ango hejmara dawî ya ku ji hejmarên berê tê hesabkirin. Heke encama hesabê li hev neyê, skaner dizane ku tiştek şaş e û encamê red dike.</p>
<p>Barkod bi xwe bi gelemperî tenê kodê hildigire. Agahiyên wek navê berhemê an biha di pergala kasê an databasê de tên hilanîn û li gorî wê kodê tên dîtin.</p>

<h2>Cureyên barkodê yên pir tên bikaranîn</h2>
<p>Bi giştî barkod li du komên mezin dabeş dibin:</p>
<ul>
  <li><strong>Barkoda 1D (xêzikî)</strong>: ji xêzikên vertîkal pêk tê ku ji çepê ber bi rastê ve tên xwendin. Mînak: <a href="/?type=ean13">EAN-13</a> û <a href="/?type=upca">UPC-A</a> ji bo berhemên firotana hûrde, û <a href="/?type=code128">Code 128</a> û <a href="/?type=code39">Code 39</a> ji bo lojîstîk û embaran.</li>
  <li><strong>Barkoda 2D</strong>: nexşeyeke çargoşeyî ye ku daneyan bi du alî ve hildigire, ji ber vê yekê gelekî zêdetir dane tê de cih digirin. Mînak: <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> û <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Ji xeynî van, barkodên taybet ji bo postê û şandinê, tenduristiyê, û standardên GS1 ji bo zincîra dabînkirinê jî hene. Ravekirineke berfirehtir li ser ferqên wan hûn dikarin di gotara <a href="/artikel/perbedaan-barcode-1d-dan-2d">Ferqa Barkoda 1D û 2D</a> de bixwînin.</p>

<h2>Barkod ji bo çi tê bikaranîn?</h2>
<ul>
  <li><strong>Firotana hûrde</strong>: kasê bilez dike û stokê bi xweber tomar dike.</li>
  <li><strong>Embar û şandin</strong>: tişt û pakêtan ji cihekî bo cihekî din dişopîne.</li>
  <li><strong>Bilêt û çalakî</strong>: bi skankirinekê rastbûna bilêtê kontrol dike.</li>
  <li><strong>Marketing</strong>: QR Code li ser broşûr an pakêtê mirovan rasterast dibe malper, menû an WhatsAppa we.</li>
</ul>

<h2>Barkodê bi xwe çêkin</h2>
<p>Ji bo çêkirina barkodê hûn ne hewceyî sepanek bi pere ne. Li ser <a href="/">I Need Barcode</a>, cureya barkodê hilbijêrin, daneyan binivîsin û paşê wekî wêneyê PNG dakêşin. Zêdetirî 100 cure hene ku hûn dikarin hilbijêrin, û hemû belaş in bêyî tomarkirinê.</p>
`
};
