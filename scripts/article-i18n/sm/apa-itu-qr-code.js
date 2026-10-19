// apa-itu-qr-code
module.exports = {
  title: "O le a le QR Code ma e Fa'apefea ona Galue?",
  desc: "E mafai e le QR Code ona teuina se so'otaga, se tusitusiga, e o'o lava i fa'amatalaga WiFi, ma e mafai pea ona faitau e ui lava ua fa'aleagaina sina vaega. O le auala lenei e galue ai ma ona aoga.",
  tags: ["Fa'avae", "QR Code"],
  coverCaption: "E mafai ona sikeni sa'o le QR Code i le meapu'eata o le telefoni.",
  inlineCaption: "O QR Code ta'itasi e faia i ni sikuea laiti uliuli ma papa'e.",
  faq: [
    ["E mafai ea ona fa'amuta le aoga o se QR Code?", "O se QR Code e le suia (static) e le mafai lava ona fa'amuta ona o ona fa'amatalaga ua tu'u sa'o i totonu o le ata. O se QR Code e suia (dynamic) e ono le toe aoga pe a tapuni le auaunaga e tu'uina mai lona so'otaga pe uma le saofaga."],
    ["E fa'afia le tele o fa'amatalaga e mafai ona teuina e se QR Code?", "O le fa'asologa sili ona tele o le QR Code e mafai ona teuina e o'o i le 7.089 numera po'o le tusa ma le 2.953 paita. Peita'i, o le la'ititi o fa'amatalaga, o le faigofie fo'i lea o le sikeniina o le QR Code."],
    ["E mafai pea ona faitau se QR Code pe a fa'aleagaina sina vaega?", "Ioe. Ona o le fa'asa'oina o mea sese, e mafai pea ona faitau le QR Code e ui lava ua fa'aleagaina le tusa ma le 7% e o'o i le 30% o ona vaega, e fa'atatau i le tulaga fa'asa'o L, M, Q, po'o le H o lo'o fa'aaogaina."]
  ],
  body: `
<p>O le QR Code (Quick Response Code) o se barcode 2D e foliga sikuea ma e faia i ni sikuea laiti uliuli ma papa'e. E le pei o le barcode laina e na'o ni nai sefulu numera e teuina, e mafai e le QR Code ona teuina le so'otaga o se upega tafa'ilagi, se tusitusiga umi, se numera telefoni, fa'amatalaga e fa'afeso'ota'i ai se tagata, e o'o lava i fa'amatalaga o se feso'ota'iga WiFi.</p>
<p>Na atia'e le QR Code i le 1994 e le Denso Wave, o se kamupani Iapani, e mata'ituina ai vaega o ta'avale i totonu o falegaosimea. I aso nei ua fa'aaoga le QR Code i so'o se mea, mai le totogiina i le initaneti e o'o lava i lisi o mea'ai i fale'aiga, ona e mafai ona sikeni sa'o i le meapu'eata o le telefoni.</p>

<h2>Vaega o le QR Code</h2>
<ul>
  <li><strong>Sikuea tetele e tolu i tulimanu</strong> (finder pattern): e fesoasoani i le meapu'eata e maua ai le QR Code ma iloa ai lona itu, o lea e mafai pea ona faitau le QR Code e ui ina sikeni fa'ata'agaloa po'o fa'afeagai i lalo.</li>
  <li><strong>Mamanu fa'ataoto</strong> (alignment pattern): o se sikuea la'ititi e fesoasoani e faitau ai se QR Code ua punou po'o va'aia mai le itu.</li>
  <li><strong>Vaega o fa'amatalaga</strong>: o sikuea laiti o lo'o i ai fa'amatalaga tou te teuina.</li>
  <li><strong>Vaega filemu</strong> (quiet zone): o le avanoa gaogao o lo'o si'omia ai le QR Code ina ia faigofie ona fa'ate'a ese mai le tua.</li>
</ul>

<h2>E fa'afia le tele o fa'amatalaga e mafai ona teuina?</h2>
<p>E 40 fa'asologa o le lapo'a o le QR Code. O le fa'asologa sili ona tele e mafai ona teuina e o'o i le 7.089 numera po'o le tusa ma le 2.953 paita o fa'amatalaga. I le fa'atinoga, o le la'ititi o fa'amatalaga e teuina, o le tetele fo'i lea o sikuea ma le faigofie o le sikeniina o le QR Code. O le mafua'aga lena e sili atu ai se so'otaga pu'upu'u nai lo se so'otaga umi tele.</p>

<h2>E mafai pea ona faitau e ui lava ua fa'aleagaina</h2>
<p>E fa'aaoga e le QR Code le fa'asa'oina o mea sese (error correction). E fa ona tulaga:</p>
<ul>
  <li><strong>L</strong>: e mafai pea ona toe maua fa'amatalaga pe a fa'aleagaina le tusa ma le 7% o le QR Code.</li>
  <li><strong>M</strong>: tusa ma le 15%. O le filifiliga masani lea ma paleni lelei.</li>
  <li><strong>Q</strong>: tusa ma le 25%.</li>
  <li><strong>H</strong>: tusa ma le 30%, e fetaui mo se QR Code o le a tu'u i ai se logo po'o le a lolomi i se nofoaga e faigofie ona palapala.</li>
</ul>
<p>O le maualuga o le tulaga fa'asa'o, o le tele fo'i lea o sikuea e mana'omia, o lea e foliga ai le mamanu o le QR Code e sili atu ona mafiafia.</p>

<h2>O a mea e mafai ona teuina i se QR Code?</h2>
<ul>
  <li>O le so'otaga o se upega tafa'ilagi, se faleoloa i luga o le initaneti, po'o se pepa fa'atumu.</li>
  <li>Fa'amatalaga WiFi, ina ia mafai e malo ona feso'ota'i e aunoa ma le taina o le upu fa'alilolilo. Va'ai le ta'iala o le <a href="/artikel/cara-membuat-qr-code-wifi">QR Code WiFi</a>.</li>
  <li>Kata pisinisi fa'atekinolosi (vCard), imeli, SMS, ma talanoaga WhatsApp.</li>
  <li>O se nofoaga i luga o le fa'afanua ma le fa'asologa o taimi o se fa'amoemoega.</li>
</ul>

<h2>QR Code e le suia ma QR Code e suia</h2>
<p>O se QR Code e faia sa'o mai fa'amatalaga e ta'ua o le <strong>QR Code e le suia</strong> (static): o ona anotusi ua tu'u i totonu o le ata ma e le mafai ona suia, ae e le mafai fo'i ona fa'amuta lona aoga. O se QR Code <strong>e suia</strong> (dynamic) o lo'o i ai se so'otaga pu'upu'u a se auaunaga e ave ai tagata i le nofoaga tou te mana'o ai; e mafai ona suia le nofoaga e alu i ai, ae o le a le toe aoga le QR Code pe a tapuni lea auaunaga. Mo le tele o mana'oga, ua lava le QR Code e le suia ma e sili atu ona saogalemu mo se taimi umi.</p>

<p>Tou te fia taumafai? Faia se <a href="/?type=qrcode">QR Code e fua</a> i le taimi nei, pe faitau le <a href="/artikel/cara-membuat-qr-code-gratis">auala e faia ai se QR Code i ni la'asaga e 3</a>.</p>
`
};
