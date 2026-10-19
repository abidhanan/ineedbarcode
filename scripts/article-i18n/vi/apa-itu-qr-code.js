// apa-itu-qr-code
module.exports = {
  title: "QR Code là gì và hoạt động như thế nào?",
  desc: "QR Code có thể lưu liên kết, văn bản, thậm chí cả thông tin WiFi và vẫn đọc được dù bị hỏng một phần. Đây là cách QR Code hoạt động và những ưu điểm của nó.",
  tags: ["Kiến thức cơ bản", "QR Code"],
  coverCaption: "QR Code có thể được quét trực tiếp bằng camera điện thoại.",
  inlineCaption: "Mỗi QR Code được tạo nên từ những ô vuông nhỏ màu đen và trắng.",
  faq: [
    ["QR Code có hết hạn không?", "QR Code tĩnh không bao giờ hết hạn vì dữ liệu được nhúng trực tiếp vào hình ảnh. QR Code động có thể ngừng hoạt động nếu dịch vụ cung cấp liên kết ngừng hoạt động hoặc gói đăng ký hết hạn."],
    ["QR Code có thể lưu được bao nhiêu dữ liệu?", "Phiên bản lớn nhất của QR Code có thể lưu tới 7.089 chữ số hoặc khoảng 2.953 byte. Tuy nhiên, dữ liệu càng ít thì QR Code càng dễ quét."],
    ["QR Code có còn đọc được nếu bị hỏng một phần không?", "Có. Nhờ tính năng sửa lỗi, QR Code vẫn đọc được dù khoảng 7% đến 30% diện tích bị hỏng, tùy vào mức sửa lỗi L, M, Q hoặc H được sử dụng."]
  ],
  body: `
<p>QR Code (Quick Response Code) là mã vạch 2D hình vuông được tạo nên từ những ô vuông nhỏ màu đen và trắng. Khác với mã vạch dạng vạch chỉ lưu được vài chục chữ số, QR Code có thể lưu liên kết trang web, văn bản dài, số điện thoại, danh bạ, thậm chí cả thông tin mạng WiFi.</p>
<p>QR Code được Denso Wave, một công ty Nhật Bản, phát triển vào năm 1994 để theo dõi phụ tùng xe trong nhà máy. Ngày nay QR Code có mặt ở khắp nơi, từ thanh toán điện tử đến thực đơn nhà hàng, vì có thể quét trực tiếp bằng camera điện thoại.</p>

<h2>Các thành phần của QR Code</h2>
<ul>
  <li><strong>Ba ô vuông lớn ở các góc</strong> (finder pattern): giúp camera tìm thấy QR Code và xác định hướng của nó, nhờ vậy QR Code vẫn đọc được dù được quét nghiêng hay lộn ngược.</li>
  <li><strong>Mẫu căn chỉnh</strong> (alignment pattern): các ô vuông nhỏ giúp đọc QR Code bị cong hoặc được nhìn từ một góc nghiêng.</li>
  <li><strong>Vùng dữ liệu</strong>: các ô vuông nhỏ chứa thông tin mà bạn lưu.</li>
  <li><strong>Vùng yên tĩnh</strong> (quiet zone): khoảng trống xung quanh QR Code để dễ tách biệt với nền.</li>
</ul>

<h2>Có thể lưu được bao nhiêu dữ liệu?</h2>
<p>QR Code có 40 phiên bản kích thước. Phiên bản lớn nhất có thể lưu tới 7.089 chữ số hoặc khoảng 2.953 byte dữ liệu. Trên thực tế, dữ liệu lưu càng ít thì các ô vuông càng lớn và QR Code càng dễ quét. Vì vậy, liên kết ngắn sẽ tốt hơn liên kết quá dài.</p>

<h2>Vẫn đọc được dù bị hỏng</h2>
<p>QR Code sử dụng tính năng sửa lỗi (error correction). Có bốn mức:</p>
<ul>
  <li><strong>L</strong>: dữ liệu vẫn khôi phục được nếu khoảng 7% QR Code bị hỏng.</li>
  <li><strong>M</strong>: khoảng 15%. Đây là lựa chọn phổ biến và cân bằng.</li>
  <li><strong>Q</strong>: khoảng 25%.</li>
  <li><strong>H</strong>: khoảng 30%, phù hợp với QR Code sẽ được chèn logo hoặc in ở nơi dễ bị bẩn.</li>
</ul>
<p>Mức sửa lỗi càng cao thì càng cần nhiều ô vuông, nên mẫu QR Code trông dày đặc hơn.</p>

<h2>QR Code có thể lưu những gì?</h2>
<ul>
  <li>Liên kết trang web, cửa hàng trực tuyến hoặc biểu mẫu.</li>
  <li>Thông tin WiFi, để khách có thể kết nối mà không cần gõ mật khẩu. Xem hướng dẫn <a href="/artikel/cara-membuat-qr-code-wifi">QR Code WiFi</a>.</li>
  <li>Danh thiếp điện tử (vCard), email, SMS và trò chuyện WhatsApp.</li>
  <li>Vị trí trên bản đồ và lịch sự kiện.</li>
</ul>

<h2>QR Code tĩnh và động</h2>
<p>QR Code được tạo trực tiếp từ dữ liệu gọi là <strong>QR Code tĩnh</strong>: nội dung được nhúng vào hình ảnh và không thể thay đổi, nhưng cũng không bao giờ hết hạn. QR Code <strong>động</strong> chứa một liên kết rút gọn của một dịch vụ, liên kết này sau đó chuyển hướng đến đích của bạn; đích đến có thể thay đổi, nhưng QR Code sẽ ngừng hoạt động nếu dịch vụ đó ngừng hoạt động. Với hầu hết nhu cầu, QR Code tĩnh là đủ và an toàn hơn về lâu dài.</p>

<p>Bạn muốn thử? Hãy tạo <a href="/?type=qrcode">QR Code miễn phí</a> ngay bây giờ, hoặc đọc <a href="/artikel/cara-membuat-qr-code-gratis">cách tạo QR Code trong 3 bước</a>.</p>
`
};
