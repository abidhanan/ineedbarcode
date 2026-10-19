// apa-itu-qr-code
module.exports = {
  title: "QR Code란 무엇이며 어떻게 작동하나요?",
  desc: "QR Code는 링크, 텍스트는 물론 WiFi 정보까지 저장할 수 있고, 일부가 손상되어도 읽힙니다. 작동 원리와 장점을 소개합니다.",
  tags: ["기초", "QR Code"],
  coverCaption: "QR Code는 휴대폰 카메라로 바로 스캔할 수 있습니다.",
  inlineCaption: "모든 QR Code는 검은색과 흰색의 작은 사각형으로 이루어져 있습니다.",
  faq: [
    ["QR Code에도 유효 기간이 있나요?", "정적 QR Code는 데이터가 이미지에 직접 담겨 있으므로 만료되지 않습니다. 동적 QR Code는 링크를 제공하는 서비스가 중단되거나 구독이 끝나면 작동하지 않을 수 있습니다."],
    ["QR Code에는 데이터를 얼마나 저장할 수 있나요?", "가장 큰 버전의 QR Code는 숫자 최대 7,089자, 약 2,953바이트까지 저장할 수 있습니다. 다만 데이터가 적을수록 QR Code를 스캔하기가 더 쉽습니다."],
    ["QR Code는 일부가 손상되어도 읽히나요?", "네. 오류 정정 기능 덕분에, 사용하는 정정 레벨 L, M, Q, H에 따라 약 7%에서 30%가 손상되어도 QR Code를 읽을 수 있습니다."]
  ],
  body: `
<p>QR Code(Quick Response Code)는 검은색과 흰색의 작은 사각형으로 이루어진 정사각형 모양의 2D 바코드입니다. 십여 자리 숫자만 저장하는 막대형 바코드와 달리, QR Code에는 웹사이트 링크, 긴 텍스트, 전화번호, 연락처는 물론 WiFi 네트워크 정보까지 저장할 수 있습니다.</p>
<p>QR Code는 1994년 일본 기업 Denso Wave가 공장에서 자동차 부품을 추적하기 위해 개발했습니다. 휴대폰 카메라로 바로 스캔할 수 있기 때문에, 지금은 디지털 결제부터 식당 메뉴까지 어디에서나 쓰이고 있습니다.</p>

<h2>QR Code의 구성 요소</h2>
<ul>
  <li><strong>모서리의 큰 사각형 세 개</strong>(finder pattern, 위치 찾기 패턴): 카메라가 QR Code를 찾고 방향을 파악하도록 돕습니다. 그래서 비스듬하거나 거꾸로 스캔해도 읽힙니다.</li>
  <li><strong>정렬 패턴</strong>(alignment pattern): 휘어 있거나 비스듬히 보이는 QR Code를 읽도록 돕는 작은 사각형입니다.</li>
  <li><strong>데이터 영역</strong>: 저장한 정보가 담긴 작은 사각형들입니다.</li>
  <li><strong>여백 영역</strong>(quiet zone): QR Code 주변의 빈 공간으로, 배경과 쉽게 구분되도록 합니다.</li>
</ul>

<h2>데이터를 얼마나 저장할 수 있나요?</h2>
<p>QR Code에는 40가지 크기 버전이 있습니다. 가장 큰 버전은 숫자 최대 7,089자, 약 2,953바이트의 데이터를 저장할 수 있습니다. 실제로는 저장하는 데이터가 적을수록 사각형이 커지고 QR Code를 스캔하기도 쉬워집니다. 따라서 아주 긴 링크보다 짧은 링크가 더 좋습니다.</p>

<h2>손상되어도 읽힙니다</h2>
<p>QR Code는 오류 정정(error correction) 기능을 사용합니다. 네 가지 레벨이 있습니다.</p>
<ul>
  <li><strong>L</strong>: QR Code의 약 7%가 손상되어도 데이터를 복구할 수 있습니다.</li>
  <li><strong>M</strong>: 약 15%. 일반적이고 균형 잡힌 선택입니다.</li>
  <li><strong>Q</strong>: 약 25%.</li>
  <li><strong>H</strong>: 약 30%. 로고를 넣을 QR Code나 쉽게 더러워지는 곳에 인쇄할 QR Code에 적합합니다.</li>
</ul>
<p>정정 레벨이 높을수록 더 많은 사각형이 필요하므로 QR Code 패턴이 더 촘촘해 보입니다.</p>

<h2>QR Code에는 무엇을 저장할 수 있나요?</h2>
<ul>
  <li>웹사이트, 온라인 쇼핑몰, 양식 링크.</li>
  <li>WiFi 정보. 손님이 비밀번호를 입력하지 않고 연결할 수 있습니다. <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a> 가이드를 참고하세요.</li>
  <li>디지털 명함(vCard), 이메일, SMS, WhatsApp 채팅.</li>
  <li>지도 위치와 행사 일정.</li>
</ul>

<h2>정적 QR Code와 동적 QR Code</h2>
<p>데이터로 바로 만든 QR Code를 <strong>정적 QR Code</strong>라고 합니다. 내용이 이미지에 담겨 있어 변경할 수 없지만, 만료되지도 않습니다. <strong>동적</strong> QR Code에는 특정 서비스의 짧은 링크가 들어 있으며, 이 링크가 여러분이 원하는 목적지로 연결해 줍니다. 목적지는 바꿀 수 있지만, 해당 서비스가 중단되면 QR Code도 작동하지 않습니다. 대부분의 경우 정적 QR Code로 충분하며, 장기적으로 더 안전합니다.</p>

<p>직접 해 보고 싶으신가요? 지금 <a href="/?type=qrcode">무료 QR Code</a>를 만들거나, <a href="/artikel/cara-membuat-qr-code-gratis">3단계로 QR Code 만드는 방법</a>을 읽어 보세요.</p>
`
};
