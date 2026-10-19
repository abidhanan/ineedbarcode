// apa-itu-barcode
module.exports = {
  title: "What Is a Barcode? Definition, How It Works, and Types",
  desc: "Barcodes are on almost every product you buy. Learn how they work, their brief history, and the most commonly used types of barcodes.",
  tags: ["Basics", "Barcode"],
  coverCaption: "A barcode on packaging stores a product's unique code.",
  inlineCaption: "Cashiers use a scanner to read barcodes in an instant.",
  faq: [
    ["What is the difference between a barcode and a QR Code?", "A QR Code is one type of barcode, namely a 2D barcode. Line (1D) barcodes store only a few characters and are read from left to right, while a QR Code stores data in two directions, so it can hold a link, text, or WiFi details."],
    ["Does a barcode store the product's price?", "Usually not. A product barcode contains only a code. The product's price and name are stored in the checkout system and looked up based on the scanned code."],
    ["Do I have to pay to create a barcode?", "No. Barcode images can be created for free, for example at I Need Barcode. The only thing that requires paid registration is an official number for retail product barcodes such as EAN-13, through GS1."]
  ],
  body: `
<p>A barcode is a way of writing data as a pattern that machines can read. The pattern usually consists of black and white lines of different widths, or small squares arranged inside a square. When scanned, the pattern is translated back into numbers or text, such as a product code, a tracking number, or a website address.</p>
<p>Because they are read by machines, barcodes are much faster and far less error-prone than typing codes by hand. That is why barcodes are used at checkouts, in warehouses, hospitals, and on tickets, all the way to food packaging.</p>

<h2>A brief history of the barcode</h2>
<p>The idea of the barcode was patented in 1952 by Norman Joseph Woodland and Bernard Silver in the United States. Barcodes were only truly used in stores in 1974, when a pack of chewing gum was scanned with a UPC code at a supermarket in Ohio. Since then, barcodes have spread around the world and are now managed globally by a standards organization called GS1.</p>

<h2>How does a barcode work?</h2>
<p>A scanner shines light on the barcode and then reads the reflection. Dark areas reflect little light, while light areas reflect a lot. That difference is converted into a sequence of 0s and 1s, which is then matched against the rules of that barcode type. Many barcodes also have a <strong>check digit</strong>, which is the last digit calculated from the digits before it. If the calculation does not match, the scanner knows something is wrong and rejects the result.</p>
<p>The barcode itself usually stores only a code. Information such as the product name or price is stored in the checkout system or a database, and is looked up based on that code.</p>

<h2>Commonly used types of barcodes</h2>
<p>In general, barcodes fall into two major groups:</p>
<ul>
  <li><strong>1D (linear) barcodes</strong>: vertical lines that are read from left to right. Examples include <a href="/?type=ean13">EAN-13</a> and <a href="/?type=upca">UPC-A</a> for retail products, as well as <a href="/?type=code128">Code 128</a> and <a href="/?type=code39">Code 39</a> for logistics and warehouses.</li>
  <li><strong>2D barcodes</strong>: square patterns that store data in two directions, so they can hold much more. Examples include <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, and <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>There are also special barcodes for postal and shipping services, healthcare, and GS1 standards for supply chains. You can read a more detailed explanation of the differences in the article <a href="/artikel/perbedaan-barcode-1d-dan-2d">The Difference Between 1D and 2D Barcodes</a>.</p>

<h2>What are barcodes used for?</h2>
<ul>
  <li><strong>Retail</strong>: speeding up checkout and recording stock automatically.</li>
  <li><strong>Warehousing and shipping</strong>: tracking goods and parcels from one place to another.</li>
  <li><strong>Tickets and events</strong>: verifying that tickets are genuine with a single scan.</li>
  <li><strong>Marketing</strong>: a QR Code on a brochure or package takes people straight to your website, menu, or WhatsApp.</li>
</ul>

<h2>Creating your own barcode</h2>
<p>You do not need a paid app to create a barcode. At <a href="/">I Need Barcode</a>, choose a barcode type, enter your data, and download it as a PNG image. There are more than 100 types to choose from, and all of them are free with no sign-up.</p>
`
};
