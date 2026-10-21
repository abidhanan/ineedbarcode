// Zásady ochrany osobných údajov a Podmienky používania (slovenčina).
module.exports = {
  labels: {
    privacy: "Zásady ochrany osobných údajov",
    terms: "Podmienky používania",
    effective: "Platné od {date}"
  },
  privacy: {
    title: "Zásady ochrany osobných údajov",
    desc: "Aké údaje I Need Barcode spracúva, keď vytvárate čiarové kódy a QR Code, a ako s nimi zaobchádzame.",
    body: `
<p>I Need Barcode (ineedbarcode.com) je bezplatný generátor čiarových kódov a QR Code, ktorý prevádzkuje Abid Hanan Wicaksono. Tieto zásady vysvetľujú, aké údaje spracúvame, keď používate tento web, a ako s nimi zaobchádzame. Zámerne zhromažďujeme čo najmenej údajov: na používanie služby sa nemusíte registrovať, prihlasovať ani uvádzať meno a e-mail.</p>
<h2>Aké údaje spracúvame</h2>
<ul>
<li><strong>Obsah kódu.</strong> Text, odkazy, údaje WiFi, kontakty a ďalšie údaje, ktoré zadáte, sa spracúvajú priamo vo vašom prehliadači. Obrázok čiarového kódu sa vytvára vo vašom zariadení a neodosiela sa na náš server, a to ani pri hromadnom vytváraní kódov.</li>
<li><strong>Poloha.</strong> Tlačidlo „Použiť moju polohu“ si vyžiada polohu zariadenia až potom, ako to povolíte v prehliadači. Súradnice sa iba vložia do poľa formulára a neodosielajú sa nám.</li>
<li><strong>Približná krajina.</strong> Na výber predvoleného jazyka môže web zistiť vašu približnú krajinu z požiadavky na náš server. Táto informácia sa neukladá do databázy.</li>
<li><strong>Technické údaje.</strong> Ako takmer každý web, náš poskytovateľ hostingu (Vercel) zaznamenáva technické údaje o požiadavkách, ako je IP adresa, typ prehliadača a čas prístupu, z bezpečnostných a prevádzkových dôvodov. Tieto záznamy sa uchovávajú iba dočasne v súlade so zásadami spoločnosti Vercel.</li>
<li><strong>Štatistiky článkov.</strong> Ak je táto funkcia zapnutá, počet zobrazení, označení „páči sa mi“ a zdieľaní sa ukladá iba ako celkové čísla pri jednotlivých článkoch, bez údajov, ktoré by vás identifikovali.</li>
</ul>
<h2>Súbory cookie a úložisko prehliadača</h2>
<ul>
<li><strong>inbLang</strong>: pamätá si jazyk, ktorý ste v tomto zariadení zvolili (localStorage).</li>
<li><strong>inbCountry</strong>: uchováva približnú krajinu počas jednej relácie, aby nebolo potrebné jazyk zisťovať znova (sessionStorage).</li>
<li><strong>Ďalšie lokálne úložisko</strong> (localStorage a sessionStorage): označuje články, ktoré sa vám páčia, a zabraňuje dvojitému započítaniu jednej návštevy. Tieto údaje zostávajú vo vašom zariadení.</li>
<li><strong>Analytické súbory cookie tretích strán</strong> od Google Analytics a Microsoft Clarity, opísané nižšie.</li>
</ul>
<h2>Analytika</h2>
<p>Analytické nástroje používame, aby sme pochopili, ako sa web používa, a mohli ho zlepšovať. Tieto nástroje sa načítajú až potom, ako začnete so stránkou pracovať, a nenačítajú sa vôbec, ak váš prehliadač odosiela signál Global Privacy Control alebo Do Not Track. Obsah kódov a formulárov sa analytickým nástrojom nikdy neodosiela; zaznamenávajú sa iba udalosti, ako je zvolený typ kódu a kliknutie na tlačidlo stiahnutia.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google LLC): používa súbory cookie na meranie zobrazených stránok, približnej krajiny, typu zariadenia a vyššie uvedených udalostí. Ukladanie na reklamné účely a Google Signals sú vypnuté. Údaje spracúva Google v súlade so <a href="https://policies.google.com/privacy">Zásadami ochrany súkromia Google</a>.</li>
<li><strong>Microsoft Clarity</strong>: zaznamenáva interakcie, ako sú kliknutia a posúvanie, pre teplotné mapy a záznamy relácií a maskuje obsah vstupných polí. Údaje spracúva Microsoft v súlade s <a href="https://privacy.microsoft.com/privacystatement">Vyhlásením spoločnosti Microsoft o ochrane osobných údajov</a>.</li>
</ul>
<p>Analytiku môžete odmietnuť zapnutím Global Privacy Control alebo Do Not Track, zablokovaním súborov cookie tretích strán v nastaveniach prehliadača, použitím blokovača sledovania alebo inštaláciou doplnku <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a>. Web môžete aj naďalej používať v plnom rozsahu.</p>
<h2>Služby tretích strán</h2>
<ul>
<li><strong>Vercel Inc.</strong> poskytuje hosting. Jeho servery sa môžu nachádzať mimo Indonézie.</li>
<li><strong>Google Fonts</strong> sa používa na zobrazenie niektorých písiem (napríklad arabského, thajského alebo japonského). Pri načítaní písiem je vaša IP adresa viditeľná pre Google.</li>
<li><strong>Tlačidlá na zdieľanie</strong> (WhatsApp, Facebook, X, LinkedIn, Telegram) a odkazy na sociálne siete kontaktujú tieto služby iba vtedy, keď na ne kliknete.</li>
</ul>
<h2>Bezpečnosť a zdieľanie údajov</h2>
<p>Všetky pripojenia k tomuto webu používajú HTTPS. Osobné údaje nepredávame, neprenajímame ani s nimi neobchodujeme. Údaje zdieľame iba s vyššie uvedenými poskytovateľmi služieb v rozsahu potrebnom na prevádzku webu, alebo ak to vyžaduje zákon.</p>
<h2>Deti</h2>
<p>Služba nie je určená deťom mladším ako 13 rokov a vedome nezhromažďujeme osobné údaje detí.</p>
<h2>Vaše práva</h2>
<p>V súlade so zákonom č. 27 z roku 2022 o ochrane osobných údajov máte právo požadovať prístup k svojim osobným údajom, ich opravu alebo vymazanie a tiež odvolať súhlas so spracúvaním. Keďže takmer neuchovávame údaje, ktoré by vás identifikovali, väčšinu žiadostí možno vybaviť jednoducho vymazaním súborov cookie a údajov webu vo vašom prehliadači. Pri údajoch, ktoré spracúva Google alebo Microsoft, môžete využiť aj nastavenia súkromia v ich službách. S ďalšími žiadosťami sa na nás obráťte.</p>
<h2>Zmeny zásad</h2>
<p>Tieto zásady môžu byť kedykoľvek aktualizované. Zmeny nadobúdajú účinnosť zverejnením na tejto stránke, pričom dátum účinnosti je uvedený hore.</p>
<h2>Kontakt</h2>
<p>Otázky k týmto zásadám môžete poslať prostredníctvom kontaktného odkazu v dolnej časti každej stránky alebo cez <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Prečítajte si aj naše <a href="/syarat-ketentuan">Podmienky používania</a>.</p>
`
  },
  terms: {
    title: "Podmienky používania",
    desc: "Podmienky používania I Need Barcode, bezplatného generátora čiarových kódov a QR Code.",
    body: `
<p>Používaním I Need Barcode (ineedbarcode.com) súhlasíte s nasledujúcimi podmienkami. Ak s nimi nesúhlasíte, službu, prosím, nepoužívajte.</p>
<h2>O službe</h2>
<p>I Need Barcode je bezplatný nástroj na vytváranie obrázkov čiarových kódov a QR Code priamo v prehliadači. I Need Barcode nie je pridružený k GS1 ani k žiadnemu vlastníkovi štandardov čiarových kódov, nie je nimi podporovaný a nespolupracuje s nimi. QR Code je registrovaná ochranná známka spoločnosti DENSO WAVE INCORPORATED. Všetky ochranné známky patria ich príslušným vlastníkom.</p>
<h2>Povolené použitie</h2>
<ul>
<li>Vytvorené obrázky čiarových kódov môžete používať na osobné aj komerčné účely, napríklad na výrobky, obaly, etikety a tlačoviny, bez vodoznaku a bezplatne.</li>
<li>Vytvárame iba obrázky čiarových kódov a neprideľujeme čísla kódov. Pri maloobchodných výrobkoch musia byť čísla EAN, UPC alebo GTIN oficiálne zaregistrované prostredníctvom GS1.</li>
<li>Dodržiavajte aj pravidlá platné tam, kde sa kód používa, napríklad požiadavky obchodov, online trhovísk alebo prepravných služieb.</li>
</ul>
<h2>Vaša zodpovednosť</h2>
<p>Nesiete plnú zodpovednosť za údaje, ktoré do čiarového kódu zadáte, a za spôsob, akým ho používate. Pred tlačou vo veľkom množstve kód vždy otestujte niekoľkými čítačkami alebo aplikáciami fotoaparátu a overte, že jeho veľkosť, farba a kontrast zodpovedajú vašim potrebám.</p>
<h2>Čo je zakázané</h2>
<ul>
<li>Vytvárať čiarové kódy alebo QR Code vedúce k podvodom, phishingu, malvéru alebo nezákonnému obsahu.</li>
<li>Používať čiarové kódy na falšovanie výrobkov, dokumentov, lístkov alebo čísel patriacich iným osobám.</li>
<li>Používať boty, skripty alebo automatizáciu na hromadný prístup k službe.</li>
<li>Narúšať, preťažovať alebo sa pokúšať prelomiť zabezpečenie našich serverov a služieb.</li>
</ul>
<h2>Dostupnosť služby</h2>
<p>Služba sa poskytuje bezplatne a môže byť kedykoľvek bez upozornenia zmenená, obmedzená alebo ukončená.</p>
<h2>Vylúčenie záruk</h2>
<p>Služba sa poskytuje „tak, ako je“ a „podľa dostupnosti“, bez akýchkoľvek záruk, vrátane záruky, že služba bude vždy fungovať, bude bez chýb alebo že každý vytvorený čiarový kód bude čitateľný všetkými zariadeniami a vhodný na určitý účel.</p>
<h2>Obmedzenie zodpovednosti</h2>
<p>V rozsahu povolenom zákonom nenesieme zodpovednosť za priame ani nepriame škody vzniknuté v súvislosti s používaním tejto služby alebo s vami vytvorenými čiarovými kódmi, vrátane nákladov na opätovnú tlač a škôd spôsobených nečitateľnými kódmi.</p>
<h2>Odkazy na tretie strany</h2>
<p>Tento web obsahuje odkazy na weby a služby tretích strán. Nenesieme zodpovednosť za obsah ani zásady týchto webov.</p>
<h2>Zmeny podmienok</h2>
<p>Tieto podmienky môžu byť kedykoľvek aktualizované. Pokračovaním v používaní služby po zverejnení zmien sa má za to, že s najnovšou verziou súhlasíte.</p>
<h2>Rozhodné právo</h2>
<p>Tieto podmienky sa riadia právom Indonézskej republiky.</p>
<h2>Kontakt</h2>
<p>Otázky a hlásenia môžete poslať prostredníctvom kontaktného odkazu v dolnej časti každej stránky alebo cez <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Prečítajte si aj naše <a href="/kebijakan-privasi">Zásady ochrany osobných údajov</a>.</p>
`
  }
};
