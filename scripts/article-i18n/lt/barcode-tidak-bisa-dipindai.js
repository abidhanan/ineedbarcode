// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 priežastys, kodėl brūkšninis kodas nenuskaitomas, ir kaip tai išspręsti",
  desc: "Brūkšninis kodas ar QR Code nenuskaitomas? Peržiūrėkite septynias dažniausias priežastis – nuo spalvų kontrasto iki dydžio – ir sužinokite, kaip jas ištaisyti.",
  tags: ["Patarimai", "Brūkšniniai kodai"],
  coverCaption: "Kontrastas ir dydis lemia, ar QR Code lengva nuskaityti.",
  inlineCaption: "Sandėlyje nenuskaitomas brūkšninis kodas sulėtina darbą.",
  faq: [
    ["Kodėl QR Code nuskaitomas vienu telefonu, bet ne kitu?", "Kameros ir skaitymo programėlės skiriasi savo galimybėmis. Per mažas, mažo kontrasto ar apverstų spalvų QR Code dažniau nenuskaitomas tam tikrais telefonais. Prieš spausdindami išbandykite kodą keliais telefonais."],
    ["Ar spalvotą brūkšninį kodą galima nuskaityti?", "Taip, jei spalva yra tamsi ant šviesaus fono. Venkite raudonos spalvos brūkšninio kodo linijoms, nes daugelis kasų skaitytuvų naudoja raudoną šviesą."],
    ["Kaip patikrinti, ar brūkšninis kodas teisingas?", "Nuskaitykite atspaudą keliais telefonais ar skaitytuvais ir įsitikinkite, kad nuskaityti duomenys visiškai sutampa su jūsų įvestais duomenimis."]
  ],
  body: `
<p>Nėra nieko labiau erzinančio nei atspausdinti šimtus lapų su brūkšniniu kodu ir sužinoti, kad jo neįmanoma nuskaityti. Gera žinia ta, kad priežastis paprastai būna paprasta ir lengvai išvengiama. Štai septynios dažniausios priežastys.</p>

<h2>1. Per mažas spalvų kontrastas</h2>
<p>Skaitytuvas skaito tamsių ir šviesių vietų skirtumą. Šviesiai pilką brūkšninį kodą ant balto fono ar tamsiai mėlyną ant juodo sunku atskirti. <strong>Sprendimas:</strong> naudokite tamsią spalvą ant šviesaus fono. Juoda ant baltos – saugiausias pasirinkimas.</p>

<h2>2. Apverstos spalvos arba raudona spalva</h2>
<p>Šviesaus brūkšninio kodo ant tamsaus fono palaiko ne visi skaitytuvai. Be to, daugelis kasų skaitytuvų naudoja raudoną šviesą, todėl raudonos linijos atrodo taip pat kaip baltas fonas. <strong>Sprendimas:</strong> venkite raudonos spalvos brūkšninio kodo linijoms ar moduliams ir neapverskite spalvų.</p>

<h2>3. Per mažas dydis</h2>
<p>Kamerai reikia pakankamai pikselių, kad atpažintų kiekvieną modulį. <strong>Sprendimas:</strong> padidinkite brūkšninį kodą. Iš arti nuskaitomam QR Code naudokite bent maždaug 2 × 2 cm dydį. Žr. <a href="/artikel/ukuran-barcode-untuk-dicetak">spausdinimo dydžių gidą</a>.</p>

<h2>4. Nėra tylos zonos</h2>
<p>Brūkšninį kodą, prigludusį prie paveikslėlio, teksto ar popieriaus krašto, sunku atskirti nuo aplinkos. <strong>Sprendimas:</strong> palikite tuščią erdvę aplink brūkšninį kodą, ypač linijinio brūkšninio kodo kairėje ir dešinėje.</p>

<h2>5. Neryškus arba iškraipytas vaizdas</h2>
<p>Brūkšninis kodas, padidintas iš mažo paveikslėlio, išsaugotas kaip prastos kokybės JPG arba ištemptas neproporcingai, praranda savo formą. <strong>Sprendimas:</strong> atsisiųskite didesniu modulio dydžiu PNG formatu ir visada keiskite dydį proporcingai.</p>

<h2>6. Neteisingi arba rūšies neatitinkantys duomenys</h2>
<p>Kiekviena brūkšninio kodo rūšis turi savo taisykles. Pavyzdžiui, EAN-13 priima tik 12 arba 13 skaitmenų su teisingu kontroliniu skaitmeniu. Su klaida įvesta nuoroda taip pat lemia, kad QR Code nuskaitomas, bet nieko neatidaro. <strong>Sprendimas:</strong> prieš spausdindami patikrinkite duomenis. <a href="/">I Need Barcode</a> generatorius parodys pranešimą, jei duomenys neatitinka pasirinktos brūkšninio kodo rūšies taisyklių.</p>

<h2>7. Paviršius ir apšvietimas</h2>
<p>Blizgios medžiagos, skaidrus plastikas, lenkimai ir išgaubti paviršiai gali atspindėti šviesą arba iškraipyti brūkšninio kodo formą. <strong>Sprendimas:</strong> spausdinkite ant plokščio, neblizgaus paviršiaus ir išbandykite realiomis apšvietimo sąlygomis.</p>

<h2>Apie QR Code su dizainu</h2>
<p>QR Code su forma, spalvomis ar rėmeliu vis tiek nuskaitomas, jei trys žymekliai kampuose nepažeisti ir kontrastas pakankamas. Daugiau skaitykite straipsnyje <a href="/artikel/desain-qr-code-kreatif">kūrybiškas QR Code dizainas, kurį vis tiek galima nuskaityti</a>.</p>
<p>Geriausias įprotis: prieš spausdindami dideliais kiekiais <strong>visada išbandykite vieną atspaudą</strong> keliais telefonais ir skaitytuvais.</p>
`
};
