// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "一维与二维条形码的区别：您需要哪一种？",
  desc: "线性条形码和 QR Code 都是条形码，但用途不同。比较它们的容量、扫描方式和使用示例。",
  tags: ["基础知识", "条形码"],
  coverCaption: "仓库中的手持扫描器可读取一维和二维条形码。",
  inlineCaption: "快递面单通常使用线性条形码。",
  faq: [
    ["收银扫描器能读取 QR Code 吗？", "并非都能。一维激光扫描器只能读取线性条形码。读取 QR Code 需要基于相机的二维扫描器或手机相机。"],
    ["哪种条形码最小？", "Data Matrix 属于可以印得非常小的二维条形码，因此常用于电子元件、医疗器械和药品标签。"],
    ["零售商品可以用 QR Code 代替 EAN-13 吗？", "要在零售店销售，产品仍然需要已注册的 EAN-13 或 UPC。QR Code 可以作为补充加在包装上，例如用于产品信息或促销。"]
  ],
  body: `
<p>制作条形码时，通常首先会遇到的问题是：用线性条形码还是 QR Code？两者都叫条形码，但存储数据的方式不同，因此用途也不同。</p>

<h2>一维（线性）条形码</h2>
<p>一维条形码是由竖直线条组成的条形码。数据沿一个方向存储，即从左到右。最常见的例子是商品包装上的 <a href="/?type=ean13">EAN-13</a> 和快递面单上的 <a href="/?type=code128">Code 128</a>。</p>
<ul>
  <li>容量小，通常为十几到几十个字符。</li>
  <li>可用价格低廉、速度极快的收银激光扫描器读取。</li>
  <li>适用于商品编码、序列号和快递单号。</li>
</ul>

<h2>二维条形码</h2>
<p>二维条形码在两个方向（横向和纵向）上存储数据，因此容量大得多。例如 <a href="/?type=qrcode">QR Code</a>、<a href="/?type=datamatrix">Data Matrix</a>、<a href="/?type=pdf417">PDF417</a> 和 <a href="/?type=azteccode">Aztec</a>。</p>
<ul>
  <li>容量大，从几十到数千个字符。</li>
  <li>可用手机相机从各个方向扫描。</li>
  <li>具有纠错功能，即使部分损坏也能读取。</li>
  <li>可以做得非常小，例如电子元件上的 Data Matrix。</li>
</ul>

<h2>简要对比</h2>
<table>
  <thead><tr><th></th><th>一维条形码</th><th>二维条形码</th></tr></thead>
  <tbody>
    <tr><td>形态</td><td>竖直线条</td><td>正方形中的方块/点</td></tr>
    <tr><td>容量</td><td>小</td><td>大</td></tr>
    <tr><td>扫描设备</td><td>激光扫描器或相机</td><td>相机或二维扫描器</td></tr>
    <tr><td>抗损能力</td><td>有限</td><td>具备纠错功能</td></tr>
    <tr><td>示例</td><td>EAN-13、UPC-A、Code 128</td><td>QR Code、Data Matrix、PDF417</td></tr>
  </tbody>
</table>

<h2>什么时候用哪一种？</h2>
<ul>
  <li><strong>在商店或便利店销售的商品</strong>：使用 GS1 发放的官方 EAN-13。请参阅<a href="/artikel/cara-mendapatkan-barcode-ean-13">如何获取 EAN-13 条形码</a>。</li>
  <li><strong>仓库、货架或物流标签</strong>：Code 128 是常见选择，因为它紧凑，并支持字母和数字。</li>
  <li><strong>面向顾客的链接、菜单、WiFi 或联系人</strong>：QR Code，因为可以直接用手机相机扫描。</li>
  <li><strong>非常小的标签</strong>：Data Matrix。</li>
  <li><strong>身份证件、登机牌或文件</strong>：PDF417 或 Aztec。</li>
</ul>
<p>以上所有类型都可以在 <a href="/">I Need Barcode</a> 上免费制作。如果还拿不定主意，不妨从面向顾客的 QR Code 和用于内部的 Code 128 开始。</p>
`
};
