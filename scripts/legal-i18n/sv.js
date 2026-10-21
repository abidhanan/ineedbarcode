// Integritetspolicy & Användarvillkor (svenska), översatt från scripts/legal-i18n/id.js.
module.exports = {
  labels: {
    privacy: "Integritetspolicy",
    terms: "Användarvillkor",
    effective: "Gäller från {date}"
  },
  privacy: {
    title: "Integritetspolicy",
    desc: "Vilka uppgifter I Need Barcode behandlar när du skapar streckkoder och QR Codes, och hur vi hanterar dem.",
    body: `
<p>I Need Barcode (ineedbarcode.com) är en kostnadsfri generator för streckkoder och QR Codes som drivs av Abid Hanan Wicaksono. Den här policyn förklarar vilka uppgifter vi behandlar när du använder webbplatsen och hur vi hanterar dem. Vi samlar medvetet in så få uppgifter som möjligt: du behöver inte registrera dig, logga in eller uppge namn och e-postadress för att använda tjänsten.</p>
<h2>Uppgifter vi behandlar</h2>
<ul>
<li><strong>Streckkodens innehåll.</strong> Text, länkar, wifi-uppgifter, kontakter och andra uppgifter som du anger behandlas direkt i din webbläsare. Streckkodsbilderna skapas på din enhet och skickas inte till våra servrar, inte heller när du skapar många streckkoder på en gång.</li>
<li><strong>Plats.</strong> Knappen ”Använd min plats” begär enhetens plats först efter att du har tillåtit det i webbläsaren. Koordinaterna förs bara in i formulärfältet och skickas inte till oss.</li>
<li><strong>Ungefärligt land.</strong> För att välja startspråk kan webbplatsen avläsa ditt ungefärliga land från förfrågan till vår server. Denna information lagras inte i någon databas.</li>
<li><strong>Tekniska uppgifter.</strong> Som på nästan alla webbplatser loggar vår webbhotellsleverantör (Vercel) tekniska uppgifter om förfrågningar, såsom IP-adress, webbläsartyp och åtkomsttid, för säkerhet och drift. Loggarna sparas endast tillfälligt enligt Vercels policy.</li>
<li><strong>Artikelstatistik.</strong> Om funktionen är aktiverad lagras visningar, gillamarkeringar och delningar endast som totalsiffror per artikel, utan uppgifter som identifierar dig.</li>
</ul>
<h2>Cookies och lagring i webbläsaren</h2>
<ul>
<li><strong>inbLang</strong>: kommer ihåg vilket språk du har valt på den här enheten (localStorage).</li>
<li><strong>inbCountry</strong>: sparar det ungefärliga landet under en session så att språket inte behöver fastställas igen (sessionStorage).</li>
<li><strong>Övrig lokal lagring</strong> (localStorage och sessionStorage): markerar artiklar som du gillar och förhindrar att ett besök räknas två gånger. Dessa uppgifter stannar på din enhet.</li>
<li><strong>Analyscookies från tredje part</strong> från Google Analytics och Microsoft Clarity, som beskrivs nedan.</li>
</ul>
<h2>Analys</h2>
<p>Vi använder analysverktyg för att förstå hur webbplatsen används och för att förbättra den. Verktygen laddas först när du börjar interagera med sidan, och laddas inte alls om din webbläsare skickar en Global Privacy Control- eller Do Not Track-signal. Innehållet i streckkoder och formulär skickas aldrig till analysverktygen; endast händelser som vald streckkodstyp och klick på nedladdningsknappen registreras.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google LLC): använder cookies för att mäta besökta sidor, ungefärligt land, enhetstyp och ovanstående händelser. Lagring för annonsering och Google Signals är inaktiverade. Uppgifterna behandlas av Google enligt <a href="https://policies.google.com/privacy">Googles integritetspolicy</a>.</li>
<li><strong>Microsoft Clarity</strong>: registrerar interaktioner som klick och skrollning för värmekartor och sessionsinspelningar, och maskerar innehållet i inmatningsfält. Uppgifterna behandlas av Microsoft enligt <a href="https://privacy.microsoft.com/privacystatement">Microsofts sekretesspolicy</a>.</li>
</ul>
<p>Du kan avböja analys genom att aktivera Global Privacy Control eller Do Not Track, blockera tredjepartscookies i webbläsarens inställningar, använda en spårningsblockerare eller installera <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a>. Webbplatsen kan fortfarande användas fullt ut.</p>
<h2>Tjänster från tredje part</h2>
<ul>
<li><strong>Vercel Inc.</strong> tillhandahåller webbhotellet. Servrarna kan finnas utanför Indonesien.</li>
<li><strong>Google Fonts</strong> används för att visa vissa skriftsystem (till exempel arabiska, thailändska eller japanska). När typsnitten laddas är din IP-adress synlig för Google.</li>
<li><strong>Delningsknappar</strong> (WhatsApp, Facebook, X, LinkedIn, Telegram) och länkar till sociala medier kontaktar dessa tjänster endast när du klickar på dem.</li>
</ul>
<h2>Säkerhet och delning av uppgifter</h2>
<p>Alla anslutningar till webbplatsen använder HTTPS. Vi säljer, hyr ut eller handlar inte med personuppgifter. Uppgifter delas endast med ovanstående tjänsteleverantörer i den mån det behövs för att driva webbplatsen, eller om lagen kräver det.</p>
<h2>Barn</h2>
<p>Tjänsten riktar sig inte till barn under 13 år, och vi samlar inte medvetet in personuppgifter om barn.</p>
<h2>Dina rättigheter</h2>
<p>Enligt lag nr 27 från 2022 om skydd av personuppgifter har du rätt att begära tillgång till, rättelse eller radering av dina personuppgifter samt att återkalla ditt samtycke till behandlingen. Eftersom vi nästan inte lagrar några uppgifter som identifierar dig kan de flesta begäranden lösas genom att du raderar cookies och webbplatsdata i din webbläsare. För uppgifter som behandlas av Google eller Microsoft kan du även använda integritetsinställningarna i deras tjänster. Kontakta oss för övriga begäranden.</p>
<h2>Ändringar av policyn</h2>
<p>Denna policy kan uppdateras när som helst. Ändringar gäller från det att de publiceras på denna sida, med ikraftträdandedatum högst upp.</p>
<h2>Kontakt</h2>
<p>Frågor om denna policy kan skickas via kontaktlänken längst ned på varje sida eller via <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Läs även våra <a href="/syarat-ketentuan">Användarvillkor</a>.</p>
`
  },
  terms: {
    title: "Användarvillkor",
    desc: "Villkor för användning av I Need Barcode, den kostnadsfria generatorn för streckkoder och QR Codes.",
    body: `
<p>Genom att använda I Need Barcode (ineedbarcode.com) godkänner du följande villkor. Om du inte godkänner dem ber vi dig att inte använda tjänsten.</p>
<h2>Om tjänsten</h2>
<p>I Need Barcode är ett kostnadsfritt verktyg för att skapa bilder av streckkoder och QR Codes direkt i webbläsaren. I Need Barcode är inte anslutet till, stöds inte av och samarbetar inte med GS1 eller någon annan ägare av en streckkodsstandard. QR Code är ett registrerat varumärke som tillhör DENSO WAVE INCORPORATED. Alla varumärken tillhör sina respektive ägare.</p>
<h2>Tillåten användning</h2>
<ul>
<li>Streckkodsbilderna som du skapar får användas både privat och kommersiellt, till exempel för produkter, förpackningar, etiketter och trycksaker, utan vattenstämpel och utan kostnad.</li>
<li>Vi skapar endast streckkodsbilder och utfärdar inga streckkodsnummer. För detaljhandelsprodukter måste EAN-, UPC- eller GTIN-nummer registreras officiellt via GS1.</li>
<li>Följ även de regler som gäller där streckkoden används, till exempel villkor från butiker, marknadsplatser eller fraktbolag.</li>
</ul>
<h2>Ditt ansvar</h2>
<p>Du har fullt ansvar för de uppgifter du anger i streckkoder och för hur du använder dem. Testa alltid streckkoder med flera skannrar eller kameraappar innan du trycker dem i stora mängder, och se till att storlek, färg och kontrast passar dina behov.</p>
<h2>Förbjuden användning</h2>
<ul>
<li>Att skapa streckkoder eller QR Codes som leder till bedrägeri, nätfiske, skadlig kod eller olagligt innehåll.</li>
<li>Att använda streckkoder för att förfalska produkter, dokument, biljetter eller nummer som tillhör andra.</li>
<li>Att använda botar, skript eller automatisering för att komma åt tjänsten i stor skala.</li>
<li>Att störa, överbelasta eller försöka bryta säkerheten i våra servrar och tjänster.</li>
</ul>
<h2>Tjänstens tillgänglighet</h2>
<p>Tjänsten tillhandahålls kostnadsfritt och kan när som helst ändras, begränsas eller upphöra utan föregående meddelande.</p>
<h2>Ansvarsfriskrivning</h2>
<p>Tjänsten tillhandahålls ”i befintligt skick” och ”i mån av tillgänglighet”, utan några som helst garantier, inklusive garantier för att tjänsten alltid fungerar, är felfri eller att varje skapad streckkod kan skannas av alla enheter och är lämplig för ett visst ändamål.</p>
<h2>Ansvarsbegränsning</h2>
<p>I den utsträckning lagen tillåter ansvarar vi inte för direkta eller indirekta förluster som uppstår till följd av användningen av tjänsten eller av streckkoder som du skapar, inklusive kostnader för omtryck och förluster på grund av oläsbara streckkoder.</p>
<h2>Länkar till tredje part</h2>
<p>Webbplatsen innehåller länkar till webbplatser och tjänster som tillhör tredje part. Vi ansvarar inte för innehållet eller policyerna på dessa webbplatser.</p>
<h2>Ändringar av villkoren</h2>
<p>Dessa villkor kan uppdateras när som helst. Om du fortsätter att använda tjänsten efter att ändringar har publicerats anses du godkänna den senaste versionen.</p>
<h2>Tillämplig lag</h2>
<p>Dessa villkor regleras av lagen i Republiken Indonesien.</p>
<h2>Kontakt</h2>
<p>Frågor och anmälningar kan skickas via kontaktlänken längst ned på varje sida eller via <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Läs även vår <a href="/kebijakan-privasi">Integritetspolicy</a>.</p>
`
  }
};
