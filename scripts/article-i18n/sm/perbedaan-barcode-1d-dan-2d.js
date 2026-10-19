// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "O le Ese'esega o le Barcode 1D ma le 2D: O le Fea e Mana'omia e Outou?",
  desc: "O le barcode laina ma le QR Code o ni barcode uma, ae e ese'ese lo la aoga. Fa'atusatusa le tele e mafai ona teuina, le auala e sikeni ai, ma ni fa'ata'ita'iga o lo la fa'aaogaina.",
  tags: ["Fa'avae", "Barcode"],
  coverCaption: "O se masini sikeni e uu i lima i le fale teu oloa e faitau barcode 1D ma 2D.",
  inlineCaption: "O fa'ailoga o oloa e lafo e masani ona fa'aaoga barcode laina.",
  faq: [
    ["E mafai ea e masini sikeni i mea e totogi ai ona faitau se QR Code?", "E le o mea uma. O masini sikeni leisa 1D e na'o barcode laina e faitau. Mo le QR Code e mana'omia se masini sikeni 2D e fa'aaoga ai se meapu'eata po'o le meapu'eata o se telefoni."],
    ["O le fea barcode e sili ona la'ititi?", "O le Data Matrix o se tasi o barcode 2D e mafai ona lolomi la'ititi tele, o lea e masani ai ona fa'aaoga i vaega o mea fa'aeletonika, mea faigaluega fa'afoma'i, ma fa'ailoga o vailaau."],
    ["E mafai ea ona fa'aaoga se QR Code e sui ai le EAN-13 i luga o oloa fa'atau?", "Ina ia fa'atau atu i faleoloa, e mana'omia pea e le oloa se EAN-13 po'o se UPC ua resitalaina. E mafai ona fa'aopoopo se QR Code i luga o le afifi e fa'aopoopo atu, mo se fa'ata'ita'iga mo fa'amatalaga o le oloa po'o fa'alauiloaga."]
  ],
  body: `
<p>A faia se barcode, o le fesili muamua e masani ona tula'i mai: e fa'aaoga se barcode laina po'o se QR Code? E ta'ua uma i la'ua o barcode, ae e ese'ese le auala e teuina ai fa'amatalaga, o lea e ese'ese ai fo'i lo la aoga.</p>

<h2>Barcode 1D (laina)</h2>
<p>O le barcode 1D o se barcode e faia i laina tutu sa'o. E teuina fa'amatalaga i le itu e tasi, o lona uiga mai le agavale i le taumatau. O fa'ata'ita'iga sili ona lauiloa o le <a href="/?type=ean13">EAN-13</a> i luga o afifi o oloa ma le <a href="/?type=code128">Code 128</a> i luga o fa'ailoga o oloa e lafo.</p>
<ul>
  <li>E la'ititi le tele e mafai ona teuina, e masani lava o ni nai sefulu mata'itusi.</li>
  <li>E mafai ona faitau e masini sikeni leisa i mea e totogi ai e taugofie ma vave tele.</li>
  <li>E fetaui mo numera o oloa, numera fa'asologa, ma numera o afifi e lafo.</li>
</ul>

<h2>Barcode 2D</h2>
<p>E teuina e le barcode 2D fa'amatalaga i itu e lua, i le itu ma i lalo, o lea e mafai ai ona teuina le tele atili. O fa'ata'ita'iga o le <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, ma le <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>E tele le mea e mafai ona teuina, mai le fia sefulu e o'o i le fia afe mata'itusi.</li>
  <li>E mafai ona sikeni i le meapu'eata o se telefoni mai itu ese'ese.</li>
  <li>E i ai le fa'asa'oina o mea sese, o lea e mafai pea ona faitau e ui lava ua fa'aleagaina sina vaega.</li>
  <li>E mafai ona faia ia la'ititi tele, mo se fa'ata'ita'iga le Data Matrix i luga o vaega o mea fa'aeletonika.</li>
</ul>

<h2>Fa'atusatusaga pu'upu'u</h2>
<table>
  <thead><tr><th></th><th>Barcode 1D</th><th>Barcode 2D</th></tr></thead>
  <tbody>
    <tr><td>Foliga</td><td>Laina tutu sa'o</td><td>Sikuea/togi i totonu o se sikuea</td></tr>
    <tr><td>Tele e mafai ona teuina</td><td>La'ititi</td><td>Tele</td></tr>
    <tr><td>Mea e sikeni ai</td><td>Masini sikeni leisa po'o meapu'eata</td><td>Meapu'eata po'o masini sikeni 2D</td></tr>
    <tr><td>Tete'e i le fa'aleagaina</td><td>Fa'atapula'aina</td><td>E i ai le fa'asa'oina o mea sese</td></tr>
    <tr><td>Fa'ata'ita'iga</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>O afea e fa'aaoga ai le tasi po'o le isi?</h2>
<ul>
  <li><strong>Oloa e fa'atau atu i faleoloa po'o faleoloa laiti</strong>: fa'aaoga le EAN-13 aloa'ia mai le GS1. Va'ai le <a href="/artikel/cara-mendapatkan-barcode-ean-13">auala e maua ai se barcode EAN-13</a>.</li>
  <li><strong>Fa'ailoga o fale teu oloa, fata, po'o oloa e lafo</strong>: o le Code 128 o le filifiliga masani ona e mafiafia ma lagolagoina mata'itusi ma numera.</li>
  <li><strong>So'otaga, lisi o mea'ai, WiFi, po'o fa'amatalaga feso'ota'i mo tagata fa'atau</strong>: QR Code, ona e mafai ona sikeni sa'o i le meapu'eata o se telefoni.</li>
  <li><strong>Fa'ailoga la'ititi tele</strong>: Data Matrix.</li>
  <li><strong>Pepa fa'ailoa, pepa malaga va'alele, po'o pepa aloa'ia</strong>: PDF417 po'o le Aztec.</li>
</ul>
<p>O ituaiga uma o lo'o i luga e mafai ona outou faia fua i le <a href="/">I Need Barcode</a>. Afai o lo'o masalosalo pea, amata i le QR Code mo mana'oga o tagata fa'atau ma le Code 128 mo mana'oga i totonu.</p>
`
};
