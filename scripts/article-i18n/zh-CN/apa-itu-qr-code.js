// apa-itu-qr-code
module.exports = {
  title: "什么是 QR Code？它是如何工作的？",
  desc: "QR Code 可以保存链接、文字乃至 WiFi 信息，即使部分损坏也能读取。下面介绍它的工作原理和优势。",
  tags: ["基础知识", "QR Code"],
  coverCaption: "用手机相机即可直接扫描 QR Code。",
  inlineCaption: "每个 QR Code 都由黑白相间的小方块组成。",
  faq: [
    ["QR Code 会过期吗？", "静态 QR Code 永远不会过期，因为数据直接嵌入在图片中。动态 QR Code 则可能在链接服务商停止服务或订阅到期后失效。"],
    ["QR Code 可以保存多少数据？", "最大版本的 QR Code 最多可保存 7,089 个数字，约合 2,953 字节。不过，数据越少，QR Code 越容易扫描。"],
    ["QR Code 部分损坏后还能读取吗？", "可以。借助纠错功能，即使约 7% 至 30% 的部分受损，QR Code 仍能读取，具体取决于所用的纠错等级 L、M、Q 或 H。"]
  ],
  body: `
<p>QR Code（Quick Response Code，快速响应码）是一种正方形的二维条形码，由黑白相间的小方块组成。线性条形码只能保存十几位数字，而 QR Code 则可以保存网址链接、长文本、电话号码、联系人，乃至 WiFi 网络信息。</p>
<p>QR Code 由日本公司 Denso Wave 于 1994 年开发，最初用于在工厂中追踪汽车零部件。如今，从电子支付到餐厅菜单，QR Code 随处可见，因为用手机相机就能直接扫描。</p>

<h2>QR Code 的组成部分</h2>
<ul>
  <li><strong>角落的三个大方块</strong>（finder pattern，定位图案）：帮助相机找到 QR Code 并判断其方向，因此即使倾斜或倒置扫描也能读取。</li>
  <li><strong>校正图案</strong>（alignment pattern）：小方块，帮助读取弯曲或从侧面看到的 QR Code。</li>
  <li><strong>数据区</strong>：包含您所保存信息的小方块。</li>
  <li><strong>静区</strong>（quiet zone）：QR Code 周围的空白区域，便于与背景区分开。</li>
</ul>

<h2>能保存多少数据？</h2>
<p>QR Code 共有 40 个尺寸版本。最大版本最多可保存 7,089 个数字，约合 2,953 字节数据。实际使用中，保存的数据越少，方块就越大，QR Code 也越容易扫描。因此，短链接比很长的链接更好。</p>

<h2>即使损坏也能读取</h2>
<p>QR Code 采用纠错（error correction）技术，共有四个等级：</p>
<ul>
  <li><strong>L</strong>：QR Code 约 7% 受损时，数据仍可恢复。</li>
  <li><strong>M</strong>：约 15%。这是常用且均衡的选择。</li>
  <li><strong>Q</strong>：约 25%。</li>
  <li><strong>H</strong>：约 30%，适合要添加 logo 或印在容易弄脏之处的 QR Code。</li>
</ul>
<p>纠错等级越高，所需的方块越多，QR Code 的图案看起来也越密集。</p>

<h2>QR Code 可以保存哪些内容？</h2>
<ul>
  <li>网站、网店或表单的链接。</li>
  <li>WiFi 信息，让访客无需输入密码即可连接。请参阅 <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a> 指南。</li>
  <li>电子名片（vCard）、电子邮件、短信和 WhatsApp 聊天。</li>
  <li>地图位置和活动日程。</li>
</ul>

<h2>静态与动态 QR Code</h2>
<p>直接根据数据生成的 QR Code 称为<strong>静态 QR Code</strong>：内容嵌入在图片中，无法修改，但也永远不会过期。<strong>动态</strong> QR Code 包含某个服务提供的短链接，再跳转到您的目标地址；目标地址可以更换，但如果该服务停止运营，QR Code 就会失效。对于大多数需求，静态 QR Code 已经足够，而且长期使用更安全。</p>

<p>想试试吗？现在就制作<a href="/?type=qrcode">免费 QR Code</a>，或阅读<a href="/artikel/cara-membuat-qr-code-gratis">3 步制作 QR Code 的方法</a>。</p>
`
};
