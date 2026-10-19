// qr-code-menu-restoran
module.exports = {
  title: "QR Code za restavracijski meni: Celoten vodnik",
  desc: "Digitalni meni prek QR Code olajša delo strankam in prihrani stroške tiskanja. Tako ga ustvarite, pripravite meni in ga namestite na mize.",
  tags: ["Poslovanje", "QR Code"],
  coverCaption: "QR Code na mizi stranke pripelje neposredno do digitalnega menija.",
  inlineCaption: "QR Code postavite tja, kamor gost s stola zlahka seže.",
  faq: [
    ["Kaj je bolje uporabiti za digitalni meni: PDF ali spletno stran?", "Spletna stran se na telefonu običajno bere udobneje in se hitreje odpre. PDF lahko uporabite, če je majhen in je besedilo na zaslonu dovolj veliko."],
    ["Kako velik naj bo QR Code za meni na mizi?", "Za skeniranje s stola zadostuje približno 3 do 5 cm. Uporabite material, odporen proti polivanju, ki se ne sveti preveč."],
    ["Ali moram QR Code znova natisniti, ko se meni spremeni?", "Ne, dokler povezava ostane enaka. Dovolj je, da posodobite vsebino strani ali datoteke z menijem, na katero kaže QR Code."]
  ],
  body: `
<p>Digitalni meni prek QR Code je danes v kavarnah in restavracijah nekaj običajnega. Stranke le skenirajo QR Code na mizi in si ogledajo seznam jedi, cene in fotografije. Lastnikom lokalov ta način prihrani stroške tiskanja in olajša spreminjanje cen ali ponudbe.</p>

<h2>Prednosti menija s QR Code</h2>
<ul>
  <li><strong>Enostavno posodabljanje</strong>: spremenite cene ali dodajte jedi, ne da bi znova tiskali jedilni list.</li>
  <li><strong>Prihranek stroškov</strong>: za vsako mizo natisnete le majhen QR Code.</li>
  <li><strong>Več informacij</strong>: prikažite fotografije, opise in oznake, kot sta pekoče ali vegetarijansko.</li>
  <li><strong>Podpora spletnemu naročanju</strong>: stranke usmerite na obrazec za naročilo ali WhatsApp.</li>
</ul>

<h2>1. korak: Pripravite spletni meni</h2>
<p>QR Code vsebuje le povezavo, zato potrebujete meni, ki ga je mogoče odpreti na internetu. Možnosti so med drugim stran na vašem spletnem mestu, datoteka PDF v javno deljeni spletni shrambi ali stran kataloga na platformi za naročanje. Prepričajte se, da se meni na zaslonu telefona udobno bere: dovolj velika pisava, ne pretežke fotografije in jasne cene.</p>

<h2>2. korak: Ustvarite QR Code</h2>
<ol>
  <li>Kopirajte povezavo do svojega menija.</li>
  <li>Odprite <a href="/?type=qrcode">generator QR Code</a>, izberite zavihek <strong>URL</strong> in prilepite povezavo.</li>
  <li>V razdelku Oblikovanje dodajte okvir z napisom „MENU“ ali „SKENIRAJTE ZA OGLED MENIJA“.</li>
  <li>Barve prilagodite celostni podobi restavracije, vendar še vedno uporabite temno barvo na svetlem ozadju.</li>
  <li>Prenesite PNG z dovolj veliko velikostjo modula za tisk.</li>
</ol>
<p>Uporabite povezavo, ki se ne bo spreminjala. Če meni premaknete na drug naslov, že natisnjenega QR Code ni mogoče posodobiti. Razlago najdete v članku <a href="/artikel/apa-itu-qr-code">kaj je QR Code</a>.</p>

<h2>3. korak: Natisnite in namestite</h2>
<ul>
  <li>Natisnite v velikosti vsaj približno 3–5 cm, da ga je s stola enostavno skenirati.</li>
  <li>Uporabite material, odporen proti polivanju, na primer vinilno nalepko ali plastificirano kartico brez pretiranega sijaja.</li>
  <li>Postavite ga na lahko dosegljivo mesto, na primer v akrilno stojalo na sredini mize.</li>
  <li>Če stranke naročajo prek klepeta, ob QR Code dodajte številko mize.</li>
</ul>

<h2>Ne pozabite na stranke brez telefona</h2>
<p>Pripravite enega ali dva natisnjena menija za stranke, ki nimajo s seboj telefona, jim je zmanjkalo baterije ali raje berejo fizični meni.</p>
<p>Za goste lahko ustvarite tudi <a href="/artikel/cara-membuat-qr-code-wifi">QR Code za WiFi</a> in ga postavite poleg QR Code z menijem.</p>
`
};
