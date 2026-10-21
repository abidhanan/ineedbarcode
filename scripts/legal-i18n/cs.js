// Zásady ochrany osobních údajů a Podmínky užívání (čeština).
module.exports = {
  labels: {
    privacy: "Zásady ochrany osobních údajů",
    terms: "Podmínky užívání",
    effective: "Platné od {date}"
  },
  privacy: {
    title: "Zásady ochrany osobních údajů",
    desc: "Jaké údaje I Need Barcode zpracovává, když vytváříte čárové kódy a QR Code, a jak s nimi nakládáme.",
    body: `
<p>I Need Barcode (ineedbarcode.com) je bezplatný generátor čárových kódů a QR Code, který provozuje Abid Hanan Wicaksono. Tyto zásady vysvětlují, jaké údaje zpracováváme, když tento web používáte, a jak s nimi nakládáme. Záměrně shromažďujeme co nejméně údajů: k používání služby se nemusíte registrovat, přihlašovat ani uvádět jméno a e-mail.</p>
<h2>Jaké údaje zpracováváme</h2>
<ul>
<li><strong>Obsah kódu.</strong> Text, odkazy, údaje WiFi, kontakty a další údaje, které zadáte, se zpracovávají přímo ve vašem prohlížeči. Obrázek čárového kódu se vytváří ve vašem zařízení a neodesílá se na náš server, a to ani při hromadném vytváření kódů.</li>
<li><strong>Poloha.</strong> Tlačítko „Použít mou polohu“ si vyžádá polohu zařízení až poté, co to povolíte v prohlížeči. Souřadnice se pouze vloží do pole formuláře a nejsou nám odesílány.</li>
<li><strong>Přibližná země.</strong> Pro výběr výchozího jazyka může web zjistit vaši přibližnou zemi z požadavku na náš server. Tato informace se neukládá do databáze.</li>
<li><strong>Technické údaje.</strong> Jako téměř každý web zaznamenává náš poskytovatel hostingu (Vercel) technické údaje o požadavcích, jako je IP adresa, typ prohlížeče a čas přístupu, z bezpečnostních a provozních důvodů. Tyto záznamy se uchovávají pouze dočasně v souladu se zásadami společnosti Vercel.</li>
<li><strong>Statistiky článků.</strong> Je-li tato funkce zapnuta, počet zobrazení, označení „líbí se“ a sdílení se ukládá pouze jako celkové počty u jednotlivých článků, bez údajů, které by vás identifikovaly.</li>
</ul>
<h2>Cookies a úložiště prohlížeče</h2>
<ul>
<li><strong>inbLang</strong>: pamatuje si jazyk, který jste v tomto zařízení zvolili (localStorage).</li>
<li><strong>inbCountry</strong>: uchovává přibližnou zemi po dobu jedné relace, aby nebylo nutné jazyk zjišťovat znovu (sessionStorage).</li>
<li><strong>Další místní úložiště</strong> (localStorage a sessionStorage): označuje články, které se vám líbí, a zabraňuje dvojímu započítání jedné návštěvy. Tyto údaje zůstávají ve vašem zařízení.</li>
<li><strong>Analytické cookies třetích stran</strong> od Google Analytics a Microsoft Clarity, popsané níže.</li>
</ul>
<h2>Analytika</h2>
<p>Analytické nástroje používáme, abychom porozuměli tomu, jak je web používán, a mohli jej zlepšovat. Tyto nástroje se načítají až poté, co začnete se stránkou pracovat, a nenačítají se vůbec, pokud váš prohlížeč odesílá signál Global Privacy Control nebo Do Not Track. Obsah kódů a formulářů se analytickým nástrojům nikdy neodesílá; zaznamenávají se pouze události, jako je zvolený typ kódu a kliknutí na tlačítko stažení.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google LLC): používá cookies k měření zobrazených stránek, přibližné země, typu zařízení a výše uvedených událostí. Ukládání pro reklamní účely a Google Signals jsou vypnuty. Údaje zpracovává Google v souladu se <a href="https://policies.google.com/privacy">Zásadami ochrany soukromí Google</a>.</li>
<li><strong>Microsoft Clarity</strong>: zaznamenává interakce, jako jsou kliknutí a posouvání, pro teplotní mapy a záznamy relací a maskuje obsah vstupních polí. Údaje zpracovává Microsoft v souladu s <a href="https://privacy.microsoft.com/privacystatement">Prohlášením společnosti Microsoft o zásadách ochrany osobních údajů</a>.</li>
</ul>
<p>Analytiku můžete odmítnout zapnutím Global Privacy Control nebo Do Not Track, zablokováním cookies třetích stran v nastavení prohlížeče, použitím blokátoru sledování nebo instalací doplňku <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a>. Web lze i nadále plně používat.</p>
<h2>Služby třetích stran</h2>
<ul>
<li><strong>Vercel Inc.</strong> poskytuje hosting. Jeho servery se mohou nacházet mimo Indonésii.</li>
<li><strong>Google Fonts</strong> se používá k zobrazení některých písem (například arabského, thajského nebo japonského). Při načítání písem je vaše IP adresa viditelná pro Google.</li>
<li><strong>Tlačítka pro sdílení</strong> (WhatsApp, Facebook, X, LinkedIn, Telegram) a odkazy na sociální sítě kontaktují tyto služby pouze tehdy, když na ně kliknete.</li>
</ul>
<h2>Bezpečnost a sdílení údajů</h2>
<p>Všechna připojení k tomuto webu používají HTTPS. Osobní údaje neprodáváme, nepronajímáme ani s nimi neobchodujeme. Údaje sdílíme pouze s výše uvedenými poskytovateli služeb v rozsahu nezbytném pro provoz webu, nebo pokud to vyžaduje zákon.</p>
<h2>Děti</h2>
<p>Služba není určena dětem mladším 13 let a vědomě neshromažďujeme osobní údaje dětí.</p>
<h2>Vaše práva</h2>
<p>V souladu se zákonem č. 27 z roku 2022 o ochraně osobních údajů máte právo požadovat přístup ke svým osobním údajům, jejich opravu nebo výmaz a také odvolat souhlas se zpracováním. Protože téměř neuchováváme údaje, které by vás identifikovaly, většinu žádostí lze vyřídit jednoduše smazáním cookies a dat webu ve vašem prohlížeči. U údajů zpracovávaných společnostmi Google nebo Microsoft můžete využít také nastavení soukromí v jejich službách. S dalšími žádostmi se na nás obraťte.</p>
<h2>Změny zásad</h2>
<p>Tyto zásady mohou být kdykoli aktualizovány. Změny nabývají účinnosti zveřejněním na této stránce, přičemž datum účinnosti je uvedeno nahoře.</p>
<h2>Kontakt</h2>
<p>Dotazy k těmto zásadám můžete zaslat prostřednictvím kontaktního odkazu v dolní části každé stránky nebo přes <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Přečtěte si také naše <a href="/syarat-ketentuan">Podmínky užívání</a>.</p>
`
  },
  terms: {
    title: "Podmínky užívání",
    desc: "Podmínky užívání I Need Barcode, bezplatného generátoru čárových kódů a QR Code.",
    body: `
<p>Používáním I Need Barcode (ineedbarcode.com) souhlasíte s následujícími podmínkami. Pokud s nimi nesouhlasíte, službu prosím nepoužívejte.</p>
<h2>O službě</h2>
<p>I Need Barcode je bezplatný nástroj pro vytváření obrázků čárových kódů a QR Code přímo v prohlížeči. I Need Barcode není přidružen ke GS1 ani k žádnému vlastníkovi standardů čárových kódů, není jimi podporován a nespolupracuje s nimi. QR Code je registrovaná ochranná známka společnosti DENSO WAVE INCORPORATED. Všechny ochranné známky patří jejich příslušným vlastníkům.</p>
<h2>Povolené užití</h2>
<ul>
<li>Vytvořené obrázky čárových kódů smíte používat pro osobní i komerční účely, například na výrobky, obaly, štítky a tiskoviny, bez vodoznaku a zdarma.</li>
<li>Vytváříme pouze obrázky čárových kódů a nepřidělujeme čísla kódů. U maloobchodních výrobků musí být čísla EAN, UPC nebo GTIN oficiálně registrována prostřednictvím GS1.</li>
<li>Dodržujte také pravidla platná tam, kde se kód používá, například požadavky obchodů, tržišť nebo přepravních služeb.</li>
</ul>
<h2>Vaše odpovědnost</h2>
<p>Nesete plnou odpovědnost za údaje, které do čárového kódu zadáte, a za způsob, jakým jej používáte. Před tiskem ve velkém množství kód vždy otestujte několika čtečkami nebo aplikacemi fotoaparátu a ověřte, že jeho velikost, barva a kontrast odpovídají vašim potřebám.</p>
<h2>Co je zakázáno</h2>
<ul>
<li>Vytvářet čárové kódy nebo QR Code vedoucí k podvodům, phishingu, malwaru nebo protiprávnímu obsahu.</li>
<li>Používat čárové kódy k padělání výrobků, dokumentů, vstupenek nebo čísel patřících jiným osobám.</li>
<li>Používat boty, skripty nebo automatizaci k hromadnému přístupu ke službě.</li>
<li>Narušovat, přetěžovat nebo se pokoušet prolomit zabezpečení našich serverů a služeb.</li>
</ul>
<h2>Dostupnost služby</h2>
<p>Služba je poskytována zdarma a může být kdykoli bez upozornění změněna, omezena nebo ukončena.</p>
<h2>Vyloučení záruk</h2>
<p>Služba je poskytována „tak, jak je“ a „podle dostupnosti“, bez jakýchkoli záruk, včetně záruky, že služba bude vždy fungovat, bude bez chyb nebo že každý vytvořený čárový kód bude čitelný všemi zařízeními a vhodný pro určitý účel.</p>
<h2>Omezení odpovědnosti</h2>
<p>V rozsahu povoleném zákonem neneseme odpovědnost za přímé ani nepřímé škody vzniklé v souvislosti s používáním této služby nebo s vámi vytvořenými čárovými kódy, včetně nákladů na opakovaný tisk a škod způsobených nečitelnými kódy.</p>
<h2>Odkazy na třetí strany</h2>
<p>Tento web obsahuje odkazy na weby a služby třetích stran. Neneseme odpovědnost za obsah ani zásady těchto webů.</p>
<h2>Změny podmínek</h2>
<p>Tyto podmínky mohou být kdykoli aktualizovány. Pokračováním v používání služby po zveřejnění změn se má za to, že s nejnovější verzí souhlasíte.</p>
<h2>Rozhodné právo</h2>
<p>Tyto podmínky se řídí právem Indonéské republiky.</p>
<h2>Kontakt</h2>
<p>Dotazy a hlášení můžete zaslat prostřednictvím kontaktního odkazu v dolní části každé stránky nebo přes <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Přečtěte si také naše <a href="/kebijakan-privasi">Zásady ochrany osobních údajů</a>.</p>
`
  }
};
