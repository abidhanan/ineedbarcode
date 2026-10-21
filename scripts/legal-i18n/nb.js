// Personvernerklæring & Vilkår for bruk (norsk bokmål), oversatt fra scripts/legal-i18n/id.js.
module.exports = {
  labels: {
    privacy: "Personvernerklæring",
    terms: "Vilkår for bruk",
    effective: "Gjelder fra {date}"
  },
  privacy: {
    title: "Personvernerklæring",
    desc: "Hvilke opplysninger I Need Barcode behandler når du lager strekkoder og QR Codes, og hvordan vi håndterer dem.",
    body: `
<p>I Need Barcode (ineedbarcode.com) er en gratis generator for strekkoder og QR Codes som drives av Abid Hanan Wicaksono. Denne erklæringen forklarer hvilke opplysninger vi behandler når du bruker nettstedet, og hvordan vi håndterer dem. Vi samler bevisst inn så få opplysninger som mulig: Du trenger ikke å registrere deg, logge inn eller oppgi navn og e-postadresse for å bruke tjenesten.</p>
<h2>Opplysninger vi behandler</h2>
<ul>
<li><strong>Innholdet i strekkoden.</strong> Tekst, lenker, wifi-opplysninger, kontakter og andre data du skriver inn, behandles direkte i nettleseren din. Strekkodebildene lages på enheten din og sendes ikke til serverne våre, heller ikke når du lager mange strekkoder samtidig.</li>
<li><strong>Posisjon.</strong> Knappen «Bruk min posisjon» ber om enhetens posisjon først etter at du har tillatt det i nettleseren. Koordinatene fylles bare inn i skjemafeltet og sendes ikke til oss.</li>
<li><strong>Omtrentlig land.</strong> For å velge startspråk kan nettstedet lese ditt omtrentlige land fra forespørselen til serveren vår. Denne informasjonen lagres ikke i noen database.</li>
<li><strong>Tekniske data.</strong> Som på nesten alle nettsteder logger vertsleverandøren vår (Vercel) tekniske data om forespørsler, som IP-adresse, nettlesertype og tidspunkt for tilgang, av hensyn til sikkerhet og drift. Disse loggene lagres bare midlertidig i samsvar med Vercels retningslinjer.</li>
<li><strong>Artikkelstatistikk.</strong> Hvis funksjonen er aktivert, lagres visninger, likerklikk og delinger bare som totaltall per artikkel, uten data som identifiserer deg.</li>
</ul>
<h2>Informasjonskapsler og lagring i nettleseren</h2>
<ul>
<li><strong>inbLang</strong>: husker språket du har valgt på denne enheten (localStorage).</li>
<li><strong>inbCountry</strong>: lagrer det omtrentlige landet i én økt slik at språket ikke må finnes på nytt (sessionStorage).</li>
<li><strong>Annen lokal lagring</strong> (localStorage og sessionStorage): markerer artikler du liker, og hindrer at ett besøk telles to ganger. Disse dataene blir værende på enheten din.</li>
<li><strong>Analyseinformasjonskapsler fra tredjeparter</strong> fra Google Analytics og Microsoft Clarity, beskrevet nedenfor.</li>
</ul>
<h2>Analyse</h2>
<p>Vi bruker analyseverktøy for å forstå hvordan nettstedet brukes og for å forbedre det. Verktøyene lastes først etter at du begynner å samhandle med siden, og lastes ikke i det hele tatt hvis nettleseren din sender et Global Privacy Control- eller Do Not Track-signal. Innholdet i strekkoder og skjemaer sendes aldri til analyseverktøyene; bare hendelser som valgt strekkodetype og klikk på nedlastingsknappen registreres.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google LLC): bruker informasjonskapsler for å måle besøkte sider, omtrentlig land, enhetstype og hendelsene ovenfor. Lagring for annonsering og Google Signals er deaktivert. Dataene behandles av Google i samsvar med <a href="https://policies.google.com/privacy">Googles personvernregler</a>.</li>
<li><strong>Microsoft Clarity</strong>: registrerer samhandlinger som klikk og rulling for varmekart og øktopptak, og maskerer innholdet i inndatafelt. Dataene behandles av Microsoft i samsvar med <a href="https://privacy.microsoft.com/privacystatement">Microsofts personvernerklæring</a>.</li>
</ul>
<p>Du kan reservere deg mot analyse ved å aktivere Global Privacy Control eller Do Not Track, blokkere tredjeparts informasjonskapsler i nettleserinnstillingene, bruke en sporingsblokkering eller installere <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a>. Nettstedet kan fortsatt brukes fullt ut.</p>
<h2>Tredjepartstjenester</h2>
<ul>
<li><strong>Vercel Inc.</strong> leverer vertstjenesten. Serverne kan befinne seg utenfor Indonesia.</li>
<li><strong>Google Fonts</strong> brukes til å vise enkelte skriftsystemer (for eksempel arabisk, thai eller japansk). Når skriftene lastes, er IP-adressen din synlig for Google.</li>
<li><strong>Delingsknapper</strong> (WhatsApp, Facebook, X, LinkedIn, Telegram) og lenker til sosiale medier kontakter disse tjenestene bare når du klikker på dem.</li>
</ul>
<h2>Sikkerhet og deling av opplysninger</h2>
<p>Alle tilkoblinger til nettstedet bruker HTTPS. Vi selger, leier ut eller handler ikke med personopplysninger. Opplysninger deles bare med tjenesteleverandørene ovenfor i den grad det er nødvendig for å drive nettstedet, eller når loven krever det.</p>
<h2>Barn</h2>
<p>Tjenesten er ikke rettet mot barn under 13 år, og vi samler ikke bevisst inn personopplysninger om barn.</p>
<h2>Dine rettigheter</h2>
<p>I henhold til lov nr. 27 av 2022 om vern av personopplysninger har du rett til å be om innsyn i, retting eller sletting av personopplysningene dine, samt å trekke tilbake samtykket til behandlingen. Fordi vi nesten ikke lagrer opplysninger som identifiserer deg, kan de fleste forespørsler løses ved at du sletter informasjonskapsler og nettstedsdata i nettleseren din. For data som behandles av Google eller Microsoft, kan du også bruke personverninnstillingene i deres tjenester. Ta kontakt med oss for andre forespørsler.</p>
<h2>Endringer i erklæringen</h2>
<p>Denne erklæringen kan oppdateres når som helst. Endringer gjelder fra de publiseres på denne siden, med ikrafttredelsesdatoen øverst.</p>
<h2>Kontakt</h2>
<p>Spørsmål om denne erklæringen kan sendes via kontaktlenken nederst på hver side eller via <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Les også våre <a href="/syarat-ketentuan">Vilkår for bruk</a>.</p>
`
  },
  terms: {
    title: "Vilkår for bruk",
    desc: "Vilkår for bruk av I Need Barcode, den gratis generatoren for strekkoder og QR Codes.",
    body: `
<p>Ved å bruke I Need Barcode (ineedbarcode.com) godtar du følgende vilkår. Hvis du ikke godtar dem, ber vi deg om ikke å bruke tjenesten.</p>
<h2>Om tjenesten</h2>
<p>I Need Barcode er et gratis verktøy for å lage bilder av strekkoder og QR Codes direkte i nettleseren. I Need Barcode er ikke tilknyttet, støttet av eller i samarbeid med GS1 eller noen annen eier av en strekkodestandard. QR Code er et registrert varemerke som tilhører DENSO WAVE INCORPORATED. Alle varemerker tilhører sine respektive eiere.</p>
<h2>Tillatt bruk</h2>
<ul>
<li>Strekkodebildene du lager, kan brukes både privat og kommersielt, for eksempel til produkter, emballasje, etiketter og trykksaker, uten vannmerke og uten kostnad.</li>
<li>Vi lager bare strekkodebilder og utsteder ikke strekkodenumre. For detaljhandelsprodukter må EAN-, UPC- eller GTIN-numre registreres offisielt gjennom GS1.</li>
<li>Følg også reglene som gjelder der strekkoden brukes, for eksempel vilkårene til butikker, markedsplasser eller fraktselskaper.</li>
</ul>
<h2>Ditt ansvar</h2>
<p>Du har fullt ansvar for dataene du legger inn i strekkoder, og for hvordan du bruker dem. Test alltid strekkoder med flere skannere eller kameraapper før du trykker dem i store opplag, og sørg for at størrelse, farge og kontrast passer dine behov.</p>
<h2>Forbudt bruk</h2>
<ul>
<li>Å lage strekkoder eller QR Codes som fører til svindel, phishing, skadevare eller ulovlig innhold.</li>
<li>Å bruke strekkoder til å forfalske produkter, dokumenter, billetter eller numre som tilhører andre.</li>
<li>Å bruke roboter, skript eller automatisering for å få tilgang til tjenesten i stort omfang.</li>
<li>Å forstyrre, overbelaste eller forsøke å bryte sikkerheten til serverne og tjenestene våre.</li>
</ul>
<h2>Tjenestens tilgjengelighet</h2>
<p>Tjenesten tilbys gratis og kan når som helst endres, begrenses eller avsluttes uten varsel.</p>
<h2>Ansvarsfraskrivelse</h2>
<p>Tjenesten leveres «som den er» og «som tilgjengelig», uten noen form for garanti, herunder garanti for at tjenesten alltid fungerer, er feilfri, eller at hver strekkode som lages, kan skannes av alle enheter og er egnet til et bestemt formål.</p>
<h2>Ansvarsbegrensning</h2>
<p>I den grad loven tillater det, er vi ikke ansvarlige for direkte eller indirekte tap som oppstår ved bruk av tjenesten eller av strekkoder du lager, inkludert kostnader til nytrykk og tap som skyldes strekkoder som ikke kan leses.</p>
<h2>Lenker til tredjeparter</h2>
<p>Nettstedet inneholder lenker til nettsteder og tjenester som tilhører tredjeparter. Vi er ikke ansvarlige for innholdet eller retningslinjene på disse nettstedene.</p>
<h2>Endringer i vilkårene</h2>
<p>Disse vilkårene kan oppdateres når som helst. Ved å fortsette å bruke tjenesten etter at endringer er publisert, anses du å godta den nyeste versjonen.</p>
<h2>Gjeldende lov</h2>
<p>Disse vilkårene er underlagt lovgivningen i Republikken Indonesia.</p>
<h2>Kontakt</h2>
<p>Spørsmål og meldinger kan sendes via kontaktlenken nederst på hver side eller via <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Les også vår <a href="/kebijakan-privasi">Personvernerklæring</a>.</p>
`
  }
};
