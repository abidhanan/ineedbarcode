// apa-itu-barcode
module.exports = {
  title: "Mã vạch là gì? Khái niệm, cách hoạt động và các loại mã vạch",
  desc: "Mã vạch có trên hầu hết mọi sản phẩm bạn mua. Hãy tìm hiểu cách mã vạch hoạt động, lịch sử ngắn gọn và những loại mã vạch được dùng phổ biến nhất.",
  tags: ["Kiến thức cơ bản", "Mã vạch"],
  coverCaption: "Mã vạch trên bao bì lưu trữ mã duy nhất của sản phẩm.",
  inlineCaption: "Thu ngân dùng máy quét để đọc mã vạch chỉ trong tích tắc.",
  faq: [
    ["Mã vạch và QR Code khác nhau thế nào?", "QR Code là một loại mã vạch, cụ thể là mã vạch 2D. Mã vạch dạng vạch (1D) chỉ lưu được ít ký tự và được đọc từ trái sang phải, còn QR Code lưu dữ liệu theo hai chiều nên chứa được liên kết, văn bản hoặc thông tin WiFi."],
    ["Mã vạch có lưu giá sản phẩm không?", "Thường là không. Mã vạch sản phẩm chỉ chứa một mã. Giá và tên sản phẩm được lưu trong hệ thống thu ngân, rồi được tra cứu dựa trên mã vừa quét."],
    ["Tạo mã vạch có phải trả phí không?", "Không. Hình ảnh mã vạch có thể được tạo miễn phí, chẳng hạn trên I Need Barcode. Thứ duy nhất cần đăng ký và trả phí là số chính thức cho mã vạch sản phẩm bán lẻ như EAN-13 thông qua GS1."]
  ],
  body: `
<p>Mã vạch là cách ghi dữ liệu dưới dạng một mẫu hình mà máy có thể đọc được. Mẫu hình đó thường là các vạch đen trắng có độ rộng khác nhau, hoặc các ô vuông nhỏ được sắp xếp trong một hình vuông. Khi được quét, mẫu hình này được chuyển ngược lại thành số hoặc chữ, ví dụ mã sản phẩm, mã vận đơn hay địa chỉ trang web.</p>
<p>Vì được máy đọc, mã vạch nhanh hơn và ít sai sót hơn nhiều so với việc gõ mã bằng tay. Đó là lý do mã vạch được dùng ở quầy thu ngân, nhà kho, bệnh viện, vé, cho đến bao bì thực phẩm.</p>

<h2>Lịch sử ngắn gọn của mã vạch</h2>
<p>Ý tưởng mã vạch được Norman Joseph Woodland và Bernard Silver cấp bằng sáng chế vào năm 1952 tại Hoa Kỳ. Mã vạch chỉ thực sự được dùng trong cửa hàng vào năm 1974, khi một gói kẹo cao su được quét bằng mã UPC tại một siêu thị ở Ohio. Từ đó, mã vạch lan rộng khắp thế giới và hiện được quản lý trên toàn cầu bởi một tổ chức tiêu chuẩn có tên GS1.</p>

<h2>Mã vạch hoạt động như thế nào?</h2>
<p>Máy quét chiếu sáng mã vạch rồi đọc ánh sáng phản xạ lại. Phần tối phản xạ ít ánh sáng, phần sáng phản xạ nhiều. Sự khác biệt đó được chuyển thành một chuỗi số 0 và 1, rồi đối chiếu với quy tắc của loại mã vạch đó. Nhiều mã vạch còn có <strong>chữ số kiểm tra</strong> (check digit), tức là chữ số cuối cùng được tính từ các chữ số đứng trước. Nếu kết quả tính không khớp, máy quét biết có lỗi và từ chối kết quả.</p>
<p>Bản thân mã vạch thường chỉ lưu một mã. Các thông tin như tên sản phẩm hay giá được lưu trong hệ thống thu ngân hoặc cơ sở dữ liệu, rồi được tra cứu dựa trên mã đó.</p>

<h2>Các loại mã vạch thường dùng</h2>
<p>Nhìn chung, mã vạch được chia thành hai nhóm lớn:</p>
<ul>
  <li><strong>Mã vạch 1D (tuyến tính)</strong>: gồm các vạch dọc được đọc từ trái sang phải. Ví dụ như <a href="/?type=ean13">EAN-13</a> và <a href="/?type=upca">UPC-A</a> cho sản phẩm bán lẻ, cùng <a href="/?type=code128">Code 128</a> và <a href="/?type=code39">Code 39</a> cho hậu cần và kho bãi.</li>
  <li><strong>Mã vạch 2D</strong>: gồm các mẫu ô vuông lưu dữ liệu theo hai chiều, nên chứa được nhiều hơn hẳn. Ví dụ như <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> và <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Ngoài ra còn có các mã vạch chuyên dụng cho bưu chính và vận chuyển, y tế, cũng như các tiêu chuẩn GS1 cho chuỗi cung ứng. Bạn có thể đọc giải thích chi tiết hơn về sự khác nhau giữa chúng trong bài <a href="/artikel/perbedaan-barcode-1d-dan-2d">Sự khác nhau giữa mã vạch 1D và 2D</a>.</p>

<h2>Mã vạch dùng để làm gì?</h2>
<ul>
  <li><strong>Bán lẻ</strong>: tăng tốc thanh toán và tự động ghi nhận hàng tồn kho.</li>
  <li><strong>Kho bãi và vận chuyển</strong>: theo dõi hàng hóa và bưu kiện từ nơi này đến nơi khác.</li>
  <li><strong>Vé và sự kiện</strong>: kiểm tra vé thật chỉ với một lần quét.</li>
  <li><strong>Tiếp thị</strong>: QR Code trên tờ rơi hoặc bao bì đưa mọi người đến thẳng trang web, thực đơn hoặc WhatsApp của bạn.</li>
</ul>

<h2>Tự tạo mã vạch</h2>
<p>Bạn không cần ứng dụng trả phí để tạo mã vạch. Trên <a href="/">I Need Barcode</a>, hãy chọn loại mã vạch, nhập dữ liệu, rồi tải xuống dưới dạng ảnh PNG. Có hơn 100 loại để lựa chọn, tất cả đều miễn phí và không cần đăng ký.</p>
`
};
