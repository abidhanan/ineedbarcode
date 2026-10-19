// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Ukubwa na Ubora wa Picha wa Barcode Unaofaa kwa Kuchapisha",
  desc: "Barcode iliyo ndogo mno au yenye ukungu ni vigumu kusomwa. Jifunze ukubwa wa chini, kanuni ya umbali wa kusoma, na ubora wa picha ulio salama kwa kuchapisha.",
  tags: ["Mwongozo", "Uchapishaji"],
  coverCaption: "Printa ya lebo huchapisha barcode kwa ajili ya vifurushi na vifungashio.",
  inlineCaption: "Ukubwa wa lebo huamua jinsi barcode inavyoweza kuchapishwa kwa ukubwa.",
  faq: [
    ["Ukubwa wa chini wa QR Code kwa kuchapisha ni upi?", "Kwa kusomwa kutoka karibu, takriban 2 × 2 cm ndio kikomo salama. Kwa umbali mrefu zaidi, tumia uwiano wa takriban 10 : 1 kati ya umbali wa kusoma na upana wa QR Code."],
    ["Ukubwa wa kawaida wa barcode ya EAN-13 ni upi?", "Ukubwa wa kawaida wa EAN-13 ni takriban 37.3 × 25.9 mm. Ukubwa huu unaweza kupunguzwa hadi takriban 80% au kuongezwa hadi 200%."],
    ["Kwa nini barcode huwa na ukungu baada ya kuchapishwa?", "Kwa kawaida ni kwa sababu picha ilikuwa ndogo kisha ikakuzwa, au ilihifadhiwa kama JPG ya ubora wa chini. Pakua kwa ukubwa mkubwa zaidi wa moduli katika muundo wa PNG."]
  ],
  body: `
<p>Barcode inayoonekana vizuri kwenye skrini si lazima isomeke baada ya kuchapishwa. Ukubwa ulio mdogo mno, ubora wa chini wa picha, au wino unaosambaa vinaweza kufanya kisomaji kishindwe kusoma. Ufuatao ni mwongozo ili nakala zako zilizochapishwa zibaki kusomeka.</p>

<h2>Fahamu moduli</h2>
<p><strong>Moduli</strong> ni kipimo kidogo zaidi cha barcode, yaani kisanduku kimoja kidogo kwenye QR Code au mstari mwembamba zaidi kwenye barcode ya mistari. Ukubwa wa moduli huamua jinsi barcode inavyosomwa kwa urahisi. Kwenye <a href="/">I Need Barcode</a>, ukubwa wa moduli unaweza kurekebishwa kwenye sehemu ya Mipangilio: kadiri thamani inavyokuwa kubwa, ndivyo picha inayopakuliwa inavyokuwa kubwa na kali zaidi.</p>

<h2>Ukubwa wa chini wa QR Code</h2>
<ul>
  <li>Kwa kusomwa kutoka karibu (kwa mfano kadi ya biashara au lebo ya bidhaa), ukubwa wa takriban <strong>2 × 2 cm</strong> ndio kikomo salama.</li>
  <li>Tumia kanuni ya uwiano wa takriban <strong>10 : 1</strong>: umbali wa kusoma ni takriban mara kumi ya upana wa QR Code. Kwa bango linalosomwa kutoka umbali wa mita 2, tengeneza QR Code ya angalau takriban 20 cm.</li>
  <li>Kadiri data inayohifadhiwa inavyokuwa nyingi, ndivyo muundo unavyobanana zaidi, hivyo unahitaji ukubwa mkubwa zaidi.</li>
</ul>

<h2>Ukubwa wa barcode ya bidhaa</h2>
<p>Ukubwa wa kawaida wa <a href="/?type=ean13">EAN-13</a> ni takriban 37.3 × 25.9 mm (100%). Ukubwa huu unaweza kupunguzwa hadi takriban 80% au kuongezwa hadi 200%. Epuka kukata urefu wa mistari kuwa mfupi mno, kwa sababu visomaji vya kaunta za malipo vinahitaji nafasi ya kusoma kutoka pembe mbalimbali.</p>

<h2>Ubora wa picha</h2>
<ul>
  <li>Kwa kuchapisha, hakikisha kila moduli inachorwa kwa <strong>pikseli kadhaa kamili</strong>, si sehemu ya pikseli. Chagua ukubwa mkubwa zaidi wa moduli unapopakua, kisha punguza ukubwa kwenye programu ya usanifu, si kinyume chake.</li>
  <li>Epuka kukuza picha ndogo ya barcode, kwa sababu kingo za visanduku zitakuwa na ukungu au kuchongoka.</li>
  <li>Hifadhi katika muundo wa PNG ili rangi na kingo zisiharibike kama ilivyo kwa JPG.</li>
</ul>

<h2>Eneo tulivu</h2>
<p>Kila barcode inahitaji nafasi tupu kuizunguka, inayoitwa <strong>eneo tulivu</strong> (quiet zone). Kwa QR Code, kwa kawaida upana wake ni moduli nne. Kwa barcode ya mistari, nafasi tupu upande wa kushoto na kulia ni muhimu sana. Usiweke maandishi, mistari ya usanifu, au ukingo wa kifungashio karibu mno.</p>

<h2>Rangi na nyenzo</h2>
<ul>
  <li>Tumia rangi nzito kwa barcode na rangi angavu kwa mandharinyuma.</li>
  <li>Epuka nyenzo zinazong'aa au angavu, kwa sababu mwanga unaoakisiwa unaweza kuisumbua kamera.</li>
  <li>Daima chapisha sampuli moja na uijaribu kwa simu au visomaji kadhaa kabla ya kuchapisha kwa wingi.</li>
</ul>
<p>Ikiwa barcode yako bado ni vigumu kusomwa, angalia <a href="/artikel/barcode-tidak-bisa-dipindai">sababu 7 za barcode kushindwa kusomwa</a>.</p>
`
};
