// Polasaí Príobháideachais agus Téarmaí agus Coinníollacha (Gaeilge).
module.exports = {
  labels: {
    privacy: "Polasaí Príobháideachais",
    terms: "Téarmaí agus Coinníollacha",
    effective: "I bhfeidhm ó {date}"
  },
  privacy: {
    title: "Polasaí Príobháideachais",
    desc: "Cé na sonraí a phróiseálann I Need Barcode nuair a chruthaíonn tú barrachóid agus QR Code, agus conas a láimhseálaimid iad.",
    body: `
<p>Is gineadóir saor in aisce barrachód agus QR Code é I Need Barcode (ineedbarcode.com) atá á bhainistiú ag Abid Hanan Wicaksono. Mínítear sa pholasaí seo cé na sonraí a phróiseálaimid nuair a úsáideann tú an suíomh gréasáin seo agus conas a láimhseálaimid iad. Bailímid d'aon ghnó an méid is lú sonraí is féidir: ní gá duit clárú, logáil isteach ná d'ainm nó do sheoladh ríomhphoist a thabhairt chun an tseirbhís seo a úsáid.</p>
<h2>Na sonraí a phróiseálaimid</h2>
<ul>
<li><strong>Ábhar na mbarrachód.</strong> Próiseáiltear an téacs, na naisc, na sonraí WiFi, na teagmhálacha agus na sonraí eile a chuireann tú isteach go díreach i do bhrabhsálaí. Cruthaítear íomhánna na mbarrachód ar do ghléas agus ní sheoltar chuig ár bhfreastalaithe iad, fiú nuair a chruthaíonn tú go leor barrachód ag an am céanna.</li>
<li><strong>Suíomh.</strong> Ní iarrann an cnaipe “Úsáid mo shuíomh” suíomh an ghléis ach amháin tar éis duit cead a thabhairt i do bhrabhsálaí. Ní chuirtear na comhordanáidí ach isteach i réimse na foirme agus ní sheoltar chugainn iad.</li>
<li><strong>Tír mheasta.</strong> Chun an teanga tosaigh a roghnú, féadfaidh an suíomh gréasáin seo do thír mheasta a léamh ón iarratas a sheoltar chuig ár bhfreastalaí. Ní stóráiltear an fhaisnéis seo i mbunachar sonraí.</li>
<li><strong>Sonraí teicniúla.</strong> Cosúil le beagnach gach suíomh gréasáin, taifeadann ár soláthraí óstála (Vercel) sonraí teicniúla faoi iarratais, amhail seoladh IP, cineál brabhsálaí agus am rochtana, ar chúiseanna slándála agus oibriúcháin. Ní choinnítear na taifid seo ach go sealadach, de réir pholasaí Vercel.</li>
<li><strong>Staitisticí alt.</strong> Má tá siad cumasaithe, ní stóráiltear líon na n-amharc, na dtaitneamh agus na gcomhroinnt ach mar iomlán in aghaidh an ailt, gan aon sonraí a d'aithneodh thú.</li>
</ul>
<h2>Fianáin agus stóráil sa bhrabhsálaí</h2>
<ul>
<li><strong>inbLang</strong>: cuimhníonn sé ar an teanga a roghnaigh tú ar an ngléas seo (localStorage).</li>
<li><strong>inbCountry</strong>: stórálann sé an tír mheasta ar feadh seisiúin amháin ionas nach gá an teanga a aimsiú arís (sessionStorage).</li>
<li><strong>Stóráil áitiúil eile</strong> (localStorage agus sessionStorage): marcálann sí na hailt a thaitin leat agus cuireann sí cosc ar chuairt amháin a bheith comhairthe faoi dhó. Fanann na sonraí seo ar do ghléas.</li>
<li><strong>Fianáin anailíse tríú páirtí</strong> ó Google Analytics agus Microsoft Clarity, a mhínítear thíos.</li>
</ul>
<h2>Anailísíocht</h2>
<p>Úsáidimid uirlisí anailíse chun tuiscint a fháil ar an gcaoi a n-úsáidtear an suíomh gréasáin agus chun é a fheabhsú. Ní lódáiltear na huirlisí seo ach tar éis duit tosú ag idirghníomhú leis an leathanach, agus ní lódáiltear iad ar chor ar bith má sheolann do bhrabhsálaí comhartha Global Privacy Control nó Do Not Track. Ní sheoltar ábhar na mbarrachód ná ábhar na bhfoirmeacha chuig na huirlisí anailíse riamh; ní thaifeadtar ach imeachtaí amhail an cineál barrachóid a roghnaíodh agus cliceanna ar an gcnaipe íoslódála.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google LLC): úsáideann sé fianáin chun na leathanaigh a osclaítear, an tír mheasta, an cineál gléis agus na himeachtaí thuas a thomhas. Tá stóráil le haghaidh fógraíochta agus Google Signals díchumasaithe. Próiseálann Google na sonraí de réir <a href="https://policies.google.com/privacy">Pholasaí Príobháideachais Google</a>.</li>
<li><strong>Microsoft Clarity</strong>: taifeadann sé idirghníomhaíochtaí amhail cliceanna agus scrollú le haghaidh léarscáileanna teasa agus taifeadtaí seisiún, agus ceileann sé ábhar na réimsí ionchuir. Próiseálann Microsoft na sonraí de réir <a href="https://privacy.microsoft.com/privacystatement">Ráiteas Príobháideachais Microsoft</a>.</li>
</ul>
<p>Is féidir leat diúltú don anailísíocht trí Global Privacy Control nó Do Not Track a chumasú, trí fhianáin tríú páirtí a bhlocáil i socruithe do bhrabhsálaí, trí bhlocálaí rianaithe a úsáid, nó tríd an <a href="https://tools.google.com/dlpage/gaoptout">Breiseán Brabhsálaí chun Diúltú do Google Analytics</a> a shuiteáil. Is féidir an suíomh gréasáin a úsáid go hiomlán i gcónaí.</p>
<h2>Seirbhísí tríú páirtí</h2>
<ul>
<li><strong>Vercel Inc.</strong>: soláthraíonn sé an óstáil. D'fhéadfadh a fhreastalaithe a bheith lasmuigh den Indinéis.</li>
<li><strong>Google Fonts</strong>: úsáidtear é chun roinnt córas scríbhneoireachta a thaispeáint (mar shampla Araibis, Téalainnis nó Seapáinis). Nuair a lódáiltear na clónna, bíonn do sheoladh IP le feiceáil ag Google.</li>
<li><strong>Cnaipí comhroinnte</strong> (WhatsApp, Facebook, X, LinkedIn, Telegram) agus naisc na meán sóisialta: ní dhéanann siad teagmháil leis na seirbhísí sin ach amháin nuair a chliceálann tú orthu.</li>
</ul>
<h2>Slándáil agus comhroinnt sonraí</h2>
<p>Úsáideann gach ceangal leis an suíomh gréasáin seo HTTPS. Ní dhíolaimid sonraí pearsanta, ní ligimid ar cíos iad agus ní dhéanaimid trádáil orthu. Ní roinntear sonraí ach leis na soláthraithe seirbhíse thuas a mhéid is gá chun an suíomh gréasáin a reáchtáil, nó má éilíonn an dlí é.</p>
<h2>Leanaí</h2>
<p>Níl an tseirbhís seo dírithe ar leanaí faoi 13 bliana d'aois, agus ní bhailímid sonraí pearsanta leanaí go feasach.</p>
<h2>Do chearta</h2>
<p>Faoi Dhlí Uimh. 27 de 2022 maidir le Cosaint Sonraí Pearsanta, tá sé de cheart agat rochtain ar do shonraí pearsanta, a gceartú nó a scriosadh a iarraidh, agus do thoiliú leis an bpróiseáil a tharraingt siar. Ós rud é nach stórálaimid beagnach aon sonraí a d'aithneodh thú, is féidir formhór na n-iarratas a réiteach go simplí trí na fianáin agus sonraí an tsuímh a scriosadh i do bhrabhsálaí. I gcás sonraí a phróiseálann Google nó Microsoft, is féidir leat socruithe príobháideachais a gcuid seirbhísí a úsáid freisin. Le haghaidh iarratas eile, déan teagmháil linn.</p>
<h2>Athruithe ar an bpolasaí</h2>
<p>Féadfar an polasaí seo a nuashonrú am ar bith. Tagann athruithe i bhfeidhm nuair a fhoilsítear iad ar an leathanach seo, agus an dáta éifeachta ag barr an leathanaigh.</p>
<h2>Teagmháil</h2>
<p>Is féidir ceisteanna faoin bpolasaí seo a sheoladh tríd an nasc teagmhála ag bun gach leathanaigh nó trí <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Léigh ár <a href="/syarat-ketentuan">dTéarmaí agus Coinníollacha</a> freisin.</p>
`
  },
  terms: {
    title: "Téarmaí agus Coinníollacha",
    desc: "Téarmaí agus coinníollacha úsáide I Need Barcode, gineadóir saor in aisce barrachód agus QR Code.",
    body: `
<p>Trí I Need Barcode (ineedbarcode.com) a úsáid, aontaíonn tú leis na téarmaí agus coinníollacha seo a leanas. Mura n-aontaíonn tú leo, ná húsáid an tseirbhís seo, le do thoil.</p>
<h2>Maidir leis an tseirbhís</h2>
<p>Uirlis saor in aisce is ea I Need Barcode chun íomhánna barrachód agus QR Code a chruthú go díreach sa bhrabhsálaí. Níl I Need Barcode cleamhnaithe le GS1 ná le haon úinéir caighdeáin barrachód, níl sé formhuinithe acu, agus níl sé i gcomhpháirtíocht leo. Is trádmharc cláraithe de chuid DENSO WAVE INCORPORATED é QR Code. Is lena n-úinéirí faoi seach gach trádmharc.</p>
<h2>Úsáid cheadaithe</h2>
<ul>
<li>Is féidir na híomhánna barrachód a chruthaíonn tú a úsáid chun críocha pearsanta nó tráchtála, mar shampla ar tháirgí, ar phacáistíocht, ar lipéid agus ar ábhar priontáilte, gan chomhartha uisce agus saor in aisce.</li>
<li>Ní chruthaímid ach íomhánna barrachód; ní eisímid uimhreacha barrachód. Maidir le táirgí miondíola, ní mór uimhreacha EAN, UPC nó GTIN a chlárú go hoifigiúil trí GS1.</li>
<li>Cloígh freisin leis na rialacha is infheidhme san áit a n-úsáidtear an barrachód, mar shampla riachtanais siopaí, margaí ar líne nó seirbhísí seachadta.</li>
</ul>
<h2>D'fhreagracht</h2>
<p>Tá tú freagrach go hiomlán as na sonraí a chuireann tú isteach sna barrachóid agus as an gcaoi a n-úsáideann tú iad. Déan tástáil i gcónaí ar bharrachóid le roinnt scanóirí nó aipeanna ceamara sula bpriontálann tú iad i líon mór, agus cinntigh go n-oireann a méid, a ndathanna agus a gcodarsnacht do do riachtanais.</p>
<h2>Rudaí atá toirmiscthe</h2>
<ul>
<li>Barrachóid nó QR Code a chruthú a threoraíonn chuig camscéimeanna, fioscaireacht, bogearraí mailíseacha nó ábhar mídhleathach.</li>
<li>Barrachóid a úsáid chun táirgí, doiciméid, ticéid nó uimhreacha le páirtithe eile a bhrionnú.</li>
<li>Botaí, scripteanna nó uathoibriú a úsáid chun rochtain a fháil ar an tseirbhís ar scála mór.</li>
<li>Cur isteach ar ár bhfreastalaithe agus ar ár seirbhísí, ró-ualach a chur orthu, nó iarracht a dhéanamh a slándáil a shárú.</li>
</ul>
<h2>Infhaighteacht na seirbhíse</h2>
<p>Cuirtear an tseirbhís ar fáil saor in aisce agus féadfar í a athrú, a theorannú nó a scor am ar bith gan fógra.</p>
<h2>Séanadh</h2>
<p>Cuirtear an tseirbhís ar fáil “mar atá” agus “mar atá ar fáil”, gan aon bharántas de chineál ar bith, lena n-áirítear barántas go n-oibreoidh an tseirbhís i gcónaí, go mbeidh sí saor ó earráidí, nó go mbeidh gach barrachód a chruthaítear inléite ag gach gléas agus oiriúnach d'aon chuspóir ar leith.</p>
<h2>Teorainn dliteanais</h2>
<p>A mhéid a cheadaíonn an dlí, níl aon dliteanas orainn as aon chaillteanas díreach nó indíreach a eascraíonn as úsáid na seirbhíse seo nó as na barrachóid a chruthaíonn tú, lena n-áirítear costais athphriontála agus caillteanais de bharr barrachód nach féidir a léamh.</p>
<h2>Naisc chuig tríú páirtithe</h2>
<p>Tá naisc chuig suíomhanna agus seirbhísí tríú páirtí ar an suíomh gréasáin seo. Nílimid freagrach as ábhar ná as polasaithe na suíomhanna sin.</p>
<h2>Athruithe ar na téarmaí</h2>
<p>Féadfar na téarmaí agus coinníollacha seo a nuashonrú am ar bith. Má leanann tú ort ag úsáid na seirbhíse tar éis athruithe a fhoilsiú, meastar go n-aontaíonn tú leis an leagan is déanaí.</p>
<h2>Dlí rialaithe</h2>
<p>Tá na téarmaí agus coinníollacha seo faoi réir dhlí Phoblacht na hIndinéise.</p>
<h2>Teagmháil</h2>
<p>Is féidir ceisteanna agus tuairiscí a sheoladh tríd an nasc teagmhála ag bun gach leathanaigh nó trí <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Léigh ár <a href="/kebijakan-privasi">bPolasaí Príobháideachais</a> freisin.</p>
`
  }
};
