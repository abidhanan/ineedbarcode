// apa-itu-barcode
module.exports = {
  title: "He Aha te Barcode? Te Tikanga, te Mahi, me Ōna Momo",
  desc: "Kei runga i te nuinga o ngā hua ka hokona e koe he barcode. Me mōhio ki tōna mahi, ki tōna hītori poto, me ngā momo barcode e whakamahia nuitia ana.",
  tags: ["Ngā Tūāpapa", "Barcode"],
  coverCaption: "Ko te barcode i runga i te pōkai e pupuri ana i tētahi waehere ahurei mō te hua.",
  inlineCaption: "Ka whakamahi te kaitahua i te pūmatawai hei pānui i te barcode i te kimonga kanohi.",
  faq: [
    ["He aha te rerekētanga o te barcode me te QR Code?", "Ko te QR Code tētahi momo barcode, arā, he barcode 2D. Ko te barcode rārangi (1D) e pupuri ana i ētahi pūāhua torutoru noa, ā, ka pānuitia mai i te mauī ki te matau, engari ko te QR Code e pupuri ana i ngā raraunga i ngā ahunga e rua, nā reira ka taea te pupuri i tētahi hono, i tētahi kuputuhi, i ngā raraunga WiFi rānei."],
    ["Ka pupuri te barcode i te utu o te hua?", "Kāore i te nuinga o te wā. He waehere anake kei roto i te barcode o tētahi hua. Ko te utu me te ingoa o te hua e penapenatia ana ki te pūnaha tahua, kātahi ka rapua mā te waehere i matawaitia."],
    ["Me utu kia hanga i tētahi barcode?", "Kāo. Ka taea te hanga koreutu i te whakaahua barcode, hei tauira i I Need Barcode. Ko te mea anake me rēhita, me utu hoki, ko te tau ōkawa mō ngā barcode o ngā hua hokohoko pērā i te EAN-13, mā te GS1."]
  ],
  body: `
<p>Ko te barcode he huarahi tuhi raraunga hei tauira e taea ana e te mīhini te pānui. Ko taua tauira i te nuinga o te wā he rārangi pango, mā hoki, he rerekē te whānui, he tapawhā iti rānei kua whakaraupapatia ki roto i tētahi tapawhā rite. Ina matawaitia, ka whakawhitia anōtia taua tauira ki ngā nama, ki te kuputuhi rānei, hei tauira te waehere o tētahi hua, te nama tuku mōkihi, te wāhitau paetukutuku rānei.</p>
<p>I te mea mā te mīhini e pānui, he tere ake te barcode, he iti ake hoki ngā hapa i te pato ā-ringa i tētahi waehere. Koia te take e whakamahia ana te barcode i te tahua, i te whare putunga, i te hōhipera, i ngā tīkiti, tae noa ki ngā pōkai kai.</p>

<h2>He hītori poto o te barcode</h2>
<p>I whakawhiwhia te whakaaro mō te barcode ki tētahi pātene i te tau 1952 e Norman Joseph Woodland rāua ko Bernard Silver i Amerika. Nō te tau 1974 anō i tino whakamahia ai te barcode i te toa, i te wā i matawaitia ai tētahi pōkai kāpia i tētahi hokomaha i Ohio me tētahi waehere UPC. Mai i taua wā, kua horapa te barcode puta noa i te ao, ā, ināianei kei te whakahaerehia ā-ao e tētahi rōpū paerewa ko GS1 te ingoa.</p>

<h2>Ka pēhea te mahi a te barcode?</h2>
<p>Ka tīaho te pūmatawai i te barcode, kātahi ka pānui i te mārama ka whakahokia mai. He iti te mārama ka whakahokia e ngā wāhanga pōuri, he nui te mārama ka whakahokia e ngā wāhanga mārama. Ka whakawhitia taua rerekētanga ki tētahi raupapa nama 0 me te 1, kātahi ka whakatairitea ki ngā ture o taua momo barcode. He maha hoki ngā barcode he <strong>mati arowhai</strong> (check digit) tō rātou, arā, ko te mati whakamutunga ka tātaitia mai i ngā mati o mua. Ki te kore te otinga o te tātai e hāngai, ka mōhio te pūmatawai he hapa, ā, ka whakakāhoretia e ia te otinga.</p>
<p>Ko te barcode tonu i te nuinga o te wā he waehere anake tāna e pupuri ana. Ko ngā mōhiohio pērā i te ingoa o te hua, i te utu rānei, e penapenatia ana ki te pūnaha tahua, ki tētahi pātengi raraunga (database) rānei, kātahi ka rapua mā taua waehere.</p>

<h2>Ngā momo barcode e whakamahia auautia ana</h2>
<p>Hei tirohanga whānui, ka wehea ngā barcode ki ngā rōpū nui e rua:</p>
<ul>
  <li><strong>Barcode 1D (rārangi)</strong>: he rārangi poutū ka pānuitia mai i te mauī ki te matau. Hei tauira, ko te <a href="/?type=ean13">EAN-13</a> me te <a href="/?type=upca">UPC-A</a> mō ngā hua hokohoko, me te <a href="/?type=code128">Code 128</a> me te <a href="/?type=code39">Code 39</a> mō te whakarite tuku me ngā whare putunga.</li>
  <li><strong>Barcode 2D</strong>: he tauira tapawhā e pupuri ana i ngā raraunga i ngā ahunga e rua, nā reira he nui ake te nui ka taea te pupuri. Hei tauira, ko te <a href="/?type=qrcode">QR Code</a>, te <a href="/?type=datamatrix">Data Matrix</a>, te <a href="/?type=pdf417">PDF417</a>, me te <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>I tua atu i ēnei, he barcode motuhake mō te poutāpeta me te tuku, mō te hauora, me ngā paerewa GS1 mō te mekameka tuku. Ka taea e koe te pānui i ētahi whakamārama hōhonu ake mō ō rātou rerekētanga i te tuhinga <a href="/artikel/perbedaan-barcode-1d-dan-2d">Te Rerekētanga o te Barcode 1D me te 2D</a>.</p>

<h2>He aha ngā mahi a te barcode?</h2>
<ul>
  <li><strong>Hokohoko</strong>: ka whakatere i te tahua, ka tuhi aunoa hoki i ngā taonga kei te putunga.</li>
  <li><strong>Whare putunga me te tuku</strong>: ka aroturuki i ngā taonga me ngā mōkihi mai i tētahi wāhi ki tētahi atu.</li>
  <li><strong>Ngā tīkiti me ngā hui</strong>: ka arowhai i te pono o tētahi tīkiti ki te matawai kotahi.</li>
  <li><strong>Te whakatairanga</strong>: mā te QR Code i runga i tētahi pukapuka iti, i tētahi pōkai rānei, ka kawea tika ngā tāngata ki tō paetukutuku, ki tō tahua kai, ki tō WhatsApp rānei.</li>
</ul>

<h2>Te hanga i tō ake barcode</h2>
<p>Kāore koe e hiahia ki tētahi taupānga utu kia hanga barcode ai. I <a href="/">I Need Barcode</a>, kōwhiria te momo barcode, whakakīia ngā raraunga, kātahi ka tikiake hei whakaahua PNG. Neke atu i te 100 ngā momo ka taea e koe te kōwhiri, ā, he koreutu katoa, kāore he rēhitatanga.</p>
`
};
