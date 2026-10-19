// qr-code-menu-restoran
module.exports = {
  title: "QR Code fyrir matseðla veitingastaða: Ítarlegar leiðbeiningar",
  desc: "Stafrænn matseðill með QR Code auðveldar viðskiptavinum lífið og sparar prentkostnað. Svona býrð þú það til, undirbýrð matseðilinn og setur það upp á borðin.",
  tags: ["Viðskipti", "QR Code"],
  coverCaption: "QR Code á borðinu leiðir viðskiptavini beint á stafræna matseðilinn.",
  inlineCaption: "Settu QR Code á stað sem auðvelt er að ná til úr sætinu.",
  faq: [
    ["Hvað er best að nota fyrir stafrænan matseðil: PDF eða vefsíðu?", "Vefsíða er yfirleitt þægilegri aflestrar í síma og opnast hraðar. PDF má nota ef skráin er lítil og letrið nógu stórt á skjánum."],
    ["Hversu stórt á QR Code fyrir matseðil á borði að vera?", "Um 3 til 5 cm duga til að hægt sé að skanna það úr sætinu. Notaðu efni sem þolir að hellt sé niður á það og er ekki of glansandi."],
    ["Þarf að prenta QR Code aftur þegar matseðillinn breytist?", "Nei, svo framarlega sem tengillinn helst sá sami. Það nægir að uppfæra efni síðunnar eða matseðilsskrárinnar sem QR Code vísar á."]
  ],
  body: `
<p>Stafrænir matseðlar með QR Code eru orðnir algengir á kaffihúsum og veitingastöðum. Viðskiptavinir þurfa aðeins að skanna QR Code á borðinu til að sjá réttina, verðin og myndir. Fyrir rekstraraðila sparar þetta prentkostnað og auðveldar breytingar á verði eða matseðli.</p>

<h2>Kostir matseðils með QR Code</h2>
<ul>
  <li><strong>Auðvelt að uppfæra</strong>: breyttu verði eða bættu við réttum án þess að prenta matseðilinn upp á nýtt.</li>
  <li><strong>Sparar kostnað</strong>: það nægir að prenta lítið QR Code fyrir hvert borð.</li>
  <li><strong>Meiri upplýsingar</strong>: sýndu myndir, lýsingar og merkingar eins og sterkt eða grænmetisréttur.</li>
  <li><strong>Styður pantanir á netinu</strong>: vísaðu viðskiptavinum á pöntunareyðublað eða WhatsApp.</li>
</ul>

<h2>Skref 1: Undirbúðu matseðil á netinu</h2>
<p>QR Code inniheldur aðeins tengil, svo þú þarft matseðil sem hægt er að opna á netinu. Kostirnir eru meðal annars síða á þínum eigin vef, PDF-skrá í netgeymslu sem deilt er opinberlega eða vörulistasíða á pöntunarvettvangi. Gakktu úr skugga um að matseðillinn sé þægilegur aflestrar á símaskjá: nógu stórt letur, myndir ekki of þungar og skýr verð.</p>

<h2>Skref 2: Búðu til QR Code</h2>
<ol>
  <li>Afritaðu tengilinn á matseðilinn þinn.</li>
  <li>Opnaðu <a href="/?type=qrcode">QR Code-rafalinn</a>, veldu flipann <strong>URL</strong> og límdu tengilinn inn.</li>
  <li>Bættu við ramma með textanum "MATSEÐILL" eða "SKANNAÐU TIL AÐ SJÁ MATSEÐILINN" undir Hönnun.</li>
  <li>Aðlagaðu litina að ímynd veitingastaðarins, en notaðu samt dökkan lit á ljósum bakgrunni.</li>
  <li>Sæktu PNG með nægilega stórri einingastærð til prentunar.</li>
</ol>
<p>Notaðu tengil sem mun ekki breytast. Ef matseðillinn er færður á aðra slóð er ekki hægt að uppfæra QR Code sem þegar hefur verið prentað. Skýringuna er að finna í greininni <a href="/artikel/apa-itu-qr-code">hvað er QR Code</a>.</p>

<h2>Skref 3: Prentaðu og settu upp</h2>
<ul>
  <li>Prentaðu í að minnsta kosti um 3–5 cm stærð svo auðvelt sé að skanna úr sætinu.</li>
  <li>Notaðu efni sem þolir að hellt sé niður á það, eins og vínillímmiða eða plöstuð spjöld án of mikils gljáa.</li>
  <li>Settu það á stað sem auðvelt er að ná til, til dæmis í akrýlstand á miðju borðinu.</li>
  <li>Bættu borðnúmerinu við nálægt QR Code ef viðskiptavinir panta í gegnum spjall.</li>
</ul>

<h2>Ekki gleyma viðskiptavinum án síma</h2>
<p>Hafðu einn eða tvo prentaða matseðla tiltæka fyrir viðskiptavini sem eru ekki með síma, hafa tæmt rafhlöðuna eða kjósa frekar að lesa matseðil á pappír.</p>
<p>Þú getur einnig búið til <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a> fyrir gesti og sett það við hliðina á QR Code matseðilsins.</p>
`
};
