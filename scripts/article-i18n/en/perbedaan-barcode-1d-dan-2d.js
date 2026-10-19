// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "1D vs 2D Barcodes: Which One Do You Need?",
  desc: "Line barcodes and QR Codes are both barcodes, but they serve different purposes. Compare their capacity, how they are scanned, and examples of their use.",
  tags: ["Basics", "Barcode"],
  coverCaption: "A handheld scanner in a warehouse reads both 1D and 2D barcodes.",
  inlineCaption: "Shipping labels usually use line barcodes.",
  faq: [
    ["Can a checkout scanner read QR Codes?", "Not all of them. 1D laser scanners only read line barcodes. QR Codes require a camera-based 2D scanner or a phone camera."],
    ["Which barcode is the smallest?", "Data Matrix is a 2D barcode that can be printed very small, so it is often used on electronic components, medical devices, and medicine labels."],
    ["Can I use a QR Code instead of EAN-13 on retail products?", "To be sold in retail stores, products still need a registered EAN-13 or UPC. A QR Code can be added to the packaging as a complement, for example for product information or promotions."]
  ],
  body: `
<p>When creating a barcode, the first question that usually comes up is: should I use a line barcode or a QR Code? Both are called barcodes, but they store data differently, so their uses differ too.</p>

<h2>1D (linear) barcodes</h2>
<p>A 1D barcode is a barcode made of vertical lines. Data is stored in one direction, from left to right. The best-known examples are <a href="/?type=ean13">EAN-13</a> on product packaging and <a href="/?type=code128">Code 128</a> on shipping labels.</p>
<ul>
  <li>Small capacity, usually a dozen to a few dozen characters.</li>
  <li>Can be read by inexpensive, very fast checkout laser scanners.</li>
  <li>Suitable for product codes, serial numbers, and tracking numbers.</li>
</ul>

<h2>2D barcodes</h2>
<p>A 2D barcode stores data in two directions, horizontally and vertically, so it can hold much more. Examples include <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, and <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Large capacity, from dozens to thousands of characters.</li>
  <li>Can be scanned by a phone camera from various directions.</li>
  <li>Has error correction, so it remains readable even when partly damaged.</li>
  <li>Can be made very small, for example Data Matrix on electronic components.</li>
</ul>

<h2>Quick comparison</h2>
<table>
  <thead><tr><th></th><th>1D Barcode</th><th>2D Barcode</th></tr></thead>
  <tbody>
    <tr><td>Shape</td><td>Vertical lines</td><td>Squares/dots within a square</td></tr>
    <tr><td>Capacity</td><td>Small</td><td>Large</td></tr>
    <tr><td>Scanning device</td><td>Laser scanner or camera</td><td>Camera or 2D scanner</td></tr>
    <tr><td>Damage resistance</td><td>Limited</td><td>Has error correction</td></tr>
    <tr><td>Examples</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>When to use which?</h2>
<ul>
  <li><strong>Products sold in stores or convenience stores</strong>: use an official EAN-13 from GS1. See <a href="/artikel/cara-mendapatkan-barcode-ean-13">how to get an EAN-13 barcode</a>.</li>
  <li><strong>Warehouse, shelf, or shipping labels</strong>: Code 128 is a common choice because it is compact and supports both letters and numbers.</li>
  <li><strong>Links, menus, WiFi, or contacts for customers</strong>: QR Code, because it can be scanned directly with a phone camera.</li>
  <li><strong>Very small labels</strong>: Data Matrix.</li>
  <li><strong>ID cards, boarding passes, or documents</strong>: PDF417 or Aztec.</li>
</ul>
<p>You can create all of the types above for free at <a href="/">I Need Barcode</a>. If you are still unsure, start with a QR Code for customer-facing needs and Code 128 for internal needs.</p>
`
};
