// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Kijan pou w Jwenn yon Barcode Pwodui EAN-13 pou Ti Biznis",
  desc: "Ou vle pwodui ou antre nan ti magazen oswa nan makèt? Aprann sa chif EAN-13 yo vle di, kijan pou w enskri bò kote GS1 Indonesia pou jwenn yon nimewo ofisyèl, ak kijan pou w enprime l.",
  tags: ["Biznis", "Komès an detay"],
  coverCaption: "Anbalaj pwodui yo vann nan magazen bezwen yon barcode EAN-13 ki anrejistre.",
  inlineCaption: "Magazen yo rekonèt pwodui a gras ak nimewo EAN-13 ki nan sistèm kès yo.",
  faq: [
    ["Èske ou ka kreye pwòp nimewo EAN-13 pa w?", "Imaj barcode la, ou ka fè l poukont ou, men li pi bon pou nimewo a se yon nimewo ofisyèl GS1. Yon nimewo ou envante ka antre an konfli ak yon lòt pwodui e magazen yo ka refize l."],
    ["Èske chak varyant pwodui bezwen yon barcode diferan?", "Wi. Chak varyant ki diferan, pa egzanp yon lòt gou, yon lòt gwosè, oswa yon lòt kantite nan anbalaj la, bezwen pwòp nimewo EAN-13 pa l."],
    ["Kisa chif verifikasyon an ye nan yon EAN-13?", "Chif verifikasyon an se 13yèm chif la yo kalkile apati 12 chif ki vin anvan l yo. Eskanè a sèvi avè l pou asire l li barcode la kòrèkteman. Jeneratè I Need Barcode a kalkile l otomatikman si ou antre 12 chif."]
  ],
  body: `
<p>Si ou vle yo vann pwodui ou nan ti magazen, nan makèt, oswa sou gwo mache sou entènèt, anjeneral yo pral mande w mete yon barcode <strong>EAN-13</strong> sou anbalaj la. Barcode sa a genyen 13 chif ki se idantite inik pwodui ou nan lemonn antye.</p>

<h2>Sa 13 chif EAN-13 la vle di</h2>
<ul>
  <li><strong>Prefiks GS1</strong>: twa premye chif yo montre ki òganizasyon GS1 ki bay nimewo a. Nimewo GS1 Indonesia bay yo kòmanse ak <strong>899</strong>.</li>
  <li><strong>Nimewo konpayi</strong>: idantite konpayi ou yo ba ou lè ou enskri.</li>
  <li><strong>Nimewo pwodui</strong>: se konpayi a menm ki deside l pou chak varyant pwodui, pa egzanp yon lòt gou oswa yon lòt gwosè.</li>
  <li><strong>Chif verifikasyon</strong>: dènye chif la yo kalkile otomatikman apati 12 chif ki vin anvan l yo pou evite erè lekti.</li>
</ul>

<h2>Poukisa fòk se yon nimewo ofisyèl?</h2>
<p>Nenpòt moun ka desinen yon barcode EAN-13, men <strong>nimewo a</strong> dwe anrejistre. Magazen yo sèvi ak nimewo sa a pou rekonèt pwodui a nan sistèm yo. Si ou envante yon nimewo poukont ou, li ka antre an konfli ak pwodui yon lòt konpayi e yo ka refize l lè ou anrejistre pwodui a nan magazen an.</p>

<h2>Kijan pou w enskri bò kote GS1 Indonesia pou jwenn yon nimewo</h2>
<ol>
  <li>Prepare dokiman biznis ou, tankou NIB (Nimewo Idantifikasyon Biznis) ak NPWP, ansanm ak lis pwodui ki pral gen barcode.</li>
  <li>Anrejistre konpayi a sou sit ofisyèl GS1 Indonesia epi chwazi kantite nimewo ou bezwen.</li>
  <li>Peye frè enskripsyon an ak kotizasyon anyèl la dapre règ ki an vigè yo.</li>
  <li>Yon fwa yo apwouve w, ou resevwa yon nimewo konpayi e ou ka kreye yon nimewo pou chak pwodui.</li>
</ol>
<p>Kondisyon yo ak pri yo ka chanje, kidonk toujou verifye dènye enfòmasyon yo dirèkteman sou sit GS1 Indonesia.</p>

<h2>Fè imaj barcode la</h2>
<p>Yon fwa ou gen nimewo a, louvri <a href="/?type=ean13">jeneratè EAN-13</a> a epi antre 12 oswa 13 chif nimewo pwodui ou. Si ou antre 12 chif, chif verifikasyon an ap kalkile otomatikman. Asire w opsyon tèks anba barcode la aktive pou chif yo enprime, epi telechaje l kòm PNG.</p>

<h2>Konsèy pou enprime sou anbalaj</h2>
<ul>
  <li>Sèvi ak liy nwa oswa ble fonse sou yon fon blan. Evite koulè wouj pou liy yo, paske anpil eskanè kès sèvi ak limyè wouj, kidonk yo pa ka li liy wouj yo.</li>
  <li>Pa redwi barcode la twòp. Gwosè estanda EAN-13 la se anviwon 37,3 × 25,9 mm e ou ka redwi l jiska anviwon 80%. Plis detay nan <a href="/artikel/ukuran-barcode-untuk-dicetak">gid gwosè barcode la</a>.</li>
  <li>Kite yon espas vid sou bò goch ak bò dwat barcode la, e evite mete l sou yon pli oswa yon jwenti anbalaj la.</li>
  <li>Teste vèsyon enprime a ak yon eskanè anvan ou enprime an gwo kantite.</li>
</ul>
<p>Pou pwodui yo vann Amerik di Nò, yo ka mande w tou pou sèvi ak <a href="/?type=upca">UPC-A</a> ki genyen 12 chif.</p>
`
};
