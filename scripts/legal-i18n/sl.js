// Politika zasebnosti in Pogoji uporabe (slovenščina).
module.exports = {
  labels: {
    privacy: "Politika zasebnosti",
    terms: "Pogoji uporabe",
    effective: "Velja od {date}"
  },
  privacy: {
    title: "Politika zasebnosti",
    desc: "Katere podatke obdeluje I Need Barcode, ko ustvarjate črtne kode in QR Code, ter kako z njimi ravnamo.",
    body: `
<p>I Need Barcode (ineedbarcode.com) je brezplačen generator črtnih kod in QR Code, ki ga upravlja Abid Hanan Wicaksono. Ta politika pojasnjuje, katere podatke obdelujemo, ko uporabljate to spletno mesto, in kako z njimi ravnamo. Namenoma zbiramo čim manj podatkov: za uporabo storitve se vam ni treba registrirati, prijaviti ali navesti imena in e-poštnega naslova.</p>
<h2>Podatki, ki jih obdelujemo</h2>
<ul>
<li><strong>Vsebina kode.</strong> Besedilo, povezave, podatki WiFi, stiki in drugi podatki, ki jih vnesete, se obdelujejo neposredno v vašem brskalniku. Slika črtne kode se ustvari v vaši napravi in se ne pošlje na naš strežnik, tudi ko ustvarjate več kod hkrati.</li>
<li><strong>Lokacija.</strong> Gumb »Uporabi mojo lokacijo« zahteva lokacijo naprave šele, ko to dovolite v brskalniku. Koordinate se le vnesejo v polje obrazca in se nam ne pošljejo.</li>
<li><strong>Približna država.</strong> Za izbiro začetnega jezika lahko spletno mesto približno državo razbere iz zahteve, poslane našemu strežniku. Ta informacija se ne shrani v podatkovno zbirko.</li>
<li><strong>Tehnični podatki.</strong> Kot skoraj vsako spletno mesto naš ponudnik gostovanja (Vercel) beleži tehnične podatke o zahtevah, kot so naslov IP, vrsta brskalnika in čas dostopa, zaradi varnosti in delovanja. Ti zapisi se hranijo le začasno v skladu s pravili družbe Vercel.</li>
<li><strong>Statistika člankov.</strong> Če je ta funkcija vklopljena, se število ogledov, všečkov in delitev hrani le kot skupno število za posamezni članek, brez podatkov, ki bi vas identificirali.</li>
</ul>
<h2>Piškotki in shramba brskalnika</h2>
<ul>
<li><strong>inbLang</strong>: si zapomni jezik, ki ste ga izbrali v tej napravi (localStorage).</li>
<li><strong>inbCountry</strong>: hrani približno državo za čas ene seje, da jezika ni treba znova ugotavljati (sessionStorage).</li>
<li><strong>Druga lokalna shramba</strong> (localStorage in sessionStorage): označuje članke, ki so vam všeč, in preprečuje, da bi se en obisk štel dvakrat. Ti podatki ostanejo v vaši napravi.</li>
<li><strong>Analitični piškotki tretjih oseb</strong> storitev Google Analytics in Microsoft Clarity, opisani spodaj.</li>
</ul>
<h2>Analitika</h2>
<p>Analitična orodja uporabljamo, da razumemo, kako se spletno mesto uporablja, in ga izboljšujemo. Ta orodja se naložijo šele, ko začnete uporabljati stran, in se sploh ne naložijo, če vaš brskalnik pošilja signal Global Privacy Control ali Do Not Track. Vsebina kod in obrazcev se analitičnim orodjem nikoli ne pošlje; beležijo se le dogodki, kot sta izbrana vrsta kode in klik na gumb za prenos.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google LLC): uporablja piškotke za merjenje odprtih strani, približne države, vrste naprave in zgoraj navedenih dogodkov. Shranjevanje za oglaševanje in Google Signals sta izklopljena. Podatke obdeluje Google v skladu s <a href="https://policies.google.com/privacy">Politiko zasebnosti Google</a>.</li>
<li><strong>Microsoft Clarity</strong>: beleži interakcije, kot sta klikanje in pomikanje, za toplotne zemljevide in posnetke sej ter zakrije vsebino vnosnih polj. Podatke obdeluje Microsoft v skladu z <a href="https://privacy.microsoft.com/privacystatement">Izjavo Microsofta o zasebnosti</a>.</li>
</ul>
<p>Analitiko lahko zavrnete tako, da vklopite Global Privacy Control ali Do Not Track, v nastavitvah brskalnika blokirate piškotke tretjih oseb, uporabite blokator sledilnikov ali namestite <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a>. Spletno mesto lahko še naprej v celoti uporabljate.</p>
<h2>Storitve tretjih oseb</h2>
<ul>
<li><strong>Vercel Inc.</strong> zagotavlja gostovanje. Njegovi strežniki so lahko zunaj Indonezije.</li>
<li><strong>Google Fonts</strong> se uporablja za prikaz nekaterih pisav (na primer arabske, tajske ali japonske). Ko se pisave nalagajo, je vaš naslov IP viden družbi Google.</li>
<li><strong>Gumbi za deljenje</strong> (WhatsApp, Facebook, X, LinkedIn, Telegram) in povezave do družbenih omrežij vzpostavijo stik s temi storitvami le, ko jih kliknete.</li>
</ul>
<h2>Varnost in deljenje podatkov</h2>
<p>Vse povezave s tem spletnim mestom uporabljajo HTTPS. Osebnih podatkov ne prodajamo, ne dajemo v najem in z njimi ne trgujemo. Podatke delimo le z zgoraj navedenimi ponudniki storitev, kolikor je to potrebno za delovanje spletnega mesta, ali če to zahteva zakon.</p>
<h2>Otroci</h2>
<p>Storitev ni namenjena otrokom, mlajšim od 13 let, in osebnih podatkov otrok ne zbiramo zavestno.</p>
<h2>Vaše pravice</h2>
<p>V skladu z Zakonom št. 27 iz leta 2022 o varstvu osebnih podatkov imate pravico zahtevati dostop do svojih osebnih podatkov, njihov popravek ali izbris ter preklicati privolitev v obdelavo. Ker skoraj ne hranimo podatkov, ki bi vas identificirali, je večino zahtev mogoče rešiti preprosto z izbrisom piškotkov in podatkov spletnega mesta v vašem brskalniku. Za podatke, ki jih obdelujeta Google ali Microsoft, lahko uporabite tudi nastavitve zasebnosti v njunih storitvah. Za druge zahteve nas kontaktirajte.</p>
<h2>Spremembe politike</h2>
<p>Ta politika se lahko kadar koli posodobi. Spremembe začnejo veljati z objavo na tej strani, datum začetka veljavnosti pa je naveden na vrhu.</p>
<h2>Stik</h2>
<p>Vprašanja o tej politiki lahko pošljete prek povezave za stik na dnu vsake strani ali prek <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Preberite tudi naše <a href="/syarat-ketentuan">Pogoje uporabe</a>.</p>
`
  },
  terms: {
    title: "Pogoji uporabe",
    desc: "Pogoji uporabe I Need Barcode, brezplačnega generatorja črtnih kod in QR Code.",
    body: `
<p>Z uporabo I Need Barcode (ineedbarcode.com) se strinjate z naslednjimi pogoji. Če se z njimi ne strinjate, storitve prosimo ne uporabljajte.</p>
<h2>O storitvi</h2>
<p>I Need Barcode je brezplačno orodje za ustvarjanje slik črtnih kod in QR Code neposredno v brskalniku. I Need Barcode ni povezan z GS1 ali katerim koli lastnikom standardov črtnih kod, ga ti ne podpirajo in z njimi ne sodeluje. QR Code je registrirana blagovna znamka družbe DENSO WAVE INCORPORATED. Vse blagovne znamke so last njihovih lastnikov.</p>
<h2>Dovoljena uporaba</h2>
<ul>
<li>Slike črtnih kod, ki jih ustvarite, lahko uporabljate v osebne in komercialne namene, na primer za izdelke, embalažo, nalepke in tiskovine, brez vodnega žiga in brezplačno.</li>
<li>Ustvarjamo le slike črtnih kod in ne izdajamo številk črtnih kod. Za maloprodajne izdelke morajo biti številke EAN, UPC ali GTIN uradno registrirane prek GS1.</li>
<li>Upoštevajte tudi pravila, ki veljajo tam, kjer se koda uporablja, na primer zahteve trgovin, spletnih tržnic ali dostavnih služb.</li>
</ul>
<h2>Vaša odgovornost</h2>
<p>V celoti ste odgovorni za podatke, ki jih vnesete v črtno kodo, in za način, kako jo uporabljate. Pred tiskanjem v velikih količinah kodo vedno preizkusite z več čitalniki ali aplikacijami za kamero in se prepričajte, da njena velikost, barva in kontrast ustrezajo vašim potrebam.</p>
<h2>Kaj je prepovedano</h2>
<ul>
<li>Ustvarjanje črtnih kod ali QR Code, ki vodijo do goljufij, lažnega predstavljanja (phishinga), zlonamerne programske opreme ali nezakonite vsebine.</li>
<li>Uporaba črtnih kod za ponarejanje izdelkov, dokumentov, vstopnic ali številk, ki pripadajo drugim.</li>
<li>Uporaba botov, skript ali avtomatizacije za množični dostop do storitve.</li>
<li>Motenje, preobremenjevanje ali poskusi vdora v varnost naših strežnikov in storitev.</li>
</ul>
<h2>Razpoložljivost storitve</h2>
<p>Storitev je na voljo brezplačno in se lahko kadar koli brez obvestila spremeni, omeji ali ukine.</p>
<h2>Izjava o omejitvi jamstva</h2>
<p>Storitev se zagotavlja »takšna, kot je« in »kot je na voljo«, brez kakršnih koli jamstev, vključno z jamstvom, da bo storitev vedno delovala, da bo brez napak ali da bo vsako ustvarjeno črtno kodo mogoče prebrati z vsemi napravami in da bo primerna za določen namen.</p>
<h2>Omejitev odgovornosti</h2>
<p>V obsegu, ki ga dovoljuje zakon, ne odgovarjamo za neposredno ali posredno škodo, ki nastane zaradi uporabe te storitve ali črtnih kod, ki ste jih ustvarili, vključno s stroški ponovnega tiskanja in škodo zaradi neberljivih kod.</p>
<h2>Povezave do tretjih oseb</h2>
<p>To spletno mesto vsebuje povezave do spletnih mest in storitev tretjih oseb. Ne odgovarjamo za vsebino ali pravila teh spletnih mest.</p>
<h2>Spremembe pogojev</h2>
<p>Ti pogoji se lahko kadar koli posodobijo. Z nadaljnjo uporabo storitve po objavi sprememb se šteje, da se strinjate z najnovejšo različico.</p>
<h2>Veljavno pravo</h2>
<p>Za te pogoje velja pravo Republike Indonezije.</p>
<h2>Stik</h2>
<p>Vprašanja in prijave lahko pošljete prek povezave za stik na dnu vsake strani ali prek <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Preberite tudi našo <a href="/kebijakan-privasi">Politiko zasebnosti</a>.</p>
`
  }
};
