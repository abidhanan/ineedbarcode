// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 Reasons a Barcode Won't Scan and How to Fix Them",
  desc: "Is your barcode or QR Code failing to scan? Check the seven most common causes, from color contrast to size, along with how to fix them.",
  tags: ["Tips", "Barcode"],
  coverCaption: "Contrast and size determine whether a QR Code is easy to scan.",
  inlineCaption: "In a warehouse, barcodes that fail to scan slow down the work.",
  faq: [
    ["Why can a QR Code be scanned on one phone but not on another?", "Cameras and scanner apps differ in capability. QR Codes that are too small, have low contrast, or use inverted colors fail more often on certain phones. Test with several phones before printing."],
    ["Can colored barcodes be scanned?", "Yes, as long as the color is dark on a light background. Avoid red for barcode lines, because many checkout scanners use red light."],
    ["How can I check whether a barcode is correct?", "Scan the printed result with several phones or scanners, then make sure the data read is exactly the same as the data you entered."]
  ],
  body: `
<p>Nothing is more frustrating than printing hundreds of barcodes only to find out they cannot be scanned. The good news is that the cause is usually simple and easy to prevent. Here are the seven most common causes.</p>

<h2>1. Color contrast is too low</h2>
<p>Scanners read the difference between dark and light. A light gray barcode on white, or dark blue on black, is hard to distinguish. <strong>Solution:</strong> use a dark color on a light background. Black on white is the safest choice.</p>

<h2>2. Inverted colors or red</h2>
<p>Light barcodes on a dark background are not supported by all scanners. In addition, many checkout scanners use red light, so red lines look the same as a white background. <strong>Solution:</strong> avoid red for barcode lines or modules, and do not invert the colors.</p>

<h2>3. The size is too small</h2>
<p>A camera needs enough pixels to recognize each module. <strong>Solution:</strong> make the barcode larger. For a QR Code scanned up close, use at least about 2 × 2 cm. See the <a href="/artikel/ukuran-barcode-untuk-dicetak">print size guide</a>.</p>

<h2>4. There is no quiet zone</h2>
<p>A barcode that touches images, text, or the edge of the paper is hard to separate from its surroundings. <strong>Solution:</strong> leave empty space around the barcode, especially to the left and right of line barcodes.</p>

<h2>5. The image is blurry or distorted</h2>
<p>A barcode enlarged from a small image, saved as a low-quality JPG, or stretched out of proportion will lose its shape. <strong>Solution:</strong> download it with a larger module size in PNG format, and always resize it proportionally.</p>

<h2>6. The data is wrong or does not match the type</h2>
<p>Every barcode type has rules. EAN-13, for example, only accepts 12 or 13 digits with a correct check digit. A mistyped link also makes a QR Code that scans but opens nothing. <strong>Solution:</strong> check your data before printing. The <a href="/">I Need Barcode</a> generator will display a message if the data does not follow the rules of the selected barcode type.</p>

<h2>7. Surface and lighting</h2>
<p>Glossy materials, clear plastic, folds, and curved surfaces can reflect light or change the shape of the barcode. <strong>Solution:</strong> print on a flat, non-glossy surface, then test it under the actual lighting conditions.</p>

<h2>About designed QR Codes</h2>
<p>QR Codes that are given shapes, colors, or frames can still be scanned as long as the three marker squares in the corners are intact and the contrast is sufficient. Read more in <a href="/artikel/desain-qr-code-kreatif">creative QR Code designs that stay readable</a>.</p>
<p>The best habit: <strong>always test one print</strong> with several phones and scanners before printing in large quantities.</p>
`
};
