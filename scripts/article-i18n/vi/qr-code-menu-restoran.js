// qr-code-menu-restoran
module.exports = {
  title: "QR Code cho thực đơn nhà hàng: Hướng dẫn đầy đủ",
  desc: "Thực đơn điện tử qua QR Code giúp khách hàng tiện lợi hơn và tiết kiệm chi phí in ấn. Đây là cách tạo mã, chuẩn bị thực đơn và đặt mã trên bàn.",
  tags: ["Kinh doanh", "QR Code"],
  coverCaption: "QR Code trên bàn đưa khách hàng đến thẳng thực đơn điện tử.",
  inlineCaption: "Hãy đặt QR Code ở nơi dễ với tới từ chỗ ngồi.",
  faq: [
    ["Nên dùng gì cho thực đơn điện tử: PDF hay trang web?", "Trang web thường dễ đọc trên điện thoại hơn và mở nhanh hơn. Có thể dùng PDF nếu tệp có dung lượng nhỏ và chữ đủ lớn trên màn hình."],
    ["QR Code thực đơn trên bàn nên có kích thước bao nhiêu?", "Khoảng 3 đến 5 cm là đủ để quét từ chỗ ngồi. Hãy dùng chất liệu chống thấm nước và không quá bóng."],
    ["Có cần in lại QR Code khi thực đơn thay đổi không?", "Không, miễn là liên kết vẫn giữ nguyên. Bạn chỉ cần cập nhật nội dung trang hoặc tệp thực đơn mà QR Code trỏ đến."]
  ],
  body: `
<p>Thực đơn điện tử qua QR Code giờ đây đã trở nên quen thuộc ở các quán cà phê và nhà hàng. Khách hàng chỉ cần quét QR Code trên bàn để xem danh sách món ăn, giá và hình ảnh. Với chủ quán, cách này giúp tiết kiệm chi phí in ấn và dễ dàng thay đổi giá hoặc món.</p>

<h2>Lợi ích của thực đơn QR Code</h2>
<ul>
  <li><strong>Dễ cập nhật</strong>: đổi giá hoặc thêm món mà không phải in lại cuốn thực đơn.</li>
  <li><strong>Tiết kiệm chi phí</strong>: chỉ cần in một QR Code nhỏ cho mỗi bàn.</li>
  <li><strong>Nhiều thông tin hơn</strong>: hiển thị hình ảnh, mô tả và nhãn như cay hoặc chay.</li>
  <li><strong>Hỗ trợ đặt món trực tuyến</strong>: đưa khách hàng đến biểu mẫu đặt món hoặc WhatsApp.</li>
</ul>

<h2>Bước 1: Chuẩn bị thực đơn trực tuyến</h2>
<p>QR Code chỉ chứa liên kết, nên bạn cần một thực đơn có thể mở trên internet. Các lựa chọn bao gồm một trang trên website của bạn, một tệp PDF trên dịch vụ lưu trữ trực tuyến được chia sẻ công khai, hoặc trang danh mục trên nền tảng đặt món. Hãy đảm bảo thực đơn dễ đọc trên màn hình điện thoại: chữ đủ lớn, ảnh không quá nặng và giá rõ ràng.</p>

<h2>Bước 2: Tạo QR Code</h2>
<ol>
  <li>Sao chép liên kết thực đơn của bạn.</li>
  <li>Mở <a href="/?type=qrcode">trình tạo QR Code</a>, chọn thẻ <strong>URL</strong>, rồi dán liên kết đó vào.</li>
  <li>Thêm khung có dòng chữ "THỰC ĐƠN" hoặc "QUÉT ĐỂ XEM THỰC ĐƠN" ở mục Thiết kế.</li>
  <li>Điều chỉnh màu sắc theo nhận diện của nhà hàng, nhưng vẫn dùng màu tối trên nền sáng.</li>
  <li>Tải PNG với kích thước mô-đun đủ lớn để in.</li>
</ol>
<p>Hãy dùng liên kết sẽ không thay đổi. Nếu thực đơn được chuyển sang địa chỉ khác, QR Code đã in không thể cập nhật được. Giải thích chi tiết có trong bài <a href="/artikel/apa-itu-qr-code">QR Code là gì</a>.</p>

<h2>Bước 3: In và đặt mã</h2>
<ul>
  <li>In với kích thước tối thiểu khoảng 3–5 cm để dễ quét từ chỗ ngồi.</li>
  <li>Dùng chất liệu chống thấm nước, như decal vinyl hoặc thẻ ép plastic không quá bóng.</li>
  <li>Đặt ở vị trí dễ với tới, ví dụ kệ mica ở giữa bàn.</li>
  <li>Thêm số bàn gần QR Code nếu khách hàng đặt món qua tin nhắn.</li>
</ul>

<h2>Đừng quên khách hàng không có điện thoại</h2>
<p>Hãy chuẩn bị một hoặc hai cuốn thực đơn in cho những khách hàng không mang điện thoại, điện thoại hết pin, hoặc thích đọc thực đơn giấy hơn.</p>
<p>Bạn cũng có thể tạo <a href="/artikel/cara-membuat-qr-code-wifi">QR Code WiFi</a> cho khách và đặt cạnh QR Code thực đơn.</p>
`
};
