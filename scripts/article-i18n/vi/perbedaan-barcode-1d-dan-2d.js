// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Sự khác nhau giữa mã vạch 1D và 2D: Bạn cần loại nào?",
  desc: "Mã vạch dạng vạch và QR Code đều là mã vạch, nhưng công dụng khác nhau. Hãy so sánh dung lượng, cách quét và các ví dụ sử dụng.",
  tags: ["Kiến thức cơ bản", "Mã vạch"],
  coverCaption: "Máy quét cầm tay trong kho đọc được cả mã vạch 1D và 2D.",
  inlineCaption: "Nhãn vận chuyển thường dùng mã vạch dạng vạch.",
  faq: [
    ["Máy quét ở quầy thu ngân có đọc được QR Code không?", "Không phải máy nào cũng đọc được. Máy quét laser 1D chỉ đọc được mã vạch dạng vạch. Để đọc QR Code cần máy quét 2D dùng camera hoặc camera điện thoại."],
    ["Mã vạch nào nhỏ nhất?", "Data Matrix là một loại mã vạch 2D có thể in rất nhỏ, nên thường được dùng trên linh kiện điện tử, thiết bị y tế và nhãn thuốc."],
    ["Có thể dùng QR Code thay cho EAN-13 trên sản phẩm bán lẻ không?", "Để bán ở cửa hàng bán lẻ, sản phẩm vẫn cần EAN-13 hoặc UPC đã đăng ký. QR Code có thể được thêm vào bao bì như một phần bổ sung, ví dụ để cung cấp thông tin sản phẩm hoặc khuyến mãi."]
  ],
  body: `
<p>Khi tạo mã vạch, câu hỏi đầu tiên thường xuất hiện là: dùng mã vạch dạng vạch hay QR Code? Cả hai đều được gọi là mã vạch, nhưng cách lưu dữ liệu khác nhau nên công dụng cũng khác nhau.</p>

<h2>Mã vạch 1D (tuyến tính)</h2>
<p>Mã vạch 1D là mã vạch gồm các vạch dọc. Dữ liệu được lưu theo một chiều, tức là từ trái sang phải. Ví dụ quen thuộc nhất là <a href="/?type=ean13">EAN-13</a> trên bao bì sản phẩm và <a href="/?type=code128">Code 128</a> trên nhãn vận chuyển.</p>
<ul>
  <li>Dung lượng nhỏ, thường từ vài ký tự đến vài chục ký tự.</li>
  <li>Đọc được bằng máy quét laser ở quầy thu ngân, vừa rẻ vừa rất nhanh.</li>
  <li>Phù hợp cho mã sản phẩm, số sê-ri và mã vận đơn.</li>
</ul>

<h2>Mã vạch 2D</h2>
<p>Mã vạch 2D lưu dữ liệu theo hai chiều, ngang và dọc, nên chứa được nhiều hơn hẳn. Ví dụ như <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> và <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Dung lượng lớn, từ vài chục đến hàng nghìn ký tự.</li>
  <li>Quét được bằng camera điện thoại từ nhiều hướng.</li>
  <li>Có tính năng sửa lỗi, nên vẫn đọc được dù bị hỏng một phần.</li>
  <li>Có thể làm rất nhỏ, ví dụ Data Matrix trên linh kiện điện tử.</li>
</ul>

<h2>So sánh nhanh</h2>
<table>
  <thead><tr><th></th><th>Mã vạch 1D</th><th>Mã vạch 2D</th></tr></thead>
  <tbody>
    <tr><td>Hình dạng</td><td>Vạch dọc</td><td>Ô vuông/chấm trong hình vuông</td></tr>
    <tr><td>Dung lượng</td><td>Nhỏ</td><td>Lớn</td></tr>
    <tr><td>Thiết bị quét</td><td>Máy quét laser hoặc camera</td><td>Camera hoặc máy quét 2D</td></tr>
    <tr><td>Khả năng chịu hư hỏng</td><td>Hạn chế</td><td>Có sửa lỗi</td></tr>
    <tr><td>Ví dụ</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Khi nào dùng loại nào?</h2>
<ul>
  <li><strong>Sản phẩm bán ở cửa hàng hoặc cửa hàng tiện lợi</strong>: dùng EAN-13 chính thức do GS1 cấp. Xem <a href="/artikel/cara-mendapatkan-barcode-ean-13">cách có mã vạch EAN-13</a>.</li>
  <li><strong>Nhãn kho, kệ hàng hoặc vận chuyển</strong>: Code 128 là lựa chọn phổ biến vì gọn và hỗ trợ cả chữ lẫn số.</li>
  <li><strong>Liên kết, thực đơn, WiFi hoặc danh bạ cho khách hàng</strong>: QR Code, vì có thể quét trực tiếp bằng camera điện thoại.</li>
  <li><strong>Nhãn rất nhỏ</strong>: Data Matrix.</li>
  <li><strong>Thẻ căn cước, vé máy bay hoặc tài liệu</strong>: PDF417 hoặc Aztec.</li>
</ul>
<p>Tất cả các loại trên đều có thể được tạo miễn phí trên <a href="/">I Need Barcode</a>. Nếu vẫn còn phân vân, hãy bắt đầu với QR Code cho nhu cầu của khách hàng và Code 128 cho nhu cầu nội bộ.</p>
`
};
