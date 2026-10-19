// apa-itu-barcode
module.exports = {
  title: "Cad É Barrachód? Sainmhíniú, Conas a Oibríonn Sé, agus na Cineálacha",
  desc: "Bíonn barrachód ar bheagnach gach táirge a cheannaíonn tú. Faigh amach conas a oibríonn sé, a stair ghearr, agus na cineálacha barrachód is coitianta.",
  tags: ["Buneolas", "Barrachód"],
  coverCaption: "Stórálann an barrachód ar an bpacáistiú cód uathúil an táirge.",
  inlineCaption: "Úsáideann an t-airgeadóir scanóir chun an barrachód a léamh i bhfaiteadh na súl.",
  faq: [
    ["Cad é an difríocht idir barrachód agus QR Code?", "Is cineál barrachóid é QR Code, is é sin barrachód 2D. Ní stórálann barrachód línte (1D) ach beagán carachtar agus léitear é ó chlé go deas, ach stórálann QR Code sonraí i dhá threo, rud a fhágann go bhfuil spás ann do nasc, do théacs nó do shonraí WiFi."],
    ["An stórálann barrachód praghas an táirge?", "De ghnáth, ní stórálann. Níl ach cód i mbarrachód táirge. Coinnítear praghas agus ainm an táirge i gcóras an scipéid, agus aimsítear iad de réir an chóid a scanadh."],
    ["An gá íoc as barrachód a chruthú?", "Ní gá. Is féidir íomhá barrachóid a chruthú saor in aisce, mar shampla ar I Need Barcode. Is é an t-aon rud a gcaithfear íoc as é a chlárú ná an uimhir oifigiúil do bharrachóid táirgí miondíola ar nós EAN-13 trí GS1."]
  ],
  body: `
<p>Is bealach é barrachód chun sonraí a scríobh i bhfoirm patrúin is féidir le meaisín a léamh. De ghnáth is línte dubha agus bána de leithead éagsúil atá sa phatrún, nó cearnóga beaga eagraithe i gcearnóg. Nuair a scanadh é, aistrítear an patrún ar ais ina uimhreacha nó ina théacs, mar shampla cód táirge, uimhir rianaithe nó seoladh suímh ghréasáin.</p>
<p>Ós rud é gur meaisín a léann é, bíonn barrachód i bhfad níos tapúla agus bíonn níos lú botún ann ná mar a bhíonn nuair a chlóscríobhtar cód de láimh. Sin é an fáth a n-úsáidtear barrachóid ag an scipéad, i stórais, in ospidéil, ar thicéid agus fiú ar phacáistiú bia.</p>

<h2>Stair ghearr an bharrachóid</h2>
<p>Paitinníodh smaoineamh an bharrachóid i 1952 ag Norman Joseph Woodland agus Bernard Silver sna Stáit Aontaithe. Níor úsáideadh barrachóid i ndáiríre i siopaí go dtí 1974, nuair a scanadh paicéad guma coganta in ollmhargadh in Ohio le cód UPC. Ó shin i leith, tá barrachóid scaipthe ar fud an domhain, agus anois bainistíonn eagraíocht caighdeán darb ainm GS1 iad ar bhonn domhanda.</p>

<h2>Conas a oibríonn barrachód?</h2>
<p>Lasann an scanóir solas ar an mbarrachód agus léann sé an frithchaitheamh. Frithchaitheann na codanna dorcha beagán solais, agus frithchaitheann na codanna geala go leor. Iompaítear an difríocht sin ina sraith de 0 agus 1, agus cuirtear í i gcomparáid le rialacha an chineáil barrachóid sin. Bíonn <strong>digit seiceála</strong> (check digit) ag go leor barrachód freisin, is é sin an uimhir dheireanach a ríomhtar ó na huimhreacha roimpi. Mura dtagann toradh an ríomhaireachta le chéile, tuigeann an scanóir go bhfuil rud éigin mícheart agus diúltaíonn sé don toradh.</p>
<p>De ghnáth ní stórálann an barrachód féin ach cód. Coinnítear eolas ar nós ainm nó praghas an táirge i gcóras an scipéid nó i mbunachar sonraí, agus aimsítear é de réir an chóid sin.</p>

<h2>Cineálacha barrachód a úsáidtear go minic</h2>
<p>Go ginearálta, roinntear barrachóid ina dhá phríomhghrúpa:</p>
<ul>
  <li><strong>Barrachóid 1D (líneacha)</strong>: línte ingearacha a léitear ó chlé go deas. Samplaí díobh is ea <a href="/?type=ean13">EAN-13</a> agus <a href="/?type=upca">UPC-A</a> do tháirgí miondíola, agus <a href="/?type=code128">Code 128</a> agus <a href="/?type=code39">Code 39</a> do lóistíocht agus stórais.</li>
  <li><strong>Barrachóid 2D</strong>: patrún cearnóg a stórálann sonraí i dhá threo, rud a fhágann go bhfuil spás ann do i bhfad níos mó. Samplaí díobh is ea <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> agus <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Chomh maith leo sin, tá barrachóid speisialta ann don phost agus don seachadadh, don chúram sláinte, agus caighdeáin GS1 don slabhra soláthair. Is féidir leat míniú níos mionsonraithe ar na difríochtaí a léamh san alt <a href="/artikel/perbedaan-barcode-1d-dan-2d">An Difríocht idir Barrachóid 1D agus 2D</a>.</p>

<h2>Cad chuige a n-úsáidtear barrachóid?</h2>
<ul>
  <li><strong>Miondíol</strong>: an scipéad a bhrostú agus an stoc a thaifeadadh go huathoibríoch.</li>
  <li><strong>Stórais agus seachadadh</strong>: earraí agus beartáin a rianú ó áit amháin go háit eile.</li>
  <li><strong>Ticéid agus imeachtaí</strong>: barántúlacht ticéid a sheiceáil le scanadh amháin.</li>
  <li><strong>Margaíocht</strong>: tugann QR Code ar bhileog nó ar phacáistiú daoine díreach chuig do shuíomh gréasáin, do bhiachlár nó do WhatsApp.</li>
</ul>

<h2>Do bharrachód féin a chruthú</h2>
<p>Ní gá duit aip a gcaithfear íoc aisti chun barrachód a chruthú. Ar <a href="/">I Need Barcode</a>, roghnaigh an cineál barrachóid, cuir isteach na sonraí, agus ansin íoslódáil é mar íomhá PNG. Tá níos mó ná 100 cineál le roghnú, agus tá siad uile saor in aisce gan clárú.</p>
`
};
