// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Kā mazajam uzņēmumam iegūt EAN-13 preces svītrkodu",
  desc: "Vēlaties, lai jūsu prece nonāktu veikalos vai lielveikalos? Uzziniet, ko nozīmē EAN-13 cipari, kā reģistrēt oficiālu numuru GS1 Indonesia un kā to izdrukāt.",
  tags: ["Bizness", "Mazumtirdzniecība"],
  coverCaption: "Mazumtirdzniecības preču iepakojumam vajadzīgs reģistrēts EAN-13 svītrkods.",
  inlineCaption: "Veikals atpazīst preci pēc EAN-13 numura savā kases sistēmā.",
  faq: [
    ["Vai EAN-13 numuru drīkst izveidot pašam?", "Svītrkoda attēlu varat izveidot paši, taču numuram vēlams būt oficiālam no GS1. Paša izdomāts numurs var sakrist ar citas preces numuru, un veikali to noraidīs."],
    ["Vai katram preces variantam vajag atsevišķu svītrkodu?", "Jā. Katram atšķirīgam variantam, piemēram, ar citu garšu, izmēru vai iepakojuma saturu, vajadzīgs savs EAN-13 numurs."],
    ["Kas ir EAN-13 kontrolcipars?", "Kontrolcipars ir 13. cipars, ko aprēķina no 12 iepriekšējiem cipariem. Skeneris to izmanto, lai pārliecinātos, ka svītrkods nolasīts pareizi. I Need Barcode ģenerators to aprēķina automātiski, ja ievadāt 12 ciparus."]
  ],
  body: `
<p>Ja vēlaties, lai jūsu prece tiktu pārdota veikalos, lielveikalos vai lielās tirdzniecības platformās, parasti jums lūgs uz iepakojuma norādīt <strong>EAN-13</strong> svītrkodu. Šis svītrkods satur 13 ciparus, kas kļūst par jūsu preces unikālo identifikatoru visā pasaulē.</p>

<h2>Ko nozīmē 13 EAN-13 cipari</h2>
<ul>
  <li><strong>GS1 prefikss</strong>: pirmie trīs cipari norāda GS1 organizāciju, kas izsniegusi numuru. GS1 Indonesia izsniegtie numuri sākas ar <strong>899</strong>.</li>
  <li><strong>Uzņēmuma numurs</strong>: jūsu uzņēmuma identifikators, ko piešķir reģistrējoties.</li>
  <li><strong>Preces numurs</strong>: uzņēmums to nosaka pats katram preces variantam, piemēram, ar citu garšu vai izmēru.</li>
  <li><strong>Kontrolcipars</strong>: pēdējais cipars, ko automātiski aprēķina no 12 iepriekšējiem cipariem, lai novērstu nolasīšanas kļūdas.</li>
</ul>

<h2>Kāpēc vajadzīgs oficiāls numurs?</h2>
<p>EAN-13 svītrkodu var uzzīmēt jebkurš, taču <strong>numuram</strong> jābūt reģistrētam. Veikali pēc šī numura atpazīst preci savās sistēmās. Ja numuru izdomāsiet paši, tas var sakrist ar cita uzņēmuma preces numuru un tikt noraidīts, kad prece tiek reģistrēta veikalā.</p>

<h2>Kā reģistrēt numuru GS1 Indonesia</h2>
<ol>
  <li>Sagatavojiet uzņēmuma dokumentus, piemēram, NIB (Nomor Induk Berusaha) un NPWP, kā arī to preču sarakstu, kurām tiks piešķirts svītrkods.</li>
  <li>Reģistrējiet uzņēmumu GS1 Indonesia oficiālajā vietnē un izvēlieties nepieciešamo numuru skaitu.</li>
  <li>Samaksājiet reģistrācijas maksu un gada maksu saskaņā ar spēkā esošajiem noteikumiem.</li>
  <li>Pēc apstiprināšanas saņemsiet uzņēmuma numuru un varēsiet izveidot numurus katrai precei.</li>
</ol>
<p>Prasības un maksas var mainīties, tāpēc vienmēr pārbaudiet jaunāko informāciju tieši GS1 Indonesia vietnē.</p>

<h2>Svītrkoda attēla izveide</h2>
<p>Kad numurs ir saņemts, atveriet <a href="/?type=ean13">EAN-13 ģeneratoru</a> un ievadiet 12 vai 13 jūsu preces numura ciparus. Ja ievadīsiet 12 ciparus, kontrolcipars tiks aprēķināts automātiski. Pārliecinieties, ka ir ieslēgta teksta zem svītrkoda opcija, lai cipari tiktu izdrukāti, un lejupielādējiet kā PNG.</p>

<h2>Padomi drukāšanai uz iepakojuma</h2>
<ul>
  <li>Izmantojiet melnas vai tumši zilas svītras uz balta fona. Izvairieties no sarkanas krāsas svītrām, jo daudzi kases skeneri izmanto sarkanu gaismu, tāpēc sarkanas svītras netiek nolasītas.</li>
  <li>Nesamaziniet svītrkodu pārmērīgi. Standarta EAN-13 izmērs ir aptuveni 37,3 × 25,9 mm, un to drīkst samazināt līdz aptuveni 80 %. Vairāk – <a href="/artikel/ukuran-barcode-untuk-dicetak">svītrkodu izmēru ceļvedī</a>.</li>
  <li>Atstājiet tukšu vietu svītrkoda kreisajā un labajā pusē un nenovietojiet to uz iepakojuma locījumiem vai šuvēm.</li>
  <li>Pirms drukāšanas lielos daudzumos pārbaudiet izdruku ar skeneri.</li>
</ul>
<p>Precēm, ko pārdod Ziemeļamerikā, jums var lūgt izmantot arī <a href="/?type=upca">UPC-A</a>, kas satur 12 ciparus.</p>
`
};
