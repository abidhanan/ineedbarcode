// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "The Right Barcode Size and Resolution for Printing",
  desc: "Barcodes that are too small or blurry are hard to scan. Learn the minimum sizes, the scanning distance rule, and safe image resolutions for printing.",
  tags: ["Guide", "Printing"],
  coverCaption: "A label printer prints barcodes for parcels and packaging.",
  inlineCaption: "The label size determines how large the barcode can be printed.",
  faq: [
    ["What is the minimum size of a QR Code for printing?", "For scanning up close, about 2 × 2 cm is the safe minimum. For longer distances, use a ratio of about 10 : 1 between the scanning distance and the width of the QR Code."],
    ["What is the standard size of an EAN-13 barcode?", "The standard EAN-13 size is about 37.3 × 25.9 mm. It may be reduced to about 80% or enlarged up to 200%."],
    ["Why is my barcode blurry after printing?", "Usually because a small image was enlarged, or it was saved as a low-quality JPG. Download it with a larger module size in PNG format."]
  ],
  body: `
<p>A barcode that looks good on screen is not necessarily readable once printed. A size that is too small, low resolution, or ink that bleeds can make scanners fail to read it. Here is a guide to keeping your prints readable.</p>

<h2>Understand the module</h2>
<p>A <strong>module</strong> is the smallest unit of a barcode, that is, one small square in a QR Code or the narrowest line in a line barcode. The module size determines how easily the barcode can be read. At <a href="/">I Need Barcode</a>, the module size can be set in the Settings section: the higher the value, the larger and sharper the downloaded image.</p>

<h2>Minimum QR Code size</h2>
<ul>
  <li>For scanning up close (for example business cards or product labels), a size of about <strong>2 × 2 cm</strong> is the safe minimum.</li>
  <li>Use a ratio rule of about <strong>10 : 1</strong>: the scanning distance is roughly ten times the width of the QR Code. For a poster scanned from 2 meters away, make the QR Code at least about 20 cm.</li>
  <li>The more data you store, the denser the pattern, so a larger size is needed.</li>
</ul>

<h2>Product barcode size</h2>
<p>The standard size of <a href="/?type=ean13">EAN-13</a> is about 37.3 × 25.9 mm (100%). It may be reduced to about 80% or enlarged up to 200%. Avoid cutting the bar height too short, because checkout scanners need room to read from various angles.</p>

<h2>Image resolution</h2>
<ul>
  <li>For printing, try to have each module drawn with <strong>several full pixels</strong>, not partial pixels. Choose a larger module size when downloading, then scale it down in your design app, not the other way around.</li>
  <li>Avoid enlarging small barcode images, because the edges of the squares will become blurry or jagged.</li>
  <li>Save in PNG format so the colors and edges are not degraded as they are in JPG.</li>
</ul>

<h2>Quiet zone</h2>
<p>Every barcode needs empty space around it, called the <strong>quiet zone</strong>. For a QR Code, it should ideally be four modules wide. For line barcodes, empty space on the left and right is very important. Do not place text, design lines, or the edge of the packaging too close.</p>

<h2>Colors and materials</h2>
<ul>
  <li>Use a dark color for the barcode and a light color for the background.</li>
  <li>Avoid glossy or transparent materials, because light reflections can interfere with the camera.</li>
  <li>Always print one sample and test it with several phones or scanners before printing many.</li>
</ul>
<p>If your barcode is still hard to scan, check <a href="/artikel/barcode-tidak-bisa-dipindai">7 reasons a barcode won't scan</a>.</p>
`
};
