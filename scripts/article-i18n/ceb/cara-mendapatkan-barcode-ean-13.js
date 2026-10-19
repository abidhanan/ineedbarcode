// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Unsaon Pagkuha og EAN-13 nga Barcode sa Produkto alang sa Gagmayng Negosyo",
  desc: "Gusto ba ninyo nga ang inyong produkto mabaligya sa convenience store o supermarket? Ilha ang kahulogan sa mga numero sa EAN-13, unsaon pagparehistro og opisyal nga numero sa GS1 Indonesia, ug unsaon kini pag-imprenta.",
  tags: ["Negosyo", "Tingi"],
  coverCaption: "Ang putos sa produktong retail nagkinahanglan og narehistro nga EAN-13 nga barcode.",
  inlineCaption: "Ang mga tindahan sa retail moila sa produkto pinaagi sa numero sa EAN-13 sa ilang sistema sa kahera.",
  faq: [
    ["Mahimo ba nga ako ra ang mohimo sa numero sa EAN-13?", "Ang hulagway sa barcode mahimo ninyong himoon mismo, apan ang numero angay nga opisyal nga numero gikan sa GS1. Ang numero nga inyong gihimo mismo mahimong mosumpaki sa ubang produkto ug isalikway sa mga tindahan sa retail."],
    ["Kinahanglan ba nga lahi ang barcode sa matag variant sa produkto?", "Oo. Ang matag lahi nga variant, pananglitan lahi nga lami, gidak-on, o gidaghanon sa sulod sa putos, nagkinahanglan og kaugalingong numero sa EAN-13."],
    ["Unsa ang check digit sa EAN-13?", "Ang check digit mao ang ika-13 nga digit nga gikuwenta gikan sa 12 ka digit sa wala pa niini. Gigamit kini sa scanner aron masiguro nga ang barcode nabasa sa husto. Ang generator sa I Need Barcode mokuwenta niini nga awtomatiko kon kamo mosulod og 12 ka digit."]
  ],
  body: `
<p>Kon gusto ninyo nga ang inyong produkto mabaligya sa convenience store, supermarket, o dagkong marketplace, kasagaran hangyoon kamo nga magbutang og <strong>EAN-13</strong> nga barcode sa putos. Kini nga barcode adunay 13 ka digit nga nagsilbing talagsaong identidad sa inyong produkto sa tibuok kalibotan.</p>

<h2>Kahulogan sa 13 ka digit sa EAN-13</h2>
<ul>
  <li><strong>Prefix sa GS1</strong>: ang unang tulo ka digit nagpakita sa organisasyon sa GS1 nga nagpagawas sa numero. Ang mga numero nga gipagawas sa GS1 Indonesia nagsugod sa <strong>899</strong>.</li>
  <li><strong>Numero sa kompanya</strong>: ang identidad sa inyong kompanya, nga ihatag sa dihang kamo magparehistro.</li>
  <li><strong>Numero sa produkto</strong>: gitino sa kompanya mismo alang sa matag variant sa produkto, pananglitan lahi nga lami o gidak-on.</li>
  <li><strong>Check digit</strong>: ang kataposang digit, nga gikuwenta nga awtomatiko gikan sa 12 ka digit sa wala pa niini aron malikayan ang sayop nga pagbasa.</li>
</ul>

<h2>Nganong kinahanglan ang opisyal nga numero?</h2>
<p>Bisan kinsa makadrowing og EAN-13 nga barcode, apan ang <strong>numero</strong> kinahanglan narehistro. Ang mga tindahan sa retail naggamit sa maong numero aron mailhan ang produkto sa ilang sistema. Kon kamo ra ang mohimo sa numero, mahimong mosumpaki kini sa produkto sa laing kompanya ug isalikway sa dihang irehistro ang produkto sa tindahan.</p>

<h2>Unsaon pagparehistro og numero sa GS1 Indonesia</h2>
<ol>
  <li>Andama ang mga dokumento sa inyong negosyo, sama sa NIB (Numero sa Pag-ila sa Negosyo) ug NPWP (Numero sa Pag-ila sa Tigbayad og Buhis), uban sa listahan sa mga produkto nga butangan og barcode.</li>
  <li>Iparehistro ang inyong kompanya pinaagi sa opisyal nga website sa GS1 Indonesia ug pilia ang gidaghanon sa mga numero nga inyong gikinahanglan.</li>
  <li>Bayri ang bayad sa pagparehistro ug ang tinuig nga bayranan sumala sa mga balaod nga gipatuman.</li>
  <li>Human maaprobahan, makadawat kamo og numero sa kompanya ug makahimo na og numero alang sa matag produkto.</li>
</ol>
<p>Ang mga kinahanglanon ug bayranan mahimong mausab, mao nga kanunay susiha ang pinakabag-ong impormasyon direkta sa website sa GS1 Indonesia.</p>

<h2>Paghimo sa hulagway sa barcode</h2>
<p>Kon naa na ninyo ang numero, ablihi ang <a href="/?type=ean13">generator sa EAN-13</a> ug isulod ang 12 o 13 ka digit nga numero sa inyong produkto. Kon 12 ka digit ang inyong isulod, ang check digit awtomatikong makuwenta. Siguroha nga naka-on ang opsiyon sa pagpakita og teksto ilawom sa barcode aron ma-imprenta usab ang mga numero, unya i-download isip PNG.</p>

<h2>Mga tip sa pag-imprenta sa putos</h2>
<ul>
  <li>Gamita ang itom o ngitngit nga asul nga mga linya sa puti nga background. Likayi ang pula alang sa mga linya, tungod kay daghang scanner sa kahera ang naggamit og pula nga kahayag, mao nga ang pula nga mga linya dili mabasa.</li>
  <li>Ayaw gamaya og pag-ayo ang barcode. Ang sumbanang gidak-on sa EAN-13 mga 37.3 × 25.9 mm ug mahimo kining gamayon hangtod sa mga 80%. Ang dugang detalye anaa sa <a href="/artikel/ukuran-barcode-untuk-dicetak">giya sa gidak-on sa barcode</a>.</li>
  <li>Ibilin ang bakanteng luna sa wala ug tuo sa barcode, ug likayi ang pagbutang niini sa mga pilo o tahi sa putos.</li>
  <li>Sulayi ang usa ka imprenta gamit ang scanner sa dili pa mag-imprenta og daghan.</li>
</ul>
<p>Alang sa mga produkto nga ibaligya sa North America, mahimo usab kamong hangyoon nga mogamit og <a href="/?type=upca">UPC-A</a> nga adunay 12 ka digit.</p>
`
};
