// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 nguyên nhân khiến mã vạch không quét được và cách khắc phục",
  desc: "Mã vạch hoặc QR Code không quét được? Hãy kiểm tra bảy nguyên nhân thường gặp nhất, từ độ tương phản màu đến kích thước, cùng cách khắc phục.",
  tags: ["Mẹo", "Mã vạch"],
  coverCaption: "Độ tương phản và kích thước quyết định QR Code có dễ quét hay không.",
  inlineCaption: "Trong kho hàng, mã vạch không quét được sẽ làm chậm công việc.",
  faq: [
    ["Vì sao QR Code quét được trên điện thoại này nhưng không quét được trên điện thoại khác?", "Camera và ứng dụng quét có khả năng khác nhau. QR Code quá nhỏ, độ tương phản thấp hoặc bị đảo màu thường dễ quét lỗi trên một số điện thoại. Hãy thử với vài chiếc điện thoại trước khi in."],
    ["Mã vạch có màu có quét được không?", "Được, miễn là màu tối trên nền sáng. Tránh dùng màu đỏ cho vạch của mã vạch vì nhiều máy quét ở quầy thu ngân dùng ánh sáng đỏ."],
    ["Làm sao kiểm tra mã vạch đã đúng hay chưa?", "Hãy quét bản in bằng vài chiếc điện thoại hoặc máy quét, rồi đảm bảo dữ liệu đọc được khớp chính xác với dữ liệu bạn đã nhập."]
  ],
  body: `
<p>Không gì khó chịu hơn việc đã in hàng trăm tờ mã vạch rồi mới phát hiện chúng không quét được. Tin tốt là nguyên nhân thường đơn giản và dễ phòng tránh. Dưới đây là bảy nguyên nhân thường gặp nhất.</p>

<h2>1. Độ tương phản màu quá thấp</h2>
<p>Máy quét đọc sự khác biệt giữa vùng tối và vùng sáng. Mã vạch màu xám nhạt trên nền trắng, hoặc xanh đậm trên nền đen, rất khó phân biệt. <strong>Cách khắc phục:</strong> dùng màu tối trên nền sáng. Đen trên nền trắng là lựa chọn an toàn nhất.</p>

<h2>2. Đảo màu hoặc dùng màu đỏ</h2>
<p>Mã vạch màu sáng trên nền tối không được mọi máy quét hỗ trợ. Ngoài ra, nhiều máy quét ở quầy thu ngân dùng ánh sáng đỏ, nên vạch màu đỏ trông giống hệt nền trắng. <strong>Cách khắc phục:</strong> tránh dùng màu đỏ cho vạch hoặc mô-đun của mã vạch, và không đảo ngược màu.</p>

<h2>3. Kích thước quá nhỏ</h2>
<p>Camera cần đủ điểm ảnh để nhận diện từng mô-đun. <strong>Cách khắc phục:</strong> phóng to mã vạch. Với QR Code được quét ở khoảng cách gần, hãy dùng kích thước tối thiểu khoảng 2 × 2 cm. Xem <a href="/artikel/ukuran-barcode-untuk-dicetak">hướng dẫn kích thước in</a>.</p>

<h2>4. Không có vùng yên tĩnh</h2>
<p>Mã vạch dính sát vào hình ảnh, chữ hoặc mép giấy sẽ khó tách khỏi phần xung quanh. <strong>Cách khắc phục:</strong> chừa khoảng trống xung quanh mã vạch, đặc biệt là ở bên trái và bên phải của mã vạch dạng vạch.</p>

<h2>5. Hình ảnh bị mờ hoặc biến dạng</h2>
<p>Mã vạch được phóng to từ ảnh nhỏ, lưu dưới dạng JPG chất lượng thấp, hoặc bị kéo giãn mất cân đối sẽ bị mất hình dạng. <strong>Cách khắc phục:</strong> tải xuống với kích thước mô-đun lớn hơn ở định dạng PNG, và luôn thay đổi kích thước theo đúng tỷ lệ.</p>

<h2>6. Dữ liệu sai hoặc không phù hợp với loại mã</h2>
<p>Mỗi loại mã vạch đều có quy tắc riêng. Ví dụ, EAN-13 chỉ chấp nhận 12 hoặc 13 chữ số với chữ số kiểm tra chính xác. Liên kết bị gõ sai cũng khiến QR Code đọc được nhưng không mở ra gì cả. <strong>Cách khắc phục:</strong> kiểm tra dữ liệu trước khi in. Trình tạo mã của <a href="/">I Need Barcode</a> sẽ hiển thị thông báo nếu dữ liệu không đúng quy tắc của loại mã vạch đã chọn.</p>

<h2>7. Bề mặt và ánh sáng</h2>
<p>Chất liệu bóng, nhựa trong suốt, nếp gấp và bề mặt cong có thể phản chiếu ánh sáng hoặc làm biến dạng mã vạch. <strong>Cách khắc phục:</strong> in trên bề mặt phẳng và không bóng, rồi thử quét trong điều kiện ánh sáng thực tế.</p>

<h2>Về QR Code có thiết kế</h2>
<p>QR Code được tạo hình, tô màu hoặc thêm khung vẫn quét được miễn là ba ô vuông định vị ở các góc còn nguyên vẹn và độ tương phản đủ cao. Đọc thêm tại <a href="/artikel/desain-qr-code-kreatif">thiết kế QR Code sáng tạo mà vẫn quét được</a>.</p>
<p>Thói quen tốt nhất: <strong>luôn in thử một bản</strong> và quét bằng vài chiếc điện thoại cùng máy quét trước khi in số lượng lớn.</p>
`
};
