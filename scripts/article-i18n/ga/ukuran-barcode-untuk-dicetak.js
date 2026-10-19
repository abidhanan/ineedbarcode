// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "An Méid agus an Taifeach Ceart chun Barrachóid a Phriontáil",
  desc: "Is deacair barrachód atá róbheag nó doiléir a scanadh. Foghlaim an méid íosta, an riail maidir le hachar scanta, agus an taifeach íomhá atá sábháilte le priontáil.",
  tags: ["Treoir", "Priontáil"],
  coverCaption: "Priontálann printéir lipéad barrachóid do bheartáin agus do phacáistiú.",
  inlineCaption: "Is é méid an lipéid a shocraíonn cé chomh mór is féidir an barrachód a phriontáil.",
  faq: [
    ["Cad é an méid íosta chun QR Code a phriontáil?", "Le scanadh ó ghar, is é thart ar 2 × 2 cm an teorainn shábháilte. D'achair níos faide, úsáid cóimheas de thart ar 10 : 1 idir an t-achar scanta agus leithead an QR Code."],
    ["Cad é méid caighdeánach barrachóid EAN-13?", "Is é thart ar 37.3 × 25.9 mm méid caighdeánach EAN-13. Is féidir an méid seo a laghdú go dtí thart ar 80% nó a mhéadú suas go 200%."],
    ["Cén fáth a mbíonn barrachód doiléir tar éis é a phriontáil?", "De ghnáth toisc go raibh an íomhá beag agus gur méadaíodh í, nó gur sábháladh í mar JPG ar chaighdeán íseal. Íoslódáil le méid modúil níos mó i bhformáid PNG."]
  ],
  body: `
<p>Ní gá go mbeidh barrachód a bhfuil cuma mhaith air ar an scáileán inléite tar éis é a phriontáil. Is féidir le méid róbheag, le taifeach íseal nó le dúch a leathann a chur faoi deara don scanóir teip. Seo treoir chun a chinntiú go bhfanann do phriontáil inléite.</p>

<h2>Tuig an modúl</h2>
<p>Is é an <strong>modúl</strong> an t-aonad is lú de bharrachód, is é sin cearnóg bheag amháin i QR Code nó an líne is cúinge i mbarrachód línte. Is é méid an mhodúil a shocraíonn cé chomh héasca is atá sé an barrachód a léamh. Ar <a href="/">I Need Barcode</a>, is féidir méid an mhodúil a shocrú sa chuid Socruithe: dá airde an luach, is ea is mó agus is géire a bheidh an íomhá a íoslódáiltear.</p>

<h2>Méid íosta QR Code</h2>
<ul>
  <li>Le scanadh ó ghar (mar shampla ar chárta gnó nó ar lipéad táirge), is é thart ar <strong>2 × 2 cm</strong> an teorainn shábháilte.</li>
  <li>Úsáid riail cóimheasa de thart ar <strong>10 : 1</strong>: bíonn an t-achar scanta thart ar dheich n-uaire leithead an QR Code. Do phóstaer a scanfar ó 2 mhéadar, déan an QR Code thart ar 20 cm ar a laghad.</li>
  <li>Dá mhéad sonraí a stóráiltear, is ea is dlúithe an patrún, agus mar sin teastaíonn méid níos mó.</li>
</ul>

<h2>Méid barrachód táirgí</h2>
<p>Is é thart ar 37.3 × 25.9 mm (100%) méid caighdeánach <a href="/?type=ean13">EAN-13</a>. Is féidir an méid seo a laghdú go dtí thart ar 80% nó a mhéadú suas go 200%. Seachain airde na línte a ghearradh róghearr, mar teastaíonn spás ó scanóirí scipéid chun léamh ó uillinneacha éagsúla.</p>

<h2>Taifeach íomhá</h2>
<ul>
  <li>Le haghaidh priontála, déan iarracht a chinntiú go dtarraingítear gach modúl le <strong>roinnt picteilíní iomlána</strong>, ní le cuid de phicteilín. Roghnaigh méid modúil níos mó agus tú ag íoslódáil, agus ansin laghdaigh é i d'aip dearaidh, ní a mhalairt.</li>
  <li>Seachain íomhá bheag barrachóid a mhéadú, mar éireoidh imill na gcearnóg doiléir nó eangach.</li>
  <li>Sábháil i bhformáid PNG ionas nach ndéantar damáiste do na dathanna agus do na himill mar a tharlaíonn le JPG.</li>
</ul>

<h2>Crios ciúin</h2>
<p>Teastaíonn spás folamh timpeall ar gach barrachód, ar a dtugtar an <strong>crios ciúin</strong> (quiet zone). Do QR Code, ba cheart go mbeadh sé ceithre mhodúl ar leithead más féidir. Do bharrachóid línte, tá an spás folamh ar chlé agus ar dheis an-tábhachtach. Ná cuir téacs, línte dearaidh ná imeall an phacáistithe róghar dó.</p>

<h2>Dath agus ábhar</h2>
<ul>
  <li>Úsáid dath dorcha don bharrachód agus dath geal don chúlra.</li>
  <li>Seachain ábhair loinnracha nó thrédhearcacha, mar is féidir le frithchaitheamh solais cur isteach ar an gceamara.</li>
  <li>Priontáil sampla amháin i gcónaí agus déan tástáil air le roinnt fón nó scanóirí sula bpriontálann tú go leor.</li>
</ul>
<p>Má tá do bharrachód fós deacair le scanadh, féach ar <a href="/artikel/barcode-tidak-bisa-dipindai">7 gcúis nach féidir barrachód a scanadh</a>.</p>
`
};
