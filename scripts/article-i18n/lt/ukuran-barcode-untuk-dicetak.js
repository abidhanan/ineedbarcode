// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Tinkamas brūkšninio kodo dydis ir raiška spausdinimui",
  desc: "Per mažą ar neryškų brūkšninį kodą sunku nuskaityti. Sužinokite minimalų dydį, nuskaitymo atstumo taisyklę ir spausdinimui saugią paveikslėlio raišką.",
  tags: ["Gidai", "Spausdinimas"],
  coverCaption: "Etikečių spausdintuvas spausdina brūkšninius kodus siuntiniams ir pakuotėms.",
  inlineCaption: "Etiketės dydis lemia, kokio dydžio brūkšninį kodą galima atspausdinti.",
  faq: [
    ["Koks minimalus QR Code dydis spausdinimui?", "Nuskaitant iš arti, maždaug 2 × 2 cm yra saugi riba. Didesniems atstumams naudokite maždaug 10 : 1 nuskaitymo atstumo ir QR Code pločio santykį."],
    ["Koks standartinis EAN-13 brūkšninio kodo dydis?", "Standartinis EAN-13 dydis yra apie 37,3 × 25,9 mm. Jį galima sumažinti iki maždaug 80 % arba padidinti iki 200 %."],
    ["Kodėl atspausdintas brūkšninis kodas neryškus?", "Dažniausiai todėl, kad mažas paveikslėlis buvo padidintas arba išsaugotas kaip prastos kokybės JPG. Atsisiųskite didesniu modulio dydžiu PNG formatu."]
  ],
  body: `
<p>Ekrane gražiai atrodantis brūkšninis kodas atspausdintas nebūtinai bus nuskaitomas. Per mažas dydis, maža raiška ar išsiliejęs rašalas gali sutrukdyti skaitytuvui. Štai gidas, kaip užtikrinti, kad jūsų atspaudai būtų nuskaitomi.</p>

<h2>Susipažinkite su moduliu</h2>
<p><strong>Modulis</strong> – mažiausias brūkšninio kodo vienetas, t. y. vienas mažas QR Code kvadratėlis arba siauriausia linijinio brūkšninio kodo linija. Modulio dydis lemia, kaip lengvai brūkšninis kodas nuskaitomas. Svetainėje <a href="/">I Need Barcode</a> modulio dydį galite nustatyti skiltyje „Nustatymai“: kuo didesnė reikšmė, tuo didesnis ir ryškesnis atsisiunčiamas paveikslėlis.</p>

<h2>Minimalus QR Code dydis</h2>
<ul>
  <li>Nuskaitant iš arti (pavyzdžiui, vizitinė kortelė ar prekės etiketė), maždaug <strong>2 × 2 cm</strong> yra saugi riba.</li>
  <li>Taikykite maždaug <strong>10 : 1</strong> santykio taisyklę: nuskaitymo atstumas apytiksliai dešimt kartų didesnis už QR Code plotį. Plakatui, nuskaitomam iš 2 metrų atstumo, QR Code turėtų būti bent apie 20 cm.</li>
  <li>Kuo daugiau duomenų saugoma, tuo tankesnis raštas, todėl reikia didesnio dydžio.</li>
</ul>

<h2>Prekių brūkšninių kodų dydis</h2>
<p>Standartinis <a href="/?type=ean13">EAN-13</a> dydis yra apie 37,3 × 25,9 mm (100 %). Jį galima sumažinti iki maždaug 80 % arba padidinti iki 200 %. Nesutrumpinkite linijų aukščio per daug, nes kasos skaitytuvui reikia vietos nuskaityti iš įvairių kampų.</p>

<h2>Paveikslėlio raiška</h2>
<ul>
  <li>Spausdinant stenkitės, kad kiekvienas modulis būtų atvaizduotas <strong>keliais pilnais pikseliais</strong>, o ne pikselio dalimi. Atsisiųsdami pasirinkite didesnį modulio dydį, o tada sumažinkite dizaino programoje, o ne atvirkščiai.</li>
  <li>Nedidinkite mažo brūkšninio kodo paveikslėlio, nes kvadratėlių kraštai taps neryškūs ar dantyti.</li>
  <li>Išsaugokite PNG formatu, kad spalvos ir kraštai nebūtų sugadinti kaip JPG formatu.</li>
</ul>

<h2>Tylos zona</h2>
<p>Kiekvienam brūkšniniam kodui reikia tuščios erdvės aplink jį – ji vadinama <strong>tylos zona</strong> (quiet zone). QR Code ji idealiai turėtų būti keturių modulių pločio. Linijiniam brūkšniniam kodui tuščia erdvė kairėje ir dešinėje yra labai svarbi. Nedėkite teksto, dizaino linijų ar pakuotės krašto per arti.</p>

<h2>Spalvos ir medžiagos</h2>
<ul>
  <li>Brūkšniniam kodui naudokite tamsią spalvą, o fonui – šviesią.</li>
  <li>Venkite blizgių ar skaidrių medžiagų, nes atspindėta šviesa gali trukdyti kamerai.</li>
  <li>Prieš spausdindami daug, visada atspausdinkite vieną pavyzdį ir išbandykite jį keliais telefonais ar skaitytuvais.</li>
</ul>
<p>Jei jūsų brūkšninį kodą vis tiek sunku nuskaityti, peržiūrėkite <a href="/artikel/barcode-tidak-bisa-dipindai">7 priežastis, kodėl brūkšninis kodas nenuskaitomas</a>.</p>
`
};
