// cara-membuat-qr-code-wifi
module.exports = {
  title: "손님이 비밀번호를 입력할 필요 없는 WiFi QR Code 만드는 방법",
  desc: "손님은 QR Code를 스캔하기만 하면 WiFi에 연결됩니다. 카페, 사무실, 숙박 시설, 가정에 안성맞춤입니다. 만드는 방법과 부착 방법을 알려 드립니다.",
  tags: ["가이드", "QR Code"],
  coverCaption: "공유기의 WiFi 정보를 하나의 QR Code에 담을 수 있습니다.",
  inlineCaption: "카페 손님은 비밀번호를 입력하지 않고 바로 연결할 수 있습니다.",
  faq: [
    ["모든 휴대폰에서 WiFi QR Code를 스캔할 수 있나요?", "iOS 11 이상 iPhone의 기본 카메라와 Android 10 이상의 대부분 Android 휴대폰은 바로 읽을 수 있습니다. 오래된 휴대폰은 QR 스캔 앱이 필요할 수 있습니다."],
    ["WiFi QR Code는 안전한가요?", "그 QR Code를 스캔하는 사람은 누구나 여러분의 WiFi에 연결할 수 있습니다. 따라서 게스트 네트워크를 사용하고, 개인 네트워크의 QR Code는 공공장소에 붙이지 마세요."],
    ["WiFi 비밀번호를 바꾸면 어떻게 해야 하나요?", "WiFi QR Code를 다시 만들어 다시 인쇄하세요. 이전 QR Code에는 예전 비밀번호가 그대로 들어 있습니다."]
  ],
  body: `
<p>긴 WiFi 비밀번호를 손님에게 한 글자씩 불러 주는 일은 번거롭습니다. 대문자, 숫자, 기호까지 섞여 있다면 더욱 그렇습니다. <strong>WiFi QR Code</strong>가 있으면 손님은 휴대폰 카메라를 QR Code에 비추기만 하면 바로 연결됩니다.</p>

<h2>WiFi QR Code의 작동 원리</h2>
<p>WiFi QR Code는 네트워크 이름(SSID), 보안 유형, 비밀번호를 휴대폰이 인식하는 특별한 형식으로 저장합니다. 예를 들면 <code>WIFI:T:WPA;S:NamaJaringan;P:Sandi;;</code>와 같습니다. iPhone의 기본 카메라(iOS 11 이상)와 대부분의 Android 휴대폰(Android 10 이상)은 별도의 앱 없이 바로 읽을 수 있습니다.</p>

<h2>만드는 단계</h2>
<ol>
  <li><a href="/?type=qrcode">QR Code 생성기</a>를 열고 데이터 입력에서 <strong>WiFi</strong> 탭을 선택하세요.</li>
  <li>WiFi 목록에 표시된 그대로, 대문자와 소문자까지 정확하게 <strong>네트워크 이름</strong>을 입력하세요.</li>
  <li><strong>비밀번호</strong>를 입력한 다음 보안 유형을 선택하세요. 대부분의 가정용 및 사무실용 공유기는 WPA/WPA2/WPA3을 사용합니다.</li>
  <li>WiFi 이름이 목록에 표시되지 않는다면 <strong>숨겨진 네트워크</strong>를 체크하세요.</li>
  <li>손님이 용도를 알 수 있도록 "SCAN WIFI" 같은 문구가 들어간 프레임을 추가한 다음 PNG를 다운로드하세요.</li>
</ol>

<h2>어디에 붙이면 좋을까요?</h2>
<ul>
  <li>카페나 식당 테이블 위의 작은 카드.</li>
  <li>응접실, 안내 데스크, 사무실 회의실 벽.</li>
  <li>숙박 시설 객실의 문이나 TV 근처.</li>
  <li>집 안 공유기의 바닥면. 가족이 새 기기를 쉽게 연결할 수 있습니다.</li>
</ul>

<h2>보안 팁</h2>
<ul>
  <li>공유기가 지원한다면 <strong>게스트 네트워크</strong>(guest network)를 사용하세요. 그러면 손님이 사무실 컴퓨터와 같은 네트워크에 들어오지 않습니다.</li>
  <li>WiFi 비밀번호를 바꿨다면 QR Code를 다시 만들어 다시 인쇄하세요. 이전 QR Code에는 예전 비밀번호가 들어 있습니다.</li>
  <li>누구나 사진을 찍을 수 있는 공공장소에 개인 네트워크의 WiFi QR Code를 붙이지 마세요.</li>
</ul>

<h2>QR Code로 연결되지 않는다면</h2>
<p>네트워크 이름과 비밀번호의 철자를 다시 확인하세요. 한 글자만 틀려도 휴대폰이 연결에 실패합니다. 선택한 보안 유형이 공유기 설정과 일치하는지도 확인하세요. 그 밖의 스캔 문제는 <a href="/artikel/barcode-tidak-bisa-dipindai">바코드가 스캔되지 않는 원인</a>을 읽어 보세요.</p>
`
};
