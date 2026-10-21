// Siyaseta Nepenîtiyê û Merc û Şert (Kurmancî).
module.exports = {
  labels: {
    privacy: "Siyaseta Nepenîtiyê",
    terms: "Merc û Şert",
    effective: "Ji {date} ve derbasdar e"
  },
  privacy: {
    title: "Siyaseta Nepenîtiyê",
    desc: "Dema ku hûn barkod û QR Code çêdikin, I Need Barcode kîjan daneyan pêvajo dike û em çawa bi wan re mijûl dibin.",
    body: `
<p>I Need Barcode (ineedbarcode.com) çêkerekî belaş ê barkod û QR Code ye ku ji aliyê Abid Hanan Wicaksono ve tê birêvebirin. Ev siyaset rave dike ku dema hûn vê malperê bikar tînin em kîjan daneyan pêvajo dikin û em çawa bi wan re mijûl dibin. Em bi qest daneyên herî kêm ên mimkun berhev dikin: ji bo bikaranîna vê xizmetê ne hewce ye ku hûn qeyd bibin, têkevin hesabekî an nav û e-nameya xwe bidin.</p>
<h2>Daneyên ku em pêvajo dikin</h2>
<ul>
<li><strong>Naveroka barkodê.</strong> Nivîs, girêdan, daneyên WiFi, têkilî û daneyên din ên ku hûn dinivîsin rasterast di geroka we de têne pêvajokirin. Wêneyên barkodê li ser cîhaza we têne çêkirin û ji serverên me re nayên şandin, di nav de dema ku hûn bi carekê de gelek barkodan çêdikin.</li>
<li><strong>Cih.</strong> Bişkoka "Cihê min bikar bîne" tenê piştî ku hûn di gerokê de destûrê didin cihê cîhazê dixwaze. Koordînat tenê dikevin qada formê û ji me re nayên şandin.</li>
<li><strong>Welatê texmînî.</strong> Ji bo hilbijartina zimanê destpêkê, dibe ku ev malper welatê we yê texmînî ji daxwaziya ku ji servera me re tê şandin bixwîne. Ev agahî di tu databasê de nayê tomarkirin.</li>
<li><strong>Daneyên teknîkî.</strong> Wekî hema hema hemû malperan, pêşkêşkarê me yê hostingê (Vercel) ji bo ewlehî û xebitandinê daneyên teknîkî yên daxwaziyan, wekî navnîşana IP, cureyê gerokê û dema gihîştinê tomar dike. Ev tomar li gorî siyaseta Vercel tenê bi awayekî demkî têne parastin.</li>
<li><strong>Statîstîkên gotaran.</strong> Heke çalak be, hejmara dîtin, ecibandin û parvekirinan tenê wekî hejmara giştî ya her gotarê tê tomarkirin, bêyî daneyên ku we nas dikin.</li>
</ul>
<h2>Cookie û hilanîna di gerokê de</h2>
<ul>
<li><strong>inbLang</strong>: zimanê ku we li ser vê cîhazê hilbijartiye di bîra xwe de digire (localStorage).</li>
<li><strong>inbCountry</strong>: welatê texmînî heta dawiya danişînekê diparêze da ku ziman ji nû ve neyê dîtin (sessionStorage).</li>
<li><strong>Hilanîna herêmî ya din</strong> (localStorage û sessionStorage): gotarên ku we ecibandine nîşan dike û nahêle ku serdanek du caran were hejmartin. Ev dane li ser cîhaza we dimînin.</li>
<li><strong>Cookie-yên analîtîk ên aliyê sêyem</strong> ji Google Analytics û Microsoft Clarity, ku li jêr têne ravekirin.</li>
</ul>
<h2>Analîtîk</h2>
<p>Em amûrên analîtîkê bikar tînin da ku fêm bikin malper çawa tê bikaranîn û wê baştir bikin. Ev amûr tenê piştî ku hûn dest bi danûstendina bi rûpelê re dikin têne barkirin, û heke geroka we sînyala Global Privacy Control an Do Not Track bişîne, qet nayên barkirin. Naveroka barkodê û naveroka forman qet ji amûrên analîtîkê re nayên şandin; tenê bûyerên wekî cureyê barkodê yê hilbijartî û klîkkirina li ser bişkoka daxistinê têne tomarkirin.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google LLC): cookie-yan bikar tîne da ku rûpelên vekirî, welatê texmînî, cureyê cîhazê û bûyerên li jor bipîve. Hilanîna ji bo reklaman û Google Signals neçalak in. Dane ji aliyê Google ve li gorî <a href="https://policies.google.com/privacy">Siyaseta Nepenîtiyê ya Google</a> têne pêvajokirin.</li>
<li><strong>Microsoft Clarity</strong>: danûstendinên wekî klîk û gerandinê ji bo nexşeyên germahiyê û tomarên danişînê tomar dike, û naveroka qadên têketinê vedişêre. Dane ji aliyê Microsoft ve li gorî <a href="https://privacy.microsoft.com/privacystatement">Daxuyaniya Nepenîtiyê ya Microsoft</a> têne pêvajokirin.</li>
</ul>
<p>Hûn dikarin analîtîkê red bikin bi çalakkirina Global Privacy Control an Do Not Track, astengkirina cookie-yên aliyê sêyem di mîhengên gerokê de, bikaranîna astengkerê şopandinê, an sazkirina <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a>. Malper bi tevahî bikarhatî dimîne.</p>
<h2>Xizmetên aliyê sêyem</h2>
<ul>
<li><strong>Vercel Inc.</strong> hostingê peyda dike. Dibe ku serverên wê li derveyî Endonezyayê bin.</li>
<li><strong>Google Fonts</strong> ji bo nîşandana hin alfabeyan (bo nimûne erebî, taylandî an japonî) tê bikaranîn. Dema ku font têne barkirin, navnîşana IP ya we ji Google re xuya dibe.</li>
<li><strong>Bişkokên parvekirinê</strong> (WhatsApp, Facebook, X, LinkedIn, Telegram) û girêdanên medyaya civakî tenê dema ku hûn li ser wan klîk dikin bi wan xizmetan re têkilî datînin.</li>
</ul>
<h2>Ewlehî û parvekirina daneyan</h2>
<p>Hemû girêdanên bi vê malperê re HTTPS bikar tînin. Em daneyên kesane nafiroşin, bi kirê nadin û bazirganiyê bi wan nakin. Dane tenê bi qasî ku ji bo xebitandina malperê pêwîst e bi pêşkêşkarên xizmetê yên li jor re, an jî dema ku qanûn ferz bike, têne parvekirin.</p>
<h2>Zarok</h2>
<p>Ev xizmet ji bo zarokên di bin 13 saliyê de nehatiye armanckirin, û em bi zanebûn daneyên kesane yên zarokan berhev nakin.</p>
<h2>Mafên we</h2>
<p>Li gorî Qanûna Hejmar 27 ya Sala 2022an a li ser Parastina Daneyên Kesane, mafê we heye ku hûn gihîştin, rastkirin an jêbirina daneyên xwe yên kesane bixwazin, û her wiha razîbûna xwe ya ji bo pêvajokirinê paşve bikişînin. Ji ber ku em hema hema tu daneyên ku we nas dikin nahêlin, piraniya daxwaziyan bi tenê jêbirina cookie û daneyên malperê di geroka we de têne bicîhanîn. Ji bo daneyên ku Google an Microsoft pêvajo dikin, hûn dikarin mîhengên nepenîtiyê yên di xizmetên wan de jî bikar bînin. Ji bo daxwaziyên din, bi me re têkilî daynin.</p>
<h2>Guhertinên siyasetê</h2>
<p>Dibe ku ev siyaset di her demê de were nûkirin. Guhertin ji dema weşandina wan li ser vê rûpelê derbasdar dibin, û dîroka derbasdariyê li serê rûpelê tê nîşandan.</p>
<h2>Têkilî</h2>
<p>Pirsên derbarê vê siyasetê de dikarin bi riya girêdana têkiliyê ya li binê her rûpelê an bi riya <a href="https://abidhanan.my.id">abidhanan.my.id</a> werin şandin. Her wiha <a href="/syarat-ketentuan">Merc û Şertên</a> me jî bixwînin.</p>
`
  },
  terms: {
    title: "Merc û Şert",
    desc: "Merc û şertên bikaranîna I Need Barcode, çêkerê belaş ê barkod û QR Code.",
    body: `
<p>Bi bikaranîna I Need Barcode (ineedbarcode.com), hûn merc û şertên jêrîn qebûl dikin. Heke hûn ne razî bin, ji kerema xwe vê xizmetê bikar neynin.</p>
<h2>Derbarê xizmetê de</h2>
<p>I Need Barcode amûrek belaş e ji bo çêkirina wêneyên barkod û QR Code rasterast di gerokê de. I Need Barcode ne girêdayî GS1 an tu xwediyê din ê standardeke barkodê ye, ji aliyê wan ve nayê piştgirîkirin û bi wan re hevkariyê nake. QR Code marqeyeke bazirganî ya tomarkirî ya DENSO WAVE INCORPORATED e. Hemû marqeyên bazirganî aîdî xwediyên wan in.</p>
<h2>Bikaranîna destûrdayî</h2>
<ul>
<li>Hûn dikarin wêneyên barkodê yên ku çêdikin hem ji bo armancên kesane hem jî bazirganî bikar bînin, bo nimûne ji bo berheman, pakêtkirinê, etîketan û materyalên çapkirî, bêyî nîşana avê û bêyî pere.</li>
<li>Em tenê wêneyên barkodê çêdikin û hejmarên barkodê dernaxînin. Ji bo berhemên firotana hûrdeyî, divê hejmarên EAN, UPC an GTIN bi awayekî fermî bi riya GS1 werin tomarkirin.</li>
<li>Her wiha rêzikên ku li cihê bikaranîna barkodê derbasdar in bişopînin, bo nimûne şertên firoşgehê, bazara serhêl an xizmeta şandinê.</li>
</ul>
<h2>Berpirsiyariya we</h2>
<p>Hûn bi tevahî berpirsiyar in ji daneyên ku hûn dixin nav barkodê û ji awayê bikaranîna wê. Berî ku hûn barkodê bi hejmareke mezin çap bikin, her tim wê bi çend skaner an sepanên kamerayê biceribînin, û piştrast bikin ku mezinahî, reng û kontrasta wê li gorî hewcedariyên we ne.</p>
<h2>Tiştên qedexe</h2>
<ul>
<li>Çêkirina barkod an QR Code ku ber bi xapandin, phishing, malware an naveroka neqanûnî ve dibe.</li>
<li>Bikaranîna barkodan ji bo sextekirina berhem, belge, bilêt an hejmarên ku aîdî kesên din in.</li>
<li>Bikaranîna bot, skrîpt an otomasyonê ji bo gihîştina bi girseyî ya xizmetê.</li>
<li>Têkdan, giranbarkirin an hewldana şikandina ewlehiya server û xizmetên me.</li>
</ul>
<h2>Berdestbûna xizmetê</h2>
<p>Xizmet belaş tê pêşkêşkirin û dibe ku di her demê de bêyî agahdarî were guhertin, sînordarkirin an rawestandin.</p>
<h2>Redkirina garantiyê</h2>
<p>Xizmet "wekî ku heye" û "wekî ku berdest e" tê pêşkêşkirin, bêyî tu garantiyê, di nav de garantiya ku xizmet her tim dixebite, bê şaşî ye, an ku her barkoda hatî çêkirin ji aliyê hemû cîhazan ve tê skankirin û ji bo armanceke taybet guncav e.</p>
<h2>Sînordarkirina berpirsiyariyê</h2>
<p>Heta radeya ku qanûn destûr dide, em ne berpirsiyar in ji tu zirarên rasterast an nerasterast ên ku ji bikaranîna vê xizmetê an ji barkodên ku hûn çêdikin derdikevin, di nav de lêçûnên ji nû ve çapkirinê û zirarên ji ber barkodên nexwendbar.</p>
<h2>Girêdanên aliyê sêyem</h2>
<p>Ev malper girêdanên ber bi malper û xizmetên aliyên sêyem ve dihewîne. Em ne berpirsiyar in ji naverok an siyasetên wan malperan.</p>
<h2>Guhertinên mercan</h2>
<p>Dibe ku ev merc û şert di her demê de werin nûkirin. Bi berdewamkirina bikaranîna xizmetê piştî weşandina guhertinan, tê hesibandin ku we guhertoya herî dawî qebûl kiriye.</p>
<h2>Qanûna derbasdar</h2>
<p>Ev merc û şert girêdayî qanûnên Komara Endonezyayê ne.</p>
<h2>Têkilî</h2>
<p>Pirs û raporan dikarin bi riya girêdana têkiliyê ya li binê her rûpelê an bi riya <a href="https://abidhanan.my.id">abidhanan.my.id</a> werin şandin. Her wiha <a href="/kebijakan-privasi">Siyaseta Nepenîtiyê</a> ya me jî bixwînin.</p>
`
  }
};
