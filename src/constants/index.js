
const PG = [
  'html5_inicis', 
  'inicis', 
  'uplus', 
  'kcp', 
  'kcp_billing', 
  'nice', 
  'jtnet', 
  'kakao', 
  'kakaopay',
  'danal', 
  'danal_tpay', 
  'kicc',
  'settle',
  'mobilians', 
  'payco', 
  'eximbay',
  'paypal', 
  'naverco',
  'naverpay',
  'smilepay',
  'chai',
  'payple',
  'alipay',
];

const PAY_METHOD = [
  'card',
  'trans',
  'vbank',
  'phone',
  'samsung',
  'kpay',
  'cultureland',
  'smartculture',
  'happymoney',
  'booknlife',
  'kakaopay',
  'lpay',
  'payco',
  'ssgpay',
  'tosspay',
];
const CURRENCY = ['KRW', 'USD', 'EUR', 'JPY'];
const LANGUAGE = ['ko', 'en'];
const EN_AVAILABLE_PG = ['inicis', 'html5_inicis', 'uplus', 'nice'];
const PG_WILDCARDS = ['eximbay'];
const CARRIERS = ['SKT', 'KTF', 'LGT', 'MVNO'];

const WEBVIEW_SOURCE_HTML = `
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script type="text/javascript" src="https://code.jquery.com/jquery-latest.min.js" ></script>
    <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"></script>
  </head>
  <body></body>
</html>
`;

export {
  PG,
  PAY_METHOD,
  CURRENCY,
  LANGUAGE,
  EN_AVAILABLE_PG,
  PG_WILDCARDS,
  CARRIERS,
  WEBVIEW_SOURCE_HTML,
};
