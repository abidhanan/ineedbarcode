// 隐私政策 & 条款与条件（简体中文）。
module.exports = {
  labels: {
    privacy: "隐私政策",
    terms: "条款与条件",
    effective: "生效日期：{date}"
  },
  privacy: {
    title: "隐私政策",
    desc: "您在生成条形码和 QR Code 时，I Need Barcode 会处理哪些数据，以及我们如何处理这些数据。",
    body: `
<p>I Need Barcode（ineedbarcode.com）是由 Abid Hanan Wicaksono 运营的免费条形码和 QR Code 生成器。本政策说明您使用本网站时我们会处理哪些数据，以及我们如何处理这些数据。我们有意尽可能少地收集数据：您无需注册、登录，也无需提供姓名和电子邮件地址即可使用本服务。</p>
<h2>我们处理的数据</h2>
<ul>
<li><strong>条形码内容。</strong>您输入的文本、链接、WiFi 信息、联系人及其他数据均直接在您的浏览器中处理。条形码图片在您的设备上生成，不会发送到我们的服务器，批量生成多个条形码时也是如此。</li>
<li><strong>位置。</strong>“使用我的位置”按钮仅在您于浏览器中授权后才会请求设备位置。坐标仅会填入表单字段，不会发送给我们。</li>
<li><strong>大致国家/地区。</strong>为选择初始语言，本网站可能会从发送到我们服务器的请求中读取您的大致国家/地区。此信息不会存储在数据库中。</li>
<li><strong>技术数据。</strong>与几乎所有网站一样，我们的托管服务提供商（Vercel）会出于安全和运营目的记录请求的技术数据，例如 IP 地址、浏览器类型和访问时间。这些记录仅根据 Vercel 的政策临时保存。</li>
<li><strong>文章统计。</strong>如已启用，浏览、点赞和分享次数仅以每篇文章的总数形式存储，不包含任何可识别您身份的数据。</li>
</ul>
<h2>Cookie 和浏览器存储</h2>
<ul>
<li><strong>inbLang</strong>：记住您在此设备上选择的语言（localStorage）。</li>
<li><strong>inbCountry</strong>：在一次会话期间保存大致国家/地区，无需重新判断语言（sessionStorage）。</li>
<li><strong>其他本地存储</strong>（localStorage 和 sessionStorage）：标记您点赞过的文章，并防止同一次访问被重复计算。这些数据保留在您的设备上。</li>
<li><strong>第三方分析 Cookie</strong>，来自 Google Analytics 和 Microsoft Clarity，详见下文。</li>
</ul>
<h2>分析</h2>
<p>我们使用分析工具来了解网站的使用情况并加以改进。这些工具仅在您开始与页面互动后才会加载；如果您的浏览器发送 Global Privacy Control 或 Do Not Track 信号，则完全不会加载。条形码内容和表单内容绝不会发送给分析工具；记录的仅为所选条形码类型、点击下载按钮等事件。</p>
<ul>
<li><strong>Google Analytics 4</strong>（Google LLC）：使用 Cookie 衡量浏览的页面、大致国家/地区、设备类型以及上述事件。广告存储和 Google Signals 已停用。数据由 Google 按照 <a href="https://policies.google.com/privacy">Google 隐私权政策</a>进行处理。</li>
<li><strong>Microsoft Clarity</strong>：记录点击和滚动等互动，用于生成热图和会话录制，并会遮蔽输入字段的内容。数据由 Microsoft 按照 <a href="https://privacy.microsoft.com/privacystatement">Microsoft 隐私声明</a>进行处理。</li>
</ul>
<p>您可以通过启用 Global Privacy Control 或 Do Not Track、在浏览器设置中阻止第三方 Cookie、使用跟踪拦截工具，或安装 <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a> 来拒绝分析。网站仍可完整使用。</p>
<h2>第三方服务</h2>
<ul>
<li><strong>Vercel Inc.</strong> 提供托管服务。其服务器可能位于印度尼西亚境外。</li>
<li><strong>Google Fonts</strong> 用于显示部分文字（例如阿拉伯文、泰文或日文）。加载字体时，Google 可以看到您的 IP 地址。</li>
<li><strong>分享按钮</strong>（WhatsApp、Facebook、X、LinkedIn、Telegram）和社交媒体链接仅在您点击时才会连接相应服务。</li>
</ul>
<h2>安全与数据共享</h2>
<p>与本网站的所有连接均使用 HTTPS。我们不出售、出租或交易个人数据。数据仅在运营网站所必需的范围内与上述服务提供商共享，或在法律要求时提供。</p>
<h2>儿童</h2>
<p>本服务不面向 13 岁以下的儿童，我们也不会故意收集儿童的个人数据。</p>
<h2>您的权利</h2>
<p>根据印度尼西亚《2022 年第 27 号个人数据保护法》，您有权要求访问、更正或删除您的个人数据，并有权撤回对处理的同意。由于我们几乎不存储可识别您身份的数据，大多数请求只需清除浏览器中的 Cookie 和网站数据即可解决。对于由 Google 或 Microsoft 处理的数据，您也可以使用其服务中的隐私设置。如有其他请求，请与我们联系。</p>
<h2>政策变更</h2>
<p>本政策可能随时更新。变更自在本页面发布之时起生效，生效日期显示在页面顶部。</p>
<h2>联系我们</h2>
<p>有关本政策的问题，可通过每个页面底部的联系链接或通过 <a href="https://abidhanan.my.id">abidhanan.my.id</a> 发送。另请阅读我们的<a href="/syarat-ketentuan">条款与条件</a>。</p>
`
  },
  terms: {
    title: "条款与条件",
    desc: "免费条形码和 QR Code 生成器 I Need Barcode 的使用条款与条件。",
    body: `
<p>使用 I Need Barcode（ineedbarcode.com）即表示您同意以下条款与条件。如您不同意，请勿使用本服务。</p>
<h2>关于本服务</h2>
<p>I Need Barcode 是一款可直接在浏览器中生成条形码和 QR Code 图片的免费工具。I Need Barcode 与 GS1 或任何条形码标准所有者均无关联，未获其认可，也未与其合作。QR Code 是 DENSO WAVE INCORPORATED 的注册商标。所有商标均归其各自所有者所有。</p>
<h2>允许的用途</h2>
<ul>
<li>您生成的条形码图片可用于个人或商业用途，例如用于产品、包装、标签和印刷品，无水印且免费。</li>
<li>我们仅生成条形码图片，不发放条形码编号。零售产品的 EAN、UPC 或 GTIN 编号必须通过 GS1 正式注册。</li>
<li>还请遵守条形码使用场所的相关规定，例如商店、电商平台或物流服务的要求。</li>
</ul>
<h2>您的责任</h2>
<p>您对输入条形码的数据以及使用条形码的方式承担全部责任。在大批量印刷前，请务必使用多种扫描器或相机应用测试条形码，并确保其尺寸、颜色和对比度符合您的需求。</p>
<h2>禁止行为</h2>
<ul>
<li>生成指向欺诈、网络钓鱼、恶意软件或违法内容的条形码或 QR Code。</li>
<li>使用条形码伪造他人的产品、文件、票券或编号。</li>
<li>使用机器人、脚本或自动化程序大量访问本服务。</li>
<li>干扰、使负载过重或试图破坏我们服务器和服务的安全。</li>
</ul>
<h2>服务可用性</h2>
<p>本服务免费提供，可能随时变更、限制或终止，恕不另行通知。</p>
<h2>免责声明</h2>
<p>本服务按“现状”和“现有”基础提供，不作任何形式的保证，包括对服务始终正常运行、没有错误，或所生成的每个条形码都能被所有设备扫描并适合特定用途的保证。</p>
<h2>责任限制</h2>
<p>在法律允许的范围内，对于因使用本服务或因您生成的条形码而产生的任何直接或间接损失，包括重新印刷的费用以及因条形码无法读取而造成的损失，我们概不负责。</p>
<h2>第三方链接</h2>
<p>本网站包含指向第三方网站和服务的链接。我们不对这些网站的内容或政策负责。</p>
<h2>条款变更</h2>
<p>本条款与条件可能随时更新。变更发布后，如您继续使用本服务，即视为您同意最新版本。</p>
<h2>适用法律</h2>
<p>本条款与条件受印度尼西亚共和国法律管辖。</p>
<h2>联系我们</h2>
<p>问题和举报可通过每个页面底部的联系链接或通过 <a href="https://abidhanan.my.id">abidhanan.my.id</a> 发送。另请阅读我们的<a href="/kebijakan-privasi">隐私政策</a>。</p>
`
  }
};
