// desain-qr-code-kreatif
module.exports = {
  title: "Kreativan dizajn QR Code koji se i dalje može skenirati",
  desc: "QR Code može dobiti oblik srca ili kruga, okvir i boje. Saznajte koja pravila treba poštovati da dizajn bude privlačan, a QR Code i dalje lak za skeniranje.",
  tags: ["Dizajn", "QR Code"],
  coverCaption: "Boje čine QR Code privlačnijim, sve dok kontrast ostaje jak.",
  inlineCaption: "Dizajn QR Code uvijek bi trebalo isprobati prije štampanja.",
  faq: [
    ["Može li se skenirati QR Code u obliku srca?", "Može. Originalni QR Code ostaje netaknut u sredini, a ostalo je samo ukrasni uzorak. Sve dok je kontrast jak, a veličina dovoljna, QR Code ostaje čitljiv."],
    ["Koje su boje sigurne za QR Code?", "Tamne boje kao što su crna, tamnoplava, tamnozelena, ljubičasta ili tamnosmeđa na bijeloj ili veoma svijetloj pozadini."],
    ["Može li QR Code imati tekst ili okvir?", "Može. Okvir s pozivom kao što je „SKENIRAJ ME“ zapravo pomaže ljudima da shvate čemu služi, sve dok okvir ne prekriva QR Code."]
  ],
  body: `
<p>Crno-bijeli QR Code jeste funkcionalan, ali često djeluje kruto na ambalaži, pozivnicama ili promotivnim materijalima. Uz malo dizajna QR Code može izgledati privlačnije, a da ne izgubi svoju funkciju. Ključno je razumjeti koji se dijelovi smiju mijenjati, a koji moraju ostati netaknuti.</p>

<h2>Vanjski oblik: srce, krug i drugi</h2>
<p>U odjeljku Dizajn u <a href="/?type=qrcode">generatoru QR Code</a> možete odabrati oblik kao što su krug, srce, šestougao, osmougao, zvijezda ili romb. Originalni QR Code ostaje u sredini, a ostatak se popunjava ukrasnim uzorkom dok se ne dobije odabrani oblik. Ukrasni uzorak ne sadrži podatke, pa ne ometa skeniranje sve dok oko originalnog QR Code postoji prazan prostor.</p>

<h2>Stil tačaka</h2>
<p>Kvadratići QR Code mogu se pretvoriti u zaobljene oblike ili okrugle tačke. Da bi QR Code ostao lak za skeniranje, tri velika kvadrata u uglovima (finder pattern) najbolje je ostaviti kao cijele kvadrate, jer ih kamera prve traži. Naš generator uvijek crta ove dijelove kao cijele kvadrate, najviše sa zaobljenim uglovima, bez obzira na to koji stil tačaka odaberete.</p>

<h2>Boje</h2>
<ul>
  <li>Koristite <strong>tamnu</strong> boju za QR Code i <strong>svijetlu</strong> boju za pozadinu. Tamnoplava, tamnozelena, ljubičasta ili tamnosmeđa uglavnom su sigurne.</li>
  <li>Izbjegavajte blijede boje za QR Code, kao što su žuta, blijedoružičasta ili svijetlosiva.</li>
  <li>Ne obrćite boje tako da dobijete svijetli QR Code na tamnoj pozadini, jer ga ne podržavaju sve aplikacije za skeniranje.</li>
</ul>

<h2>Okviri i pozivi na akciju</h2>
<p>Okviri s pozivom kao što su „SKENIRAJ ME“, „MENI“ ili „SCAN WIFI“ dokazano pomažu ljudima da shvate čemu QR Code služi. Možete odabrati okvir s natpisom ispod, natpisom iznad, ugaoni okvir, oblačić, krug ili traku, a zatim promijeniti tekst i boju.</p>

<h2>Pravila da dizajn ostane čitljiv</h2>
<ol>
  <li>Održavajte jak <strong>kontrast</strong> između QR Code i pozadine.</li>
  <li>Pustite da <strong>tri kvadrata za orijentaciju</strong> u uglovima ostanu jasna i neprekrivena.</li>
  <li>Ostavite <strong>prazan prostor</strong> oko QR Code i okvira.</li>
  <li>Nemojte pretjerano smanjivati QR Code koji ima dizajn. Oblici kao što je srce čine površinu originalnog QR Code manjom od ukupne veličine slike.</li>
  <li><strong>Isprobajte</strong> ga s nekoliko telefona prije štampanja.</li>
</ol>

<p>Ako se vaš dizajn teško skenira, vraćajte postavke jednu po jednu na osnovne dugmetom <strong>Resetuj</strong> kako biste pronašli uzrok. Ostale česte uzroke možete pročitati u članku <a href="/artikel/barcode-tidak-bisa-dipindai">7 razloga zašto se barkod ne može skenirati</a>.</p>
`
};
