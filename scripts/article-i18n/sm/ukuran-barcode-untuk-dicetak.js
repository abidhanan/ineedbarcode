// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Le Lapo'a ma le Manino Sa'o o Barcode mo le Lolomiga",
  desc: "O se barcode e la'ititi tele po'o le manino e faigata ona sikeni. A'oa'o le lapo'a aupito la'ititi, le tulafono o le mamao o le sikeniina, ma le manino o le ata (resolution) e saogalemu mo le lolomiga.",
  tags: ["Ta'iala", "Lolomi"],
  coverCaption: "O se masini lolomi fa'ailoga o lo'o lolomi barcode mo afifi ma oloa.",
  inlineCaption: "O le lapo'a o le fa'ailoga e fa'amautu ai le tele e mafai ona lolomi ai le barcode.",
  faq: [
    ["O le a le lapo'a aupito la'ititi o se QR Code mo le lolomiga?", "Mo le sikeniina latalata, o le tusa ma le 2 × 2 cm o le tapula'a saogalemu lea. Mo se mamao sili atu, fa'aaoga le fua fa'atatau e tusa ma le 10 : 1 i le va o le mamao o le sikeniina ma le lautele o le QR Code."],
    ["O le a le lapo'a masani o se barcode EAN-13?", "O le lapo'a masani o le EAN-13 e tusa ma le 37,3 × 25,9 mm. E mafai ona fa'aitiitia lenei lapo'a e o'o i le tusa ma le 80% pe fa'atele e o'o i le 200%."],
    ["Aisea e le manino ai le barcode pe a uma ona lolomi?", "E masani lava ona o le ata sa la'ititi ona fa'atele ai lea, po'o na teuina o se JPG e maualalo lona tulaga lelei. La'u mai i se lapo'a o vaega laiti e sili atu ona tele i le fa'atulagaga PNG."]
  ],
  body: `
<p>O se barcode e foliga lelei i le lau e le fa'apea o le a mafai ona faitau pe a uma ona lolomi. O se lapo'a e la'ititi tele, o se manino maualalo, po'o le vaitusi ua sosolo e mafai ona le mafai ai e le masini sikeni ona faitau. O le ta'iala lenei ina ia mafai pea ona faitau mea tou te lolomiina.</p>

<h2>Ia iloa le vaega laiti (module)</h2>
<p>O le <strong>vaega laiti</strong> (module) o le iunite aupito la'ititi lea o se barcode, o lona uiga o se sikuea la'ititi e tasi i se QR Code po'o le laina aupito vaapiapi i se barcode laina. O le lapo'a o le vaega laiti e fa'amautu ai le faigofie o le faitauina o le barcode. I le <a href="/">I Need Barcode</a>, e mafai ona fa'atulaga le lapo'a o le vaega laiti i le vaega Fa'atulagaga: o le tele o le tau, o le tele ma le ma'ai fo'i lea o le ata e la'u mai.</p>

<h2>Lapo'a aupito la'ititi o le QR Code</h2>
<ul>
  <li>Mo le sikeniina latalata (mo se fa'ata'ita'iga se kata pisinisi po'o se fa'ailoga o se oloa), o le lapo'a e tusa ma le <strong>2 × 2 cm</strong> o le tapula'a saogalemu lea.</li>
  <li>Fa'aaoga le tulafono o le fua fa'atatau e tusa ma le <strong>10 : 1</strong>: o le mamao o le sikeniina e tusa ma le fa'asefulu le lautele o le QR Code. Mo se pepa lautele e sikeni mai le mamao e 2 mita, faia le QR Code ia le itiiti ifo i le tusa ma le 20 cm.</li>
  <li>O le tele o fa'amatalaga e teuina, o le mafiafia fo'i lea o le mamanu, o lea e mana'omia ai se lapo'a e sili atu ona tele.</li>
</ul>

<h2>Lapo'a o barcode o oloa</h2>
<p>O le lapo'a masani o le <a href="/?type=ean13">EAN-13</a> e tusa ma le 37,3 × 25,9 mm (100%). E mafai ona fa'aitiitia lenei lapo'a e o'o i le tusa ma le 80% pe fa'atele e o'o i le 200%. Aloese mai le tipiina ia pu'upu'u tele le maualuga o laina, ona e mana'omia e masini sikeni i mea e totogi ai se avanoa e faitau ai mai itu ese'ese.</p>

<h2>Manino o le ata</h2>
<ul>
  <li>Mo le lolomiga, taumafai ia tusia vaega laiti ta'itasi i ni <strong>pika atoatoa se tele</strong>, ae le o se vaega o se pika. Filifili se lapo'a o vaega laiti e sili atu ona tele pe a la'u mai, ona fa'aitiitia lea i le polokalame mamanu, ae le o le isi itu.</li>
  <li>Aloese mai le fa'ateleina o se ata la'ititi o se barcode, ona o pito o sikuea o le a le manino pe nifoniforia.</li>
  <li>Teu i le fa'atulagaga PNG ina ia aua ne'i fa'aleagaina lanu ma pito e pei ona tupu i le JPG.</li>
</ul>

<h2>Vaega filemu</h2>
<p>E mana'omia e barcode ta'itasi se avanoa gaogao e si'omia ai, e ta'ua o le <strong>vaega filemu</strong> (quiet zone). Mo se QR Code, e sili ona lelei pe a tutusa lona lautele ma vaega laiti e fa. Mo se barcode laina, e taua tele le avanoa gaogao i le agavale ma le taumatau. Aua ne'i tu'u latalata tele tusitusiga, laina o le mamanu, po'o pito o le afifi.</p>

<h2>Lanu ma mea e lolomi ai</h2>
<ul>
  <li>Fa'aaoga se lanu pogisa mo le barcode ma se lanu malamalama mo le tua.</li>
  <li>Aloese mai mea e iila po'o manino, ona o le malamalama e toe fa'afo'i e mafai ona fa'alavelave ai le meapu'eata.</li>
  <li>Ia lolomi pea se fa'ata'ita'iga e tasi ma fa'ata'ita'i i ni telefoni po'o ni masini sikeni se tele a'o le'i lolomiina se aofa'i tele.</li>
</ul>
<p>Afai o lo'o faigata pea ona sikeni la outou barcode, siaki le <a href="/artikel/barcode-tidak-bisa-dipindai">mafua'aga e 7 e le mafai ai ona sikeni se barcode</a>.</p>
`
};
