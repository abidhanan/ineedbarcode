// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Conas Barrachód Táirge EAN-13 a Fháil do Ghnólachtaí Beaga",
  desc: "Ar mhaith leat do tháirge a fheiceáil i siopaí áise nó in ollmhargaí? Foghlaim brí na n-uimhreacha EAN-13, conas uimhir oifigiúil a chlárú le GS1 Indonesia, agus conas í a phriontáil.",
  tags: ["Gnó", "Miondíol"],
  coverCaption: "Teastaíonn barrachód cláraithe EAN-13 ar phacáistiú táirgí miondíola.",
  inlineCaption: "Aithníonn siopaí miondíola táirgí ón uimhir EAN-13 ina gcóras scipéid.",
  faq: [
    ["An bhfuil cead agam m'uimhir EAN-13 féin a chruthú?", "Tá cead agat íomhá an bharrachóid a chruthú tú féin, ach ba cheart gur uimhir oifigiúil ó GS1 í an uimhir. D'fhéadfadh uimhir a chum tú féin teacht salach ar tháirgí eile agus d'fhéadfadh siopaí miondíola í a dhiúltú."],
    ["An dteastaíonn barrachód difriúil do gach leagan de tháirge?", "Teastaíonn. Teastaíonn a uimhir EAN-13 féin ó gach leagan difriúil, mar shampla blas, méid nó ábhar pacáiste difriúil."],
    ["Cad é an digit seiceála in EAN-13?", "Is é an digit seiceála an 13ú huimhir, a ríomhtar ó na 12 uimhir roimpi. Úsáideann scanóirí í chun a chinntiú gur léadh an barrachód i gceart. Ríomhann gineadóir I Need Barcode go huathoibríoch í má chuireann tú 12 digit isteach."]
  ],
  body: `
<p>Más mian leat do tháirge a dhíol i siopaí áise, in ollmhargaí nó ar mhargaí móra ar líne, de ghnáth iarrfar ort barrachód <strong>EAN-13</strong> a chur ar an bpacáistiú. Tá 13 digit sa bharrachód seo a fheidhmíonn mar aitheantas uathúil do tháirge ar fud an domhain.</p>

<h2>Brí na 13 digit in EAN-13</h2>
<ul>
  <li><strong>Réimír GS1</strong>: léiríonn na trí chéad digit cén eagraíocht GS1 a d'eisigh an uimhir. Tosaíonn uimhreacha a eisíonn GS1 Indonesia le <strong>899</strong>.</li>
  <li><strong>Uimhir an chomhlachta</strong>: aitheantas do chomhlachta, a thugtar duit nuair a chláraíonn tú.</li>
  <li><strong>Uimhir an táirge</strong>: socraíonn an comhlacht féin í do gach leagan den táirge, mar shampla blas nó méid difriúil.</li>
  <li><strong>Digit seiceála</strong>: an digit dheireanach, a ríomhtar go huathoibríoch ó na 12 digit roimpi chun mícheart-léamh a chosc.</li>
</ul>

<h2>Cén fáth a dteastaíonn uimhir oifigiúil?</h2>
<p>Is féidir le duine ar bith barrachód EAN-13 a tharraingt, ach caithfidh an <strong>uimhir</strong> a bheith cláraithe. Úsáideann siopaí miondíola an uimhir sin chun táirgí a aithint ina gcórais. Má chumann tú uimhir duit féin, d'fhéadfadh sí teacht salach ar tháirge de chuid comhlachta eile agus d'fhéadfaí í a dhiúltú nuair a chláraítear an táirge leis an siopa.</p>

<h2>Conas uimhir a chlárú le GS1 Indonesia</h2>
<ol>
  <li>Ullmhaigh do dhoiciméid ghnó, ar nós NIB (Nomor Induk Berusaha) agus NPWP, chomh maith le liosta de na táirgí a gheobhaidh barrachód.</li>
  <li>Cláraigh do chomhlacht trí shuíomh gréasáin oifigiúil GS1 Indonesia agus roghnaigh cé mhéad uimhir a theastaíonn uait.</li>
  <li>Íoc an táille chlárúcháin agus an táille bhliantúil de réir na rialacha atá i bhfeidhm.</li>
  <li>Nuair a cheadaítear é, gheobhaidh tú uimhir chomhlachta agus beidh tú in ann uimhir a chruthú do gach táirge.</li>
</ol>
<p>Is féidir leis na riachtanais agus na táillí athrú, mar sin seiceáil an t-eolas is déanaí go díreach ar shuíomh gréasáin GS1 Indonesia i gcónaí.</p>

<h2>Íomhá an bharrachóid a chruthú</h2>
<p>Nuair atá uimhir agat, oscail an <a href="/?type=ean13">gineadóir EAN-13</a> agus cuir isteach 12 nó 13 digit d'uimhir táirge. Má chuireann tú 12 digit isteach, ríomhfar an digit seiceála go huathoibríoch. Déan cinnte go bhfuil an rogha téacs faoin mbarrachód cumasaithe ionas go bpriontálfar na huimhreacha, agus ansin íoslódáil é mar PNG.</p>

<h2>Leideanna maidir le priontáil ar phacáistiú</h2>
<ul>
  <li>Úsáid línte dubha nó gorm dorcha ar chúlra bán. Seachain dearg do na línte, mar úsáideann go leor scanóirí scipéid solas dearg, agus mar sin ní féidir línte dearga a léamh.</li>
  <li>Ná laghdaigh an barrachód an iomarca. Is é thart ar 37.3 × 25.9 mm méid caighdeánach EAN-13 agus is féidir é a laghdú go dtí thart ar 80%. Tuilleadh eolais sa <a href="/artikel/ukuran-barcode-untuk-dicetak">treoir maidir le méid barrachóid</a>.</li>
  <li>Fág spás folamh ar chlé agus ar dheis an bharrachóid, agus seachain é a chur ar fhillteacha nó ar uamanna an phacáistithe.</li>
  <li>Déan tástáil ar an gcóip phriontáilte le scanóir sula bpriontálann tú go leor.</li>
</ul>
<p>Do tháirgí a dhíoltar i Meiriceá Thuaidh, d'fhéadfaí iarraidh ort freisin <a href="/?type=upca">UPC-A</a> a úsáid, ina bhfuil 12 digit.</p>
`
};
