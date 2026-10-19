// apa-itu-qr-code
module.exports = {
  title: "什麼是 QR Code？它是如何運作的？",
  desc: "QR Code 可以儲存連結、文字，甚至 WiFi 資料，即使部分損壞也能讀取。以下介紹它的運作原理與優點。",
  tags: ["基礎知識", "QR Code"],
  coverCaption: "用手機相機就能直接掃描 QR Code。",
  inlineCaption: "每個 QR Code 都由黑白相間的小方塊組成。",
  faq: [
    ["QR Code 會過期嗎？", "靜態 QR Code 永遠不會過期，因為資料直接嵌入在圖片中。動態 QR Code 則可能在連結服務供應商停止服務或訂閱到期後失效。"],
    ["QR Code 可以儲存多少資料？", "最大版本的 QR Code 最多可儲存 7,089 個數字，約 2,953 位元組。不過，資料越少，QR Code 越容易掃描。"],
    ["QR Code 部分損壞後還能讀取嗎？", "可以。藉由錯誤修正功能，即使約 7% 至 30% 的部分損壞，QR Code 仍能讀取，實際比例取決於所使用的修正等級 L、M、Q 或 H。"]
  ],
  body: `
<p>QR Code（Quick Response Code，快速回應碼）是一種正方形的 2D 條碼，由黑白相間的小方塊組成。線性條碼只能儲存十幾位數字，而 QR Code 則可以儲存網站連結、長篇文字、電話號碼、聯絡人，甚至 WiFi 網路資料。</p>
<p>QR Code 由日本公司 Denso Wave 於 1994 年開發，最初用於在工廠中追蹤汽車零件。如今，從行動支付到餐廳菜單，QR Code 隨處可見，因為用手機相機就能直接掃描。</p>

<h2>QR Code 的組成部分</h2>
<ul>
  <li><strong>角落的三個大方塊</strong>（finder pattern，定位圖案）：協助相機找到 QR Code 並判斷方向，因此即使傾斜或倒置掃描也能讀取。</li>
  <li><strong>對齊圖案</strong>（alignment pattern）：小方塊，協助讀取彎曲或從斜角看到的 QR Code。</li>
  <li><strong>資料區</strong>：包含您所儲存資訊的小方塊。</li>
  <li><strong>靜區</strong>（quiet zone）：QR Code 周圍的空白區域，方便與背景區隔。</li>
</ul>

<h2>能儲存多少資料？</h2>
<p>QR Code 共有 40 個尺寸版本。最大版本最多可儲存 7,089 個數字，約 2,953 位元組的資料。實際使用時，儲存的資料越少，方塊越大，QR Code 也越容易掃描。因此，短連結比非常長的連結更好。</p>

<h2>即使損壞也能讀取</h2>
<p>QR Code 採用錯誤修正（error correction）技術，共有四個等級：</p>
<ul>
  <li><strong>L</strong>：QR Code 約 7% 損壞時，資料仍可復原。</li>
  <li><strong>M</strong>：約 15%。這是常見且均衡的選擇。</li>
  <li><strong>Q</strong>：約 25%。</li>
  <li><strong>H</strong>：約 30%，適合要加上 logo 或印在容易弄髒之處的 QR Code。</li>
</ul>
<p>修正等級越高，需要的方塊就越多，QR Code 的圖案看起來也越密集。</p>

<h2>QR Code 可以儲存哪些內容？</h2>
<ul>
  <li>網站、網路商店或表單的連結。</li>
  <li>WiFi 資料，讓訪客不必輸入密碼就能連線。請參閱 <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a> 指南。</li>
  <li>數位名片（vCard）、電子郵件、簡訊和 WhatsApp 聊天。</li>
  <li>地圖位置和活動行程。</li>
</ul>

<h2>靜態與動態 QR Code</h2>
<p>直接由資料產生的 QR Code 稱為<strong>靜態 QR Code</strong>：內容嵌入在圖片中，無法更改，但也永遠不會過期。<strong>動態</strong> QR Code 則包含某項服務提供的短連結，再導向您的目的地；目的地可以更換，但如果該服務停止，QR Code 就會失效。對大多數需求來說，靜態 QR Code 已經足夠，長期使用也更安全。</p>

<p>想試試看嗎？現在就製作<a href="/?type=qrcode">免費 QR Code</a>，或閱讀<a href="/artikel/cara-membuat-qr-code-gratis">3 個步驟製作 QR Code 的方法</a>。</p>
`
};
