// Privatumo politika & Naudojimosi sąlygos (lietuvių), išversta iš scripts/legal-i18n/id.js.
module.exports = {
  labels: {
    privacy: "Privatumo politika",
    terms: "Naudojimosi sąlygos",
    effective: "Galioja nuo {date}"
  },
  privacy: {
    title: "Privatumo politika",
    desc: "Kokius duomenis I Need Barcode tvarko, kai kuriate brūkšninius kodus ir QR Code, ir kaip mes juos tvarkome.",
    body: `
<p>I Need Barcode (ineedbarcode.com) yra nemokamas brūkšninių kodų ir QR Code generatorius, kurį valdo Abid Hanan Wicaksono. Ši politika paaiškina, kokius duomenis tvarkome, kai naudojatės šia svetaine, ir kaip juos tvarkome. Sąmoningai renkame kuo mažiau duomenų: norėdami naudotis šia paslauga, neturite registruotis, prisijungti ar nurodyti savo vardo ir el. pašto adreso.</p>
<h2>Kokius duomenis tvarkome</h2>
<ul>
<li><strong>Brūkšninio kodo turinys.</strong> Jūsų įvesti tekstai, nuorodos, WiFi duomenys, kontaktai ir kiti duomenys apdorojami tiesiogiai jūsų naršyklėje. Brūkšninių kodų vaizdai sukuriami jūsų įrenginyje ir nesiunčiami į mūsų serverius, net ir tada, kai kuriate daug brūkšninių kodų vienu metu.</li>
<li><strong>Vieta.</strong> Mygtukas „Naudoti mano vietą“ prašo įrenginio vietos tik tada, kai tai leidžiate savo naršyklėje. Koordinatės tik įrašomos į formos lauką ir nesiunčiamos mums.</li>
<li><strong>Apytikslė šalis.</strong> Kad parinktų pradinę kalbą, svetainė gali nustatyti jūsų apytikslę šalį pagal užklausą mūsų serveriui. Ši informacija nesaugoma duomenų bazėje.</li>
<li><strong>Techniniai duomenys.</strong> Kaip ir beveik visose svetainėse, mūsų prieglobos paslaugų teikėjas (Vercel) saugumo ir veikimo tikslais registruoja techninius užklausų duomenis, pavyzdžiui, IP adresą, naršyklės tipą ir prieigos laiką. Šie žurnalai saugomi tik laikinai pagal Vercel politiką.</li>
<li><strong>Straipsnių statistika.</strong> Jei ši funkcija įjungta, peržiūrų, patiktukų ir pasidalijimų skaičius saugomas tik kaip bendras kiekvieno straipsnio skaičius, be duomenų, pagal kuriuos būtų galima jus nustatyti.</li>
</ul>
<h2>Slapukai ir saugojimas naršyklėje</h2>
<ul>
<li><strong>inbLang</strong>: įsimena šiame įrenginyje jūsų pasirinktą kalbą (localStorage).</li>
<li><strong>inbCountry</strong>: išsaugo apytikslę šalį vienos sesijos metu, kad kalbos nereikėtų nustatinėti iš naujo (sessionStorage).</li>
<li><strong>Kita vietinė saugykla</strong> (localStorage ir sessionStorage): pažymi jums patikusius straipsnius ir neleidžia vieno apsilankymo įskaičiuoti du kartus. Šie duomenys lieka jūsų įrenginyje.</li>
<li><strong>Trečiųjų šalių analitikos slapukai</strong> iš Google Analytics ir Microsoft Clarity, aprašyti toliau.</li>
</ul>
<h2>Analitika</h2>
<p>Naudojame analitikos įrankius, kad suprastume, kaip naudojamasi svetaine, ir ją tobulintume. Šie įrankiai įkeliami tik tada, kai pradedate sąveikauti su puslapiu, ir visai neįkeliami, jei jūsų naršyklė siunčia Global Privacy Control arba Do Not Track signalą. Brūkšninių kodų ir formų turinys niekada nesiunčiamas analitikos įrankiams; registruojami tik įvykiai, pavyzdžiui, pasirinktas brūkšninio kodo tipas ir atsisiuntimo mygtuko paspaudimai.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google LLC): naudoja slapukus atidarytiems puslapiams, apytikslei šaliai, įrenginio tipui ir minėtiems įvykiams matuoti. Saugojimas reklamos tikslais ir Google Signals yra išjungti. Duomenis tvarko Google pagal <a href="https://policies.google.com/privacy">Google privatumo politiką</a>.</li>
<li><strong>Microsoft Clarity</strong>: registruoja sąveikas, pavyzdžiui, paspaudimus ir slinkimą, šilumos žemėlapiams ir sesijų įrašams, ir užmaskuoja įvesties laukų turinį. Duomenis tvarko Microsoft pagal <a href="https://privacy.microsoft.com/privacystatement">Microsoft privatumo patvirtinimą</a>.</li>
</ul>
<p>Galite atsisakyti analitikos įjungę Global Privacy Control arba Do Not Track, užblokavę trečiųjų šalių slapukus naršyklės nustatymuose, naudodami sekimo blokavimo priemonę arba įdiegę <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a>. Svetaine vis tiek galima naudotis visapusiškai.</p>
<h2>Trečiųjų šalių paslaugos</h2>
<ul>
<li><strong>Vercel Inc.</strong> teikia prieglobos paslaugas. Serveriai gali būti už Indonezijos ribų.</li>
<li><strong>Google Fonts</strong> naudojamas tam tikroms rašto sistemoms rodyti (pavyzdžiui, arabų, tajų ar japonų). Įkeliant šriftus jūsų IP adresas matomas Google.</li>
<li><strong>Dalijimosi mygtukai</strong> (WhatsApp, Facebook, X, LinkedIn, Telegram) ir socialinių tinklų nuorodos susisiekia su šiomis paslaugomis tik tada, kai juos paspaudžiate.</li>
</ul>
<h2>Saugumas ir dalijimasis duomenimis</h2>
<p>Visi ryšiai su šia svetaine naudoja HTTPS. Mes neparduodame, nenuomojame ir neprekiaujame asmens duomenimis. Duomenimis dalijamasi tik su minėtais paslaugų teikėjais tiek, kiek būtina svetainės veikimui, arba jei to reikalauja įstatymai.</p>
<h2>Vaikai</h2>
<p>Ši paslauga neskirta jaunesniems nei 13 metų vaikams, ir mes sąmoningai nerenkame vaikų asmens duomenų.</p>
<h2>Jūsų teisės</h2>
<p>Pagal 2022 m. Įstatymą Nr. 27 dėl asmens duomenų apsaugos turite teisę prašyti susipažinti su savo asmens duomenimis, juos ištaisyti ar ištrinti, taip pat atšaukti savo sutikimą dėl jų tvarkymo. Kadangi beveik nesaugome duomenų, pagal kuriuos būtų galima jus nustatyti, daugumą prašymų galima išspręsti ištrynus slapukus ir svetainės duomenis savo naršyklėje. Dėl duomenų, kuriuos tvarko Google ar Microsoft, taip pat galite naudotis jų paslaugų privatumo nustatymais. Dėl kitų prašymų susisiekite su mumis.</p>
<h2>Politikos pakeitimai</h2>
<p>Ši politika gali būti bet kada atnaujinta. Pakeitimai galioja nuo jų paskelbimo šiame puslapyje, o įsigaliojimo data nurodyta puslapio viršuje.</p>
<h2>Kontaktai</h2>
<p>Klausimus apie šią politiką galite siųsti per kontaktų nuorodą kiekvieno puslapio apačioje arba per <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Taip pat perskaitykite mūsų <a href="/syarat-ketentuan">Naudojimosi sąlygas</a>.</p>
`
  },
  terms: {
    title: "Naudojimosi sąlygos",
    desc: "Nemokamo brūkšninių kodų ir QR Code generatoriaus I Need Barcode naudojimosi sąlygos.",
    body: `
<p>Naudodamiesi I Need Barcode (ineedbarcode.com), sutinkate su toliau pateiktomis naudojimosi sąlygomis. Jei nesutinkate, prašome šia paslauga nesinaudoti.</p>
<h2>Apie paslaugą</h2>
<p>I Need Barcode yra nemokamas įrankis brūkšninių kodų ir QR Code vaizdams kurti tiesiogiai naršyklėje. I Need Barcode nėra susijęs su GS1 ar bet kuriuo kitu brūkšninių kodų standarto savininku, nėra jų remiamas ir su jais nebendradarbiauja. QR Code yra registruotasis DENSO WAVE INCORPORATED prekių ženklas. Visi prekių ženklai priklauso atitinkamiems jų savininkams.</p>
<h2>Leidžiamas naudojimas</h2>
<ul>
<li>Jūsų sukurtus brūkšninių kodų vaizdus galima naudoti tiek asmeniniais, tiek komerciniais tikslais, pavyzdžiui, produktams, pakuotėms, etiketėms ir spaudiniams, be vandens ženklo ir nemokamai.</li>
<li>Mes tik kuriame brūkšninių kodų vaizdus ir neišduodame brūkšninių kodų numerių. Mažmeninės prekybos produktams EAN, UPC ar GTIN numeriai turi būti oficialiai užregistruoti per GS1.</li>
<li>Taip pat laikykitės taisyklių, galiojančių ten, kur naudojamas brūkšninis kodas, pavyzdžiui, parduotuvių, prekyvietių ar siuntų pristatymo paslaugų reikalavimų.</li>
</ul>
<h2>Jūsų atsakomybė</h2>
<p>Jūs prisiimate visą atsakomybę už duomenis, kuriuos įvedate į brūkšninius kodus, ir už tai, kaip juos naudojate. Prieš spausdindami brūkšninius kodus dideliais kiekiais, visada išbandykite juos keliais skaitytuvais ar kameros programėlėmis ir įsitikinkite, kad dydis, spalva ir kontrastas atitinka jūsų poreikius.</p>
<h2>Kas draudžiama</h2>
<ul>
<li>Kurti brūkšninius kodus ar QR Code, nukreipiančius į sukčiavimą, duomenų viliojimą (phishing), kenkėjiškas programas ar neteisėtą turinį.</li>
<li>Naudoti brūkšninius kodus kitiems priklausantiems produktams, dokumentams, bilietams ar numeriams padirbti.</li>
<li>Naudoti robotus, scenarijus ar automatizavimą norint dideliais kiekiais pasiekti paslaugą.</li>
<li>Trikdyti, perkrauti ar bandyti pažeisti mūsų serverių ir paslaugų saugumą.</li>
</ul>
<h2>Paslaugos prieinamumas</h2>
<p>Paslauga teikiama nemokamai ir bet kada be įspėjimo gali būti pakeista, apribota ar nutraukta.</p>
<h2>Atsakomybės atsisakymas</h2>
<p>Paslauga teikiama „tokia, kokia yra“ ir „tokia, kokia prieinama“, be jokių garantijų, įskaitant garantijas, kad paslauga visada veiks, bus be klaidų arba kad kiekvieną sukurtą brūkšninį kodą bus galima nuskaityti visais įrenginiais ir jis tiks konkrečiam tikslui.</p>
<h2>Atsakomybės apribojimas</h2>
<p>Kiek leidžia įstatymai, mes neatsakome už tiesioginius ar netiesioginius nuostolius, atsiradusius naudojantis šia paslauga arba dėl jūsų sukurtų brūkšninių kodų, įskaitant pakartotinio spausdinimo išlaidas ir nuostolius dėl nenuskaitomų brūkšninių kodų.</p>
<h2>Nuorodos į trečiąsias šalis</h2>
<p>Šioje svetainėje yra nuorodų į trečiųjų šalių svetaines ir paslaugas. Mes neatsakome nei už tų svetainių turinį, nei už jų politiką.</p>
<h2>Sąlygų pakeitimai</h2>
<p>Šios naudojimosi sąlygos gali būti bet kada atnaujintos. Toliau naudodamiesi paslauga po pakeitimų paskelbimo, laikoma, kad sutinkate su naujausia versija.</p>
<h2>Taikytina teisė</h2>
<p>Šioms naudojimosi sąlygoms taikoma Indonezijos Respublikos teisė.</p>
<h2>Kontaktai</h2>
<p>Klausimus ir pranešimus galite siųsti per kontaktų nuorodą kiekvieno puslapio apačioje arba per <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Taip pat perskaitykite mūsų <a href="/kebijakan-privasi">Privatumo politiką</a>.</p>
`
  }
};
