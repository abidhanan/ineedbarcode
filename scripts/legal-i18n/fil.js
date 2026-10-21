// Patakaran sa Privacy & Mga Tuntunin at Kundisyon (Filipino).
module.exports = {
  labels: {
    privacy: "Patakaran sa Privacy",
    terms: "Mga Tuntunin at Kundisyon",
    effective: "Epektibo simula {date}"
  },
  privacy: {
    title: "Patakaran sa Privacy",
    desc: "Anong data ang pinoproseso ng I Need Barcode kapag gumagawa kayo ng barcode at QR Code, at kung paano namin ito pinangangasiwaan.",
    body: `
<p>Ang I Need Barcode (ineedbarcode.com) ay isang libreng barcode at QR Code generator na pinamamahalaan ni Abid Hanan Wicaksono. Ipinapaliwanag ng patakarang ito kung anong data ang pinoproseso namin kapag ginagamit ninyo ang website na ito at kung paano namin ito pinangangasiwaan. Sinasadya naming mangolekta ng pinakakaunting data hangga't maaari: hindi ninyo kailangang magparehistro, mag-log in, o ibigay ang inyong pangalan at email para magamit ang serbisyong ito.</p>
<h2>Data na pinoproseso namin</h2>
<ul>
<li><strong>Nilalaman ng barcode.</strong> Ang teksto, link, detalye ng WiFi, contact, at iba pang data na inilalagay ninyo ay pinoproseso nang direkta sa inyong browser. Ang larawan ng barcode ay ginagawa sa inyong device at hindi ipinapadala sa aming server, kasama na kapag gumagawa ng maraming barcode nang sabay-sabay.</li>
<li><strong>Lokasyon.</strong> Ang button na "Gamitin ang aking lokasyon" ay humihingi lamang ng lokasyon ng device pagkatapos ninyo itong pahintulutan sa browser. Ang mga coordinate ay inilalagay lamang sa field ng form at hindi ipinapadala sa amin.</li>
<li><strong>Tinatayang bansa.</strong> Para piliin ang unang wika, maaaring basahin ng website na ito ang inyong tinatayang bansa mula sa request sa aming server. Hindi iniimbak ang impormasyong ito sa database.</li>
<li><strong>Teknikal na data.</strong> Gaya ng halos lahat ng website, itinatala ng aming hosting provider (Vercel) ang teknikal na data ng mga request, tulad ng IP address, uri ng browser, at oras ng pag-access, para sa seguridad at operasyon. Pansamantala lamang na iniimbak ang mga talang ito alinsunod sa mga patakaran ng Vercel.</li>
<li><strong>Statistika ng artikulo.</strong> Kung naka-enable, ang bilang ng views, likes, at shares ay iniimbak lamang bilang kabuuang bilang bawat artikulo, nang walang data na nagpapakilala sa inyo.</li>
</ul>
<h2>Cookies at storage sa browser</h2>
<ul>
<li><strong>inbLang</strong>: tinatandaan ang wikang pinili ninyo sa device na ito (localStorage).</li>
<li><strong>inbCountry</strong>: iniimbak ang tinatayang bansa sa loob ng isang session para hindi na kailangang hanapin muli ang wika (sessionStorage).</li>
<li><strong>Iba pang local storage</strong> (localStorage at sessionStorage): minamarkahan ang mga artikulong ni-like ninyo at pinipigilang mabilang nang dalawang beses ang iisang pagbisita. Nananatili ang data na ito sa inyong device.</li>
<li><strong>Third-party na analytics cookies</strong> mula sa Google Analytics at Microsoft Clarity, na ipinapaliwanag sa ibaba.</li>
</ul>
<h2>Analytics</h2>
<p>Gumagamit kami ng mga analytics tool para maunawaan kung paano ginagamit ang website at para mapabuti ito. Nilo-load lamang ang mga tool na ito pagkatapos ninyong magsimulang makipag-ugnayan sa pahina, at hindi talaga nilo-load kung nagpapadala ang inyong browser ng signal na Global Privacy Control o Do Not Track. Ang nilalaman ng barcode at ng form ay hindi kailanman ipinapadala sa mga analytics tool; ang itinatala lamang ay mga event tulad ng uri ng barcode na pinili at pag-click sa download button.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google LLC): gumagamit ng cookies para sukatin ang mga pahinang binuksan, tinatayang bansa, uri ng device, at ang mga event sa itaas. Naka-disable ang storage para sa advertising at ang Google Signals. Pinoproseso ng Google ang data alinsunod sa <a href="https://policies.google.com/privacy">Patakaran sa Privacy ng Google</a>.</li>
<li><strong>Microsoft Clarity</strong>: itinatala ang mga interaksyon tulad ng pag-click at pag-scroll para sa mga heatmap at session recording, at itinatago ang nilalaman ng mga input field. Pinoproseso ng Microsoft ang data alinsunod sa <a href="https://privacy.microsoft.com/privacystatement">Pahayag sa Privacy ng Microsoft</a>.</li>
</ul>
<p>Maaari ninyong tanggihan ang analytics sa pamamagitan ng pag-enable ng Global Privacy Control o Do Not Track, pag-block ng third-party cookies sa mga setting ng browser, paggamit ng tracker blocker, o pag-install ng <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a>. Lubos pa ring magagamit ang website.</p>
<h2>Mga serbisyo ng third party</h2>
<ul>
<li><strong>Vercel Inc.</strong> ang nagbibigay ng hosting. Maaaring nasa labas ng Indonesia ang mga server nito.</li>
<li><strong>Google Fonts</strong> ay ginagamit para ipakita ang ilang sistema ng pagsulat (halimbawa Arabic, Thai, o Japanese). Kapag nilo-load ang mga font, nakikita ng Google ang inyong IP address.</li>
<li><strong>Mga share button</strong> (WhatsApp, Facebook, X, LinkedIn, Telegram) at mga link sa social media ay kumokonekta lamang sa mga serbisyong iyon kapag kinlik ninyo ang mga ito.</li>
</ul>
<h2>Seguridad at pagbabahagi ng data</h2>
<p>Lahat ng koneksyon sa website na ito ay gumagamit ng HTTPS. Hindi kami nagbebenta, nagpapaupa, o nakikipagkalakalan ng personal na data. Ibinabahagi lamang ang data sa mga service provider sa itaas hangga't kinakailangan para patakbuhin ang website, o kung iniaatas ng batas.</p>
<h2>Mga bata</h2>
<p>Ang serbisyong ito ay hindi para sa mga batang wala pang 13 taong gulang, at hindi kami sadyang nangongolekta ng personal na data ng mga bata.</p>
<h2>Ang inyong mga karapatan</h2>
<p>Alinsunod sa Batas Blg. 27 ng 2022 tungkol sa Proteksyon ng Personal na Data ng Indonesia, may karapatan kayong humiling ng access, pagwawasto, o pagbura ng inyong personal na data, at bawiin ang inyong pahintulot sa pagproseso. Dahil halos wala kaming iniimbak na data na nagpapakilala sa inyo, karamihan sa mga kahilingan ay malulutas na sa pamamagitan ng pagbura ng cookies at site data sa inyong browser. Para sa data na pinoproseso ng Google o Microsoft, maaari rin ninyong gamitin ang mga setting ng privacy sa kanilang mga serbisyo. Para sa iba pang kahilingan, makipag-ugnayan sa amin.</p>
<h2>Mga pagbabago sa patakaran</h2>
<p>Maaaring i-update ang patakarang ito anumang oras. Magkakabisa ang mga pagbabago sa sandaling mailathala ang mga ito sa pahinang ito, kasama ang petsa ng pagkakabisa sa itaas.</p>
<h2>Makipag-ugnayan</h2>
<p>Maaaring ipadala ang mga tanong tungkol sa patakarang ito sa pamamagitan ng contact link sa ibaba ng bawat pahina o sa pamamagitan ng <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Basahin din ang aming <a href="/syarat-ketentuan">Mga Tuntunin at Kundisyon</a>.</p>
`
  },
  terms: {
    title: "Mga Tuntunin at Kundisyon",
    desc: "Mga tuntunin at kundisyon sa paggamit ng I Need Barcode, ang libreng barcode at QR Code generator.",
    body: `
<p>Sa paggamit ng I Need Barcode (ineedbarcode.com), sumasang-ayon kayo sa mga sumusunod na tuntunin at kundisyon. Kung hindi kayo sumasang-ayon, mangyaring huwag gamitin ang serbisyong ito.</p>
<h2>Tungkol sa serbisyo</h2>
<p>Ang I Need Barcode ay isang libreng tool para gumawa ng mga larawan ng barcode at QR Code nang direkta sa browser. Ang I Need Barcode ay hindi kaanib ng, hindi ini-endorso ng, at walang pakikipagtulungan sa GS1 o sa sinumang may-ari ng pamantayan ng barcode. Ang QR Code ay rehistradong trademark ng DENSO WAVE INCORPORATED. Lahat ng trademark ay pag-aari ng kani-kanilang may-ari.</p>
<h2>Pinahihintulutang paggamit</h2>
<ul>
<li>Ang mga larawan ng barcode na ginawa ninyo ay maaaring gamitin para sa personal o komersyal na layunin, halimbawa sa mga produkto, packaging, label, at mga printed na materyales, nang walang watermark at walang bayad.</li>
<li>Gumagawa lamang kami ng mga larawan ng barcode at hindi kami nag-iisyu ng mga numero ng barcode. Para sa mga retail na produkto, ang mga numerong EAN, UPC, o GTIN ay dapat opisyal na irehistro sa pamamagitan ng GS1.</li>
<li>Sundin din ang mga patakarang umiiral kung saan ginagamit ang barcode, halimbawa ang mga kinakailangan ng tindahan, marketplace, o serbisyo ng pagpapadala.</li>
</ul>
<h2>Ang inyong pananagutan</h2>
<p>Kayo ang may buong pananagutan sa data na inilalagay ninyo sa barcode at sa paraan ng inyong paggamit dito. Laging subukan ang barcode gamit ang ilang scanner o camera app bago ito i-print nang maramihan, at tiyaking angkop sa inyong pangangailangan ang laki, kulay, at contrast nito.</p>
<h2>Mga ipinagbabawal</h2>
<ul>
<li>Paggawa ng barcode o QR Code na humahantong sa panloloko, phishing, malware, o nilalamang labag sa batas.</li>
<li>Paggamit ng barcode para pekein ang mga produkto, dokumento, tiket, o numero na pag-aari ng iba.</li>
<li>Paggamit ng bot, script, o automation para i-access ang serbisyo nang maramihan.</li>
<li>Paggambala, pagpapabigat, o pagtatangkang lusutan ang seguridad ng aming mga server at serbisyo.</li>
</ul>
<h2>Availability ng serbisyo</h2>
<p>Ibinibigay ang serbisyo nang libre at maaaring baguhin, limitahan, o ihinto anumang oras nang walang abiso.</p>
<h2>Paunawa sa pananagutan</h2>
<p>Ibinibigay ang serbisyo nang "as is" at "as available", nang walang anumang garantiya, kabilang ang garantiya na laging gumagana ang serbisyo, walang mali, o na ang bawat barcode na ginawa ay mai-scan ng lahat ng device at angkop para sa isang partikular na layunin.</p>
<h2>Limitasyon ng pananagutan</h2>
<p>Hangga't pinahihintulutan ng batas, hindi kami mananagot sa anumang direkta o hindi direktang pagkalugi na nagmumula sa paggamit ng serbisyong ito o sa mga barcode na ginawa ninyo, kabilang ang gastos sa muling pag-print at mga pagkalugi dahil sa barcode na hindi mabasa.</p>
<h2>Mga link sa third party</h2>
<p>Naglalaman ang website na ito ng mga link sa mga site at serbisyo ng third party. Hindi kami mananagot sa nilalaman o mga patakaran ng mga site na iyon.</p>
<h2>Mga pagbabago sa tuntunin</h2>
<p>Maaaring i-update ang mga tuntunin at kundisyong ito anumang oras. Sa patuloy na paggamit ng serbisyo pagkatapos mailathala ang mga pagbabago, ituturing na sumasang-ayon kayo sa pinakabagong bersyon.</p>
<h2>Batas na namamahala</h2>
<p>Ang mga tuntunin at kundisyong ito ay sakop ng batas ng Republika ng Indonesia.</p>
<h2>Makipag-ugnayan</h2>
<p>Maaaring ipadala ang mga tanong at ulat sa pamamagitan ng contact link sa ibaba ng bawat pahina o sa pamamagitan ng <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Basahin din ang aming <a href="/kebijakan-privasi">Patakaran sa Privacy</a>.</p>
`
  }
};
