// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "An Difríocht idir Barrachóid 1D agus 2D: Cé Acu a Theastaíonn Uait?",
  desc: "Is barrachóid iad barrachóid línte agus QR Code araon, ach tá úsáidí difriúla acu. Cuir a dtoilleadh, an chaoi a scantar iad agus samplaí dá n-úsáid i gcomparáid le chéile.",
  tags: ["Buneolas", "Barrachód"],
  coverCaption: "Léann scanóir láimhe i stóras barrachóid 1D agus 2D.",
  inlineCaption: "De ghnáth úsáideann lipéid seolta barrachóid línte.",
  faq: [
    ["An féidir le scanóirí scipéid QR Code a léamh?", "Ní féidir le gach ceann acu. Ní léann scanóirí léasair 1D ach barrachóid línte. Le haghaidh QR Code, teastaíonn scanóir 2D bunaithe ar cheamara nó ceamara fóin."],
    ["Cén barrachód is lú?", "Is barrachód 2D é Data Matrix is féidir a phriontáil an-bheag, agus mar sin is minic a úsáidtear é ar chomhpháirteanna leictreonacha, ar threalamh leighis agus ar lipéid cógas."],
    ["An féidir QR Code a úsáid in ionad EAN-13 ar tháirgí miondíola?", "Le díol i siopaí miondíola, teastaíonn EAN-13 nó UPC cláraithe ó tháirgí fós. Is féidir QR Code a chur leis an bpacáistiú mar bhreis, mar shampla d'eolas faoin táirge nó do bholscaireacht."]
  ],
  body: `
<p>Nuair a bhíonn barrachód á chruthú, is í an chéad cheist a thagann chun cinn de ghnáth: barrachód línte nó QR Code? Tugtar barrachód ar an dá cheann, ach stórálann siad sonraí ar bhealaí difriúla, agus mar sin bíonn úsáidí difriúla acu freisin.</p>

<h2>Barrachóid 1D (líneacha)</h2>
<p>Is barrachód déanta as línte ingearacha é barrachód 1D. Stóráiltear na sonraí i dtreo amháin, is é sin ó chlé go deas. Is iad na samplaí is aitheanta ná <a href="/?type=ean13">EAN-13</a> ar phacáistiú táirgí agus <a href="/?type=code128">Code 128</a> ar lipéid seolta.</p>
<ul>
  <li>Toilleadh beag, de ghnáth ó dhosaen go roinnt deicheanna carachtar.</li>
  <li>Is féidir iad a léamh le scanóirí léasair scipéid atá saor agus an-tapa.</li>
  <li>Oiriúnach do chóid táirgí, d'uimhreacha sraithe agus d'uimhreacha rianaithe.</li>
</ul>

<h2>Barrachóid 2D</h2>
<p>Stórálann barrachóid 2D sonraí i dhá threo, trasna agus síos, agus mar sin bíonn spás iontu do i bhfad níos mó. Samplaí díobh is ea <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> agus <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Toilleadh mór, ó dheicheanna go mílte carachtar.</li>
  <li>Is féidir iad a scanadh le ceamara fóin ó threonna éagsúla.</li>
  <li>Bíonn ceartú earráidí acu, mar sin bíonn siad inléite fós fiú má tá cuid díobh damáistithe.</li>
  <li>Is féidir iad a dhéanamh an-bheag, mar shampla Data Matrix ar chomhpháirteanna leictreonacha.</li>
</ul>

<h2>Comparáid ghearr</h2>
<table>
  <thead><tr><th></th><th>Barrachód 1D</th><th>Barrachód 2D</th></tr></thead>
  <tbody>
    <tr><td>Cruth</td><td>Línte ingearacha</td><td>Cearnóga/poncanna i gcearnóg</td></tr>
    <tr><td>Toilleadh</td><td>Beag</td><td>Mór</td></tr>
    <tr><td>Gléas scanta</td><td>Scanóir léasair nó ceamara</td><td>Ceamara nó scanóir 2D</td></tr>
    <tr><td>Frithsheasmhacht in aghaidh damáiste</td><td>Teoranta</td><td>Ceartú earráidí</td></tr>
    <tr><td>Samplaí</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Cathain ba cheart ceann acu a úsáid?</h2>
<ul>
  <li><strong>Táirgí a dhíoltar i siopaí nó i siopaí áise</strong>: úsáid EAN-13 oifigiúil ó GS1. Féach <a href="/artikel/cara-mendapatkan-barcode-ean-13">conas barrachód EAN-13 a fháil</a>.</li>
  <li><strong>Lipéid stórais, seilfeanna nó seolta</strong>: is rogha choitianta é Code 128 mar tá sé dlúth agus tacaíonn sé le litreacha agus le huimhreacha.</li>
  <li><strong>Naisc, biachláir, WiFi nó teagmhálaithe do chustaiméirí</strong>: QR Code, mar is féidir é a scanadh go díreach le ceamara fóin.</li>
  <li><strong>Lipéid an-bheaga</strong>: Data Matrix.</li>
  <li><strong>Cártaí aitheantais, cártaí bordála nó doiciméid</strong>: PDF417 nó Aztec.</li>
</ul>
<p>Is féidir leat na cineálacha thuas go léir a chruthú saor in aisce ar <a href="/">I Need Barcode</a>. Mura bhfuil tú cinnte fós, tosaigh le QR Code do riachtanais custaiméirí agus Code 128 do riachtanais inmheánacha.</p>
`
};
