// desain-qr-code-kreatif
module.exports = {
  title: "Thiết kế QR Code sáng tạo mà vẫn quét được",
  desc: "QR Code có thể được tạo hình trái tim, hình tròn, hoặc thêm khung và màu sắc. Hãy tìm hiểu các nguyên tắc để thiết kế vừa đẹp mắt vừa dễ quét.",
  tags: ["Thiết kế", "QR Code"],
  coverCaption: "Màu sắc giúp QR Code hấp dẫn hơn, miễn là độ tương phản vẫn đủ mạnh.",
  inlineCaption: "Thiết kế QR Code nên luôn được kiểm tra trước khi in.",
  faq: [
    ["QR Code hình trái tim có quét được không?", "Được. QR Code gốc vẫn nguyên vẹn ở chính giữa, phần còn lại chỉ là họa tiết trang trí. Miễn là độ tương phản mạnh và kích thước đủ lớn, QR Code vẫn đọc được."],
    ["Màu nào an toàn cho QR Code?", "Các màu tối như đen, xanh đậm, xanh lá đậm, tím hoặc nâu đậm trên nền trắng hoặc nền rất sáng."],
    ["Có thể thêm chữ hoặc khung cho QR Code không?", "Được. Khung có lời kêu gọi như “QUÉT TÔI” còn giúp mọi người hiểu công dụng của mã, miễn là khung không che mất QR Code."]
  ],
  body: `
<p>QR Code đen trắng tuy hữu dụng nhưng thường trông cứng nhắc trên bao bì, thiệp mời hay tài liệu quảng cáo. Chỉ với một chút thiết kế, QR Code có thể trông hấp dẫn hơn mà không mất đi công dụng. Điều quan trọng là hiểu phần nào có thể thay đổi và phần nào phải giữ nguyên.</p>

<h2>Hình dáng bên ngoài: trái tim, hình tròn và nhiều hơn nữa</h2>
<p>Ở mục Thiết kế trong <a href="/?type=qrcode">trình tạo QR Code</a>, bạn có thể chọn các hình như hình tròn, trái tim, lục giác, bát giác, ngôi sao hoặc hình thoi. QR Code gốc vẫn nằm ở chính giữa, phần còn lại được lấp đầy bằng họa tiết trang trí cho đến khi tạo thành hình đã chọn. Họa tiết trang trí không chứa dữ liệu, nên không ảnh hưởng đến việc quét miễn là có khoảng trống xung quanh QR Code gốc.</p>

<h2>Kiểu chấm</h2>
<p>Các ô vuông của QR Code có thể được đổi thành dạng bo tròn hoặc chấm tròn. Để vẫn dễ quét, ba ô vuông lớn ở các góc (finder pattern) nên được giữ nguyên dạng ô vuông, vì đây là phần camera tìm kiếm đầu tiên. Trình tạo mã của chúng tôi luôn vẽ phần này thành ô vuông nguyên vẹn, nhiều nhất chỉ bo tròn các góc, dù bạn chọn kiểu chấm nào.</p>

<h2>Màu sắc</h2>
<ul>
  <li>Dùng màu <strong>tối</strong> cho QR Code và màu <strong>sáng</strong> cho nền. Xanh đậm, xanh lá đậm, tím hoặc nâu đậm nhìn chung đều an toàn.</li>
  <li>Tránh dùng màu nhạt cho QR Code, như vàng, hồng nhạt hoặc xám nhạt.</li>
  <li>Đừng đảo màu thành QR Code sáng trên nền tối, vì không phải ứng dụng quét nào cũng hỗ trợ.</li>
</ul>

<h2>Khung và lời kêu gọi</h2>
<p>Khung có lời kêu gọi như "QUÉT TÔI", "THỰC ĐƠN" hoặc "SCAN WIFI" đã được chứng minh là giúp mọi người hiểu công dụng của QR Code. Bạn có thể chọn khung nhãn dưới, nhãn trên, góc, bong bóng, hình tròn hoặc dải ruy băng, rồi thay đổi chữ và màu của khung.</p>

<h2>Nguyên tắc để thiết kế vẫn đọc được</h2>
<ol>
  <li>Giữ <strong>độ tương phản</strong> mạnh giữa QR Code và nền.</li>
  <li>Để <strong>ba ô vuông định vị</strong> ở các góc luôn rõ ràng và không bị che.</li>
  <li>Chừa <strong>khoảng trống</strong> xung quanh QR Code và khung.</li>
  <li>Đừng thu nhỏ quá mức QR Code đã được thiết kế. Các hình như trái tim khiến vùng QR Code gốc nhỏ hơn kích thước tổng thể của hình ảnh.</li>
  <li><strong>Kiểm tra</strong> bằng vài chiếc điện thoại trước khi in.</li>
</ol>

<p>Nếu thiết kế của bạn khó quét, hãy đưa từng tùy chọn về cài đặt mặc định bằng nút <strong>Đặt lại</strong> để tìm ra nguyên nhân. Các nguyên nhân phổ biến khác có thể đọc tại <a href="/artikel/barcode-tidak-bisa-dipindai">7 nguyên nhân khiến mã vạch không quét được</a>.</p>
`
};
