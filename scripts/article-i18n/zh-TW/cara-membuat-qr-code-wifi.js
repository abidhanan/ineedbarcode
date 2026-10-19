// cara-membuat-qr-code-wifi
module.exports = {
  title: "如何製作 WiFi QR Code，讓訪客不必輸入密碼",
  desc: "訪客只要掃描 QR Code 就能連上 WiFi，適合咖啡廳、辦公室、民宿和住家。以下介紹製作與張貼的方法。",
  tags: ["指南", "QR Code"],
  coverCaption: "路由器的 WiFi 資料可以儲存在一個 QR Code 中。",
  inlineCaption: "咖啡廳的客人不必輸入密碼就能直接連線。",
  faq: [
    ["所有手機都能掃描 WiFi QR Code 嗎？", "iOS 11 以上 iPhone 的內建相機，以及大多數 Android 10 以上的手機都能直接讀取。較舊的手機可能需要 QR 掃描 App。"],
    ["WiFi QR Code 安全嗎？", "任何掃描該 QR Code 的人都能連上您的 WiFi。因此，請使用訪客網路，不要在公共場所張貼私人網路的 QR Code。"],
    ["更換 WiFi 密碼後該怎麼辦？", "請重新製作並列印 WiFi QR Code，因為舊的 QR Code 仍包含舊密碼。"]
  ],
  body: `
<p>向訪客逐字唸出很長的 WiFi 密碼常常很麻煩，尤其是其中還有大寫字母、數字和符號時。有了 <strong>WiFi QR Code</strong>，訪客只要將手機相機對準 QR Code，就能立即連線。</p>

<h2>WiFi QR Code 的運作原理</h2>
<p>WiFi QR Code 以手機能辨識的特殊格式儲存網路名稱（SSID）、加密類型和密碼，例如 <code>WIFI:T:WPA;S:NamaJaringan;P:Sandi;;</code>。iPhone 的內建相機（iOS 11 以上）和大多數 Android 手機（Android 10 以上）都能直接讀取，不需要額外的 App。</p>

<h2>製作步驟</h2>
<ol>
  <li>開啟 <a href="/?type=qrcode">QR Code 產生器</a>，在「填入資料」中選擇 <strong>WiFi</strong> 分頁。</li>
  <li>輸入<strong>網路名稱</strong>，必須與 WiFi 清單中顯示的完全相同，包括大小寫。</li>
  <li>輸入<strong>密碼</strong>，再選擇加密類型。大多數家用和辦公室路由器使用 WPA/WPA2/WPA3。</li>
  <li>如果您的 WiFi 名稱不會顯示在清單中，請勾選<strong>隱藏網路</strong>。</li>
  <li>加上寫有「SCAN WIFI」等字樣的外框，讓訪客知道它的用途，然後下載 PNG。</li>
</ol>

<h2>要張貼在哪裡？</h2>
<ul>
  <li>咖啡廳或餐廳桌上的小卡片。</li>
  <li>客廳、櫃台或辦公室會議室的牆上。</li>
  <li>民宿房間，貼在門邊或電視旁。</li>
  <li>家中路由器的底部，方便家人連接新裝置。</li>
</ul>

<h2>安全提醒</h2>
<ul>
  <li>如果路由器支援，請使用<strong>訪客網路</strong>（guest network），這樣訪客就不會進入與辦公室電腦相同的網路。</li>
  <li>如果更換了 WiFi 密碼，請重新製作並列印 QR Code，因為舊的 QR Code 會包含舊密碼。</li>
  <li>不要在任何人都能拍照的公共場所張貼私人網路的 WiFi QR Code。</li>
</ul>

<h2>如果 QR Code 無法連線</h2>
<p>請再次檢查網路名稱和密碼的拼寫，因為只要錯一個字母，手機就會連線失敗。也請確認所選的加密類型與路由器設定相符。其他掃描問題，請閱讀<a href="/artikel/barcode-tidak-bisa-dipindai">條碼無法掃描的原因</a>。</p>
`
};
