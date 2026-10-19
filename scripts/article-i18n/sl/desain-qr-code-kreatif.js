// desain-qr-code-kreatif
module.exports = {
  title: "Kreativno oblikovanje QR Code, ki ga je še vedno mogoče skenirati",
  desc: "QR Code ima lahko obliko srca ali kroga ter okvir in barve. Spoznajte pravila, s katerimi bo oblikovanje privlačno in hkrati enostavno za skeniranje.",
  tags: ["Oblikovanje", "QR Code"],
  coverCaption: "Barve naredijo QR Code privlačnejši, če kontrast ostane močan.",
  inlineCaption: "Oblikovanje QR Code je priporočljivo vedno preizkusiti pred tiskanjem.",
  faq: [
    ["Ali je QR Code v obliki srca še vedno mogoče skenirati?", "Da. Izvirni QR Code ostane nedotaknjen na sredini, preostanek pa je le okrasni vzorec. Če je kontrast močan in velikost zadostna, ostane QR Code berljiv."],
    ["Katere barve so varne za QR Code?", "Temne barve, kot so črna, temno modra, temno zelena, vijolična ali temno rjava, na belem ali zelo svetlem ozadju."],
    ["Ali lahko QR Code dobi napis ali okvir?", "Da. Okvir s pozivom, kot je „SKENIRAJ ME“, ljudem celo pomaga razumeti, čemu je namenjen, če okvir ne prekriva QR Code."]
  ],
  body: `
<p>Črno-beli QR Code je sicer funkcionalen, a je na embalaži, vabilih ali promocijskih gradivih pogosto videti tog. Z nekaj oblikovanja je QR Code lahko privlačnejši, ne da bi izgubil svojo funkcijo. Ključno je razumeti, katere dele lahko spremenite in kateri morajo ostati nedotaknjeni.</p>

<h2>Zunanja oblika: srce, krog in drugo</h2>
<p>V razdelku Oblikovanje v <a href="/?type=qrcode">generatorju QR Code</a> lahko izberete obliko, kot so krog, srce, šestkotnik, osemkotnik, zvezda ali romb. Izvirni QR Code ostane na sredini, preostanek pa se zapolni z okrasnim vzorcem, dokler ne nastane izbrana oblika. Okrasni vzorec ne vsebuje podatkov, zato ne moti skeniranja, če okoli izvirnega QR Code ostane prazen razmik.</p>

<h2>Slog pik</h2>
<p>Kvadratke QR Code lahko spremenite v zaobljene oblike ali okrogle pike. Da bo QR Code še vedno enostavno skenirati, naj trije veliki kvadrati v kotih (finder pattern) ostanejo celi kvadrati, saj prav te dele kamera išče najprej. Naš generator te dele vedno nariše kot cele kvadrate, kvečjemu z zaobljenimi vogali, ne glede na izbrani slog pik.</p>

<h2>Barve</h2>
<ul>
  <li>Za QR Code uporabite <strong>temno</strong> barvo, za ozadje pa <strong>svetlo</strong>. Temno modra, temno zelena, vijolična ali temno rjava so običajno varne.</li>
  <li>Za QR Code se izogibajte bledim barvam, kot so rumena, bledo rožnata ali svetlo siva.</li>
  <li>Barv ne obračajte v svetel QR Code na temnem ozadju, ker tega ne podpirajo vse aplikacije za skeniranje.</li>
</ul>

<h2>Okvir in poziv</h2>
<p>Okvir s pozivom, kot je „SKENIRAJ ME“, „MENU“ ali „SCAN WIFI“, dokazano pomaga ljudem razumeti, čemu je QR Code namenjen. Izberete lahko okvir z oznako spodaj, oznako zgoraj, kotni okvir, oblaček, krog ali trak, nato pa spremenite napis in njegovo barvo.</p>

<h2>Pravila, da oblikovanje ostane berljivo</h2>
<ol>
  <li>Ohranite močan <strong>kontrast</strong> med QR Code in ozadjem.</li>
  <li><strong>Trije označevalni kvadrati</strong> v kotih naj ostanejo jasno vidni in nepokriti.</li>
  <li>Okoli QR Code in okvirja pustite <strong>prazen prostor</strong>.</li>
  <li>Oblikovanega QR Code ne pomanjšujte preveč. Oblike, kot je srce, pomenijo, da je območje izvirnega QR Code manjše od celotne velikosti slike.</li>
  <li>Pred tiskanjem ga <strong>preizkusite</strong> z več telefoni.</li>
</ol>

<p>Če je vaše oblikovanje težko skenirati, z gumbom <strong>Ponastavi</strong> postopoma vračajte posamezne nastavitve na osnovne, da najdete vzrok. Druge pogoste vzroke si lahko preberete v članku <a href="/artikel/barcode-tidak-bisa-dipindai">7 razlogov, zakaj črtne kode ni mogoče skenirati</a>.</p>
`
};
