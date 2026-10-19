// desain-qr-code-kreatif
module.exports = {
  title: "Kreativan dizajn QR Code koji se i dalje može skenirati",
  desc: "QR Code može imati oblik srca ili kruga te okvir i boje. Upoznajte pravila zahvaljujući kojima će dizajn biti privlačan, a istodobno lak za skeniranje.",
  tags: ["Dizajn", "QR Code"],
  coverCaption: "Boje čine QR Code privlačnijim, pod uvjetom da kontrast ostane jak.",
  inlineCaption: "Dizajn QR Code preporučljivo je uvijek isprobati prije ispisa.",
  faq: [
    ["Može li se QR Code u obliku srca i dalje skenirati?", "Može. Izvorni QR Code ostaje netaknut u sredini, a ostatak je samo ukrasni uzorak. Sve dok je kontrast jak, a veličina dovoljna, QR Code ostaje čitljiv."],
    ["Koje su boje sigurne za QR Code?", "Tamne boje poput crne, tamnoplave, tamnozelene, ljubičaste ili tamnosmeđe na bijeloj ili vrlo svijetloj pozadini."],
    ["Može li QR Code imati natpis ili okvir?", "Može. Okvir s pozivom poput „SKENIRAJ ME“ zapravo pomaže ljudima da shvate čemu služi, sve dok okvir ne prekriva QR Code."]
  ],
  body: `
<p>Crno-bijeli QR Code doduše je funkcionalan, ali na ambalaži, pozivnicama ili promotivnim materijalima često izgleda kruto. Uz malo dizajna QR Code može izgledati privlačnije, a da ne izgubi svoju funkciju. Ključ je razumjeti koji se dijelovi smiju mijenjati, a koji moraju ostati netaknuti.</p>

<h2>Vanjski oblik: srce, krug i drugi</h2>
<p>U odjeljku Dizajn u <a href="/?type=qrcode">generatoru QR Code</a> možete odabrati oblik poput kruga, srca, šesterokuta, osmerokuta, zvijezde ili romba. Izvorni QR Code ostaje u sredini, a ostatak se ispunjava ukrasnim uzorkom dok ne nastane odabrani oblik. Ukrasni uzorak ne sadrži podatke pa ne ometa skeniranje sve dok oko izvornog QR Code ostane prazan razmak.</p>

<h2>Stil točkica</h2>
<p>Kvadratići QR Code mogu se pretvoriti u zaobljene oblike ili okrugle točkice. Kako bi se QR Code i dalje lako skenirao, tri velika kvadrata u kutovima (finder pattern) trebala bi ostati cijeli kvadrati jer upravo te dijelove kamera prve traži. Naš generator te dijelove uvijek crta kao cijele kvadrate, najviše sa zaobljenim kutovima, bez obzira na stil točkica koji odaberete.</p>

<h2>Boje</h2>
<ul>
  <li>Za QR Code koristite <strong>tamnu</strong> boju, a za pozadinu <strong>svijetlu</strong>. Tamnoplava, tamnozelena, ljubičasta ili tamnosmeđa uglavnom su sigurne.</li>
  <li>Za QR Code izbjegavajte blijede boje poput žute, blijedoružičaste ili svijetlosive.</li>
  <li>Ne obrćite boje u svijetli QR Code na tamnoj pozadini jer to ne podržavaju sve aplikacije za skeniranje.</li>
</ul>

<h2>Okvir i poziv na radnju</h2>
<p>Okvir s pozivom poput „SKENIRAJ ME“, „MENU“ ili „SCAN WIFI“ dokazano pomaže ljudima da shvate čemu QR Code služi. Možete odabrati okvir s oznakom dolje, oznakom gore, kutni okvir, oblačić, krug ili vrpcu, a zatim promijeniti natpis i njegovu boju.</p>

<h2>Pravila da dizajn ostane čitljiv</h2>
<ol>
  <li>Održavajte jak <strong>kontrast</strong> između QR Code i njegove pozadine.</li>
  <li>Neka <strong>tri oznake</strong> u kutovima ostanu jasno vidljive i nepokrivene.</li>
  <li>Ostavite <strong>prazan prostor</strong> oko QR Code i okvira.</li>
  <li>Nemojte pretjerano smanjivati QR Code s dizajnom. Oblici poput srca čine područje izvornog QR Code manjim od ukupne veličine slike.</li>
  <li><strong>Isprobajte</strong> ga s nekoliko mobitela prije ispisa.</li>
</ol>

<p>Ako se vaš dizajn teško skenira, gumbom <strong>Vrati na zadano</strong> postupno vraćajte pojedine postavke na osnovne kako biste pronašli uzrok. Ostale česte uzroke možete pročitati u članku <a href="/artikel/barcode-tidak-bisa-dipindai">7 razloga zašto se barkod ne može skenirati</a>.</p>
`
};
