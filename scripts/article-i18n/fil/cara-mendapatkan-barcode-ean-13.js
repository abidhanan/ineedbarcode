// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Paano Kumuha ng EAN-13 na Barcode ng Produkto para sa Maliliit na Negosyo",
  desc: "Gusto ba ninyong maipasok ang inyong produkto sa mga convenience store o supermarket? Alamin ang kahulugan ng mga numero ng EAN-13, kung paano magparehistro ng opisyal na numero sa GS1 Indonesia, at kung paano ito i-print.",
  tags: ["Negosyo", "Retail"],
  coverCaption: "Kailangan ng packaging ng retail na produkto ang rehistradong EAN-13 na barcode.",
  inlineCaption: "Kinikilala ng mga retail store ang produkto mula sa EAN-13 na numero sa kanilang sistema ng kahera.",
  faq: [
    ["Puwede bang gumawa ng sariling EAN-13 na numero?", "Puwede ninyong gawin mismo ang larawan ng barcode, pero mas mabuting opisyal mula sa GS1 ang numero. Ang sariling-gawang numero ay maaaring sumalungat sa ibang produkto at tanggihan ng mga retail store."],
    ["Kailangan ba ng magkaibang barcode ang bawat variant ng produkto?", "Oo. Ang bawat magkaibang variant, halimbawa magkaiba ang lasa, laki, o dami ng laman, ay nangangailangan ng sariling EAN-13 na numero."],
    ["Ano ang check digit sa EAN-13?", "Ang check digit ay ang ika-13 numero na kinukuwenta mula sa naunang 12 numero. Ginagamit ito ng scanner para matiyak na tama ang pagkakabasa sa barcode. Awtomatiko itong kinukuwenta ng generator ng I Need Barcode kapag naglagay kayo ng 12 digit."]
  ],
  body: `
<p>Kung gusto ninyong maibenta ang inyong produkto sa mga convenience store, supermarket, o malalaking marketplace, kadalasang hihilingin sa inyong maglagay ng <strong>EAN-13</strong> na barcode sa packaging. Naglalaman ang barcode na ito ng 13 digit na nagsisilbing natatanging pagkakakilanlan ng inyong produkto sa buong mundo.</p>

<h2>Kahulugan ng 13 digit sa EAN-13</h2>
<ul>
  <li><strong>GS1 prefix</strong>: ang unang tatlong digit ay nagpapakita ng organisasyon ng GS1 na naglabas ng numero. Ang mga numerong inilabas ng GS1 Indonesia ay nagsisimula sa <strong>899</strong>.</li>
  <li><strong>Numero ng kumpanya</strong>: ang pagkakakilanlan ng inyong kumpanya na ibinibigay kapag nagparehistro kayo.</li>
  <li><strong>Numero ng produkto</strong>: itinatakda mismo ng kumpanya para sa bawat variant ng produkto, halimbawa magkaiba ang lasa o laki.</li>
  <li><strong>Check digit</strong>: ang huling digit na awtomatikong kinukuwenta mula sa naunang 12 digit para maiwasan ang maling pagbasa.</li>
</ul>

<h2>Bakit kailangan ng opisyal na numero?</h2>
<p>Kahit sino ay makaguguhit ng EAN-13 na barcode, pero ang <strong>numero</strong> nito ay dapat rehistrado. Ginagamit ng mga retail store ang numerong iyon para makilala ang mga produkto sa kanilang sistema. Kung gagawa kayo ng sariling numero, maaari itong sumalungat sa produkto ng ibang kumpanya at tanggihan kapag inirehistro ang produkto sa tindahan.</p>

<h2>Paano magparehistro ng numero sa GS1 Indonesia</h2>
<ol>
  <li>Ihanda ang mga dokumento ng negosyo, gaya ng NIB (Business Identification Number) at NPWP (Taxpayer Identification Number), pati na ang listahan ng mga produktong lalagyan ng barcode.</li>
  <li>Irehistro ang kumpanya sa opisyal na website ng GS1 Indonesia at piliin ang dami ng numerong kailangan.</li>
  <li>Bayaran ang registration fee at taunang bayarin ayon sa umiiral na mga patakaran.</li>
  <li>Kapag naaprubahan, makatatanggap kayo ng numero ng kumpanya at makagagawa na ng numero para sa bawat produkto.</li>
</ol>
<p>Maaaring magbago ang mga kinakailangan at bayarin, kaya palaging tingnan ang pinakabagong impormasyon nang direkta sa website ng GS1 Indonesia.</p>

<h2>Paggawa ng larawan ng barcode</h2>
<p>Kapag mayroon na kayong numero, buksan ang <a href="/?type=ean13">EAN-13 generator</a> at ilagay ang 12 o 13 digit na numero ng inyong produkto. Kung 12 digit ang ilalagay ninyo, awtomatikong kukuwentahin ang check digit. Tiyaking naka-on ang opsyon ng teksto sa ilalim ng barcode para mai-print ang mga numero, saka i-download ito bilang PNG.</p>

<h2>Mga tip sa pag-print sa packaging</h2>
<ul>
  <li>Gumamit ng itim o madilim na asul na guhit sa puting background. Iwasan ang pula para sa mga guhit, dahil maraming scanner sa kahera ang gumagamit ng pulang ilaw kaya hindi nababasa ang pulang guhit.</li>
  <li>Huwag masyadong paliitin ang barcode. Ang karaniwang laki ng EAN-13 ay mga 37.3 × 25.9 mm at maaari itong paliitin hanggang mga 80%. Higit pang detalye sa <a href="/artikel/ukuran-barcode-untuk-dicetak">gabay sa laki ng barcode</a>.</li>
  <li>Mag-iwan ng bakanteng espasyo sa kaliwa at kanan ng barcode, at iwasang ilagay ito sa tupi o dugtungan ng packaging.</li>
  <li>Subukan muna ang print gamit ang scanner bago mag-print nang maramihan.</li>
</ul>
<p>Para sa mga produktong ibinebenta sa North America, maaari ding hilingin sa inyong gumamit ng <a href="/?type=upca">UPC-A</a> na may 12 digit.</p>
`
};
