// cara-membuat-qr-code-wifi
module.exports = {
  title: "Cách tạo QR Code WiFi để khách không cần gõ mật khẩu",
  desc: "Khách chỉ cần quét QR Code để kết nối WiFi. Phù hợp cho quán cà phê, văn phòng, nhà nghỉ và gia đình. Đây là cách tạo và đặt mã.",
  tags: ["Hướng dẫn", "QR Code"],
  coverCaption: "Thông tin WiFi của bộ phát có thể được lưu trong một QR Code.",
  inlineCaption: "Khách của quán cà phê có thể kết nối ngay mà không cần gõ mật khẩu.",
  faq: [
    ["Mọi điện thoại đều quét được QR Code WiFi không?", "Camera mặc định của iPhone chạy iOS 11 trở lên và phần lớn điện thoại Android 10 trở lên có thể đọc trực tiếp. Điện thoại đời cũ có thể cần ứng dụng quét QR."],
    ["QR Code WiFi có an toàn không?", "Bất kỳ ai quét QR Code đó đều có thể kết nối vào WiFi của bạn. Vì vậy, hãy dùng mạng dành cho khách và đừng đặt QR Code của mạng riêng ở nơi công cộng."],
    ["Nên làm gì khi đổi mật khẩu WiFi?", "Hãy tạo và in lại QR Code WiFi, vì QR Code cũ vẫn chứa mật khẩu cũ."]
  ],
  body: `
<p>Đánh vần mật khẩu WiFi dài cho khách thường khá phiền, nhất là khi có chữ hoa, chữ số và ký hiệu. Với <strong>QR Code WiFi</strong>, khách chỉ cần hướng camera điện thoại vào QR Code là kết nối ngay.</p>

<h2>Cách QR Code WiFi hoạt động</h2>
<p>QR Code WiFi lưu tên mạng (SSID), kiểu bảo mật và mật khẩu theo một định dạng đặc biệt mà điện thoại nhận diện được, ví dụ <code>WIFI:T:WPA;S:TenMang;P:MatKhau;;</code>. Camera mặc định của iPhone (iOS 11 trở lên) và phần lớn điện thoại Android (Android 10 trở lên) có thể đọc trực tiếp mà không cần cài thêm ứng dụng.</p>

<h2>Các bước tạo mã</h2>
<ol>
  <li>Mở <a href="/?type=qrcode">trình tạo QR Code</a> và chọn thẻ <strong>WiFi</strong> ở mục Nhập dữ liệu.</li>
  <li>Gõ <strong>tên mạng</strong> chính xác như hiển thị trong danh sách WiFi, kể cả chữ hoa và chữ thường.</li>
  <li>Gõ <strong>mật khẩu</strong>, rồi chọn kiểu bảo mật. Hầu hết bộ phát WiFi gia đình và văn phòng dùng WPA/WPA2/WPA3.</li>
  <li>Đánh dấu <strong>Mạng ẩn</strong> nếu tên WiFi của bạn không hiển thị trong danh sách.</li>
  <li>Thêm khung có dòng chữ, ví dụ "SCAN WIFI", để khách biết công dụng của mã, rồi tải PNG.</li>
</ol>

<h2>Nên đặt mã ở đâu?</h2>
<ul>
  <li>Thẻ nhỏ trên bàn ở quán cà phê hoặc nhà hàng.</li>
  <li>Tường phòng khách, quầy lễ tân hoặc phòng họp văn phòng.</li>
  <li>Phòng nghỉ, dán gần cửa ra vào hoặc TV.</li>
  <li>Mặt dưới bộ phát WiFi ở nhà, để người trong gia đình dễ kết nối thiết bị mới.</li>
</ul>

<h2>Mẹo bảo mật</h2>
<ul>
  <li>Dùng <strong>mạng dành cho khách</strong> (guest network) nếu bộ phát của bạn hỗ trợ, để khách không vào chung mạng với máy tính văn phòng.</li>
  <li>Nếu đổi mật khẩu WiFi, hãy tạo và in lại QR Code, vì QR Code cũ sẽ chứa mật khẩu cũ.</li>
  <li>Đừng đặt QR Code WiFi của mạng riêng ở nơi công cộng mà ai cũng có thể chụp ảnh.</li>
</ul>

<h2>Nếu QR Code không kết nối được</h2>
<p>Hãy kiểm tra lại cách viết tên mạng và mật khẩu, vì chỉ sai một ký tự cũng khiến điện thoại không kết nối được. Đồng thời đảm bảo kiểu bảo mật đã chọn khớp với cài đặt của bộ phát. Với các vấn đề quét khác, hãy đọc <a href="/artikel/barcode-tidak-bisa-dipindai">nguyên nhân khiến mã vạch không quét được</a>.</p>
`
};
