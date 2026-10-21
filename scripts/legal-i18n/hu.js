// Adatvédelmi szabályzat & Felhasználási feltételek (magyar), fordítva a scripts/legal-i18n/id.js fájlból.
module.exports = {
  labels: {
    privacy: "Adatvédelmi szabályzat",
    terms: "Felhasználási feltételek",
    effective: "Hatályos: {date}"
  },
  privacy: {
    title: "Adatvédelmi szabályzat",
    desc: "Milyen adatokat kezel az I Need Barcode, amikor Ön vonalkódokat és QR Code-okat készít, és hogyan bánunk ezekkel.",
    body: `
<p>Az I Need Barcode (ineedbarcode.com) egy ingyenes vonalkód- és QR Code-generátor, amelyet Abid Hanan Wicaksono üzemeltet. Ez a szabályzat bemutatja, milyen adatokat kezelünk, amikor Ön ezt a weboldalt használja, és hogyan bánunk ezekkel. Szándékosan a lehető legkevesebb adatot gyűjtjük: a szolgáltatás használatához nem kell regisztrálnia, bejelentkeznie, sem nevét és e-mail-címét megadnia.</p>
<h2>Az általunk kezelt adatok</h2>
<ul>
<li><strong>A vonalkód tartalma.</strong> Az Ön által megadott szövegek, linkek, WiFi-adatok, névjegyek és egyéb adatok közvetlenül az Ön böngészőjében kerülnek feldolgozásra. A vonalkódképek az Ön eszközén készülnek, és nem kerülnek elküldésre a szervereinkre, akkor sem, ha egyszerre sok vonalkódot készít.</li>
<li><strong>Helyadatok.</strong> A „Saját helyzetem használata” gomb csak azután kéri le az eszköz helyét, hogy Ön ezt a böngészőben engedélyezte. A koordináták csak az űrlapmezőbe kerülnek beírásra, nekünk nem kerülnek elküldésre.</li>
<li><strong>Becsült ország.</strong> A kezdeti nyelv kiválasztásához a weboldal a szerverünkhöz intézett kérésből megállapíthatja az Ön becsült országát. Ezt az információt nem tároljuk adatbázisban.</li>
<li><strong>Technikai adatok.</strong> Szinte minden weboldalhoz hasonlóan tárhelyszolgáltatónk (Vercel) biztonsági és üzemeltetési célból naplózza a kérések technikai adatait, például az IP-címet, a böngésző típusát és a hozzáférés idejét. Ezeket a naplókat csak ideiglenesen, a Vercel szabályzata szerint őrzik meg.</li>
<li><strong>Cikkstatisztikák.</strong> Ha a funkció be van kapcsolva, a megtekintések, kedvelések és megosztások száma csak cikkenkénti összesítésként kerül tárolásra, az Ön azonosítására alkalmas adatok nélkül.</li>
</ul>
<h2>Sütik és tárolás a böngészőben</h2>
<ul>
<li><strong>inbLang</strong>: megjegyzi az Ön által ezen az eszközön kiválasztott nyelvet (localStorage).</li>
<li><strong>inbCountry</strong>: egy munkamenet idejére tárolja a becsült országot, hogy a nyelvet ne kelljen újra megállapítani (sessionStorage).</li>
<li><strong>Egyéb helyi tárolás</strong> (localStorage és sessionStorage): megjelöli az Ön által kedvelt cikkeket, és megakadályozza, hogy egy látogatás kétszer legyen számolva. Ezek az adatok az Ön eszközén maradnak.</li>
<li><strong>Harmadik felek analitikai sütijei</strong> a Google Analytics és a Microsoft Clarity részéről, amelyeket alább ismertetünk.</li>
</ul>
<h2>Analitika</h2>
<p>Analitikai eszközöket használunk, hogy megértsük, hogyan használják a weboldalt, és hogy fejleszthessük azt. Ezek az eszközök csak azután töltődnek be, hogy Ön elkezdett interakcióba lépni az oldallal, és egyáltalán nem töltődnek be, ha böngészője Global Privacy Control vagy Do Not Track jelzést küld. A vonalkódok és űrlapok tartalma soha nem kerül elküldésre az analitikai eszközöknek; csak olyan események kerülnek rögzítésre, mint a kiválasztott vonalkódtípus és a letöltés gombra történő kattintás.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google LLC): sütiket használ a megnyitott oldalak, a becsült ország, az eszköztípus és a fenti események mérésére. A hirdetési célú tárolás és a Google Signals ki van kapcsolva. Az adatokat a Google a <a href="https://policies.google.com/privacy">Google Adatvédelmi irányelvei</a> szerint kezeli.</li>
<li><strong>Microsoft Clarity</strong>: rögzíti az interakciókat, például a kattintásokat és a görgetést hőtérképekhez és munkamenet-felvételekhez, és elrejti a beviteli mezők tartalmát. Az adatokat a Microsoft a <a href="https://privacy.microsoft.com/privacystatement">Microsoft adatvédelmi nyilatkozata</a> szerint kezeli.</li>
</ul>
<p>Az analitikát elutasíthatja a Global Privacy Control vagy a Do Not Track bekapcsolásával, a harmadik felek sütijeinek letiltásával a böngésző beállításaiban, nyomkövetés-blokkoló használatával vagy a <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a> telepítésével. A weboldal így is teljes mértékben használható marad.</p>
<h2>Harmadik felek szolgáltatásai</h2>
<ul>
<li><strong>A Vercel Inc.</strong> biztosítja a tárhelyet. A szerverek Indonézián kívül is lehetnek.</li>
<li><strong>A Google Fonts</strong> szolgáltatást bizonyos írásrendszerek megjelenítésére használjuk (például arab, thai vagy japán). A betűtípusok betöltésekor az Ön IP-címe látható a Google számára.</li>
<li><strong>A megosztás gombok</strong> (WhatsApp, Facebook, X, LinkedIn, Telegram) és a közösségimédia-linkek csak akkor lépnek kapcsolatba ezekkel a szolgáltatásokkal, ha Ön rájuk kattint.</li>
</ul>
<h2>Biztonság és adattovábbítás</h2>
<p>A weboldallal létesített minden kapcsolat HTTPS-t használ. Személyes adatokat nem adunk el, nem adunk bérbe és nem kereskedünk velük. Adatokat csak a fenti szolgáltatóknak adunk át, a weboldal működtetéséhez szükséges mértékben, illetve ha jogszabály előírja.</p>
<h2>Gyermekek</h2>
<p>Ez a szolgáltatás nem 13 év alatti gyermekeknek szól, és tudatosan nem gyűjtünk gyermekekre vonatkozó személyes adatokat.</p>
<h2>Az Ön jogai</h2>
<p>A személyes adatok védelméről szóló 2022. évi 27. törvény értelmében Ön jogosult kérni személyes adataihoz való hozzáférést, azok helyesbítését vagy törlését, valamint visszavonni az adatkezeléshez adott hozzájárulását. Mivel szinte semmilyen, az Ön azonosítására alkalmas adatot nem tárolunk, a legtöbb kérés teljesíthető azzal, hogy törli a sütiket és a webhelyadatokat a böngészőjében. A Google vagy a Microsoft által kezelt adatok esetében az ő szolgáltatásaik adatvédelmi beállításait is használhatja. Egyéb kérések esetén lépjen kapcsolatba velünk.</p>
<h2>A szabályzat módosítása</h2>
<p>Ez a szabályzat bármikor frissülhet. A módosítások az ezen az oldalon történő közzétételüktől hatályosak, a hatálybalépés dátuma az oldal tetején látható.</p>
<h2>Kapcsolat</h2>
<p>A szabályzattal kapcsolatos kérdéseit az egyes oldalak alján található kapcsolati linken vagy az <a href="https://abidhanan.my.id">abidhanan.my.id</a> oldalon keresztül küldheti el. Olvassa el <a href="/syarat-ketentuan">Felhasználási feltételeinket</a> is.</p>
`
  },
  terms: {
    title: "Felhasználási feltételek",
    desc: "Az I Need Barcode, az ingyenes vonalkód- és QR Code-generátor felhasználási feltételei.",
    body: `
<p>Az I Need Barcode (ineedbarcode.com) használatával Ön elfogadja az alábbi felhasználási feltételeket. Ha nem ért egyet velük, kérjük, ne használja ezt a szolgáltatást.</p>
<h2>A szolgáltatásról</h2>
<p>Az I Need Barcode egy ingyenes eszköz vonalkód- és QR Code-képek közvetlenül a böngészőben történő elkészítésére. Az I Need Barcode nem áll kapcsolatban a GS1-gyel vagy bármely más vonalkódszabvány tulajdonosával, nem élvezi azok támogatását, és nem működik együtt velük. A QR Code a DENSO WAVE INCORPORATED bejegyzett védjegye. Minden védjegy a megfelelő tulajdonosát illeti.</p>
<h2>Megengedett felhasználás</h2>
<ul>
<li>Az Ön által készített vonalkódképek személyes és üzleti célra egyaránt felhasználhatók, például termékekhez, csomagolásokhoz, címkékhez és nyomdai anyagokhoz, vízjel nélkül és díjmentesen.</li>
<li>Mi csak vonalkódképeket készítünk, vonalkódszámokat nem adunk ki. Kiskereskedelmi termékek esetén az EAN-, UPC- vagy GTIN-számokat hivatalosan a GS1-en keresztül kell regisztrálni.</li>
<li>Tartsa be azokat a szabályokat is, amelyek a vonalkód felhasználásának helyén érvényesek, például az üzletek, online piacterek vagy szállítási szolgáltatók előírásait.</li>
</ul>
<h2>Az Ön felelőssége</h2>
<p>Ön teljes felelősséggel tartozik a vonalkódokba bevitt adatokért és azok felhasználásának módjáért. Mielőtt nagy mennyiségben kinyomtatná a vonalkódokat, mindig tesztelje őket több olvasóval vagy kameraalkalmazással, és győződjön meg arról, hogy méretük, színük és kontrasztjuk megfelel az igényeinek.</p>
<h2>Tiltott tevékenységek</h2>
<ul>
<li>Olyan vonalkódok vagy QR Code-ok készítése, amelyek csalásra, adathalászatra, kártevőkre vagy jogellenes tartalomra vezetnek.</li>
<li>Vonalkódok használata mások termékeinek, dokumentumainak, jegyeinek vagy számainak hamisítására.</li>
<li>Botok, szkriptek vagy automatizálás használata a szolgáltatás nagy volumenű elérésére.</li>
<li>Szervereink és szolgáltatásaink megzavarása, túlterhelése vagy biztonságuk feltörésének kísérlete.</li>
</ul>
<h2>A szolgáltatás elérhetősége</h2>
<p>A szolgáltatás ingyenesen érhető el, és bármikor, előzetes értesítés nélkül módosítható, korlátozható vagy megszüntethető.</p>
<h2>Felelősségkizárás</h2>
<p>A szolgáltatást „adott állapotában” és „rendelkezésre állás szerint” nyújtjuk, mindenféle garancia nélkül, ideértve annak garanciáját is, hogy a szolgáltatás mindig működik, hibamentes, vagy hogy minden elkészített vonalkód minden eszközzel beolvasható és megfelel egy adott célra.</p>
<h2>A felelősség korlátozása</h2>
<p>A jogszabályok által megengedett mértékben nem vállalunk felelősséget a szolgáltatás használatából vagy az Ön által készített vonalkódokból eredő közvetlen vagy közvetett károkért, ideértve az újranyomtatás költségeit és az olvashatatlan vonalkódok okozta veszteségeket is.</p>
<h2>Harmadik felekre mutató linkek</h2>
<p>Ez a weboldal harmadik felek webhelyeire és szolgáltatásaira mutató linkeket tartalmaz. Nem vállalunk felelősséget ezen webhelyek tartalmáért és szabályzataiért.</p>
<h2>A feltételek módosítása</h2>
<p>Ezek a felhasználási feltételek bármikor frissülhetnek. Ha a módosítások közzététele után továbbra is használja a szolgáltatást, úgy tekintjük, hogy elfogadja a legújabb változatot.</p>
<h2>Irányadó jog</h2>
<p>Ezekre a felhasználási feltételekre az Indonéz Köztársaság joga az irányadó.</p>
<h2>Kapcsolat</h2>
<p>Kérdéseit és bejelentéseit az egyes oldalak alján található kapcsolati linken vagy az <a href="https://abidhanan.my.id">abidhanan.my.id</a> oldalon keresztül küldheti el. Olvassa el <a href="/kebijakan-privasi">Adatvédelmi szabályzatunkat</a> is.</p>
`
  }
};
