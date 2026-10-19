// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "1D 與 2D 條碼的差異：您需要哪一種？",
  desc: "線性條碼和 QR Code 都是條碼，但用途不同。比較它們的容量、掃描方式和使用範例。",
  tags: ["基礎知識", "條碼"],
  coverCaption: "倉庫中的手持掃描器可讀取 1D 和 2D 條碼。",
  inlineCaption: "物流標籤通常使用線性條碼。",
  faq: [
    ["收銀掃描器能讀取 QR Code 嗎？", "不一定。1D 雷射掃描器只能讀取線性條碼。讀取 QR Code 需要以相機為基礎的 2D 掃描器或手機相機。"],
    ["哪種條碼最小？", "Data Matrix 屬於可以印得非常小的 2D 條碼，因此常用於電子零件、醫療器材和藥品標籤。"],
    ["零售商品可以用 QR Code 取代 EAN-13 嗎？", "要在零售店販售，產品仍需要已註冊的 EAN-13 或 UPC。QR Code 可以作為輔助加在包裝上，例如用於產品資訊或促銷。"]
  ],
  body: `
<p>製作條碼時，通常第一個浮現的問題是：要用線性條碼還是 QR Code？兩者都稱為條碼，但儲存資料的方式不同，因此用途也不同。</p>

<h2>1D（線性）條碼</h2>
<p>1D 條碼是由垂直線條組成的條碼。資料沿著單一方向儲存，也就是由左至右。最常見的例子是商品包裝上的 <a href="/?type=ean13">EAN-13</a> 和物流標籤上的 <a href="/?type=code128">Code 128</a>。</p>
<ul>
  <li>容量小，通常為十幾到幾十個字元。</li>
  <li>可由價格便宜、速度極快的收銀雷射掃描器讀取。</li>
  <li>適合用於商品代碼、序號和物流單號。</li>
</ul>

<h2>2D 條碼</h2>
<p>2D 條碼在兩個方向（橫向和縱向）上儲存資料，因此容量大得多。例如 <a href="/?type=qrcode">QR Code</a>、<a href="/?type=datamatrix">Data Matrix</a>、<a href="/?type=pdf417">PDF417</a> 和 <a href="/?type=azteccode">Aztec</a>。</p>
<ul>
  <li>容量大，從幾十到數千個字元。</li>
  <li>可用手機相機從各種方向掃描。</li>
  <li>具備錯誤修正功能，即使部分損壞也能讀取。</li>
  <li>可以做得非常小，例如電子零件上的 Data Matrix。</li>
</ul>

<h2>簡要比較</h2>
<table>
  <thead><tr><th></th><th>1D 條碼</th><th>2D 條碼</th></tr></thead>
  <tbody>
    <tr><td>外觀</td><td>垂直線條</td><td>正方形中的方塊／點</td></tr>
    <tr><td>容量</td><td>小</td><td>大</td></tr>
    <tr><td>掃描工具</td><td>雷射掃描器或相機</td><td>相機或 2D 掃描器</td></tr>
    <tr><td>耐損程度</td><td>有限</td><td>具備錯誤修正</td></tr>
    <tr><td>範例</td><td>EAN-13、UPC-A、Code 128</td><td>QR Code、Data Matrix、PDF417</td></tr>
  </tbody>
</table>

<h2>什麼時候該用哪一種？</h2>
<ul>
  <li><strong>在商店或超商販售的商品</strong>：使用 GS1 核發的正式 EAN-13。請參閱<a href="/artikel/cara-mendapatkan-barcode-ean-13">如何取得 EAN-13 條碼</a>。</li>
  <li><strong>倉庫、貨架或物流標籤</strong>：Code 128 是常見的選擇，因為它緊湊，並支援字母和數字。</li>
  <li><strong>給顧客使用的連結、菜單、WiFi 或聯絡人</strong>：QR Code，因為可以直接用手機相機掃描。</li>
  <li><strong>非常小的標籤</strong>：Data Matrix。</li>
  <li><strong>身分證件、登機證或文件</strong>：PDF417 或 Aztec。</li>
</ul>
<p>以上所有類型都能在 <a href="/">I Need Barcode</a> 上免費製作。如果還拿不定主意，可以先從給顧客用的 QR Code 和內部使用的 Code 128 開始。</p>
`
};
