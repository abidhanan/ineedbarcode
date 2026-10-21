// 隱私權政策 & 使用條款（繁體中文，台灣）。
module.exports = {
  labels: {
    privacy: "隱私權政策",
    terms: "使用條款",
    effective: "生效日期：{date}"
  },
  privacy: {
    title: "隱私權政策",
    desc: "您在產生條碼和 QR Code 時，I Need Barcode 會處理哪些資料，以及我們如何處理這些資料。",
    body: `
<p>I Need Barcode（ineedbarcode.com）是由 Abid Hanan Wicaksono 經營的免費條碼和 QR Code 產生器。本政策說明您使用本網站時我們會處理哪些資料，以及我們如何處理這些資料。我們刻意盡可能少收集資料：您不需要註冊、登入，也不需要提供姓名和電子郵件地址即可使用本服務。</p>
<h2>我們處理的資料</h2>
<ul>
<li><strong>條碼內容。</strong>您輸入的文字、連結、WiFi 資訊、聯絡人及其他資料，皆直接在您的瀏覽器中處理。條碼圖片在您的裝置上產生，不會傳送到我們的伺服器，一次產生多個條碼時亦同。</li>
<li><strong>位置。</strong>「使用我的位置」按鈕僅在您於瀏覽器中允許後，才會要求取得裝置位置。座標只會填入表單欄位，不會傳送給我們。</li>
<li><strong>大致所在國家。</strong>為了選擇初始語言，本網站可能會從傳送到我們伺服器的請求中讀取您的大致所在國家。此資訊不會儲存在資料庫中。</li>
<li><strong>技術資料。</strong>與幾乎所有網站一樣，我們的主機代管服務供應商（Vercel）會基於安全與營運目的，記錄請求的技術資料，例如 IP 位址、瀏覽器類型和存取時間。這些紀錄僅依 Vercel 的政策暫時保存。</li>
<li><strong>文章統計。</strong>若已啟用，瀏覽、按讚和分享次數僅以每篇文章的總數形式儲存，不含任何可識別您身分的資料。</li>
</ul>
<h2>Cookie 與瀏覽器儲存空間</h2>
<ul>
<li><strong>inbLang</strong>：記住您在此裝置上選擇的語言（localStorage）。</li>
<li><strong>inbCountry</strong>：在一次工作階段中儲存大致所在國家，不必重新判斷語言（sessionStorage）。</li>
<li><strong>其他本機儲存空間</strong>（localStorage 和 sessionStorage）：標記您按讚過的文章，並避免同一次造訪被重複計算。這些資料會保留在您的裝置上。</li>
<li><strong>第三方分析 Cookie</strong>，來自 Google Analytics 和 Microsoft Clarity，詳見下文。</li>
</ul>
<h2>分析</h2>
<p>我們使用分析工具來了解網站的使用情形並加以改善。這些工具僅在您開始與頁面互動後才會載入；若您的瀏覽器傳送 Global Privacy Control 或 Do Not Track 訊號，則完全不會載入。條碼內容和表單內容絕不會傳送給分析工具；記錄的僅有所選條碼類型、點擊下載按鈕等事件。</p>
<ul>
<li><strong>Google Analytics 4</strong>（Google LLC）：使用 Cookie 衡量瀏覽的頁面、大致所在國家、裝置類型及上述事件。廣告儲存和 Google Signals 已停用。資料由 Google 依照 <a href="https://policies.google.com/privacy">Google 隱私權政策</a>處理。</li>
<li><strong>Microsoft Clarity</strong>：記錄點擊和捲動等互動，用於產生熱圖和工作階段錄製，並會遮蔽輸入欄位的內容。資料由 Microsoft 依照 <a href="https://privacy.microsoft.com/privacystatement">Microsoft 隱私權聲明</a>處理。</li>
</ul>
<p>您可以透過啟用 Global Privacy Control 或 Do Not Track、在瀏覽器設定中封鎖第三方 Cookie、使用追蹤封鎖工具，或安裝 <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a> 來拒絕分析。網站仍可完整使用。</p>
<h2>第三方服務</h2>
<ul>
<li><strong>Vercel Inc.</strong> 提供主機代管服務。其伺服器可能位於印尼境外。</li>
<li><strong>Google Fonts</strong> 用於顯示部分文字（例如阿拉伯文、泰文或日文）。載入字型時，Google 可以看到您的 IP 位址。</li>
<li><strong>分享按鈕</strong>（WhatsApp、Facebook、X、LinkedIn、Telegram）和社群媒體連結僅在您點擊時才會連線至這些服務。</li>
</ul>
<h2>安全與資料分享</h2>
<p>連線至本網站一律使用 HTTPS。我們不會出售、出租或交易個人資料。資料僅在經營網站所必要的範圍內與上述服務供應商分享，或在法律要求時提供。</p>
<h2>兒童</h2>
<p>本服務並非以未滿 13 歲的兒童為對象，我們也不會蓄意收集兒童的個人資料。</p>
<h2>您的權利</h2>
<p>依據印尼《2022 年第 27 號個人資料保護法》，您有權要求查閱、更正或刪除您的個人資料，並有權撤回對處理的同意。由於我們幾乎不儲存可識別您身分的資料，大部分請求只要清除瀏覽器中的 Cookie 和網站資料即可解決。對於由 Google 或 Microsoft 處理的資料，您也可以使用其服務中的隱私權設定。如有其他請求，請與我們聯絡。</p>
<h2>政策變更</h2>
<p>本政策可能隨時更新。變更自於本頁面發布時起生效，生效日期顯示於頁面上方。</p>
<h2>聯絡我們</h2>
<p>有關本政策的問題，可透過每個頁面底部的聯絡連結或透過 <a href="https://abidhanan.my.id">abidhanan.my.id</a> 傳送。另請參閱我們的<a href="/syarat-ketentuan">使用條款</a>。</p>
`
  },
  terms: {
    title: "使用條款",
    desc: "免費條碼和 QR Code 產生器 I Need Barcode 的使用條款與條件。",
    body: `
<p>使用 I Need Barcode（ineedbarcode.com）即表示您同意下列條款與條件。若您不同意，請勿使用本服務。</p>
<h2>關於本服務</h2>
<p>I Need Barcode 是一款可直接在瀏覽器中產生條碼和 QR Code 圖片的免費工具。I Need Barcode 與 GS1 或任何條碼標準擁有者均無關聯，未獲其背書，也未與其合作。QR Code 是 DENSO WAVE INCORPORATED 的註冊商標。所有商標均為其各自擁有者所有。</p>
<h2>允許的用途</h2>
<ul>
<li>您產生的條碼圖片可用於個人或商業用途，例如用於產品、包裝、標籤和印刷品，無浮水印且免費。</li>
<li>我們僅產生條碼圖片，不核發條碼號碼。零售商品的 EAN、UPC 或 GTIN 號碼必須透過 GS1 正式註冊。</li>
<li>也請遵守條碼使用場所的相關規定，例如商店、電商平台或物流服務的要求。</li>
</ul>
<h2>您的責任</h2>
<p>您須對輸入條碼的資料以及使用條碼的方式負完全責任。在大量印刷前，請務必使用多種掃描器或相機 App 測試條碼，並確認其尺寸、顏色和對比度符合您的需求。</p>
<h2>禁止行為</h2>
<ul>
<li>產生導向詐騙、網路釣魚、惡意軟體或違法內容的條碼或 QR Code。</li>
<li>使用條碼偽造他人的產品、文件、票券或號碼。</li>
<li>使用機器人、指令碼或自動化程式大量存取本服務。</li>
<li>干擾、使負載過重或試圖破壞我們伺服器和服務的安全。</li>
</ul>
<h2>服務可用性</h2>
<p>本服務免費提供，可能隨時變更、限制或終止，恕不另行通知。</p>
<h2>免責聲明</h2>
<p>本服務係依「現狀」及「現有」基礎提供，不提供任何形式的保證，包括對服務永遠正常運作、沒有錯誤，或所產生的每個條碼都能被所有裝置掃描並適合特定用途的保證。</p>
<h2>責任限制</h2>
<p>在法律允許的範圍內，對於因使用本服務或因您產生的條碼而產生的任何直接或間接損失，包括重新印刷的費用以及因條碼無法讀取而造成的損失，我們概不負責。</p>
<h2>第三方連結</h2>
<p>本網站包含連往第三方網站和服務的連結。我們不對這些網站的內容或政策負責。</p>
<h2>條款變更</h2>
<p>本條款與條件可能隨時更新。變更發布後，若您繼續使用本服務，即視為您同意最新版本。</p>
<h2>準據法</h2>
<p>本條款與條件以印尼共和國法律為準據法。</p>
<h2>聯絡我們</h2>
<p>問題和檢舉可透過每個頁面底部的聯絡連結或透過 <a href="https://abidhanan.my.id">abidhanan.my.id</a> 傳送。另請參閱我們的<a href="/kebijakan-privasi">隱私權政策</a>。</p>
`
  }
};
