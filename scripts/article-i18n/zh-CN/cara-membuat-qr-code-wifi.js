// cara-membuat-qr-code-wifi
module.exports = {
  title: "如何制作 WiFi QR Code，让访客无需输入密码",
  desc: "访客只需扫描 QR Code 即可连接 WiFi，适用于咖啡馆、办公室、民宿和家庭。下面介绍制作与张贴的方法。",
  tags: ["指南", "QR Code"],
  coverCaption: "路由器的 WiFi 信息可以保存在一个 QR Code 中。",
  inlineCaption: "咖啡馆的顾客无需输入密码即可直接连接。",
  faq: [
    ["所有手机都能扫描 WiFi QR Code 吗？", "iOS 11 及以上版本 iPhone 的自带相机，以及大多数 Android 10 及以上版本的手机都可以直接读取。较旧的手机可能需要 QR 扫描应用。"],
    ["WiFi QR Code 安全吗？", "任何扫描该 QR Code 的人都能连接到您的 WiFi。因此，请使用访客网络，不要在公共场所张贴私人网络的 QR Code。"],
    ["更换 WiFi 密码后该怎么办？", "请重新制作并打印 WiFi QR Code，因为旧的 QR Code 仍包含旧密码。"]
  ],
  body: `
<p>向访客逐个字母地报出很长的 WiFi 密码往往很麻烦，尤其是其中还夹杂着大写字母、数字和符号时。有了 <strong>WiFi QR Code</strong>，访客只需将手机相机对准 QR Code，就能立即连接。</p>

<h2>WiFi QR Code 的工作原理</h2>
<p>WiFi QR Code 以手机能识别的特定格式保存网络名称（SSID）、加密类型和密码，例如 <code>WIFI:T:WPA;S:NamaJaringan;P:Sandi;;</code>。iPhone 的自带相机（iOS 11 及以上）和大多数 Android 手机（Android 10 及以上）都可以直接读取，无需额外应用。</p>

<h2>制作步骤</h2>
<ol>
  <li>打开 <a href="/?type=qrcode">QR Code 生成器</a>，在“填写数据”中选择 <strong>WiFi</strong> 选项卡。</li>
  <li>输入<strong>网络名称</strong>，与 WiFi 列表中显示的完全一致，包括大小写。</li>
  <li>输入<strong>密码</strong>，然后选择加密类型。大多数家用和办公路由器使用 WPA/WPA2/WPA3。</li>
  <li>如果您的 WiFi 名称不在列表中显示，请勾选<strong>隐藏网络</strong>。</li>
  <li>添加写有“SCAN WIFI”等字样的边框，让访客明白它的用途，然后下载 PNG。</li>
</ol>

<h2>张贴在哪里？</h2>
<ul>
  <li>咖啡馆或餐厅桌上的小卡片。</li>
  <li>客厅、前台或办公室会议室的墙上。</li>
  <li>民宿客房，贴在门边或电视旁。</li>
  <li>家中路由器的底部，方便家人连接新设备。</li>
</ul>

<h2>安全提示</h2>
<ul>
  <li>如果路由器支持，请使用<strong>访客网络</strong>（guest network），这样访客就不会接入与办公电脑相同的网络。</li>
  <li>如果更换了 WiFi 密码，请重新制作并打印 QR Code，因为旧的 QR Code 仍包含旧密码。</li>
  <li>不要在任何人都能拍照的公共场所张贴私人网络的 WiFi QR Code。</li>
</ul>

<h2>如果 QR Code 无法连接</h2>
<p>请再次检查网络名称和密码的拼写，因为错一个字母就会导致手机连接失败。同时确保所选的加密类型与路由器设置一致。其他扫描问题，请阅读<a href="/artikel/barcode-tidak-bisa-dipindai">条形码无法扫描的原因</a>。</p>
`
};
