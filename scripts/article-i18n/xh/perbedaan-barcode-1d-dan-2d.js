// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Umahluko phakathi kweBarcode ye-1D neye-2D: Yeyiphi Eniyidingayo?",
  desc: "IBarcode yemigca neQR Code zombini ziibarcode, kodwa ukusetyenziswa kwazo kwahlukile. Thelekisani umthamo, indlela yokuskena, kunye nemizekelo yokusetyenziswa kwazo.",
  tags: ["Iziseko", "Barcode"],
  coverCaption: "Isikena esiphathwa ngesandla kuvimba wempahla sifunda iibarcode ze-1D neze-2D.",
  inlineCaption: "Iilebheli zokuthumela zidla ngokusebenzisa ibarcode yemigca.",
  faq: [
    ["Ingaba izikena zeendawo zokuhlawula zingafunda iQR Code?", "Asizizo zonke. Izikena zelaser ze-1D zifunda iibarcode zemigca kuphela. KwiQR Code kufuneka isikena se-2D esisekelwe kwikhamera okanye ikhamera yefowuni."],
    ["Yeyiphi ibarcode encinci kakhulu?", "I-Data Matrix yibarcode ye-2D enokushicilelwa incinci kakhulu, ngoko ke idla ngokusetyenziswa kumacandelo ombane, kwizixhobo zempilo, nakwiilebheli zamayeza."],
    ["Ingaba ndingasebenzisa iQR Code endaweni ye-EAN-13 kwiimveliso zokuthengisa?", "Ukuze ithengiswe evenkileni, imveliso isafuna i-EAN-13 okanye i-UPC ebhalisiweyo. IQR Code ingongezwa ekupakisheni njengesongezelelo, umzekelo kulwazi lwemveliso okanye kwintengiso."]
  ],
  body: `
<p>Xa nisenza ibarcode, umbuzo wokuqala odla ngokuvela ngulo: ndisebenzise ibarcode yemigca okanye iQR Code? Zombini zibizwa ngokuba ziibarcode, kodwa indlela ezigcina ngayo idatha yahlukile, ngoko ke nokusetyenziswa kwazo kwahlukile.</p>

<h2>IBarcode ye-1D (yomgca)</h2>
<p>IBarcode ye-1D yibarcode eyimigca ethe nkqo. Idatha igcinwa kwicala elinye, oko kukuthi ukusuka ekhohlo ukuya ekunene. Owona mzekelo waziwayo yi-<a href="/?type=ean13">EAN-13</a> ekupakisheni kweemveliso kunye ne-<a href="/?type=code128">Code 128</a> kwiilebheli zokuthumela.</p>
<ul>
  <li>Umthamo omncinci, ngokuqhelekileyo ukusuka kwishumi ukuya kumashumi aliqela oonobumba.</li>
  <li>Ingafundwa zizikena zelaser zeendawo zokuhlawula ezingabizi kwaye zikhawuleza kakhulu.</li>
  <li>Ilungele iikhowudi zemveliso, iinombolo zothotho, kunye neenombolo zerisithi yokuthumela.</li>
</ul>

<h2>IBarcode ye-2D</h2>
<p>IBarcode ye-2D igcina idatha ngamacala omabini, ecaleni nasezantsi, ngoko ke ithwala okuninzi kakhulu. Imizekelo yi-<a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, kunye ne-<a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Umthamo omkhulu, ukusuka kumashumi ukuya kumawaka oonobumba.</li>
  <li>Ingaskenwa ngekhamera yefowuni ukusuka kumacala ahlukeneyo.</li>
  <li>Inokulungiswa kweempazamo, ngoko isafundeka nokuba inxalenye yayo yonakele.</li>
  <li>Ingenziwa incinci kakhulu, umzekelo i-Data Matrix kumacandelo ombane.</li>
</ul>

<h2>Uthelekiso olufutshane</h2>
<table>
  <thead><tr><th></th><th>IBarcode ye-1D</th><th>IBarcode ye-2D</th></tr></thead>
  <tbody>
    <tr><td>Imilo</td><td>Imigca ethe nkqo</td><td>Izikwere/amachaphaza ngaphakathi kwesikwere</td></tr>
    <tr><td>Umthamo</td><td>Omncinci</td><td>Omkhulu</td></tr>
    <tr><td>Isixhobo sokuskena</td><td>Isikena selaser okanye ikhamera</td><td>Ikhamera okanye isikena se-2D</td></tr>
    <tr><td>Ukumelana nomonakalo</td><td>Kunqongophele</td><td>Kukho ukulungiswa kweempazamo</td></tr>
    <tr><td>Imizekelo</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Ningasebenzisa eyiphi nini?</h2>
<ul>
  <li><strong>Iimveliso ezithengiswa kwiivenkile okanye kwiivenkile ezincinci</strong>: sebenzisani i-EAN-13 esemthethweni evela kwi-GS1. Jongani <a href="/artikel/cara-mendapatkan-barcode-ean-13">indlela yokufumana ibarcode ye-EAN-13</a>.</li>
  <li><strong>Iilebheli zoovimba bempahla, iishelufu, okanye zokuthumela</strong>: i-Code 128 lukhetho oluqhelekileyo kuba ixinene kwaye ixhasa oonobumba namanani.</li>
  <li><strong>Amakhonkco, iimenyu, iWiFi, okanye uqhagamshelwano lwabathengi</strong>: iQR Code, kuba ingaskenwa ngqo ngekhamera yefowuni.</li>
  <li><strong>Iilebheli ezincinci kakhulu</strong>: i-Data Matrix.</li>
  <li><strong>Amakhadi esazisi, amatikiti enqwelo-moya, okanye amaxwebhu</strong>: i-PDF417 okanye i-Aztec.</li>
</ul>
<p>Zonke ezi ntlobo zingentla ningazenza simahla kwi-<a href="/">I Need Barcode</a>. Ukuba nisathandabuza, qalani ngeQR Code kwiimfuno zabathengi kunye ne-Code 128 kwiimfuno zangaphakathi.</p>
`
};
