// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Cách có mã vạch sản phẩm EAN-13 cho doanh nghiệp nhỏ",
  desc: "Bạn muốn sản phẩm của mình có mặt ở cửa hàng tiện lợi hay siêu thị? Hãy tìm hiểu ý nghĩa các chữ số EAN-13, cách đăng ký số chính thức với GS1 Indonesia và cách in mã.",
  tags: ["Kinh doanh", "Bán lẻ"],
  coverCaption: "Bao bì sản phẩm bán lẻ cần có mã vạch EAN-13 đã đăng ký.",
  inlineCaption: "Cửa hàng bán lẻ nhận diện sản phẩm qua số EAN-13 trong hệ thống thu ngân.",
  faq: [
    ["Có được tự đặt số EAN-13 không?", "Hình ảnh mã vạch thì bạn có thể tự tạo, nhưng số nên là số chính thức do GS1 cấp. Số tự đặt có thể trùng với sản phẩm khác và bị cửa hàng bán lẻ từ chối."],
    ["Mỗi biến thể sản phẩm có cần mã vạch riêng không?", "Có. Mỗi biến thể khác nhau, ví dụ khác hương vị, kích cỡ hoặc dung lượng đóng gói, đều cần một số EAN-13 riêng."],
    ["Chữ số kiểm tra trong EAN-13 là gì?", "Chữ số kiểm tra là chữ số thứ 13, được tính từ 12 chữ số đứng trước. Máy quét dùng nó để đảm bảo mã vạch được đọc chính xác. Trình tạo mã của I Need Barcode sẽ tự động tính chữ số này nếu bạn nhập 12 chữ số."]
  ],
  body: `
<p>Nếu muốn bán sản phẩm ở cửa hàng tiện lợi, siêu thị hoặc các sàn thương mại điện tử lớn, thường bạn sẽ được yêu cầu in mã vạch <strong>EAN-13</strong> trên bao bì. Mã vạch này gồm 13 chữ số, là định danh duy nhất của sản phẩm trên toàn thế giới.</p>

<h2>Ý nghĩa 13 chữ số của EAN-13</h2>
<ul>
  <li><strong>Tiền tố GS1</strong>: ba chữ số đầu cho biết tổ chức GS1 nào đã cấp số. Số do GS1 Indonesia cấp bắt đầu bằng <strong>899</strong>.</li>
  <li><strong>Mã doanh nghiệp</strong>: định danh công ty của bạn, được cấp khi đăng ký.</li>
  <li><strong>Mã sản phẩm</strong>: do công ty tự quy định cho từng biến thể sản phẩm, ví dụ khác hương vị hoặc khác kích cỡ.</li>
  <li><strong>Chữ số kiểm tra</strong>: chữ số cuối cùng được tính tự động từ 12 chữ số đứng trước để tránh đọc sai.</li>
</ul>

<h2>Vì sao phải dùng số chính thức?</h2>
<p>Ai cũng có thể vẽ mã vạch EAN-13, nhưng <strong>số</strong> của nó phải được đăng ký. Cửa hàng bán lẻ dùng số đó để nhận diện sản phẩm trong hệ thống của họ. Nếu bạn tự đặt số, số đó có thể trùng với sản phẩm của công ty khác và bị từ chối khi đăng ký sản phẩm vào cửa hàng.</p>

<h2>Cách đăng ký số với GS1 Indonesia</h2>
<ol>
  <li>Chuẩn bị giấy tờ kinh doanh, chẳng hạn NIB (mã số đăng ký kinh doanh) và NPWP (mã số thuế), cùng danh sách sản phẩm cần gắn mã vạch.</li>
  <li>Đăng ký công ty qua trang web chính thức của GS1 Indonesia và chọn số lượng mã cần dùng.</li>
  <li>Thanh toán phí đăng ký và phí thường niên theo quy định hiện hành.</li>
  <li>Sau khi được phê duyệt, bạn sẽ nhận được mã doanh nghiệp và có thể tạo số cho từng sản phẩm.</li>
</ol>
<p>Yêu cầu và chi phí có thể thay đổi, vì vậy hãy luôn kiểm tra thông tin mới nhất trực tiếp trên trang web của GS1 Indonesia.</p>

<h2>Tạo hình ảnh mã vạch</h2>
<p>Khi đã có số, hãy mở <a href="/?type=ean13">trình tạo EAN-13</a> và nhập 12 hoặc 13 chữ số của sản phẩm. Nếu bạn nhập 12 chữ số, chữ số kiểm tra sẽ được tính tự động. Hãy đảm bảo tùy chọn hiển thị chữ bên dưới mã vạch đang bật để các con số được in ra, rồi tải xuống dưới dạng PNG.</p>

<h2>Mẹo in trên bao bì</h2>
<ul>
  <li>Dùng vạch màu đen hoặc xanh đậm trên nền trắng. Tránh dùng màu đỏ cho vạch, vì nhiều máy quét ở quầy thu ngân dùng ánh sáng đỏ nên vạch đỏ sẽ không đọc được.</li>
  <li>Đừng thu nhỏ mã vạch quá mức. Kích thước tiêu chuẩn của EAN-13 khoảng 37,3 × 25,9 mm và có thể thu nhỏ đến khoảng 80%. Chi tiết xem tại <a href="/artikel/ukuran-barcode-untuk-dicetak">hướng dẫn kích thước mã vạch</a>.</li>
  <li>Chừa khoảng trống ở bên trái và bên phải mã vạch, và tránh đặt mã ở nếp gấp hoặc mối nối của bao bì.</li>
  <li>Quét thử bản in bằng máy quét trước khi in số lượng lớn.</li>
</ul>
<p>Với sản phẩm bán ở Bắc Mỹ, bạn cũng có thể được yêu cầu dùng <a href="/?type=upca">UPC-A</a> gồm 12 chữ số.</p>
`
};
