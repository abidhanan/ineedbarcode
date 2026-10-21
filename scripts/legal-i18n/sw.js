// Sera ya Faragha na Sheria na Masharti (Kiswahili).
module.exports = {
  labels: {
    privacy: "Sera ya Faragha",
    terms: "Sheria na Masharti",
    effective: "Inatumika kuanzia {date}"
  },
  privacy: {
    title: "Sera ya Faragha",
    desc: "Ni data gani I Need Barcode huchakata unapounda misimbopau na QR Code, na jinsi tunavyozishughulikia.",
    body: `
<p>I Need Barcode (ineedbarcode.com) ni jenereta ya bure ya misimbopau na QR Code inayoendeshwa na Abid Hanan Wicaksono. Sera hii inaeleza ni data gani tunazochakata unapotumia tovuti hii na jinsi tunavyozishughulikia. Kwa makusudi tunakusanya data kidogo iwezekanavyo: huhitaji kujisajili, kuingia kwenye akaunti, wala kutoa jina lako au barua pepe yako ili kutumia huduma hii.</p>
<h2>Data tunazochakata</h2>
<ul>
<li><strong>Maudhui ya misimbopau.</strong> Maandishi, viungo, data za WiFi, anwani za mawasiliano na data nyingine unazoingiza huchakatwa moja kwa moja kwenye kivinjari chako. Picha za misimbopau huundwa kwenye kifaa chako na hazitumwi kwenye seva zetu, hata unapounda misimbopau mingi kwa wakati mmoja.</li>
<li><strong>Mahali.</strong> Kitufe cha "Tumia mahali nilipo" huomba mahali kifaa kilipo tu baada ya wewe kuruhusu hilo kwenye kivinjari. Viwianishi huwekwa tu kwenye sehemu ya fomu na havitumwi kwetu.</li>
<li><strong>Nchi inayokadiriwa.</strong> Ili kuchagua lugha ya mwanzo, tovuti hii inaweza kusoma nchi yako inayokadiriwa kutoka kwenye ombi linalotumwa kwa seva yetu. Taarifa hii haihifadhiwi kwenye hifadhidata.</li>
<li><strong>Data za kiufundi.</strong> Kama ilivyo kwa karibu tovuti zote, mtoa huduma wetu wa upangishaji (Vercel) hurekodi data za kiufundi za maombi, kama vile anwani ya IP, aina ya kivinjari na muda wa kufikia, kwa madhumuni ya usalama na uendeshaji. Kumbukumbu hizi huhifadhiwa kwa muda tu kulingana na sera ya Vercel.</li>
<li><strong>Takwimu za makala.</strong> Zikiwashwa, idadi ya kutazamwa, kupendwa na kushirikiwa huhifadhiwa tu kama jumla kwa kila makala, bila data yoyote inayokutambulisha.</li>
</ul>
<h2>Vidakuzi na hifadhi kwenye kivinjari</h2>
<ul>
<li><strong>inbLang</strong>: hukumbuka lugha uliyochagua kwenye kifaa hiki (localStorage).</li>
<li><strong>inbCountry</strong>: huhifadhi nchi inayokadiriwa kwa kipindi kimoja ili lugha isilazimike kutafutwa upya (sessionStorage).</li>
<li><strong>Hifadhi nyingine ya ndani</strong> (localStorage na sessionStorage): huweka alama kwenye makala uliyopenda na huzuia ziara moja kuhesabiwa mara mbili. Data hizi hubaki kwenye kifaa chako.</li>
<li><strong>Vidakuzi vya uchanganuzi vya wahusika wengine</strong> kutoka Google Analytics na Microsoft Clarity, vilivyoelezwa hapa chini.</li>
</ul>
<h2>Uchanganuzi</h2>
<p>Tunatumia zana za uchanganuzi ili kuelewa jinsi tovuti inavyotumiwa na kuiboresha. Zana hizi hupakiwa tu baada ya wewe kuanza kuingiliana na ukurasa, na hazipakiwi kabisa ikiwa kivinjari chako kinatuma ishara ya Global Privacy Control au Do Not Track. Maudhui ya misimbopau na ya fomu hayatumwi kamwe kwa zana za uchanganuzi; kinachorekodiwa ni matukio tu, kama vile aina ya msimbopau iliyochaguliwa na mibofyo kwenye kitufe cha kupakua.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google LLC): hutumia vidakuzi kupima kurasa zinazofunguliwa, nchi inayokadiriwa, aina ya kifaa na matukio yaliyotajwa hapo juu. Hifadhi kwa ajili ya matangazo na Google Signals vimezimwa. Data huchakatwa na Google kwa mujibu wa <a href="https://policies.google.com/privacy">Sera ya Faragha ya Google</a>.</li>
<li><strong>Microsoft Clarity</strong>: hurekodi mwingiliano kama vile mibofyo na usogezaji kwa ajili ya ramani za joto na rekodi za vipindi, na huficha maudhui ya sehemu za kuingiza data. Data huchakatwa na Microsoft kwa mujibu wa <a href="https://privacy.microsoft.com/privacystatement">Taarifa ya Faragha ya Microsoft</a>.</li>
</ul>
<p>Unaweza kukataa uchanganuzi kwa kuwasha Global Privacy Control au Do Not Track, kuzuia vidakuzi vya wahusika wengine kwenye mipangilio ya kivinjari, kutumia kizuia vifuatiliaji, au kusakinisha <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a>. Tovuti bado inaweza kutumika kikamilifu.</p>
<h2>Huduma za wahusika wengine</h2>
<ul>
<li><strong>Vercel Inc.</strong> hutoa huduma ya upangishaji. Seva zake zinaweza kuwa nje ya Indonesia.</li>
<li><strong>Google Fonts</strong> hutumika kuonyesha baadhi ya hati za uandishi (kwa mfano Kiarabu, Kithai au Kijapani). Fonti zinapopakiwa, anwani yako ya IP huonekana kwa Google.</li>
<li><strong>Vitufe vya kushiriki</strong> (WhatsApp, Facebook, X, LinkedIn, Telegram) na viungo vya mitandao ya kijamii huwasiliana na huduma hizo tu unapovibofya.</li>
</ul>
<h2>Usalama na kushiriki data</h2>
<p>Miunganisho yote kwenye tovuti hii hutumia HTTPS. Hatuuzi, hatukodishi wala hatufanyi biashara ya data binafsi. Data hushirikiwa tu na watoa huduma waliotajwa hapo juu kwa kadiri inavyohitajika kuendesha tovuti, au pale inapotakiwa na sheria.</p>
<h2>Watoto</h2>
<p>Huduma hii haikusudiwi kwa watoto walio chini ya umri wa miaka 13, na hatukusanyi kwa makusudi data binafsi za watoto.</p>
<h2>Haki zako</h2>
<p>Kwa mujibu wa Sheria Na. 27 ya Mwaka 2022 kuhusu Ulinzi wa Data Binafsi, una haki ya kuomba kufikia, kusahihisha au kufuta data zako binafsi, pamoja na kuondoa ridhaa yako ya uchakataji. Kwa kuwa karibu hatuhifadhi data zozote zinazokutambulisha, maombi mengi yanaweza kutatuliwa kwa kufuta tu vidakuzi na data za tovuti kwenye kivinjari chako. Kwa data zinazochakatwa na Google au Microsoft, unaweza pia kutumia mipangilio ya faragha kwenye huduma zao. Kwa maombi mengine, wasiliana nasi.</p>
<h2>Mabadiliko ya sera</h2>
<p>Sera hii inaweza kusasishwa wakati wowote. Mabadiliko yanaanza kutumika tangu yanapochapishwa kwenye ukurasa huu, pamoja na tarehe ya kuanza kutumika iliyo juu ya ukurasa.</p>
<h2>Mawasiliano</h2>
<p>Maswali kuhusu sera hii yanaweza kutumwa kupitia kiungo cha mawasiliano kilicho chini ya kila ukurasa au kupitia <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Soma pia <a href="/syarat-ketentuan">Sheria na Masharti</a> yetu.</p>
`
  },
  terms: {
    title: "Sheria na Masharti",
    desc: "Sheria na masharti ya kutumia I Need Barcode, jenereta ya bure ya misimbopau na QR Code.",
    body: `
<p>Kwa kutumia I Need Barcode (ineedbarcode.com), unakubali sheria na masharti yafuatayo. Ikiwa hukubaliani nayo, tafadhali usitumie huduma hii.</p>
<h2>Kuhusu huduma</h2>
<p>I Need Barcode ni zana ya bure ya kuunda picha za misimbopau na QR Code moja kwa moja kwenye kivinjari. I Need Barcode haina uhusiano na GS1 au mmiliki yeyote wa viwango vya misimbopau, haiungwi mkono nao, wala haishirikiani nao. QR Code ni alama ya biashara iliyosajiliwa ya DENSO WAVE INCORPORATED. Alama zote za biashara ni mali ya wamiliki wao husika.</p>
<h2>Matumizi yanayoruhusiwa</h2>
<ul>
<li>Picha za misimbopau unazounda zinaweza kutumika kwa madhumuni binafsi au ya kibiashara, kwa mfano kwa bidhaa, vifungashio, lebo na machapisho, bila alama maji na bila malipo.</li>
<li>Sisi huunda picha za misimbopau tu na hatutoi namba za misimbopau. Kwa bidhaa za rejareja, namba za EAN, UPC au GTIN lazima zisajiliwe rasmi kupitia GS1.</li>
<li>Fuata pia kanuni zinazotumika mahali msimbopau unapotumiwa, kwa mfano masharti ya maduka, masoko ya mtandaoni au huduma za usafirishaji.</li>
</ul>
<h2>Wajibu wako</h2>
<p>Unawajibika kikamilifu kwa data unazoweka kwenye misimbopau na kwa jinsi unavyoitumia. Kila mara jaribu misimbopau kwa visomaji kadhaa au programu za kamera kabla ya kuichapisha kwa wingi, na hakikisha ukubwa, rangi na utofautishaji wake vinakidhi mahitaji yako.</p>
<h2>Yaliyokatazwa</h2>
<ul>
<li>Kuunda misimbopau au QR Code inayoelekeza kwenye ulaghai, hadaa (phishing), programu hasidi au maudhui yaliyo kinyume cha sheria.</li>
<li>Kutumia misimbopau kughushi bidhaa, nyaraka, tiketi au namba za wahusika wengine.</li>
<li>Kutumia roboti, hati za kompyuta (scripts) au uendeshaji otomatiki kufikia huduma kwa wingi.</li>
<li>Kuvuruga au kuelemea seva na huduma zetu, au kujaribu kuvunja usalama wake.</li>
</ul>
<h2>Upatikanaji wa huduma</h2>
<p>Huduma hii inatolewa bure na inaweza kubadilishwa, kuwekewa mipaka au kusitishwa wakati wowote bila taarifa.</p>
<h2>Kanusho</h2>
<p>Huduma inatolewa "kama ilivyo" na "kama inavyopatikana", bila dhamana ya aina yoyote, ikiwemo dhamana kwamba huduma itafanya kazi wakati wote, haitakuwa na hitilafu, au kwamba kila msimbopau unaoundwa utaweza kusomwa na vifaa vyote na unafaa kwa madhumuni mahususi.</p>
<h2>Ukomo wa dhima</h2>
<p>Kwa kiwango kinachoruhusiwa na sheria, hatuwajibiki kwa hasara yoyote ya moja kwa moja au isiyo ya moja kwa moja inayotokana na matumizi ya huduma hii au misimbopau unayounda, ikiwemo gharama za kuchapisha upya na hasara zinazotokana na misimbopau isiyosomeka.</p>
<h2>Viungo vya wahusika wengine</h2>
<p>Tovuti hii ina viungo vya tovuti na huduma za wahusika wengine. Hatuwajibiki kwa maudhui wala sera za tovuti hizo.</p>
<h2>Mabadiliko ya masharti</h2>
<p>Sheria na masharti haya yanaweza kusasishwa wakati wowote. Ukiendelea kutumia huduma baada ya mabadiliko kuchapishwa, utahesabiwa kuwa umekubali toleo la hivi karibuni.</p>
<h2>Sheria inayotumika</h2>
<p>Sheria na masharti haya yanaongozwa na sheria za Jamhuri ya Indonesia.</p>
<h2>Mawasiliano</h2>
<p>Maswali na ripoti zinaweza kutumwa kupitia kiungo cha mawasiliano kilicho chini ya kila ukurasa au kupitia <a href="https://abidhanan.my.id">abidhanan.my.id</a>. Soma pia <a href="/kebijakan-privasi">Sera ya Faragha</a> yetu.</p>
`
  }
};
