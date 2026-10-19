// apa-itu-qr-code
module.exports = {
  title: "What Is a QR Code and How Does It Work?",
  desc: "A QR Code can store links, text, and even WiFi details, and it stays readable even when partly damaged. Here is how it works and what makes it useful.",
  tags: ["Basics", "QR Code"],
  coverCaption: "A QR Code can be scanned directly with a phone camera.",
  inlineCaption: "Every QR Code is made up of small black and white squares.",
  faq: [
    ["Can a QR Code expire?", "A static QR Code never expires because its data is embedded directly in the image. A dynamic QR Code can stop working if the service providing its link shuts down or the subscription ends."],
    ["How much data can a QR Code store?", "The largest QR Code version can store up to 7,089 digits or about 2,953 bytes. However, the less data it holds, the easier the QR Code is to scan."],
    ["Can a QR Code still be read if it is partly damaged?", "Yes. Thanks to error correction, a QR Code stays readable even when about 7% to 30% of it is damaged, depending on the correction level used: L, M, Q, or H."]
  ],
  body: `
<p>A QR Code (Quick Response Code) is a square 2D barcode made up of small black and white squares. Unlike line barcodes, which store only a dozen or so digits, a QR Code can store website links, long text, phone numbers, contacts, and even WiFi network details.</p>
<p>The QR Code was developed in 1994 by Denso Wave, a Japanese company, to track vehicle parts in factories. Today QR Codes are used everywhere, from digital payments to restaurant menus, because they can be scanned directly with a phone camera.</p>

<h2>Parts of a QR Code</h2>
<ul>
  <li><strong>Three large squares in the corners</strong> (finder patterns): help the camera locate the QR Code and determine its orientation, so the QR Code can still be read when scanned at an angle or upside down.</li>
  <li><strong>Alignment pattern</strong>: a small square that helps read QR Codes that are bent or viewed from an angle.</li>
  <li><strong>Data area</strong>: the small squares that contain the information you store.</li>
  <li><strong>Quiet zone</strong>: the empty space around the QR Code that makes it easy to separate from the background.</li>
</ul>

<h2>How much data can it store?</h2>
<p>QR Codes come in 40 size versions. The largest version can store up to 7,089 digits or about 2,953 bytes of data. In practice, the less data you store, the larger the squares and the easier the QR Code is to scan. That is why a short link is better than a very long one.</p>

<h2>Still readable when damaged</h2>
<p>QR Codes use error correction. There are four levels:</p>
<ul>
  <li><strong>L</strong>: data can still be recovered if about 7% of the QR Code is damaged.</li>
  <li><strong>M</strong>: about 15%. This is the common, balanced choice.</li>
  <li><strong>Q</strong>: about 25%.</li>
  <li><strong>H</strong>: about 30%, suitable for QR Codes that will have a logo added or be printed in places that get dirty easily.</li>
</ul>
<p>The higher the correction level, the more squares are needed, so the QR Code pattern looks denser.</p>

<h2>What can you store in a QR Code?</h2>
<ul>
  <li>Links to websites, online stores, or forms.</li>
  <li>WiFi details, so guests can connect without typing a password. See the <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a> guide.</li>
  <li>Digital business cards (vCard), email, SMS, and WhatsApp chats.</li>
  <li>Map locations and event schedules.</li>
</ul>

<h2>Static and dynamic QR Codes</h2>
<p>A QR Code created directly from data is called a <strong>static QR Code</strong>: its content is embedded in the image and cannot be changed, but it also never expires. A <strong>dynamic</strong> QR Code contains a short link owned by a service, which then redirects to your destination; the destination can be changed, but the QR Code will stop working if that service shuts down. For most needs, a static QR Code is enough and safer in the long run.</p>

<p>Want to try it? Create a <a href="/?type=qrcode">free QR Code</a> now, or read <a href="/artikel/cara-membuat-qr-code-gratis">how to create a QR Code in 3 steps</a>.</p>
`
};
