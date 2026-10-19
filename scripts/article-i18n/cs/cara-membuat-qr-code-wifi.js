// cara-membuat-qr-code-wifi
module.exports = {
  title: "Jak vytvořit QR Code pro WiFi, aby hosté nemuseli psát heslo",
  desc: "Hostům stačí naskenovat QR Code a jsou připojeni k WiFi. Ideální pro kavárny, kanceláře, ubytování i domácnosti. Takto ho vytvoříte a umístíte.",
  tags: ["Návody", "QR Code"],
  coverCaption: "Údaje o WiFi z routeru lze uložit do jediného QR Code.",
  inlineCaption: "Hosté kavárny se mohou připojit okamžitě, bez psaní hesla.",
  faq: [
    ["Dokážou QR Code pro WiFi naskenovat všechny telefony?", "Vestavěný fotoaparát iPhonu s iOS 11 a novějším a většiny telefonů s Androidem 10 a novějším ho přečte přímo. Starší telefony mohou vyžadovat aplikaci pro skenování QR."],
    ["Je QR Code pro WiFi bezpečný?", "Kdokoli, kdo QR Code naskenuje, se může připojit k vaší WiFi. Proto používejte síť pro hosty a QR Code soukromé sítě neumisťujte na veřejných místech."],
    ["Co dělat, když změním heslo k WiFi?", "Vytvořte a znovu vytiskněte QR Code pro WiFi, protože starý QR Code stále obsahuje původní heslo."]
  ],
  body: `
<p>Hláskovat hostům dlouhé heslo k WiFi bývá zdlouhavé, zvlášť když obsahuje velká písmena, číslice a symboly. S <strong>QR Code pro WiFi</strong> stačí hostům namířit fotoaparát telefonu na QR Code a jsou rovnou připojeni.</p>

<h2>Jak QR Code pro WiFi funguje</h2>
<p>QR Code pro WiFi uchovává název sítě (SSID), typ zabezpečení a heslo ve speciálním formátu, který telefony rozpoznají, například <code>WIFI:T:WPA;S:NazevSite;P:Heslo;;</code>. Vestavěný fotoaparát iPhonu (iOS 11 a novější) a většiny telefonů s Androidem (Android 10 a novější) ho přečte přímo, bez další aplikace.</p>

<h2>Postup vytvoření</h2>
<ol>
  <li>Otevřete <a href="/?type=qrcode">generátor QR Code</a> a v části Data zvolte kartu <strong>WiFi</strong>.</li>
  <li>Zadejte <strong>název sítě</strong> přesně tak, jak se zobrazuje v seznamu WiFi, včetně velkých a malých písmen.</li>
  <li>Zadejte <strong>heslo</strong> a zvolte typ zabezpečení. Většina domácích a kancelářských routerů používá WPA/WPA2/WPA3.</li>
  <li>Zaškrtněte <strong>Skrytá síť</strong>, pokud se název vaší WiFi v seznamu nezobrazuje.</li>
  <li>Přidejte rámeček s nápisem, například „SCAN WIFI“, aby hosté věděli, k čemu slouží, a stáhněte PNG.</li>
</ol>

<h2>Kam ho umístit?</h2>
<ul>
  <li>Malá kartička na stole v kavárně nebo restauraci.</li>
  <li>Stěna obývacího pokoje, recepce nebo zasedací místnosti v kanceláři.</li>
  <li>Pokoj v ubytování, nalepený u dveří nebo u televize.</li>
  <li>Spodní strana routeru doma, aby rodina mohla snadno připojit nová zařízení.</li>
</ul>

<h2>Bezpečnostní tipy</h2>
<ul>
  <li>Používejte <strong>síť pro hosty</strong> (guest network), pokud ji váš router podporuje, aby se hosté nepřipojovali do stejné sítě jako kancelářské počítače.</li>
  <li>Pokud heslo k WiFi změníte, vytvořte a znovu vytiskněte QR Code, protože starý QR Code bude obsahovat původní heslo.</li>
  <li>Neumisťujte QR Code pro WiFi soukromé sítě na veřejných místech, kde si ho může kdokoli vyfotit.</li>
</ul>

<h2>Když se přes QR Code nelze připojit</h2>
<p>Znovu zkontrolujte pravopis názvu sítě a hesla, protože jediné chybné písmeno způsobí, že se telefon nepřipojí. Ujistěte se také, že zvolený typ zabezpečení odpovídá nastavení routeru. Další problémy se skenováním řeší článek <a href="/artikel/barcode-tidak-bisa-dipindai">příčiny, proč nejde čárový kód naskenovat</a>.</p>
`
};
