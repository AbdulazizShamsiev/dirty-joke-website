//steam service
function steamService(isim, email) {
  function generatePassword() {
    // Create a random string of 5 characters.
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var password = "";
    for (var i = 0; i < 5; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    // Return the password.
    return password;
  }
  //document.getElementById('password').innerHTML = generatePassword()
  let password = generatePassword();
  const months = [
    "Oca",
    "Şub",
    "Mar",
    "Nis",
    "May",
    "Haz",
    "Tem",
    "Ağu",
    "Eyl",
    "Eki",
    "Kas",
    "Ara",
  ];
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const d = new Date();
  let month = months[d.getMonth()]; //	Haz 2023 @ 10:26 +03

  //document.getElementById('time').innerHTML = `${month} ${d.getFullYear()} @ ${d.getHours()}:${d.getMinutes()} +03`

  function kdvNumber() {
    var number = "92";

    for (var i = 0; i < 8; i++) {
      number += Math.floor(Math.random() * 10);
    }

    return number;
  }
  let verginumber = kdvNumber();

  const iller = [
    {
      İl: "Adana",
      İlçe: "Adana",
      postalCode: 1000,
    },
    {
      İl: "Adana",
      İlçe: "Çukurova",
      postalCode: 1100,
    },
    {
      İl: "Adana",
      İlçe: "Seyhan",
      postalCode: 1170,
    },
    {
      İl: "Adana",
      İlçe: "Yüreğir",
      postalCode: 1160,
    },
    {
      İl: "Adıyaman",
      İlçe: "Adıyaman",
      postalCode: 2000,
    },
    {
      İl: "Adıyaman",
      İlçe: "Kahta",
      postalCode: 2010,
    },
    {
      İl: "Adıyaman",
      İlçe: "Gölbaşı",
      postalCode: 2050,
    },
    {
      İl: "Afyonkarahisar",
      İlçe: "Afyonkarahisar",
      postalCode: 3000,
    },
    {
      İl: "Afyonkarahisar",
      İlçe: "Bolvadin",
      postalCode: 3100,
    },
    {
      İl: "Afyonkarahisar",
      İlçe: "Çay",
      postalCode: 3200,
    },
    {
      İl: "Afyonkarahisar",
      İlçe: "İhsaniye",
      postalCode: 3300,
    },
    {
      İl: "Afyonkarahisar",
      İlçe: "Sandıklı",
      postalCode: 3400,
    },
    {
      İl: "Afyonkarahisar",
      İlçe: "Sultandağı",
      postalCode: 3500,
    },
    {
      İl: "Afyonkarahisar",
      İlçe: "Şuhut",
      postalCode: 3600,
    },
    {
      İl: "Ağrı",
      İlçe: "Ağrı",
      postalCode: 4000,
    },
    {
      İl: "Ağrı",
      İlçe: "Doğubayazıt",
      postalCode: 4400,
    },
    {
      İl: "Ağrı",
      İlçe: "Patnos",
      postalCode: 4500,
    },
    {
      İl: "Aksaray",
      İlçe: "Aksaray",
      postalCode: 68000,
    },
    {
      İl: "Aksaray",
      İlçe: "Eskil",
      postalCode: 68200,
    },
    {
      İl: "Aksaray",
      İlçe: "Gülağaç",
      postalCode: 68300,
    },
    {
      İl: "Aksaray",
      İlçe: "Güzelyurt",
      postalCode: 68400,
    },
    {
      İl: "Aksaray",
      İlçe: "Ortaköy",
      postalCode: 68500,
    },
    {
      İl: "Aksaray",
      İlçe: "Sarıyahşi",
      postalCode: 68600,
    },
    {
      İl: "Amasya",
      İlçe: "Amasya",
      postalCode: 5000,
    },
    {
      İl: "Amasya",
      İlçe: "Merzifon",
      postalCode: 5100,
    },
    {
      İl: "Amasya",
      İlçe: "Suluova",
      postalCode: 5200,
    },
    {
      İl: "Ankara",
      İlçe: "Ankara",
      postalCode: 6000,
    },
    {
      İl: "Ankara",
      İlçe: "Çankaya",
      postalCode: 6690,
    },
    {
      İl: "Ankara",
      İlçe: "Keçiören",
      postalCode: 6200,
    },
    {
      İl: "Ankara",
      İlçe: "Mamak",
      postalCode: 6060,
    },
    {
      İl: "Ankara",
      İlçe: "Yenimahalle",
      postalCode: 6100,
    },
    {
      İl: "Antalya",
      İlçe: "Antalya",
      postalCode: 7000,
    },
    {
      İl: "Antalya",
      İlçe: "Alanya",
      postalCode: 7400,
    },
    {
      İl: "Antalya",
      İlçe: "Manavgat",
      postalCode: 7600,
    },
    {
      İl: "Antalya",
      İlçe: "Muratpaşa",
      postalCode: 7100,
    },
    {
      İl: "Antalya",
      İlçe: "Serik",
      postalCode: 7500,
    },
    {
      İl: "Ardahan",
      İlçe: "Ardahan",
      postalCode: 7000,
    },
    {
      İl: "Ardahan",
      İlçe: "Göle",
      postalCode: 7100,
    },
    {
      İl: "Ardahan",
      İlçe: "Posof",
      postalCode: 7200,
    },
    {
      İl: "Artvin",
      İlçe: "Artvin",
      postalCode: 8000,
    },
    {
      İl: "Artvin",
      İlçe: "Arhavi",
      postalCode: 8100,
    },
    {
      İl: "Artvin",
      İlçe: "Hopa",
      postalCode: 8200,
    },
    {
      İl: "Aydın",
      İlçe: "Aydın",
      postalCode: 9000,
    },
    {
      İl: "Aydın",
      İlçe: "Nazilli",
      postalCode: 9200,
    },
    {
      İl: "Aydın",
      İlçe: "Kuşadası",
      postalCode: 9400,
    },
    {
      İl: "Aydın",
      İlçe: "Söke",
      postalCode: 9300,
    },
    {
      İl: "Balıkesir",
      İlçe: "Balıkesir",
      postalCode: 10000,
    },
    {
      İl: "Balıkesir",
      İlçe: "Ayvalık",
      postalCode: 10100,
    },
    {
      İl: "Balıkesir",
      İlçe: "Bandırma",
      postalCode: 10200,
    },
    {
      İl: "Balıkesir",
      İlçe: "Edremit",
      postalCode: 10300,
    },
    {
      İl: "Balıkesir",
      İlçe: "Erdek",
      postalCode: 10400,
    },
    {
      İl: "Balıkesir",
      İlçe: "Gönen",
      postalCode: 10500,
    },
    {
      İl: "Bartın",
      İlçe: "Bartın",
      postalCode: 74000,
    },
    {
      İl: "Bartın",
      İlçe: "Kurucaşile",
      postalCode: 74100,
    },
    {
      İl: "Bartın",
      İlçe: "Ulus",
      postalCode: 74200,
    },
    {
      İl: "Batman",
      İlçe: "Batman",
      postalCode: 72000,
    },
    {
      İl: "Batman",
      İlçe: "Kozluk",
      postalCode: 72100,
    },
    {
      İl: "Batman",
      İlçe: "Sason",
      postalCode: 72200,
    },
    {
      İl: "Bayburt",
      İlçe: "Bayburt",
      postalCode: 69000,
    },
    {
      İl: "Bilecik",
      İlçe: "Bilecik",
      postalCode: 11000,
    },
    {
      İl: "Bilecik",
      İlçe: "Bozüyük",
      postalCode: 11100,
    },
    {
      İl: "Bilecik",
      İlçe: "Gölpazarı",
      postalCode: 11200,
    },
    {
      İl: "Bingöl",
      İlçe: "Bingöl",
      postalCode: 12000,
    },
    {
      İl: "Bingöl",
      İlçe: "Karlıova",
      postalCode: 12100,
    },
  ];
  var randomSehir = iller[Math.floor(Math.random() * iller.length)]; //100.yil Gunes Market Karabuk, 78000

  let message1 = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    
      <meta http-equiv="Content-type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="x-apple-disable-message-reformatting" />
      <title>Steam hesabınız: Yeni tarayıcıdan veya mobil cihazdan erişim</title>
      <style type="text/css" media="screen">
          @font-face {
              font-family: 'Motiva Sans';
              font-style: normal;
              font-weight: 300;
              src: local('Motiva Sans'), url('https://store.cloudflare.steamstatic.com/public/shared/fonts/email/MotivaSans-Light.woff') format('woff');
          }
  
          @font-face {
              font-family: 'Motiva Sans';
              font-style: normal;
              font-weight: normal;
              src: local('Motiva Sans'), url('https://store.cloudflare.steamstatic.com//public/shared/fonts/email/MotivaSans-Regular.woff') format('woff');
          }
  
          @font-face {
              font-family: 'Motiva Sans';
              font-style: normal;
              font-weight: bold;
              src: local('Motiva Sans'), url('https://store.cloudflare.steamstatic.com//public/shared/fonts/email/MotivaSans-Bold.woff') format('woff');
          }
  
          [style*='Motiva Sans'] {
              font-family: 'Motiva Sans', Arial, sans-serif !important;
          }
      </style>
      <!--<![endif]-->
  
      <style type="text/css" media="screen">
          body { padding:0 !important; margin:0 auto !important; display:block !important; min-width:100% !important; width:100% !important; background:#ffffff; -webkit-text-size-adjust:none }
          a { color:#7abefa; text-decoration:underline }
          body a { color:#ffffff; text-decoration:underline }
          img { margin: 0 !important; -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
  
          /* for recepits */
              table { mso-table-lspace:0pt; mso-table-rspace:0pt; }
              img, a img{ border:0; outline:none; text-decoration:none; }
              #outlook a { padding:0; }
              .ReadMsgBody { width:100%; }
              .ExternalClass { width:100%; }
              div,p,a,li,td,blockquote { mso-line-height-rule:exactly; }
              a[href^=tel],a[href^=sms] { color:inherit; text-decoration:none; }
              .ExternalClass, .ExternalClass p, .ExternalClass td, .ExternalClass div, .ExternalClass span, .ExternalClass font { line-height:100%; }
          /* END for recepits */
  
          a[x-apple-data-detectors] { color: inherit !important; text-decoration: inherit !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
  
          .btn-18 a { display: block; padding: 13px 35px; text-decoration: none; }
  
          .l-white a { color: #ffffff; }
          .l-black a { color: #000001; }
          .l-grey1 a { color: #dbdee2; }
          .l-grey2 a { color: #a1a2a4; }
          .l-grey3 a { color: #dadcdd; }
          .l-grey4 a { color: #f1f1f1; }
          .l-grey5 a { color: #dddedf; }
          .l-grey6 a { color: #bfbfbf; }
          .l-grey7 a { color: #dcdddd; }
          .l-grey8 a { color: #8e96a4; }
          .l-green a { color: #a4d007; }
          .l-blue a { color: #6a7c96; }
          .l-blue1 a { color: #7abefa; }
          .l-blue2 a { color: #9eb8cc; }
  
  
          /* Mobile styles */
          @media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
              .mpy-35 { padding-top: 35px !important; padding-bottom: 35px !important; }
  
              .mpx-15 { padding-left: 15px !important; padding-right: 15px !important; }
  
              .mpx-20 { padding-left: 20px !important; padding-right: 20px !important; }
  
              .mpb-30 { padding-bottom: 30px !important; }
  
              .mpb-10 { padding-bottom: 10px !important; }
  
              .mpb-15 { padding-bottom: 15px !important; }
  
              .mpb-20 { padding-bottom: 20px !important; }
  
              .mpb-35 { padding-bottom: 35px !important; }
  
              .mpb-40 { padding-bottom: 40px !important; }
  
              .mpb-50 { padding-bottom: 50px !important; }
  
              .mpb-60 { padding-bottom: 60px !important; }
  
              .mpt-30 { padding-top: 30px !important; }
  
              .mpt-40 { padding-top: 40px !important; }
  
              .mpy-40 { padding-top: 40px !important; padding-bottom: 40px !important; }
  
              .mpt-0 { padding-top: 0px !important; }
  
              .mpr-0 { padding-right: 0px !important; }
  
              .mfz-14 { font-size: 14px !important; }
  
              .mfz-28 { font-size: 28px !important; }
  
              .mfz-16 { font-size: 16px !important; }
  
              .mfz-24 { font-size: 24px !important; }
  
              .mlh-18 { line-height: 18px !important; }
  
              u + body .gwfw { width:100% !important; width:100vw !important; }
  
              .td,
              .m-shell { width: 100% !important; min-width: 100% !important; }
  
              .mt-left { text-align: left !important; }
              .mt-center { text-align: center !important; }
              .mt-right { text-align: right !important; }
  
              .m-left { text-align: left !important; }
              .me-left { margin-right: auto !important; }
              .me-center { margin: 0 auto !important; }
              .me-right { margin-left: auto !important; }
  
              .mh-auto { height: auto !important; }
              .mw-auto { width: auto !important; }
  
              .fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }
  
              .column,
              .column-top,
              .column-dir,
              .column-dir-top { float: left !important; width: 100% !important; display: block !important; }
  
              .kmMobileStretch { float: left !important; width: 100% !important; display: block !important; padding-left: 0 !important; padding-right: 0 !important; }
  
              .m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }
              .m-block { display: block !important; }
  
              .mw-15 { width: 15px !important; }
  
              .mw-2p { width: 2% !important; }
              .mw-32p { width: 32% !important; }
              .mw-49p { width: 49% !important; }
              .mw-50p { width: 50% !important; }
              .mw-100p { width: 100% !important; }
  
              .mbgs-200p { background-size: 200% auto !important; }
          }
      </style>
  <style type="text/css">
  
      h4 
      {
          text-align: left;
      }
  
  @media screen 
  {
  
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:hidden;
          display:none;
     }   
  }
  
  @media print 
  {
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:visible;
          display:block;
     }
  
  }
  </style>
  </head><body class="body" style="padding:0 !important; margin:0 auto !important; display:block !important; min-width:100% !important; width:100% !important; background:#ffffff; -webkit-text-size-adjust:none;">
  
  
  
  <center>
      <table width="100%" border="0" cellspacing="0" cellpadding="0"style="margin: 0; padding: 0; width: 100%; height: 100%;" bgcolor="#ffffff" class="gwfw">
          <tr>
              <td style="margin: 0; padding: 0; width: 100%; height: 100%;" align="center" valign="top">
                  <table width="775" border="0" cellspacing="0" cellpadding="0"class="m-shell">
                      <tr>
                          <td class="td" style="width:775px; min-width:775px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                  <!-- Main -->
                                  <tr>
                                      <td class="p-80 mpy-35 mpx-15" bgcolor="#212429" style="padding: 80px;">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
  
                                              <!-- Logo -->
                                              <tr>
                                                  <td class="img pb-45" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 45px;">
                                                      <a href="https://store.steampowered.com/" target="_blank">
                                                          <img src="https://store.cloudflare.steamstatic.com/public/shared/images/email/logo.png" width="615" height="88" border="0" alt="Steam" />
                                                      </a>
  
                                                  </td>
                                              </tr>
                                              <!-- END Logo -->
  
                                              <!-- All Content Exists within this table column -->
                                              <tr>
                                                  <td>
  
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td class="title-36 pb-30 c-grey6 fw-b" style="font-size:36px; line-height:42px; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; padding-bottom: 30px; color:#bfbfbf; font-weight:bold;"><span style="color: #77b9ee;">${isim},</span></td>
                  </tr>
              </table>
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td class="text-18 c-grey4 pb-30" style="font-size:18px; line-height:25px; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; color:#dbdbdb; padding-bottom: 30px;">Görünüşe göre yeni bir aygıttan giriş yapmaya çalışıyorsunuz. Hesabınıza erişmek için gerekli Steam Guard kodu kodunuz şöyle:</td>
                  </tr>
              </table>
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td class="pb-70 mpb-50" style="padding-bottom: 70px;">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0"bgcolor="#17191c">
                              <tr>
                                  <td class="py-30 px-56" style="padding-top: 30px; padding-bottom: 30px; padding-left: 56px; padding-right: 56px;">
                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                      <tr>
                                                  <td style="font-size:18px; line-height:25px; font-family:Arial, sans-serif, 'Motiva Sans'; color:#8f98a0; text-align:center;">
                                                      Talebin yapıldığı yer:												</td>
                                              </tr>
                                              <tr>
                                                  <td style="font-size:25px; line-height:30px; font-family:Arial, sans-serif, 'Motiva Sans'; color:#f1f1f1; text-align:center;letter-spacing:1px">
                                                      Türkiye												</td>
                                              </tr>
                                              <tr>
                                                  <td style="padding-bottom: 16px"></td>
                                              </tr>
                                                                                  <tr>
                                              <td class="title-48 c-blue1 fw-b a-center" style="font-size:48px; line-height:52px; font-family:Arial, sans-serif, 'Motiva Sans'; color:#3a9aed; font-weight:bold; text-align:center;" id="password">
                                                  ${password}											</td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td class="pb-30" style="padding-bottom: 30px;">
                          <table width="210" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                  <td><br>&nbsp;</td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td class="title-36 pb-30 c-grey6 fw-b" style="font-size:30px; line-height:34px; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; padding-bottom: 20px; color:#bfbfbf; font-weight:bold;">Bu siz değil misiniz?</td>
                  </tr>
              </table>
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td class="text-18 c-grey4 pb-30" style="font-size:18px; line-height:25px; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; color:#dbdbdb; padding-bottom: 30px;">Bu e-posta biri Steam adlı hesabınıza giriş yapmaya çalıştığı için gönderildi. Giriş yapılırken <span style="color: #ffffff; font-weight: bold;">doğru hesap adı ve parola</span> kullanıldı.<br><br>
  Hesabınıza giriş yapmayı deneyen siz değilseniz <a href="https://help.steampowered.com/wizard/HelpWithLogin">Steam parolanızı sıfırlamanızı</a> tavsiye ederiz.<br><br>
  Hesabınıza giriş yapmak için bu e-postada yer alan giriş kodu gereklidir. Bu kodu kimseyle paylaşmayın.</td>
                  </tr>
              </table>
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td class="pb-30" style="padding-bottom: 30px;">
                          <table width="210" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                  <td><br>&nbsp;</td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td class="title-36 pb-30 c-grey6 fw-b" style="font-size:30px; line-height:34px; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; padding-bottom: 20px; color:#bfbfbf; font-weight:bold;">Burada (Türkiye) yaşamıyor musunuz?</td>
                  </tr>
              </table>
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td class="text-18 c-grey4 pb-30" style="font-size:18px; line-height:25px; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; color:#dbdbdb; padding-bottom: 30px;">Yukarıda verilen giriş denemesinin yapıldığı yeri tanımıyorsanız sahte bir Steam internet sitesi üzerinden giriş yapmayı deniyor olabilirsiniz. Giriş yapmaya devam etmeden önce lütfen <a href="https://help.steampowered.com/tr/wizard/HelpUnauthorizedLogin?stoken=0APf5cs36lvKofvFyMKO919aplf3wFGs7%2BJUsRUhPPXD7HxGm26OZ%2FjFdxnULOLmctYanASj%2FJzV0XduLU4%2BMUCL5AoqZIPzGkVlEuNHpk7j7DOE2umZaa4TIMpL0oqX">konumunuzu doğrulayın</a>.</td>
                  </tr>
              </table>
              
                                                                                                  <!-- Signature -->
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                      <tr>
                                                          <td class="pt-30" style="padding-top: 30px;">
                                                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                  <tr>
                                                                      <td class="img" width="3" bgcolor="#3a9aed" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                      <td class="img" width="37" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                      <td>
                                                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                              <tr>
                                                                                                                                                                      <td class="text-16 py-20 c-grey4 fallback-font" style="font-size:16px; line-height:22px; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; padding-top: 20px; padding-bottom: 20px; color:#f1f1f1;">
                                                                                          Saygılarımızla,<br />
  Steam Ekibi                                                                                    </td>
                                                                                                                                                              </tr>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </table>
                                                  <!-- END Signature -->
                                                  
                                                  </td>
                                              </tr>
  
                                          </table>
                                      </td>
                                  </tr>
                                  <!-- END Main -->
  
                                  <!-- Footer -->
                                  <tr>
                                      <td class="py-60 px-90 mpy-40 mpx-15" style="padding-top: 60px; padding-bottom: 60px; padding-left: 90px; padding-right: 90px;">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
  
                                                                                          <tr>
                                                  <td class="text-18 pb-60 mpb-40 fallback-font" style="font-size:18px; line-height:25px; color:#000001; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; padding-bottom: 60px;">
                                                      Bu bildirim Steam hesabınızla ilişkilendirilmiş e-posta adresinize gönderildi.                                                    <br /><br />
                                                      Bu e-posta mesajı otomatik oluşturulmuştur. Lütfen cevaplamayınız. İlave desteğe ihtiyacınız varsa Steam Destek'i ziyaret edin.                                                </td>
                                              </tr>
                                              
                                                                                          <!-- A -->
                                                                                          <tr>
                                              <td class="pb-60" style="padding-bottom: 60px;">
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                      <tr>
                                                          <th class="column" width="270" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                  <tr>
                                                                      <td class="text-18 mpb-40 fallback-font" style="font-size:18px; line-height:25px; color:#000001; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left;">
                                                                          <a href="https://help.steampowered.com" target="_blank" class="link-u c-black" style="text-decoration:underline; color:#000001;">
                                                                              <span class="link-u c-black" style="text-decoration:underline; color:#000001;">https://help.steampowered.com</span>
                                                                          </a>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </th>
                                                                                                              </tr>
                                                  </table>
                                              </td>
                                              </tr>
                                              
  
                                              <!-- B -->
                                                                                              <tr>
                                                      <td class="pb-50" style="padding-bottom: 50px;">
                                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                              <tr>
                                                                  <th class="column" width="270" valign="top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                          <tr>
                                                                              <td class="img mpt-0" style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                                  <a href="https://store.steampowered.com/" target="_blank"><img src="https://store.cloudflare.steamstatic.com/public/shared/images/email/logo_footer.png" width="165" height="50" border="0" alt="" /></a>
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                                  </th>
                                                                  <th class="column-top mpb-40" width="15" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;"></th>
                                                                  <th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                                                                                      <tr>
                                                                                  <td class="text-12 fallback-font" style="font-size:12px; line-height:18px; color:#000001; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left;">
                                                                                                                                                                              Steam masaüstü istemcisini indirmek ve Steam hakkında ayrıntılı bilgi için lütfen "Steam Hakkında" kısmını ziyaret edin.                                                                                        <br /><br />
                                                                                          <a href="https://store.steampowered.com/about/" target="_blank" class="link-u c-black" style="text-decoration:underline; color:#000001;">
                                                                                              <span class="link-u c-black" style="text-decoration:underline; color:#000001;"><strong>Steam Hakkında</strong>
                                                                                              </span>
                                                                                          </a>
                                                                                                                                                                      </td>
                                                                              </tr>
                                                                                                                                              </table>
                                                                  </th>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                  </tr>
  
                                              
  
                                              <!-- C -->
                                              <tr>
                                                  <td>
                                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                          <tr>
                                                              <th class="column-top" valign="top" width="270" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                      <tr>
                                                                          <td class="img" style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                              <a href="https://www.valvesoftware.com/en/" target="_blank">
                                                                                                                                                                  <img src="https://store.cloudflare.steamstatic.com/public/shared/images/email/logo_valve.jpg" width="165" height="48" border="0" alt="" />
                                                                                                                                                              </a>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </th>
                                                              <th class="column-top mpb-40" valign="top" width="15" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;"></th>
                                                              <th class="column-top" valign="top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                      <tr>
                                                                          <td class="text-12 pb-30 fallback-font" style="font-size:12px; line-height:18px; color:#000001; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; padding-bottom: 30px;">
                                                                                                                                                              <strong>© Valve Corporation</strong>
                                                                                  <br />
                                                                                  <strong>PO Box 1688 Bellevue, WA 98009</strong>
                                                                                  <br /><br />
                                                                                  Tüm hakları saklıdır. Tüm ticari markalar, ABD ve diğer ülkelerde ilgili sahiplerinin mülkiyetindedir.	                                                                                                                                                </td>
                                                                      </tr>
                                                                      
                                                                  </table>
                                                              </th>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              <!-- END Footer -->
                              </table>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
  </center>
  
      <center style="font-family:Arial, sans-serif, 'Motiva Sans'; color: #000000; font-size: 11px; margin-bottom: 4px;">
          Bu mesajı görüntülemekte sıkıntı mı yaşıyorsunuz?        <a href="https://store.steampowered.com/email/codefornewwebloginwithiplocwarning?sparams=eJyFkl1v2jAUhv9KhdS7CRw7_kilaWNroR8wUFsqVnFzYp-UlCROE7sUpv33OYyLVpq0u-T1e14_x-f86hXgK73Gxu1q7J31SO9Tr0EoyvD9VNgUiiDUjTVeuwrKznLnEMqgtr6ubeOwhLwI8vH3a9sd13aLDZq-tu-cbe66-rVzdXu2GqwGayzq_j_8x9AWK-edDiWRUIpGMWW8S0PdoNPWdGFTKZe0E5-OwoHuZOyhMSebgN3hF7DD5kgPqfEF7PM9JSQmyaHdDq5e5-26yKvNB8IDXIAqfZW7XYe3GoB2ua3a1eD2UHjn2zrXufXtxD7l1ZfW2Q1WnzEBRVSMkUBtUGAs0izJgEWGIc2I1MgylmYkE4SJhFCOLPjTlJNYaqNFKpQWoKTkmgcX0WmGsSKGkSRikmDMuTApUYkBhQRpxMNNVCpMOGcik0IARISmNI4AeRIpRnRkNDFAwo0KIs1jDIlCZIJLqpgGElNIFGVMKsPCw3Tj8RV4t7ZNvkcDWmPb_n-Cq4FrVoNtvg8zWA0ug2XxLuXDK5HhPOO6ZaJ4vbHZ62g3vZklUQJ1kbHtaNzKU_rtetHeLtbz-fJcXr6NSypmj6d09Dwyb9ViMpuU2v2Eanj3HMTr_QNZGj9ZxKFuuvg-4UP78ng13483D8WF_3FZb-SzPJ9dUF8-AsT3V9N6QuzLMnSb12BM87dBpfqUyb5M-lEUhzNtfeWa3XGF7m-7hXPg8CgMqw000PnCknzUfv8B3hkbnw"
              style="font-family:Arial, sans-serif, 'Motiva Sans'; color: #000000; font-size: 11px; margin-bottom: 4px;">
              Buraya tıklayın        </a>
      </center>
  </body>
  </html>
  
  `;
  let message2 = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    
      <meta http-equiv="Content-type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="x-apple-disable-message-reformatting" />
      <title>Steam satın alımınız için teşekkür ederiz!</title>
   
      <style type="text/css" media="screen">
          @font-face {
              font-family: 'Motiva Sans';
              font-style: normal;
              font-weight: 300;
              src: local('Motiva Sans'), url('https://store.akamai.steamstatic.com/public/shared/fonts/email/MotivaSans-Light.woff') format('woff');
          }
  
          @font-face {
              font-family: 'Motiva Sans';
              font-style: normal;
              font-weight: normal;
              src: local('Motiva Sans'), url('https://store.akamai.steamstatic.com//public/shared/fonts/email/MotivaSans-Regular.woff') format('woff');
          }
  
          @font-face {
              font-family: 'Motiva Sans';
              font-style: normal;
              font-weight: bold;
              src: local('Motiva Sans'), url('https://store.akamai.steamstatic.com//public/shared/fonts/email/MotivaSans-Bold.woff') format('woff');
          }
  
          [style*='Motiva Sans'] {
              font-family: 'Motiva Sans', Arial, sans-serif !important;
          }
      </style>
      <!--<![endif]-->
  
      <style type="text/css" media="screen">
          body { padding:0 !important; margin:0 auto !important; display:block !important; min-width:100% !important; width:100% !important; background:#ffffff; -webkit-text-size-adjust:none }
          a { color:#7abefa; text-decoration:underline }
          body a { color:#ffffff; text-decoration:underline }
          img { margin: 0 !important; -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
  
          /* for recepits */
              table { mso-table-lspace:0pt; mso-table-rspace:0pt; }
              img, a img{ border:0; outline:none; text-decoration:none; }
              #outlook a { padding:0; }
              .ReadMsgBody { width:100%; }
              .ExternalClass { width:100%; }
              div,p,a,li,td,blockquote { mso-line-height-rule:exactly; }
              a[href^=tel],a[href^=sms] { color:inherit; text-decoration:none; }
              .ExternalClass, .ExternalClass p, .ExternalClass td, .ExternalClass div, .ExternalClass span, .ExternalClass font { line-height:100%; }
          /* END for recepits */
  
          a[x-apple-data-detectors] { color: inherit !important; text-decoration: inherit !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
  
          .btn-18 a { display: block; padding: 13px 35px; text-decoration: none; }
  
          .l-white a { color: #ffffff; }
          .l-black a { color: #000001; }
          .l-grey1 a { color: #dbdee2; }
          .l-grey2 a { color: #a1a2a4; }
          .l-grey3 a { color: #dadcdd; }
          .l-grey4 a { color: #f1f1f1; }
          .l-grey5 a { color: #dddedf; }
          .l-grey6 a { color: #bfbfbf; }
          .l-grey7 a { color: #dcdddd; }
          .l-grey8 a { color: #8e96a4; }
          .l-green a { color: #a4d007; }
          .l-blue a { color: #6a7c96; }
          .l-blue1 a { color: #7abefa; }
          .l-blue2 a { color: #9eb8cc; }
  
  
          /* Mobile styles */
          @media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
              .mpy-35 { padding-top: 35px !important; padding-bottom: 35px !important; }
  
              .mpx-15 { padding-left: 15px !important; padding-right: 15px !important; }
  
              .mpx-20 { padding-left: 20px !important; padding-right: 20px !important; }
  
              .mpb-30 { padding-bottom: 30px !important; }
  
              .mpb-10 { padding-bottom: 10px !important; }
  
              .mpb-15 { padding-bottom: 15px !important; }
  
              .mpb-20 { padding-bottom: 20px !important; }
  
              .mpb-35 { padding-bottom: 35px !important; }
  
              .mpb-40 { padding-bottom: 40px !important; }
  
              .mpb-50 { padding-bottom: 50px !important; }
  
              .mpb-60 { padding-bottom: 60px !important; }
  
              .mpt-30 { padding-top: 30px !important; }
  
              .mpt-40 { padding-top: 40px !important; }
  
              .mpy-40 { padding-top: 40px !important; padding-bottom: 40px !important; }
  
              .mpt-0 { padding-top: 0px !important; }
  
              .mpr-0 { padding-right: 0px !important; }
  
              .mfz-14 { font-size: 14px !important; }
  
              .mfz-28 { font-size: 28px !important; }
  
              .mfz-16 { font-size: 16px !important; }
  
              .mfz-24 { font-size: 24px !important; }
  
              .mlh-18 { line-height: 18px !important; }
  
              u + body .gwfw { width:100% !important; width:100vw !important; }
  
              .td,
              .m-shell { width: 100% !important; min-width: 100% !important; }
  
              .mt-left { text-align: left !important; }
              .mt-center { text-align: center !important; }
              .mt-right { text-align: right !important; }
  
              .m-left { text-align: left !important; }
              .me-left { margin-right: auto !important; }
              .me-center { margin: 0 auto !important; }
              .me-right { margin-left: auto !important; }
  
              .mh-auto { height: auto !important; }
              .mw-auto { width: auto !important; }
  
              .fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }
  
              .column,
              .column-top,
              .column-dir,
              .column-dir-top { float: left !important; width: 100% !important; display: block !important; }
  
              .kmMobileStretch { float: left !important; width: 100% !important; display: block !important; padding-left: 0 !important; padding-right: 0 !important; }
  
              .m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }
              .m-block { display: block !important; }
  
              .mw-15 { width: 15px !important; }
  
              .mw-2p { width: 2% !important; }
              .mw-32p { width: 32% !important; }
              .mw-49p { width: 49% !important; }
              .mw-50p { width: 50% !important; }
              .mw-100p { width: 100% !important; }
  
              .mbgs-200p { background-size: 200% auto !important; }
          }
      </style>
  <style type="text/css">
  
      h4 
      {
          text-align: left;
      }
  
  @media screen 
  {
  
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:hidden;
          display:none;
     }   
  }
  
  @media print 
  {
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:visible;
          display:block;
     }
  
  }
  </style>
  </head><body class="body" style="padding:0 !important; margin:0 auto !important; display:block !important; min-width:100% !important; width:100% !important; background:#ffffff; -webkit-text-size-adjust:none;">
  
  
  
  <center>
      <table width="100%" border="0" cellspacing="0" cellpadding="0"style="margin: 0; padding: 0; width: 100%; height: 100%;" bgcolor="#ffffff" class="gwfw">
          <tr>
              <td style="margin: 0; padding: 0; width: 100%; height: 100%;" align="center" valign="top">
                  <table width="775" border="0" cellspacing="0" cellpadding="0"class="m-shell">
                      <tr>
                          <td class="td" style="width:775px; min-width:775px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                  <!-- Main -->
                                  <tr>
                                      <td class="p-80 mpy-35 mpx-15" bgcolor="#212429" style="padding: 80px;">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
  
                                              <!-- Logo -->
                                              <tr>
                                                  <td class="img pb-45" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 45px;">
                                                      <a href="https://store.steampowered.com/" target="_blank">
                                                          <img src="https://store.akamai.steamstatic.com/public/shared/images/email/logo.png" width="615" height="88" border="0" alt="Steam" />
                                                      </a>
  
                                                  </td>
                                              </tr>
                                              <!-- END Logo -->
  
                                              <!-- All Content Exists within this table column -->
                                              <tr>
                                                  <td>
  
  
  <!-- Welcome  -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td class="title-36 pb-30 c-grey6 fw-b" style="font-size:36px; line-height:42px; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; padding-bottom: 30px; color:#bfbfbf; font-weight:bold;">Merhaba ${isim}</td>
                  </tr>
              </table>
              <!-- End Welcome -->
  
  
      <!-- Intro  -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td class="title-28 c-white pb-30" style="font-size:28px; line-height:36px; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; color:#ffffff; padding-bottom: 30px;">
                          <strong>Steam'deki son satın alım işleminiz için teşekkür ederiz.</strong>
                      </td>
                  </tr>
              </table>
                  <!-- End Intro -->
  
      <!-- Text -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td class="text-18 c-grey4 pb-30" style="font-size:18px; line-height:25px; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; color:#dbdbdb; padding-bottom: 30px;">        Aşağıdaki öğeler Steam kütüphanenize eklendi.        <br/><br/>
          Eğer Steam'e yeniyseniz, <a href="https://store.steampowered.com/about/">buradan</a> Steam uygulamasını edinebilirsiniz.
          </td>
                  </tr>
              </table>
                  <!-- End Text -->
  
  
  
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr><td style="padding-top: 10px;" colspan="3"></td></tr>
                  <tr><td style="font-family:'Motiva Sans', Arial, sans-serif; padding-top: 10px; padding-bottom: 20px; color: #6892A7; font-size: 14px; text-transform: uppercase;" colspan="3">Steam Puanlarınız</td></tr>
                  <tr>
                      <td style="font-family:'Motiva Sans', Arial, sans-serif; border: 1px solid #4B99E1;height: 77px; padding: 10px;" colspan="3" background="https://store.akamai.steamstatic.com/public/images/v6/cart/steam_rewards_checkout_banner.png" bgcolor="#17253d">
                          <table width="100%" style="height: 77px;">
                              <tr>
                                  <td>
                                      <div style="font-family:'Motiva Sans', Arial, sans-serif; color: #74A2B8;font-weight: bold; font-size: 13px; padding-bottom: 20px;">Steam puanı kazandınız</div>
                                      <div>
                                          <a style="font-family:'Motiva Sans', Arial, sans-serif; color: #ffffff; font-size: 13px;" href="https://store.steampowered.com/points/shop">Puan Dükkânı'nı Ziyaret Et</a>
                                      </div>
                                  </td>
                                  <td style="text-align: right;"><img src="https://store.akamai.steamstatic.com/public/images/v6/cart/steam_rewards_logo_small.png?v=2"></td>
                                  <td class="text-15 c-grey4 mt-right" style="font-family:'Motiva Sans', Arial, sans-serif; color:#74A2B8; font-weight:bold; font-size: 15px;text-align:left;">347</td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
              
  <!-- Start weird VAT stuff -->
  
  
      
  
                      <!-- Line Items -->
                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td class="pt-10" style="padding-top: 10px;">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                  <td class="p-15" bgcolor="#393e47" style="padding: 15px;">
                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                          <tr>
                                              <th class="column" width="184" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                      <tr>
                                                          <td class="fluid-img" style="font-size:0pt; line-height:0pt; text-align:left;"><img src="https://ci4.googleusercontent.com/proxy/sJlPscZBhRm9PDwboYZKfwfvh6U6c1Bi-_AbaPH8ySRdE4WcA9uaHpF_GMA4psvpNH2JRYICteYlrwUIYigOId2q-CS8FnYZS2xm8CcaeLLDjBp6itQwWeXLeXvq0MSHgKH41FMI8qHVOsYo=s0-d-e1-ft#https://cdn.cloudflare.steamstatic.com/steam/apps/271590/capsule_616x353.jpg?t=1678296348" width="152" height="80" border="0" alt="" /></td>
                                                      </tr>
                                                  </table>
                                              </th>
                                              <th class="column mpb-15" width="15" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"></th>
                                              <th class="column" width="200" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                      <tr>
                                                          <td class="text-17 c-white mt-left" style="font-size:17px; line-height:22px; font-family:'Motiva Sans', Arial, sans-serif; text-align:left; color:#ffffff;">
                                                              <strong>Grand Theft Auto V<br/></strong>
                                                          </td>
                                                      </tr>
                                                  </table>
                                              </th>
                                              <th class="column mpb-15" width="15" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"></th>
                                              <th class="column" style="vertical-align: top; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                  
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
              
                              <tr>
                      <td class="text-11 c-grey4 a-right mt-left pb-5" style="font-size:11px; line-height:17px; font-family:'Motiva Sans', Arial, sans-serif; color:#f1f1f1; text-align:right; padding-bottom: 5px;">
                          Ara topl. (KDV'siz): 229,5 TL					</td>
                  </tr>
                  <tr>
                      <td class="text-11 c-grey4 a-right mt-left pb-5" style="font-size:11px; line-height:17px; font-family:'Motiva Sans', Arial, sans-serif; color:#f1f1f1; text-align:right; padding-bottom: 5px;">
                          %18 KDV: 46,5 TL					</td>
                  </tr>
                          <tr>
                  <td class="text-14 c-white a-right mt-left" style="font-size:14px; line-height:20px; font-family:'Motiva Sans', Arial, sans-serif; color:#ffffff; text-align:right;">
                                              <strong>Toplam: 276 TL</strong>
                                      </td>
              </tr>
          </table>
                                                      </th>
                                          </tr>
                                                                              </table>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
                                  <!-- END Line Items -->
  
  
                      <!-- Summary -->
                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td class="pb-10 pt-10" style="padding-bottom: 10px; padding-top: 10px;">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                  <th class="column-top" valign="top" width="375" bgcolor="#17191c" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                          <tr>
                                              <td class="p-15" style="padding: 15px;">
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                                              <tr>
                                                              <td class="pb-5" style="padding-bottom: 5px;">
                                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                      <tr>
                                                                          <td valign="top" class="text-12 c-grey4" width="140" style="font-size:12px; line-height:18px; font-family:'Motiva Sans', Arial, sans-serif; text-align:left; color:#f1f1f1;">
                                                                              Hesap adı:                                                                        </td>
                                                                          <td valign="top" class="img" width="10" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                          <td valign="top" class="text-12 c-grey4 mt-right" style="font-size:12px; line-height:18px; font-family:'Motiva Sans', Arial, sans-serif; text-align:left; color:#f1f1f1;">
                                                                              <strong>name</strong>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                                                                              <tr>
                                                              <td class="pb-5" style="padding-bottom: 5px;">
                                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                      <tr>
                                                                          <td valign="top" class="text-12 c-grey4" width="140" style="font-size:12px; line-height:18px; font-family:'Motiva Sans', Arial, sans-serif; text-align:left; color:#f1f1f1;">
                                                                              Fatura:                                                                        </td>
                                                                          <td valign="top" class="img" width="10" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                          <td valign="top" class="text-12 c-grey4 mt-right" style="font-size:12px; line-height:18px; font-family:'Motiva Sans', Arial, sans-serif; text-align:left; color:#f1f1f1;">
                            <!---random number count is 19-->                                                  <strong>3409834688604815024</strong>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                                                                              <tr>
                                                              <td class="pb-5" style="padding-bottom: 5px;">
                                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                      <tr>
                                                                          <td valign="top" class="text-12 c-grey4" width="140" style="font-size:12px; line-height:18px; font-family:'Motiva Sans', Arial, sans-serif; text-align:left; color:#f1f1f1;">
                                                                              Düzenlenme tarihi:                                                                        </td>
                                                                          <td valign="top" class="img" width="10" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                          <td valign="top" class="text-12 c-grey4 mt-right" style="font-size:12px; line-height:18px; font-family:'Motiva Sans', Arial, sans-serif; text-align:left; color:#f1f1f1;" id="time">
                           <!--bugunku tarih ve saat -->                                                   <strong>${d.getDay()} ${month} ${d.getFullYear()} @ ${d.getHours()}:${d.getMinutes()} +03</strong>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                                                                      </table>
                                              </td>
                                          </tr>
                                      </table>
                                  </th>
                                  <th class="column mpb-10" width="10" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"></th>
                                  <th class="column-top" valign="top" bgcolor="#17191c" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                          <tr>
                                              <td class="p-15" style="padding: 15px;">
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                                              <tr>
                                                              <td class="pb-5" style="padding-bottom: 5px;">
                                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                      <tr>
                                                                          <td valign="top" class="text-12 c-grey4" style="font-size:12px; line-height:18px; font-family:'Motiva Sans', Arial, sans-serif; text-align:left; color:#f1f1f1;">
                                                                              Ara topl. (KDV'siz):                                                                        </td>
                                                                          <td valign="top" class="img" width="10" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                          <td valign="top" class="text-12 c-grey4 a-right" style="font-size:12px; line-height:18px; font-family:'Motiva Sans', Arial, sans-serif; color:#f1f1f1; text-align:right;">
                                                                              229,5 TL                                                                        </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                                                                              <tr>
                                                              <td class="pb-5" style="padding-bottom: 5px;">
                                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                      <tr>
                                                                          <td valign="top" class="text-12 c-grey4" style="font-size:12px; line-height:18px; font-family:'Motiva Sans', Arial, sans-serif; text-align:left; color:#f1f1f1;">
                                                                              %18 KDV:                                                                        </td>
                                                                          <td valign="top" class="img" width="10" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                          <td valign="top" class="text-12 c-grey4 a-right" style="font-size:12px; line-height:18px; font-family:'Motiva Sans', Arial, sans-serif; color:#f1f1f1; text-align:right;">
                                                                              46,5 TL                                                                        </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                                                                              <tr>
                                                              <td class="pb-5" style="padding-bottom: 5px;">
                                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                      <tr>
                                                                          <td valign="top" class="text-12 c-grey4" style="font-size:12px; line-height:18px; font-family:'Motiva Sans', Arial, sans-serif; text-align:left; color:#f1f1f1;">
                                                                              Toplam:                                                                        </td>
                                                                          <td valign="top" class="img" width="10" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                          <td valign="top" class="text-12 c-grey4 a-right" style="font-size:12px; line-height:18px; font-family:'Motiva Sans', Arial, sans-serif; color:#f1f1f1; text-align:right;">
                                                                              276 TL                                                                        </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                                                                      </table>
                                              </td>
                                          </tr>
                                      </table>
                                  </th>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
                                  <!-- END Summary -->
  
  
  <!-- Billing and Shipping - Done -->
  
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
              <td class="pb-10" style="padding-bottom: 10px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                          <td class="p-15" bgcolor="#17191c" style="padding: 15px;">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                  <tr>
                                      <td align="left">
                                          <table border="0" cellspacing="0" cellpadding="0" class="mw-100p">
                                              <tr>
  
                                                  
                                                  
  
                                                                                                      <th class="column-top" valign="top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                              <tr>
                                                                  <td class="text-14 c-grey4" style="font-size:14px; line-height:20px; font-family:'Motiva Sans', Arial, sans-serif; text-align:left; color:#f1f1f1;">
                                                                      <strong>Fatura adresi:</strong>
                                                                      <br />
                                                                      Fullname                                                                     <br />
                                                                    <div id="ilce">${
                                                                      randomSehir.İlçe
                                                                    }</div>                                                                                                                                              <div id="il">${
    randomSehir.İl
  }</div>
                                                                                                                                          <br />
                                                                      <div id="ill">${
                                                                        randomSehir.İl
                                                                      }, ${
    randomSehir.postalCode
  }</div>                                                         <br />
                                                                      Türkiye                                                                </td>
                                                              </tr>
                                                          </table>
                                                      </th>
                                                      <th class="column mpb-15" width="40" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;"></th>
                                                  
                                                  
  
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                                                              </table>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
  
  <!-- END Billing and Shipping - Done -->
  
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
      <td class="pb-35" style="padding-bottom: 35px;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                  <td class="p-15" bgcolor="#17191c" style="padding: 15px;">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                              <td class="text-12 c-grey4" style="font-size:12px; line-height:18px; font-family:'Motiva Sans', Arial, sans-serif; text-align:left; color:#f1f1f1;" id="vergiler">
                                  Valve Corporation<br/>PO Box 1688<br/>Bellevue, WA 98009<br/>United States<br/>                                KDV ID: <!--- random number is begin 92 and count is 10---> ${verginumber}                                <br/>
                                                                  <br/>
                                  Lütfen bunun bir iade adresi olmadığını unutmayın.</br>
                                                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
      </td>
  </tr>
  </table>
  
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <!-- Section - Divider -->
          <tr>
              <td class="pb-35" style="border-top: 2px solid #3a9aed; padding-bottom: 35px;">&nbsp;</td>
          </tr>
          <!-- END Section - Divider -->
      </table>
  
      
              <!-- Bright Blue Final Summary -->
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td class="pb-70 mpb-35" style="padding-bottom: 70px;">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                  <td class="p-15 pb-10" bgcolor="#3a9aed" style="padding: 15px; padding-bottom: 10px;">
                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                          <tr>
                                              <th class="column" width="285" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                                              <tr>
                                                              <td class="pb-5" style="padding-bottom: 5px;">
                                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                      <tr>
                                                                          <td valign="top" class="text-12 c-grey4" width="140" style="font-size:12px; line-height:18px; font-family:'Motiva Sans', Arial, sans-serif; text-align:left; color:#f1f1f1;">
                                                                              account name:																		</td>
                                                                          <td valign="top" class="img" width="10" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                          <td valign="top" class="text-12 c-grey4 mt-right" style="font-size:12px; line-height:18px; font-family:'Motiva Sans', Arial, sans-serif; text-align:left; color:#f1f1f1;">
                                                                              <strong>abdul&#8203;aziz2&#8203;00409&#8203;</strong>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                                                                              <tr>
                                                              <td class="pb-5" style="padding-bottom: 5px;">
                                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                      <tr>
                                                                          <td valign="top" class="text-12 c-grey4" width="140" style="font-size:12px; line-height:18px; font-family:'Motiva Sans', Arial, sans-serif; text-align:left; color:#f1f1f1;">
                                                                              Ödeme yöntemi:																		</td>
                                                                          <td valign="top" class="img" width="10" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                          <td valign="top" class="text-12 c-grey4 mt-right" style="font-size:12px; line-height:18px; font-family:'Motiva Sans', Arial, sans-serif; text-align:left; color:#f1f1f1;">
                                                                              <strong>MasterCard</strong>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                                                                      </table>
                                              </th>
                                              <th class="column-top mpb-10" valign="top" width="10" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;"></th>
                                              <th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                                              <tr>
                                                              <td class="pb-5" style="padding-bottom: 5px;">
                                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                      <tr>
                                                                          <td valign="top" class="text-12 c-grey4" width="200" style="font-size:12px; line-height:18px; font-family:'Motiva Sans', Arial, sans-serif; text-align:left; color:#f1f1f1;">
                                                                              Bu işlem için toplamınız:																		</td>
                                                                          <td valign="top" class="img" width="10" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                          <td valign="top" class="text-16 c-grey4 mt-right" style="font-size:16px; line-height:22px; font-family:'Motiva Sans', Arial, sans-serif; text-align:left; color:#f1f1f1;">
                                                                              <strong>276</strong>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                                                                      </table>
                                              </th>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
                          <!-- END Bright Blue Final Summary -->
  
  
  
              
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td class="pb-30" style="padding-bottom: 30px;">
                          <table width="210" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                  <td><br>&nbsp;</td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
              
              <!-- Text -->
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td class="text-18 c-grey4 pb-30" style="font-size:18px; line-height:25px; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; color:#dbdbdb; padding-bottom: 30px;">                Bu e-posta iletisi bir makbuz görevi görmektedir. Ayrıca dilediğiniz zaman <a href="https://store.steampowered.com/account/history/">satın alım geçmişinize göz atabilirsiniz</a>.                <br/><br/>
                  Steam'deki birçok ürün için geri ödeme ve/veya iade imkânı vardır. Steam iadeleri ile ilgili daha fazlasını <a href="https://store.steampowered.com/steam_refunds/">buradan</a> öğrenebilir veya <a href="https://help.steampowered.com/">buradan</a> iade talebinde bulunabilirsiniz.                </td>
                  </tr>
              </table>
                          <!-- End Text -->
  
  
  
                                                                                                  <!-- Signature -->
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                      <tr>
                                                          <td class="pt-30" style="padding-top: 30px;">
                                                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                  <tr>
                                                                      <td class="img" width="3" bgcolor="#3a9aed" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                      <td class="img" width="37" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                      <td>
                                                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                              <tr>
                                                                                                                                                                      <td class="text-16 py-20 c-grey4 fallback-font" style="font-size:16px; line-height:22px; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; padding-top: 20px; padding-bottom: 20px; color:#f1f1f1;">
                                                                                          Saygılarımızla,<br />
  Steam Ekibi                                                                                    </td>
                                                                                                                                                              </tr>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </table>
                                                  <!-- END Signature -->
                                                  
                                                  </td>
                                              </tr>
  
                                          </table>
                                      </td>
                                  </tr>
                                  <!-- END Main -->
  
                                  <!-- Footer -->
                                  <tr>
                                      <td class="py-60 px-90 mpy-40 mpx-15" style="padding-top: 60px; padding-bottom: 60px; padding-left: 90px; padding-right: 90px;">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
  
                                                                                          <tr>
                                                  <td class="text-18 pb-60 mpb-40 fallback-font" style="font-size:18px; line-height:25px; color:#000001; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; padding-bottom: 60px;">
                                                      Bu bildirim Steam hesabınızla ilişkilendirilmiş e-posta adresinize gönderildi.                                                    <br /><br />
                                                      Bu e-posta mesajı otomatik oluşturulmuştur. Lütfen cevaplamayınız. İlave desteğe ihtiyacınız varsa Steam Destek'i ziyaret edin.                                                </td>
                                              </tr>
                                              
                                                                                          <!-- A -->
                                                                                          <tr>
                                              <td class="pb-60" style="padding-bottom: 60px;">
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                      <tr>
                                                          <th class="column" width="270" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                  <tr>
                                                                      <td class="text-18 mpb-40 fallback-font" style="font-size:18px; line-height:25px; color:#000001; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left;">
                                                                          <a href="https://help.steampowered.com" target="_blank" class="link-u c-black" style="text-decoration:underline; color:#000001;">
                                                                              <span class="link-u c-black" style="text-decoration:underline; color:#000001;">https://help.steampowered.com</span>
                                                                          </a>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </th>
                                                                                                              </tr>
                                                  </table>
                                              </td>
                                              </tr>
                                              
  
                                              <!-- B -->
                                                                                              <tr>
                                                      <td class="pb-50" style="padding-bottom: 50px;">
                                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                              <tr>
                                                                  <th class="column" width="270" valign="top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                          <tr>
                                                                              <td class="img mpt-0" style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                                  <a href="https://store.steampowered.com/" target="_blank"><img src="https://store.akamai.steamstatic.com/public/shared/images/email/logo_footer.png" width="165" height="50" border="0" alt="" /></a>
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                                  </th>
                                                                  <th class="column-top mpb-40" width="15" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;"></th>
                                                                  <th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                                                                                      <tr>
                                                                                  <td class="text-12 fallback-font" style="font-size:12px; line-height:18px; color:#000001; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left;">
                                                                                                                                                                              Steam masaüstü istemcisini indirmek ve Steam hakkında ayrıntılı bilgi için lütfen "Steam Hakkında" kısmını ziyaret edin.                                                                                        <br /><br />
                                                                                          <a href="https://store.steampowered.com/about/" target="_blank" class="link-u c-black" style="text-decoration:underline; color:#000001;">
                                                                                              <span class="link-u c-black" style="text-decoration:underline; color:#000001;"><strong>Steam Hakkında</strong>
                                                                                              </span>
                                                                                          </a>
                                                                                                                                                                      </td>
                                                                              </tr>
                                                                                                                                              </table>
                                                                  </th>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                  </tr>
  
                                              
  
                                              <!-- C -->
                                              <tr>
                                                  <td>
                                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                          <tr>
                                                              <th class="column-top" valign="top" width="270" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                      <tr>
                                                                          <td class="img" style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                              <a href="https://www.valvesoftware.com/en/" target="_blank">
                                                                                                                                                                  <img src="https://store.akamai.steamstatic.com/public/shared/images/email/logo_valve.jpg" width="165" height="48" border="0" alt="" />
                                                                                                                                                              </a>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </th>
                                                              <th class="column-top mpb-40" valign="top" width="15" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;"></th>
                                                              <th class="column-top" valign="top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                      <tr>
                                                                          <td class="text-12 pb-30 fallback-font" style="font-size:12px; line-height:18px; color:#000001; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; padding-bottom: 30px;">
                                                                                                                                                              <strong>© Valve Corporation</strong>
                                                                                  <br />
                                                                                  <strong>PO Box 1688 Bellevue, WA 98009</strong>
                                                                                  <br /><br />
                                                                                  Tüm hakları saklıdır. Tüm ticari markalar, ABD ve diğer ülkelerde ilgili sahiplerinin mülkiyetindedir.	                                                                                                                                                </td>
                                                                      </tr>
                                                                      
                                                                  </table>
                                                              </th>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              <!-- END Footer -->
                              </table>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
  </center>
  
      <center style="font-family:Arial, sans-serif, 'Motiva Sans'; color: #000000; font-size: 11px; margin-bottom: 4px;">
          Bu mesajı görüntülemekte sıkıntı mı yaşıyorsunuz?        <a href="https://store.steampowered.com/email/VATPurchaseReceipt?sparams=eJyFVE1v2zAM_SuFz0Mqu6lj97Sddhh2aXsZ0kGgJTYWItuqJCdLh_33Uf6qnXTdzX6Pksj3SP6ONLS1KNH6k8HoLmLRp8gi6Iq-d7opQBNgbCNb4WuoQsiDR6gIda0xjfVYgdIED7-fXaBNc0SLciWaWaRTPpwvvTfu7un66bpEbVbvxA-XOqx96wUdidMsTVgeZzGxhdJa1Tsumrb29kT04_0MVuacAdEBQ_pQyFbDq3pNGFuznHhvoXZKEndDQHazTrMsZessvmXJeuRBeNXUXEJXw5hQykZ-0C8kiKTXQUm03MCpoiJ4hb5swgNJoAVYyYf4AChnUbTWUvbDgcGIwpXNUWLR7o5YUHH7AQ_BWItQYLyh_yNojZ5DFcocYqYcJjRJ8q7axoPmZEVFOrlAxPk6WxIH0AfkUjkxu3HGe_gV1LqNJ9iVypjeFbc8MDH9odlNVWgK_oy4gIcLhmzHMqDqwU95fvV4_4OYEhzpK_awG3U_gOdKctc8-yPYgOZJwrI8jZPNG12S-v-i3xqn8xFsjZLr5gTan7hv9li7wMVpaOrQt9ziMbhpGlV7x2lcoBZjPeQYjkL3MsYLtG-BbTRW8XNOhn7cRtSPmyXey7PtTVsw56ZtKYlFABkAhf5fSECDs-c4t13r08tn744Gv3Pd0vsLet4BH56d3j6LkeiEVSZMZmCX5Is_deleVtJrO3N_ETEuEthZxG58R6POxVIV8rZW7wn5bPGl7Wf0gpumfZrND0LeZn0IGtNzvl9Fs9U3bLgv44a7eiihcgoPsxiQ0qLr2pix1UnpSy4h8mtbo7v6DnaPfr5zVRA1-gYWinY_Iwy1ZTe8MmSwyRhji51MYHa7itnNKk9W3fzM9vVYyuW1YZkvn_zzF8sXQL8"
              style="font-family:Arial, sans-serif, 'Motiva Sans'; color: #000000; font-size: 11px; margin-bottom: 4px;">
              Buraya tıklayın        </a>
      </center>
  
  </body>
  </html>
  `;
  let message3 = `
  <html>
  <head><style type="text/css">
  
      h4 
      {
          text-align: left;
      }
  
  @media screen 
  {
  
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:hidden;
          display:none;
     }   
  }
  
  @media print 
  {
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:visible;
          display:block;
     }
  
  }
  </style>
  </head><body>
  <div style="padding:0!important;margin:0 auto!important;display:block!important;min-width:100%!important;width:100%!important;background:#ffffff">
  <center>
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:0;padding:0;width:100%;height:100%" bgcolor="#ffffff" class="m_-3723613958921582820gwfw">
          <tbody><tr>
              <td style="margin:0;padding:0;width:100%;height:100%" align="center" valign="top">
                  <table width="775" border="0" cellspacing="0" cellpadding="0" class="m_-3723613958921582820m-shell">
                      <tbody><tr>
                          <td class="m_-3723613958921582820td" style="width:775px;min-width:775px;font-size:0pt;line-height:0pt;padding:0;margin:0;font-weight:normal">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                  
                                  <tbody><tr>
                                      <td class="m_-3723613958921582820mpy-35 m_-3723613958921582820mpx-15" bgcolor="#212429" style="padding:80px">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
  
                                              
                                              <tbody><tr>
                                                  <td style="font-size:0pt;line-height:0pt;text-align:left;padding-bottom:45px">
                                                      <a href="https://store.steampowered.com/" target="_blank">
                                                          <img src="https://store.cloudflare.steamstatic.com/public/shared/images/email/logo.png" width="615" height="88" border="0" alt="Steam">
                                                      </a>
  
                                                  </td>
                                              </tr>
                                              
  
                                              
                                              <tr>
                                                  <td>
  
  
  
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tbody><tr>
                      <td style="font-size:36px;line-height:42px;font-family:Arial,sans-serif,&#39;Motiva Sans&#39;;text-align:left;padding-bottom:30px;color:#bfbfbf;font-weight:bold">Merhaba <a target="_blank">${isim}</a>,</td>
                  </tr>
              </tbody></table>
              
  
  
      
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tbody><tr>
                      <td style="font-size:28px;line-height:36px;font-family:Arial,sans-serif,&#39;Motiva Sans&#39;;text-align:left;color:#ffffff;padding-bottom:30px">
                          <strong>Steam oturum açma bilgilerinizi değiştirmek için gerekli olan kodunuz:</strong>
                      </td>
                  </tr>
              </tbody></table>
                  
  
      
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tbody><tr>
                      <td class="m_-3723613958921582820mpb-50" style="padding-bottom:70px">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#17191c">
                              <tbody><tr>
                                  <td style="padding-top:30px;padding-bottom:30px;padding-left:56px;padding-right:56px">
                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                  <tbody><tr>
                                              <td style="font-size:48px;line-height:52px;font-family:Arial,sans-serif,&#39;Motiva Sans&#39;;color:#3a9aed;font-weight:bold;text-align:center" id="randompswd">
                                                  ${password}										</td>
                                          </tr>
                                      </tbody></table>
                                  </td>
                              </tr>
                          </tbody></table>
                      </td>
                  </tr>
              </tbody></table>
                  
  
  
  
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tbody><tr>
                      <td style="font-size:18px;line-height:25px;font-family:Arial,sans-serif,&#39;Motiva Sans&#39;;text-align:left;color:#dbdbdb;padding-bottom:30px">Eğer Steam oturum açma bilgilerinizi <span style="color:#3a9aed;font-weight:bold">Ankara, Türkiye</span> konumunda bulunan bir bilgisayardan değiştirmeye çalışmıyorsanız, lütfen bu e-postayı görmezden gelin. Başka bir kullanıcı oturum açma bilgilerini hatalı girmiş olabilir.</td>
                  </tr>
              </tbody></table>
              
  
  
                                                                                                  
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                      <tbody><tr>
                                                          <td style="padding-top:30px">
                                                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                  <tbody><tr>
                                                                      <td width="3" bgcolor="#3a9aed" style="font-size:0pt;line-height:0pt;text-align:left"></td>
                                                                      <td width="37" style="font-size:0pt;line-height:0pt;text-align:left"></td>
                                                                      <td>
                                                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                              <tbody><tr>
                                                                                                                                                                      <td style="font-size:16px;line-height:22px;font-family:Arial,sans-serif,&#39;Motiva Sans&#39;;text-align:left;padding-top:20px;padding-bottom:20px;color:#f1f1f1">
                                                                                          Saygılarımızla,<br>
  Steam Ekibi                                                                                    </td>
                                                                                                                                                              </tr>
                                                                          </tbody></table>
                                                                      </td>
                                                                  </tr>
                                                              </tbody></table>
                                                          </td>
                                                      </tr>
                                                  </tbody></table>
                                                  
                                                  
                                                  </td>
                                              </tr>
  
                                          </tbody></table>
                                      </td>
                                  </tr>
                                  
  
                                  
                                  <tr>
                                      <td class="m_-3723613958921582820mpy-40 m_-3723613958921582820mpx-15" style="padding-top:60px;padding-bottom:60px;padding-left:90px;padding-right:90px">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
  
                                                                                          <tbody><tr>
                                                  <td class="m_-3723613958921582820mpb-40" style="font-size:18px;line-height:25px;color:#000001;font-family:Arial,sans-serif,&#39;Motiva Sans&#39;;text-align:left;padding-bottom:60px">
                                                      Bu bildirim Steam hesabınızla ilişkilendirilmiş e-posta adresinize gönderildi.                                                    <br><br>
                                                      Bu e-posta mesajı otomatik oluşturulmuştur. Lütfen cevaplamayınız. İlave desteğe ihtiyacınız varsa Steam Destek&#39;i ziyaret edin.                                                </td>
                                              </tr>
                                              
                                                                                          
                                                                                          <tr>
                                              <td style="padding-bottom:60px">
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                      <tbody><tr>
                                                          <th class="m_-3723613958921582820column" width="270" style="font-size:0pt;line-height:0pt;padding:0;margin:0;font-weight:normal">
                                                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                  <tbody><tr>
                                                                      <td class="m_-3723613958921582820mpb-40" style="font-size:18px;line-height:25px;color:#000001;font-family:Arial,sans-serif,&#39;Motiva Sans&#39;;text-align:left">
                                                                          <a href="https://help.steampowered.com" style="text-decoration:underline;color:#000001" target="_blank">
                                                                              <span style="text-decoration:underline;color:#000001">https://help.steampowered.com</span>
                                                                          </a>
                                                                      </td>
                                                                  </tr>
                                                              </tbody></table>
                                                          </th>
                                                                                                              </tr>
                                                  </tbody></table>
                                              </td>
                                              </tr>
                                              
  
                                              
                                                                                              <tr>
                                                      <td style="padding-bottom:50px">
                                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                              <tbody><tr>
                                                                  <th class="m_-3723613958921582820column" width="270" valign="top" style="font-size:0pt;line-height:0pt;padding:0;margin:0;font-weight:normal;vertical-align:top">
                                                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                          <tbody><tr>
                                                                              <td class="m_-3723613958921582820mpt-0" style="font-size:0pt;line-height:0pt;text-align:left">
                                                                                  <a href="https://store.steampowered.com/" target="_blank"><img src="https://store.cloudflare.steamstatic.com/public/shared/images/email/logo_footer.png" width="165" height="50" border="0" alt=""></a>
                                                                              </td>
                                                                          </tr>
                                                                      </tbody></table>
                                                                  </th>
                                                                  <th class="m_-3723613958921582820column-top m_-3723613958921582820mpb-40" width="15" style="font-size:0pt;line-height:0pt;padding:0;margin:0;font-weight:normal;vertical-align:top"></th>
                                                                  <th class="m_-3723613958921582820column" style="font-size:0pt;line-height:0pt;padding:0;margin:0;font-weight:normal">
                                                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                                                                                      <tbody><tr>
                                                                                  <td style="font-size:12px;line-height:18px;color:#000001;font-family:Arial,sans-serif,&#39;Motiva Sans&#39;;text-align:left">
                                                                                                                                                                              Steam masaüstü istemcisini indirmek ve Steam hakkında ayrıntılı bilgi için lütfen &quot;Steam Hakkında&quot; kısmını ziyaret edin.                                                                                        <br><br>
                                                                                          <a href="https://store.steampowered.com/about/" style="text-decoration:underline;color:#000001" target="_blank">
                                                                                              <span style="text-decoration:underline;color:#000001"><strong>Steam Hakkında</strong>
                                                                                              </span>
                                                                                          </a>
                                                                                                                                                                      </td>
                                                                              </tr>
                                                                                                                                              </tbody></table>
                                                                  </th>
                                                              </tr>
                                                          </tbody></table>
                                                      </td>
                                                  </tr>
  
                                              
  
                                              
                                              <tr>
                                                  <td>
                                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                          <tbody><tr>
                                                              <th class="m_-3723613958921582820column-top" valign="top" width="270" style="font-size:0pt;line-height:0pt;padding:0;margin:0;font-weight:normal;vertical-align:top">
                                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                      <tbody><tr>
                                                                          <td style="font-size:0pt;line-height:0pt;text-align:left">
                                                                              <a href="https://www.valvesoftware.com/en/" target="_blank">
                                                                                                                                                                  <img src="https://store.cloudflare.steamstatic.com/public/shared/images/email/logo_valve.jpg" width="165" height="48" border="0" alt="">
                                                                                                                                                              </a>
                                                                          </td>
                                                                      </tr>
                                                                  </tbody></table>
                                                              </th>
                                                              <th class="m_-3723613958921582820column-top m_-3723613958921582820mpb-40" valign="top" width="15" style="font-size:0pt;line-height:0pt;padding:0;margin:0;font-weight:normal;vertical-align:top"></th>
                                                              <th class="m_-3723613958921582820column-top" valign="top" style="font-size:0pt;line-height:0pt;padding:0;margin:0;font-weight:normal;vertical-align:top">
                                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                      <tbody><tr>
                                                                          <td style="font-size:12px;line-height:18px;color:#000001;font-family:Arial,sans-serif,&#39;Motiva Sans&#39;;text-align:left;padding-bottom:30px">
                                                                                                                                                              <strong>© Valve Corporation</strong>
                                                                                  <br>
                                                                                  <strong>PO Box 1688 Bellevue, WA 98009</strong>
                                                                                  <br><br>
                                                                                  Tüm hakları saklıdır. Tüm ticari markalar, ABD ve diğer ülkelerde ilgili sahiplerinin mülkiyetindedir.	                                                                                                                                                </td>
                                                                      </tr>
                                                                      
                                                                  </tbody></table>
                                                              </th>
                                                          </tr>
                                                      </tbody></table>
                                                  </td>
                                              </tr>
                                          </tbody></table>
                                      </td>
                                  </tr>
                              
                              </tbody></table>
                          </td>
                      </tr>
                  </tbody></table>
              </td>
          </tr>
      </tbody></table>
  </center>
  
      <center style="font-family:Arial,sans-serif,&#39;Motiva Sans&#39;;color:#000000;font-size:11px;margin-bottom:4px">
          Bu mesajı görüntülemekte sıkıntı mı yaşıyorsunuz?        <a href="https://store.steampowered.com/email/AccountRecoveryCode?sparams=eJxtj7EOwjAMRP8lM6IgoGo7wcyCgJHFJFZbkcZR4oAqxL_joCIxsNnP5_P5qSwkpzsMPHpUjVqomQoIdpC6tXQFK8AHMkmzgyFLTowwCI3JewqMA_RW8NRuYx57emBAM9f0o4w95_2O2cfmUlyKDq2f_9FPphEdJ9aysiyrqlqt1pv6E0_THcOoyWS7w76sN4KZpOmjBWcMgqnKbZtNvhEYGKcHdu4GAQRqSo7DOOHzUZCltkXTu3xUvd76o2Fb" style="font-family:Arial,sans-serif,&#39;Motiva Sans&#39;;color:#000000;font-size:11px;margin-bottom:4px" target="_blank">
              Buraya tıklayın        </a>
      </center>
  
  </div>
  
  
  </div></div></div>
  </body>
  </html>
  `;
  let message4 = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <!--[if gte mso 9]>
      <xml>
          <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <meta http-equiv="Content-type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="x-apple-disable-message-reformatting" />
      <title>Steam hesabınızdaki en son değişiklikler</title>
      <!--[if gte mso 9]>
      <style type="text/css" media="all">
          sup { font-size: 100% !important; }
      </style>
      <![endif]-->
  
          <!--[if !mso]><!-->
      <style type="text/css" media="screen">
          @font-face {
              font-family: 'Motiva Sans';
              font-style: normal;
              font-weight: 300;
              src: local('Motiva Sans'), url('https://store.cloudflare.steamstatic.com/public/shared/fonts/email/MotivaSans-Light.woff') format('woff');
          }
  
          @font-face {
              font-family: 'Motiva Sans';
              font-style: normal;
              font-weight: normal;
              src: local('Motiva Sans'), url('https://store.cloudflare.steamstatic.com//public/shared/fonts/email/MotivaSans-Regular.woff') format('woff');
          }
  
          @font-face {
              font-family: 'Motiva Sans';
              font-style: normal;
              font-weight: bold;
              src: local('Motiva Sans'), url('https://store.cloudflare.steamstatic.com//public/shared/fonts/email/MotivaSans-Bold.woff') format('woff');
          }
  
          [style*='Motiva Sans'] {
              font-family: 'Motiva Sans', Arial, sans-serif !important;
          }
      </style>
      <!--<![endif]-->
  
      <style type="text/css" media="screen">
          body { padding:0 !important; margin:0 auto !important; display:block !important; min-width:100% !important; width:100% !important; background:#ffffff; -webkit-text-size-adjust:none }
          a { color:#7abefa; text-decoration:underline }
          body a { color:#ffffff; text-decoration:underline }
          img { margin: 0 !important; -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
  
          /* for recepits */
              table { mso-table-lspace:0pt; mso-table-rspace:0pt; }
              img, a img{ border:0; outline:none; text-decoration:none; }
              #outlook a { padding:0; }
              .ReadMsgBody { width:100%; }
              .ExternalClass { width:100%; }
              div,p,a,li,td,blockquote { mso-line-height-rule:exactly; }
              a[href^=tel],a[href^=sms] { color:inherit; text-decoration:none; }
              .ExternalClass, .ExternalClass p, .ExternalClass td, .ExternalClass div, .ExternalClass span, .ExternalClass font { line-height:100%; }
          /* END for recepits */
  
          a[x-apple-data-detectors] { color: inherit !important; text-decoration: inherit !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
  
          .btn-18 a { display: block; padding: 13px 35px; text-decoration: none; }
  
          .l-white a { color: #ffffff; }
          .l-black a { color: #000001; }
          .l-grey1 a { color: #dbdee2; }
          .l-grey2 a { color: #a1a2a4; }
          .l-grey3 a { color: #dadcdd; }
          .l-grey4 a { color: #f1f1f1; }
          .l-grey5 a { color: #dddedf; }
          .l-grey6 a { color: #bfbfbf; }
          .l-grey7 a { color: #dcdddd; }
          .l-grey8 a { color: #8e96a4; }
          .l-green a { color: #a4d007; }
          .l-blue a { color: #6a7c96; }
          .l-blue1 a { color: #7abefa; }
          .l-blue2 a { color: #9eb8cc; }
  
  
          /* Mobile styles */
          @media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
              .mpy-35 { padding-top: 35px !important; padding-bottom: 35px !important; }
  
              .mpx-15 { padding-left: 15px !important; padding-right: 15px !important; }
  
              .mpx-20 { padding-left: 20px !important; padding-right: 20px !important; }
  
              .mpb-30 { padding-bottom: 30px !important; }
  
              .mpb-10 { padding-bottom: 10px !important; }
  
              .mpb-15 { padding-bottom: 15px !important; }
  
              .mpb-20 { padding-bottom: 20px !important; }
  
              .mpb-35 { padding-bottom: 35px !important; }
  
              .mpb-40 { padding-bottom: 40px !important; }
  
              .mpb-50 { padding-bottom: 50px !important; }
  
              .mpb-60 { padding-bottom: 60px !important; }
  
              .mpt-30 { padding-top: 30px !important; }
  
              .mpt-40 { padding-top: 40px !important; }
  
              .mpy-40 { padding-top: 40px !important; padding-bottom: 40px !important; }
  
              .mpt-0 { padding-top: 0px !important; }
  
              .mpr-0 { padding-right: 0px !important; }
  
              .mfz-14 { font-size: 14px !important; }
  
              .mfz-28 { font-size: 28px !important; }
  
              .mfz-16 { font-size: 16px !important; }
  
              .mfz-24 { font-size: 24px !important; }
  
              .mlh-18 { line-height: 18px !important; }
  
              u + body .gwfw { width:100% !important; width:100vw !important; }
  
              .td,
              .m-shell { width: 100% !important; min-width: 100% !important; }
  
              .mt-left { text-align: left !important; }
              .mt-center { text-align: center !important; }
              .mt-right { text-align: right !important; }
  
              .m-left { text-align: left !important; }
              .me-left { margin-right: auto !important; }
              .me-center { margin: 0 auto !important; }
              .me-right { margin-left: auto !important; }
  
              .mh-auto { height: auto !important; }
              .mw-auto { width: auto !important; }
  
              .fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; }
  
              .column,
              .column-top,
              .column-dir,
              .column-dir-top { float: left !important; width: 100% !important; display: block !important; }
  
              .kmMobileStretch { float: left !important; width: 100% !important; display: block !important; padding-left: 0 !important; padding-right: 0 !important; }
  
              .m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }
              .m-block { display: block !important; }
  
              .mw-15 { width: 15px !important; }
  
              .mw-2p { width: 2% !important; }
              .mw-32p { width: 32% !important; }
              .mw-49p { width: 49% !important; }
              .mw-50p { width: 50% !important; }
              .mw-100p { width: 100% !important; }
  
              .mbgs-200p { background-size: 200% auto !important; }
          }
      </style>
  <style type="text/css">
  
      h4 
      {
          text-align: left;
      }
  
  @media screen 
  {
  
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:hidden;
          display:none;
     }   
  }
  
  @media print 
  {
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:visible;
          display:block;
     }
  
  }
  </style>
  </head><body class="body" style="padding:0 !important; margin:0 auto !important; display:block !important; min-width:100% !important; width:100% !important; background:#ffffff; -webkit-text-size-adjust:none;">
  
  <center>
      <table width="100%" border="0" cellspacing="0" cellpadding="0"style="margin: 0; padding: 0; width: 100%; height: 100%;" bgcolor="#ffffff" class="gwfw">
          <tr>
              <td style="margin: 0; padding: 0; width: 100%; height: 100%;" align="center" valign="top">
                  <table width="775" border="0" cellspacing="0" cellpadding="0"class="m-shell">
                      <tr>
                          <td class="td" style="width:775px; min-width:775px; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                  <!-- Main -->
                                  <tr>
                                      <td class="p-80 mpy-35 mpx-15" bgcolor="#212429" style="padding: 80px;">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
  
                                              <!-- Logo -->
                                              <tr>
                                                  <td class="img pb-45" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 45px;">
                                                      <a href="https://store.steampowered.com/" target="_blank">
                                                          <img src="https://store.cloudflare.steamstatic.com/public/shared/images/email/logo.png" width="615" height="88" border="0" alt="Steam" />
                                                      </a>
  
                                                  </td>
                                              </tr>
                                              <!-- END Logo -->
  
                                              <!-- All Content Exists within this table column -->
                                              <tr>
                                                  <td>
  
  
  <!-- Welcome  -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td class="title-36 pb-30 c-grey6 fw-b" style="font-size:36px; line-height:42px; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; padding-bottom: 30px; color:#bfbfbf; font-weight:bold;">Sayın ${isim},</td>
                  </tr>
              </table>
              <!-- End Welcome -->
  
  <!-- Intro  -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td class="title-28 c-white pb-30" style="font-size:28px; line-height:36px; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; color:#ffffff; padding-bottom: 30px;">
                          <strong>Steam hesabınızla ilişkili e-posta adresi başarıyla değiştirildi.</strong>
                      </td>
                  </tr>
              </table>
              <!-- End Intro -->
  
  <!-- Text -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td class="text-18 c-grey4 pb-30" style="font-size:18px; line-height:25px; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; color:#dbdbdb; padding-bottom: 30px;">    Steam hesabınızın gizliliğini ve güvenliğini sağlamak için bu bildirimi gönderiyoruz. <span style="color: #ffffff; font-weight: bold;">Eğer bu değişikliği yetkilendirdiyseniz başka bir eylem gerekmemektedir.</span>    <br/><br/>
      ipaddress (countryname) adresinde bulunan bir bilgisayardan yapılan <span style="color: #ffffff; font-weight: bold;">bu değişikliği eğer siz yetkilendirmediyseniz</span>, lütfen Steam parolanızı değiştirin ve hesap güvenliğinizi sağlama almak için e-posta adresinizin parolasını da değiştirmeyi göz önünde bulundurun.    <br/><br/>
      Eğer hesabınıza erişemiyorsanız, hesabınızı geri alma veya hesabınızı kilitleme konusunda yardım almak için <a style="color: #8f98a0;" href="https://help.steampowered.com/tr/wizard/HelpUnauthorizedLogin?stoken=IhUMwI6%2F0wM08sQLDmT5d%2FCE6vL90UIp9JM%2F32HLWh%2BbfRtrnXRIhWxUB5Ow71Sdeu%2F19apnIZnoO0ch3%2FX2h8NB%2F%2F%2FimlT7W7PVAv%2FoYJ9bLjDT4nlSrVRmVbWehkMo">hesaba özel geri alma bağlantısını kullanabilirsiniz</a>.    </td>
                  </tr>
              </table>
              <!-- End Text -->
  
  
                                                                                                  <!-- Signature -->
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                      <tr>
                                                          <td class="pt-30" style="padding-top: 30px;">
                                                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                  <tr>
                                                                      <td class="img" width="3" bgcolor="#3a9aed" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                      <td class="img" width="37" style="font-size:0pt; line-height:0pt; text-align:left;"></td>
                                                                      <td>
                                                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                              <tr>
                                                                                                                                                                      <td class="text-16 py-20 c-grey4 fallback-font" style="font-size:16px; line-height:22px; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; padding-top: 20px; padding-bottom: 20px; color:#f1f1f1;">
                                                                                          Saygılarımızla,<br />
  Steam Ekibi                                                                                    </td>
                                                                                                                                                              </tr>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </table>
                                                  <!-- END Signature -->
                                                  
                                                  </td>
                                              </tr>
  
                                          </table>
                                      </td>
                                  </tr>
                                  <!-- END Main -->
  
                                  <!-- Footer -->
                                  <tr>
                                      <td class="py-60 px-90 mpy-40 mpx-15" style="padding-top: 60px; padding-bottom: 60px; padding-left: 90px; padding-right: 90px;">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
  
                                                                                          <tr>
                                                  <td class="text-18 pb-60 mpb-40 fallback-font" style="font-size:18px; line-height:25px; color:#000001; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; padding-bottom: 60px;">
                                                      Bu bildirim Steam hesabınızla ilişkilendirilmiş e-posta adresinize gönderildi.                                                    <br /><br />
                                                      Bu e-posta mesajı otomatik oluşturulmuştur. Lütfen cevaplamayınız. İlave desteğe ihtiyacınız varsa Steam Destek'i ziyaret edin.                                                </td>
                                              </tr>
                                              
                                                                                          <!-- A -->
                                                                                          <tr>
                                              <td class="pb-60" style="padding-bottom: 60px;">
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                      <tr>
                                                          <th class="column" width="270" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                  <tr>
                                                                      <td class="text-18 mpb-40 fallback-font" style="font-size:18px; line-height:25px; color:#000001; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left;">
                                                                          <a href="https://help.steampowered.com" target="_blank" class="link-u c-black" style="text-decoration:underline; color:#000001;">
                                                                              <span class="link-u c-black" style="text-decoration:underline; color:#000001;">https://help.steampowered.com</span>
                                                                          </a>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </th>
                                                                                                              </tr>
                                                  </table>
                                              </td>
                                              </tr>
                                              
  
                                              <!-- B -->
                                                                                              <tr>
                                                      <td class="pb-50" style="padding-bottom: 50px;">
                                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                              <tr>
                                                                  <th class="column" width="270" valign="top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                          <tr>
                                                                              <td class="img mpt-0" style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                                  <a href="https://store.steampowered.com/" target="_blank"><img src="https://store.cloudflare.steamstatic.com/public/shared/images/email/logo_footer.png" width="165" height="50" border="0" alt="" /></a>
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                                  </th>
                                                                  <th class="column-top mpb-40" width="15" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;"></th>
                                                                  <th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
                                                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                                                                                      <tr>
                                                                                  <td class="text-12 fallback-font" style="font-size:12px; line-height:18px; color:#000001; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left;">
                                                                                                                                                                              Steam masaüstü istemcisini indirmek ve Steam hakkında ayrıntılı bilgi için lütfen "Steam Hakkında" kısmını ziyaret edin.                                                                                        <br /><br />
                                                                                          <a href="https://store.steampowered.com/about/" target="_blank" class="link-u c-black" style="text-decoration:underline; color:#000001;">
                                                                                              <span class="link-u c-black" style="text-decoration:underline; color:#000001;"><strong>Steam Hakkında</strong>
                                                                                              </span>
                                                                                          </a>
                                                                                                                                                                      </td>
                                                                              </tr>
                                                                                                                                              </table>
                                                                  </th>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                  </tr>
  
                                              
  
                                              <!-- C -->
                                              <tr>
                                                  <td>
                                                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                          <tr>
                                                              <th class="column-top" valign="top" width="270" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                      <tr>
                                                                          <td class="img" style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                              <a href="https://www.valvesoftware.com/en/" target="_blank">
                                                                                                                                                                  <img src="https://store.cloudflare.steamstatic.com/public/shared/images/email/logo_valve.jpg" width="165" height="48" border="0" alt="" />
                                                                                                                                                              </a>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </th>
                                                              <th class="column-top mpb-40" valign="top" width="15" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;"></th>
                                                              <th class="column-top" valign="top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                      <tr>
                                                                          <td class="text-12 pb-30 fallback-font" style="font-size:12px; line-height:18px; color:#000001; font-family:Arial, sans-serif, 'Motiva Sans'; text-align:left; padding-bottom: 30px;">
                                                                                                                                                              <strong>© Valve Corporation</strong>
                                                                                  <br />
                                                                                  <strong>PO Box 1688 Bellevue, WA 98009</strong>
                                                                                  <br /><br />
                                                                                  Tüm hakları saklıdır. Tüm ticari markalar, ABD ve diğer ülkelerde ilgili sahiplerinin mülkiyetindedir.	                                                                                                                                                </td>
                                                                      </tr>
                                                                      
                                                                  </table>
                                                              </th>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              <!-- END Footer -->
                              </table>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
  </center>
  
      <center style="font-family:Arial, sans-serif, 'Motiva Sans'; color: #000000; font-size: 11px; margin-bottom: 4px;">
          Bu mesajı görüntülemekte sıkıntı mı yaşıyorsunuz?        <a href="https://store.steampowered.com/email/EmailChangeNotificationWithLink?sparams=eJyFkV9PwjAUxb_LEt4M-ydjIzEqomFkEwXG0Oyl26500rVN2zHA-N3tIg88mJj04Z7T3zm5yf0yCGpogUGoIwdjZFjGlSEAkVrPW8JyRLTBBSubQlFUd8hSAaq1KxvOmVBQo4po-yzvZPfNWQsCyn7BLkhZqS6PleJylJmZiYHw_h_8uVQCVY0qdMT2fN93Xc_r1utSDUWNwkxUJyhRUYCU_xdnphKZ2VYnJMrMnGokuWiJ2Lait1KxHdCbECdxG3o958lqY8uXr9GkXg1KrR8evX0UWEnIg1mstetMoxT3nHH-sVCCbhYhTg_JeDBvh_ayhEYjdoA4Dd8pm1sFdrWxcbD_PNbD76tqshqmw5f1_V4r9jYL8uhzsrqmZCnWi3qdp4B3MevuQNARxPkMAkm1BQJ5JTBIxG3j-weiL54h"
              style="font-family:Arial, sans-serif, 'Motiva Sans'; color: #000000; font-size: 11px; margin-bottom: 4px;">
              Buraya tıklayın        </a>
      </center>
  
  </body>
  </html>
  
  `;

  let transporter = nodemailer.createTransport({
    host: "mail.",
    port: 465,
    secure: true,
    auth: {
      user: "Steam@",
      pass: "",
    },
  });

  let mailOptions = {
    from: "Steam@",
    to: `${email}`,
    subject: "Steam hesabınız: Yeni tarayıcıdan veya mobil cihazdan erişim",
    //text: text,
    html: message1,
  };
  let mailOptions1 = {
    from: "Steam@",
    to: `${email}`,
    subject: "Steam satın alımınız için teşekkür ederiz!",
    //text: text,
    html: message2,
  };
  let mailOptions2 = {
    from: "Steam@",
    to: `${email}`,
    subject: "Steam oturum açma bilgileri değişikliği",
    //text: text,
    html: message3,
  };
  let mailOptions3 = {
    from: "Steam@",
    to: `${email}`,
    subject: "E-posta adres değişikliği",
    //text: text,
    html: message4,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("send" + info.response);
      setTimeout(mySecondMsg, 60000);
    }
  });

  function mySecondMsg() {
    transporter.sendMail(mailOptions1, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("send" + info.response);
        setTimeout(sendMsg1, 60000);
      }
    });
  }

  function sendMsg1() {
    transporter.sendMail(mailOptions2, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("send" + info.response);
        setTimeout(sendMsg2, 60000);
      }
    });
  }

  function sendMsg2() {
    transporter.sendMail(mailOptions3, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("send" + info.response);
      }
      res.redirect("/"); // bu ifadeyi burada kullanabilirsiniz
    });
  }
}

//trendyol service
function trendyolService(isim, email) {
  var sehirler = [
    "Adana",
    "Adıyaman",
    "Afyonkarahisar",
    "Ağrı",
    "Aksaray",
    "Amasya",
    "Ankara",
    "Antalya",
    "Ardahan",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bartın",
    "Batman",
    "Bayburt",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Düzce",
    "Edirne",
    "Elazığ",
    "Erzincan",
    "Erzurum",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkari",
    "Hatay",
    "Iğdır",
    "Isparta",
    "İstanbul",
    "İzmir",
    "Kahramanmaraş",
    "Karabük",
    "Karaman",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kırıkkale",
    "Kırklareli",
    "Kırşehir",
    "Kilis",
    "Kocaeli",
    "Konya",
    "Kütahya",
    "Malatya",
    "Manisa",
    "Mardin",
    "Mersin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Osmaniye",
    "Rize",
    "Sakarya",
    "Samsun",
    "Şanlıurfa",
    "Siirt",
    "Sinop",
    "Sivas",
    "Şırnak",
    "Tekirdağ",
    "Trabzon",
    "Tunceli",
    "Uşak",
    "Van",
    "Yalova",
    "Yozgat",
    "Zonguldak",
  ];
  var apartmanlar = [
    "Mavi Gök Apartmanı",
    "Yeşil Ev Apartmanı",
    "Kırmızı Ev Apartmanı",
    "Pembe Ev Apartmanı",
    "Sarı Ev Apartmanı",
    "Turuncu Ev Apartmanı",
    "Mor Ev Apartmanı",
    "Lacivert Ev Apartmanı",
    "Gri Ev Apartmanı",
    "Beyaz Ev Apartmanı",
    "Kahverengi Ev Apartmanı",
    "Siyah Ev Apartmanı",
    "Altın Ev Apartmanı",
    "Gümüş Ev Apartmanı",
    "Pırlanta Ev Apartmanı",
    "Safir Ev Apartmanı",
    "Yakut Ev Apartmanı",
    "Topaz Ev Apartmanı",
    "Ametist Ev Apartmanı",
    "Zümrüt Ev Apartmanı",
    "Opal Ev Apartmanı",
    "Turkuaz Ev Apartmanı",
    "Mercan Ev Apartmanı",
    "İnci Ev Apartmanı",
    "Kelebek Apartmanı",
    "Kuş Apartmanı",
    "Çiçek Apartmanı",
    "Ağaç Apartmanı",
    "Güneş Apartmanı",
    "Ay Apartmanı",
    "Yıldız Apartmanı",
    "Bulut Apartmanı",
    "Rüzgar Apartmanı",
    "Su Apartmanı",
    "Toprak Apartmanı",
    "Ateş Apartmanı",
    "Gökkuşağı Apartmanı",
    "Doğa Apartmanı",
    "Yaşam Apartmanı",
    "Mutluluk Apartmanı",
    "Sevgi Apartmanı",
    "Barış Apartmanı",
    "Umut Apartmanı",
    "Özgürlük Apartmanı",
    "Adalet Apartmanı",
    "Eşitlik Apartmanı",
    "Kardeşlik Apartmanı",
    "Dostluk Apartmanı",
    "Aile Apartmanı",
  ];

  const randomApartman =
    apartmanlar[Math.floor(Math.random() * apartmanlar.length)];
  var randomSehir = sehirler[Math.floor(Math.random() * sehirler.length)];

  function faturaNumber() {
    var number = "17";

    for (var i = 0; i < 8; i++) {
      number += Math.floor(Math.random() * 10);
    }
    return number;
  }
  let siparisNumara = faturaNumber();

  let message1 = `
    <!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="tr" xml:lang="tr">
      <head>
        <meta name="HandheldFriendly" content="true"><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="x-apple-disable-message-reformatting"><meta name="format-detection" content="telephone=no"><meta name="viewport" content="width=device-width,initial-scale=1"><!--[if (gte mso 9)|(IE)]><xml><o:officedocumentsettings><o:allowpng><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings></xml><![endif]--><style type="text/css">#outlook a{padding:0}h1,h2,h3,h4,h5,h6,p{margin:0;padding:0;border:0;outline:0;font-weight:400;font-size:100%;font-family:inherit;vertical-align:baseline}body,table,td,th{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td,th{mso-table-lspace:0;mso-table-rspace:0}td,th{margin:0;padding:0;font-weight:400}img{border:0;line-height:100%;outline:0;text-decoration:none}body{height:100%!important;margin:0 auto!important;padding:0!important;width:100%!important}.div-body{max-width:100%!important;width:100%!important}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;font-size:inherit!important;font-family:inherit!important;font-weight:inherit!important;line-height:inherit!important}table td{border-collapse:collapse}table td{margin-left:auto!important;margin-right:auto!important}.ExternalClass{width:100%}.ExternalClass,.ExternalClass div,.ExternalClass font,.ExternalClass p,.ExternalClass span,.ExternalClass td{line-height:100%}a{border:none}a img{outline:0;text-decoration:none;-ms-interpolation-mode:bicubic}html{-webkit-text-size-adjust:none!important}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;pointer-events:none!important}.desktop-hide{display:none!important;visibility:hidden!important}.desktop-show{display:block!important;visibility:visible!important}.block{display:block!important}.cta-btn-general{background-color:#ff6720;border-radius:6px;color:#fff;display:inline-block;font-family:sans-serif;font-size:16px;font-weight:700;line-height:40px;text-align:center;text-decoration:none;width:200px;-webkit-text-size-adjust:none}.cta-btn-general2{background:url(https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg);background-color:#f26928;border-radius:6px 6px 0 0;padding:4px 7px 4px 7px;color:#fff;display:inline-block;font-family:Arial,sans-serif;font-size:13px;line-height:14px;text-align:center;text-decoration:none;max-width:200px;-webkit-text-size-adjust:none}.cta-btn-general-center{background:url(https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg);background-color:#f26928;border-radius:6px;color:#fff;display:block;margin:0 auto;font-family:Arial,sans-serif;font-size:15px;line-height:17px;text-align:center;text-decoration:none;max-width:300px;-webkit-text-size-adjust:none}@media only screen and (max-device-width:480px){u+.body .ios-centered{min-width:100vw!important;margin:0 auto!important;font-style:inherit!important}.width-100{width:100%!important}.width-95{width:95%!important}.width-90{width:90%!important}.width-85{width:85%!important}.width-80{width:80%!important}.width-75{width:75%!important}.width-70{width:70%!important}.width-65{width:65%!important}.width-60{width:60%!important}.width-55{width:55%!important}.width-50{width:50%!important}.width-45{width:45%!important}.width-40{width:40%!important}.width-35{width:35%!important}.width-30{width:30%!important}.width-25{width:25%!important}.width-20{width:20%!important}.width-15{width:15%!important}.width-10{width:10%!important}.width-32{width:32%!important}.width-33{width:33%!important}.width-34{width:34%!important}.widh-auto{width:auto!important}.height-auto{height:auto!important}.mobile-hide{display:none!important;visibility:hidden!important}.mobile-show{display:block!important;visibility:visible!important}.mobile-show-text{display:table-row!important}.fs-13{font-size:13px!important;line-height:18px!important}.fs-14{font-size:14px!important;line-height:18px!important}.fs-16{font-size:16px!important;line-height:24px!important}.fs-18{font-size:18px!important;line-height:26px!important}.fs-20{font-size:20px!important;line-height:28px!important}.fs-26{font-size:26px!important;line-height:30px!important}.fs-28{font-size:28px!important;line-height:32px!important}.mobileIMG{display:inline-block!important}.pd-left-0{padding-left:0!important}.block1{display:block!important;width:100%!important}.width-100{width:100%!important}}</style><title>Trendyol</title>
      <style type="text/css">
    
        h4 
        {
            text-align: left;
        }
    
    @media screen 
    {
    
        .headerLineTitle
        {
            width:1.5in;
            display:inline-block;
            margin:0in;
            margin-bottom:.0001pt;
            font-size:11.0pt;
            font-family:"Calibri","sans-serif";
            font-weight:bold;
        }
    
        .headerLineText
        {
            display:inline;
            margin:0in;
            margin-bottom:.0001pt;
            font-size:11.0pt;
            font-family:"Calibri","sans-serif";
            font-weight:normal;
        }
    
       .pageHeader
       {
            font-size:14.0pt;
            font-family:"Calibri","sans-serif";
            font-weight:bold;
            visibility:hidden;
            display:none;
       }   
    }
    
    @media print 
    {
        .headerLineTitle
        {
            width:1.5in;
            display:inline-block;
            margin:0in;
            margin-bottom:.0001pt;
            font-size:11.0pt;
            font-family:"Calibri","sans-serif";
            font-weight:bold;
        }
    
        .headerLineText
        {
            display:inline;
            margin:0in;
            margin-bottom:.0001pt;
            font-size:11.0pt;
            font-family:"Calibri","sans-serif";
            font-weight:normal;
        }
    
       .pageHeader
       {
            font-size:14.0pt;
            font-family:"Calibri","sans-serif";
            font-weight:bold;
            visibility:visible;
            display:block;
       }
    
    }
    </style>
    </head>
      <body class="body" style="-webkit-text-size-adjust: none; color: #423E3E; font-family: Arial, sans-serif; font-size: 16px; -ms-text-size-adjust: 100%; mso-margin-top-alt: 0px; mso-margin-bottom-alt: 0px; mso-padding-alt: 0; margin: 0; padding: 0; background-color: #ffffff !important; line-height: 1 !important;">
        <!-- Outermost Table Start -->
        <div id="div-body">
          <table role="presentation" width="100%" bgcolor="#f5f2f2" border="0" cellspacing="0" cellpadding="0" class="centerd-ios">
            <tr>
              <td align="center" valign="top">
                <table role="presentation" align="center" bgcolor="#fdfdfd" cellpadding="0" cellspacing="0" border="0" style="width:650px" class="width-100">
                  <tr>
                    <td align="center" valign="top" bgcolor="#fdfdfd" style="background-color:#ffffff;border-collapse: collapse;">
                      <span class="preheader"
        style="color:#fff;background-color:#fff;display:none!important;font-size:1px;line-height:1px;max-height:0;max-width:0;mso-hide:all!important;opacity:0;overflow:hidden;visibility:hidden"></span>
    <table role="presentation" align="center" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px"
        class="width-100">
        <tr>
            <td class="width-100" width="600" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg"
                align="center" valign="middle" bgcolor="#ff6720"
                style="display:block;padding-bottom:6px;padding-top:6px;border-bottom-left-radius:10px;border-bottom-right-radius:10px">
                <!--[if gte mso 9]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:61px"><v:fill type="tile" src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/logo-bg.png" color="#ff6720"><v:textbox inset="0,0,0,0"><![endif]--><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DHome%26adjust_tracker_limit%3D999999999%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DHome%2526adjust_t%253Dei1zb4_q4nmai%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252F%253Fadjust_t%253Dei1zb4_q4nmai%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail"
                    target="_blank" style="text-decoration:none;border:none"><img
                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/trendyol-logo.png"
                        height="34.5" width="150" class="width-30 height-auto"></a>
            </td>
            <!--[if gte mso 9]><![endif]-->
        </tr>
    </table>
    <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
        <tr>
            <td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100" style=""><img
                    src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1"
                    height="5"></td>
        </tr>
    </table>
    <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
        <tr>
            <td width="32%" align="center" valign="middle"
                background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-32"
                style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DHome%26adjust_tracker_limit%3D999999999%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DHome%2526adjust_t%253Dei1zb4_q4nmai%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252F%253Fadjust_t%253Dei1zb4_q4nmai%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail"
                    style="text-decoration:none!important;border:none!important">
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td width="32" align="center" valign="middle" style="padding-left:15px"><img
                                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/moda-icon.png" width="23"></td>
                                <td class="fs-14" align="center" valign="middle"
                                    style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676">
                                    Moda</td>
                            </tr>
                        </tbody>
                    </table>
                </a></td>
            <td width="1%" align="center" valign="middle" bgcolor="#ffffff">&nbsp;</td>
            <td width="33%" align="center" valign="middle"
                background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-33"
                style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DHome%26SectionId%3D5%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26adjust_tracker_limit%3D999999999%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DHome%2526SectionId%253D5%2526adjust_t%253Dei1zb4_q4nmai%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fbutik%252Fliste%252F5%252Felektronik%253Fadjust_t%253Dei1zb4_q4nmai%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword"
                    style="text-decoration:none!important;border:none!important">
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td width="32" align="center" valign="middle" style="padding-left:15px"><img
                                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/elektronik-icon.png"
                                        width="27"></td>
                                <td class="fs-14" align="center" valign="middle"
                                    style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676">
                                    Elektronik</td>
                            </tr>
                        </tbody>
                    </table>
                </a></td>
            <td width="1%" align="center" valign="middle" bgcolor="#ffffff">&nbsp;</td>
            <td width="32%" align="center" valign="middle"
                background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-32"
                style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DHome%26SectionId%3D11%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26adjust_tracker_limit%3D999999999%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DHome%2526SectionId%253D11%2526adjust_t%253Dei1zb4_q4nmai%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fbutik%252Fliste%252F11%252Fkozmetik%253Fadjust_t%253Dei1zb4_q4nmai%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword"
                    style="text-decoration:none!important;border:none!important">
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td width="32" align="center" valign="middle" style="padding-left:15px"><img
                                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/kozmetik-icon.png"
                                        width="19"></td>
                                <td class="fs-14" align="center" valign="middle"
                                    style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676">
                                    Kozmetik</td>
                            </tr>
                        </tbody>
                    </table>
                </a></td>
        </tr>
    </table>
    <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
        <tr>
            <td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100"><img
                    src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1"
                    height="5"></td>
        </tr>
    </table>
    <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
        <tr>
            <td width="32%" align="center" valign="middle"
                background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-32"
                style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DHome%26SectionId%3D12%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26adjust_tracker_limit%3D999999999%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DHome%2526SectionId%253D12%2526adjust_t%253Dei1zb4_q4nmai%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fbutik%252Fliste%252F12%252Fev--mobilya%253Fadjust_t%253Dei1zb4_q4nmai%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999"
                    style="text-decoration:none!important;border:none!important">
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td width="32" align="center" valign="middle" style="padding-left:11px"><img
                                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/evyasam-icon.png"
                                        width="27"></td>
                                <td class="fs-14" align="center" valign="middle"
                                    style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676;line-height:15px!important">
                                    Ev &amp; Yaşam</td>
                            </tr>
                        </tbody>
                    </table>
                </a></td>
            <td width="1%" align="center" valign="middle" bgcolor="#ffffff">&nbsp;</td>
            <td width="33%" align="center" valign="middle"
                background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-33"
                style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DCategoryMenu%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DCategoryMenu%2526adjust_t%253Dei1zb4_q4nmai%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fs%252Ftrendyol-yemek%253Fadjust_t%253Dei1zb4_q4nmai%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword"
                    style="text-decoration:none!important;border:none!important">
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td width="32" align="center" valign="middle" style="padding-left:15px"><img
                                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/yemek-market-icon.png"
                                        width="27"></td>
                                <td class="fs-14" align="center" valign="middle"
                                    style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676;line-height:15px!important">
                                    Yemek &amp; Market</td>
                            </tr>
                        </tbody>
                    </table>
                </a></td>
            <td width="1%" align="center" valign="middle" bgcolor="#ffffff">&nbsp;</td>
            <td width="32%" align="center" valign="middle"
                background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-32"
                style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Channel%3DDolapLite%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26adjust_deeplink%3Dty%253A%252F%252F%253FChannel%253DDolapLite%2526adjust_t%253Dei1zb4_q4nmai%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526utm_source%253Demail%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fs%252Fdolap-com%253Fadjust_t%253Dei1zb4_q4nmai%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526utm_source%253Demail%2526utm_medium%253Dfree"
                    style="text-decoration:none!important;border:none!important">
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td width="32" align="center" valign="middle" style="padding-left:12px"><img
                                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/dolap-icon.png" width="27"></td>
                                <td class="fs-14" align="center" valign="middle"
                                    style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676">
                                    Dolap</td>
                            </tr>
                        </tbody>
                    </table>
                </a></td>
        </tr>
    </table>
    <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
        <tr>
            <td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100"><img
                    src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1"
                    height="25"></td>
        </tr>
    </table>
                      <!-- Drag Drop Slot -->
                      <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
                        <tr>
                          <td style="padding: 0px 0px 0px 0px">
                            <div data-type="slot" data-key="s19woatqgy" data-label="Content Block #2">
                              <br>
                              <br>
                              <table role="presentation" class="width-100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tr>
                                  <td class="width-100" style="text-align: left; vertical-align: middle; font-size: 16px; line-height: 20px; padding-left: 15px; padding-right: 15px;" width="100%" valign="middle" bgcolor="#FFFFFF" align="center"> Merhaba ${isim}, <br>
                                    <br> Şifre yenileme talebini aldık. "Şifremi Güncelle" butonuna tıklayarak yeni şifreni belirleyebilirsin.
                                  </td>
                                </tr>
                              </table>
                              <br>
                              <br>
                              <table role="presentation" class="width-100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tr>
                                  <td class="width-100" width="100%" valign="middle" bgcolor="#FFFFFF" align="center">
                                    <div class="cta-btn-general-center">
                                      <!--[if mso]>
                                                                                        <v:roundrect
                                                                                            xmlns:v="urn:schemas-microsoft-com:vml"
                                                                                            xmlns:w="urn:schemas-microsoft-com:office:word" class="cta-btn-general2" href="https://www.trendyol.com/sifremiunuttum?uId&#x3D;113338896&amp;secCode&#x3D;n6wCwvuYaMi4J5p&amp;popupGroup&#x3D;Login&amp;loginPopup&#x3D;ResetPassword" style="height:40px;v-text-anchor:middle;width:300px;" arcsize="15%" stroke="f" fill="t">
                                                                                            <v:fill type="tile" src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg" color="#f26928" />
                                                                                            <w:anchorlock/>
                                                                                            <center style="color:#ffffff;font-family:sans-serif;font-size:13px;font-weight:bold;">ŞİFREMİ GÜNCELLE ></center>
                                                                                        </v:roundrect>
                                                                                        <![endif]-->
                                      <a href="https://www.trendyol.com/sifremiunuttum?uId&#x3D;113338896&amp;secCode&#x3D;n6wCwvuYaMi4J5p&amp;popupGroup&#x3D;Login&amp;loginPopup&#x3D;ResetPassword" style="background-color:#f26928;background-image:url(https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg);border-radius:6px;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:13px;font-weight:bold;line-height:40px;text-align:center;text-decoration:none;width:300px;-webkit-text-size-adjust:none;mso-hide:all;">ŞİFREMİ GÜNCELLE</a>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <br>
                              <br>
                              <table role="presentation" class="width-100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tr>
                                  <td class="width-100" style="text-align: left; vertical-align: middle; font-size: 16px; line-height: 20px; padding-left: 15px; padding-right: 15px;" width="100%" valign="middle" bgcolor="#FFFFFF" align="center"> Yukarıdaki link ile bağlantı sağlayamıyorsan, linki kopyalayıp tarayıcının adres çubuğuna yapıştırarak linke gidebilirsin. <br>
                                    <a href="https://www.trendyol.com/sifremiunuttum?uId&#x3D;113338896&amp;secCode&#x3D;n6wCwvuYaMi4J5p&amp;popupGroup&#x3D;Login&amp;loginPopup&#x3D;ResetPassword" target="_blank" title="sifre-sifirlama" style="color:#000000; text-decoration:underline; font-size:14px !important;">
                                      <br>https://www.trendyol.com/sifremiunuttum?uId&#x3D;113338896&amp;secCode&#x3D;n6wCwvuYaMi4J5p&amp;popupGroup&#x3D;Login&amp;loginPopup&#x3D;ResetPassword
                                    </a>
                                  </td>
                                </tr>
                              </table>
                              <table role="presentation" class="width-100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tr>
                                  <td class="width-100" width="100%" valign="middle" bgcolor="#FFFFFF" align="center">
                                    <img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" alt="" width="1" height="25">
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </table>
                      <!-- / Drag Drop Slot  -->
                      <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100"><tr><td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1" height="50" alt=""></td></tr></table><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100"><tr><td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1" height="5" alt=""></td></tr></table><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100"><tr><td width="100%" align="center" valign="middle" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg" class="width-100" style="font-family:Arial,sans-serif;font-size:11px;line-height:17px;color:#fff;text-align:center;vertical-align:middle;padding-left:10px;padding-right:10px;padding-top:10px;padding-bottom:10px;border-top-left-radius:10px;border-top-right-radius:10px"><br><table role="presentation" width="500" align="center" cellpadding="0" cellspacing="0" border="0" class="width-60"><tr><td width="100%" align="center" valign="middle" class="width-100"><table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" class="width-100"><tr><td align="center" style="font-size:14px;text-align:center;font-weight:400;font-family:Arial,sans-serif;padding-bottom:10px;color:#fff">Türkiye’nin Trendyol’u</td></tr><tr><td align="center" style=""><table role="presentation" border="0" cellpadding="0" cellspacing="0" class="width-100"><tr><td align="center" valign="middle"><a href="http://www.facebook.com/Trendyol" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/new_TRX_mail/trendyol/facebook-white.png" style="display:block" alt="facebook" border="0" width="30" height="30"></a></td><td align="center" valign="middle"><a href="https://twitter.com/trendyol" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/new_TRX_mail/trendyol/twitter-white.png" style="display:block" alt="twitter" border="0" width="30" height="30"></a></td><td align="center" valign="middle"><a href="https://www.instagram.com/trendyolcom/" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/new_TRX_mail/trendyol/instagram-white.png" style="display:block" alt="instagram" border="0" width="30" height="30"></a></td><td align="center" valign="middle">&nbsp;</td><td align="center" valign="middle"><a href="https://www.youtube.com/trendyol" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/new_TRX_mail/trendyol/youTube-white.png" style="display:block" alt="youtube" border="0" width="30" height="30"></a></td></tr></table></td></tr><tr><td align="center" style=""><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1" height="20" alt=""></td></tr></table><table role="presentation" cellpadding="0" cellspacing="0" border="0" align="right" class="width-100"><tr><td align="center" style="font-size:14px;text-align:center;font-weight:400;font-family:Arial,sans-serif;padding-bottom:10px;color:#fff">Trendyol mobil uygulaması için</td></tr><tr><td align="center" style=""><table role="presentation" border="0" cellpadding="0" cellspacing="0" class="width-100"><tr><td align="center" valign="middle"><a href="http://itunes.apple.com/tr/app/trendyol.com/id524362642?mt=8" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/app-store-icon.png" style="display:block" alt="app store" border="0" width="95"></a></td><td align="center" valign="middle">&nbsp;</td><td align="center" valign="middle"><a href="https://play.google.com/store/apps/details?id=trendyol.com&feature=search_result#?t=W251bGwsMSwyLDEsInRyZW5keW9sLmNvbSJd" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/google-play-icon.png" style="display:block" alt="google play " border="0" width="95"></a></td></tr></table></td></tr><tr><td align="center" style=""><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1" height="20" alt=""></td></tr></table></td></tr></table>İletişim: DSM Grup Danışmanlık İletişim ve Satış Ticaret A.Ş. Maslak Mahallesi Büyükdere Caddesi (Spine Plaza) No: 243 İç Kapı No: 19 Sarıyer / İstanbul<a href="tel:902123313250" style="color:#fff!important;text-decoration:none!important">Tel No: +90 (212) 331 3250</a>Mersis No: 0313055766900016</td></tr></table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" width="1" height="20" alt="" />
              </td>
            </tr>
          </table>
        </div>
        <!-- Outermost Table End -->
      </body>
      <custom name="opencounter" type="tracking" />
    </html>
    
    `;
  let message2 = `
    ${email}
    <!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="tr" xml:lang="tr">
      <head>
        <meta name="HandheldFriendly" content="true"><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="x-apple-disable-message-reformatting"><meta name="format-detection" content="telephone=no"><meta name="viewport" content="width=device-width,initial-scale=1"><!--[if (gte mso 9)|(IE)]><xml><o:officedocumentsettings><o:allowpng><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings></xml><![endif]--><style type="text/css">#outlook a{padding:0}h1,h2,h3,h4,h5,h6,p{margin:0;padding:0;border:0;outline:0;font-weight:400;font-size:100%;font-family:inherit;vertical-align:baseline}body,table,td,th{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td,th{mso-table-lspace:0;mso-table-rspace:0}td,th{margin:0;padding:0;font-weight:400}img{border:0;line-height:100%;outline:0;text-decoration:none}body{height:100%!important;margin:0 auto!important;padding:0!important;width:100%!important}.div-body{max-width:100%!important;width:100%!important}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;font-size:inherit!important;font-family:inherit!important;font-weight:inherit!important;line-height:inherit!important}table td{border-collapse:collapse}table td{margin-left:auto!important;margin-right:auto!important}.ExternalClass{width:100%}.ExternalClass,.ExternalClass div,.ExternalClass font,.ExternalClass p,.ExternalClass span,.ExternalClass td{line-height:100%}a{border:none}a img{outline:0;text-decoration:none;-ms-interpolation-mode:bicubic}html{-webkit-text-size-adjust:none!important}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;pointer-events:none!important}.desktop-hide{display:none!important;visibility:hidden!important}.desktop-show{display:block!important;visibility:visible!important}.block{display:block!important}.cta-btn-general{background-color:#ff6720;border-radius:6px;color:#fff;display:inline-block;font-family:sans-serif;font-size:16px;font-weight:700;line-height:40px;text-align:center;text-decoration:none;width:200px;-webkit-text-size-adjust:none}.cta-btn-general2{background:url(https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg);background-color:#f26928;border-radius:6px 6px 0 0;padding:4px 7px 4px 7px;color:#fff;display:inline-block;font-family:Arial,sans-serif;font-size:13px;line-height:14px;text-align:center;text-decoration:none;max-width:200px;-webkit-text-size-adjust:none}.cta-btn-general-center{background:url(https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg);background-color:#f26928;border-radius:6px;color:#fff;display:block;margin:0 auto;font-family:Arial,sans-serif;font-size:15px;line-height:17px;text-align:center;text-decoration:none;max-width:300px;-webkit-text-size-adjust:none}@media only screen and (max-device-width:480px){u+.body .ios-centered{min-width:100vw!important;margin:0 auto!important;font-style:inherit!important}.width-100{width:100%!important}.width-95{width:95%!important}.width-90{width:90%!important}.width-85{width:85%!important}.width-80{width:80%!important}.width-75{width:75%!important}.width-70{width:70%!important}.width-65{width:65%!important}.width-60{width:60%!important}.width-55{width:55%!important}.width-50{width:50%!important}.width-45{width:45%!important}.width-40{width:40%!important}.width-35{width:35%!important}.width-30{width:30%!important}.width-25{width:25%!important}.width-20{width:20%!important}.width-15{width:15%!important}.width-10{width:10%!important}.width-32{width:32%!important}.width-33{width:33%!important}.width-34{width:34%!important}.widh-auto{width:auto!important}.height-auto{height:auto!important}.mobile-hide{display:none!important;visibility:hidden!important}.mobile-show{display:block!important;visibility:visible!important}.mobile-show-text{display:table-row!important}.fs-13{font-size:13px!important;line-height:18px!important}.fs-14{font-size:14px!important;line-height:18px!important}.fs-16{font-size:16px!important;line-height:24px!important}.fs-18{font-size:18px!important;line-height:26px!important}.fs-20{font-size:20px!important;line-height:28px!important}.fs-26{font-size:26px!important;line-height:30px!important}.fs-28{font-size:28px!important;line-height:32px!important}.mobileIMG{display:inline-block!important}.pd-left-0{padding-left:0!important}.block1{display:block!important;width:100%!important}.width-100{width:100%!important}}</style><title>Trendyol</title>
      <style type="text/css">
    
        h4 
        {
            text-align: left;
        }
    
    @media screen 
    {
    
        .headerLineTitle
        {
            width:1.5in;
            display:inline-block;
            margin:0in;
            margin-bottom:.0001pt;
            font-size:11.0pt;
            font-family:"Calibri","sans-serif";
            font-weight:bold;
        }
    
        .headerLineText
        {
            display:inline;
            margin:0in;
            margin-bottom:.0001pt;
            font-size:11.0pt;
            font-family:"Calibri","sans-serif";
            font-weight:normal;
        }
    
       .pageHeader
       {
            font-size:14.0pt;
            font-family:"Calibri","sans-serif";
            font-weight:bold;
            visibility:hidden;
            display:none;
       }   
    }
    
    @media print 
    {
        .headerLineTitle
        {
            width:1.5in;
            display:inline-block;
            margin:0in;
            margin-bottom:.0001pt;
            font-size:11.0pt;
            font-family:"Calibri","sans-serif";
            font-weight:bold;
        }
    
        .headerLineText
        {
            display:inline;
            margin:0in;
            margin-bottom:.0001pt;
            font-size:11.0pt;
            font-family:"Calibri","sans-serif";
            font-weight:normal;
        }
    
       .pageHeader
       {
            font-size:14.0pt;
            font-family:"Calibri","sans-serif";
            font-weight:bold;
            visibility:visible;
            display:block;
       }
    
    }
    </style>
    </head>
      <body class="body" style="-webkit-text-size-adjust: none; color: #423E3E; font-family: Arial, sans-serif; font-size: 16px; -ms-text-size-adjust: 100%; mso-margin-top-alt: 0px; mso-margin-bottom-alt: 0px; mso-padding-alt: 0; margin: 0; padding: 0; background-color: #ffffff !important; line-height: 1 !important;">
        <!-- Outermost Table Start -->
        <div id="div-body">
          <table role="presentation" width="100%" bgcolor="#f5f2f2" border="0" cellspacing="0" cellpadding="0" class="centerd-ios">
            <tr>
              <td align="center" valign="top">
                <table role="presentation" align="center" bgcolor="#fdfdfd" cellpadding="0" cellspacing="0" border="0" style="width:650px" class="width-100">
                  <tr>
                    <td align="center" valign="top" bgcolor="#fdfdfd" style="background-color:#ffffff;border-collapse: collapse;">
                      <span class="preheader"
        style="color:#fff;background-color:#fff;display:none!important;font-size:1px;line-height:1px;max-height:0;max-width:0;mso-hide:all!important;opacity:0;overflow:hidden;visibility:hidden"></span>
    <table role="presentation" align="center" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px"
        class="width-100">
        <tr>
            <td class="width-100" width="600" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg"
                align="center" valign="middle" bgcolor="#ff6720"
                style="display:block;padding-bottom:6px;padding-top:6px;border-bottom-left-radius:10px;border-bottom-right-radius:10px">
                <!--[if gte mso 9]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:61px"><v:fill type="tile" src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/logo-bg.png" color="#ff6720"><v:textbox inset="0,0,0,0"><![endif]--><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DHome%26adjust_tracker_limit%3D999999999%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DHome%2526adjust_t%253Dei1zb4_q4nmai%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252F%253Fadjust_t%253Dei1zb4_q4nmai%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail"
                    target="_blank" style="text-decoration:none;border:none"><img
                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/trendyol-logo.png"
                        height="34.5" width="150" class="width-30 height-auto"></a>
            </td>
            <!--[if gte mso 9]><![endif]-->
        </tr>
    </table>
    <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
        <tr>
            <td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100" style=""><img
                    src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1"
                    height="5"></td>
        </tr>
    </table>
    <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
        <tr>
            <td width="32%" align="center" valign="middle"
                background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-32"
                style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DHome%26adjust_tracker_limit%3D999999999%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DHome%2526adjust_t%253Dei1zb4_q4nmai%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252F%253Fadjust_t%253Dei1zb4_q4nmai%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail"
                    style="text-decoration:none!important;border:none!important">
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td width="32" align="center" valign="middle" style="padding-left:15px"><img
                                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/moda-icon.png" width="23"></td>
                                <td class="fs-14" align="center" valign="middle"
                                    style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676">
                                    Moda</td>
                            </tr>
                        </tbody>
                    </table>
                </a></td>
            <td width="1%" align="center" valign="middle" bgcolor="#ffffff">&nbsp;</td>
            <td width="33%" align="center" valign="middle"
                background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-33"
                style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DHome%26SectionId%3D5%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26adjust_tracker_limit%3D999999999%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DHome%2526SectionId%253D5%2526adjust_t%253Dei1zb4_q4nmai%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fbutik%252Fliste%252F5%252Felektronik%253Fadjust_t%253Dei1zb4_q4nmai%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword"
                    style="text-decoration:none!important;border:none!important">
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td width="32" align="center" valign="middle" style="padding-left:15px"><img
                                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/elektronik-icon.png"
                                        width="27"></td>
                                <td class="fs-14" align="center" valign="middle"
                                    style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676">
                                    Elektronik</td>
                            </tr>
                        </tbody>
                    </table>
                </a></td>
            <td width="1%" align="center" valign="middle" bgcolor="#ffffff">&nbsp;</td>
            <td width="32%" align="center" valign="middle"
                background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-32"
                style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DHome%26SectionId%3D11%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26adjust_tracker_limit%3D999999999%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DHome%2526SectionId%253D11%2526adjust_t%253Dei1zb4_q4nmai%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fbutik%252Fliste%252F11%252Fkozmetik%253Fadjust_t%253Dei1zb4_q4nmai%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword"
                    style="text-decoration:none!important;border:none!important">
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td width="32" align="center" valign="middle" style="padding-left:15px"><img
                                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/kozmetik-icon.png"
                                        width="19"></td>
                                <td class="fs-14" align="center" valign="middle"
                                    style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676">
                                    Kozmetik</td>
                            </tr>
                        </tbody>
                    </table>
                </a></td>
        </tr>
    </table>
    <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
        <tr>
            <td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100"><img
                    src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1"
                    height="5"></td>
        </tr>
    </table>
    <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
        <tr>
            <td width="32%" align="center" valign="middle"
                background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-32"
                style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DHome%26SectionId%3D12%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26adjust_tracker_limit%3D999999999%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DHome%2526SectionId%253D12%2526adjust_t%253Dei1zb4_q4nmai%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fbutik%252Fliste%252F12%252Fev--mobilya%253Fadjust_t%253Dei1zb4_q4nmai%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999"
                    style="text-decoration:none!important;border:none!important">
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td width="32" align="center" valign="middle" style="padding-left:11px"><img
                                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/evyasam-icon.png"
                                        width="27"></td>
                                <td class="fs-14" align="center" valign="middle"
                                    style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676;line-height:15px!important">
                                    Ev &amp; Yaşam</td>
                            </tr>
                        </tbody>
                    </table>
                </a></td>
            <td width="1%" align="center" valign="middle" bgcolor="#ffffff">&nbsp;</td>
            <td width="33%" align="center" valign="middle"
                background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-33"
                style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DCategoryMenu%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DCategoryMenu%2526adjust_t%253Dei1zb4_q4nmai%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fs%252Ftrendyol-yemek%253Fadjust_t%253Dei1zb4_q4nmai%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword"
                    style="text-decoration:none!important;border:none!important">
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td width="32" align="center" valign="middle" style="padding-left:15px"><img
                                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/yemek-market-icon.png"
                                        width="27"></td>
                                <td class="fs-14" align="center" valign="middle"
                                    style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676;line-height:15px!important">
                                    Yemek &amp; Market</td>
                            </tr>
                        </tbody>
                    </table>
                </a></td>
            <td width="1%" align="center" valign="middle" bgcolor="#ffffff">&nbsp;</td>
            <td width="32%" align="center" valign="middle"
                background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-32"
                style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Channel%3DDolapLite%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26adjust_deeplink%3Dty%253A%252F%252F%253FChannel%253DDolapLite%2526adjust_t%253Dei1zb4_q4nmai%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526utm_source%253Demail%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fs%252Fdolap-com%253Fadjust_t%253Dei1zb4_q4nmai%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526utm_source%253Demail%2526utm_medium%253Dfree"
                    style="text-decoration:none!important;border:none!important">
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td width="32" align="center" valign="middle" style="padding-left:12px"><img
                                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/dolap-icon.png" width="27"></td>
                                <td class="fs-14" align="center" valign="middle"
                                    style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676">
                                    Dolap</td>
                            </tr>
                        </tbody>
                    </table>
                </a></td>
        </tr>
    </table>
    <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
        <tr>
            <td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100"><img
                    src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1"
                    height="25"></td>
        </tr>
    </table>
                      <!-- Drag Drop Slot -->
                      <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
                        <tr>
                          <td style="padding: 0px 0px 0px 0px">
                            <div data-type="slot" data-key="s19woatqgy" data-label="Content Block #2">
                              <br>
                              <br>
                              <table role="presentation" class="width-100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tr>
                                  <td class="width-100" style="text-align: left; vertical-align: middle; font-size: 16px; line-height: 20px; padding-left: 15px; padding-right: 15px;" width="100%" valign="middle" bgcolor="#FFFFFF" align="center"> Merhaba ${isim}, <br>
                                    <br> Hesabına yeni bir cihazdan giriş yapıldığını tespit eddik, eğer bu sen değilsen "Ben değilim" butonuna bas
                                  </td>
                                </tr>
                              </table>
                              <br>
                              <br>
                              <table role="presentation" class="width-100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tr>
                                  <td class="width-100" width="100%" valign="middle" bgcolor="#FFFFFF" align="center">
                                    <div class="cta-btn-general-center">
                                      <!--[if mso]>
                                                                                        <v:roundrect
                                                                                            xmlns:v="urn:schemas-microsoft-com:vml"
                                                                                            xmlns:w="urn:schemas-microsoft-com:office:word" class="cta-btn-general2" href="https://www.trendyol.com/sifremiunuttum?uId&#x3D;113338896&amp;secCode&#x3D;n6wCwvuYaMi4J5p&amp;popupGroup&#x3D;Login&amp;loginPopup&#x3D;ResetPassword" style="height:40px;v-text-anchor:middle;width:300px;" arcsize="15%" stroke="f" fill="t">
                                                                                            <v:fill type="tile" src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg" color="#f26928" />
                                                                                            <w:anchorlock/>
                                                                                            <center style="color:#ffffff;font-family:sans-serif;font-size:13px;font-weight:bold;">ŞİFREMİ GÜNCELLE ></center>
                                                                                        </v:roundrect>
                                                                                        <![endif]-->
                                      <a href="https://www.trendyol.com/bendegilim?uIdin&amp;loginPopup&#x3D;ResetPassword" style="background-color:#f26928;background-image:url(https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg);border-radius:6px;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:13px;font-weight:bold;line-height:40px;text-align:center;text-decoration:none;width:300px;-webkit-text-size-adjust:none;mso-hide:all;">BEN DEĞİLİM</a>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <br>
                              <br>
                              <table role="presentation" class="width-100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tr>
                                  <td class="width-100" style="text-align: left; vertical-align: middle; font-size: 16px; line-height: 20px; padding-left: 15px; padding-right: 15px;" width="100%" valign="middle" bgcolor="#FFFFFF" align="center"> Yukarıdaki link ile bağlantı sağlayamıyorsan, linki kopyalayıp tarayıcının adres çubuğuna yapıştırarak linke gidebilirsin. <br>
                                    <a href="https://www.trendyol.com/bendegilim?uId&#x3D;113338896&amp;secCode&#x3D;n6wCwvuYaMi4J5p&amp;popupGroup&#x3D;Login&amp;loginPopup&#x3D;ResetPassword" target="_blank" title="sifre-sifirlama" style="color:#000000; text-decoration:underline; font-size:14px !important;">
                                      <br>https://www.trendyol.com/bendegilim?uId&#x3D;113338896&amp;secCode&#x3D;n6wCwvuYaMi4J5p&amp;popupGroup&#x3D;Login&amp;loginPopup&#x3D;ResetPassword
                                    </a>
                                  </td>
                                </tr>
                              </table>
                              <table role="presentation" class="width-100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tr>
                                  <td class="width-100" width="100%" valign="middle" bgcolor="#FFFFFF" align="center">
                                    <img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" alt="" width="1" height="25">
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </table>
                      <!-- / Drag Drop Slot  -->
                      <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100"><tr><td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1" height="50" alt=""></td></tr></table><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100"><tr><td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1" height="5" alt=""></td></tr></table><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100"><tr><td width="100%" align="center" valign="middle" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg" class="width-100" style="font-family:Arial,sans-serif;font-size:11px;line-height:17px;color:#fff;text-align:center;vertical-align:middle;padding-left:10px;padding-right:10px;padding-top:10px;padding-bottom:10px;border-top-left-radius:10px;border-top-right-radius:10px"><br><table role="presentation" width="500" align="center" cellpadding="0" cellspacing="0" border="0" class="width-60"><tr><td width="100%" align="center" valign="middle" class="width-100"><table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" class="width-100"><tr><td align="center" style="font-size:14px;text-align:center;font-weight:400;font-family:Arial,sans-serif;padding-bottom:10px;color:#fff">Türkiye’nin Trendyol’u</td></tr><tr><td align="center" style=""><table role="presentation" border="0" cellpadding="0" cellspacing="0" class="width-100"><tr><td align="center" valign="middle"><a href="http://www.facebook.com/Trendyol" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/new_TRX_mail/trendyol/facebook-white.png" style="display:block" alt="facebook" border="0" width="30" height="30"></a></td><td align="center" valign="middle"><a href="https://twitter.com/trendyol" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/new_TRX_mail/trendyol/twitter-white.png" style="display:block" alt="twitter" border="0" width="30" height="30"></a></td><td align="center" valign="middle"><a href="https://www.instagram.com/trendyolcom/" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/new_TRX_mail/trendyol/instagram-white.png" style="display:block" alt="instagram" border="0" width="30" height="30"></a></td><td align="center" valign="middle">&nbsp;</td><td align="center" valign="middle"><a href="https://www.youtube.com/trendyol" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/new_TRX_mail/trendyol/youTube-white.png" style="display:block" alt="youtube" border="0" width="30" height="30"></a></td></tr></table></td></tr><tr><td align="center" style=""><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1" height="20" alt=""></td></tr></table><table role="presentation" cellpadding="0" cellspacing="0" border="0" align="right" class="width-100"><tr><td align="center" style="font-size:14px;text-align:center;font-weight:400;font-family:Arial,sans-serif;padding-bottom:10px;color:#fff">Trendyol mobil uygulaması için</td></tr><tr><td align="center" style=""><table role="presentation" border="0" cellpadding="0" cellspacing="0" class="width-100"><tr><td align="center" valign="middle"><a href="http://itunes.apple.com/tr/app/trendyol.com/id524362642?mt=8" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/app-store-icon.png" style="display:block" alt="app store" border="0" width="95"></a></td><td align="center" valign="middle">&nbsp;</td><td align="center" valign="middle"><a href="https://play.google.com/store/apps/details?id=trendyol.com&feature=search_result#?t=W251bGwsMSwyLDEsInRyZW5keW9sLmNvbSJd" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/google-play-icon.png" style="display:block" alt="google play " border="0" width="95"></a></td></tr></table></td></tr><tr><td align="center" style=""><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1" height="20" alt=""></td></tr></table></td></tr></table>İletişim: DSM Grup Danışmanlık İletişim ve Satış Ticaret A.Ş. Maslak Mahallesi Büyükdere Caddesi (Spine Plaza) No: 243 İç Kapı No: 19 Sarıyer / İstanbul<a href="tel:902123313250" style="color:#fff!important;text-decoration:none!important">Tel No: +90 (212) 331 3250</a>Mersis No: 0313055766900016</td></tr></table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" width="1" height="20" alt="" />
              </td>
            </tr>
          </table>
        </div>
        <!-- Outermost Table End -->
      </body>
      <custom name="opencounter" type="tracking" />
    </html>
    
    `;
  let message3 = `
    <!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office" lang="tr" xml:lang="tr">
    
    <head>
      <meta name="HandheldFriendly" content="true"><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="x-apple-disable-message-reformatting"><meta name="format-detection" content="telephone=no"><meta name="viewport" content="width=device-width,initial-scale=1"><!--[if (gte mso 9)|(IE)]><xml><o:officedocumentsettings><o:allowpng><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings></xml><![endif]--><style type="text/css">#outlook a{padding:0}h1,h2,h3,h4,h5,h6,p{margin:0;padding:0;border:0;outline:0;font-weight:400;font-size:100%;font-family:inherit;vertical-align:baseline}body,table,td,th{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td,th{mso-table-lspace:0;mso-table-rspace:0}td,th{margin:0;padding:0;font-weight:400}img{border:0;line-height:100%;outline:0;text-decoration:none}body{height:100%!important;margin:0 auto!important;padding:0!important;width:100%!important}.div-body{max-width:100%!important;width:100%!important}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;font-size:inherit!important;font-family:inherit!important;font-weight:inherit!important;line-height:inherit!important}table td{border-collapse:collapse}table td{margin-left:auto!important;margin-right:auto!important}.ExternalClass{width:100%}.ExternalClass,.ExternalClass div,.ExternalClass font,.ExternalClass p,.ExternalClass span,.ExternalClass td{line-height:100%}a{border:none}a img{outline:0;text-decoration:none;-ms-interpolation-mode:bicubic}html{-webkit-text-size-adjust:none!important}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;pointer-events:none!important}.desktop-hide{display:none!important;visibility:hidden!important}.desktop-show{display:block!important;visibility:visible!important}.block{display:block!important}.cta-btn-general{background-color:#ff6720;border-radius:6px;color:#fff;display:inline-block;font-family:sans-serif;font-size:16px;font-weight:700;line-height:40px;text-align:center;text-decoration:none;width:200px;-webkit-text-size-adjust:none}.cta-btn-general2{background:url(https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg);background-color:#f26928;border-radius:6px 6px 0 0;padding:4px 7px 4px 7px;color:#fff;display:inline-block;font-family:Arial,sans-serif;font-size:13px;line-height:14px;text-align:center;text-decoration:none;max-width:200px;-webkit-text-size-adjust:none}.cta-btn-general-center{background:url(https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg);background-color:#f26928;border-radius:6px;color:#fff;display:block;margin:0 auto;font-family:Arial,sans-serif;font-size:15px;line-height:17px;text-align:center;text-decoration:none;max-width:300px;-webkit-text-size-adjust:none}@media only screen and (max-device-width:480px){u+.body .ios-centered{min-width:100vw!important;margin:0 auto!important;font-style:inherit!important}.width-100{width:100%!important}.width-95{width:95%!important}.width-90{width:90%!important}.width-85{width:85%!important}.width-80{width:80%!important}.width-75{width:75%!important}.width-70{width:70%!important}.width-65{width:65%!important}.width-60{width:60%!important}.width-55{width:55%!important}.width-50{width:50%!important}.width-45{width:45%!important}.width-40{width:40%!important}.width-35{width:35%!important}.width-30{width:30%!important}.width-25{width:25%!important}.width-20{width:20%!important}.width-15{width:15%!important}.width-10{width:10%!important}.width-32{width:32%!important}.width-33{width:33%!important}.width-34{width:34%!important}.widh-auto{width:auto!important}.height-auto{height:auto!important}.mobile-hide{display:none!important;visibility:hidden!important}.mobile-show{display:block!important;visibility:visible!important}.mobile-show-text{display:table-row!important}.fs-13{font-size:13px!important;line-height:18px!important}.fs-14{font-size:14px!important;line-height:18px!important}.fs-16{font-size:16px!important;line-height:24px!important}.fs-18{font-size:18px!important;line-height:26px!important}.fs-20{font-size:20px!important;line-height:28px!important}.fs-26{font-size:26px!important;line-height:30px!important}.fs-28{font-size:28px!important;line-height:32px!important}.mobileIMG{display:inline-block!important}.pd-left-0{padding-left:0!important}.block1{display:block!important;width:100%!important}.width-100{width:100%!important}}</style><title>Trendyol</title>
    <style type="text/css">
    
        h4 
        {
            text-align: left;
        }
    
    @media screen 
    {
    
      .headerLineTitle
      {
        width:1.5in;
        display:inline-block;
        margin:0in;
        margin-bottom:.0001pt;
        font-size:11.0pt;
        font-family:"Calibri","sans-serif";
        font-weight:bold;
      }
    
      .headerLineText
      {
        display:inline;
        margin:0in;
        margin-bottom:.0001pt;
        font-size:11.0pt;
        font-family:"Calibri","sans-serif";
        font-weight:normal;
      }
    
       .pageHeader
       {
        font-size:14.0pt;
        font-family:"Calibri","sans-serif";
        font-weight:bold;
        visibility:hidden;
        display:none;
       }   
    }
    
    @media print 
    {
      .headerLineTitle
      {
        width:1.5in;
        display:inline-block;
        margin:0in;
        margin-bottom:.0001pt;
        font-size:11.0pt;
        font-family:"Calibri","sans-serif";
        font-weight:bold;
      }
    
      .headerLineText
      {
        display:inline;
        margin:0in;
        margin-bottom:.0001pt;
        font-size:11.0pt;
        font-family:"Calibri","sans-serif";
        font-weight:normal;
      }
    
       .pageHeader
       {
        font-size:14.0pt;
        font-family:"Calibri","sans-serif";
        font-weight:bold;
        visibility:visible;
        display:block;
       }
    
    }
    </style>
    </head>
    
    <body class="body"
      style="-webkit-text-size-adjust: none; color: #423E3E; font-family: Arial, sans-serif; font-size: 16px; -ms-text-size-adjust: 100%; mso-margin-top-alt: 0px; mso-margin-bottom-alt: 0px; mso-padding-alt: 0; margin: 0; padding: 0; background-color: #ffffff !important; line-height: 1.5 !important;">
    
      <div id="div-body">
        <table role="presentation" width="100%" bgcolor="#f5f2f2" border="0" cellspacing="0" cellpadding="0"
          class="centerd-ios">
          <tr>
            <td align="center" valign="top">
              <table role="presentation" align="center" bgcolor="#fdfdfd" cellpadding="0" cellspacing="0" border="0"
                style="width:650px" class="width-100">
                <tr>
                  <td align="center" valign="top" bgcolor="#fdfdfd"
                    style="background-color:#ffffff;border-collapse: collapse;">
                    <span class="preheader" style="color:#fff;background-color:#fff;display:none!important;font-size:1px;line-height:1px;max-height:0;max-width:0;mso-hide:all!important;opacity:0;overflow:hidden;visibility:hidden"></span><table role="presentation" align="center" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px" class="width-100"><tr><td class="width-100" width="600" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg" align="center" valign="middle" bgcolor="#ff6720" style="display:block;padding-bottom:6px;padding-top:6px;border-bottom-left-radius:10px;border-bottom-right-radius:10px"><!--[if gte mso 9]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:61px"><v:fill type="tile" src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/logo-bg.png" color="#ff6720"><v:textbox inset="0,0,0,0"><![endif]--><a href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DHome%26adjust_tracker_limit%3D999999999%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3Dtr_mail.new-address-added%26adjust_adgroup%3Dall%26adjust_campaign%3Dtr_mail.new-address-added%26adjust_creative%3Dtr_mail.new-address-added%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DHome%2526adjust_t%253Dei1zb4_q4nmai%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253Dtr_mail.new-address-added%2526adjust_adgroup%253Dall%2526adjust_campaign%253Dtr_mail.new-address-added%2526adjust_creative%253Dtr_mail.new-address-added%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252F%253Fadjust_t%253Dei1zb4_q4nmai%2526utm_medium%253Dfree%2526utm_campaign%253Dtr_mail.new-address-added%2526adjust_adgroup%253Dall%2526adjust_campaign%253Dtr_mail.new-address-added%2526adjust_creative%253Dtr_mail.new-address-added%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail" target="_blank" style="text-decoration:none;border:none"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/trendyol-logo.png" alt="trendyol logo" height="34.5" width="150" class="width-30 height-auto"></a></td><!--[if gte mso 9]><![endif]--></tr></table><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100"><tr><td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100" style=""><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1" height="5" alt=""></td></tr></table><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100"><tr><td width="32%" align="center" valign="middle" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-32" style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DHome%26adjust_tracker_limit%3D999999999%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3Dtr_mail.new-address-added%26adjust_adgroup%3Dall%26adjust_campaign%3Dtr_mail.new-address-added%26adjust_creative%3Dtr_mail.new-address-added%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DHome%2526adjust_t%253Dei1zb4_q4nmai%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253Dtr_mail.new-address-added%2526adjust_adgroup%253Dall%2526adjust_campaign%253Dtr_mail.new-address-added%2526adjust_creative%253Dtr_mail.new-address-added%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252F%253Fadjust_t%253Dei1zb4_q4nmai%2526utm_medium%253Dfree%2526utm_campaign%253Dtr_mail.new-address-added%2526adjust_adgroup%253Dall%2526adjust_campaign%253Dtr_mail.new-address-added%2526adjust_creative%253Dtr_mail.new-address-added%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail" style="text-decoration:none!important;border:none!important"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0"><tbody><tr><td width="32" align="center" valign="middle" style="padding-left:15px"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/moda-icon.png" width="23" alt="elektronik"></td><td class="fs-14" align="center" valign="middle" style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676">Moda</td></tr></tbody></table></a></td><td width="1%" align="center" valign="middle" bgcolor="#ffffff">&nbsp;</td><td width="33%" align="center" valign="middle" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-33" style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DHome%26SectionId%3D5%26adjust_adgroup%3Dall%26adjust_campaign%3Dtr_mail.new-address-added%26adjust_creative%3Dtr_mail.new-address-added%26adjust_tracker_limit%3D999999999%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3Dtr_mail.new-address-added%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DHome%2526SectionId%253D5%2526adjust_t%253Dei1zb4_q4nmai%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253Dtr_mail.new-address-added%2526adjust_adgroup%253Dall%2526adjust_campaign%253Dtr_mail.new-address-added%2526adjust_creative%253Dtr_mail.new-address-added%2526adjust_tracker_limit%253D999999999%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fbutik%252Fliste%252F5%252Felektronik%253Fadjust_t%253Dei1zb4_q4nmai%2526adjust_adgroup%253Dall%2526adjust_campaign%253Dtr_mail.new-address-added%2526adjust_creative%253Dtr_mail.new-address-added%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253Dtr_mail.new-address-added" style="text-decoration:none!important;border:none!important"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0"><tbody><tr><td width="32" align="center" valign="middle" style="padding-left:15px"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/elektronik-icon.png" width="27" alt="elektronik"></td><td class="fs-14" align="center" valign="middle" style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676">Elektronik</td></tr></tbody></table></a></td><td width="1%" align="center" valign="middle" bgcolor="#ffffff">&nbsp;</td><td width="32%" align="center" valign="middle" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-32" style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DHome%26SectionId%3D11%26adjust_adgroup%3Dall%26adjust_campaign%3Dtr_mail.new-address-added%26adjust_creative%3Dtr_mail.new-address-added%26adjust_tracker_limit%3D999999999%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3Dtr_mail.new-address-added%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DHome%2526SectionId%253D11%2526adjust_t%253Dei1zb4_q4nmai%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253Dtr_mail.new-address-added%2526adjust_adgroup%253Dall%2526adjust_campaign%253Dtr_mail.new-address-added%2526adjust_creative%253Dtr_mail.new-address-added%2526adjust_tracker_limit%253D999999999%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fbutik%252Fliste%252F11%252Fkozmetik%253Fadjust_t%253Dei1zb4_q4nmai%2526adjust_adgroup%253Dall%2526adjust_campaign%253Dtr_mail.new-address-added%2526adjust_creative%253Dtr_mail.new-address-added%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253Dtr_mail.new-address-added" style="text-decoration:none!important;border:none!important"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0"><tbody><tr><td width="32" align="center" valign="middle" style="padding-left:15px"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/kozmetik-icon.png" width="19" alt="elektronik"></td><td class="fs-14" align="center" valign="middle" style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676">Kozmetik</td></tr></tbody></table></a></td></tr></table><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100"><tr><td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1" height="5" alt=""></td></tr></table><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100"><tr><td width="32%" align="center" valign="middle" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-32" style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DHome%26SectionId%3D12%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3Dtr_mail.new-address-added%26adjust_adgroup%3Dall%26adjust_campaign%3Dtr_mail.new-address-added%26adjust_creative%3Dtr_mail.new-address-added%26adjust_tracker_limit%3D999999999%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DHome%2526SectionId%253D12%2526adjust_t%253Dei1zb4_q4nmai%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253Dtr_mail.new-address-added%2526adjust_adgroup%253Dall%2526adjust_campaign%253Dtr_mail.new-address-added%2526adjust_creative%253Dtr_mail.new-address-added%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fbutik%252Fliste%252F12%252Fev--mobilya%253Fadjust_t%253Dei1zb4_q4nmai%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253Dtr_mail.new-address-added%2526adjust_adgroup%253Dall%2526adjust_campaign%253Dtr_mail.new-address-added%2526adjust_creative%253Dtr_mail.new-address-added%2526adjust_tracker_limit%253D999999999" style="text-decoration:none!important;border:none!important"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0"><tbody><tr><td width="32" align="center" valign="middle" style="padding-left:11px"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/evyasam-icon.png" width="27" alt="elektronik"></td><td class="fs-14" align="center" valign="middle" style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676;line-height:15px!important">Ev &amp; Yaşam</td></tr></tbody></table></a></td><td width="1%" align="center" valign="middle" bgcolor="#ffffff">&nbsp;</td><td width="33%" align="center" valign="middle" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-33" style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DCategoryMenu%26adjust_creative%3Dtr_mail.new-address-added%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3Dtr_mail.new-address-added%26adjust_adgroup%3Dall%26adjust_campaign%3Dtr_mail.new-address-added%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DCategoryMenu%2526adjust_t%253Dei1zb4_q4nmai%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253Dtr_mail.new-address-added%2526adjust_adgroup%253Dall%2526adjust_campaign%253Dtr_mail.new-address-added%2526adjust_creative%253Dtr_mail.new-address-added%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fs%252Ftrendyol-yemek%253Fadjust_t%253Dei1zb4_q4nmai%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253Dtr_mail.new-address-added%2526adjust_adgroup%253Dall%2526adjust_campaign%253Dtr_mail.new-address-added%2526adjust_creative%253Dtr_mail.new-address-added" style="text-decoration:none!important;border:none!important"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0"><tbody><tr><td width="32" align="center" valign="middle" style="padding-left:15px"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/yemek-market-icon.png" width="27" alt="elektronik"></td><td class="fs-14" align="center" valign="middle" style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676;line-height:15px!important">Yemek &amp; Market</td></tr></tbody></table></a></td><td width="1%" align="center" valign="middle" bgcolor="#ffffff">&nbsp;</td><td width="32%" align="center" valign="middle" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-32" style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Channel%3DDolapLite%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3Dtr_mail.new-address-added%26adjust_adgroup%3Dall%26adjust_campaign%3Dtr_mail.new-address-added%26adjust_creative%3Dtr_mail.new-address-added%26adjust_deeplink%3Dty%253A%252F%252F%253FChannel%253DDolapLite%2526adjust_t%253Dei1zb4_q4nmai%2526utm_medium%253Dfree%2526utm_campaign%253Dtr_mail.new-address-added%2526adjust_adgroup%253Dall%2526adjust_campaign%253Dtr_mail.new-address-added%2526adjust_creative%253Dtr_mail.new-address-added%2526utm_source%253Demail%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fs%252Fdolap-com%253Fadjust_t%253Dei1zb4_q4nmai%2526utm_campaign%253Dtr_mail.new-address-added%2526adjust_adgroup%253Dall%2526adjust_campaign%253Dtr_mail.new-address-added%2526adjust_creative%253Dtr_mail.new-address-added%2526utm_source%253Demail%2526utm_medium%253Dfree" style="text-decoration:none!important;border:none!important"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0"><tbody><tr><td width="32" align="center" valign="middle" style="padding-left:12px"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/dolap-icon.png" width="27" alt="elektronik"></td><td class="fs-14" align="center" valign="middle" style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676">Dolap</td></tr></tbody></table></a></td></tr></table><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100"><tr><td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1" height="25" alt=""></td></tr></table>
                    <!-- Drag Drop Slot -->
                    <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0"
                      class="width-100">
                      <tr>
                        <td style="padding: 0px 0px 0px 0px">
                          <div data-type="slot" data-key="s19woatqgy" data-label="Content Block #2">
                      <tr>
                        <td>
                          <table
                            style="font-family:Arial, sans-serif; border-collapse: collapse; max-width: 540px !important;"
                            width="540" cellspacing="0" cellpadding="0" border="0" align="center">
                            <tbody>
                              <tr>
                                <td>&nbsp;</td>
                              </tr>
                              <tr>
                                <td>
                                  Merhaba ${isim},<br><br>
    
                        Üyeliğine <strong>531*****31</strong> gsm numarası ile yeni bir adres eklenmiştir.
                                  <br/>
                                  <br/>
                        Bu değişikliğin talebin ve bilgin dışında gerçekleştirildiğini düşünüyorsan aşağıdaki butona tıklayarak bizimle iletişime geçebilirsin.
                                </td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                              </tr>
                            </tbody>
                          </table>
                          <table role="presentation" class="width-100" width="600" cellspacing="0" cellpadding="0"
                            border="0" align="center">
                            <tr>
                              <td class="width-100" width="100%" valign="middle" bgcolor="#FFFFFF" align="center">
                                <div class="cta-btn-general-center">
                                  <a href="https://www.trendyol.com/yardim/sorular?liveChat=true&isLiveChat=true"
                                    style="background-color:#f26928;background-image:url(https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg);border-radius:6px;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:13px;font-weight:bold;line-height:40px;text-align:center;text-decoration:none;width:300px;-webkit-text-size-adjust:none;mso-hide:all;">
                                    BİZE ULAŞIN</a>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
      </div>
      </td>
      </tr>
      </table>
      <!-- / Drag Drop Slot  -->
      <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100"><tr><td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1" height="50" alt=""></td></tr></table><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100"><tr><td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1" height="5" alt=""></td></tr></table><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100"><tr><td width="100%" align="center" valign="middle" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg" class="width-100" style="font-family:Arial,sans-serif;font-size:11px;line-height:17px;color:#fff;text-align:center;vertical-align:middle;padding-left:10px;padding-right:10px;padding-top:10px;padding-bottom:10px;border-top-left-radius:10px;border-top-right-radius:10px"><br><table role="presentation" width="500" align="center" cellpadding="0" cellspacing="0" border="0" class="width-60"><tr><td width="100%" align="center" valign="middle" class="width-100"><table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" class="width-100"><tr><td align="center" style="font-size:14px;text-align:center;font-weight:400;font-family:Arial,sans-serif;padding-bottom:10px;color:#fff">Türkiye’nin Trendyol’u</td></tr><tr><td align="center" style=""><table role="presentation" border="0" cellpadding="0" cellspacing="0" class="width-100"><tr><td align="center" valign="middle"><a href="http://www.facebook.com/Trendyol" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/new_TRX_mail/trendyol/facebook-white.png" style="display:block" alt="facebook" border="0" width="30" height="30"></a></td><td align="center" valign="middle"><a href="https://twitter.com/trendyol" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/new_TRX_mail/trendyol/twitter-white.png" style="display:block" alt="twitter" border="0" width="30" height="30"></a></td><td align="center" valign="middle"><a href="https://www.instagram.com/trendyolcom/" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/new_TRX_mail/trendyol/instagram-white.png" style="display:block" alt="instagram" border="0" width="30" height="30"></a></td><td align="center" valign="middle">&nbsp;</td><td align="center" valign="middle"><a href="https://www.youtube.com/trendyol" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/new_TRX_mail/trendyol/youTube-white.png" style="display:block" alt="youtube" border="0" width="30" height="30"></a></td></tr></table></td></tr><tr><td align="center" style=""><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1" height="20" alt=""></td></tr></table><table role="presentation" cellpadding="0" cellspacing="0" border="0" align="right" class="width-100"><tr><td align="center" style="font-size:14px;text-align:center;font-weight:400;font-family:Arial,sans-serif;padding-bottom:10px;color:#fff">Trendyol mobil uygulaması için</td></tr><tr><td align="center" style=""><table role="presentation" border="0" cellpadding="0" cellspacing="0" class="width-100"><tr><td align="center" valign="middle"><a href="http://itunes.apple.com/tr/app/trendyol.com/id524362642?mt=8" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/app-store-icon.png" style="display:block" alt="app store" border="0" width="95"></a></td><td align="center" valign="middle">&nbsp;</td><td align="center" valign="middle"><a href="https://play.google.com/store/apps/details?id=trendyol.com&feature=search_result#?t=W251bGwsMSwyLDEsInRyZW5keW9sLmNvbSJd" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/google-play-icon.png" style="display:block" alt="google play " border="0" width="95"></a></td></tr></table></td></tr><tr><td align="center" style=""><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1" height="20" alt=""></td></tr></table></td></tr></table>İletişim: DSM Grup Danışmanlık İletişim ve Satış Ticaret A.Ş. Maslak Mahallesi Büyükdere Caddesi (Spine Plaza) No: 243 İç Kapı No: 19 Sarıyer / İstanbul<a href="tel:902123313250" style="color:#fff!important;text-decoration:none!important">Tel No: +90 (212) 331 3250</a>Mersis No: 0313055766900016</td></tr></table>
      </td>
      </tr>
      </table>
      </td>
      </tr>
      <tr>
        <td>
          <img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" width="1" height="20" alt="" />
        </td>
      </tr>
      </table>
      </div>
      <!-- Outermost Table End -->
    </body>
    <custom name="opencounter" type="tracking" />
    
    </html>
    
    `;
  let message4 = `
    <!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"     xmlns:o="urn:schemas-microsoft-com:office:office" lang="tr" xml:lang="tr">
        <head>
            <title>Moda - Elektronik - Kozmetik - Ev &amp; Yaşam - Yemek &amp; Market - Dolap</title>
            <meta name="HandheldFriendly" content="true">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="x-apple-disable-message-reformatting">
            <meta name="format-detection" content="telephone=no">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!--[if (gte mso 9)|(IE)]>         <xml>             <o:OfficeDocumentSettings>                 <o:AllowPNG/>                 <o:PixelsPerInch>96</o:PixelsPerInch>             </o:OfficeDocumentSettings>         </xml>         <![endif]-->
            <style type="text/css">
                #outlook a {
                padding: 0
                }
                h1,
                h2,
                h3,
                h4,
                h5,
                h6,
                p {
                margin: 0;
                padding: 0;
                border: 0;
                outline: 0;
                font-weight: normal;
                font-size: 100%;
                font-family: inherit;
                vertical-align: baseline
                }
                body,
                table,
                td,
                th {
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%
                }
                table,
                td,
                th {
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt
                }
                td,
                th {
                margin: 0;
                padding: 0;
                font-weight: normal
                }
                img {
                border: 0;
                line-height: 100%;
                outline: none;
                text-decoration: none
                }
                body {
                height: 100% !important;
                margin: 0 auto !important;
                padding: 0 !important;
                width: 100% !important
                }
                .div-body {
                max-width: 100% !important;
                width: 100% !important;
                }
                a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important
                }
                table td {
                border-collapse: collapse;
                }
                table td {
                margin-left: auto !important;
                margin-right: auto !important;
                }
                .ExternalClass {
                width: 100%;
                }
                .ExternalClass,
                .ExternalClass p,
                .ExternalClass span,
                .ExternalClass font,
                .ExternalClass td,
                .ExternalClass div {
                line-height: 100%;
                }
                a {
                border: none;
                }
                a img {
                outline: none;
                text-decoration: none;
                -ms-interpolation-mode: bicubic;
                }
                html {
                -webkit-text-size-adjust: none !important;
                }
                a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: none !important;
                pointer-events: none !important;
                }
                .desktop-hide {
                display: none !important;
                visibility: hidden !important;
                }
                .desktop-show {
                display: block !important;
                visibility: visible !important;
                }
                .block {
                display: block !important;
                }
                .cta-btn-general {
                background-color:#ff6720;
                border-radius:6px;
                color:#ffffff;
                display:inline-block;
                font-family:sans-serif;
                font-size:16px;
                font-weight:bold;
                line-height:40px;
                text-align:center;
                text-decoration:none;
                width:200px;
                -webkit-text-size-adjust:none;
                }
                .cta-btn-general2 {
                background: url('https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg');
                background-color:#f26928;
                border-radius:6px 6px 0px 0px;
                padding: 4px 7px 4px 7px;
                color:#ffffff;
                display:inline-block;
                font-family: Arial, sans-serif;
                font-size:13px;
                line-height:14px;
                text-align:center;
                text-decoration:none;
                max-width:200px;
                -webkit-text-size-adjust:none;
                }
                .cta-btn-general-center {
                background: url('https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg');
                background-color:#f26928;
                border-radius:6px;
                color:#ffffff;
                display:block;
                margin: 0px auto;
                font-family: Arial, sans-serif;
                font-size:15px;
                line-height:17px;
                text-align:center;
                text-decoration:none;
                max-width:300px;
                -webkit-text-size-adjust:none;
                }
                @media only screen and (max-device-width: 480px) {
                u+.body .ios-centered {
                min-width: 100vw !important;
                margin: 0px auto !important;
                font-style: inherit !important;
                }
                .width-100 {
                width: 100% !important
                }
                .width-95 {
                width: 95% !important
                }
                .width-90 {
                width: 90% !important
                }
                .width-85 {
                width: 85% !important
                }
                .width-80 {
                width: 80% !important
                }
                .width-75 {
                width: 75% !important
                }
                .width-70 {
                width: 70% !important
                }
                .width-65 {
                width: 65% !important
                }
                .width-60 {
                width: 60% !important
                }
                .width-55 {
                width: 55% !important
                }
                .width-50 {
                width: 50% !important
                }
                .width-45 {
                width: 45% !important
                }
                .width-40 {
                width: 40% !important
                }
                .width-35 {
                width: 35% !important
                }
                .width-30 {
                width: 30% !important
                }
                .width-25 {
                width: 25% !important
                }
                .width-20 {
                width: 20% !important
                }
                .width-15 {
                width: 15% !important
                }
                .width-10 {
                width: 10% !important
                }
                .width-32 {
                width: 32% !important;
                }
                .width-33 {
                width: 33% !important
                }
                .width-34 {
                width: 34% !important
                }
                .widh-auto {
                width: auto !important
                }
                .height-auto {
                height: auto !important
                }
                .mobile-hide {
                display: none !important;
                visibility: hidden !important;
                }
                .mobile-show {
                display: block !important;
                visibility: visible !important;
                }
                .mobile-show-text {
                display: table-row !important;
                }
                .fs-13 {
                font-size: 13px !important;
                line-height: 18px !important
                }
                .fs-14 {
                font-size: 14px !important;
                line-height: 18px !important
                }
                .fs-16 {
                font-size: 16px !important;
                line-height: 24px !important
                }
                .fs-18 {
                font-size: 18px !important;
                line-height: 26px !important
                }
                .fs-20 {
                font-size: 20px !important;
                line-height: 28px !important
                }
                .fs-26 {
                font-size: 26px !important;
                line-height: 30px !important
                }
                .fs-28 {
                font-size: 28px !important;
                line-height: 32px !important
                }
                .mobileIMG {
                display: inline-block !important;
                }
                .pd-left-0 {
                padding-left:0px !important;  
                }
                .block1 {
                display: block !important;
                width: 100% !important
                }
                .width-100 {
                width: 100% !important
                }
                }
                /* buranın altına eğer style eklenirse sil. */
            </style>
            <title>Trendyol</title>
        </head>
        <body class="body"         style="-webkit-text-size-adjust: none; color: #423E3E; font-family: Arial, sans-serif; font-size: 16px; -ms-text-size-adjust: 100%; mso-margin-top-alt: 0px; mso-margin-bottom-alt: 0px; mso-padding-alt: 0; margin: 0; padding: 0; background-color: #ffffff !important; line-height: 1 !important;">
            <!-- Amp script start -->
            
            <!-- Amp script end -->
            <!-- Outermost Table Start -->
            <div id="div-body">
                <table role="presentation" width="100%" bgcolor="#f5f2f2" border="0" cellspacing="0" cellpadding="0" class="centerd-ios">
                    <tr>
                        <td align="center" valign="top">
                            <table role="presentation" align="center" bgcolor="#fdfdfd" cellpadding="0" cellspacing="0" border="0" style="width:650px" class="width-100">
                                <tr>
                                    <td align="center" valign="top" bgcolor="#fdfdfd" style="background-color:#ffffff;border-collapse: collapse;">
                                        <table role="presentation" align="center" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px" class="width-100">
                                            <tr>
                                                <td class="width-100" width="600" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg" align="center" valign="middle" bgcolor="#ff6720" style="display: block; padding-bottom: 6px; padding-top: 6px; border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
                                                    <!--[if gte mso 9]>                                                 <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:61px;">                                                     <v:fill type="tile" src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/logo-bg.png" color="#ff6720" />                                                     <v:textbox inset="0,0,0,0">                                                         <![endif]-->
                                                            <!--Trendyol Logo-->
                                                            <a href="https://click.email.trendyol.com/?qs=98bc2b5669cbc8e073d7734b51ac29441e075d5cbcc8c010d98f693d0279e1d601e50177ac3112b2b6507e37adc94b62a82a813fffd7451bda122c58d72b827b" target="_blank" style="text-decoration:none;border:none">
                                                            <img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/trendyol-logo.png" height="34.5" width="150" class="width-30 height-auto">
                                                            </a>
                                                </td>
                                                <!--[if gte mso 9]>                                             </v:textbox>                                             </v:rect>                                             <![endif]-->
                                            </tr>
                                        </table>
                                        <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
                                            <tr>
                                                <td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100" style=""><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" width="1" height="5" alt=""/></td>
                                            </tr>
                                        </table>
                                        <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
                                            <tr>
                                                <td width="32%" align="center" valign="middle" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-32" style="padding-bottom: 5px; padding-top: 5px; border-radius: 10px;">
                                                    <a href="https://click.email.trendyol.com/?qs=98bc2b5669cbc8e06b33e81378ba15940969e57167114f44c467270dac59ff261bb716babfddb588b44627dc2df7343113e15c76c03589fa03df918d795cfb2e" style="text-decoration: none !important; border: none !important;">
                                                        <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="32" align="center" valign="middle" style="padding-left: 15px">
                                                                        <img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/moda-icon.png" width="23" alt="elektronik"/>
                                                                    </td>
                                                                    <td class="fs-14" align="center" valign="middle" style="font-family: Arial,sans-serif; font-size: 15px; text-align: center; vertical-align: middle; font-weight: bold; color: #767676;">Moda</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </a>
                                                </td>
                                                <td width="1%" align="center" valign="middle" bgcolor="#ffffff">&nbsp;</td>
                                                <td width="33%" align="center" valign="middle" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-33" style="padding-bottom: 5px; padding-top: 5px; border-radius: 10px;">
                                                    <a href="https://click.email.trendyol.com/?qs=98bc2b5669cbc8e036dfa28023968674768b2844b19135f6f35ff74cb2abb8845beb7ff3aa8b095d924324e786470a1cb0ddc5216b390d05b98f4770860d561c" style="text-decoration: none !important; border: none !important;">
                                                        <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="32" align="center" valign="middle" style="padding-left: 15px">
                                                                        <img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/elektronik-icon.png" width="27" alt="elektronik"/>
                                                                    </td>
                                                                    <td class="fs-14" align="center" valign="middle" style="font-family: Arial,sans-serif; font-size: 15px; text-align: center; vertical-align: middle; font-weight: bold; color: #767676;">Elektronik</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </a>
                                                </td>
                                                <td width="1%" align="center" valign="middle" bgcolor="#ffffff">&nbsp;</td>
                                                <td width="32%" align="center" valign="middle" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-32" style="padding-bottom: 5px; padding-top: 5px; border-radius: 10px;">
                                                    <a href="https://click.email.trendyol.com/?qs=98bc2b5669cbc8e0d302851ed70eb1ef159ac5b33cf8a6339340bb7a8982a66cc31c1616ac9556bc54ba987062e8e2064b96b1da8a333d0303d7eb27c7022d04" style="text-decoration: none !important; border: none !important;">
                                                        <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="32" align="center" valign="middle" style="padding-left: 15px">
                                                                        <img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/kozmetik-icon.png" width="19" alt="elektronik"/>
                                                                    </td>
                                                                    <td class="fs-14" align="center" valign="middle" style="font-family: Arial,sans-serif; font-size: 15px; text-align: center; vertical-align: middle; font-weight: bold; color: #767676;">Kozmetik</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                        <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
                                            <tr>
                                                <td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" width="1" height="5" alt=""/></td>
                                            </tr>
                                        </table>
                                        <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
                                            <tr>
                                                <td width="32%" align="center" valign="middle" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-32" style="padding-bottom: 5px; padding-top: 5px; border-radius: 10px;">
                                                    <a href="https://click.email.trendyol.com/?qs=98bc2b5669cbc8e0b90c2a5f9db4afef25906ded6a726b73aebf7116520bb4f061e6b3d75d0abf39352415226e96ab85d2b04d136a9eadb29dfda32d81bdb15c" style="text-decoration: none !important; border: none !important;">
                                                        <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="32" align="center" valign="middle" style="padding-left: 11px"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/evyasam-icon.png" width="27" alt="elektronik"/></td>
                                                                    <td class="fs-14" align="center" valign="middle" style="font-family: Arial,sans-serif; font-size: 15px; text-align: center; vertical-align: middle; font-weight: bold; color: #767676; line-height: 15px !important;">Ev &amp; Yaşam</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </a>
                                                </td>
                                                <td width="1%" align="center" valign="middle" bgcolor="#ffffff">&nbsp;</td>
                                                <td width="33%" align="center" valign="middle" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-33" style="padding-bottom: 5px; padding-top: 5px; border-radius: 10px;">
                                                    <a href="https://click.email.trendyol.com/?qs=98bc2b5669cbc8e03c141ca941e6c94c3d44760a0c742777cc3e560f33f57a55d7f0d18694747fcf5f34c9684d4ba3dc8e4fa4271c74b3d1cfe7226c45004812" style="text-decoration: none !important; border: none !important;">
                                                        <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="32" align="center" valign="middle" style="padding-left: 15px"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/yemek-market-icon.png" width="27" alt="elektronik"/></td>
                                                                    <td class="fs-14" align="center" valign="middle" style="font-family: Arial,sans-serif; font-size: 15px; text-align: center; vertical-align: middle; font-weight: bold; color: #767676; line-height: 15px !important;">Yemek &amp; Market</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </a>
                                                </td>
                                                <td width="1%" align="center" valign="middle" bgcolor="#ffffff">&nbsp;</td>
                                                <td width="32%" align="center" valign="middle" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-32" style="padding-bottom: 5px; padding-top: 5px;border-radius: 10px;">
                                                    <a href="https://click.email.trendyol.com/?qs=98bc2b5669cbc8e09ac5d2444a44215fd4a62dd9ad0257ae8ab0046d412182ac43a4cae5b5b9972508471e5e15a7046e83bcacd41c911aeeecaa015330e4a614" style="text-decoration: none !important; border: none !important;">
                                                        <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="32" align="center" valign="middle" style="padding-left: 12px"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/dolap-icon.png" width="27" alt="elektronik"/></td>
                                                                    <td class="fs-14" align="center" valign="middle" style="font-family: Arial,sans-serif; font-size: 15px; text-align: center; vertical-align: middle; font-weight: bold; color: #767676;">Dolap</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                        <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
                                            <tr>
                                                <td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" width="1" height="25" alt=""/></td>
                                            </tr>
                                        </table>
                                        <!-- Drag Drop Slot -->
                                        <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
                                            <tr>
                                                <td style="padding: 0px 0px 0px 0px">
                                                    <table role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper" width="100%" cellspacing="0" cellpadding="0"><tr><td class="stylingblock-content-wrapper camarker-inner">                                    
    
    
    
                                        <!-- top text start -->
                                        <table role="presentation" class="width-100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                            <tr>
                                                <td class="width-100" style="text-align: left; vertical-align: middle; font-size: 16px; line-height: 20px; padding-left: 15px; padding-right: 15px;" width="100%" valign="middle" bgcolor="#FFFFFF" align="center">                             
                                                    
                                                    Merhaba,<br><br>
    
                                                    <strong>${siparisNumara}</strong> numaralı siparişini aldık.
                                                        
                                                        <ul>
                                                        <li>Siparişinin durumunu görüntülemek</li>
                                                        <li>Siparişinin iptalini gerçekleştirmek</li>
                                                        </ul>
                                                        ve daha birçok işlem için <a href="https://click.email.trendyol.com/?qs=98bc2b5669cbc8e00686bed127dbac99c5354f5a890a2a51465a23a573f3f945b8a6a43efbcd8ec50161b9624ea46002b4bfd1fde90647e92b28d5aa175f8495" target="_blank" title="siparis-takip" style="color:#000000; text-decoration:underline; font-weight:bold;">Hesabım &gt; Siparişlerim</a> sayfanı kullanabilirsin.
    
                                                        
                                                    
                                                </td>
                                            </tr>
                                        </table>
                                        <table role="presentation" class="width-100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                            <tr>
                                                <td class="width-100" width="100%" valign="middle" bgcolor="#FFFFFF" align="center"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" alt="" width="1" height="25"></td>
                                            </tr>
                                        </table>
                                        <!-- top text end -->
                                        <!-- OrderDetail start -->
                                        
                                        
                                        <table class="width-100" style="width:600px; margin: auto; background-color: #fcf6f2; max-width: 600px !important;" role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                            <tr>
                                                <td colspan="2" class="width-30" style="padding-left: 0px; padding-bottom: 10px; padding-top: 10px; max-width: 110px;" valign="bottom" bgcolor="#FFFFFF" align="left">
                                                    <table class="w-100" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                                                        
                                                            <tr>
                                                                <td valign="bottom" bgcolor="#FFFFFF" align="center">
                                                                    <table class="width-100" width="100%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                                        
                                                                            <tr>
                                                                                <td valign="middle" align="left">&nbsp;</td>
                                                                                <td style="font-family: Arial,sans-serif; font-size: 16px; text-align: left; color: #767676; font-weight: normal;" align="left"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" alt="" width="1" height="20"></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td width="63" valign="middle" align="left">
                                                                                    <img src="https://cdn.dsmcdn.com/assets/mailing/2018/sample/images/time-ret.png" alt="" width="60">
                                                                                </td>
                                                                                <td style="font-family: Arial,sans-serif; font-size: 16px; text-align: left; color: #767676; font-weight: normal;" align="left">
                                                                                    <span style="color: #f26928; font-weight: bold; line-height: 130%;">1. Teslimat:</span>
                                                                                </td>
                                                                            </tr>
                                                                            
                                                                            <tr>
                                                                                <td valign="middle" align="left">&nbsp;</td>
                                                                                <td style="font-family: Arial,sans-serif; font-size: 14px; text-align: left; color: #767676; font-weight: normal;" align="left">
                                                                                    <strong style="color: #000000;">Tahmini Kargoya Teslim Süresi:</strong> 1 gün içinde
                                                                                </td>
                                                                            </tr>
                                                                            
                                                                        
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        
                                                    </table>
                                                    <!--Satıcı tarafından gönderilecektir start-->
                                                    
                                                    <table class="w-100" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                                                        
                                                            <tr>
                                                                <td valign="bottom" bgcolor="#FFFFFF" align="center">
                                                                    <table class="width-100" width="100%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                                        
                                                                            <tr>
                                                                                <td width="63" valign="middle" align="left">&nbsp;
                                                                                    
                                                                                </td>
                                                                                <td style="font-family: Arial,sans-serif; font-size:12px; color:#a8a8a8; text-align:left; vertical-align:middle; line-height:100%;" align="left">
                                                                                    <span style="color: #767676; line-height: 130%;">Bu ürünler  Lolita Shop tarafından gönderilecektir.</span>
                                                                                </td>
                                                                            </tr>
                                                                            
                                                                        
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        
                                                    </table>
                                                    
                                                    <!--end Satıcı tarafından gönderilecektir-->
                                                </td>
                                            </tr>
                                            <!--Seller Takip Btn start-->
                                            <tr>
                                                <td colspan="2" style="max-width: 200px;" valign="middle" bgcolor="#FFFFFF" align="right">
                                                    <div class="cta-btn-general2">
                                                        <!--[if mso]>                                                     
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" class="cta-btn-general2"
     href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26MerchantId%3D129210%26Page%3DSellerStore%26Section%3D1%26utm_campaign%3DTY_TRX_Trendyol_OrderConfirm%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_OrderConfirm%26adjust_creative%3DTY_TRX_Trendyol_OrderConfirm%26adjust_tracker_limit%3D999999999%26utm_source%3Demail%26utm_medium%3Dfree%26adjust_deeplink%3Dty%253A%252F%252F%253FMerchantId%253D129210%2526Page%253DSellerStore%2526Section%253D1%2526adjust_t%253Dei1zb4_q4nmai%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_OrderConfirm%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_OrderConfirm%2526adjust_creative%253DTY_TRX_Trendyol_OrderConfirm%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fmagaza%252Fbuluttabul-m-129210%253Fadjust_t%253Dei1zb4_q4nmai%2526adjust_creative%253DTY_TRX_Trendyol_O
    rderConfirm%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_OrderConfirm%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_OrderConfirm" style="height:26px;v-text-anchor:middle;width:110px;" arcsize="16%" stroke="f" fillcolor="#f26928">                                                         <w:anchorlock/>                                                         <center>                                                             <![endif]-->
                                                                <a href="https://click.email.trendyol.com/?qs=98bc2b5669cbc8e0e13a552152d129b349c3df35401471c14bc408734ae9f764ebe9ae3f3a6b2d86747bc3345fbab3ca068d3edfff958d38f412a50846bf6ed7" style="font-family: Arial, sans-serif, Arial; max-width: 200px; padding: 4px 7px 4px 7px; background:url('https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg'); color: #ffffff !important;font-size: 13px; text-decoration: none; line-height: 14px; text-align: center; border-radius: 6px 6px 0px 0px;display: inline-block;">Satıcıyı Takip Et</a>
                                                                <!--[if mso]>                                                         </center>                                                     </v:roundrect>                                                     <![endif]-->
                                                    </div>
                                                </td>
                                            </tr>
                                            <!--end Seller Takip Btn-->
                                            
                                            
                                            <tr>
                                                <td class="width-30" style="padding-left: 10px; padding-bottom: 10px; padding-top: 10px; max-width: 110px !important; min-width: 110px !important;" width="120" valign="middle" align="center">
                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                        <tr>
                                                            <td width="110">
                                                                <a href="https://click.email.trendyol.com/?qs=98bc2b5669cbc8e07b577fbfdcb755b2741d50a54c7bc9e933a9375f19ff9aaf1b3a27623476d05e7cfcafa097219ee078af65a36c365c6f40ae46101f913e50" target="_blank" style="display: block !important; text-decoration: none !important;">
                                                                    <img src="https://cdn.dsmcdn.com/ty540/product/media/images/20220928/21/180977521/179895962/1/1_org_zoom.jpg" class="width-100" alt="" style="border: 1px solid #dbdbdb; display: block;" width="100" height="151">
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="width-70" valign="middle" align="left">
                                                    <table class="width-100" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                                                        <tr>
                                                            <td style="font-size: 14px; text-align: left; color: #595959; vertical-align: middle; padding-left: 10px; font-family: Arial, sans-serif; padding-bottom: 15px; padding-top: 15px; white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important;" valign="middle" align="center">
                                                                Vajina MUTLUVA334-5<br>
                                                                <span style="font-size: 12px; padding-top: 5px; display: block; white-space: nowrap !important; width: 80% !important; overflow: hidden !important; text-overflow: ellipsis !important;">Leten Et Dokusunda Realistik Kutulu Manken Vajinası Saklanabilir</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="font-size: 15px; text-align: left; color: #f26928; vertical-align: middle; padding-left: 10px; font-family: Arial, sans-serif;" valign="middle" nowrap="nowrap" align="left">
                                                                <table style="border-top: 1px solid #cdcdcd" class="width-95" width="95%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                                    <tr>
                                                                        <td style="max-width: 100%; padding-bottom: 5px;"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" alt="" width="1" height="5"></td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="font-size: 14px; text-align: left; color: #595959; vertical-align: middle; padding-left: 10px; font-family: Arial, sans-serif; padding-bottom: 10px;" valign="middle" nowrap="nowrap" align="center">Adet: 1</td>
                                                        </tr>
                                                        <tr>
                                                            <td style="font-size: 16px; text-align: left; color: #f26928; vertical-align: middle; padding-left: 10px; font-family: Arial, sans-serif; font-weight: bold; padding-bottom: 15px;" valign="middle" nowrap="nowrap" align="center">139 TRY</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            
                                        </table>
                                        
                                        <table class="width-100" style="width:600px; margin: auto; background-color: #fcf6f2; max-width: 600px !important;" role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                            <tr>
                                                <td colspan="2" class="width-30" style="padding-left: 0px; padding-bottom: 10px; padding-top: 10px; max-width: 110px;" valign="bottom" bgcolor="#FFFFFF" align="left">
                                                    <table class="w-100" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                                                        
                                                            <tr>
                                                                <td valign="bottom" bgcolor="#FFFFFF" align="center">
                                                                    <table class="width-100" width="100%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                                        
                                                                            <tr>
                                                                                <td valign="middle" align="left">&nbsp;</td>
                                                                                <td style="font-family: Arial,sans-serif; font-size: 16px; text-align: left; color: #767676; font-weight: normal;" align="left"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" alt="" width="1" height="20"></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td width="63" valign="middle" align="left">
                                                                                    <img src="https://cdn.dsmcdn.com/assets/mailing/2018/sample/images/time-ret.png" alt="" width="60">
                                                                                </td>
                                                                                <td style="font-family: Arial,sans-serif; font-size: 16px; text-align: left; color: #767676; font-weight: normal;" align="left">
                                                                                    <span style="color: #f26928; font-weight: bold; line-height: 130%;">2. Teslimat:</span>
                                                                                </td>
                                                                            </tr>
                                                                            
                                                                            <tr>
                                                                                <td valign="middle" align="left">&nbsp;</td>
                                                                                <td style="font-family: Arial,sans-serif; font-size: 14px; text-align: left; color: #767676; font-weight: normal;" align="left">
                                                                                    <strong style="color: #000000;">Tahmini Kargoya Teslim Süresi:</strong> 1 gün içinde
                                                                                </td>
                                                                            </tr>
                                                                            
                                                                        
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        
                                                    </table>
                                                    <!--Satıcı tarafından gönderilecektir start-->
                                                    
                                                    <table class="w-100" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                                                        
                                                            <tr>
                                                                <td valign="bottom" bgcolor="#FFFFFF" align="center">
                                                                    <table class="width-100" width="100%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                                        
                                                                            <tr>
                                                                                <td width="63" valign="middle" align="left">&nbsp;
                                                                                    
                                                                                </td>
                                                                                <td style="font-family: Arial,sans-serif; font-size:12px; color:#a8a8a8; text-align:left; vertical-align:middle; line-height:100%;" align="left">
                                                                                    <span style="color: #767676; line-height: 130%;">Bu ürünler  Eczacıbaşı Market  tarafından gönderilecektir.</span>
                                                                                </td>
                                                                            </tr>
                                                                            
                                                                        
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        
                                                    </table>
                                                    
                                                    <!--end Satıcı tarafından gönderilecektir-->
                                                </td>
                                            </tr>
                                            <!--Seller Takip Btn start-->
                                            <tr>
                                                <td colspan="2" style="max-width: 200px;" valign="middle" bgcolor="#FFFFFF" align="right">
                                                    <div class="cta-btn-general2">
                                                        <!--[if mso]>                                                     
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" class="cta-btn-general2"
     href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26MerchantId%3D519473%26Page%3DSellerStore%26Section%3D1%26utm_campaign%3DTY_TRX_Trendyol_OrderConfirm%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_OrderConfirm%26adjust_creative%3DTY_TRX_Trendyol_OrderConfirm%26adjust_tracker_limit%3D999999999%26utm_source%3Demail%26utm_medium%3Dfree%26adjust_deeplink%3Dty%253A%252F%252F%253FMerchantId%253D519473%2526Page%253DSellerStore%2526Section%253D1%2526adjust_t%253Dei1zb4_q4nmai%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_OrderConfirm%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_OrderConfirm%2526adjust_creative%253DTY_TRX_Trendyol_OrderConfirm%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fmagaza%252Fbuluttabul-m-519473%253Fadjust_t%253Dei1zb4_q4nmai%2526adjust_creative%253DTY_TRX_Trendyol_O
    rderConfirm%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_OrderConfirm%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_OrderConfirm" style="height:26px;v-text-anchor:middle;width:110px;" arcsize="16%" stroke="f" fillcolor="#f26928">                                                         <w:anchorlock/>                                                         <center>                                                             <![endif]-->
                                                                <a href="https://click.email.trendyol.com/?qs=98bc2b5669cbc8e076e4a4102a3cb92041410be069c0e6cf796f69669d67e349edd101191917c438ca857f5788594d6114ec4a61913e2499e2006ebee7c0eae6" style="font-family: Arial, sans-serif, Arial; max-width: 200px; padding: 4px 7px 4px 7px; background:url('https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg'); color: #ffffff !important;font-size: 13px; text-decoration: none; line-height: 14px; text-align: center; border-radius: 6px 6px 0px 0px;display: inline-block;">Satıcıyı Takip Et</a>
                                                                <!--[if mso]>                                                         </center>                                                     </v:roundrect>                                                     <![endif]-->
                                                    </div>
                                                </td>
                                            </tr>
                                            <!--end Seller Takip Btn-->
                                            
                                            
                                            <tr>
                                                <td class="width-30" style="padding-left: 10px; padding-bottom: 10px; padding-top: 10px; max-width: 110px !important; min-width: 110px !important;" width="120" valign="middle" align="center">
                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                        <tr>
                                                            <td width="110">
                                                                <a href="https://click.email.trendyol.com/?qs=98bc2b5669cbc8e0d42170fa867e4b9c2be3f2fa07362bf293f14e7b063d236e10771b15925432df7b19ec8b1202776fac989e879fe7621a493c5d27fdbbd71d" target="_blank" style="display: block !important; text-decoration: none !important;">
                                                                    <img src="https://cdn.dsmcdn.com/ty105/product/media/images/20210422/2/82007033/17926511/6/6_org_zoom.jpg" class="width-100" alt="" style="border: 1px solid #dbdbdb; display: block;" width="100" height="151">
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="width-70" valign="middle" align="left">
                                                    <table class="width-100" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                                                        <tr>
                                                            <td style="font-size: 14px; text-align: left; color: #595959; vertical-align: middle; padding-left: 10px; font-family: Arial, sans-serif; padding-bottom: 15px; padding-top: 15px; white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important;" valign="middle" align="center">
                                                                Okey Nirvana <br>
                                                                <span style="font-size: 12px; padding-top: 5px; display: block; white-space: nowrap !important; width: 80% !important; overflow: hidden !important; text-overflow: ellipsis !important;">40'lı  Prezervatif</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="font-size: 15px; text-align: left; color: #f26928; vertical-align: middle; padding-left: 10px; font-family: Arial, sans-serif;" valign="middle" nowrap="nowrap" align="left">
                                                                <table style="border-top: 1px solid #cdcdcd" class="width-95" width="95%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                                    <tr>
                                                                        <td style="max-width: 100%; padding-bottom: 5px;"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" alt="" width="1" height="5"></td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="font-size: 14px; text-align: left; color: #595959; vertical-align: middle; padding-left: 10px; font-family: Arial, sans-serif; padding-bottom: 10px;" valign="middle" nowrap="nowrap" align="center">Adet: 1</td>
                                                        </tr>
                                                        <tr>
                                                            <td style="font-size: 16px; text-align: left; color: #f26928; vertical-align: middle; padding-left: 10px; font-family: Arial, sans-serif; font-weight: bold; padding-bottom: 15px;" valign="middle" nowrap="nowrap" align="center">247.88 TRY</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            
                                        </table>
                                        
                                        
                                        <table role="presentation" class="width-100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                            <tr>
                                                <td class="width-100" width="100%" valign="middle" bgcolor="#FFFFFF" align="center"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" alt="" width="1" height="50"></td>
                                            </tr>
                                        </table>
                                        
                                        
                                        <!-- OrderDetail end -->
                                        <!-- Order Payment start -->
                                        <table class="width-100" style="width:600px; margin: auto; background-color: #fcf6f2;" role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                            <tr>
                                                <td class="width-30" style="padding-left: 0px; padding-bottom: 10px; padding-top: 10px; max-width: 110px;" width="600" valign="bottom" bgcolor="#FFFFFF" align="left">
                                                    <table class="w-100" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                                                        
                                                            <tr>
                                                                <td valign="bottom" bgcolor="#FFFFFF" align="center">
                                                                    <table class="width-100" width="100%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                                        
                                                                            <tr>
                                                                                <td width="63" valign="middle" align="left"><img src="https://cdn.dsmcdn.com/assets/mailing/2018/sample/images/spr-ozet-retr.png" alt="" width="60"></td>
                                                                                <td style="font-family: Arial,sans-serif; font-size: 16px; text-align: left; color: #767676; font-weight: normal;" align="left"><span style="color: #f26928; font-weight: bold; line-height: 130%;">Sipariş Özeti</span></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td valign="middle" align="left">&nbsp;</td>
                                                                                <td style="font-family: Arial,sans-serif; font-size: 14px; text-align: left; color: #767676; font-weight: normal;" align="left">
                                                                                    <table style="line-height: 18px!important;" width="90%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                                                        <tr>
                                                                                            <td>
                                                                                                
                                                                                                
                                                                                                <table style="line-height: 18px!important;" width="100%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                                                                    <tr>
                                                                                                        <td width="310" valign="middle">
                                                                                                            Ara Toplam
                                                                                                        </td>
                                                                                                        <td valign="middle" align="right">
                                                                                                            386,88 TRY
                                                                                                            
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                                
                                                                                                <table style="line-height: 18px!important;" width="100%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                                                                    <tr>
                                                                                                        <td width="310" valign="middle">
                                                                                                            Kargo
                                                                                                        </td>
                                                                                                        <td valign="middle" align="right">
                                                                                                            29.99 TRY
                                                                                                            
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                                
                                                                                                <table style="line-height: 18px!important;" width="100%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                                                                    <tr>
                                                                                                        <td width="310" valign="middle">
                                                                                                            75 TL ve Üzeri Kargo Bedava
                                                                                                        </td>
                                                                                                        <td valign="middle" align="right">
                                                                                                            <span style="color: #f26928;">-15.28 TRY</span>
                                                                                                            
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                                
                                                                                                <table style="line-height: 18px!important;" width="100%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                                                                    <tr>
                                                                                                        <td width="310" valign="middle">
                                                                                                            75 TL ve Üzeri Kargo Bedava
                                                                                                        </td>
                                                                                                        <td valign="middle" align="right">
                                                                                                            <span style="color: #f26928;">-4.71 TRY</span>
                                                                                                            
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                                
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td style="border-top:1px solid #93989c;">
                                                                                                <table style="line-height: 18px!important;" width="100%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                                                                    <tr>
                                                                                                        <td width="310" valign="middle">
                                                                                                            Toplam
                                                                                                        </td>
                                                                                                        <td valign="middle" align="right">
                                                                                                            <strong>386,88 TRY</strong>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!--BOŞLUK start-->
                                        <table role="presentation" class="width-100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                            <tr>
                                                <td class="width-100" width="100%" valign="middle" bgcolor="#FFFFFF" align="center"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" alt="" width="1" height="30"></td>
                                            </tr>
                                        </table>
                                        <!--end BOŞLUK-->
                                        <!--Teslimat Adresi start-->
                                        <table class="w-100" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                                            
                                                <tr>
                                                    <td valign="bottom" bgcolor="#FFFFFF" align="center">
                                                        <table class="width-100" width="100%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                            
                                                                <tr>
                                                                    <td width="63" valign="middle" align="left"><img src="https://cdn.dsmcdn.com/assets/mailing/2018/sample/images/maprr.gif" alt="" width="60"></td>
                                                                    <td style="font-family: Arial,sans-serif; font-size: 16px; text-align: left; color: #767676; font-weight: normal;" align="left">
                                                                        <span style="color: #f26928; font-weight: bold; line-height: 130%;">
                                                                            Teslimat Adresi:
                                                                            
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td valign="middle" align="left">&nbsp;</td>
                                                                    <td style="font-family: Arial,sans-serif; font-size: 14px; text-align: left; color: #767676; font-weight: normal;" align="left">
                                                                        <table style="font-size: 14px !important; line-height: 20px !important;" width="90%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                                            <tr>
                                                                                <td>
                                                                                    
                                                                                    
                                                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                                                        <tr>
                                                                                            <td id="teslimat-adresi">
                                                                                                <strong>${isim}</strong><br>
                                                                                                ${randomApartman}<br>${randomSehir}/${randomSehir}
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                    
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                        
                                                                    </td>
                                                                </tr>
                                                            
                                                        </table>
                                                    </td>
                                                </tr>
                                            
                                        </table>
                                        <!--end Teslimat Adresi-->
                                        <!--BOŞLUK start-->
                                        <table role="presentation" class="width-100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                            <tr>
                                                <td class="width-100" width="100%" valign="middle" bgcolor="#FFFFFF" align="center"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" alt="" width="1" height="30"></td>
                                            </tr>
                                        </table>
                                        <!--end BOŞLUK-->
                                        <!--Fatura Adresi start-->
                                        <table class="w-100" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                                            
                                                <tr>
                                                    <td valign="bottom" bgcolor="#FFFFFF" align="center">
                                                        <table class="width-100" width="100%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                            
                                                                <tr>
                                                                    <td width="63" valign="middle" align="left"><img src="https://cdn.dsmcdn.com/assets/mailing/2018/sample/images/maprr.gif" alt="" width="60"></td>
                                                                    <td style="font-family: Arial,sans-serif; font-size: 16px; text-align: left; color: #767676; font-weight: normal;" align="left">
                                                                        <span style="color: #f26928; font-weight: bold; line-height: 130%;">
                                                                            Fatura Adresi:
                                                                            
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td valign="middle" align="left">&nbsp;</td>
                                                                    <td style="font-family: Arial,sans-serif; font-size: 14px; text-align: left; color: #767676; font-weight: normal;" align="left">
                                                                        <table style="font-size: 14px !important; line-height: 20px !important;" width="90%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                                            <tr>
                                                                                <td>
                                                                                    
                                                                                              
                                                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                                                                                        <tr>
                                                                                            <td id="fatura-adresi">
                                                                                                <strong>${isim}</strong><br>
                                                                                                
                                                                                                ${randomApartman}<br>${randomSehir}/${randomSehir}
                                                                                            </td>
                                                                                        </tr>
                                                                                        
                                                                                    </table>
                                                                                    
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            
                                                        </table>
                                                    </td>
                                                </tr>
                                            
                                        </table>
                                        <!--end Fatura Adresi-->
                                        <!--BOŞLUK start-->
                                        <table role="presentation" class="width-100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                            <tr>
                                                <td class="width-100" width="100%" valign="middle" bgcolor="#FFFFFF" align="center"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" alt="" width="1" height="30"></td>
                                            </tr>
                                        </table>
                                        <!--end BOŞLUK-->
                                        <!--Sözleşme start-->
                                        <table role="presentation" class="width-70" width="250" cellspacing="0" cellpadding="0" border="0" align="center">
                                            <tr>
                                                <td class="width-70" width="50%" valign="middle" bgcolor="#FFFFFF" align="center">
                                                    <table style="border: 1px solid #767676; padding-bottom: 5px; padding-top: 5px; padding-left: 7px; padding-right: 7px;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                                        
                                                            <tr>
                                                                <td width="40" align="left"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/mssr.png" alt="" width="25"></td>
                                                                <td style="text-align: left; font-family: Arial, sans-serif; font-size: 12px; vertical-align: middle; font-weight: normal; line-height: 16px; color: #767676;">Ön bilgilendirme ve satış sözleşmesine <a href="https://click.email.trendyol.com/?qs=98bc2b5669cbc8e0294123965abf1944d504b37a44cf552aaf9a07523d2ccbe44caac11de6910df9e5b1ddc5be046f81d05976b7f4f062fc211c0259b7c4ab7b" style="text-decoration: underline !important; color:#767676 !important;">buradan</a> ulaşabilirsin</td>
                                                            </tr>
                                                        
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!--end Sözleşme-->
                                        <!--BOŞLUK start-->
                                        <table role="presentation" class="width-100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                            <tr>
                                                <td class="width-100" width="100%" valign="middle" bgcolor="#FFFFFF" align="center"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" alt="" width="1" height="30"></td>
                                            </tr>
                                        </table>
                                        <!--end BOŞLUK-->
    
    </td></tr></table>
    
                                                    
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- / Drag Drop Slot  -->
                                        <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
                                            <tr>
                                                <td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" width="1" height="50" alt=""/></td>
                                            </tr>
                                        </table>
                                        <!-- OTOMATE BANNER start (Data Extensions > System > Middle_Banner_Management )-->
                                        
                                        
                                        <!-- end OTOMATE BANNER -->
                                        
                                        <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
                                            <tr>
                                                <td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" width="1" height="5" alt=""/></td>
                                            </tr>
                                        </table>
                                        <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
                                            <tr>
                                                <td width="100%" align="center" valign="middle" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg" class="width-100" style="font-family: Arial, sans-serif; font-size: 11px; line-height: 17px; color: #ffffff; text-align: center; vertical-align: middle; padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px;"><br>
                                                    <table role="presentation" width="500" align="center" cellpadding="0" cellspacing="0" border="0" class="width-60">
                                                        <tr>
                                                            <td width="100%" align="center" valign="middle" class="width-100">
                                                                <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" class="width-100">
                                                                    <tr>
                                                                        <td align="center" style="font-size: 14px; text-align: center; font-weight: normal; font-family: Arial,sans-serif; padding-bottom: 10px; color: #FFFFFF">Türkiye’nin Trendyol’u</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td align="center" style="">
                                                                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="width-100">
                                                                                <tr>
                                                                                    <td align="center" valign="middle"><a href="https://click.email.trendyol.com/?qs=98bc2b5669cbc8e071c95f4770b0a67cedd01420915178a8cf5c2d26eca39880570f7e4573080dd9e69b76dfa3987be63267366fc5b431f31643b999a77d3102" target="_blank" style="display: block; text-decoration: none;"> <img src="https://cdn.dsmcdn.com/mrktng/crm/new_TRX_mail/trendyol/facebook-white.png" style="display: block;" alt="facebook" border="0" width="30" height="30"> </a></td>
                                                                                    <td align="center" valign="middle"><a href="https://click.email.trendyol.com/?qs=98bc2b5669cbc8e0afd7e18c98776c3f2262019342810903d463ea5619c081c510186de7af19bc8e376b4bc5f14d2218aeff06c9073740557f1b3fe96b55de5f" target="_blank" style="display: block; text-decoration: none;"> <img src="https://cdn.dsmcdn.com/mrktng/crm/new_TRX_mail/trendyol/twitter-white.png" style="display: block;" alt="twitter" border="0" width="30" height="30"> </a></td>
                                                                                    
                                                                                    <td align="center" valign="middle"><a href="https://click.email.trendyol.com/?qs=98bc2b5669cbc8e0c33ed9589af092ec4556d94cafd27a9ff9b25b73d81182e7d91f918408f9bf28d2dc8d94d28e59014b41a9a8ef8b2c464db281f1b9663eb6" target="_blank" style="display: block; text-decoration: none;"> <img src="https://cdn.dsmcdn.com/mrktng/crm/new_TRX_mail/trendyol/instagram-white.png" style="display: block;" alt="instagram" border="0" width="30" height="30"> </a></td>
                                                                                    <td align="center" valign="middle">&nbsp;</td>
                                                                                    <td align="center" valign="middle"><a href="https://click.email.trendyol.com/?qs=98bc2b5669cbc8e026b0152e42b755658356e8ad446f8025fb510d5fb5fb28d85030f3d3c3e252fa9677f0a6668e6953c8da9f48dbcf5b8800a5aaefeb476320" target="_blank" style="display: block; text-decoration: none;"> <img src="https://cdn.dsmcdn.com/mrktng/crm/new_TRX_mail/trendyol/youTube-white.png" style="display: block;" alt="youtube" border="0" width="30" height="30"> </a></td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td align="center" style=""><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" width="1" height="20" alt=""/></td>
                                                                    </tr>
                                                                </table>
                                                                <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="right" class="width-100">
                                                                    <tr>
                                                                        <td align="center" style="font-size: 14px; text-align: center; font-weight: normal; font-family: Arial,sans-serif; padding-bottom: 10px; color: #FFFFFF">Trendyol mobil uygulaması için</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td align="center" style="">
                                                                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="width-100">
                                                                                <tr>
                                                                                    <td align="center" valign="middle"><a href="https://click.email.trendyol.com/?qs=98bc2b5669cbc8e06a37ac3d6beda9f7b6da44f16fc83d8feeb7a828f4d386995c72f8baa96f4b753639bdc307d7763515f5c353973932e4a076117c46375497" target="_blank" style="display: block; text-decoration: none;"> <img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/app-store-icon.png" style="display: block;" alt="app store" border="0" width="95"></a></td>
                                                                                    <td align="center" valign="middle">&nbsp;</td>
                                                                                    <td align="center" valign="middle"><a href="https://click.email.trendyol.com/?qs=98bc2b5669cbc8e0a15a8b1187921a3f1c4d53751cbe45d5506d8fe7c940d4f93e8276243ee18242b9a42f113fb4a8b9590dc0048a3b6e3187e5293ccf446a6e" target="_blank" style="display: block; text-decoration: none;"> <img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/google-play-icon.png" style="display: block;" alt="google play " border="0" width="95"></a></td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td align="center" style=""><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" width="1" height="20" alt=""/></td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    
                                                    İletişim: DSM Grup Danışmanlık İletişim ve Satış Ticaret A.Ş. 
                                                    Maslak Mahallesi Büyükdere Caddesi (Spine Plaza) No: 243 İç Kapı No: 19 Sarıyer / İstanbul
                                                    <a href="tel:902123313250" style="color: #FFFFFF !important; text-decoration: none !important;">Tel No: +90 (212) 331 3250</a> Mersis No: 0313055766900016
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" width="1" height="20" alt=""/></td>
                    </tr>
                </table>
            </div>
            <!-- Outermost Table End -->
        </body>
        <img src="https://click.email.trendyol.com/open.aspx?ffcb10-fec017767c600078-fe2315757c670578701d76-fe3e157075640479711074-ff9d1670-fe2212737c620475711273-fece167173600479&d=100180&bmt=0" width="1" height="1" alt="">

    </html>`;
  let message5 = `<!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="tr" xml:lang="tr">
      <head>
        <meta name="HandheldFriendly" content="true"><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="x-apple-disable-message-reformatting"><meta name="format-detection" content="telephone=no"><meta name="viewport" content="width=device-width,initial-scale=1"><!--[if (gte mso 9)|(IE)]><xml><o:officedocumentsettings><o:allowpng><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings></xml><![endif]--><style type="text/css">#outlook a{padding:0}h1,h2,h3,h4,h5,h6,p{margin:0;padding:0;border:0;outline:0;font-weight:400;font-size:100%;font-family:inherit;vertical-align:baseline}body,table,td,th{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td,th{mso-table-lspace:0;mso-table-rspace:0}td,th{margin:0;padding:0;font-weight:400}img{border:0;line-height:100%;outline:0;text-decoration:none}body{height:100%!important;margin:0 auto!important;padding:0!important;width:100%!important}.div-body{max-width:100%!important;width:100%!important}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;font-size:inherit!important;font-family:inherit!important;font-weight:inherit!important;line-height:inherit!important}table td{border-collapse:collapse}table td{margin-left:auto!important;margin-right:auto!important}.ExternalClass{width:100%}.ExternalClass,.ExternalClass div,.ExternalClass font,.ExternalClass p,.ExternalClass span,.ExternalClass td{line-height:100%}a{border:none}a img{outline:0;text-decoration:none;-ms-interpolation-mode:bicubic}html{-webkit-text-size-adjust:none!important}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;pointer-events:none!important}.desktop-hide{display:none!important;visibility:hidden!important}.desktop-show{display:block!important;visibility:visible!important}.block{display:block!important}.cta-btn-general{background-color:#ff6720;border-radius:6px;color:#fff;display:inline-block;font-family:sans-serif;font-size:16px;font-weight:700;line-height:40px;text-align:center;text-decoration:none;width:200px;-webkit-text-size-adjust:none}.cta-btn-general2{background:url(https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg);background-color:#f26928;border-radius:6px 6px 0 0;padding:4px 7px 4px 7px;color:#fff;display:inline-block;font-family:Arial,sans-serif;font-size:13px;line-height:14px;text-align:center;text-decoration:none;max-width:200px;-webkit-text-size-adjust:none}.cta-btn-general-center{background:url(https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg);background-color:#f26928;border-radius:6px;color:#fff;display:block;margin:0 auto;font-family:Arial,sans-serif;font-size:15px;line-height:17px;text-align:center;text-decoration:none;max-width:300px;-webkit-text-size-adjust:none}@media only screen and (max-device-width:480px){u+.body .ios-centered{min-width:100vw!important;margin:0 auto!important;font-style:inherit!important}.width-100{width:100%!important}.width-95{width:95%!important}.width-90{width:90%!important}.width-85{width:85%!important}.width-80{width:80%!important}.width-75{width:75%!important}.width-70{width:70%!important}.width-65{width:65%!important}.width-60{width:60%!important}.width-55{width:55%!important}.width-50{width:50%!important}.width-45{width:45%!important}.width-40{width:40%!important}.width-35{width:35%!important}.width-30{width:30%!important}.width-25{width:25%!important}.width-20{width:20%!important}.width-15{width:15%!important}.width-10{width:10%!important}.width-32{width:32%!important}.width-33{width:33%!important}.width-34{width:34%!important}.widh-auto{width:auto!important}.height-auto{height:auto!important}.mobile-hide{display:none!important;visibility:hidden!important}.mobile-show{display:block!important;visibility:visible!important}.mobile-show-text{display:table-row!important}.fs-13{font-size:13px!important;line-height:18px!important}.fs-14{font-size:14px!important;line-height:18px!important}.fs-16{font-size:16px!important;line-height:24px!important}.fs-18{font-size:18px!important;line-height:26px!important}.fs-20{font-size:20px!important;line-height:28px!important}.fs-26{font-size:26px!important;line-height:30px!important}.fs-28{font-size:28px!important;line-height:32px!important}.mobileIMG{display:inline-block!important}.pd-left-0{padding-left:0!important}.block1{display:block!important;width:100%!important}.width-100{width:100%!important}}</style><title>Trendyol</title>
      <style type="text/css">
    
        h4 
        {
            text-align: left;
        }
    
    @media screen 
    {
    
      .headerLineTitle
      {
        width:1.5in;
        display:inline-block;
        margin:0in;
        margin-bottom:.0001pt;
        font-size:11.0pt;
        font-family:"Calibri","sans-serif";
        font-weight:bold;
      }
    
      .headerLineText
      {
        display:inline;
        margin:0in;
        margin-bottom:.0001pt;
        font-size:11.0pt;
        font-family:"Calibri","sans-serif";
        font-weight:normal;
      }
    
       .pageHeader
       {
        font-size:14.0pt;
        font-family:"Calibri","sans-serif";
        font-weight:bold;
        visibility:hidden;
        display:none;
       }   
    }
    
    @media print 
    {
      .headerLineTitle
      {
        width:1.5in;
        display:inline-block;
        margin:0in;
        margin-bottom:.0001pt;
        font-size:11.0pt;
        font-family:"Calibri","sans-serif";
        font-weight:bold;
      }
    
      .headerLineText
      {
        display:inline;
        margin:0in;
        margin-bottom:.0001pt;
        font-size:11.0pt;
        font-family:"Calibri","sans-serif";
        font-weight:normal;
      }
    
       .pageHeader
       {
        font-size:14.0pt;
        font-family:"Calibri","sans-serif";
        font-weight:bold;
        visibility:visible;
        display:block;
       }
    
    }
    </style>
    </head>
      <body class="body" style="-webkit-text-size-adjust: none; color: #423E3E; font-family: Arial, sans-serif; font-size: 16px; -ms-text-size-adjust: 100%; mso-margin-top-alt: 0px; mso-margin-bottom-alt: 0px; mso-padding-alt: 0; margin: 0; padding: 0; background-color: #ffffff !important; line-height: 1 !important;">
        <!-- Outermost Table Start -->
        <div id="div-body">
          <table role="presentation" width="100%" bgcolor="#f5f2f2" border="0" cellspacing="0" cellpadding="0" class="centerd-ios">
            <tr>
              <td align="center" valign="top">
                <table role="presentation" align="center" bgcolor="#fdfdfd" cellpadding="0" cellspacing="0" border="0" style="width:650px" class="width-100">
                  <tr>
                    <td align="center" valign="top" bgcolor="#fdfdfd" style="background-color:#ffffff;border-collapse: collapse;">
                      <span class="preheader"
        style="color:#fff;background-color:#fff;display:none!important;font-size:1px;line-height:1px;max-height:0;max-width:0;mso-hide:all!important;opacity:0;overflow:hidden;visibility:hidden"></span>
    <table role="presentation" align="center" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px"
        class="width-100">
        <tr>
            <td class="width-100" width="600" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg"
                align="center" valign="middle" bgcolor="#ff6720"
                style="display:block;padding-bottom:6px;padding-top:6px;border-bottom-left-radius:10px;border-bottom-right-radius:10px">
                <!--[if gte mso 9]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:61px"><v:fill type="tile" src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/logo-bg.png" color="#ff6720"><v:textbox inset="0,0,0,0"><![endif]--><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DHome%26adjust_tracker_limit%3D999999999%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DHome%2526adjust_t%253Dei1zb4_q4nmai%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252F%253Fadjust_t%253Dei1zb4_q4nmai%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail"
                    target="_blank" style="text-decoration:none;border:none"><img
                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/trendyol-logo.png"
                        height="34.5" width="150" class="width-30 height-auto"></a>
            </td>
            <!--[if gte mso 9]><![endif]-->
        </tr>
    </table>
    <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
        <tr>
            <td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100" style=""><img
                    src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1"
                    height="5"></td>
        </tr>
    </table>
    <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
        <tr>
            <td width="32%" align="center" valign="middle"
                background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-32"
                style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DHome%26adjust_tracker_limit%3D999999999%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DHome%2526adjust_t%253Dei1zb4_q4nmai%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252F%253Fadjust_t%253Dei1zb4_q4nmai%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail"
                    style="text-decoration:none!important;border:none!important">
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td width="32" align="center" valign="middle" style="padding-left:15px"><img
                                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/moda-icon.png" width="23"></td>
                                <td class="fs-14" align="center" valign="middle"
                                    style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676">
                                    Moda</td>
                            </tr>
                        </tbody>
                    </table>
                </a></td>
            <td width="1%" align="center" valign="middle" bgcolor="#ffffff">&nbsp;</td>
            <td width="33%" align="center" valign="middle"
                background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-33"
                style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DHome%26SectionId%3D5%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26adjust_tracker_limit%3D999999999%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DHome%2526SectionId%253D5%2526adjust_t%253Dei1zb4_q4nmai%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fbutik%252Fliste%252F5%252Felektronik%253Fadjust_t%253Dei1zb4_q4nmai%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword"
                    style="text-decoration:none!important;border:none!important">
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td width="32" align="center" valign="middle" style="padding-left:15px"><img
                                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/elektronik-icon.png"
                                        width="27"></td>
                                <td class="fs-14" align="center" valign="middle"
                                    style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676">
                                    Elektronik</td>
                            </tr>
                        </tbody>
                    </table>
                </a></td>
            <td width="1%" align="center" valign="middle" bgcolor="#ffffff">&nbsp;</td>
            <td width="32%" align="center" valign="middle"
                background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-32"
                style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DHome%26SectionId%3D11%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26adjust_tracker_limit%3D999999999%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DHome%2526SectionId%253D11%2526adjust_t%253Dei1zb4_q4nmai%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fbutik%252Fliste%252F11%252Fkozmetik%253Fadjust_t%253Dei1zb4_q4nmai%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword"
                    style="text-decoration:none!important;border:none!important">
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td width="32" align="center" valign="middle" style="padding-left:15px"><img
                                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/kozmetik-icon.png"
                                        width="19"></td>
                                <td class="fs-14" align="center" valign="middle"
                                    style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676">
                                    Kozmetik</td>
                            </tr>
                        </tbody>
                    </table>
                </a></td>
        </tr>
    </table>
    <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
        <tr>
            <td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100"><img
                    src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1"
                    height="5"></td>
        </tr>
    </table>
    <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
        <tr>
            <td width="32%" align="center" valign="middle"
                background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-32"
                style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DHome%26SectionId%3D12%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26adjust_tracker_limit%3D999999999%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DHome%2526SectionId%253D12%2526adjust_t%253Dei1zb4_q4nmai%2526adjust_tracker_limit%253D999999999%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fbutik%252Fliste%252F12%252Fev--mobilya%253Fadjust_t%253Dei1zb4_q4nmai%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526adjust_tracker_limit%253D999999999"
                    style="text-decoration:none!important;border:none!important">
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td width="32" align="center" valign="middle" style="padding-left:11px"><img
                                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/evyasam-icon.png"
                                        width="27"></td>
                                <td class="fs-14" align="center" valign="middle"
                                    style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676;line-height:15px!important">
                                    Ev &amp; Yaşam</td>
                            </tr>
                        </tbody>
                    </table>
                </a></td>
            <td width="1%" align="center" valign="middle" bgcolor="#ffffff">&nbsp;</td>
            <td width="33%" align="center" valign="middle"
                background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-33"
                style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Page%3DCategoryMenu%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_deeplink%3Dty%253A%252F%252F%253FPage%253DCategoryMenu%2526adjust_t%253Dei1zb4_q4nmai%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fs%252Ftrendyol-yemek%253Fadjust_t%253Dei1zb4_q4nmai%2526utm_source%253Demail%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword"
                    style="text-decoration:none!important;border:none!important">
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td width="32" align="center" valign="middle" style="padding-left:15px"><img
                                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/yemek-market-icon.png"
                                        width="27"></td>
                                <td class="fs-14" align="center" valign="middle"
                                    style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676;line-height:15px!important">
                                    Yemek &amp; Market</td>
                            </tr>
                        </tbody>
                    </table>
                </a></td>
            <td width="1%" align="center" valign="middle" bgcolor="#ffffff">&nbsp;</td>
            <td width="32%" align="center" valign="middle"
                background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/50gri-15op.png" class="width-32"
                style="padding-bottom:5px;padding-top:5px;border-radius:10px"><a
                    href="https://app.adjust.com/jsr?url=https%3A%2F%2Fp8zh.adj.st%2Fei1zb4_q4nmai%3Fadjust_t%3Dei1zb4_q4nmai%26Channel%3DDolapLite%26utm_source%3Demail%26utm_medium%3Dfree%26utm_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_adgroup%3Dall%26adjust_campaign%3DTY_TRX_Trendyol_ResetPassword%26adjust_creative%3DTY_TRX_Trendyol_ResetPassword%26adjust_deeplink%3Dty%253A%252F%252F%253FChannel%253DDolapLite%2526adjust_t%253Dei1zb4_q4nmai%2526utm_medium%253Dfree%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526utm_source%253Demail%26adjust_redirect%3Dhttps%253A%252F%252Fwww.trendyol.com%252Fs%252Fdolap-com%253Fadjust_t%253Dei1zb4_q4nmai%2526utm_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_adgroup%253Dall%2526adjust_campaign%253DTY_TRX_Trendyol_ResetPassword%2526adjust_creative%253DTY_TRX_Trendyol_ResetPassword%2526utm_source%253Demail%2526utm_medium%253Dfree"
                    style="text-decoration:none!important;border:none!important">
                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td width="32" align="center" valign="middle" style="padding-left:12px"><img
                                        src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/dolap-icon.png" width="27"></td>
                                <td class="fs-14" align="center" valign="middle"
                                    style="font-family:Arial,sans-serif;font-size:15px;text-align:center;vertical-align:middle;font-weight:700;color:#767676">
                                    Dolap</td>
                            </tr>
                        </tbody>
                    </table>
                </a></td>
        </tr>
    </table>
    <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
        <tr>
            <td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100"><img
                    src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1"
                    height="25"></td>
        </tr>
    </table>
                      <!-- Drag Drop Slot -->
                      <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100">
                        <tr>
                          <td style="padding: 0px 0px 0px 0px">
                            <div data-type="slot" data-key="s19woatqgy" data-label="Content Block #2">
                              <br>
                              <br>
                              <table role="presentation" class="width-100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tr>
                                  <td class="width-100" style="text-align: left; vertical-align: middle; font-size: 16px; line-height: 20px; padding-left: 15px; padding-right: 15px;" width="100%" valign="middle" bgcolor="#FFFFFF" align="center"> Merhaba ${isim}, <br>
                                    <br> Trendyol hesabının e-posta adresini güncellemek için aşağıdeki "E-POSTAMI GÜNCELLE" butonuna bas
                                  </td>
                                </tr>
                              </table>
                              <br>
                              <br>
                              <table role="presentation" class="width-100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tr>
                                  <td class="width-100" width="100%" valign="middle" bgcolor="#FFFFFF" align="center">
                                    <div class="cta-btn-general-center">
                                      <!--[if mso]>
                                              <v:roundrect
                                                xmlns:v="urn:schemas-microsoft-com:vml"
                                                xmlns:w="urn:schemas-microsoft-com:office:word" class="cta-btn-general2" href="https://www.trendyol.com/sifremiunuttum?uId&#x3D;113338896&amp;secCode&#x3D;n6wCwvuYaMi4J5p&amp;popupGroup&#x3D;Login&amp;loginPopup&#x3D;ResetPassword" style="height:40px;v-text-anchor:middle;width:300px;" arcsize="15%" stroke="f" fill="t">
                                                <v:fill type="tile" src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg" color="#f26928" />
                                                <w:anchorlock/>
                                                <center style="color:#ffffff;font-family:sans-serif;font-size:13px;font-weight:bold;">ŞİFREMİ GÜNCELLE ></center>
                                              </v:roundrect>
                                              <![endif]-->
                                      <a href="https://www.trendyol.com/epostaguncelle?uId&#x3D;113338896&amp;secCode&#x3D;n6wCwvuYaMi4J5p&amp;popupGroup&#x3D;Login&amp;loginPopup&#x3D;ResetPassword" style="background-color:#f26928;background-image:url(https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg);border-radius:6px;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:13px;font-weight:bold;line-height:40px;text-align:center;text-decoration:none;width:300px;-webkit-text-size-adjust:none;mso-hide:all;">E-POSTAMI GÜNCELLE</a>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <br>
                              <br>
                              <table role="presentation" class="width-100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tr>
                                  <td class="width-100" style="text-align: left; vertical-align: middle; font-size: 16px; line-height: 20px; padding-left: 15px; padding-right: 15px;" width="100%" valign="middle" bgcolor="#FFFFFF" align="center"> Yukarıdaki link ile bağlantı sağlayamıyorsan, linki kopyalayıp tarayıcının adres çubuğuna yapıştırarak linke gidebilirsin. <br>
                                    <a href="https://www.trendyol.com/epostaguncelle?uId&#x3D;113338896&amp;secCode&#x3D;n6wCwvuYaMi4J5p&amp;popupGroup&#x3D;Login&amp;loginPopup&#x3D;ResetPassword" target="_blank" title="sifre-sifirlama" style="color:#000000; text-decoration:underline; font-size:14px !important;">
                                      <br>https://www.trendyol.com/epostaguncelle?uId&#x3D;113338896&amp;secCode&#x3D;n6wCwvuYaMi4J5p&amp;popupGroup&#x3D;Login&amp;loginPopup&#x3D;ResetPassword
                                    </a>
                                  </td>
                                </tr>
                              </table>
                              <table role="presentation" class="width-100" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tr>
                                  <td class="width-100" width="100%" valign="middle" bgcolor="#FFFFFF" align="center">
                                    <img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" alt="" width="1" height="25">
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </table>
                      <!-- / Drag Drop Slot  -->
                      <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100"><tr><td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1" height="50" alt=""></td></tr></table><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100"><tr><td width="100%" align="center" valign="middle" bgcolor="#FFFFFF" class="width-100"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1" height="5" alt=""></td></tr></table><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="width-100"><tr><td width="100%" align="center" valign="middle" background="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/orangebg.jpg" class="width-100" style="font-family:Arial,sans-serif;font-size:11px;line-height:17px;color:#fff;text-align:center;vertical-align:middle;padding-left:10px;padding-right:10px;padding-top:10px;padding-bottom:10px;border-top-left-radius:10px;border-top-right-radius:10px"><br><table role="presentation" width="500" align="center" cellpadding="0" cellspacing="0" border="0" class="width-60"><tr><td width="100%" align="center" valign="middle" class="width-100"><table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" class="width-100"><tr><td align="center" style="font-size:14px;text-align:center;font-weight:400;font-family:Arial,sans-serif;padding-bottom:10px;color:#fff">Türkiye’nin Trendyol’u</td></tr><tr><td align="center" style=""><table role="presentation" border="0" cellpadding="0" cellspacing="0" class="width-100"><tr><td align="center" valign="middle"><a href="http://www.facebook.com/Trendyol" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/new_TRX_mail/trendyol/facebook-white.png" style="display:block" alt="facebook" border="0" width="30" height="30"></a></td><td align="center" valign="middle"><a href="https://twitter.com/trendyol" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/new_TRX_mail/trendyol/twitter-white.png" style="display:block" alt="twitter" border="0" width="30" height="30"></a></td><td align="center" valign="middle"><a href="https://www.instagram.com/trendyolcom/" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/new_TRX_mail/trendyol/instagram-white.png" style="display:block" alt="instagram" border="0" width="30" height="30"></a></td><td align="center" valign="middle">&nbsp;</td><td align="center" valign="middle"><a href="https://www.youtube.com/trendyol" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/new_TRX_mail/trendyol/youTube-white.png" style="display:block" alt="youtube" border="0" width="30" height="30"></a></td></tr></table></td></tr><tr><td align="center" style=""><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1" height="20" alt=""></td></tr></table><table role="presentation" cellpadding="0" cellspacing="0" border="0" align="right" class="width-100"><tr><td align="center" style="font-size:14px;text-align:center;font-weight:400;font-family:Arial,sans-serif;padding-bottom:10px;color:#fff">Trendyol mobil uygulaması için</td></tr><tr><td align="center" style=""><table role="presentation" border="0" cellpadding="0" cellspacing="0" class="width-100"><tr><td align="center" valign="middle"><a href="http://itunes.apple.com/tr/app/trendyol.com/id524362642?mt=8" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/app-store-icon.png" style="display:block" alt="app store" border="0" width="95"></a></td><td align="center" valign="middle">&nbsp;</td><td align="center" valign="middle"><a href="https://play.google.com/store/apps/details?id=trendyol.com&feature=search_result#?t=W251bGwsMSwyLDEsInRyZW5keW9sLmNvbSJd" target="_blank"><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/google-play-icon.png" style="display:block" alt="google play " border="0" width="95"></a></td></tr></table></td></tr><tr><td align="center" style=""><img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display:block" width="1" height="20" alt=""></td></tr></table></td></tr></table>İletişim: DSM Grup Danışmanlık İletişim ve Satış Ticaret A.Ş. Maslak Mahallesi Büyükdere Caddesi (Spine Plaza) No: 243 İç Kapı No: 19 Sarıyer / İstanbul<a href="tel:902123313250" style="color:#fff!important;text-decoration:none!important">Tel No: +90 (212) 331 3250</a>Mersis No: 0313055766900016</td></tr></table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://cdn.dsmcdn.com/mrktng/crm/2022/mails/Sep/11/space.gif" style="display: block;" width="1" height="20" alt="" />
              </td>
            </tr>
          </table>
        </div>
        <!-- Outermost Table End -->
      </body>
      <custom name="opencounter" type="tracking" />
    </html>
    
    `;

  let transporter = nodemailer.createTransport({
    host: "mail.",
    port: 465,
    secure: true,
    auth: {
      user: "trendyol@",
      pass: "",
    },
  });

  let mailOptions = {
    from: "trendyol@",
    to: `${email}`,
    subject: "Trendyol hesabınız: şifre yenileme",
    //text: text,
    html: message1,
  };
  let mailOptions1 = {
    from: "trendyol@",
    to: `${email}`,
    subject: "Trendyol hesabınız: Yeni tarayıcıdan veya mobil cihazdan erişim",
    //text: text,
    html: message2,
  };
  let mailOptions2 = {
    from: "trendyol@",
    to: `${email}`,
    subject: "Steam oturum açma bilgileri değişikliği",
    //text: text,
    html: message3,
  };
  let mailOptions3 = {
    from: "trendyol@",
    to: `${email}`,
    subject: "Siparini aldık ✅",
    //text: text,
    html: message4,
  };
  let mailOptions4 = {
    from: "trendyol@",
    to: `${email}`,
    subject: "E-posta adres değişikliği",
    //text: text,
    html: message5,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("send" + info.response);
      setTimeout(mySecondMsg, 60000);
    }
  });

  function mySecondMsg() {
    transporter.sendMail(mailOptions1, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("send" + info.response);
        setTimeout(sendMsg1, 60000);
      }
    });
  }

  function sendMsg1() {
    transporter.sendMail(mailOptions2, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("send" + info.response);
        setTimeout(sendMsg2, 60000);
      }
    });
  }

  function sendMsg2() {
    transporter.sendMail(mailOptions3, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("send" + info.response);
        setTimeout(sendMsg3, 60000);
      }
      //res.redirect('/')// bu ifadeyi burada kullanabilirsiniz
    });
  }
  function sendMsg3() {
    transporter.sendMail(mailOptions4, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("send" + info.response);
      }
      res.redirect("/"); // bu ifadeyi burada kullanabilirsiniz
    });
  }
}

//yemeksepeti service
function yemeksepetiService(isim, email) {
  function generatePassword() {
    // Create a random string of 5 characters.
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var password = "";
    for (var i = 0; i < 7; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    // Return the password.
    return password;
  }
  let siparisNumber = generatePassword();
  const d = new Date();
  const completeDateMsg = `${d.getDate()}.${
    d.getMonth() + 1
  }.${d.getFullYear()}  ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

  let message1 = `<!DOCTYPE html>
  <html style="height: 100% !important; width: 100% !important; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 auto; padding: 0;">
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <style>@font-face {
  font-family: 'Montserrat'; font-style: normal; font-weight: 300; src: url('https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Hw5aX8.ttf') format('truetype');
  }
  @font-face {
  font-family: 'Montserrat'; font-style: normal; font-weight: 500; src: url('https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Hw5aX8.ttf') format('truetype');
  }
  body {
  margin: 0 auto !important; padding: 0 !important; height: 100% !important; width: 100% !important;
  }
  img {
  -ms-interpolation-mode: bicubic;
  }
  .cta-yellow:hover {
  background-color: #ff9900 !important;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .email-container {
      min-width: 375px !important;
    }
  }
  @media screen and (max-width: 480px) {
    .fluid {
      width: 100% !important; max-width: 100% !important; height: auto !important; margin-left: auto !important; margin-right: auto !important;
    }
    .wrapper {
      width: 100% !important;
    }
    .font-10 {
      font-size: 10px !important;
    }
    .font-12 {
      font-size: 12px !important;
    }
    .font-13 {
      font-size: 13px !important; line-height: 19px !important;
    }
    .font-14 {
      font-size: 14px !important; line-height: 18px !important;
    }
    .font-16 {
      font-size: 16px !important; line-height: 20px !important;
    }
    .font-25 {
      font-size: 25px !important;
    }
    .display-none {
      display: none !important;
    }
    .mob-width-white {
      width: 360px !important; background: #ffffff !important;
    }
    .pad-text {
      padding: 36px 33px 40px 31px !important;
    }
    .pad-texf {
      padding: 0 48px 40px 43px !important;
    }
    .mob-height-th {
      height: 138px !important;
    }
    .mob-h-deal-th {
      height: 147px !important; border-radius: 30px !important;
    }
    .mob-th-width {
      width: 300px !important;
    }
    .app-banner {
      width: 190px !important;
    }
    .app-cta {
      width: 120px !important; padding: 5px 0 !important;
    }
    .mob-cta-w {
      width: 285px !important; padding: 0 0 0 15px !important;
    }
    .mob-cta-w-b {
      width: 180px !important; padding: 0 0 0 120px !important;
    }
    .mob-cta {
      width: 120px !important; border-top: 6px #5EFFB6 solid !important; border-bottom: 6px #5EFFB6 solid !important; font-size: 14px !important;
    }
    .mob-pad-left {
      padding: 0 75px 10px 15px !important;
    }
    .mob-pad-right {
      padding: 0 0 10px 120px !important;
    }
    .mob-img-w {
      background-size: 190px !important; background-position: center right !important;
    }
  }
  </style>
  <style type="text/css">
  
      h4 
      {
          text-align: left;
      }
  
  @media screen 
  {
  
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:hidden;
          display:none;
     }   
  }
  
  @media print 
  {
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:visible;
          display:block;
     }
  
  }
  </style>
  </head>
  <body style="height: 100% !important; width: 100% !important; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 auto; padding: 0;">
  
  <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  
  
  
  
  </p>
    <meta charset="utf-8" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <meta name="viewport" content="width=device-width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <meta name="x-apple-disable-message-reformatting" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <title style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">yemeksepeti</title>
    <!--[if mso]>
    <style>
    * {
    font-family: Arial, sans-serif !important;
  }
  </style>
  <![endif]-->
  
  <!--[if !mso]><!-->
  
  <!--<![endif]-->
  
  <!-- Web Font / @font-face : END -->
  
  <!-- CSS -->
  
  <!--[if gte mso 9]>
  <xml>
  <o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  
  
    <center style="width: 100%; background-color: #F1F1F1; text-align: left; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  
      <!-- Visually Hidden Preheader Text : BEGIN -->
      <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: Arial, sans-serif; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
      </div>
      <!-- Visually Hidden Preheader Text : END -->
  
      <div style="max-width: 600px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: auto;" class="wrapper">
        <!--[if mso]>
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" align="center">
        <tr>
        <th>
        <![endif]-->
  
        <!-- EMAIL BODY : BEGIN -->
        <table role="presentation" bgcolor="ffffff" cellspacing="0" cellpadding="0" border="0" align="center" width="600" style="max-width: 600px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto;" class="wrapper email-container">
        
        <!-- ////////// LOGO YEMEKSEPETI : BEGIN /////////// -->
          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
              <table align="left" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto;">
                <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                  <th align="center" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 15px 0;">
                    <!-- YEMEKSEPETI LOGO : BEGIN -->
                    <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R-2BVLcCqjOlRgXo1-2FVQTfQ71WPYmeNZQfAVamy7HgqFpPZtoPUJTUfH6dxhNRW-2Fg0-2Fkbn-2For3Lk9jmRNbrIvsSQQwg3pxFTJwV9l4uVgqscBjlS-2Bv-2BatqJRtaCs07COGUHVWakuEqvh-2FTmL7QNc54-2BG3Vd2GC3L2a-2FLhQRhMpBcUgn9LtvEYe5Z-2BQiG38jG-2By0M7OD-2B9rxyn-2Fr3wcXTfBSCpQPHwAnLN4tEobEcHrr9pJtzKJ3786twcuFLT2Bf6J0SUKYEZ22bcQUpoM9OvEY6NBSk17A1UUGBGLp1GN-2FnWiH7hMskw2pGG01qTYwuoz3vtH-2BmdhBPGReYH8GVfDL91EQV-2FBRDASaBDULI1juKrpY20pMQZnOLv34Ux37kXdqAHp39rGez0mgm1RRnWQgQgS4KLB6gbC27SGEUBJSlqBvwo3Qpdz6W2OxpE7490967iL3cKpvr6H0sB-2B0pyOYz5S4UlWSqbVtkzh4TucXZF4z7-2Be9baq9dSA4VC1NOti6F96tn3u2Evoyi9yBRZXuL3zFPoZOsWDFILzhSzDgeMsVa2jvt9FHx6H2LyKOYBcpvpjNx9i6vhn6B43-2BSrCOm4cFxqT1u1sKmOMn-2Bw3YftChlLiaSV5VEyKVAn-2F8qzuhft1QNOP1zk8F0GDKJLu2jVa0pRO-2F9dkoLXWRvgwJ9wsEl1PxkJtfEbBSUN-2BInkoR7MlXSGg1Slamde-2Bose-2F-2Byg-3Dm-BG_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmHq3xS29t6oAWKoKG4MMTeVI7XfPIUUzqJaAbcW2DRCFIbucMuOVegp6O0HMYpSvhKVWkoijCC-2ByEez-2BAVton3mjixzXOmqa-2BN8RfvKvoKEXVKBw42DJJ-2FQRXphmrT8gl6JjnJWEN3LcXwXrHZfVYsY-3D" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <img src="https://braze-images.com/appboy/communication/assets/image_assets/images/62163ec3cdb85f5f4756a3e5/original.png?1645625027" width="200" border="0" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 20px; color: #D61F26; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
                    </a>
                    <!-- YEMEKSEPETI LOGO : END -->
                  </th>
                </tr>
              </table>
            </th>
          </tr>
          <!-- ////////// LOGO YEMEKSEPETI : END /////////// -->
        
  
  <!-- ////////// HERO IMAGE YEMEKSEPETI : BEGIN /////////// -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
      <table align="left" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto;">
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <th align="center" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <!-- IMAGE : BEGIN -->
            <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R-2BVLcCqjOlRgXo1-2FVQTfQ71WPYmeNZQfAVamy7HgqFpPZtoPUJTUfH6dxhNRW-2Fg0-2Fkbn-2For3Lk9jmRNbrIvsSQQwg3pxFTJwV9l4uVgqscBjlS-2Bv-2BatqJRtaCs07COGUHVWakuEqvh-2FTmL7QNc54-2BG3Vd2GC3L2a-2FLhQRhMpBcUgn9LtvEYe5Z-2BQiG38jG-2By0M7OD-2B9rxyn-2Fr3wcXTfBSCpQPHwAnLN4tEobEcHrr9pJtzKJ3786twcuFLT2Bf6J0SUKYEZ22bcQUpoM9OvEY6NBSk17A1UUGBGLp1GN-2FnWiH7hMskw2pGG01qTYwuoz3vtH-2BmdhBPGReYH8GVfDL91EQV-2FBRDASaBDULI1juKrpY20pMQZnOLv34Ux37kXdqAHp39rGez0mgm1RRnWQgQgS4KLB6gbC27SGEUBJSlqBvwo3Qpdz6W2OxpE7490967iL3cKpvr6H0sB-2B0pyOYz5S4UlWSqbVtkzh4TucXZF4z7-2Be9baq9dSA4VC1NOti6F96tn3u2Evoyi9yBRZXuL3zFPoZOsWDFILzhSzDgeMsVa2jvt9FHx6H2LyKOYBcpvpjNx9i6vhn6B43-2BSrCOm4cFxqT1u1sKmOMn-2Bw3YftChlLiaSV5VEyKVAn-2F8qzuhft1QNOP1zk8F0GDKJLu2jVa0pRO-2F9dkoLXWRvgwJ9wsEl1PxkJtfEbBSUN-2BInkoR7MlXSGg1Slamde-2Bose-2F-2Byg-3D-81r_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmE6N4lj87OKneiYg3VJCVSd3zQPpZCwwijPjOWtAHDCD-2FePeRc75ge1ipkTOCQxeqe88Jnj5UvT8n-2Fc90TqHt2yvhUtfe54GZQg3XPFZDQO3PzbMY8M9rUYq4qXxhkw8n0uDsFP5sOOqZm7yrTA2cEE-3D" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
              <img class="wrapper" src="https://braze-images.com/appboy/communication/assets/image_assets/images/62163ec30a67e1789a3264bc/original.png?1645625027" width="600" border="0" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 20px; color: #D61F26; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
            </a>
            <!-- IMAGE : END -->
          </th>
        </tr>
      </table>
    </th>
  </tr>
  <!-- ////////// HERO IMAGE YEMEKSEPETI : END /////////// -->
  
  <!-- ////////// MAIN TEXT & TITLE: BEGIN //////////  -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <td bgcolor="#ffffff" class="pad-text" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; padding: 30px 50px;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto;">
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <td style="font-family: Arial, sans-serif; font-size: 16px; line-height: 20px !important; font-weight: bold; color: #02171a; padding-bottom: 22px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="left">
             
  Merhaba ${isim},
  
          </td>
        </tr>
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <td style="font-family: Arial, sans-serif; font-size: 16px; line-height: 24px !important; font-weight: 300; color: #02171a; padding-bottom: 22px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="left">
           
  Şifrenizi değiştirmek mi istiyorsunuz? Sıfırlama için aşağıdaki bağlantıyı takip etmeniz yeterli.
  <br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"><br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  Şifre Değiştir butonuna tıklayın!
  <br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"><br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  Sıfırlama işlemi size ait değilse, bu e-postayı yok sayabilirsiniz.
  
          </td>
        </tr>
        
        
        <!-- CTA begins -->
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <th class="mob-pad-left-b" width="100%" style="border-radius: 8px; display: inline-block; text-transform: uppercase; padding-bottom: 33px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" align="center">
            <a href="
  https://yemeksepeti.page.link/?afl=https%3A%2F%2Fwww.yemeksepeti.com%2Flogin%2Fnew%3Fstep%3DresetPassword%26resetCode%3Db6b75ba82eafc6589c95eba0d4a741b2c4f14bc05708b19cd50467749965472b&apn=com.inovel.app.yemeksepeti&efr=1&ibi=yemeksepeti.com.valensas&ifl=https%3A%2F%2Fwww.yemeksepeti.com%2Flogin%2Fnew%3Fstep%3DresetPassword%26resetCode%3Db6b75ba82eafc6589c95eba0d4a741b2c4f14bc05708b19cd50467749965472b&link=https%3A%2F%2Fwww.yemeksepeti.com%2Flogin%2Fnew%3Fstep%3DresetPassword%26resetCode%3Db6b75ba82eafc6589c95eba0d4a741b2c4f14bc05708b19cd50467749965472b
  " target="_blank" style="border-top-width: 7px; border-top-color: #5EFFB6; border-top-style: solid; border-bottom-width: 7px; border-bottom-color: #5EFFB6; border-bottom-style: solid; border-radius: 8px; background-color: #5EFFB6; font-size: 18px; font-family: Arial, sans-serif; font-weight: bold; color: #000000; width: 240px; text-decoration: none; display: inline-block; text-align: center; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"> 
  Şifre değiştir
  
            </a>
          </th>
        </tr>
        <!-- CTA ends -->
        
        
        
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <td style="font-family: Arial, sans-serif; font-size: 16px; line-height: 24px !important; font-weight: 300; color: #02171a; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; padding: 22px 0;" align="left">
           
  Saygılarımızla,
  <br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  Yemeksepeti
  
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <!-- ////////// MAIN TEXT & TITLE: END ////////// -->
  
  
  
  <!-- ////////// FOOTER & SOCIAL : BEGIN ////////// -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
      <table dir="ltr" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto;">
  
        <!-- SOCIAL ICONS : BEGIN -->
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <th width="96" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 32px;" align="center">
  
            <table align="center" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto;">
              <!-- FACEBOOK : BEGIN --->
              <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 20px 0 0;">
                <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R4Am0lB-2BhixeoXyI67nI3BFsGUkAYzN4fO3KiMhwgGd6KoYp_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmAqD-2Bdo2VbDITQnYLo8g7BLlgC6ufpdwph8T6AIirOXB5e6qfq1so043AVo-2BY7fYdYsOZNFQ-2FOOhfB3m8EG-2B4ir2eMT-2BkCM3ls7wAEgCTF71vM7AojYpbFDhb7GelRZ1sq5acbSSYW7ovRpknBe1Cls-3D" target="_blank" alias="social-icons" conversion="true" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                  <img src="https://braze-images.com/appboy/communication/assets/image_assets/images/62d6970ddad59d4c1ffcf088/original.png?1658230541" width="32" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; margin: 0; border: none;" border="0">
                </a>
              </th>
              <!-- FACEBOOK : END --->
  
              <!-- TWITTER : BEGIN --->
              <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 20px 0 0;">
                <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R1JV6S15p-2BPP4YMSOGruVMmLEVrVd7BGPkkx0E-2Bfr9Z38ULl_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmL3PklcOY-2FGOZ3NvgHeNCvGAE5KSVtnrG9xSPfBqTqhdikt5eCBTxfTzvvhjotZcBzV6WD-2F2GmaHfdK-2F3spHdXLWG-2BcaWMYjb4jrGIc-2Ff-2FHRCP8mk911pijmHlvKvsJOH9j8-2BYlwz8xNvIdYm9JeIOs-3D" target="_blank" alias="social-icons" conversion="true" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                  <img src="https://images.deliveryhero.io/image/adcatalog/210824-twitterYemeksepeti_CRM.png" width="32" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; margin: 0; padding: 0; border: none;" border="0"></a>
                </th>
                <!-- TWITTER : END --->
  
                <!-- instagram : BEGIN --->
                <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 20px 0 0;">
                  <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R2cl5OWyzb6R2O-2FPyuy-2F9zSIppVYNVD9tX67JDoP4tkkHDa6_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmHEzdr-2FoZfYBFn1ZFQX14RrAi5OvKKuTVHoUxNnGLvwy3WZLGJGNP-2FTlVxw-2Fyhf49foq39G3p66P8-2BYDYe8XldTyhOk9zn-2BGI7hMdR8Qv-2FN-2FdjQNLmDNlwTIrYaYpUjz-2FmWr8iF8rfzwe9g4KLfbIqo-3D" target="_blank" alias="social-icons" conversion="true" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                    <img src="https://images.deliveryhero.io/image/adcatalog/210824-instagramYemeksepeti_CRM.png" width="32" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; margin: 0; padding: 0; border: none;" border="0">
                  </a>
                </th>
                <!-- instagram : END --->
  
                <!-- youtube : BEGIN --->
                <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                  <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0Rwao4TJ1nuLEWdCvuKkSuCPhfwocLyvCCBWVgEta8ASye-2BEQYERFUb2eAlxux9wl3w-3D-3DBV-j_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmItt1eSnvv7T-2BT5i2N0CXgN9bs3oct8aS-2BQxRG-2F7qMp-2B4vuHGIP3ILDPJuDF8G62zsFvR8KALcAlDEToRpfx1alPh8oc0MK54VKkkzxZSYWOG9JK1wVplN0OWjhiarMtsErSATyTXttJGpeB-2BQiHzVA-3D" target="_blank" alias="social-icons" conversion="true" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                    <img src="https://images.deliveryhero.io/image/adcatalog/210824-youtubeYemeksepeti_CRM.png" width="32" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; margin: 0; padding: 0; border: none;" border="0">
                  </a>
                </th>
                <!-- youtube : END --->
              </table>
            </th>
          </tr>
          <!-- SOCIAL ICONS : END -->
  
          <!-- APP DOWNLOAD : BEGIN -->
          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <td style="padding-bottom: 20px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
              <table align="center" class="wrapper" cellspacing="0" cellpadding="0" border="0" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto;">
                <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                
                  <!-- IOS -->
                  <td class="mob-store" align="center" width="130" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                    <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R9XKgaFRnXYhKZSFrb0JX6mqYpA7mBoG1-2BBt1trzQzrqIGy7Ml8a83zTgIz2dxtIvQI8kHT2czYVIgH-2BHiA-2F7Jg-3DVGDR_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmCFw-2Bi9YvtncC4epoEZBaqyZVjkybZUH7t1M6luu8fJNOBtHYLEfmQKoJcduGLbjFKU5Wx2JqwshWT7PGQYQitI7PBDGpSJkZFXY1wGrHJMVri6ZMgBf6Wd5zeiouKbxZQLr9Lhn3NHZ97AEI1uIeFk-3D" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <img class="mob-store" width="114" src="https://braze-images.com/appboy/communication/assets/image_assets/images/624e9490a1b2997708c3b185/original.png?1649317008" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
                    </a>
                  </td>
                
                  <!-- Gplay -->
                  <td class="mob-store" align="center" width="120" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                    <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R6R8XPB-2FzTxQX8-2FLWnZjasl4XB3tkGkb4og6wHhWGFIT411EMTixabVHzDizZ40VYilMuevz8Dr1BNPr4v2jU58sLbCtjnLuu2Ibk0KWUm8ltQFP_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmKcdhXEafZe1w7DK8s5diHEsfmhYPjhMzlWP1taF-2F5d6dxn0xAwJ-2F45hdshU-2FJgmJB3MRG0z3WcOq89x6PFqWYvEnM6H3dIgXDT15FjvDWZTq1TXbBUqPIVLCdpO2Ob3AGzin6FCrRoK7WHkX0XVgHU-3D" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <img class="mob-store" width="102" src="https://braze-images.com/appboy/communication/assets/image_assets/images/62163ec32988c81b82ebed7b/original.png?1645625027" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
                    </a>
                  </td>
                   
                   <!-- AppGallery -->
                  <td class="mob-store" align="center" width="120" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                    <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R1a7W-2BG6lEMFGG7PYDqnmII0pX8SilTrOXoHZ7gevHJKZ2NZJ2yuuevwCRL8ZaAuXQ-3D-3DM1K5_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmMURrEsSImdxht4WhnW62wkvk-2FOwWXx57NJZlZOMV27qV6gglNoKCz149iXbfDLpJ4cWAhXCti-2B6T60SBL2otbovLz1iK0XBV3sh1HN4K4msuvyRgJ1KJZb01enTPzEliYGgqbRa3F-2FNMZpgS1-2FHKHU-3D" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <img class="mob-store" width="100" src="https://braze-images.com/appboy/communication/assets/image_assets/images/62163ec3cdb85f158e56b177/original.png?1645625027" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
                    </a>
                  </td>
                   
                </tr>
              </table>
            </td>
          </tr>
  
  
          
          <!-- UNSUBSCRIBE : BEGIN -->
          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <th width="422" class="pad-texf" style="font-family: Arial, sans-serif !important; font-size: 10px; line-height: 18px; color: #02171a; font-weight: 500; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0px 90px 30px;" align="center">
              <span style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                
  Bu e-posta Yemeksepeti siparişinizi takiben gönderilmiştir.<br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  Danışmak istediğiniz konunlarla ilgili <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R-2BVLcCqjOlRgXo1-2FVQTfQ71WPYmeNZQfAVamy7HgqFpPZtoPUJTUfH6dxhNRW-2Fg0-2Fkbn-2For3Lk9jmRNbrIvsSQQwg3pxFTJwV9l4uVgqscBjlS-2Bv-2BatqJRtaCs07COGUHVWakuEqvh-2FTmL7QNc54-2BG3Vd2GC3L2a-2FLhQRhMpBcUgn9LtvEYe5Z-2BQiG38jG-2By0M7OD-2B9rxyn-2Fr3wcXTfBSCpQPHwAnLN4tEobEcHrr9pJtzKJ3786twcuFLT2Bf6J0SUKYEZ22bcQUpoM9OvEY6NBSk17A1UUGBGLp1GN-2FnWiH7hMskw2pGG01qTYwuoz3vtH-2BmdhBPGReYH8GVfDL91EQV-2FBRDASaBDULI1juKrpY20pMQZnOLv34Ux37kXdqAHp39rGez0mgm1RRnWQgQgS4KLB6gbC27SGEUBJSlqBvwo3Qpdz6W2OxpE7490967iL3cKpvr6H0sB-2B0pyOYz5S4UlWSqbVtkzh4TucXZF4z7-2Be9baq9dSA4VC1NOti6F96tn3u2Evoyi9yBRZXuL3zFPoZOsWDFILzhSzDgeMsVa2jvt9FHx6H2LyKOYBcpvpjNx9i6vhn6B43-2BSrCOm4cFxqT1u1sKmOMn-2Bw3YftChlLiaSV5VEyKVAn-2F8qzuhft1QNOP1zk8F0GDKJLu2jVa0pRO-2F9dkoLXWRvgwJ9wsEl1PxkJtfEbBSUN-2BInkoR7MlXSGg1Slamde-2Bose-2F-2Byg-3DaqnB_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmNeiUvP5IA5zdcgJXDOtHRgDwzKTQF3qcqiIfa2L8ygQe8VWs2y8krITsEbQa2wB0iR7YYveTJf4Ja-2BQTtu5OOQZyM9Lhznl1wGYxWwGzMpPgBnGZSA4U2AseX33Yk5gxBgM7wYzCXdARAylztfNodM-3D" target="_blank" style="color: #fa0050; text-decoration: underline; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">Yardım Merkezi</a> üzerinden bizimle temasa geçebilirsiniz.<br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  E-posta almak istemiyorsanız ayarlar için lütfen tıklayınız.
  
              </span>
            </th>
          </tr>
          <!-- UNSUBSCRIBE : END -->
          
          
          <!-- CONTACT : BEGIN -->
          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <th style="font-family: Arial, sans-serif !important; font-size: 10px; line-height: 18px; color: #02171a; font-weight: 300; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0px 40px 30px;" align="center">
              <span style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                
  Yemek Sepeti Elektronik İletişim Tanıtım Pazarlama Gıda Sanayi ve Ticaret A.Ş<br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <a href="#" target="_self" style="color: #02171a; text-decoration: none; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  Esentepe Mahallesi, Dede Korkut Sokak, No: 28/1, Şişli, İstanbul <br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  Mersis No: 0947045746800015
  </a>
  
              </span>
            </th>
          </tr>
          <!-- CONTACT : END -->
          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <th align="center" valign="bottom" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
              <!-- YEMEKSEPETI LOGO : BEGIN -->
              <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R-2BVLcCqjOlRgXo1-2FVQTfQ71WPYmeNZQfAVamy7HgqFpPZtoPUJTUfH6dxhNRW-2Fg0-2Fkbn-2For3Lk9jmRNbrIvsSQQwg3pxFTJwV9l4uVgqscBjlS-2Bv-2BatqJRtaCs07COGUHVWakuEqvh-2FTmL7QNc54-2BG3Vd2GC3L2a-2FLhQRhMpBcUgn9LtvEYe5Z-2BQiG38jG-2By0M7OD-2B9rxyn-2Fr3wcXTfBSCpQPHwAnLN4tEobEcHrr9pJtzKJ3786twcuFLT2Bf6J0SUKYEZ22bcQUpoM9OvEY6NBSk17A1UUGBGLp1GN-2FnWiH7hMskw2pGG01qTYwuoz3vtH-2BmdhBPGReYH8GVfDL91EQV-2FBRDASaBDULI1juKrpY20pMQZnOLv34Ux37kXdqAHp39rGez0mgm1RRnWQgQgS4KLB6gbC27SGEUBJSlqBvwo3Qpdz6W2OxpE7490967iL3cKpvr6H0sB-2B0pyOYz5S4UlWSqbVtkzh4TucXZF4z7-2Be9baq9dSA4VC1NOti6F96tn3u2Evoyi9yBRZXuL3zFPoZOsWDFILzhSzDgeMsVa2jvt9FHx6H2LyKOYBcpvpjNx9i6vhn6B43-2BSrCOm4cFxqT1u1sKmOMn-2Bw3YftChlLiaSV5VEyKVAn-2F8qzuhft1QNOP1zk8F0GDKJLu2jVa0pRO-2F9dkoLXWRvgwJ9wsEl1PxkJtfEbBSUN-2BInkoR7MlXSGg1Slamde-2Bose-2F-2Byg-3D7IoT_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmNFM1rKC8Mfjgatd6rNXdw1eLstol7D4VGMp1xU66yBUc7W7Yvc2oilkFFdI8nHVl8lE9-2FKUMm-2FgOaULt2proIGOJpVNMsYCbdE9lg0XHed0XZZg5PdCMpR-2FOzQcaD4N5EdcgUp1x1RhKjP-2B-2F9gYbUk-3D" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                <img class="wrapper" src="https://images.deliveryhero.io/image/adcatalog/210824-LogoFooter_Yemeksepeti_CRM.png" width="600" border="0" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 20px; color: #D61F26; vertical-align: bottom; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
              </a>
              <!-- YEMEKSEPETI LOGO : END -->
            </th>
          </tr>
        </table>
      </th>
    </tr>
    <!-- ////////// FOOTER & SOCIAL : END ////////// -->
  
  </table>
  <!-- Email Body : END -->
  
  <!--[if mso]>
  </td>
  </tr>
  </table>
  <![endif]-->
  </div>
  
  </center>
  
  <img src="http://ablink.news.yemeksepeti.com/wf/open?upn=WkZziCC8g5luF-2Bp-2FuxgdlMMetYbKYd-2FlQRdGFFMWfK2aQpOfvnJi9UKH-2BDWCj8ce4m1i6noeC5ymCiAz2Z6UBiRcpt4pSp9suFYQGvqbZwc5ddYMJv91ilIWGNplFK4JkA7vzVY8a3Zfe8XkPC8pA6OlYG01O-2BgupHgt2k0PpVp2ggW7CDJXVkwTAv8NkN1e-2F-2BabI18SC-2BnTYJB-2FP-2FqCwr5XSelPXC9kXxSW-2FgC3rycWC08p8YdILyCNc1YMjlNLDs0w5Lpcvkm1BtoJlAmFj-2FbBDGCxk05Oaz9A-2BRU-2BVFB7SmAM90j1KlEGroRYyYyR5KUB8PN8WMqwxDLjxo0BJvFcTwNdJ-2B5cH-2F-2BkK4c2Fv6mVhaWCRYj-2FLEdA-2BdLAVisGjc3Woz-2FotOFxg1HeP6JCnVl9yUXlvJvLtyFVYBsQ-2B-2BZXTxlXObxAiD7rdC3QA57u9vMOsEpckW1GQo5SHx8N-2Fde1ZgmPvgDRfgZrRCGHCXhQLHmR5Ij09vgPwAjIQvfYaZfFIW5zg2y0nM-2BwKbZAXvf6yAEaQ8fSY4j13V-2FdUTy6TtmVHj0-2FQxSCpSDZMnqmlk0X6CEhYNnv2FVHGRox46ssaOtuisTkFG0kPKck3WCe5c0KVEvrjMrUTjjMurtHpXWDkZm3cqPN-2F96GDWMGZY9juVaUzZBdW-2F79wc7UPM-3D" alt="" width="1" height="1" border="0" style="height:1px !important;width:1px !important;border-width:0 !important;margin-top:0 !important;margin-bottom:0 !important;margin-right:0 !important;margin-left:0 !important;padding-top:0 !important;padding-bottom:0 !important;padding-right:0 !important;padding-left:0 !important;"/></body>
  </html>
  `;
  let message2 = `
  <!DOCTYPE html>
  <html style="height: 100% !important; width: 100% !important; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 auto; padding: 0;">
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <style>@font-face {
  font-family: 'Montserrat'; font-style: normal; font-weight: 300; src: url('https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Hw5aX8.ttf') format('truetype');
  }
  @font-face {
  font-family: 'Montserrat'; font-style: normal; font-weight: 500; src: url('https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Hw5aX8.ttf') format('truetype');
  }
  body {
  margin: 0 auto !important; padding: 0 !important; height: 100% !important; width: 100% !important;
  }
  img {
  -ms-interpolation-mode: bicubic;
  }
  .cta-yellow:hover {
  background-color: #ff9900 !important;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .email-container {
      min-width: 375px !important;
    }
  }
  @media screen and (max-width: 480px) {
    .fluid {
      width: 100% !important; max-width: 100% !important; height: auto !important; margin-left: auto !important; margin-right: auto !important;
    }
    .wrapper {
      width: 100% !important;
    }
    .font-10 {
      font-size: 10px !important;
    }
    .font-12 {
      font-size: 12px !important;
    }
    .font-13 {
      font-size: 13px !important; line-height: 19px !important;
    }
    .font-14 {
      font-size: 14px !important; line-height: 18px !important;
    }
    .font-16 {
      font-size: 16px !important; line-height: 20px !important;
    }
    .font-25 {
      font-size: 25px !important;
    }
    .display-none {
      display: none !important;
    }
    .mob-width-white {
      width: 360px !important; background: #ffffff !important;
    }
    .pad-text {
      padding: 36px 33px 40px 31px !important;
    }
    .pad-texf {
      padding: 0 48px 40px 43px !important;
    }
    .mob-height-th {
      height: 138px !important;
    }
    .mob-h-deal-th {
      height: 147px !important; border-radius: 30px !important;
    }
    .mob-th-width {
      width: 300px !important;
    }
    .app-banner {
      width: 190px !important;
    }
    .app-cta {
      width: 120px !important; padding: 5px 0 !important;
    }
    .mob-cta-w {
      width: 285px !important; padding: 0 0 0 15px !important;
    }
    .mob-cta-w-b {
      width: 180px !important; padding: 0 0 0 120px !important;
    }
    .mob-cta {
      width: 120px !important; border-top: 6px #5EFFB6 solid !important; border-bottom: 6px #5EFFB6 solid !important; font-size: 14px !important;
    }
    .mob-pad-left {
      padding: 0 75px 10px 15px !important;
    }
    .mob-pad-right {
      padding: 0 0 10px 120px !important;
    }
    .mob-img-w {
      background-size: 190px !important; background-position: center right !important;
    }
  }
  </style>
  <style type="text/css">
  
      h4 
      {
          text-align: left;
      }
  
  @media screen 
  {
  
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:hidden;
          display:none;
     }   
  }
  
  @media print 
  {
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:visible;
          display:block;
     }
  
  }
  </style>
  </head>
  <body style="height: 100% !important; width: 100% !important; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 auto; padding: 0;">
  <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  
  
  
  </p>
    <meta charset="utf-8" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <meta name="viewport" content="width=device-width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <meta name="x-apple-disable-message-reformatting" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <title style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">yemeksepeti</title>
    <!--[if mso]>
    <style>
    * {
    font-family: Arial, sans-serif !important;
  }
  </style>
  <![endif]-->
  
  <!--[if !mso]><!-->
  
  <!--<![endif]-->
  
  <!-- Web Font / @font-face : END -->
  
  <!-- CSS -->
  
  <!--[if gte mso 9]>
  <xml>
  <o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  
  
    <center style="width: 100%; background-color: #F1F1F1; text-align: left; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  
      <!-- Visually Hidden Preheader Text : BEGIN -->
      <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: Arial, sans-serif; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
      </div>
      <!-- Visually Hidden Preheader Text : END -->
  
      <div style="max-width: 600px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: auto;" class="wrapper">
        <!--[if mso]>
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" align="center">
        <tr>
        <th>
        <![endif]-->
  
        <!-- EMAIL BODY : BEGIN -->
        <table role="presentation" bgcolor="ffffff" cellspacing="0" cellpadding="0" border="0" align="center" width="600" style="max-width: 600px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto;" class="wrapper email-container">
        
        <!-- ////////// LOGO YEMEKSEPETI : BEGIN /////////// -->
          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
              <table align="left" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto;">
                <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                  <th align="center" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 15px 0;">
                    <!-- YEMEKSEPETI LOGO : BEGIN -->
                    <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R-2BVLcCqjOlRgXo1-2FVQTfQ71WPYmeNZQfAVamy7HgqFpPZtoPUJTUfH6dxhNRW-2Fg0-2Fkbn-2For3Lk9jmRNbrIvsSQQwg3pxFTJwV9l4uVgqscBjlS-2Bv-2BatqJRtaCs07COGUHVWakuEqvh-2FTmL7QNc54-2BG3Vd2GC3L2a-2FLhQRhMpBcUgn9LtvEYe5Z-2BQiG38jG-2By0M7OD-2B9rxyn-2Fr3wcXTfBSCpQPHwAnLN4tEobEcHrr9pJtzKJ3786twcuFLT2Bf6J0SUKYEZ22bcQUpoM9OvEY6NBSk17A1UUGBGLp1GN-2FnWiH7hMskw2pGG01qTYwuoz3vtH-2BmdhBPGReYH8GVfDL91EQV-2FBRDASaBDULI1juKrpY20pMQZnOLv34Ux37kXdqAHp39rGez0mgm1RRnWQgQgS4KLB6gbC27SGEUBJSlqBvwo3Qpdz6W2OxpE7490967iL3cKpvr6H0sB-2B0pyOYz5S4UlWSqbVtkzh4TucXZF4z7-2Be9baq9dSA4VC1NOti6F96tn3u2Evoyi9yBRZXuL3zFPoZOsWDFILzhSzDgeMsVa2jvt9FHx6H2LyKOYBcpvpjNx9i6vhn6B43-2BSrCOm4cFxqT1u1sKmOMn-2Bw3YftChlLiaSV5VEyKVAn-2F8qzuhft1QNOP1zk8F0GDKJLu2jVa0pRO-2F9dkoLXWRvgwJ9wsEl1PxkJtfEbBSUN-2BInkoR7MlXSGg1Slamde-2Bose-2F-2Byg-3Dm-BG_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmHq3xS29t6oAWKoKG4MMTeVI7XfPIUUzqJaAbcW2DRCFIbucMuOVegp6O0HMYpSvhKVWkoijCC-2ByEez-2BAVton3mjixzXOmqa-2BN8RfvKvoKEXVKBw42DJJ-2FQRXphmrT8gl6JjnJWEN3LcXwXrHZfVYsY-3D" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <img src="https://braze-images.com/appboy/communication/assets/image_assets/images/62163ec3cdb85f5f4756a3e5/original.png?1645625027" width="200" border="0" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 20px; color: #D61F26; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
                    </a>
                    <!-- YEMEKSEPETI LOGO : END -->
                  </th>
                </tr>
              </table>
            </th>
          </tr>
          <!-- ////////// LOGO YEMEKSEPETI : END /////////// -->
        
  
  <!-- ////////// HERO IMAGE YEMEKSEPETI : BEGIN /////////// -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
      <table align="left" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto;">
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <th align="center" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <!-- IMAGE : BEGIN -->
            <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R-2BVLcCqjOlRgXo1-2FVQTfQ71WPYmeNZQfAVamy7HgqFpPZtoPUJTUfH6dxhNRW-2Fg0-2Fkbn-2For3Lk9jmRNbrIvsSQQwg3pxFTJwV9l4uVgqscBjlS-2Bv-2BatqJRtaCs07COGUHVWakuEqvh-2FTmL7QNc54-2BG3Vd2GC3L2a-2FLhQRhMpBcUgn9LtvEYe5Z-2BQiG38jG-2By0M7OD-2B9rxyn-2Fr3wcXTfBSCpQPHwAnLN4tEobEcHrr9pJtzKJ3786twcuFLT2Bf6J0SUKYEZ22bcQUpoM9OvEY6NBSk17A1UUGBGLp1GN-2FnWiH7hMskw2pGG01qTYwuoz3vtH-2BmdhBPGReYH8GVfDL91EQV-2FBRDASaBDULI1juKrpY20pMQZnOLv34Ux37kXdqAHp39rGez0mgm1RRnWQgQgS4KLB6gbC27SGEUBJSlqBvwo3Qpdz6W2OxpE7490967iL3cKpvr6H0sB-2B0pyOYz5S4UlWSqbVtkzh4TucXZF4z7-2Be9baq9dSA4VC1NOti6F96tn3u2Evoyi9yBRZXuL3zFPoZOsWDFILzhSzDgeMsVa2jvt9FHx6H2LyKOYBcpvpjNx9i6vhn6B43-2BSrCOm4cFxqT1u1sKmOMn-2Bw3YftChlLiaSV5VEyKVAn-2F8qzuhft1QNOP1zk8F0GDKJLu2jVa0pRO-2F9dkoLXWRvgwJ9wsEl1PxkJtfEbBSUN-2BInkoR7MlXSGg1Slamde-2Bose-2F-2Byg-3D-81r_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmE6N4lj87OKneiYg3VJCVSd3zQPpZCwwijPjOWtAHDCD-2FePeRc75ge1ipkTOCQxeqe88Jnj5UvT8n-2Fc90TqHt2yvhUtfe54GZQg3XPFZDQO3PzbMY8M9rUYq4qXxhkw8n0uDsFP5sOOqZm7yrTA2cEE-3D" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
              <img class="wrapper" src="https://braze-images.com/appboy/communication/assets/image_assets/images/62163ec30a67e1789a3264bc/original.png?1645625027" width="600" border="0" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 20px; color: #D61F26; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
            </a>
            <!-- IMAGE : END -->
          </th>
        </tr>
      </table>
    </th>
  </tr>
  <!-- ////////// HERO IMAGE YEMEKSEPETI : END /////////// -->
  
  <!-- ////////// MAIN TEXT & TITLE: BEGIN //////////  -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <td bgcolor="#ffffff" class="pad-text" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; padding: 30px 50px;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto;">
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <td style="font-family: Arial, sans-serif; font-size: 16px; line-height: 20px !important; font-weight: bold; color: #02171a; padding-bottom: 22px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="left">
             
  Merhaba ${isim},
  
          </td>
        </tr>
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <td style="font-family: Arial, sans-serif; font-size: 16px; line-height: 24px !important; font-weight: 300; color: #02171a; padding-bottom: 22px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="left">
           
  Şifrenizi güncellediniz
  <br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"><br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  
  <br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"><br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  Sıfırlama işlemi size ait değilse, bu e-postayı yok sayabilirsiniz.
  
          </td>
        </tr>
        
        
        <!-- CTA begins -->
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <th class="mob-pad-left-b" width="100%" style="border-radius: 8px; display: inline-block; text-transform: uppercase; padding-bottom: 33px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" align="center">
            
          </th>
        </tr>
        <!-- CTA ends -->
        
        
        
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <td style="font-family: Arial, sans-serif; font-size: 16px; line-height: 24px !important; font-weight: 300; color: #02171a; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; padding: 22px 0;" align="left">
           
  Saygılarımızla,
  <br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  Yemeksepeti
  
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <!-- ////////// MAIN TEXT & TITLE: END ////////// -->
  
  
  
  <!-- ////////// FOOTER & SOCIAL : BEGIN ////////// -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
      <table dir="ltr" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto;">
  
        <!-- SOCIAL ICONS : BEGIN -->
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <th width="96" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 32px;" align="center">
  
            <table align="center" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto;">
              <!-- FACEBOOK : BEGIN --->
              <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 20px 0 0;">
                <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R4Am0lB-2BhixeoXyI67nI3BFsGUkAYzN4fO3KiMhwgGd6KoYp_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmAqD-2Bdo2VbDITQnYLo8g7BLlgC6ufpdwph8T6AIirOXB5e6qfq1so043AVo-2BY7fYdYsOZNFQ-2FOOhfB3m8EG-2B4ir2eMT-2BkCM3ls7wAEgCTF71vM7AojYpbFDhb7GelRZ1sq5acbSSYW7ovRpknBe1Cls-3D" target="_blank" alias="social-icons" conversion="true" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                  <img src="https://braze-images.com/appboy/communication/assets/image_assets/images/62d6970ddad59d4c1ffcf088/original.png?1658230541" width="32" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; margin: 0; border: none;" border="0">
                </a>
              </th>
              <!-- FACEBOOK : END --->
  
              <!-- TWITTER : BEGIN --->
              <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 20px 0 0;">
                <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R1JV6S15p-2BPP4YMSOGruVMmLEVrVd7BGPkkx0E-2Bfr9Z38ULl_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmL3PklcOY-2FGOZ3NvgHeNCvGAE5KSVtnrG9xSPfBqTqhdikt5eCBTxfTzvvhjotZcBzV6WD-2F2GmaHfdK-2F3spHdXLWG-2BcaWMYjb4jrGIc-2Ff-2FHRCP8mk911pijmHlvKvsJOH9j8-2BYlwz8xNvIdYm9JeIOs-3D" target="_blank" alias="social-icons" conversion="true" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                  <img src="https://images.deliveryhero.io/image/adcatalog/210824-twitterYemeksepeti_CRM.png" width="32" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; margin: 0; padding: 0; border: none;" border="0"></a>
                </th>
                <!-- TWITTER : END --->
  
                <!-- instagram : BEGIN --->
                <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 20px 0 0;">
                  <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R2cl5OWyzb6R2O-2FPyuy-2F9zSIppVYNVD9tX67JDoP4tkkHDa6_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmHEzdr-2FoZfYBFn1ZFQX14RrAi5OvKKuTVHoUxNnGLvwy3WZLGJGNP-2FTlVxw-2Fyhf49foq39G3p66P8-2BYDYe8XldTyhOk9zn-2BGI7hMdR8Qv-2FN-2FdjQNLmDNlwTIrYaYpUjz-2FmWr8iF8rfzwe9g4KLfbIqo-3D" target="_blank" alias="social-icons" conversion="true" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                    <img src="https://images.deliveryhero.io/image/adcatalog/210824-instagramYemeksepeti_CRM.png" width="32" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; margin: 0; padding: 0; border: none;" border="0">
                  </a>
                </th>
                <!-- instagram : END --->
  
                <!-- youtube : BEGIN --->
                <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                  <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0Rwao4TJ1nuLEWdCvuKkSuCPhfwocLyvCCBWVgEta8ASye-2BEQYERFUb2eAlxux9wl3w-3D-3DBV-j_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmItt1eSnvv7T-2BT5i2N0CXgN9bs3oct8aS-2BQxRG-2F7qMp-2B4vuHGIP3ILDPJuDF8G62zsFvR8KALcAlDEToRpfx1alPh8oc0MK54VKkkzxZSYWOG9JK1wVplN0OWjhiarMtsErSATyTXttJGpeB-2BQiHzVA-3D" target="_blank" alias="social-icons" conversion="true" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                    <img src="https://images.deliveryhero.io/image/adcatalog/210824-youtubeYemeksepeti_CRM.png" width="32" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; margin: 0; padding: 0; border: none;" border="0">
                  </a>
                </th>
                <!-- youtube : END --->
              </table>
            </th>
          </tr>
          <!-- SOCIAL ICONS : END -->
  
          <!-- APP DOWNLOAD : BEGIN -->
          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <td style="padding-bottom: 20px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
              <table align="center" class="wrapper" cellspacing="0" cellpadding="0" border="0" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto;">
                <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                
                  <!-- IOS -->
                  <td class="mob-store" align="center" width="130" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                    <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R9XKgaFRnXYhKZSFrb0JX6mqYpA7mBoG1-2BBt1trzQzrqIGy7Ml8a83zTgIz2dxtIvQI8kHT2czYVIgH-2BHiA-2F7Jg-3DVGDR_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmCFw-2Bi9YvtncC4epoEZBaqyZVjkybZUH7t1M6luu8fJNOBtHYLEfmQKoJcduGLbjFKU5Wx2JqwshWT7PGQYQitI7PBDGpSJkZFXY1wGrHJMVri6ZMgBf6Wd5zeiouKbxZQLr9Lhn3NHZ97AEI1uIeFk-3D" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <img class="mob-store" width="114" src="https://braze-images.com/appboy/communication/assets/image_assets/images/624e9490a1b2997708c3b185/original.png?1649317008" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
                    </a>
                  </td>
                
                  <!-- Gplay -->
                  <td class="mob-store" align="center" width="120" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                    <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R6R8XPB-2FzTxQX8-2FLWnZjasl4XB3tkGkb4og6wHhWGFIT411EMTixabVHzDizZ40VYilMuevz8Dr1BNPr4v2jU58sLbCtjnLuu2Ibk0KWUm8ltQFP_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmKcdhXEafZe1w7DK8s5diHEsfmhYPjhMzlWP1taF-2F5d6dxn0xAwJ-2F45hdshU-2FJgmJB3MRG0z3WcOq89x6PFqWYvEnM6H3dIgXDT15FjvDWZTq1TXbBUqPIVLCdpO2Ob3AGzin6FCrRoK7WHkX0XVgHU-3D" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <img class="mob-store" width="102" src="https://braze-images.com/appboy/communication/assets/image_assets/images/62163ec32988c81b82ebed7b/original.png?1645625027" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
                    </a>
                  </td>
                   
                   <!-- AppGallery -->
                  <td class="mob-store" align="center" width="120" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                    <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R1a7W-2BG6lEMFGG7PYDqnmII0pX8SilTrOXoHZ7gevHJKZ2NZJ2yuuevwCRL8ZaAuXQ-3D-3DM1K5_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmMURrEsSImdxht4WhnW62wkvk-2FOwWXx57NJZlZOMV27qV6gglNoKCz149iXbfDLpJ4cWAhXCti-2B6T60SBL2otbovLz1iK0XBV3sh1HN4K4msuvyRgJ1KJZb01enTPzEliYGgqbRa3F-2FNMZpgS1-2FHKHU-3D" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <img class="mob-store" width="100" src="https://braze-images.com/appboy/communication/assets/image_assets/images/62163ec3cdb85f158e56b177/original.png?1645625027" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
                    </a>
                  </td>
                   
                </tr>
              </table>
            </td>
          </tr>
  
  
          
          <!-- UNSUBSCRIBE : BEGIN -->
          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <th width="422" class="pad-texf" style="font-family: Arial, sans-serif !important; font-size: 10px; line-height: 18px; color: #02171a; font-weight: 500; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0px 90px 30px;" align="center">
              <span style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                
  Bu e-posta Yemeksepeti siparişinizi takiben gönderilmiştir.<br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  Danışmak istediğiniz konunlarla ilgili <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R-2BVLcCqjOlRgXo1-2FVQTfQ71WPYmeNZQfAVamy7HgqFpPZtoPUJTUfH6dxhNRW-2Fg0-2Fkbn-2For3Lk9jmRNbrIvsSQQwg3pxFTJwV9l4uVgqscBjlS-2Bv-2BatqJRtaCs07COGUHVWakuEqvh-2FTmL7QNc54-2BG3Vd2GC3L2a-2FLhQRhMpBcUgn9LtvEYe5Z-2BQiG38jG-2By0M7OD-2B9rxyn-2Fr3wcXTfBSCpQPHwAnLN4tEobEcHrr9pJtzKJ3786twcuFLT2Bf6J0SUKYEZ22bcQUpoM9OvEY6NBSk17A1UUGBGLp1GN-2FnWiH7hMskw2pGG01qTYwuoz3vtH-2BmdhBPGReYH8GVfDL91EQV-2FBRDASaBDULI1juKrpY20pMQZnOLv34Ux37kXdqAHp39rGez0mgm1RRnWQgQgS4KLB6gbC27SGEUBJSlqBvwo3Qpdz6W2OxpE7490967iL3cKpvr6H0sB-2B0pyOYz5S4UlWSqbVtkzh4TucXZF4z7-2Be9baq9dSA4VC1NOti6F96tn3u2Evoyi9yBRZXuL3zFPoZOsWDFILzhSzDgeMsVa2jvt9FHx6H2LyKOYBcpvpjNx9i6vhn6B43-2BSrCOm4cFxqT1u1sKmOMn-2Bw3YftChlLiaSV5VEyKVAn-2F8qzuhft1QNOP1zk8F0GDKJLu2jVa0pRO-2F9dkoLXWRvgwJ9wsEl1PxkJtfEbBSUN-2BInkoR7MlXSGg1Slamde-2Bose-2F-2Byg-3DaqnB_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmNeiUvP5IA5zdcgJXDOtHRgDwzKTQF3qcqiIfa2L8ygQe8VWs2y8krITsEbQa2wB0iR7YYveTJf4Ja-2BQTtu5OOQZyM9Lhznl1wGYxWwGzMpPgBnGZSA4U2AseX33Yk5gxBgM7wYzCXdARAylztfNodM-3D" target="_blank" style="color: #fa0050; text-decoration: underline; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">Yardım Merkezi</a> üzerinden bizimle temasa geçebilirsiniz.<br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  E-posta almak istemiyorsanız ayarlar için lütfen tıklayınız.
  
              </span>
            </th>
          </tr>
          <!-- UNSUBSCRIBE : END -->
          
          
          <!-- CONTACT : BEGIN -->
          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <th style="font-family: Arial, sans-serif !important; font-size: 10px; line-height: 18px; color: #02171a; font-weight: 300; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0px 40px 30px;" align="center">
              <span style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                
  Yemek Sepeti Elektronik İletişim Tanıtım Pazarlama Gıda Sanayi ve Ticaret A.Ş<br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <a href="#" target="_self" style="color: #02171a; text-decoration: none; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  Esentepe Mahallesi, Dede Korkut Sokak, No: 28/1, Şişli, İstanbul <br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  Mersis No: 0947045746800015
  </a>
  
              </span>
            </th>
          </tr>
          <!-- CONTACT : END -->
          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <th align="center" valign="bottom" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
              <!-- YEMEKSEPETI LOGO : BEGIN -->
              <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R-2BVLcCqjOlRgXo1-2FVQTfQ71WPYmeNZQfAVamy7HgqFpPZtoPUJTUfH6dxhNRW-2Fg0-2Fkbn-2For3Lk9jmRNbrIvsSQQwg3pxFTJwV9l4uVgqscBjlS-2Bv-2BatqJRtaCs07COGUHVWakuEqvh-2FTmL7QNc54-2BG3Vd2GC3L2a-2FLhQRhMpBcUgn9LtvEYe5Z-2BQiG38jG-2By0M7OD-2B9rxyn-2Fr3wcXTfBSCpQPHwAnLN4tEobEcHrr9pJtzKJ3786twcuFLT2Bf6J0SUKYEZ22bcQUpoM9OvEY6NBSk17A1UUGBGLp1GN-2FnWiH7hMskw2pGG01qTYwuoz3vtH-2BmdhBPGReYH8GVfDL91EQV-2FBRDASaBDULI1juKrpY20pMQZnOLv34Ux37kXdqAHp39rGez0mgm1RRnWQgQgS4KLB6gbC27SGEUBJSlqBvwo3Qpdz6W2OxpE7490967iL3cKpvr6H0sB-2B0pyOYz5S4UlWSqbVtkzh4TucXZF4z7-2Be9baq9dSA4VC1NOti6F96tn3u2Evoyi9yBRZXuL3zFPoZOsWDFILzhSzDgeMsVa2jvt9FHx6H2LyKOYBcpvpjNx9i6vhn6B43-2BSrCOm4cFxqT1u1sKmOMn-2Bw3YftChlLiaSV5VEyKVAn-2F8qzuhft1QNOP1zk8F0GDKJLu2jVa0pRO-2F9dkoLXWRvgwJ9wsEl1PxkJtfEbBSUN-2BInkoR7MlXSGg1Slamde-2Bose-2F-2Byg-3D7IoT_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDELWdvUjj0gO3J4b4oyJudXI5Iivf9D7Fs97bJiijSJhbyc2Cb6VHCjD7PCWo9ZGRvdIxZOdr-2BoPeddLp4xkbpqkEJkQq55JAkJ9yJNVRof-2Fne8ULfnmIyWbwaBlbYN8XlqT-2F83qxmL4IfG-2Bo793sBo0N1IQVFQsxlP6cyx-2FtGrGIAdR4c8HZcMUDi606iKvnHtMWjkzbdSlCBgefFf3IlqSwKEAuTrxL5r3tYvZj9SE97M3DceMT3wgU9xZku46-2BkQZWvmqMwBT5A4EHH-2BG-2FdNgsx7vfXVymy0KQoswZjBGIiiliUHwUIPCeim5lEQboD2dsecwfz-2BLIArg-2BoGIkq8csu2Fi5z-2Fwryax0alaQSjQsGSEmkqmM57H1XdhFA9Me7eMcawBKQF7teQxYpxkhDVomBElSjPWBB1eri2tJVEJoeSM-2BGwQ-2BrWFfS1IRYZVmNFM1rKC8Mfjgatd6rNXdw1eLstol7D4VGMp1xU66yBUc7W7Yvc2oilkFFdI8nHVl8lE9-2FKUMm-2FgOaULt2proIGOJpVNMsYCbdE9lg0XHed0XZZg5PdCMpR-2FOzQcaD4N5EdcgUp1x1RhKjP-2B-2F9gYbUk-3D" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                <img class="wrapper" src="https://images.deliveryhero.io/image/adcatalog/210824-LogoFooter_Yemeksepeti_CRM.png" width="600" border="0" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 20px; color: #D61F26; vertical-align: bottom; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
              </a>
              <!-- YEMEKSEPETI LOGO : END -->
            </th>
          </tr>
        </table>
      </th>
    </tr>
    <!-- ////////// FOOTER & SOCIAL : END ////////// -->
  
  </table>
  <!-- Email Body : END -->
  
  <!--[if mso]>
  </td>
  </tr>
  </table>
  <![endif]-->
  </div>
  
  </center>
  
  <img src="http://ablink.news.yemeksepeti.com/wf/open?upn=WkZziCC8g5luF-2Bp-2FuxgdlMMetYbKYd-2FlQRdGFFMWfK2aQpOfvnJi9UKH-2BDWCj8ce4m1i6noeC5ymCiAz2Z6UBiRcpt4pSp9suFYQGvqbZwc5ddYMJv91ilIWGNplFK4JkA7vzVY8a3Zfe8XkPC8pA6OlYG01O-2BgupHgt2k0PpVp2ggW7CDJXVkwTAv8NkN1e-2F-2BabI18SC-2BnTYJB-2FP-2FqCwr5XSelPXC9kXxSW-2FgC3rycWC08p8YdILyCNc1YMjlNLDs0w5Lpcvkm1BtoJlAmFj-2FbBDGCxk05Oaz9A-2BRU-2BVFB7SmAM90j1KlEGroRYyYyR5KUB8PN8WMqwxDLjxo0BJvFcTwNdJ-2B5cH-2F-2BkK4c2Fv6mVhaWCRYj-2FLEdA-2BdLAVisGjc3Woz-2FotOFxg1HeP6JCnVl9yUXlvJvLtyFVYBsQ-2B-2BZXTxlXObxAiD7rdC3QA57u9vMOsEpckW1GQo5SHx8N-2Fde1ZgmPvgDRfgZrRCGHCXhQLHmR5Ij09vgPwAjIQvfYaZfFIW5zg2y0nM-2BwKbZAXvf6yAEaQ8fSY4j13V-2FdUTy6TtmVHj0-2FQxSCpSDZMnqmlk0X6CEhYNnv2FVHGRox46ssaOtuisTkFG0kPKck3WCe5c0KVEvrjMrUTjjMurtHpXWDkZm3cqPN-2F96GDWMGZY9juVaUzZBdW-2F79wc7UPM-3D" alt="" width="1" height="1" border="0" style="height:1px !important;width:1px !important;border-width:0 !important;margin-top:0 !important;margin-bottom:0 !important;margin-right:0 !important;margin-left:0 !important;padding-top:0 !important;padding-bottom:0 !important;padding-right:0 !important;padding-left:0 !important;"/></body>
  </html>
  `;
  let message3 = `
  <!DOCTYPE html>
  <html style="height: 100% !important; width: 100% !important; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 auto; padding: 0;">
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <style>@font-face {
  font-family: 'Roboto'; font-style: normal; font-weight: 100; font-display: swap; src: url('https://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1MmgVxHIzc.ttf') format('truetype');
  }
  @font-face {
  font-family: 'Roboto'; font-style: normal; font-weight: 300; font-display: swap; src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCxc9.ttf') format('truetype');
  }
  @font-face {
  font-family: 'Roboto'; font-style: normal; font-weight: 400; font-display: swap; src: url('https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7WxP.ttf') format('truetype');
  }
  @font-face {
  font-family: 'Roboto'; font-style: normal; font-weight: 500; font-display: swap; src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCxc9.ttf') format('truetype');
  }
  @font-face {
  font-family: 'Roboto'; font-style: normal; font-weight: 700; font-display: swap; src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCxc9.ttf') format('truetype');
  }
  @font-face {
  font-family: 'Roboto'; font-style: normal; font-weight: 900; font-display: swap; src: url('https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtfCxc9.ttf') format('truetype');
  }
  body {
  margin: 0 auto !important; padding: 0 !important; height: 100% !important; width: 100% !important;
  }
  img {
  -ms-interpolation-mode: bicubic;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .email-container {
      min-width: 380px !important;
    }
  }
  @media screen and (max-width: 480px) {
    .wrapper {
      width: 100% !important;
    }
    .mob-hero-img {
      height: 150px !important; background-size: cover !important;
    }
    .mob-hero-1 {
      height: 85px !important;
    }
    .mob-hero-text {
      height: 180px !important;
    }
    .mob-th-width {
      width: 300px !important; height: 233px !important;
    }
    .m-pad-85 {
      padding: 20px 38px !important;
    }
    .mob-padd-80 {
      padding: 0 80px !important;
    }
    .mob-font-25 {
      font-size: 22px !important; line-height: 25px !important; padding: 0 120px !important;
    }
    .mob-font-18 {
      font-size: 18px !important; line-height: 20px !important;
    }
    .mob-padd-bottom {
      padding-bottom: 20px !important;
    }
    .mob-padding-invoice {
      padding: 10px 5px !important;
    }
    .mob-margin-bottom {
      margin-bottom: 40px !important;
    }
    .mob-display-none {
      display: none !important;
    }
    .mob-font-30 {
      font-size: 45px !important;
    }
    .mob-voucher-img {
      background-size: 600px !important;
    }
    .mob-hide-img {
      background: none !important; background-color: #ffffff !important;
    }
    .mob-voucher-padding {
      padding: 0 10px;
    }
    .colAppL {
      width: 100% !important; display: block !important; text-align: center !important;
    }
    .colAppR {
      width: 100% !important; display: block !important; text-align: center !important;
    }
    .colAppL-t {
      width: 300px !important; display: block !important; text-align: center !important; margin: 0 auto !important;
    }
    .colAppL-left {
      display: inline-block !important; text-align: left !important;
    }
    .colAppL-s {
      display: inline-block !important; text-align: left !important;
    }
    .mob-font {
      font-size: 18px !important;
    }
    .mob-font-12 {
      font-size: 12px !important; line-height: 18px !important; height: auto !important;
    }
    .mob-hide {
      background: none !important; background-color: #D61F26 !important;
    }
    .mob-padd-0 {
      padding-left: 0 !important;
    }
    .mob-padd-l-20 {
      padding: 0 20px 0 !important;
    }
    .mob-pad-0 {
      padding: 0 0 33px !important;
    }
    .mob-bg-color {
      background-color: #ffffff !important;
    }
    .mob-gutter {
      height: 20px !important;
    }
    .text-align-c {
      text-align: center !important;
    }
    .mob-width-white {
      width: 360px !important; background: #ffffff !important;
    }
    .mob-footer-width {
      width: 370px !important;
    }
    .mob-hide {
      display: none !important;
    }
    .mob-header {
      background-size: cover !important;
    }
    .mob-height-a {
      height: 150px !important;
    }
    .mob-height-b {
      height: 180px !important;
    }
    .mob-heigh-td {
      height: 465px !important;
    }
    .mob-address-a {
      display: inline-block !important; text-align: left !important; width: 80% !important;
    }
    .mob-address-b {
      display: inline-block !important; text-align: left !important;
    }
    .mob-posdcast {
      width: 80px !important;
    }
    .mob-posdcast-b {
      width: 55px !important;
    }
  }
  @media screen and (max-width: 320px) {
    .mob-width-white {
      width: 310px !important; background: #ffffff !important;
    }
    .mob-footer-width {
      width: 310px !important;
    }
  }
  @media (prefers-color-scheme: light) {
    [data-ogsc].mob-width-white {
      height: 800px !important; background: #ffffff !important;
    }
  }
  </style>
  <style type="text/css">
  
      h4 
      {
          text-align: left;
      }
  
  @media screen 
  {
  
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:hidden;
          display:none;
     }   
  }
  
  @media print 
  {
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:visible;
          display:block;
     }
  
  }
  </style>
  </head>
  <body style="height: 100% !important; width: 100% !important; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0 auto; padding: 0;">
  
    <meta charset="utf-8" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <meta name="viewport" content="width=device-width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <meta name="x-apple-disable-message-reformatting" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <title style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">yemeksepeti</title>
    <!-- Web Font / @font-face : BEGIN -->
  
    <!--[if mso]>
    <style>
    * {
    font-family: Arial, Helvetica, sans-serif;
  }
  </style>
  <![endif]-->
  <!--[if !mso]><!-->
  
  
  <!--<![endif]-->
  <!-- Web Font / @font-face : END -->
  
  <!-- CSS -->
  
  <!-- What it does: Makes background images in 72ppi Outlook render at correct size. -->
  <!--[if gte mso 9]>
  <xml>
  <o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  
  
    <center style="width: 100%; background-color: #F0F0F0; text-align: left; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
      <!--[if mso]>
      <style type="text/css">
      body, table, td {font-family: Arial, Helvetica, sans-serif;}
    </style>
    <![endif]-->
    <!-- Visually Hidden Preheader Text : BEGIN -->
    <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: 'Roboto', sans-serif; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
      
  </div>
  <!-- Visually Hidden Preheader Text : END -->
  
  <div style="max-width: 600px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: auto;" class="wrapper">
    <!--[if mso]>
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" align="center">
    <tr>
    <td>
    <![endif]-->
    <!-- EMAIL BODY : BEGIN -->
    <table role="presentation" bgcolor="#ffffff" cellspacing="0" cellpadding="0" border="0" align="center" width="600" style="max-width: 600px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;" class="wrapper email-container">
  
      <!-- ////////// LOGO YEMEKSEPETI : BEGIN /////////// -->
      <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
        <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <table align="left" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
            <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
              <th align="center" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 22px 0;">
                <!-- YEMEKSEPETI LOGO : BEGIN -->
                <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R53pFrHBWy-2Bvf5pD8Ec0UGq9eeAI57JVae9ZKetWFQXslpAz0H-2BaA-2FNWd4D32S7X4sYzRjwZr5OOYBfJuDesM7W-2FSfj-2FuRu5uzze5m2PvAea1e87c9GH4A8NN-2FstisB-2BKs8Pj-2BCT4ZFI8pfm90drtrOmanReG16pd3GGFhLuD3A3GYmHefGZUT4htrM6RFnYx5mj3eO9AUsWqTF54MsOOw3WBDGGObgOiMoiOHA6SKE8SeB6nI76LELsaNVJNcXXfPQjSgqoMRRziwuD0y4UEd4awhI4CcR6Fu8v7emrBRaw4fXibESt-2F3qiH93ovZ1NnIn-2Fv0Eaw3LkoCkKY1IFGCL-2F0PNg4zpMGa95GQg9f1y5rg0esgAbUGqQMeKZXXmra2bvt-2FtSR2GIPcq6ivJifpzzEL0ZTh3iSLUANhW98fHiw-2F89e5H-2FBx5n8wf6DOlsug-3D-3D4gmK_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDEEKcjdpVWd0G7ebCIq-2FZpDEvGpcmy5z1w9bzGj7qTHSu6j4fZoV-2F-2FGFHG-2FwYcL9lrJWwDOna7iP03TLeVExQpdB15Qf88LkrhOA3p9RElIrMDUvIrQXOtxrYWdo-2FtKoW9gVXE8RT5iEMyoxteamZOcrYBgMZQPHohFCLbAOs3bquQJswojYf0YWaVrzXP4bN8HeOfBZdpOYLmmUNYvuuX61MX83CqJFIPsvR-2B9BembfMtmc2DbED-2FTbINF1SBy8F88lr3mpBTCLFz9on6meysiYTCTLwOw5yQT2W-2Bo2952rIkQB6jSAb42vQIlC-2FDyTMuBAOCGe-2F88eyLgkq6rZ9Hggdp30nfBW-2BjWarP12-2FeLz2D4e9byAkkb-2BjqdTx1O31Uza-2BPRLX7h64N9heHy94oXF4arESYBd68rVvbIE7DY3yUGPCcP299HD-2BsWQPzbbj43cZzhExdDFS16VCwmqnznQChbRnT2crQVwIVNZFWFkYN63ZomQussFZ0z85PS3BWPsp-2FIle0LGB7KFUfh5ytafXhsEEXpC5dZ66RMQfSJXOcDmJDlvASem7hT8SNNPT66tdw9b02OuL3UGOeT-2F0-2Bu5P8BEQuMo3OTkwiRE617cvl14FN-2B3EQqmUlZxlIBFfLvCM0-2BB7-2FP6bT2ReVpSwlWBO-2ByYHp4FRRChyvG-2F7OU5p" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                  <img src="https://braze-images.com/appboy/communication/assets/image_assets/images/62163ec3cdb85f5f4756a3e5/original.png?1645625027" width="300" alt="logo" border="0" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 20px; color: #D61F26; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
                </a>
                <!-- YEMEKSEPETI LOGO : END -->
              </th>
            </tr>
          </table>
        </th>
      </tr>
      <!-- ////////// LOGO YEMEKSEPETI : END /////////// -->
      
      <!-- ////////// HERO IMAGE YEMEKSEPETI : BEGIN /////////// -->
      <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
        <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <table align="left" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
            <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
              <th align="center" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 22px 0;">
                <!-- IMAGE : BEGIN -->
                <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R53pFrHBWy-2Bvf5pD8Ec0UGq9eeAI57JVae9ZKetWFQXslpAz0H-2BaA-2FNWd4D32S7X4sYzRjwZr5OOYBfJuDesM7W-2FSfj-2FuRu5uzze5m2PvAea1e87c9GH4A8NN-2FstisB-2BKs8Pj-2BCT4ZFI8pfm90drtrOmanReG16pd3GGFhLuD3A3GYmHefGZUT4htrM6RFnYx5mj3eO9AUsWqTF54MsOOw3WBDGGObgOiMoiOHA6SKE8SeB6nI76LELsaNVJNcXXfPQjSgqoMRRziwuD0y4UEd4awhI4CcR6Fu8v7emrBRaw4fXibESt-2F3qiH93ovZ1NnIn-2Fv0Eaw3LkoCkKY1IFGCL-2F0PNg4zpMGa95GQg9f1y5rg0esgAbUGqQMeKZXXmra2bvt-2FtSR2GIPcq6ivJifpzzEL0ZTh3iSLUANhW98fHiw-2F89e5H-2FBx5n8wf6DOlsug-3D-3DSP3z_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDEEKcjdpVWd0G7ebCIq-2FZpDEvGpcmy5z1w9bzGj7qTHSu6j4fZoV-2F-2FGFHG-2FwYcL9lrJWwDOna7iP03TLeVExQpdB15Qf88LkrhOA3p9RElIrMDUvIrQXOtxrYWdo-2FtKoW9gVXE8RT5iEMyoxteamZOcrYBgMZQPHohFCLbAOs3bquQJswojYf0YWaVrzXP4bN8HeOfBZdpOYLmmUNYvuuX61MX83CqJFIPsvR-2B9BembfMtmc2DbED-2FTbINF1SBy8F88lr3mpBTCLFz9on6meysiYTCTLwOw5yQT2W-2Bo2952rIkQB6jSAb42vQIlC-2FDyTMuBAOCGe-2F88eyLgkq6rZ9Hggdp30nfBW-2BjWarP12-2FeLz2D4e9byAkkb-2BjqdTx1O31Uza-2BPRLX7h64N9heHy94oXF4arESYBd68rVvbIE7DY3yUGPCcP299HD-2BsWQPzbbj43cZzhExdDFS16VCwmqnznQChbRnT2crQVwIVNZFWFkYN63ZomQussFZ0z85PS3BWPsp-2FIle0LGB7KFUfh5ytaebnMgXj3PhvVw2IBFot7-2Bd-2BcKqeV7duS7dwLsyVk3litz7U84TjvVEdykcYRWG8tvhNOQJVDLiTdLQ-2ByHQDFGORGgrZRS6CNM0EhDttNuX2ItWT3td8G-2FCeqLztOr1CxcAKShxkArDegRxSxsO0eOL" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                  <img class="wrapper" src="https://braze-images.com/appboy/communication/assets/image_assets/images/6350f7854ce0465735511760/original.jpg?1666250629" width="600" border="0" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 20px; color: #D61F26; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
                </a>
                <!-- IMAGE : END -->
              </th>
            </tr>
          </table>
        </th>
      </tr>
      <!-- ////////// HERO IMAGE YEMEKSEPETI : END /////////// -->
  
  
  
  
  
  
  <!-- //// **** invoice structure begin **** //// -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  <table bgcolor="#ffffff" class="mob-width-white" width="585" border="0" cellpadding="0" cellspacing="0" align="center" valign="top" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <!-- //// **** invoice structure begin **** //// -->
  
  <!-- //// **** invoice structure begin **** //// -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td height="400" valign="top" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  <table bgcolor="#ffffff" class="mob-width-white" width="540" border="0" cellpadding="0" cellspacing="0" align="center" valign="top" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  
  <!-- **** Invoice info & customer address begins **** -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td class="mob-height-a" valign="top" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; padding: 30px 0 0;">
  <table class="wrapper mob-height-a" width="540" align="center" border="0" cellpadding="0" cellspacing="0" style="border-bottom-width: 1px; border-bottom-color: #000; border-bottom-style: dashed; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <!-- ****  INVOICE INFO BEGIN  **** -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td class="mob-p-10-text" valign="top" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  <table width="100%" align="left" valign="top" border="0" cellpadding="0" cellspacing="0" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; color: #02171A; font-weight: bold; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; padding: 0 0 12px;" align="left">
  <b style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  
  Sipariş detayları:
  
  </b>
  </td>
  </tr>
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; padding: 0 0 30px;">
  <table width="100%" valign="top" border="0" cellpadding="0" cellspacing="0" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td class="colAppL-s" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 28px; font-weight: 300; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="left">
  
  Satıcı:
  &nbsp; </td>
  <td class="colAppL-left" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 28px; font-weight: 300; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="right"> Öncü Döner </td>
  </tr>
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td class="colAppL-left" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 28px; font-weight: 300; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="left">
  
  Sipariş zamanı:
  &nbsp;</td>
  <td class="colAppL-left" width="60%" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 28px; font-weight: 300; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="right"> ${completeDateMsg}</td>
  </tr>
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td class="colAppL-s" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 28px; font-weight: 300; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="left">
  
  Sipariş numarası:
  &nbsp;</td>
  <td class="colAppL-left" width="50%" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 28px; font-weight: 300; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="right"> ${siparisNumber}</td>
  </tr>
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td class="colAppL-s" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 28px; font-weight: 300; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="left">
  Ödeme Yöntemi:
  &nbsp;</td>
  <td class="colAppL-left" width="60%" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 28px; font-weight: 300; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="right"> Online Kredi/Banka Kartı</td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  <!-- ****  INVOICE INFO END  **** -->
  </table>
  </td>
  </tr>
  
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td valign="top" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; padding: 30px 0 0;">
  <table class="mob-border wrapper" width="540" align="left" border="0" cellpadding="0" cellspacing="0" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <!-- ****  CUSTOMER ADDRESS BEGIN  **** -->
  
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td valign="top" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; padding: 0 0 30px;">
  <table class="colAppL" width="100%" align="left" border="0" cellpadding="0" cellspacing="0" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td class="mob-line-h-16" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; color: #02171A; font-weight: bold; padding-bottom: 12px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="left">
  <b style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    
      
      Teslimat Bilgileri:
        
    
  </b>
  </td>
  </tr>
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td valign="top" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 28px; font-weight: 300; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="left">
  <table width="100%" valign="top" border="0" cellpadding="0" cellspacing="0" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td class="colAppL-s" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 28px; font-weight: 300; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="left">
  
  İsim:
  &nbsp;
  </td>
  <td class="colAppL-left" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 28px; font-weight: 300; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="right">
  
  
  <span style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">${isim}</span><br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  
  
  </td>
  </tr>
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td class="colAppL-left" width="mob-address-b" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 28px; font-weight: 300; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="left">
  
  Adres:
  &nbsp;
  </td>
  <td class="mob-address-a" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 28px; font-weight: 300; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="right">
  <a href="#" style="text-decoration: none; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  
  <span style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">78020 Karabük, 5. Sk. 1    3 Kanarya </span><br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  
  
  </a>
  </td>
  </tr>
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td class="colAppL-s" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 28px; font-weight: 300; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="left">
  
  Telefon:
  &nbsp;
  </td>
  <td class="colAppL-left" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 28px; font-weight: 300; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="right">
  
  <a href="tel:+90%205066548336" target="_blank" style="text-decoration: none; color: #02171A; font-weight: 300; font-family: Arial, Helvetica, sans-serif; font-size: 16px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">+90 531*****31</a>
  
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  <!-- ****  CUSTOMER ADDRESS END  **** -->
  </table>
  </td>
  </tr>
  <!-- **** Invoice info & customer address ends **** -->
  
  <!-- ****  dotted separator begins **** -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td colspan="2" valign="top" height="30" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  <table bgcolor="ffffff" class="wrapper" align="center" width="120" height="0" style="border-top-width: 6px; border-top-color: #5EFFB6; border-top-style: solid; color: #5EFFB6; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  </td>
  </tr>
  </table>
  </td>
  </tr>
  <!-- ****  dotted separator end **** -->
  
  
  
  
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td colspan="2" valign="top" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  <table class="wrapper" width="540" align="center" valign="top" border="0" cellpadding="0" cellspacing="0" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td colspan="2" class="mob-p-10-text" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 25px; font-weight: 300; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  <span style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <b style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  Merhaba 
   ${isim},</b>
  <br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"><br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  
  
  Öncü Döner siparişiniz için teşekkürler!
  
    
  
  
  </span>
  </td>
  </tr>
  <!-- content : begin -->
  
  <!-- ****  dotted separator begins **** -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td colspan="2" valign="middle" height="20" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  <table class="wrapper" bgcolor="ffffff" align="center" width="540" height="0" style="color: #BEBEBE; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  </td>
  </tr>
  </table>
  </td>
  </tr>
  <!-- ****  dotted separator end **** -->
  
  <!-- content : end -->
   
  
   
  
  
  
  <!-- content : begin -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td class="mob-p-10-text" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 25px; font-weight: 300; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  <span style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  
  Saygılarımızla,
  <br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <b style="color: #D61F26; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">Yemeksepeti</b> 
  
  </span>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  
  
  <!-- ****  dotted separator begins **** -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td colspan="2" valign="middle" height="40" style="max-width: 540px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  <table bgcolor="ffffff" class="mob-hide" align="center" width="540" height="0" style="border-top-width: 2px; border-top-color: #BEBEBE; border-top-style: dotted; color: #BEBEBE; max-width: 600px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  </td>
  </tr>
  </table>
  </td>
  </tr>
  <!-- ****  dotted separator end **** -->
  
  <!-- **** //// Invoice content begins //// **** -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td colspan="2" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  <table class="wrapper" align="center" width="540" valign="top" border="0" cellpadding="0" cellspacing="0" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <!-- **** //// Invoice content begins //// **** -->
  
  <!-- **** order header begins **** -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td class="mob-padding-10" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  <table bgcolor="#5EFFB6" class="wrapper" width="540" height="55" align="center" border="0" cellpadding="0" cellspacing="0" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td class="mob-padding-10 mob-f-16 mob-width-item" width="100%" height="55" style="font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; font-weight: 600; color: #02171A; padding-left: 10px; max-width: 500px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  
  Adet | Ürünler
  
  
  
  </td>
  
  <td class="mob-padding-10 mob-f-16 mob-width-price" width="100%" height="55" style="font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 20px; font-weight: 600; color: #02171A; max-width: 80px; padding-right: 10px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="center">
  
  Toplam
  
  
  
  </td>
  </tr>
  </table>
  </td>
  </tr>
  <!-- **** order header ends **** -->
  
  <!-- **** order content begins **** -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td class="mob-padding-5" style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 20px; font-weight: 300; color: #000; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  <table class="wrapper" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 540px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; padding: 10px 0;">
  
          
          
          
  <tr>
      <td colspan="3" style="font-size: 14px; padding: 5px; padding-top: 14px; padding-right: 5px;">
          <table width="100%" bgcolor="" cellpadding="0" cellspacing="0" border="0" style="line-height: 20px; text-transform: uppercase;">
              <tr>
                  <td width="30"><strong>1 X</strong></td>
                  <td><strong>Kazandıran Menü</strong></td>
                  <td width="60" align="right" style="text-transform: none;"><strong>129,99 TL</strong></td>
              </tr>
              
          </table>
      </td>
  </tr>
          
          
  <tr>
  <td colspan="4" style="font-size: 12px; padding: 10px; padding-right: 5px;">
      <table width="100%" bgcolor="" cellpadding="0" cellspacing="0" border="0" style="line-height: 15px; text-transform: uppercase;">
          <tr>
              <td width="30"></td>
              <td width="30"><strong>1 X</strong></td>
              <td><strong>Tavuk Döner Dürüm (80 gr.)</strong></td>
              <td width="60" align="right"></td>
          </tr>
          
          
          <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td><span style="font-size: 11px;">Lavaş Seçimi:Tek Lavaş</span></td>
              <td>&nbsp;</td>
          </tr>
          
          
      </table>
  </td>
  </tr>
          
  <tr>
  <td colspan="4" style="font-size: 12px; padding: 10px; padding-right: 5px;">
      <table width="100%" bgcolor="" cellpadding="0" cellspacing="0" border="0" style="line-height: 15px; text-transform: uppercase;">
          <tr>
              <td width="30"></td>
              <td width="30"><strong>1 X</strong></td>
              <td><strong>Tavuk Döner Dürüm (80 gr.)</strong></td>
              <td width="60" align="right"></td>
          </tr>
          
          
          <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td><span style="font-size: 11px;">Lavaş Seçimi:Tek Lavaş</span></td>
              <td>&nbsp;</td>
          </tr>
          
          
      </table>
  </td>
  </tr>
          
  <tr>
  <td colspan="4" style="font-size: 12px; padding: 10px; padding-right: 5px;">
      <table width="100%" bgcolor="" cellpadding="0" cellspacing="0" border="0" style="line-height: 15px; text-transform: uppercase;">
          <tr>
              <td width="30"></td>
              <td width="30"><strong>1 X</strong></td>
              <td><strong>Patates Kızartması</strong></td>
              <td width="60" align="right"></td>
          </tr>
          
      </table>
  </td>
  </tr>
          
  <tr>
  <td colspan="4" style="font-size: 12px; padding: 10px; padding-right: 5px;">
      <table width="100%" bgcolor="" cellpadding="0" cellspacing="0" border="0" style="line-height: 15px; text-transform: uppercase;">
          <tr>
              <td width="30"></td>
              <td width="30"><strong>1 X</strong></td>
              <td><strong>Patates Kızartması</strong></td>
              <td width="60" align="right"></td>
          </tr>
          
      </table>
  </td>
  </tr>
          
  <tr>
  <td colspan="4" style="font-size: 12px; padding: 10px; padding-right: 5px;">
      <table width="100%" bgcolor="" cellpadding="0" cellspacing="0" border="0" style="line-height: 15px; text-transform: uppercase;">
          <tr>
              <td width="30"></td>
              <td width="30"><strong>1 X</strong></td>
              <td><strong>Pepsi (1 L.)</strong></td>
              <td width="60" align="right"></td>
          </tr>
          
      </table>
  </td>
  </tr>
          
          
          
           
  </td>
  </tr>
  </table>
  </td>
  </tr>
  <!-- **** order content begins **** -->
  
  <!-- ****  dotted separator begins **** -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td class="mob-padding-10" colspan="2" valign="middle" height="40" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  <table bgcolor="ffffff" class="wrapper" align="center" width="100%" height="0" style="border-top-width: 1px; border-top-color: #BEBEBE; border-top-style: solid; color: #BEBEBE; max-width: 540px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  </td>
  </tr>
  </table>
  </td>
  </tr>
  <!-- ****  dotted separator end **** -->
  
  <!-- //// **** INVOICE CALCULATION : BEGIN **** //// -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td style="line-height: 35px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; padding: 0 0 10px;">
  <table width="100%" class="wrapper" cellpadding="0" cellspacing="0" border="0" style="max-width: 540px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <!-- //// **** INVOICE CALCULATION : BEGIN **** //// -->

  <!-- ** Discount begin ** -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td width="270" class="mob-hide" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  <table width="270" cellpadding="0" cellspacing="0" border="0" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  </td>
  </tr>
  </table>
  </td>
  <td width="270" class="mob-padding-10" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  <table width="270" class="wrapper" cellpadding="0" cellspacing="0" border="0" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td style="font-family: Arial, Helvetica, sans-serif; font-weight: 300; font-size: 14px; line-height: 40px; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  
  İndirim
  
  </td>
  <td align="right" style="font-family: Arial, Helvetica, sans-serif; font-weight: 300; font-size: 14px; line-height: 40px; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  -13,00 TL
  </td>
  </tr>
  </table>
  </td>
  </tr>
  <!-- ** Discount end ** -->
  
  
  
  <!-- ** Voucher begin ** -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td width="270" class="mob-hide" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  <table width="270" cellpadding="0" cellspacing="0" border="0" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  </td>
  </tr>
  </table>
  </td>
  <td width="270" class="mob-padding-10" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  <table width="270" class="wrapper" cellpadding="0" cellspacing="0" border="0" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td style="font-family: Arial, Helvetica, sans-serif; font-weight: 300; font-size: 14px; line-height: 40px; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  
  Kupon
  
  </td>
  <td align="right" style="font-family: Arial, Helvetica, sans-serif; font-weight: 300; font-size: 14px; line-height: 40px; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  -50,00 TL
  </td>
  </tr>
  </table>
  </td>
  </tr>
  <!-- ** Voucher end ** -->
  
  <!-- ** DELIVERY end ** -->
  
  
  
  <!-- ** Total begin ** -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td width="270" class="mob-hide" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  <table width="270" cellpadding="0" cellspacing="0" border="0" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  </td>
  </tr>
  </table>
  </td>
  <td width="270" class="mob-padding-10" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  <table width="270" class="wrapper" cellpadding="0" cellspacing="0" border="0" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
  <td style="font-family: Arial, Helvetica, sans-serif; font-weight: 600; font-size: 14px; line-height: 40px; color: #02171A; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  
  Toplam
  
  </td>
  <td align="right" style="font-family: Arial, Helvetica, sans-serif; font-weight: 600; font-size: 14px; color: #D61F26; line-height: 40px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
  66,99 TL
  </td>
  </tr>
  </table>
  </td>
  </tr>
  <!-- ** Total end ** -->
  
  <!-- //// INVOICE CALCULATION : ends //// -->
  </table>
  </td>
  </tr>
  <!-- //// INVOICE CALCULATION : ends //// -->
  
  <!-- //// **** Invoice content ends //// **** -->
  </table>
  </td>
  </tr>
  <!-- //// **** Invoice content ends //// **** -->
  
  <!-- //// **** invoice structure ends **** //// -->
  </table>
  </td>
  </tr>
  <!-- //// **** invoice structure ends **** //// -->
  
  <!-- //// **** invoice structure ends **** //// -->
  </table>
  </td>
  </tr>
  <!-- //// **** invoice structure end **** //// -->
  
  
  
  <!-- ////////// FOOTER & SOCIAL : BEGIN ////////// -->
  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
      <table dir="ltr" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
      
      
      <!-- ****  dotted separator begins **** -->
      <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
        <td colspan="2" valign="middle" height="40" style="max-width: 540px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
          <table bgcolor="ffffff" class="wrapper" align="center" width="540" height="0" style="border-top-width: 2px; border-top-color: #BEBEBE; border-top-style: dotted; color: #BEBEBE; max-width: 600px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
            <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
              <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- ****  dotted separator end **** -->
  
      
      
      
          <!-- PODCAST SECTION: BEGIN -->
            <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
              <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                <table bgcolor="FA0050" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
                  <!-- ////////// PODCAST IMAGE YEMEKSEPETI : BEGIN /////////// -->
                  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                    <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
  
                        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                          <td style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 20px; color: #ffffff; font-weight: 300; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; padding: 22px 10px;" align="center">
                            Aklımdaki Yarın” podcastimiz yayında!<br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                            Gıda israfı, iklim krizi gibi sürdürülebilirlik konularını konuşuyor, yarınlar için sorumluluklarımızı bugünden fark ediyoruz!
                          </td>
                        </tr>
                        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                          <th align="center" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 0 22px;">
                            <!-- IMAGE : BEGIN -->
                            <a href="" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                              <img class="wrapper" src="https://braze-images.com/appboy/communication/assets/image_assets/images/633ea58b74c14263b2c89a29/original.jpg?1665049995" width="350" border="0" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 20px; color: #D61F26; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
                            </a>
                            <!-- IMAGE : END -->
                          </th>
                        </tr>
                      </table>
                    </th>
                  </tr>
                  <!-- ////////// PODCAST IMAGE YEMEKSEPETI : END /////////// -->
  
                  <!-- PODCAST LINK : BEGIN -->
                  <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                    <td style="padding-bottom: 22px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                      <table align="center" class="wrapper" cellspacing="0" cellpadding="0" border="0" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
                        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                          <!-- APPLE POD -->
                          <td class="mob-posdcast" align="center" width="130" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                            <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R7KLe4ELyh9ERer-2FLdww8Ng4OVagba3HZb5b5Yce1-2B7T53pNxTXXkn0Q1U7uJCuBSXjvWQsO5QSfNHeGsazDx7lnnyhERfYDkpnhSO-2FvX8pBXZgv_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDEEKcjdpVWd0G7ebCIq-2FZpDEvGpcmy5z1w9bzGj7qTHSu6j4fZoV-2F-2FGFHG-2FwYcL9lrJWwDOna7iP03TLeVExQpdB15Qf88LkrhOA3p9RElIrMDUvIrQXOtxrYWdo-2FtKoW9gVXE8RT5iEMyoxteamZOcrYBgMZQPHohFCLbAOs3bquQJswojYf0YWaVrzXP4bN8HeOfBZdpOYLmmUNYvuuX61MX83CqJFIPsvR-2B9BembfMtmc2DbED-2FTbINF1SBy8F88lr3mpBTCLFz9on6meysiYTCTLwOw5yQT2W-2Bo2952rIkQB6jSAb42vQIlC-2FDyTMuBAOCGe-2F88eyLgkq6rZ9Hggdp30nfBW-2BjWarP12-2FeLz2D4e9byAkkb-2BjqdTx1O31Uza-2BPRLX7h64N9heHy94oXF4arESYBd68rVvbIE7DY3yUGPCcP299HD-2BsWQPzbbj43cZzhExdDFS16VCwmqnznQChbRnT2crQVwIVNZFWFkYN63ZomQussFZ0z85PS3BWPsp-2FIle0LGB7KFUfh5ytae1G25cU3wtvzzSYxEBqqTjQAbF3vP3GzGxgQcD-2BrpU-2FCV6pMTc4g1M9Pjn9P8nRTwsTUa17r-2BK9nl9mz295yX31GH-2Bieg89-2F99pE6A-2BO69rxlFd8v-2BlTb4-2BGt47rhdKfYK7tW4gpzzFe-2Bwm-2BRlCBaU" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                              <img class="mob-posdcast" width="114" src="https://braze-images.com/appboy/communication/assets/image_assets/images/633ea58b5a0bdd61ce5ba36f/original.png?1665049995" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
                            </a>
                          </td>
  
                          <!-- SPOTIFY -->
                          <td class="mob-posdcast" align="center" width="130" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                            <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R0a7VXqHUcwkaVp7MoCwjYeACESCIzg1JQD05jEVym1CbaEhaL3CKLVZoyuU02KdCA-3D-3DdPhX_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDEEKcjdpVWd0G7ebCIq-2FZpDEvGpcmy5z1w9bzGj7qTHSu6j4fZoV-2F-2FGFHG-2FwYcL9lrJWwDOna7iP03TLeVExQpdB15Qf88LkrhOA3p9RElIrMDUvIrQXOtxrYWdo-2FtKoW9gVXE8RT5iEMyoxteamZOcrYBgMZQPHohFCLbAOs3bquQJswojYf0YWaVrzXP4bN8HeOfBZdpOYLmmUNYvuuX61MX83CqJFIPsvR-2B9BembfMtmc2DbED-2FTbINF1SBy8F88lr3mpBTCLFz9on6meysiYTCTLwOw5yQT2W-2Bo2952rIkQB6jSAb42vQIlC-2FDyTMuBAOCGe-2F88eyLgkq6rZ9Hggdp30nfBW-2BjWarP12-2FeLz2D4e9byAkkb-2BjqdTx1O31Uza-2BPRLX7h64N9heHy94oXF4arESYBd68rVvbIE7DY3yUGPCcP299HD-2BsWQPzbbj43cZzhExdDFS16VCwmqnznQChbRnT2crQVwIVNZFWFkYN63ZomQussFZ0z85PS3BWPsp-2FIle0LGB7KFUfh5ytafF1Vah5xN6KARBcCRfmo-2BXdRkmjjVXtj0McR0XE7eymj2XfaLkhWUZ7DYB43-2B44oTPHbmQVIxY6DmEHT7XzOJICn-2Bo2sjyem7TTG1ixG00CrH6SvKGEZq435wBey476q7mUBHd-2F03LDjnKv68MwTNt" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                              <img class="mob-posdcast" width="110" src="https://braze-images.com/appboy/communication/assets/image_assets/images/633ea58b1415b1793a9af1b9/original.png?1665049995" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
                            </a>
                          </td>
  
                          <!-- Google -->
                          <td class="mob-posdcast" align="center" width="130" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                            <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R1DZb4-2F-2FRoTvd6kRb-2BYIjFSKBqtdMRECAPut9aO-2B-2Fcf7C-2Bvh3vdz20hL-2FbocDDMGKwfBG7CcY4Z5ztguOGJyE6pAS-2BTRr-2FJr5RqFmEg-2BuEkMaUSD_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDEEKcjdpVWd0G7ebCIq-2FZpDEvGpcmy5z1w9bzGj7qTHSu6j4fZoV-2F-2FGFHG-2FwYcL9lrJWwDOna7iP03TLeVExQpdB15Qf88LkrhOA3p9RElIrMDUvIrQXOtxrYWdo-2FtKoW9gVXE8RT5iEMyoxteamZOcrYBgMZQPHohFCLbAOs3bquQJswojYf0YWaVrzXP4bN8HeOfBZdpOYLmmUNYvuuX61MX83CqJFIPsvR-2B9BembfMtmc2DbED-2FTbINF1SBy8F88lr3mpBTCLFz9on6meysiYTCTLwOw5yQT2W-2Bo2952rIkQB6jSAb42vQIlC-2FDyTMuBAOCGe-2F88eyLgkq6rZ9Hggdp30nfBW-2BjWarP12-2FeLz2D4e9byAkkb-2BjqdTx1O31Uza-2BPRLX7h64N9heHy94oXF4arESYBd68rVvbIE7DY3yUGPCcP299HD-2BsWQPzbbj43cZzhExdDFS16VCwmqnznQChbRnT2crQVwIVNZFWFkYN63ZomQussFZ0z85PS3BWPsp-2FIle0LGB7KFUfh5ytafrgrjLd-2FpxL05kMsqO7ktafLCfnIbqYNjLm1hf8Qfbc7z-2F-2FJVQszcaScBrg0tJG0H7Kdswb4fTYmwtz30tweSsdrPQ3b6RN91s9b9-2F2XN7gBUTSU3Tp3Ve6kLqIorGiUTUsk3UzcSEAm0DsMzUVDNV" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                              <img class="mob-posdcast" width="110" src="https://braze-images.com/appboy/communication/assets/image_assets/images/633ea58b412a9641b5a51154/original.png?1665049995" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
                            </a>
                          </td>
  
                          <!-- Castbox -->
                          <td class="mob-posdcast-b" align="center" width="90" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                            <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R-2FX8NXFTllbAzcLdoh04B43nE8hb1Rcc3EvNqvPysLdDNBD4HS-2Fg1A4QpD3oz-2FbgzQ-3D-3DgtQM_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDEEKcjdpVWd0G7ebCIq-2FZpDEvGpcmy5z1w9bzGj7qTHSu6j4fZoV-2F-2FGFHG-2FwYcL9lrJWwDOna7iP03TLeVExQpdB15Qf88LkrhOA3p9RElIrMDUvIrQXOtxrYWdo-2FtKoW9gVXE8RT5iEMyoxteamZOcrYBgMZQPHohFCLbAOs3bquQJswojYf0YWaVrzXP4bN8HeOfBZdpOYLmmUNYvuuX61MX83CqJFIPsvR-2B9BembfMtmc2DbED-2FTbINF1SBy8F88lr3mpBTCLFz9on6meysiYTCTLwOw5yQT2W-2Bo2952rIkQB6jSAb42vQIlC-2FDyTMuBAOCGe-2F88eyLgkq6rZ9Hggdp30nfBW-2BjWarP12-2FeLz2D4e9byAkkb-2BjqdTx1O31Uza-2BPRLX7h64N9heHy94oXF4arESYBd68rVvbIE7DY3yUGPCcP299HD-2BsWQPzbbj43cZzhExdDFS16VCwmqnznQChbRnT2crQVwIVNZFWFkYN63ZomQussFZ0z85PS3BWPsp-2FIle0LGB7KFUfh5ytacZLlOeQTvEQlOQJeZezPi392yGLIwkCaLnnu22jFO5ForKPHGRYkl4BNyQwZfoFfQIuilU5Lq1O7gX6D3zYEC6tZJSblodWHAzzEVJtaivV2N-2FITpOzDrotklur0hsfIg96J4mIsEx-2BkQgb6MW35-2B2" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                              <img class="mob-posdcast-b" width="70" src="https://braze-images.com/appboy/communication/assets/image_assets/images/633ea58b01c03f375d829070/original.png?1665049995" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <!-- PODCAST LINK : END -->
                </table>
              </th>
            </tr>
            <!-- PODCAST SECTION: END -->
          
  
        <!-- SOCIAL ICONS : BEGIN -->
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <th width="96" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 32px;" align="center">
  
            <table align="center" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
              <!-- FACEBOOK : BEGIN --->
              <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 20px 0 0;">
                <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R4Am0lB-2BhixeoXyI67nI3BFsGUkAYzN4fO3KiMhwgGd6OwMm_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDEEKcjdpVWd0G7ebCIq-2FZpDEvGpcmy5z1w9bzGj7qTHSu6j4fZoV-2F-2FGFHG-2FwYcL9lrJWwDOna7iP03TLeVExQpdB15Qf88LkrhOA3p9RElIrMDUvIrQXOtxrYWdo-2FtKoW9gVXE8RT5iEMyoxteamZOcrYBgMZQPHohFCLbAOs3bquQJswojYf0YWaVrzXP4bN8HeOfBZdpOYLmmUNYvuuX61MX83CqJFIPsvR-2B9BembfMtmc2DbED-2FTbINF1SBy8F88lr3mpBTCLFz9on6meysiYTCTLwOw5yQT2W-2Bo2952rIkQB6jSAb42vQIlC-2FDyTMuBAOCGe-2F88eyLgkq6rZ9Hggdp30nfBW-2BjWarP12-2FeLz2D4e9byAkkb-2BjqdTx1O31Uza-2BPRLX7h64N9heHy94oXF4arESYBd68rVvbIE7DY3yUGPCcP299HD-2BsWQPzbbj43cZzhExdDFS16VCwmqnznQChbRnT2crQVwIVNZFWFkYN63ZomQussFZ0z85PS3BWPsp-2FIle0LGB7KFUfh5ytaf5GU0cO3UKY777i-2BKIIrPASNTl9-2F8CAhTwd3ANL8iNI1kRNhcdfXgA3x5LazyIMoFBNOrPsIrU9EYrGv-2BC0TzsPg3Tebnk-2BMioqNZEFnOYqBW9nF6eBQkA0mNKNAYDeT7-2Frv-2BfV-2BiOcGAV23KhjC3o" target="_blank" alias="social-icons" conversion="true" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                  <img src="https://images.deliveryhero.io/image/adcatalog/210824-facebookYemeksepeti_CRM.png" width="32" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; margin: 0; border: none;" border="0" alt="social-icons">
                </a>
              </th>
              <!-- FACEBOOK : END --->
  
              <!-- TWITTER : BEGIN --->
              <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 20px 0 0;">
                <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R1JV6S15p-2BPP4YMSOGruVMmLEVrVd7BGPkkx0E-2Bfr9Z3m2fb_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDEEKcjdpVWd0G7ebCIq-2FZpDEvGpcmy5z1w9bzGj7qTHSu6j4fZoV-2F-2FGFHG-2FwYcL9lrJWwDOna7iP03TLeVExQpdB15Qf88LkrhOA3p9RElIrMDUvIrQXOtxrYWdo-2FtKoW9gVXE8RT5iEMyoxteamZOcrYBgMZQPHohFCLbAOs3bquQJswojYf0YWaVrzXP4bN8HeOfBZdpOYLmmUNYvuuX61MX83CqJFIPsvR-2B9BembfMtmc2DbED-2FTbINF1SBy8F88lr3mpBTCLFz9on6meysiYTCTLwOw5yQT2W-2Bo2952rIkQB6jSAb42vQIlC-2FDyTMuBAOCGe-2F88eyLgkq6rZ9Hggdp30nfBW-2BjWarP12-2FeLz2D4e9byAkkb-2BjqdTx1O31Uza-2BPRLX7h64N9heHy94oXF4arESYBd68rVvbIE7DY3yUGPCcP299HD-2BsWQPzbbj43cZzhExdDFS16VCwmqnznQChbRnT2crQVwIVNZFWFkYN63ZomQussFZ0z85PS3BWPsp-2FIle0LGB7KFUfh5ytafsYD4O1VyXB1KCAy2UYDueupAvdzPKyTlUiHdpO7xI4vDZ-2FOPszzG30iMfpRYs1r-2BD2aXDP4XC5pKU9ylUh4tWR0ZBIO6g71WUK5VogiylfiXs74jRhd8-2FOuxFhk471rT4-2Bn441neMPmsWZFwRdLyX" target="_blank" alias="social-icons" conversion="true" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                  <img src="https://images.deliveryhero.io/image/adcatalog/210824-twitterYemeksepeti_CRM.png" width="32" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; margin: 0; padding: 0; border: none;" border="0" alt="social-icons"></a>
                </th>
                <!-- TWITTER : END --->
  
                <!-- instagram : BEGIN --->
                <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0 20px 0 0;">
                  <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R2cl5OWyzb6R2O-2FPyuy-2F9zSIppVYNVD9tX67JDoP4tkkwdx3_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDEEKcjdpVWd0G7ebCIq-2FZpDEvGpcmy5z1w9bzGj7qTHSu6j4fZoV-2F-2FGFHG-2FwYcL9lrJWwDOna7iP03TLeVExQpdB15Qf88LkrhOA3p9RElIrMDUvIrQXOtxrYWdo-2FtKoW9gVXE8RT5iEMyoxteamZOcrYBgMZQPHohFCLbAOs3bquQJswojYf0YWaVrzXP4bN8HeOfBZdpOYLmmUNYvuuX61MX83CqJFIPsvR-2B9BembfMtmc2DbED-2FTbINF1SBy8F88lr3mpBTCLFz9on6meysiYTCTLwOw5yQT2W-2Bo2952rIkQB6jSAb42vQIlC-2FDyTMuBAOCGe-2F88eyLgkq6rZ9Hggdp30nfBW-2BjWarP12-2FeLz2D4e9byAkkb-2BjqdTx1O31Uza-2BPRLX7h64N9heHy94oXF4arESYBd68rVvbIE7DY3yUGPCcP299HD-2BsWQPzbbj43cZzhExdDFS16VCwmqnznQChbRnT2crQVwIVNZFWFkYN63ZomQussFZ0z85PS3BWPsp-2FIle0LGB7KFUfh5ytaeb-2FkUKJSNIXNqMAGVM2rXg8r5PsgOX-2BhbWkm4gth1i4GxgVZhpAAi02M7dFNFQI5s1NxK9PGKTbGEWw6yXnyOeZL8hJY5aZIwV4tHLFRa57A7yERSve7axMdJlpbxueDxzgD-2Bhvi2f2U5yNAXs-2BGbk" target="_blank" alias="social-icons" conversion="true" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                    <img src="https://images.deliveryhero.io/image/adcatalog/210824-instagramYemeksepeti_CRM.png" width="32" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; margin: 0; padding: 0; border: none;" border="0" alt="social-icons">
                  </a>
                </th>
                <!-- instagram : END --->
  
                <!-- youtube : BEGIN --->
                <th style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                  <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0Rwao4TJ1nuLEWdCvuKkSuCPhfwocLyvCCBWVgEta8ASye-2BEQYERFUb2eAlxux9wl3w-3D-3D9pIY_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDEEKcjdpVWd0G7ebCIq-2FZpDEvGpcmy5z1w9bzGj7qTHSu6j4fZoV-2F-2FGFHG-2FwYcL9lrJWwDOna7iP03TLeVExQpdB15Qf88LkrhOA3p9RElIrMDUvIrQXOtxrYWdo-2FtKoW9gVXE8RT5iEMyoxteamZOcrYBgMZQPHohFCLbAOs3bquQJswojYf0YWaVrzXP4bN8HeOfBZdpOYLmmUNYvuuX61MX83CqJFIPsvR-2B9BembfMtmc2DbED-2FTbINF1SBy8F88lr3mpBTCLFz9on6meysiYTCTLwOw5yQT2W-2Bo2952rIkQB6jSAb42vQIlC-2FDyTMuBAOCGe-2F88eyLgkq6rZ9Hggdp30nfBW-2BjWarP12-2FeLz2D4e9byAkkb-2BjqdTx1O31Uza-2BPRLX7h64N9heHy94oXF4arESYBd68rVvbIE7DY3yUGPCcP299HD-2BsWQPzbbj43cZzhExdDFS16VCwmqnznQChbRnT2crQVwIVNZFWFkYN63ZomQussFZ0z85PS3BWPsp-2FIle0LGB7KFUfh5ytafvFOFBPMnfZTng6-2FnP81z6aBKIrQe7FYC6xFp-2B-2Bb-2FdTc-2B7EPuJoovMtNFJdgs-2F6gOh12AlnPMtEBtbqHBylA6lz5AbJVXgsi4t1KS0WMudTMg8BeWj0OcsEUmUny3LZBxRl6CGu3DcAgBs8RkPm4Ls" target="_blank" alias="social-icons" conversion="true" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                    <img src="https://images.deliveryhero.io/image/adcatalog/210824-youtubeYemeksepeti_CRM.png" width="32" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; margin: 0; padding: 0; border: none;" border="0" alt="social-icons">
                  </a>
                </th>
                <!-- youtube : END --->
              </table>
            </th>
          </tr>
          <!-- SOCIAL ICONS : END -->
  
        <!-- APP DOWNLOAD : BEGIN -->
          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <td style="padding-bottom: 20px; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
              <table align="center" class="wrapper" cellspacing="0" cellpadding="0" border="0" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: auto !important; margin: 0 auto;">
                <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                  <!-- IOS -->
                  <td class="mob-store" align="center" width="120" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                    <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R9XKgaFRnXYhKZSFrb0JX6mqYpA7mBoG1-2BBt1trzQzrqIGy7Ml8a83zTgIz2dxtIvQI8kHT2czYVIgH-2BHiA-2F7Jg-3D6SRD_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDEEKcjdpVWd0G7ebCIq-2FZpDEvGpcmy5z1w9bzGj7qTHSu6j4fZoV-2F-2FGFHG-2FwYcL9lrJWwDOna7iP03TLeVExQpdB15Qf88LkrhOA3p9RElIrMDUvIrQXOtxrYWdo-2FtKoW9gVXE8RT5iEMyoxteamZOcrYBgMZQPHohFCLbAOs3bquQJswojYf0YWaVrzXP4bN8HeOfBZdpOYLmmUNYvuuX61MX83CqJFIPsvR-2B9BembfMtmc2DbED-2FTbINF1SBy8F88lr3mpBTCLFz9on6meysiYTCTLwOw5yQT2W-2Bo2952rIkQB6jSAb42vQIlC-2FDyTMuBAOCGe-2F88eyLgkq6rZ9Hggdp30nfBW-2BjWarP12-2FeLz2D4e9byAkkb-2BjqdTx1O31Uza-2BPRLX7h64N9heHy94oXF4arESYBd68rVvbIE7DY3yUGPCcP299HD-2BsWQPzbbj43cZzhExdDFS16VCwmqnznQChbRnT2crQVwIVNZFWFkYN63ZomQussFZ0z85PS3BWPsp-2FIle0LGB7KFUfh5ytaefnFXfXKk5QrGfi-2FmWtekGiOSK7xW9-2B8WyD2zJF3hoOMB-2FwXjIxaKq7nRTLX5fwtw22PInDuSs6vAxUP7bQHdcptieg8DusPwDqyOQTLCqc4lUouXWbOHRfcxT-2FzliI7NU7r2tZClovLTUoPqpEMDB" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <img class="mob-store" width="100" src="https://braze-images.com/appboy/communication/assets/image_assets/images/62163ec365ca155f606a556b/original.png?1645625027" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
                    </a>
                  </td>
  
                  <!-- Gplay -->
                  <td class="mob-store" align="center" width="120" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                    <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R6R8XPB-2FzTxQX8-2FLWnZjasl4XB3tkGkb4og6wHhWGFIT411EMTixabVHzDizZ40VYilMuevz8Dr1BNPr4v2jU58sLbCtjnLuu2Ibk0KWUm8l-OSx_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDEEKcjdpVWd0G7ebCIq-2FZpDEvGpcmy5z1w9bzGj7qTHSu6j4fZoV-2F-2FGFHG-2FwYcL9lrJWwDOna7iP03TLeVExQpdB15Qf88LkrhOA3p9RElIrMDUvIrQXOtxrYWdo-2FtKoW9gVXE8RT5iEMyoxteamZOcrYBgMZQPHohFCLbAOs3bquQJswojYf0YWaVrzXP4bN8HeOfBZdpOYLmmUNYvuuX61MX83CqJFIPsvR-2B9BembfMtmc2DbED-2FTbINF1SBy8F88lr3mpBTCLFz9on6meysiYTCTLwOw5yQT2W-2Bo2952rIkQB6jSAb42vQIlC-2FDyTMuBAOCGe-2F88eyLgkq6rZ9Hggdp30nfBW-2BjWarP12-2FeLz2D4e9byAkkb-2BjqdTx1O31Uza-2BPRLX7h64N9heHy94oXF4arESYBd68rVvbIE7DY3yUGPCcP299HD-2BsWQPzbbj43cZzhExdDFS16VCwmqnznQChbRnT2crQVwIVNZFWFkYN63ZomQussFZ0z85PS3BWPsp-2FIle0LGB7KFUfh5ytadfQcDz38VY73oHd5hP4R8eHkSZIyVO-2FKUzEJt4x8nnKAliprfRY1rQ-2FMAV07BlkQlbu3HpFDN1cvQB7S4ND9G6rcH5FpTRuFFaq8hqdsZTUIHRbCLRNfb5crTxcVApZrhUR-2BV4CYfx6Vx1Ts-2BKWD-2Fh" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <img class="mob-store" width="100" src="https://braze-images.com/appboy/communication/assets/image_assets/images/62163ec32988c81b82ebed7b/original.png?1645625027" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
                    </a>
                  </td>
                  
                <!-- AppGallery -->
                  <td class="mob-store" align="center" width="120" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                    <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R1a7W-2BG6lEMFGG7PYDqnmII0pX8SilTrOXoHZ7gevHJKZ2NZJ2yuuevwCRL8ZaAuXQ-3D-3DnqzD_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDEEKcjdpVWd0G7ebCIq-2FZpDEvGpcmy5z1w9bzGj7qTHSu6j4fZoV-2F-2FGFHG-2FwYcL9lrJWwDOna7iP03TLeVExQpdB15Qf88LkrhOA3p9RElIrMDUvIrQXOtxrYWdo-2FtKoW9gVXE8RT5iEMyoxteamZOcrYBgMZQPHohFCLbAOs3bquQJswojYf0YWaVrzXP4bN8HeOfBZdpOYLmmUNYvuuX61MX83CqJFIPsvR-2B9BembfMtmc2DbED-2FTbINF1SBy8F88lr3mpBTCLFz9on6meysiYTCTLwOw5yQT2W-2Bo2952rIkQB6jSAb42vQIlC-2FDyTMuBAOCGe-2F88eyLgkq6rZ9Hggdp30nfBW-2BjWarP12-2FeLz2D4e9byAkkb-2BjqdTx1O31Uza-2BPRLX7h64N9heHy94oXF4arESYBd68rVvbIE7DY3yUGPCcP299HD-2BsWQPzbbj43cZzhExdDFS16VCwmqnznQChbRnT2crQVwIVNZFWFkYN63ZomQussFZ0z85PS3BWPsp-2FIle0LGB7KFUfh5ytadK3pEyYaha-2FO-2B25d1XD3D-2Biiqwjy-2F2GcKFSnXkPF-2FRC9rqon-2BFHznJdUK-2BoHB4dIrE8WjWfPlUuFyw4lH1VATdZpANjqn8a5rPMqaq5aXU-2BnPep8IFRxDTx1tOMujEdtTmxBwTAZVi-2BBZyLrM0YfK3" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <img class="mob-store" width="100" src="https://braze-images.com/appboy/communication/assets/image_assets/images/62163ec3cdb85f158e56b177/original.png?1645625027" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
  
          <!-- UNSUBSCRIBE : BEGIN -->
          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <th width="422" class="pad-texf" style="font-family: Arial, sans-serif !important; font-size: 10px; line-height: 18px; color: #02171a; font-weight: 500; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0px 90px 30px;" align="center">
              <span style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                
                Bu e-posta Yemeksepeti siparişinizi takiben gönderilmiştir.<br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                
                
              </span>
            </th>
          </tr>
          <!-- UNSUBSCRIBE : END -->
  
          <!-- CONTACT : BEGIN -->
          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <th style="font-family: Arial, sans-serif !important; font-size: 10px; line-height: 18px; color: #02171a; font-weight: 300; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 0px 40px 30px;" align="center">
              <span style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                
                Yemek Sepeti Elektronik İletişim Tanıtım Pazarlama Gıda Sanayi ve Ticaret A.Ş<br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                <a href="http://ablink.news.yemeksepeti.com/ls/click?upn=vmGtMopTuWRH8KMbNhj0R-2BVLcCqjOlRgXo1-2FVQTfQ71WPYmeNZQfAVamy7HgqFpPZtoPUJTUfH6dxhNRW-2Fg0-2Fkbn-2For3Lk9jmRNbrIvsSQQwg3pxFTJwV9l4uVgqscBjlS-2Bv-2BatqJRtaCs07COGUHVWakuEqvh-2FTmL7QNc54-2BG3Vd2GC3L2a-2FLhQRhMpBcUgn9LtvEYe5Z-2BQiG38jG-2By0M7OD-2B9rxyn-2Fr3wcXTfBSCpQPHwAnLN4tEobEcHrr9pJtzKJ3786twcuFLT2Bf6J0SUKYEZ22bcQUpoM9OvEY6NBSk17A1UUGBGLp1GN-2FnWiH7hMskw2pGG01qTYwuoz3vtH-2BmdhBPGReYH8GVfDL91EQV-2FBRDASaBDULI1juKrpY20pMQZnOLv34Ux37kXdqAHp39rGez0mgm1RRnWQgQgS4KLB6gbC27SGEUBJSlqBvwo3Qpdz6W2OxpE7490967iL3cKpvr6H0sB-2B0pyOYz5S4UlWSqbVtkzh4TucXZF4z7-2Be9baq9dSA4VC1NOti6F96tn3u2Evoyi9yBRZXuL3zFPoZOsWDFILzhSzDgeMsVa2jvt9FHx6H2LyKOYBcpvpjNx9i6vhn6B43-2BSrCOm4cFxqT1u1sKmOMn-2Bw3YftChlLiaSV5VEyKVAn-2F8qzuhft1QNOP1zk8F0GDKJLu2jVa0pRO-2F9dkoLXWRvgwJ9wsEl1PxkJtfEbBSUN-2BInkoR7MlXSGg1Slamde-2Bose-2F-2Byg-3DjUB5_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVW9O9BpHVumurZQ90mcW6XAzddxdnMJcqV1wR2C2lDEEKcjdpVWd0G7ebCIq-2FZpDEvGpcmy5z1w9bzGj7qTHSu6j4fZoV-2F-2FGFHG-2FwYcL9lrJWwDOna7iP03TLeVExQpdB15Qf88LkrhOA3p9RElIrMDUvIrQXOtxrYWdo-2FtKoW9gVXE8RT5iEMyoxteamZOcrYBgMZQPHohFCLbAOs3bquQJswojYf0YWaVrzXP4bN8HeOfBZdpOYLmmUNYvuuX61MX83CqJFIPsvR-2B9BembfMtmc2DbED-2FTbINF1SBy8F88lr3mpBTCLFz9on6meysiYTCTLwOw5yQT2W-2Bo2952rIkQB6jSAb42vQIlC-2FDyTMuBAOCGe-2F88eyLgkq6rZ9Hggdp30nfBW-2BjWarP12-2FeLz2D4e9byAkkb-2BjqdTx1O31Uza-2BPRLX7h64N9heHy94oXF4arESYBd68rVvbIE7DY3yUGPCcP299HD-2BsWQPzbbj43cZzhExdDFS16VCwmqnznQChbRnT2crQVwIVNZFWFkYN63ZomQussFZ0z85PS3BWPsp-2FIle0LGB7KFUfh5ytadYndy6ogZoKS6zgavqFiwD7-2FMA-2BdUt7FP3d-2BaypY46QkCDtOMAPC1ksQE4KnZpC7cf1RwEW2EZMrQqmyBG444otC-2B1v0StvVzuoSBSDWQo16We8Tj3zS3fbEWBtrCzaUZT8nfrkn2mvvWr5YzDQzg8" target="_self" style="color: #02171a; text-decoration: none; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                Esentepe Mahallesi, Dede Korkut Sokak, No: 28/1, Şişli, İstanbul <br style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                Mersis No: 0947045746800015
                </a>
                
              </span>
            </th>
          </tr>
          <!-- CONTACT : END -->
          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            <th align="center" valign="bottom" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
              <!-- YEMEKSEPETI LOGO : BEGIN -->
              <a href="#" target="_blank" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                <img class="wrapper" src="https://images.deliveryhero.io/image/adcatalog/210824-LogoFooter_Yemeksepeti_CRM.png" width="600" alt="logo" border="0" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 20px; color: #D61F26; vertical-align: bottom; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic;">
              </a>
              <!-- YEMEKSEPETI LOGO : END -->
            </th>
          </tr>
        </table>
      </th>
    </tr>
    <!-- ////////// FOOTER & SOCIAL : END ////////// -->
  
  </table>
  <!-- Email Body : END -->
  
  <!--[if mso]>
  </td>
  </tr>
  </table>
  <![endif]-->
  </div>
  
  </center>
  
  <img src="http://ablink.news.yemeksepeti.com/wf/open?upn=WkZziCC8g5luF-2Bp-2FuxgdlMMetYbKYd-2FlQRdGFFMWfK2aQpOfvnJi9UKH-2BDWCj8ce4m1i6noeC5ymCiAz2Z6UBplDDeO3ei6nnFcoHmMQqazsEhuiIbiaA6GxZ-2Fqr547fDxtThAaWkET6DYHRZWbUBtaO2sbJ0049GjCTvJ1GbG8LvxRdE-2B7UeLPtc-2BWEQoh1TptSKhTwm5i2VOGSxHyuidgcUdzRI-2Bm8yvxrBafuU32dcXRI71NKiaXKn0yR3A9LuNxdtBfeheVrerf9qyvbWPcI1-2B1PcgmpnTB2zXk-2Ffw-2BnNv4ibPWiSASG6evUUNU8J6zweQeI-2FvRYo83-2FCA2eMf-2BM5sluyiWzgbCo37RXqi1ufK941fk1CLQiMr9ugU4TmLH5hLnA1S-2BnzkHI2phtKN-2FVr6OkPkzhktCDd5P2VoqIqUA8DdfScc5rkMhmX6wV-2B1CCi0q7pCzK-2Bh1beZf80-2BkeheF0WJTp51qmLNFDH-2B-2B6Uw6lj9A-2FSd-2BV-2FvfM6vWleX9lsaliSwku7P8dHHU36faxdeKy195eEvHJXT3YqIXfn6BDuCHM-2B3iZK2dN09WCkOezPPbmBpFhfH0Rs-2FjoxAk7k1cch-2BLuf5EI-2BOP-2FEeN7T5-2Ba77rc4AsZIUCRAf1Yj86EAjMDM-2BukTBNqFiCwLhu8tya3TrbfKalf-2BLEAEH-2FP99qQxVpvHiK3c5MrhDXmIO6a3yZ0ZIKTqarpmQVZDyV4hMCYn-2B-2Bpkam4IdcZ85b1Zt7a-2BqFlyFuiCFJ0nnvq" alt="" width="1" height="1" border="0" style="height:1px !important;width:1px !important;border-width:0 !important;margin-top:0 !important;margin-bottom:0 !important;margin-right:0 !important;margin-left:0 !important;padding-top:0 !important;padding-bottom:0 !important;padding-right:0 !important;padding-left:0 !important;"/></body>
  </html>
  `;
  let transporter = nodemailer.createTransport({
    host: "mail.",
    port: 465,
    secure: true,
    auth: {
      user: "yemeksepeti@",
      pass: "",
    },
  });

  let mailOptions = {
    from: "yemeksepeti@",
    to: `${email}`,
    subject: "Yemeksepeti şifrenizi sıfırlayın",
    //text: text,
    html: message1,
  };
  let mailOptions1 = {
    from: "yemeksepeti@",
    to: `${email}`,
    subject: "Şifrenizi güncellediniz",
    //text: text,
    html: message2,
  };
  let mailOptions2 = {
    from: "yemeksepeti@",
    to: `${email}`,
    subject: "Siparişiniz onaylandı",
    //text: text,
    html: message3,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("send" + info.response);
      setTimeout(mySecondMsg, 60000);
    }
  });

  function mySecondMsg() {
    transporter.sendMail(mailOptions1, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("send" + info.response);
        setTimeout(sendMsg1, 60000);
      }
    });
  }

  function sendMsg1() {
    transporter.sendMail(mailOptions2, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("send" + info.response);
      }
    });
  }
}

//twitter service
function twitterService(isim, email) {
  const phoneModels = [
    "Samsung Galaxy S21 Ultra",
    "Samsung Galaxy S21+",
    "Samsung Galaxy S21",
    "Samsung Galaxy S20 Ultra",
    "Samsung Galaxy S20+",
    "Samsung Galaxy S20",
    "Samsung Galaxy S10+",
    "Samsung Galaxy S10",
    "Samsung Galaxy S10e",
    "Samsung Galaxy Note 20 Ultra",
    "Samsung Galaxy Note 20",
    "Samsung Galaxy Note 10+",
    "Samsung Galaxy Note 10",
    "Samsung Galaxy Note 9",
    "Samsung Galaxy Note 8",
    "Samsung Galaxy A52",
    "Samsung Galaxy A51",
    "Samsung Galaxy A50",
    "Samsung Galaxy A42",
    "Samsung Galaxy A32",
    "Samsung Galaxy A30s",
    "Samsung Galaxy A20",
    "Samsung Galaxy A10",
    "Samsung Galaxy J8",
    "Samsung Galaxy J7 Pro",
    "Samsung Galaxy J6",
    "Samsung Galaxy J5 Pro",
    "Samsung Galaxy J4",
    "Samsung Galaxy J3 Pro",
    "iPhone 12 Pro Max",
    "iPhone 12 Pro",
    "iPhone 12",
    "iPhone 12 Mini",
    "iPhone 11 Pro Max",
    "iPhone 11 Pro",
    "iPhone 11",
    "iPhone XS Max",
    "iPhone XS",
    "iPhone 8 Plus",
    "iPhone 8",
    "iPhone 7 Plus",
    "iPhone 7",
    "iPhone 6s Plus",
    "iPhone 6s",
    "Windows",
    "Ubuntu",
    "Kali linux",
  ];
  const item = phoneModels[Math.floor(Math.random() * phoneModels.length)];

  let message1 = `
  <html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <style type="text/css">
  @media only screen and (max-width: 320px) {
  table[class="edu-module"]{
  border-radius: 0px !important;
  -webkit-border-radius: 0px !important;
  -moz-border-radius: 0px !important;
  }
  td[class="edu-collapse"]{
  width: 0px !important;
  }
  td[class="mobile-height"]{
  height: 30px !important;
  }
  }
  @media only screen and (max-width: 420px) {
  td[class="spacer"]{
  font-size:4px !important;
  }
  span[class="address"] a {
  line-height:18px !important;
  }
  a[class="cut"]{
  display:none !important;
  }
  td[class="margins"]{
  width:18px !important;
  }
  td[class="edu-margins"]{
  width:18px !important;
  }
  td[class="logo_space"]{
  height:12px !important;
  }
  }
  @media only screen and (max-width: 480px) {
  table[class="collapse"]{
  width:100% !important;
  }
  table[class="edu-module"]{
  width:100% !important;
  }
  div[class="collapse"]{
  width:100% !important;
  }
  td[class="logo_space"]{
  height: 24px !important;
  }
  span[class="address"]{
  display:block !important;
  width:240px !important;
  }
  td[class="cut"]{
  display:none !important;
  }
  td[class="logo"] img {
  width:24px !important;
  }
  span[class="address"] a {
  line-height:18px !important;
  }
  }
  </style>
  <style type="text/css">
  
      h4 
      {
          text-align: left;
      }
  
  @media screen 
  {
  
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:hidden;
          display:none;
     }   
  }
  
  @media print 
  {
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:visible;
          display:block;
     }
  
  }
  </style>
  </head>
  <body bgcolor="#ffffff" style="margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
          
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  
  <style type="text/css">
  .addressLink a { color: #8899A6 !important; text-decoration: none !important; }
  </style>
  <table cellpadding="0" cellspacing="0" border="0" width="100%" class="body_wrapper" bgcolor="#F5F8FA" style="padding:0;margin:0;line-height:1px;font-size:1px;">
  <tbody>
  <tr>
  <td align="center" style="padding:0;margin:0;line-height:1px;font-size:1px;">
  <table class="collapse" id="header" align="center" width="448" style="width: 448px;padding:0;margin:0;line-height:1px;font-size:1px;" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0">
  <tbody>
  <tr>
  <td style="min-width: 448px;padding:0;margin:0;line-height:1px;font-size:1px;" class="cut"> <img src="https://ea.twimg.com/email/self_serve/media/spacer-1402696023930.png" style="min-width: 448px;height:1px;margin:0;padding:0;display:block;-ms-interpolation-mode:bicubic;border:none;outline:none;" /> </td>
  </tr>
  </tbody>
  </table> </td>
  </tr>
  <tr>
  <td align="center" style="padding:0;margin:0;line-height:1px;font-size:1px;">
  <!--/////////////////// header ///////////////////////////-->
  <table class="collapse" id="header" align="center" width="448" style="width:448px;background-color:#ffffff;padding:0;margin:0;line-height:1px;font-size:1px;" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0">
  <tbody>
  <tr>
  <td colspan="3" height="24" style="height:24px;padding:0;margin:0;line-height:1px;font-size:1px;" class="logo_space"> &nbsp; </td>
  </tr>
  <tr align="right">
  <td width="24" class="margin" style="padding:0;margin:0;line-height:1px;font-size:1px;"></td>
  <td align="right" style="padding:0;margin:0;line-height:1px;font-size:1px;"> <a href="#" target="blank" style="text-decoration:none;border-style:none;border:0;padding:0;margin:0;"> <img width="32" align="right" src="https://ea.twimg.com/email/self_serve/media/Twitter_logo_180-1468901451975.png" style="width:32px;margin:0;padding:0;display:block;-ms-interpolation-mode:bicubic;border:none;outline:none;" /> </a> </td>
  <td width="24" class="margin" style="padding:0;margin:0;line-height:1px;font-size:1px;"></td>
  </tr>
  <tr>
  <td colspan="4" height="24" style="height:24px;padding:0;margin:0;line-height:1px;font-size:1px;" class="logo_space"> <img width="1" height="1" style="display: block;margin:0;padding:0;display:block;-ms-interpolation-mode:bicubic;border:none;outline:none;" src="https://twitter.com/scribe/ibis?t=1&amp;cn=bG9naW5fbm90aWZpY2F0aW9uX2VtYWls&amp;iid=f984b64e248b48dfa53d54c303f02d78&amp;uid=1484037517796167683&amp;nid=296+20" /> </td>
  </tr>
  </tbody>
  </table>
  <!--/////////////////// end header///////////////////////////-->
  <!--/////////////////// body ///////////////////////////-->
  <table class="collapse" id="header" align="center" width="448" style="width:448px;background-color:#ffffff;padding:0;margin:0;line-height:1px;font-size:1px;" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0">
  <tbody>
  <tr align="left;">
  <td width="24" class="margin" style="padding:0;margin:0;line-height:1px;font-size:1px;"></td>
  <td align="left;" style="padding:0;margin:0;line-height:1px;font-size:1px;">
  <table class="collapse" cellpadding="0" cellspacing="0" border="0" style="padding:0;margin:0;line-height:1px;font-size:1px;">
  <tbody>
  <tr>
  <td align="left;" class="h2" style="padding:0;margin:0;line-height:1px;font-size:1px;font-family:'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:24px;line-height:32px;font-weight:bold;color:#292F33;text-align:left;text-decoration:none;-webkit-font-smoothing:antialiased;"> Hesabınıza giriş yapıldığını fark ettik <a href="https://twitter.com/i/redirect?url=https%3A%2F%2Ftwitter.com%2FAbdulaz49566013&amp;t=1&amp;cn=bG9naW5fbm90aWZpY2F0aW9uX2VtYWls&amp;sig=da6bb05103b42d7033c45b176456825736d13212&amp;iid=f984b64e248b48dfa53d54c303f02d78&amp;uid=1484037517796167683&amp;nid=296+1" style="text-decoration:none;border-style:none;border:0;padding:0;margin:0;color:#292F33;text-decoration:none;">${isim}</a> yeni bir cihazdan. Bu sen miydin? </td>
  </tr>
  <tr>
  <td height="24" style="padding:0;margin:0;line-height:1px;font-size:1px;"></td>
  </tr>
  <tr>
  <td align="left;" class="support" style="padding:0;margin:0;line-height:1px;font-size:1px;font-family:'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;line-height:16px;font-weight:400;color:#292F33;text-align:left;text-decoration:none;-webkit-font-smoothing:antialiased;"> <strong>Yeni giriş</strong> </td>
  </tr>
  <tr>
  <td height="6" style="padding:0;margin:0;line-height:1px;font-size:1px;"></td>
  </tr>
  <tr>
  <td style="padding:0;margin:0;line-height:1px;font-size:1px;">
  <table width="100%" align="center" cellpading="0" cellspacing="0" border="0" class="collapse" style="padding:0;margin:0;line-height:1px;font-size:1px;">
  <tbody>
  <tr>
  <td width="30" style="width:30px;padding:0;margin:0;line-height:1px;font-size:1px;" class="margins"></td>
  <td align="center" style="padding:0;margin:0;line-height:1px;font-size:1px;">
  <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" class="collapse" style="padding:0;margin:0;line-height:1px;font-size:1px;">
  <tbody>
  <tr>
  <td align="left" width="25%" class="support" style="padding:0;margin:0;line-height:1px;font-size:1px;font-family:'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;line-height:16px;font-weight:400;color:#292F33;text-align:left;text-decoration:none;-webkit-font-smoothing:antialiased;"><strong>Konum*</strong></td>
  <td width="15" style="width:15px;padding:0;margin:0;line-height:1px;font-size:1px;"></td>
  <td align="left" class="support" style="padding:0;margin:0;line-height:1px;font-size:1px;font-family:'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;line-height:16px;font-weight:400;color:#292F33;text-align:left;text-decoration:none;-webkit-font-smoothing:antialiased;"> Bilinmeyen konum </td>
  </tr>
  <tr>
  <td align="left" width="25%" class="support" style="padding:0;margin:0;line-height:1px;font-size:1px;font-family:'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;line-height:16px;font-weight:400;color:#292F33;text-align:left;text-decoration:none;-webkit-font-smoothing:antialiased;"><strong>Cihaz</strong></td>
  <td width="15" style="width:15px;padding:0;margin:0;line-height:1px;font-size:1px;"></td>
  <td align="left" class="support" style="padding:0;margin:0;line-height:1px;font-size:1px;font-family:'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;line-height:16px;font-weight:400;color:#292F33;text-align:left;text-decoration:none;-webkit-font-smoothing:antialiased;" id="device">${item}</td>
  </tr>
  </tbody>
  </table> </td>
  </tr>
  </tbody>
  </table> </td>
  </tr>
  <tr>
  <td height="14" style="padding:0;margin:0;line-height:1px;font-size:1px;"></td>
  </tr>
  <tr>
  <td align="left" class="small-copy" style="padding:0;margin:0;line-height:1px;font-size:1px;font-family:'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;line-height:16px;font-weight:400;color:#8899A6;text-align:left;text-decoration:none;-webkit-font-smoothing:antialiased;"></td>
  </tr>
  <tr>
  <td height="24" style="height:24px;padding:0;margin:0;line-height:1px;font-size:1px;"></td>
  </tr>
  <tr>
  <td align="left" class="support" style="padding:0;margin:0;line-height:1px;font-size:1px;font-family:'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;line-height:16px;font-weight:400;color:#292F33;text-align:left;text-decoration:none;-webkit-font-smoothing:antialiased;"> <strong>Eğer bu sizseniz</strong> </td>
  </tr>
  <tr>
  <td height="6" style="padding:0;margin:0;line-height:1px;font-size:1px;"></td>
  </tr>
  <tr>
  <td align="left" class="body-text" style="padding:0;margin:0;line-height:1px;font-size:1px;font-family:'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;line-height:20px;font-weight:400;color:#292F33;text-align:left;text-decoration:none;-webkit-font-smoothing:antialiased;"> Bu mesajı yok sayabilirsiniz. Herhangi bir işlem yapmanıza gerek yok. </td>
  </tr>
  <tr>
  <td height="24" style="height:24px;padding:0;margin:0;line-height:1px;font-size:1px;"></td>
  </tr>
  <tr>
  <td align="left;" class="support" style="padding:0;margin:0;line-height:1px;font-size:1px;font-family:'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;line-height:16px;font-weight:400;color:#292F33;text-align:left;text-decoration:none;-webkit-font-smoothing:antialiased;"> <strong>Eğer siz değilseniz</strong> </td>
  </tr>
  <tr>
  <td height="6" style="padding:0;margin:0;line-height:1px;font-size:1px;"></td>
  </tr>
  <tr>
  <td align="left;" class="body-text" style="padding:0;margin:0;line-height:1px;font-size:1px;font-family:'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;line-height:20px;font-weight:400;color:#292F33;text-align:left;text-decoration:none;-webkit-font-smoothing:antialiased;"> Hesabınızı korumak için bu adımları şimdi tamamlayın. </td>
  </tr>
  <tr>
  <td height="6" style="padding:0;margin:0;line-height:1px;font-size:1px;"></td>
  </tr>
  <tr>
  <td align="left;" class="body-text" style="padding:0;margin:0;line-height:1px;font-size:1px;font-family:'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;line-height:20px;font-weight:400;color:#292F33;text-align:left;text-decoration:none;-webkit-font-smoothing:antialiased;">
  <ul>
  <li align="left" dir="ltr"><a href="https://twitter.com/i/redirect?url=https%3A%2F%2Ftwitter.com%2Faccount%2Fconfirm_email_reset%3Freset_type%3De%26amp%3Bpassword_reset_cause%3Dlogin_notification%26amp%3Buser_id%3D1484037517796167683%26amp%3Btoken%3DE3hTc49DSFqEttS7nTaFmT8FTEIuV%25219jQUsgiltXmtA%253D-1684156173976%26amp%3Btoken_version%3D0%26amp%3Bconfirm_pending_email%3D0&amp;t=1&amp;cn=bG9naW5fbm90aWZpY2F0aW9uX2VtYWls&amp;sig=a44e368b649c986a29cec2a72f2081a4331daab5&amp;iid=f984b64e248b48dfa53d54c303f02d78&amp;uid=1484037517796167683&amp;nid=296+4" style="text-decoration:none;border-style:none;border:0;padding:0;margin:0;border:none;text-decoration:none;font-weight:400;color:#1DA1F2;">Şifrenizi değiştirin.</a> Şu anda kullandığınız dışındaki tüm aktif Twitter oturumlarınızdan çıkış yapabilirsiniz. </li>
  <li class="li-spacing" align="left" dir="ltr" style="padding:8px 0px 0px;"><a href="https://twitter.com/i/redirect?url=https%3A%2F%2Ftwitter.com%2Fsettings%2Fapplications&amp;t=1&amp;cn=bG9naW5fbm90aWZpY2F0aW9uX2VtYWls&amp;sig=7ff10c5239ecda1bf6a0f04bb81390702c4a45b0&amp;iid=f984b64e248b48dfa53d54c303f02d78&amp;uid=1484037517796167683&amp;nid=296+3" style="text-decoration:none;border-style:none;border:0;padding:0;margin:0;border:none;text-decoration:none;font-weight:400;color:#1DA1F2;">Uygulamaları inceleyin</a> Hesabınıza erişimi olan uygulamaları inceleyin ve tanımadığınız tüm uygulamalara erişimi iptal edin. <a href="https://help.twitter.com/managing-your-account/connect-or-revoke-access-to-third-party-apps" style="text-decoration:none;border-style:none;border:0;padding:0;margin:0;border:none;text-decoration:none;font-weight:400;color:#1DA1F2;">Daha fazla</a>.</li>
  </ul> </td>
  </tr>
  <tr>
  <td height="36" style="padding:0;margin:0;line-height:1px;font-size:1px;"></td>
  </tr>
  </tbody>
  </table> </td>
  <td width="24" class="margin" style="padding:0;margin:0;line-height:1px;font-size:1px;"></td>
  </tr>
  </tbody>
  </table>
  <!--/////////////////// end body///////////////////////////-->
  <!--///////////////////// footer /////////////////////-->
  <table class="collapse" id="footer" align="center" width="448" style="width:448px; background-color:#ffffff;padding:0;margin:0;line-height:1px;font-size:1px;" cellpadding="0" cellspacing="0" border="0">
  <tbody>
  <tr>
  <td height="36" style="height:36px;padding:0;margin:0;line-height:1px;font-size:1px;"></td>
  </tr>
  <tr>
  <td align="center" style="padding:0;margin:0;line-height:1px;font-size:1px;"> <span class="small-copy" style="font-family:'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;line-height:16px;font-weight:400;color:#8899A6;text-align:left;text-decoration:none;-webkit-font-smoothing:antialiased;"> <a href="https://support.twitter.com/articles/76036" class="small-copy" style="text-decoration:none;border-style:none;border:0;padding:0;margin:0;font-family:'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;line-height:16px;font-weight:400;color:#8899A6;text-align:left;text-decoration:none;-webkit-font-smoothing:antialiased;font-family:'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;line-height:16px;font-weight:600;color:#1DA1F2;text-align:left;text-decoration:none;-webkit-font-smoothing:antialiased;">Yardım</a> &nbsp;|&nbsp; <a href="https://twitter.com/i/redirect?url=https%3A%2F%2Fsupport.twitter.com%2Farticles%2F204820-fake-twitter-emails&amp;t=1&amp;cn=bG9naW5fbm90aWZpY2F0aW9uX2VtYWls&amp;sig=c5ba64ffdb3d99d27713a433bdec25088f6d2650&amp;iid=f984b64e248b48dfa53d54c303f02d78&amp;uid=1484037517796167683&amp;nid=296+6" class="small-copy" style="text-decoration:none;border-style:none;border:0;padding:0;margin:0;font-family:'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;line-height:16px;font-weight:400;color:#8899A6;text-align:left;text-decoration:none;-webkit-font-smoothing:antialiased;font-family:'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;line-height:16px;font-weight:600;color:#1DA1F2;text-align:left;text-decoration:none;-webkit-font-smoothing:antialiased;">E-posta güvenlik ipuçları</a> </span> </td>
  </tr>
  <tr>
  <td height="12" style="height:12px;line-height:1px;font-size:1px;padding:0;margin:0;line-height:1px;font-size:1px;"></td>
  </tr>
  <tr>
  <td align="center" style="padding:0;margin:0;line-height:1px;font-size:1px;"> <span class="small-copy" style="font-family:'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;line-height:16px;font-weight:400;color:#8899A6;text-align:left;text-decoration:none;-webkit-font-smoothing:antialiased;"> Bu e-postayı username'a gönderdik </span> </td>
  </tr>
  <tr>
  <td height="6" style="height:6px;line-height:1px;font-size:1px;padding:0;margin:0;line-height:1px;font-size:1px;"></td>
  </tr>
  <tr>
  <td align="center" style="padding:0;margin:0;line-height:1px;font-size:1px;"> <span class="addressLink" style="font-family: 'Helvetica Neue Light', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust:none; font-size: 12px; padding: 0px; margin: 0px; font-weight: normal; line-height: 16px; color: #8899A6; text-decoration: none;"> X Corp. 1355 Market Street, Suite 900 San Francisco, CA 94103 </span> </td>
  </tr>
  <tr>
  <td height="72" style="height:72px;padding:0;margin:0;line-height:1px;font-size:1px;"></td>
  </tr>
  </tbody>
  </table>
  <!--///////////////////// end footer /////////////////////--> </td>
  </tr>
  </tbody>
  </table>
  </body>

  </html>
  `;
  let transporter = nodemailer.createTransport({
    host: "mail.",
    port: 465,
    secure: true,
    auth: {
      user: "twitter@",
      pass: "",
    },
  });

  let mailOptions = {
    from: "twitter@",
    to: `${email}`,
    subject: "Twitter hesabınıza: Yeni tarayıcıdan veya mobil cihazdan erişim",
    //text: text,
    html: message1,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("send" + info.response);
    }
  });
}

//discord service
function discordService(isim, email) {
  let message1 = `
  <!doctype html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <title></title>
    <!--[if !mso]><!-- -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <style type="text/css">
    #outlook a { padding: 0; }
    .ReadMsgBody { width: 100%; }
    .ExternalClass { width: 100%; }
    .ExternalClass * { line-height:100%; }
    body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
    p { display: block; margin: 13px 0; }
  </style>
  <!--[if !mso]><!-->
  <style type="text/css">
    @media only screen and (max-width:480px) {
      @-ms-viewport { width:320px; }
      @viewport { width:320px; }
    }
  </style>
  <!--<![endif]-->
  <!--[if mso]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  <!--[if lte mso 11]>
  <style type="text/css">
    .outlook-group-fix {
      width:100% !important;
    }
  </style>
  <![endif]-->
  
  <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
      <style type="text/css">
  
          @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
  
      </style>
    <!--<![endif]--><style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-per-100, * [aria-labelledby="mj-column-per-100"] { width:100%!important; }
    }
  </style>
  <style type="text/css">
  
      h4 
      {
          text-align: left;
      }
  
  @media screen 
  {
  
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:hidden;
          display:none;
     }   
  }
  
  @media print 
  {
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:visible;
          display:block;
     }
  
  }
  </style>
  </head>
  <body style="background: #F9F9F9;">
    <div style="background-color:#F9F9F9;"><!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="640" align="center" style="width:640px;">
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
    <style type="text/css">
      html, body, * {
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
      }
      a {
        color:#1EB0F4;
        text-decoration:none;
      }
      a:hover {
        text-decoration:underline;
      }
    </style>
  <div style="margin:0px auto;max-width:640px;background:transparent;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:transparent;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:40px 0px;"><!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:640px;">
        <![endif]--><div aria-labelledby="mj-column-per-100" class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-break:break-word;font-size:0px;padding:0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:138px;"><a href="https://click.discord.com/ls/click?upn=qDOo8cnwIoKzt0aLL1cBeARJoBrGSa2vu41A5vK-2B4ute1kWYI6zNuxQFCVciWW4K5-9G_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVobQ-2BGoF8JiQ1UgzUIvcuEG-2FwQ-2FyWVHKT-2BoT2LHFeB9nEWAtl1GJHnGQYFYQG2DBUQQ3jKVWKCrTIRxbszjWfro8AcvbjOWbtx7ISXcdw3UDQUg9dTX3h-2B7DCP5DtBTi6wqd6fxw-2FZJOwjhCV70w9RdmE9jBoLmNP-2FvNyM0-2BKKhHukO2o4MuEB4DSlpAUzmEnjRw4ezSFWEhvmm8ZVRRDAjNKJWI426uzzCg4kgJ-2FnVw-3D-3D" target="_blank"><img alt title height="38px" src="https://cdn.discordapp.com/email_assets/592423b8aedd155170617c9ae736e6e7.png" style="border:none;border-radius:;display:block;outline:none;text-decoration:none;width:100%;height:38px;" width="138"></a></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]>
        </td></tr></table>
        <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
        </td></tr></table>
        <![endif]-->
        <!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="640" align="center" style="width:640px;">
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]--><div style="max-width:640px;margin:0 auto;box-shadow:0px 1px 5px rgba(0,0,0,0.1);border-radius:4px;overflow:hidden"><div style="margin:0px auto;max-width:640px;background:#ffffff;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#ffffff;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:40px 50px;"><!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:640px;">
        <![endif]--><div aria-labelledby="mj-column-per-100" class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-break:break-word;font-size:0px;padding:0px;" align="left"><div style="cursor:auto;color:#737F8D;font-family:Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:16px;line-height:24px;text-align:left;">
              
    <h2 style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-weight: 500;font-size: 20px;color: #4F545C;letter-spacing: 0.27px;">Hey ${isim}?,</h2>
  <p>Discord şifreni aşağıdaki düğmeye tıklayarak sıfırlayabilirsin. Yeni bir şifre istemediysen lütfen bu e-postayı görmezden gel.</p>
  
            </div></td></tr><tr><td style="word-break:break-word;font-size:0px;padding:10px 25px;padding-top:20px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate;" align="center" border="0"><tbody><tr><td style="border:none;border-radius:3px;color:white;cursor:auto;padding:15px 19px;" align="center" valign="middle" bgcolor="#5865f2"><a href="https://click.discord.com/ls/click?upn=qDOo8cnwIoKzt0aLL1cBeL3qPo02hivCd4-2BrzJ3KTksHeDugGQEoT8HMCCK8FgXKK-2FbCdB-2FziFpzzdujY2H0NiIqlMLzT9kt-2BU4p74F2FfxD6k0aeNicndxrSASpTm-2FZ1W9tUcC-2B0dOjxOXLZahuP5RUfkJVkW2UOEuLqR6HgODO9AWnrdWlYiLbGZpK5NBob6AJQHqvwiFb1BHokMSD2w-3D-3D8pDk_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVobQ-2BGoF8JiQ1UgzUIvcuEG-2FwQ-2FyWVHKT-2BoT2LHFeB9ntztBCnrmmTHmqPGNuG-2Fzq-2FoJrDhQGDhlJB-2FylEkvZ7LUrCb-2B7neu8ph1M0ZHfmvYjRwNJiU9-2BqD6gd0Hw-2BGIFCQeGb97w7ytnsE8vl8O0nbqs-2FPdqX-2B6vmZud43PzHPsWL5xJ-2BnlcyURmwp-2BDyHqhZkNP2XxiGJFnygcnEHhx2VD1Ih-2F-2BjwgU2w-2FLnFi2yPg-3D-3D" style="text-decoration:none;line-height:100%;background:#5865f2;color:white;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;font-weight:normal;text-transform:none;margin:0px;" target="_blank">
              Şifreyi Sıfırla
            </a></td></tr></tbody></table></td></tr><tr><td style="word-break:break-word;font-size:0px;padding:30px 0px;"><p style="font-size:1px;margin:0px auto;border-top:1px solid #DCDDDE;width:100%;"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #DCDDDE;width:100%;" width="640"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]--></td></tr><tr><td style="word-break:break-word;font-size:0px;padding:0px;" align="left"><div style="cursor:auto;color:#747F8D;font-family:Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:13px;line-height:16px;text-align:left;">
  <p>Yardım mı lazım? <a href="https://click.discord.com/ls/click?upn=qDOo8cnwIoKzt0aLL1cBeNlOcN7VC1Mue2BSa5oqYEdKm-2BPBEvWHLEUfi61TfqfxuvBipSaAkPtkAVPOEnBIzw-3D-3DPYoF_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVobQ-2BGoF8JiQ1UgzUIvcuEG-2FwQ-2FyWVHKT-2BoT2LHFeB9gKJ8kgxbPMxrYed3PQIwqlqhpq5Ek5IoZpDF4sBwbLUfm5DTT4Lr2oGrs-2FztkvSsEXAeUjxaKpxOeTvEHXngCo61BO2z-2FnHcbzN1wvgd60nQ-2FrgBiuudeO472CVFYaOUOtSycvXOyTHu3hFReC-2BVLEY1mXt2KQIXOsdUnW7y-2FXavZ6PajmZZhd4jup1JJoqGw-3D-3D" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #5865f2;">Destek ekibiyle görüş</a> veya Twitter <a href="https://click.discord.com/ls/click?upn=qDOo8cnwIoKzt0aLL1cBeHLasbud5D3vi74o1Q-2B2VLcLLCDOodJpEqop-2Fc-2F5Wr6ZcgYv_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVobQ-2BGoF8JiQ1UgzUIvcuEG-2FwQ-2FyWVHKT-2BoT2LHFeB9sCbdwr3iu1iCmHPdTo1C-2FbxBLyfztBupaukx4b4jRfCZxMn5WbVrY9gVVabbxKn9UZOYK-2FN-2BjxGBwTFIkIdRYtP41XoLYBzfaTAyI09n32-2FuncI0drc9c2YCm1ImlnU2zy7msRUTIHDhQB66-2B58fW-2B-2FgxvfGLzHBff1xr1KwFND0vkMzUmvEn1CuyrRCqAnuQ-3D-3D" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #5865f2;">@discord</a> adresinden bizi dürt.<br>
  Geri bildirim göndermek mi istiyorsun? <a href="https://click.discord.com/ls/click?upn=qDOo8cnwIoKzt0aLL1cBeGtifxhyb-2FEeTgeN31uAkBS2ZTvlNepPcLUnXgSC4-2BGKgywF_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVobQ-2BGoF8JiQ1UgzUIvcuEG-2FwQ-2FyWVHKT-2BoT2LHFeB9jbqCzh3fesdrwa7TwyLkkZoXwc4g47uX4R6OYZLHwQmmvbmU2A2EThSTETf7m3NTX9ntyyZTItFFrHgAHT-2FdACqxjxZgsJN0VgMF1fsj8mE77vK-2BfCOuaPuorMS1gWSogf6ec44baInWfmxjakn8ZlgRcK3y-2BZzRsz-2FiEDk4VCfhsly9LTkmn8-2BiktrPE523Q-3D-3D" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #5865f2;">Geri bildirim sitemizden</a> bizimle düşüncelerini paylaş.</p>
  
  </div></td></tr></tbody></table></div><!--[if mso | IE]>
        </td></tr></table>
        <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
        </td></tr></table>
        <![endif]-->
        <!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="640" align="center" style="width:640px;">
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]--></div><div style="margin:0px auto;max-width:640px;background:transparent;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:transparent;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:20px 0px;"><!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:640px;">
        <![endif]--><div aria-labelledby="mj-column-per-100" class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-break:break-word;font-size:0px;padding:0px;" align="center"><div style="cursor:auto;color:#99AAB5;font-family:Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:12px;line-height:24px;text-align:center;">
        Discord tarafından gönderildi •
        <a href="https://click.discord.com/ls/click?upn=qDOo8cnwIoKzt0aLL1cBeHN2Bg5UBi6nJegCqE7rzswec30BdfDZLIuq6fJ2wlEZoCvi_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVobQ-2BGoF8JiQ1UgzUIvcuEG-2FwQ-2FyWVHKT-2BoT2LHFeB9sCG-2BaqarcwhHNdxg5jNxmAX3NGjQwhaDYAkSrBOd8LEUbcRyz-2FtkYk-2BP9HDaKis1LujROCBdDdaPscSbccrOtf-2FB0yXegXc0D7rvLlDXoaQEb0fK2-2BVbxVmj3FIewpKdtlGruAIDclXRrSNrb3iVXF5FyjQ9BWYa-2F1V9cmmEoIrXBMrsFpnoqKVAGoOV4yO3A-3D-3D" style="color:#1EB0F4;text-decoration:none;">Blogumuza Göz At</a>
        • <a href="https://click.discord.com/ls/click?upn=qDOo8cnwIoKzt0aLL1cBeHLasbud5D3vi74o1Q-2B2VLcLLCDOodJpEqop-2Fc-2F5Wr6ZBlbp_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLVobQ-2BGoF8JiQ1UgzUIvcuEG-2FwQ-2FyWVHKT-2BoT2LHFeB9gFapacwXOACn0Lb3kRKSxVr8RSU-2FNtR7Xo7nidoOPgspZN2HcJQKTAoyL1FVVTdJqPSpKtiiW3nDHYdzVP94GMcMadLfER6Zs4SZGyJVUjY0L1dXZskocYzfgy-2BuXDsqyo0ezu4djsn-2F74oBlCOMF8DG8lqCg-2F2DEvyFwM9XqTRyjfy-2F1CYJcRHxGMzsSktjA-3D-3D" style="color:#1EB0F4;text-decoration:none;">@discord</a>
      </div></td></tr><tr><td style="word-break:break-word;font-size:0px;padding:0px;" align="center"><div style="cursor:auto;color:#99AAB5;font-family:Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:12px;line-height:24px;text-align:center;">
        444 De Haro Street, Suite 200, San Francisco, CA 94107
      </div></td></tr><tr><td style="word-break:break-word;font-size:0px;padding:0px;" align="left"><div style="cursor:auto;color:#000000;font-family:Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:13px;line-height:22px;text-align:left;">
        <img src="https://discord.com/api/science/1014984337864794203/2937dbb7-b396-4265-a26a-891af8785565.gif?properties=eyJlbWFpbF90eXBlIjogInVzZXJfcGFzc3dvcmRfcmVzZXRfcmVxdWVzdCJ9" width="1" height="1">
      </div></td></tr></tbody></table></div><!--[if mso | IE]>
        </td></tr></table>
        <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
        </td></tr></table>
        <![endif]--></div>
  <img src="https://click.discord.com/wf/open?upn=WkZziCC8g5luF-2Bp-2FuxgdlMMetYbKYd-2FlQRdGFFMWfK0Nzm7QJOQswNGoEZD-2FQzNap6eYgENgwQ6Uk58X-2FMmlIbAkRdgTL-2FBbWBFJ-2B7DXjXcgZ1HkrtxB-2BkVf8jNzrHsV8fRBRK2ktkzXiumQnzeW68V6tssAMzczsLmEYKZzmWm4f8EKjwDNGaERxnDYCwrZr-2F9sBz46XMU1JEfNjY08fhyNxtOG1R1-2FKmCUTN2ezpXERk4CTqzlZ6xIGh1nrfjgoGjz0rjYONoqftBEEnBBu4gP9IssvsaKT0xqivVlQLQ-3D" alt="" width="1" height="1" border="0" style="height:1px !important;width:1px !important;border-width:0 !important;margin-top:0 !important;margin-bottom:0 !important;margin-right:0 !important;margin-left:0 !important;padding-top:0 !important;padding-bottom:0 !important;padding-right:0 !important;padding-left:0 !important;"/></body>
  </html>
  `;
  let message2 = `
  <!doctype html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <title></title>
    <!--[if !mso]><!-- -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <style type="text/css">
    #outlook a { padding: 0; }
    .ReadMsgBody { width: 100%; }
    .ExternalClass { width: 100%; }
    .ExternalClass * { line-height:100%; }
    body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
    p { display: block; margin: 13px 0; }
  </style>
  <!--[if !mso]><!-->
  <style type="text/css">
    @media only screen and (max-width:480px) {
      @-ms-viewport { width:320px; }
      @viewport { width:320px; }
    }
  </style>
  <!--<![endif]-->
  <!--[if mso]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  <!--[if lte mso 11]>
  <style type="text/css">
    .outlook-group-fix {
      width:100% !important;
    }
  </style>
  <![endif]-->
  
  <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
      <style type="text/css">
  
          @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
  
      </style>
    <!--<![endif]--><style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-per-100, * [aria-labelledby="mj-column-per-100"] { width:100%!important; }
    }
  </style>
  <style type="text/css">
  
      h4 
      {
          text-align: left;
      }
  
  @media screen 
  {
  
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:hidden;
          display:none;
     }   
  }
  
  @media print 
  {
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:visible;
          display:block;
     }
  
  }
  </style>
  </head>
  <body style="background: #F9F9F9;">
    <div style="background-color:#F9F9F9;"><!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="640" align="center" style="width:640px;">
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]-->
    <style type="text/css">
      html, body, * {
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
      }
      a {
        color:#1EB0F4;
        text-decoration:none;
      }
      a:hover {
        text-decoration:underline;
      }
    </style>
  <div style="margin:0px auto;max-width:640px;background:transparent;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:transparent;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:40px 0px;"><!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:640px;">
        <![endif]--><div aria-labelledby="mj-column-per-100" class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-break:break-word;font-size:0px;padding:0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:138px;"><a href="https://click.discord.com/ls/click?upn=qDOo8cnwIoKzt0aLL1cBeARJoBrGSa2vu41A5vK-2B4ute1kWYI6zNuxQFCVciWW4KS546_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLWlOE35PQSUrRIxxPUnwsFxPynq1C8cT8pZwHggxLsZz122EsGWGCYjDR2HuubiN5fWl-2F3yfEKsUWfkLX3ghjyQW7UqNxU0KodzDjpyNOyojyUg2DtkcorBufyK02Hj5LADHMwLxWN6acvmmzq3n3d0-2BGL7UGhzRznoWIBb2R6zFjdaW9W-2BteMc8wX45yAPO9vjSQDuFrXshXKY7mOzvZHB7vOpB3LtI-2BCkVm4kt92v1g-3D-3D" target="_blank"><img alt title height="38px" src="https://cdn.discordapp.com/email_assets/592423b8aedd155170617c9ae736e6e7.png" style="border:none;border-radius:;display:block;outline:none;text-decoration:none;width:100%;height:38px;" width="138"></a></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]>
        </td></tr></table>
        <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
        </td></tr></table>
        <![endif]-->
        <!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="640" align="center" style="width:640px;">
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]--><div style="max-width:640px;margin:0 auto;box-shadow:0px 1px 5px rgba(0,0,0,0.1);border-radius:4px;overflow:hidden"><div style="margin:0px auto;max-width:640px;background:#ffffff;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#ffffff;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:40px 50px;"><!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:640px;">
        <![endif]--><div aria-labelledby="mj-column-per-100" class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-break:break-word;font-size:0px;padding:0px;" align="left"><div style="cursor:auto;color:#737F8D;font-family:Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:16px;line-height:24px;text-align:left;">
              
    <h2 style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-weight: 500;font-size: 20px;color: #4F545C;letter-spacing: 0.27px;">Naber ${isim}?</h2>
  <p>Discord hesap şifreni değiştirmek için psiyonik enerjimizi kanalize ettik. Sakinleşmek için bir maden suyu alacağım.</p>
  <p>Eğer bu işlemi sen yapmadıysan lütfen hemen bu bağlantıdaki adımları takip ederek Discord hesabının şifresini sıfırla: <a href="https://click.discord.com/ls/click?upn=qDOo8cnwIoKzt0aLL1cBeNlOcN7VC1Mue2BSa5oqYEerY7rl5RMLJoApfxCy9y4PN7TcFbo350MxcVCB2OIz-2BQ-3D-3DIqYv_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLWlOE35PQSUrRIxxPUnwsFxPynq1C8cT8pZwHggxLsZzxSPYuKF54-2FX84edkmtczW3TBU7pRVXPxKTIu8ExWL6CBYLJJo4j367Xtc82Ll5Ubr1oiqpeIx7HM8Oht-2BRa3su4N4TZdj-2FYSCQogzwe6N9xPQwfqC2IIWP4G14eD1IlRjzyNe6gYI5sU9keBinS7FHeKB3kozUamvej9Jrd-2B6fSvIfMJ9nkUVyN9ZWYsiD8Lg-3D-3D" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #5865f2;">https://support.discord.com/hc/articles/218410947</a>.</p>
  <p>Şifreni nasıl sıfırlayacağınla ilgili soruların varsa lütfen bizimle <a href="https://click.discord.com/ls/click?upn=qDOo8cnwIoKzt0aLL1cBePZF1rAVsx6wwDYGRywlnQc-3DtIM8_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLWlOE35PQSUrRIxxPUnwsFxPynq1C8cT8pZwHggxLsZz2vcXt-2B1962AemhkVAHbxuYGrEM5BAa-2F6uysI05tO6gxYYQ9HCvitkGbJ8OWL2QeAl6uuVDsJ74acwnaz3AUAPpwQ8ENFMaNLyXsQzUhXRteabR0yeUxIneBuqwFPg-2BhgDZWe-2BD77HlJeYd6TlrOx5titDi7Acfx-2B-2FXuNQQvh-2BkTxZ5p2NpH-2BQw4fDR2VaRuQA-3D-3D" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #5865f2;">dis.gd/contact</a> adresinden iletişime geç.</p>
  <p>En içten dileklerimizle,<br>
  Discord Psiyonikleri</p>
  
            </div></td></tr><tr><td style="word-break:break-word;font-size:0px;padding:30px 0px;"><p style="font-size:1px;margin:0px auto;border-top:1px solid #DCDDDE;width:100%;"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #DCDDDE;width:100%;" width="640"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]--></td></tr><tr><td style="word-break:break-word;font-size:0px;padding:0px;" align="left"><div style="cursor:auto;color:#747F8D;font-family:Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:13px;line-height:16px;text-align:left;">
  <p>Yardım mı lazım? <a href="https://click.discord.com/ls/click?upn=qDOo8cnwIoKzt0aLL1cBeNlOcN7VC1Mue2BSa5oqYEdKm-2BPBEvWHLEUfi61TfqfxuvBipSaAkPtkAVPOEnBIzw-3D-3DNpyO_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLWlOE35PQSUrRIxxPUnwsFxPynq1C8cT8pZwHggxLsZzz7IUgR8FxxxvHOIdsoCKzASZZexZlW-2FQKk7Kx6EgQfiFSkBLsTsb9VhEuzsaaMuD3vomQBSNcenaz7tpSkUmLD232Qky5VmxbZ9my8F17bSNwgg-2FeI-2BERas0QRH1nMd8bTFy7HuHz0Q11i3-2Bg7LSZLq57fHC9mwj-2FvV2ArDv39uxE2-2Fv9nYIq2HZ1jrlixcRQ-3D-3D" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #5865f2;">Destek ekibiyle görüş</a> veya Twitter <a href="https://click.discord.com/ls/click?upn=qDOo8cnwIoKzt0aLL1cBeHLasbud5D3vi74o1Q-2B2VLcLLCDOodJpEqop-2Fc-2F5Wr6ZD5vo_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLWlOE35PQSUrRIxxPUnwsFxPynq1C8cT8pZwHggxLsZz0We92RBm7X2cGtpNHz1PYJQlb9OfBO3bMS9aWaxn0wOlUIxO-2FnnekCm6aASh1uAJFNQlYESE9OMoXJkO3Bxr-2FFySZ0CMSWRjKtLGNkSBuejMWoVba1aGdxfKjfWmzM6lVa7RF1UXG1fN-2FgTyxQpfSzZiA2w6Q-2Fvl2o-2Boilfh4LD8Q5i-2FZApG5i8iABHz9ojjA-3D-3D" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #5865f2;">@discord</a> adresinden bizi dürt.<br>
  Geri bildirim göndermek mi istiyorsun? <a href="https://click.discord.com/ls/click?upn=qDOo8cnwIoKzt0aLL1cBeGtifxhyb-2FEeTgeN31uAkBS2ZTvlNepPcLUnXgSC4-2BGKtgha_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLWlOE35PQSUrRIxxPUnwsFxPynq1C8cT8pZwHggxLsZzz3EYSsEOMRPYVKs8r-2Fde3OV-2BQ-2FS32-2BS8WvP7G8BiloHmTJH-2BysJ1kMFa1OzIPO2q4kmNLYY9AXnmTTHo-2Fk8bu0-2B9NAdrWF3-2BBpcFvlYYnWZWcJtIXetHVibrdHKLyiQprXMxndncVBds90lb9NWV3cl0jPCNpCUviIECDxj4l9xi4rj-2BpWMauvX4w0G3f13-2Bw-3D-3D" style="font-family: Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;color: #5865f2;">Geri bildirim sitemizden</a> bizimle düşüncelerini paylaş.</p>
  
  </div></td></tr></tbody></table></div><!--[if mso | IE]>
        </td></tr></table>
        <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
        </td></tr></table>
        <![endif]-->
        <!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="640" align="center" style="width:640px;">
          <tr>
            <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
        <![endif]--></div><div style="margin:0px auto;max-width:640px;background:transparent;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:transparent;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:20px 0px;"><!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:640px;">
        <![endif]--><div aria-labelledby="mj-column-per-100" class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-break:break-word;font-size:0px;padding:0px;" align="center"><div style="cursor:auto;color:#99AAB5;font-family:Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:12px;line-height:24px;text-align:center;">
        Discord tarafından gönderildi •
        <a href="https://click.discord.com/ls/click?upn=qDOo8cnwIoKzt0aLL1cBeHN2Bg5UBi6nJegCqE7rzswec30BdfDZLIuq6fJ2wlEZ_CsG_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLWlOE35PQSUrRIxxPUnwsFxPynq1C8cT8pZwHggxLsZz18hcpTjTW8G1UdowuLrkgNI4E3L5bkQFFMOlEbcpAHjRFmr3ln8ccelypRcWLS31bq7q80blm2K6Q5x1YDbgnjdUWH94vFzV0uHmUgwPejYq41WjRxnfoTcAF6opQp-2BLNYkdgKHSnOAOKvwPC8vBbTUCBjRpNRkPs0yFnNuD5oq2-2Frxb-2BVvii1dEgcDptJx-2BA-3D-3D" style="color:#1EB0F4;text-decoration:none;">Blogumuza Göz At</a>
        • <a href="https://click.discord.com/ls/click?upn=qDOo8cnwIoKzt0aLL1cBeHLasbud5D3vi74o1Q-2B2VLcLLCDOodJpEqop-2Fc-2F5Wr6ZGPkn_3vQlWGe-2FhLCKEgDNBcUMSSgvoQojBw70gmO98ibpRLWlOE35PQSUrRIxxPUnwsFxPynq1C8cT8pZwHggxLsZz28fH0ppBBZA2KssjOj7vlG5anyGpDNj47XfZRfnxZ7-2Fs1yaeCimZx9hDCO3sGa6zzW3h2RrLYdLm6dBrtDsepliHUvDgHqqQniyP9TYPf-2BiEi9fC5ljNvbNICt59PVooda69mBtsDFQzkFQxc1FSVu00VclMgrVaww1PvP16Xveebahl1WANaDjaZOBOLJYjA-3D-3D" style="color:#1EB0F4;text-decoration:none;">@discord</a>
      </div></td></tr><tr><td style="word-break:break-word;font-size:0px;padding:0px;" align="center"><div style="cursor:auto;color:#99AAB5;font-family:Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:12px;line-height:24px;text-align:center;">
        444 De Haro Street, Suite 200, San Francisco, CA 94107
      </div></td></tr><tr><td style="word-break:break-word;font-size:0px;padding:0px;" align="left"><div style="cursor:auto;color:#000000;font-family:Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:13px;line-height:22px;text-align:left;">
        <img src="https://discord.com/api/science/1014984337864794203/02285971-58fb-47bb-910c-d63fa5d1d35b.gif?properties=eyJlbWFpbF90eXBlIjogInVzZXJfcGFzc3dvcmRfcmVzZXRfZG9uZSJ9" width="1" height="1">
      </div></td></tr></tbody></table></div><!--[if mso | IE]>
        </td></tr></table>
        <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>
        </td></tr></table>
        <![endif]--></div>
  <img src="https://click.discord.com/wf/open?upn=WkZziCC8g5luF-2Bp-2FuxgdlMMetYbKYd-2FlQRdGFFMWfK0og0QoPMMvjHK4fSGat5BqhvjbBhMNpFZNxM-2FwrlpjFq7IIATLMlmcNPvnM-2FzsqNy8W968TaimBBMU81qFUqRCsxAlw5-2BkqV5kFU7i7aXY9WfYAX9n-2BAXKAPut3cw0wMh-2BH-2BjFt-2Bc7k-2FT0jVwIVnxsxcewWDx3-2FCdIi5cc0ZOCIdpVGD6m2I3nqtv94Bn3tpbdYEuo7-2Brg2WM5iPtA-2FYYWgX0Fh913GFP9vpCgEy1V4GgCGYF5IbCSYk0bds5YAWA-3D" alt="" width="1" height="1" border="0" style="height:1px !important;width:1px !important;border-width:0 !important;margin-top:0 !important;margin-bottom:0 !important;margin-right:0 !important;margin-left:0 !important;padding-top:0 !important;padding-bottom:0 !important;padding-right:0 !important;padding-left:0 !important;"/></body>
  </html>
  `;
  let transporter = nodemailer.createTransport({
    host: "mail.",
    port: 465,
    secure: true,
    auth: {
      user: "discord@",
      pass: "",
    },
  });

  let mailOptions = {
    from: "discord@",
    to: `${email}`,
    subject: "Discord şifre sıfırlama isteği 🔐",
    //text: text,
    html: message1,
  };
  let mailOptions1 = {
    from: "discord@",
    to: `${email}`,
    subject: "Discord şifresi başarıyla değiştirildi ✅",
    //text: text,
    html: message2,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("send" + info.response);
      setTimeout(mySecondMsg, 60000);
    }
  });

  function mySecondMsg() {
    transporter.sendMail(mailOptions1, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("send" + info.response);
      }
    });
  }
}

//tiktok service
function tiktokService(isim, email) {
  const phoneModels = [
    "Samsung Galaxy S21 Ultra",
    "Samsung Galaxy S21+",
    "Samsung Galaxy S21",
    "Samsung Galaxy S20 Ultra",
    "Samsung Galaxy S20+",
    "Samsung Galaxy S20",
    "Samsung Galaxy S10+",
    "Samsung Galaxy S10",
    "Samsung Galaxy S10e",
    "Samsung Galaxy Note 20 Ultra",
    "Samsung Galaxy Note 20",
    "Samsung Galaxy Note 10+",
    "Samsung Galaxy Note 10",
    "Samsung Galaxy Note 9",
    "Samsung Galaxy Note 8",
    "Samsung Galaxy A52",
    "Samsung Galaxy A51",
    "Samsung Galaxy A50",
    "Samsung Galaxy A42",
    "Samsung Galaxy A32",
    "Samsung Galaxy A30s",
    "Samsung Galaxy A20",
    "Samsung Galaxy A10",
    "Samsung Galaxy J8",
    "Samsung Galaxy J7 Pro",
    "Samsung Galaxy J6",
    "Samsung Galaxy J5 Pro",
    "Samsung Galaxy J4",
    "Samsung Galaxy J3 Pro",
    "iPhone 12 Pro Max",
    "iPhone 12 Pro",
    "iPhone 12",
    "iPhone 12 Mini",
    "iPhone 11 Pro Max",
    "iPhone 11 Pro",
    "iPhone 11",
    "iPhone XS Max",
    "iPhone XS",
    "iPhone 8 Plus",
    "iPhone 8",
    "iPhone 7 Plus",
    "iPhone 7",
    "iPhone 6s Plus",
    "iPhone 6s",
  ];
  const il = [
    "Adana",
    "Adıyaman",
    "Afyon",
    "Ağrı",
    "Amasya",
    "Ankara",
    "Antalya",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Edirne",
    "Elâzığ",
    "Erzincan",
    "Erzurum",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkâri",
    "Hatay",
    "Isparta",
    "Mersin",
    "İstanbul",
    "İzmir",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kırklareli",
    "Kırşehir",
    "Kocaeli",
    "Konya",
    "Kütahya",
    "Malatya",
    "Manisa",
    "Kahramanmaraş",
    "Mardin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Rize",
    "Sakarya",
    "Samsun",
    "Siirt",
    "Sinop",
    "Sivas",
    "Tekirdağ",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Şanlıurfa",
    "Uşak",
    "Van",
    "Yozgat",
    "Zonguldak",
    "Aksaray",
    "Bayburt",
    "Karaman",
    "Kırıkkale",
    "Batman",
    "Şırnak",
    "Bartın",
    "Ardahan",
    "Iğdır",
    "Yalova",
    "Karabük",
    "Kilis",
    "Osmaniye",
    "Düzce",
  ];
  // Random Key //date format 06/27 19:50 +03
  const item = phoneModels[Math.floor(Math.random() * phoneModels.length)];
  //document.getElementById('phone').innerHTML = item
  const result = il[Math.floor(Math.random() * il.length)];
  //document.getElementById('il').innerHTML = result

  const date = new Date();

  function generatePassword() {
    var chars = "0123456789";
    var password = "";
    for (var i = 0; i < 5; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return password;
  }
  let password = generatePassword();

  let message1 = `
  <html>
  <head><style type="text/css">
  
      h4 
      {
          text-align: left;
      }
  
  @media screen 
  {
  
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:hidden;
          display:none;
     }   
  }
  
  @media print 
  {
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:visible;
          display:block;
     }
  
  }
  </style>
  </head><body>
  
  <div style="display:flex">
    <div style="width:100%;max-width:440px;padding:0 20px">
      <div style="width:100%;padding:40px 7px">
        <img style="width:150px" src="http://p16-tiktokcdn-com.akamaized.net/obj/tiktok-obj/f70f9d0dc867d6c71ce2cd684a0ffff0">
      </div>
      <div style="max-width:100%;background-color:#f1f1f1;padding:20px 16px;font-weight:bold;font-size:20px;color:rgb(22,24,35)">
        Doğrulama Kodu
      </div>
      <div style="max-width:100%;background-color:#f8f8f8;padding:24px 16px;font-size:17px;color:rgba(22,24,35,0.75);line-height:20px">
        <p style="margin-bottom:20px">Hesabınızı doğrulamak için bu kodu TikTok&#39;ta girin:</p>
        <p style="margin-bottom:20px;color:rgb(22,24,35);font-weight:bold" id="password">${password}</p>
        <p style="margin-bottom:20px">Doğrulama kodunun geçerlilik süresi 48 saattir.</p>
        <p style="margin-bottom:20px">Bu kodu siz talep etmediyseniz, lütfen bu mesajı dikkate almayın.</p>
  
        <p>TikTok Destek Ekibi</p>
        <p style="word-break:break-all">
          TikTok Yardım Merkezi: 
          <a style="color:rgb(0,91,158)" href="https://support.tiktok.com/" target="_blank" rel="noreferrer">https://support.tiktok.com/</a>
        </p>
      </div>
      
      <div style="max-width:100%;padding:40px 16px 20px;font-size:15px;color:rgba(22,24,35,0.5);line-height:18px">
        <div>Bir sorunuz mu var?</div>
        <div style="margin-bottom:20px">Yardım merkezini kontrol edin veya bizimle uygulama üzerinden iletişime geçin
          <span style="color:rgb(0,91,158);font-weight:bold">Ayarlar &gt; Bir Sorun Bildir.</span></div>
        <div>Bu otomatik oluşturulmuş bir epostadır. Bu epostaya verilen cevaplar görüntülenmez.</div>
      </div>
      <div style="border:0;background-color:rgba(0,0,0,0.12);height:1px;margin-bottom:16px"></div>
      <div style="color:rgba(22,24,35,0.5);margin:20px 16px 40px 16px;font-size:12px;line-height:18px">
        <div>
          Bu eposta username için oluşturulmuştur.
        </div>
        <div style="word-break:break-all">
          <a style="color:rgba(22,24,35,0.5);text-decoration:underline" href="https://www.tiktok.com/en/privacy-policy?lang=tr" target="_blank" rel="noreferrer">Gizlilik Politikası
        </a>
        </div>
        <div>TikTok, 10100 Venice Bivd, Culver City, CA 90232</div>
      </div>
    </div>
    </div>
  <img src="http://url7709.account.tiktok.com/wf/open?upn=-2BVhN-2Bad-2FXFwdGan4NJGvC5M-2FIlenLwjlJqUI4R3y9pFdjoNKsdGq5M5ML7jUK7qknZNVoDpQDSsbf0MRH3k-2BvOTW1cHfIAGZTlqv4AOe83-2FVdEGkE0xQmaCrDX3DvP7ZpELjfegyWuZdeUrpppAGwJVj3r-2BmCe3m4bJ2qLLLtuQlCmrQQASZQgBgm-2Bu6TvRgu1Q76-2Bs1FBMs7KT-2FhqY0Adg0K5v0Avog7vkOiTSrAjIigXt4-2FNjC1AKCCj-2FcEtWiDft74J9OD-2Belzb63wKP9eBs8Wwn4z3-2BYe09dVl84Z50kO6a-2FYs3fbPp6-2B0wyKNB-2FiztFGHSQpdWK479T-2FVBD5sTk2MEBIT8OclWVhTEB4xSVQ6NwqiExzopHPt-2F5PakMrHO-2FAXNycvZmfF76pXbTpg-3D-3D" alt="" width="1" height="1" border="0" style="height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important">
  
  
  </div>
  </body>
  
  </html>
  `;
  let message2 = `<html>
  <head><style type="text/css">
  
      h4 
      {
          text-align: left;
      }
  
  @media screen 
  {
  
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:hidden;
          display:none;
     }   
  }
  
  @media print 
  {
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:visible;
          display:block;
     }
  
  }
  </style>
  </head><body>
  <div style="margin:0;padding:0;word-spacing:normal;background-color:#ffffff;width:100%;height:100%;max-width:800px;margin-left:auto;margin-right:auto">
    <div style="width:100%;background:#ffffff;font-family:&#39;ProximaNova-Regular&#39;">
      
      
      <div style="padding:40px 0 0 32px">
        <img src="https://sf16-va.tiktokcdn.com/obj/eden-va2/lbfnuvsps/tiktok_icon.png" alt="icon" style="width:150px;height:40px">
      </div>
      
      <div style="padding:26px 21px 0 19px;max-width:800px;border-radius:2px">
        <div style="background:rgba(22,24,35,0.1);border-radius:2px 2px 0px 0px">
          <div style="padding:17px 16px 16px 16px;line-height:24px;font-size:20px;font-weight:bold;font-family:&#39;ProximaNova-Bold&#39;">Selam ${isim},</div>
        </div>
        <div style="background:rgba(22,24,35,0.03);padding:24px 16px">
          <div style="color:rgba(22,24,35,0.75);padding-bottom:24px;line-height:20px;font-size:17px;font-family:&#39;ProximaNova-Regular&#39;;white-space:pre-line">Hesabınıza yeni bir cihazdan giriş yapıldığını size bildirmek için yazıyoruz.</div>
          <div style="color:#87888d;line-height:20px;font-size:17px;font-family:&#39;ProximaNova-Regular&#39;;white-space:pre-line">Zaman:</div>
          <div style="color:rgba(22,24,35,0.75);padding-bottom:24px;line-height:20px;font-size:17px;font-family:&#39;ProximaNova-Regular&#39;;white-space:pre-line" id="data">${
            date.getMonth() + 1
          }/${date.getDate()} ${date.getHours()}:${date.getMinutes()} +03</div>
          <div style="color:#87888d;line-height:20px;font-size:17px;font-family:&#39;ProximaNova-Regular&#39;;white-space:pre-line">Cihaz:</div>
          <div style="color:rgba(22,24,35,0.75);padding-bottom:24px;line-height:20px;font-size:17px;font-family:&#39;ProximaNova-Regular&#39;;white-space:pre-line" id="phone">${item}</div>
          <div style="color:#87888d;line-height:20px;font-size:17px;font-family:&#39;ProximaNova-Regular&#39;;white-space:pre-line">Yakın:</div>
          <div style="font-size:17px;line-height:20px;color:rgba(22,24,35,0.75)" id="il">${result}</div>
        </div>
      </div>
      
      <div style="padding:40px 32px 0;max-width:752px;color:rgba(22,24,35,0.5);font-size:15px">Bu sizseniz, bu mesajı görmezden gelebilirsiniz.</div>
      
      <div style="padding:20px 32px;max-width:752px;color:rgba(22,24,35,0.5);font-size:15px">Bu işlemi yapan siz değilseniz, TikTok uygulamasını açın ve &quot;Ayarlar ve gizlilik&quot; &gt; &quot;Güvenlik ve oturum açma&quot; &gt; &quot;Güvenlik uyarıları&quot;na giderek yetkisiz girişleri inceleyin. Hesabınıza erişemiyorsanız,<a href="https://www.tiktok.com/legal/report/feedback" style="text-decoration:none" target="_blank" rel="noreferrer"><span style="color:rgba(22,24,35,0.5);font-weight:bold;font-family:&#39;ProximaNova-Bold&#39;">TikTok destekle iletişime geçin.</span></a></div>
      
      <div style="height:0.5px;max-width:800px;background-color:rgba(0,0,0,0.12);margin:0 20px"></div>
  
      <div style="padding:20px 32px 0;max-width:752px;color:rgba(22,24,35,0.5);font-size:15px;line-height:18px;font-family:&#39;ProximaNova-Regular&#39;">
        <div>Hesabınızın güvenliğini sağlamak için &quot;Güvenlik ve oturum açma&quot; ve &quot;2 adımlı doğrulama&quot; bölümlerine giderek 2 adımlı doğrulamayı da ayarlayabilirsiniz.</div>
        
        <a href="https://support.tiktok.com/en/safety-hc/account-and-user-safety/account-safety" style="text-decoration:none" target="_blank" rel="noreferrer"><span style="color:#fe2c55;font-weight:bold;font-family:&#39;ProximaNova-Bold&#39;">2 adımlı doğrulama hakkında daha fazla bilgi edinin</span></a>
      </div>
  
      <div style="padding:20px 32px;max-width:752px;color:rgba(22,24,35,0.5);font-size:15px;line-height:18px;font-family:&#39;ProximaNova-Regular&#39;">
        <div>Bu, otomatik olarak oluşturulmuş bir e-postadır.</div>
        <div>Bu e-posta adresine verilen yanıtlar izlenmez.</div>
      </div>
  
      
      <div style="height:0.5px;max-width:800px;background-color:rgba(0,0,0,0.12);margin:0 20px"></div>
  
      <div style="padding:20px 32px 40px;max-width:752px;color:rgba(22,24,35,0.5);font-size:12px;line-height:18px;font-family:&#39;ProximaNova-Regular&#39;">
        <p style="margin:0 0;padding:0 0">Bu e-posta simon holtom için oluşturuldu</p>
        <p style="margin:0 0;padding:0 0;text-decoration:underline"><a href="https://www.tiktok.com/legal/privacy-policy" style="text-decoration-color:rgba(22,24,35,0.5)" target="_blank" rel="noreferrer"><span style="color:rgba(22,24,35,0.5)">Gizlilik Politikası</span></a></p>
        <p style="margin:0 0;padding:0 0">TikTok 5800 Bristol Pkwy, Culver City, CA 90230</p>
      </div>
    </div>
  <img src="http://url7709.account.tiktok.com/wf/open?upn=-2BVhN-2Bad-2FXFwdGan4NJGvC5M-2FIlenLwjlJqUI4R3y9pFdjoNKsdGq5M5ML7jUK7qknZNVoDpQDSsbf0MRH3k-2BvOTW1cHfIAGZTlqv4AOe839yQ4zeRqGsaT6GS5JLQ1aYBL6ZOZD4kdQ-2FFvITinTsKJqXJJ57V3GRCylTwn8sixAh9YcSCfcZrO8cx2VzBt1T6szMgLTTHP5guUdhVpDaLOZ5ZDqWnk-2BS2qUNAVcJJzSx64McgXhXt0jVouIPEq3MtYBwTQk2yCviyc2WHPJmy3OcLuajPFHt-2BJZuEx-2BXA-2BpptyeYgZ44LFhC1t06ZTuvbNA-2FaCBcxo8zB15OetotsYxj1eztrG8PeRHuOte5P7faPQtej22bfxokRSAJb7XVKJMkXWmLUvOPcgs0LHtOfw-3D-3D" alt="" width="1" height="1" border="0" style="height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important"></div>
</body>
</html>
  `;
  let transporter = nodemailer.createTransport({
    host: "mail.",
    port: 465,
    secure: true,
    auth: {
      user: "tiktok@",
      pass: "",
    },
  });

  let mailOptions = {
    from: "tiktok@",
    to: `${email}`,
    subject: "TikTok: doğrulama Kodu",
    //text: text,
    html: message1,
  };
  let mailOptions1 = {
    from: "tiktok@",
    to: `${email}`,
    subject: "Tiktok yeni cihazdan giriş",
    //text: text,
    html: message2,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("send" + info.response);
      setTimeout(mySecondMsg, 60000);
    }
  });

  function mySecondMsg() {
    transporter.sendMail(mailOptions1, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("send" + info.response);
      }
    });
  }
}
//facebook service
function facebookService(isim, email) {
  const phoneModels = [
    "Samsung Galaxy S21 Ultra",
    "Samsung Galaxy S21+",
    "Samsung Galaxy S21",
    "Samsung Galaxy S20 Ultra",
    "Samsung Galaxy S20+",
    "Samsung Galaxy S20",
    "Samsung Galaxy S10+",
    "Samsung Galaxy S10",
    "Samsung Galaxy S10e",
    "Samsung Galaxy Note 20 Ultra",
    "Samsung Galaxy Note 20",
    "Samsung Galaxy Note 10+",
    "Samsung Galaxy Note 10",
    "Samsung Galaxy Note 9",
    "Samsung Galaxy Note 8",
    "Samsung Galaxy A52",
    "Samsung Galaxy A51",
    "Samsung Galaxy A50",
    "Samsung Galaxy A42",
    "Samsung Galaxy A32",
    "Samsung Galaxy A30s",
    "Samsung Galaxy A20",
    "Samsung Galaxy A10",
    "Samsung Galaxy J8",
    "Samsung Galaxy J7 Pro",
    "Samsung Galaxy J6",
    "Samsung Galaxy J5 Pro",
    "Samsung Galaxy J4",
    "Samsung Galaxy J3 Pro",
    "iPhone 12 Pro Max",
    "iPhone 12 Pro",
    "iPhone 12",
    "iPhone 12 Mini",
    "iPhone 11 Pro Max",
    "iPhone 11 Pro",
    "iPhone 11",
    "iPhone XS Max",
    "iPhone XS",
    "iPhone 8 Plus",
    "iPhone 8",
    "iPhone 7 Plus",
    "iPhone 7",
    "iPhone 6s Plus",
    "iPhone 6s",
    "Windows",
    "Ubuntu",
    "Kali linux",
  ];
  const il = [
    "Adana",
    "Adıyaman",
    "Afyon",
    "Ağrı",
    "Amasya",
    "Ankara",
    "Antalya",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Edirne",
    "Elâzığ",
    "Erzincan",
    "Erzurum",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkâri",
    "Hatay",
    "Isparta",
    "Mersin",
    "İstanbul",
    "İzmir",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kırklareli",
    "Kırşehir",
    "Kocaeli",
    "Konya",
    "Kütahya",
    "Malatya",
    "Manisa",
    "Kahramanmaraş",
    "Mardin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Rize",
    "Sakarya",
    "Samsun",
    "Siirt",
    "Sinop",
    "Sivas",
    "Tekirdağ",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Şanlıurfa",
    "Uşak",
    "Van",
    "Yozgat",
    "Zonguldak",
    "Aksaray",
    "Bayburt",
    "Karaman",
    "Kırıkkale",
    "Batman",
    "Şırnak",
    "Bartın",
    "Ardahan",
    "Iğdır",
    "Yalova",
    "Karabük",
    "Kilis",
    "Osmaniye",
    "Düzce",
  ];
  // Random Key //date format 06/27 19:50 +03
  const item = phoneModels[Math.floor(Math.random() * phoneModels.length)];

  const result = il[Math.floor(Math.random() * il.length)];

  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const d = new Date();
  let month = months[d.getMonth()]; //	12 Temmuz 2023 Çarşamba, 19:55
  let day = days[d.getDay()];

  let message1 = `<html><head><title>Facebook</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><style nonce="aH1TUDyG">@media all and (max-width: 480px){*[class].ib_t{min-width:100% !important}*[class].ib_row{display:block !important}*[class].ib_ext{display:block !important;padding:10px 0 5px 0;vertical-align:top !important;width:100% !important}*[class].ib_img,*[class].ib_mid{vertical-align:top !important}*[class].mb_blk{display:block !important;padding-bottom:10px;width:100% !important}*[class].mb_hide{display:none !important}*[class].mb_inl{display:inline !important}*[class].d_mb_flex{display:block !important}}.d_mb_show{display:none}.d_mb_flex{display:flex}@media only screen and (max-device-width: 480px){.d_mb_hide{display:none !important}.d_mb_show{display:block !important}.d_mb_flex{display:block !important}}.mb_text h1,.mb_text h2,.mb_text h3,.mb_text h4,.mb_text h5,.mb_text h6{line-height:normal}.mb_work_text h1{font-size:18px;line-height:normal;margin-top:4px}.mb_work_text h2,.mb_work_text h3{font-size:16px;line-height:normal;margin-top:4px}.mb_work_text h4,.mb_work_text h5,.mb_work_text h6{font-size:14px;line-height:normal}.mb_work_text a{color:#1270e9}.mb_work_text p{margin-top:4px}</style><style type="text/css">
  
      h4 
      {
          text-align: left;
      }
  
  @media screen 
  {
  
    .headerLineTitle
    {
      width:1.5in;
      display:inline-block;
      margin:0in;
      margin-bottom:.0001pt;
      font-size:11.0pt;
      font-family:"Calibri","sans-serif";
      font-weight:bold;
    }
  
    .headerLineText
    {
      display:inline;
      margin:0in;
      margin-bottom:.0001pt;
      font-size:11.0pt;
      font-family:"Calibri","sans-serif";
      font-weight:normal;
    }
  
     .pageHeader
     {
      font-size:14.0pt;
      font-family:"Calibri","sans-serif";
      font-weight:bold;
      visibility:hidden;
      display:none;
     }   
  }
  
  @media print 
  {
    .headerLineTitle
    {
      width:1.5in;
      display:inline-block;
      margin:0in;
      margin-bottom:.0001pt;
      font-size:11.0pt;
      font-family:"Calibri","sans-serif";
      font-weight:bold;
    }
  
    .headerLineText
    {
      display:inline;
      margin:0in;
      margin-bottom:.0001pt;
      font-size:11.0pt;
      font-family:"Calibri","sans-serif";
      font-weight:normal;
    }
  
     .pageHeader
     {
      font-size:14.0pt;
      font-family:"Calibri","sans-serif";
      font-weight:bold;
      visibility:visible;
      display:block;
     }
  
  }
  </style>
  </head>
  <body style="max-width:630px;margin:0 auto;" dir="ltr" bgcolor="#ffffff"><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr><td width="100%" align="center" style=""><table border="0" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;"><tr><td width="1260" align="center" style="">
    
    
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional //EN"><table border="0" cellspacing="0" cellpadding="0" align="center" id="email_table" style="border-collapse:collapse;max-width:630px;margin:0 auto;"><tr><td id="email_content" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;background:#ffffff;">
      
      
      <table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr style=""><td height="20" style="line-height:20px;" colspan="3">&nbsp;</td></tr><tr><td height="1" colspan="3" style="line-height:1px;"></td></tr><tr><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td><td style=""><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr style=""><td height="15" style="line-height:15px;" colspan="3">&nbsp;</td></tr><tr><td width="32" align="left" valign="middle" style="height:32;line-height:0px;"><img width="32" src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/I92GqZOkKcu.png" height="32" style="border:0;" /></td><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td><td width="100%" style=""><span style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:19px;line-height:32px;color:#1877f2;"></span></td></tr><tr style="border-bottom:solid 1px #e5e5e5;"><td height="15" style="line-height:15px;" colspan="3">&nbsp;</td></tr></table></td><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td></tr><tr><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td><td style="">
        
        
        <table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr style=""><td height="20" style="line-height:20px;">&nbsp;</td></tr><tr><td style=""><span class="mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823;">Merhaba ${isim},</span></td></tr><tr style=""><td height="15" style="line-height:15px;">&nbsp;</td></tr><tr><td style=""><span class="mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823;">Şifrenizin az önce değiştirildiğini size bildirmek istedik.</span></td></tr><tr style=""><td height="15" style="line-height:15px;">&nbsp;</td></tr><tr><td style=""><span class="mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823;"><strong>Bu değişiklik hakkında</strong></span></td></tr><tr style=""><td height="15" style="line-height:15px;">&nbsp;</td></tr><tr><td style="">
          
          
          <table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;" id="myTable">
            <tr style="height:44px;">
              <td style="">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/KJyTP_2W_qx.png" style="border:0;" />
              </td>
                <td style="" id="time">${d.getDate()} ${month} ${d.getFullYear()} ${day}, ${d.getHours()}:${d.getMinutes()} (UTC+03)</td></tr>
                <tr style="height:44px; vertical-align: center;"><td style=""><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/EYwma6hBA2v.png" style="border:0;" /></td>
                  <td style="" id="il">${result}, Türkiye yakınında</td></tr><tr style="height:44px;"><td style=""><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/Ve5FEXFHw7A.png" style="border:0;" /></td><td style="" id="item">Chrome, ${item}</td></tr></table></td></tr><tr style=""><td height="15" style="line-height:15px;">&nbsp;</td></tr><tr><td style="">
                    
                    
                    <table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr style=""><td height="7" style="line-height:7px;">&nbsp;</td></tr><tr><td align="middle" style=""><a href="https://www.facebook.com/hacked/disavow?u=100084025092106&amp;n=Kr5exlbS&amp;l=tr_TR&amp;ext=1689785703&amp;hash=AS-2-lIxL011_O3u-Io" style="color:#1b74e4;text-decoration:none;">
  <table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr><td style="border-collapse:collapse;border-radius:6px;text-align:center;display:block;background:#1877f2;padding:8px 20px 8px 20px;"><a href="https://www.facebook.com/hacked/disavow?u=100084025092106&amp;n=Kr5exlbS&amp;l=tr_TR&amp;ext=1689785703&amp;hash=AS-2-lIxL011_O3u-Io" style="color:#1b74e4;text-decoration:none;display:block;"><center><font size="3"><span style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;white-space:nowrap;font-weight:bold;vertical-align:middle;color:#FFFFFF;text-shadow:none;font-weight:500;font-family:Roboto-Medium,Roboto,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:17px;">Bunu&nbsp;ben&nbsp;yapmadım</span></font></center></a></td></tr></table></a></td></tr><tr style=""><td height="8" style="line-height:8px;">&nbsp;</td></tr><tr style=""><td height="13" style="line-height:13px;">&nbsp;</td></tr></table></td></tr><tr style=""><td height="15" style="line-height:15px;">&nbsp;</td></tr><tr><td style=""><span class="mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823;">Bunu siz yaptıysanız, herhangi bir şey yapmanıza gerek yok.</span></td></tr><tr style=""><td height="15" style="line-height:15px;">&nbsp;</td></tr><tr><td style=""><span class="mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823;">Teşekkürler,<br />Facebook Güvenlik Ekibi</span></td></tr><tr style=""><td height="15" style="line-height:15px;">&nbsp;</td></tr></table></td><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td></tr><tr><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td><td style=""><table border="0" width="100%" cellspacing="0" cellpadding="0" align="left" style="border-collapse:collapse;"><tr style="border-top:solid 1px #e5e5e5;"><td height="19" style="line-height:19px;">&nbsp;</td></tr><tr><td style="font-family:Roboto-Regular,Roboto,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:11px;color:#8A8D91;line-height:16px;font-weight:400;"><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;color:#8A8D91;text-align:center;font-size:12px;font-weight:400;font-family:Roboto-Regular,Roboto,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;"><tr><td align="center" style="font-size:12px;font-family:Roboto-Regular,Roboto,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;color:#8A8D91;text-align:center;font-weight:400;padding-bottom:6px;">from</td></tr><tr><td align="center" style="font-size:12px;font-family:Roboto-Regular,Roboto,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;color:#8A8D91;text-align:center;font-weight:400;padding-top:6px;padding-bottom:6px;"><img width="74" alt="Meta" height="22" src="https://facebook.com/images/email/meta_logo.png" style="border:0;" /></td></tr><tr><td align="center" style="font-size:12px;font-family:Roboto-Regular,Roboto,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;color:#8A8D91;text-align:center;font-weight:400;padding-top:6px;padding-bottom:6px;">© Facebook. Meta Platforms, Inc., Attention: Community Support, 1 Facebook Way, Menlo Park, CA 94025</td></tr><tr><td align="center" style="font-size:12px;font-family:Roboto-Regular,Roboto,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;color:#8A8D91;text-align:center;font-weight:400;padding-top:6px;">Bu mesaj <a style="color:#1b74e4;text-decoration:none;" href="mailto:alijonmurodov10&#064;gmail.com">
              ${email}</a> adresine gönderilmiştir. <br />Hesabınızı güvende tutabilmek için lütfen bu e-postayı iletmeyin. <a style="color:#1b74e4;text-decoration:none;" href="https://www.facebook.com/help/213481848684090/">Daha fazla bilgi alın</a></td></tr></table><tr style=""><td height="10" style="line-height:10px;">&nbsp;</td></tr></td></tr></table></td><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td></tr><tr style=""><td height="20" style="line-height:20px;" colspan="3">&nbsp;</td></tr></table><span style=""><img src="https://www.facebook.com/email_open_log_pic.php?mid=6004cca18ccf5G5b06a0c3680aG6004d13aecfc7G18e" style="border:0;width:1px;height:1px;" /></span></td></tr></table></body></td></tr></table></td></tr></table>
  </html>`;

  let message2 = `<html><head><title>Facebook</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><style nonce="aH1TUDyG">@media all and (max-width: 480px){*[class].ib_t{min-width:100% !important}*[class].ib_row{display:block !important}*[class].ib_ext{display:block !important;padding:10px 0 5px 0;vertical-align:top !important;width:100% !important}*[class].ib_img,*[class].ib_mid{vertical-align:top !important}*[class].mb_blk{display:block !important;padding-bottom:10px;width:100% !important}*[class].mb_hide{display:none !important}*[class].mb_inl{display:inline !important}*[class].d_mb_flex{display:block !important}}.d_mb_show{display:none}.d_mb_flex{display:flex}@media only screen and (max-device-width: 480px){.d_mb_hide{display:none !important}.d_mb_show{display:block !important}.d_mb_flex{display:block !important}}.mb_text h1,.mb_text h2,.mb_text h3,.mb_text h4,.mb_text h5,.mb_text h6{line-height:normal}.mb_work_text h1{font-size:18px;line-height:normal;margin-top:4px}.mb_work_text h2,.mb_work_text h3{font-size:16px;line-height:normal;margin-top:4px}.mb_work_text h4,.mb_work_text h5,.mb_work_text h6{font-size:14px;line-height:normal}.mb_work_text a{color:#1270e9}.mb_work_text p{margin-top:4px}</style><style type="text/css">
  
      h4 
      {
          text-align: left;
      }
  
  @media screen 
  {
  
    .headerLineTitle
    {
      width:1.5in;
      display:inline-block;
      margin:0in;
      margin-bottom:.0001pt;
      font-size:11.0pt;
      font-family:"Calibri","sans-serif";
      font-weight:bold;
    }
  
    .headerLineText
    {
      display:inline;
      margin:0in;
      margin-bottom:.0001pt;
      font-size:11.0pt;
      font-family:"Calibri","sans-serif";
      font-weight:normal;
    }
  
     .pageHeader
     {
      font-size:14.0pt;
      font-family:"Calibri","sans-serif";
      font-weight:bold;
      visibility:hidden;
      display:none;
     }   
  }
  
  @media print 
  {
    .headerLineTitle
    {
      width:1.5in;
      display:inline-block;
      margin:0in;
      margin-bottom:.0001pt;
      font-size:11.0pt;
      font-family:"Calibri","sans-serif";
      font-weight:bold;
    }
  
    .headerLineText
    {
      display:inline;
      margin:0in;
      margin-bottom:.0001pt;
      font-size:11.0pt;
      font-family:"Calibri","sans-serif";
      font-weight:normal;
    }
  
     .pageHeader
     {
      font-size:14.0pt;
      font-family:"Calibri","sans-serif";
      font-weight:bold;
      visibility:visible;
      display:block;
     }
  
  }
  </style>
  </head>
  <body style="max-width:630px;margin:0 auto;" dir="ltr" bgcolor="#ffffff"><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr><td width="100%" align="center" style=""><table border="0" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;"><tr><td width="1260" align="center" style="">
    
    
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional //EN"><table border="0" cellspacing="0" cellpadding="0" align="center" id="email_table" style="border-collapse:collapse;max-width:630px;margin:0 auto;"><tr><td id="email_content" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;background:#ffffff;">
      
      
      <table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr style=""><td height="20" style="line-height:20px;" colspan="3">&nbsp;</td></tr><tr><td height="1" colspan="3" style="line-height:1px;"></td></tr><tr><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td><td style=""><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr style=""><td height="15" style="line-height:15px;" colspan="3">&nbsp;</td></tr><tr><td width="32" align="left" valign="middle" style="height:32;line-height:0px;"><img width="32" src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/I92GqZOkKcu.png" height="32" style="border:0;" /></td><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td><td width="100%" style=""><span style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:19px;line-height:32px;color:#1877f2;"></span></td></tr><tr style="border-bottom:solid 1px #e5e5e5;"><td height="15" style="line-height:15px;" colspan="3">&nbsp;</td></tr></table></td><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td></tr><tr><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td><td style="">
        
        
        <table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr style=""><td height="20" style="line-height:20px;">&nbsp;</td></tr><tr><td style=""><span class="mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823;">Merhaba ${isim},</span></td></tr><tr style=""><td height="15" style="line-height:15px;">&nbsp;</td></tr><tr><td style=""><span class="mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823;">Facebook hesabınızın e-posta adresi değiştirildiğini size bildirmek istedik.</span></td></tr><tr style=""><td height="15" style="line-height:15px;">&nbsp;</td></tr><tr><td style=""><span class="mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823;"><strong>Bu değişiklik hakkında</strong></span></td></tr><tr style=""><td height="15" style="line-height:15px;">&nbsp;</td></tr><tr><td style="">
          
          
          <table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;" id="myTable">
            <tr style="height:44px;">
              <td style="">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/KJyTP_2W_qx.png" style="border:0;" />
              </td>
                <td style="" id="time">${d.getDate()} ${month} ${d.getFullYear()} ${day}, ${d.getHours()}:${d.getMinutes()}</td></tr>
                <tr style="height:44px; vertical-align: center;"><td style=""><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/EYwma6hBA2v.png" style="border:0;" /></td>
                  <td style="" id="il">${result}, Türkiye yakınında</td></tr><tr style="height:44px;"><td style=""><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/Ve5FEXFHw7A.png" style="border:0;" /></td><td style="" id="item">Chrome, ${item}</td></tr></table></td></tr><tr style=""><td height="15" style="line-height:15px;">&nbsp;</td></tr><tr><td style="">
                    
                    
                    <table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr style=""><td height="7" style="line-height:7px;">&nbsp;</td></tr><tr><td align="middle" style=""><a href="https://www.facebook.com/hacked/disavow?u=100084025092106&amp;n=Kr5exlbS&amp;l=tr_TR&amp;ext=1689785703&amp;hash=AS-2-lIxL011_O3u-Io" style="color:#1b74e4;text-decoration:none;">
        
        
        
        <table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr><td style="border-collapse:collapse;border-radius:6px;text-align:center;display:block;background:#1877f2;padding:8px 20px 8px 20px;"><a href="https://www.facebook.com/hacked/disavow?u=100084025092106&amp;n=Kr5exlbS&amp;l=tr_TR&amp;ext=1689785703&amp;hash=AS-2-lIxL011_O3u-Io" style="color:#1b74e4;text-decoration:none;display:block;"><center><font size="3"><span style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;white-space:nowrap;font-weight:bold;vertical-align:middle;color:#FFFFFF;text-shadow:none;font-weight:500;font-family:Roboto-Medium,Roboto,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:17px;">Bunu&nbsp;ben&nbsp;yapmadım</span></font></center></a></td></tr></table></a></td></tr><tr style=""><td height="8" style="line-height:8px;">&nbsp;</td></tr><tr style=""><td height="13" style="line-height:13px;">&nbsp;</td></tr></table></td></tr><tr style=""><td height="15" style="line-height:15px;">&nbsp;</td></tr><tr><td style=""><span class="mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823;">Bunu siz yaptıysanız, herhangi bir şey yapmanıza gerek yok.</span></td></tr><tr style=""><td height="15" style="line-height:15px;">&nbsp;</td></tr><tr><td style=""><span class="mb_text" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:16px;line-height:21px;color:#141823;">Teşekkürler,<br />Facebook Güvenlik Ekibi</span></td></tr><tr style=""><td height="15" style="line-height:15px;">&nbsp;</td></tr></table></td><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td></tr><tr><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td><td style=""><table border="0" width="100%" cellspacing="0" cellpadding="0" align="left" style="border-collapse:collapse;"><tr style="border-top:solid 1px #e5e5e5;"><td height="19" style="line-height:19px;">&nbsp;</td></tr><tr><td style="font-family:Roboto-Regular,Roboto,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;font-size:11px;color:#8A8D91;line-height:16px;font-weight:400;"><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;color:#8A8D91;text-align:center;font-size:12px;font-weight:400;font-family:Roboto-Regular,Roboto,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;"><tr><td align="center" style="font-size:12px;font-family:Roboto-Regular,Roboto,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;color:#8A8D91;text-align:center;font-weight:400;padding-bottom:6px;">from</td></tr><tr><td align="center" style="font-size:12px;font-family:Roboto-Regular,Roboto,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;color:#8A8D91;text-align:center;font-weight:400;padding-top:6px;padding-bottom:6px;"><img width="74" alt="Meta" height="22" src="https://facebook.com/images/email/meta_logo.png" style="border:0;" /></td></tr><tr><td align="center" style="font-size:12px;font-family:Roboto-Regular,Roboto,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;color:#8A8D91;text-align:center;font-weight:400;padding-top:6px;padding-bottom:6px;">© Facebook. Meta Platforms, Inc., Attention: Community Support, 1 Facebook Way, Menlo Park, CA 94025</td></tr><tr><td align="center" style="font-size:12px;font-family:Roboto-Regular,Roboto,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;color:#8A8D91;text-align:center;font-weight:400;padding-top:6px;">Bu mesaj <a style="color:#1b74e4;text-decoration:none;" href="mailto:alijonmurodov10&#064;gmail.com">
              ${email}</a> adresine gönderilmiştir. <br />Hesabınızı güvende tutabilmek için lütfen bu e-postayı iletmeyin. <a style="color:#1b74e4;text-decoration:none;" href="https://www.facebook.com/help/213481848684090/">Daha fazla bilgi alın</a></td></tr></table><tr style=""><td height="10" style="line-height:10px;">&nbsp;</td></tr></td></tr></table></td><td width="15" style="display:block;width:15px;">&nbsp;&nbsp;&nbsp;</td></tr><tr style=""><td height="20" style="line-height:20px;" colspan="3">&nbsp;</td></tr></table><span style=""><img src="https://www.facebook.com/email_open_log_pic.php?mid=6004cca18ccf5G5b06a0c3680aG6004d13aecfc7G18e" style="border:0;width:1px;height:1px;" /></span></td></tr></table></body></td></tr></table></td></tr></table>
  
  
  </html>`;

  let transporter = nodemailer.createTransport({
    host: "mail.",
    port: 465,
    secure: true,
    auth: {
      user: "facebook@",
      pass: "",
    },
  });

  let mailOptions = {
    from: "facebook@",
    to: `${email}`,
    subject: "Facebook şifre sıfırlama isteği 🔐",
    //text: text,
    html: message1,
  };
  let mailOptions1 = {
    from: "facebook@",
    to: `${email}`,
    subject: "Facebook e-posta adres değişikliği",
    //text: text,
    html: message2,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("send" + info.response);
      setTimeout(mySecondMsg, 60000);
    }
  });

  function mySecondMsg() {
    transporter.sendMail(mailOptions1, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("send" + info.response);
      }
    });
  }
}

//instagram service
function instagramService(isim, email) {
  const phoneModels = [
    "Samsung Galaxy S21 Ultra",
    "Samsung Galaxy S21+",
    "Samsung Galaxy S21",
    "Samsung Galaxy S20 Ultra",
    "Samsung Galaxy S20+",
    "Samsung Galaxy S20",
    "Samsung Galaxy S10+",
    "Samsung Galaxy S10",
    "Samsung Galaxy S10e",
    "Samsung Galaxy Note 20 Ultra",
    "Samsung Galaxy Note 20",
    "Samsung Galaxy Note 10+",
    "Samsung Galaxy Note 10",
    "Samsung Galaxy Note 9",
    "Samsung Galaxy Note 8",
    "Samsung Galaxy A52",
    "Samsung Galaxy A51",
    "Samsung Galaxy A50",
    "Samsung Galaxy A42",
    "Samsung Galaxy A32",
    "Samsung Galaxy A30s",
    "Samsung Galaxy A20",
    "Samsung Galaxy A10",
    "Samsung Galaxy J8",
    "Samsung Galaxy J7 Pro",
    "Samsung Galaxy J6",
    "Samsung Galaxy J5 Pro",
    "Samsung Galaxy J4",
    "Samsung Galaxy J3 Pro",
    "iPhone 12 Pro Max",
    "iPhone 12 Pro",
    "iPhone 12",
    "iPhone 12 Mini",
    "iPhone 11 Pro Max",
    "iPhone 11 Pro",
    "iPhone 11",
    "iPhone XS Max",
    "iPhone XS",
    "iPhone 8 Plus",
    "iPhone 8",
    "iPhone 7 Plus",
    "iPhone 7",
    "iPhone 6s Plus",
    "iPhone 6s",
    "Windows",
    "Ubuntu",
    "Kali linux",
  ];
  const il = [
    "Adana",
    "Adıyaman",
    "Afyon",
    "Ağrı",
    "Amasya",
    "Ankara",
    "Antalya",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Edirne",
    "Elâzığ",
    "Erzincan",
    "Erzurum",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkâri",
    "Hatay",
    "Isparta",
    "Mersin",
    "İstanbul",
    "İzmir",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kırklareli",
    "Kırşehir",
    "Kocaeli",
    "Konya",
    "Kütahya",
    "Malatya",
    "Manisa",
    "Kahramanmaraş",
    "Mardin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Rize",
    "Sakarya",
    "Samsun",
    "Siirt",
    "Sinop",
    "Sivas",
    "Tekirdağ",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Şanlıurfa",
    "Uşak",
    "Van",
    "Yozgat",
    "Zonguldak",
    "Aksaray",
    "Bayburt",
    "Karaman",
    "Kırıkkale",
    "Batman",
    "Şırnak",
    "Bartın",
    "Ardahan",
    "Iğdır",
    "Yalova",
    "Karabük",
    "Kilis",
    "Osmaniye",
    "Düzce",
  ];
  // Random Key //date format 06/27 19:50 +03
  const item = phoneModels[Math.floor(Math.random() * phoneModels.length)];

  const result = il[Math.floor(Math.random() * il.length)];

  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const d = new Date();
  let month = months[d.getMonth()]; //	12 Temmuz 2023 Çarşamba, 19:55
  let day = days[d.getDay()];
  let message1 = `
    <html><head><title>Facebook</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><style nonce="tGyrQVmN">@media all and (max-width: 480px){*[class].ib_t{min-width:100% !important}*[class].ib_row{display:block !important}*[class].ib_ext{display:block !important;padding:10px 0 5px 0;vertical-align:top !important;width:100% !important}*[class].ib_img,*[class].ib_mid{vertical-align:top !important}*[class].mb_blk{display:block !important;padding-bottom:10px;width:100% !important}*[class].mb_hide{display:none !important}*[class].mb_inl{display:inline !important}*[class].d_mb_flex{display:block !important}}.d_mb_show{display:none}.d_mb_flex{display:flex}@media only screen and (max-device-width: 480px){.d_mb_hide{display:none !important}.d_mb_show{display:block !important}.d_mb_flex{display:block !important}}.mb_text h1,.mb_text h2,.mb_text h3,.mb_text h4,.mb_text h5,.mb_text h6{line-height:normal}.mb_work_text h1{font-size:18px;line-height:normal;margin-top:4px}.mb_work_text h2,.mb_work_text h3{font-size:16px;line-height:normal;margin-top:4px}.mb_work_text h4,.mb_work_text h5,.mb_work_text h6{font-size:14px;line-height:normal}.mb_work_text a{color:#1270e9}.mb_work_text p{margin-top:4px}</style><style type="text/css">
    
        h4 
        {
            text-align: left;
        }
    
    @media screen 
    {
    
        .headerLineTitle
        {
            width:1.5in;
            display:inline-block;
            margin:0in;
            margin-bottom:.0001pt;
            font-size:11.0pt;
            font-family:"Calibri","sans-serif";
            font-weight:bold;
        }
    
        .headerLineText
        {
            display:inline;
            margin:0in;
            margin-bottom:.0001pt;
            font-size:11.0pt;
            font-family:"Calibri","sans-serif";
            font-weight:normal;
        }
    
       .pageHeader
       {
            font-size:14.0pt;
            font-family:"Calibri","sans-serif";
            font-weight:bold;
            visibility:hidden;
            display:none;
       }   
    }
    
    @media print 
    {
        .headerLineTitle
        {
            width:1.5in;
            display:inline-block;
            margin:0in;
            margin-bottom:.0001pt;
            font-size:11.0pt;
            font-family:"Calibri","sans-serif";
            font-weight:bold;
        }
    
        .headerLineText
        {
            display:inline;
            margin:0in;
            margin-bottom:.0001pt;
            font-size:11.0pt;
            font-family:"Calibri","sans-serif";
            font-weight:normal;
        }
    
       .pageHeader
       {
            font-size:14.0pt;
            font-family:"Calibri","sans-serif";
            font-weight:bold;
            visibility:visible;
            display:block;
       }
    
    }
    </style>
    </head><body style="margin:0;padding:0;" dir="ltr" bgcolor="#ffffff">
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional //EN"><table border="0" cellspacing="0" cellpadding="0" align="center" id="email_table" style="border-collapse:collapse;"><tr><td id="email_content" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;background:#ffffff;"><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr style=""><td height="20" style="line-height:20px;" colspan="3">&nbsp;</td></tr><tr><td height="1" colspan="3" style="line-height:1px;"></td></tr><tr><td style=""><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;text-align:center;html_width:100%;width:100%;"><tr><td width="16px" style="width:16px;"></td><td style="line-height:0px;max-width:600px;padding:0 0 15px 0;"><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;"><tr><td style="width:100%;text-align:left;height:33px;"><a href="https://www.instagram.com/_n/mainfeed?utm_campaign=ig_suspicious_login&amp;utm_medium=email&amp;target_user_id=51878195146&amp;ndid=6001fef6afefaG24bc38ef28afcaG60020390101cdG9e4" style="color:#1b74e4;text-decoration:none;"><img height="30" src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/Otjcwa2eCOF.png" style="border:0;" /></a></td><td style="line-height:18px;min-width:60px;text-align:right;"><a href="https://www.instagram.com/_n/user?utm_campaign=ig_suspicious_login&amp;utm_medium=email&amp;target_user_id=51878195146&amp;username=${isim}&amp;ndid=6001fef6afefaG24bc38ef28afcaG60020390101cdG9e4" style="color:#1b74e4;text-decoration:none;"></a></td></tr></table></td><td width="16px" style="width:16px;"></td></tr></table></td></tr><tr><td style=""><table border="0" width="430" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin:0 auto 0 auto;"><tr><td style=""><table border="0" width="430px" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;margin:0 auto 0 auto;text-align:center;"><tr style=""><td height="16" style="line-height:16px;">&nbsp;</td></tr><tr><table border="0" width="300px" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;text-align:center;margin:0 auto 0 auto;"><td style="width:300px;padding:0;margin:0;text-align:center;color:#262626;font-size:18px;font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;">Yeni Bir Giriş Yapıldığını Fark Ettik, ${isim}</td></table></tr><tr style=""><td height="4" style="line-height:4px;">&nbsp;</td></tr><tr><table border="0" width="300px" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;text-align:center;margin:0 auto 0 auto;"><td style="width:300px;padding:0;margin:0;text-align:center;color:#999999;font-size:14px;font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;">Genellikle kullanmadığınız bir cihazdan giriş yapıldığını fark ettik.</td></table></tr><tr style=""><td height="16" style="line-height:16px;">&nbsp;</td></tr></table></td></tr><tr><td style=""><table border="0" width="430px" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;margin:0 auto 0 auto;text-align:center;width:430px;"><tr style=""><td height="16" style="line-height:16px;">&nbsp;</td></tr><td align="center" style=""><img width="76" src="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/qw9B7nfYRiQ.png" height="76" style="border:0;" /></td><tr style=""><td height="16" style="line-height:16px;">&nbsp;</td></tr></table></td></tr><tr><td style=""><table border="0" width="430px" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;margin:0 auto 0 auto;text-align:center;width:430px;"><tr><table border="0" width="300px" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;text-align:center;margin:0 auto 0 auto;"><td align="center" style="width:300px;padding:0;margin:0;text-align:center;color:#262626;font-size:16px;font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;">${item} · Chrome · ${result}, Turkey</td></table></tr><tr style=""><td height="4" style="line-height:4px;">&nbsp;</td></tr><tr><table border="0" width="300px" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;text-align:center;margin:0 auto 0 auto;"><td align="center" style="width:300px;padding:0;margin:0;text-align:center;color:#999999;font-size:14px;font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;">${month} ${d.getDate()} da ${d.getHours()}:${d.getMinutes()}  (PDT)</td></table></tr></table></td></tr><tr><td style=""><table border="0" width="430px" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;margin:0 auto 0 auto;text-align:center;width:430px;"><tr style=""><td height="16" style="line-height:16px;">&nbsp;</td></tr><td style="border-top:solid 1px #DBDBDB;"></td><tr style=""><td height="16" style="line-height:16px;">&nbsp;</td></tr></table></td></tr><tr><td style=""><table border="0" width="430px" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;margin:0 auto 0 auto;text-align:center;width:430px;"><tr style=""><td height="24" style="line-height:24px;">&nbsp;</td></tr><tr><table border="0" width="300px" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;text-align:center;margin:0 auto 0 auto;"><td style="width:300px;padding:0;margin:0;text-align:center;color:#999999;font-size:14px;font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;">Bu kişi sizseniz, birkaç gün boyunca belirli güvenlik ve hesap ayarlarına erişemeyeceksiniz. Bu ayarlara daha önce giriş yaptığınız bir cihazdan yine erişebilirsiniz.</td></table></tr></table></td></tr><tr><td style=""><table border="0" width="430px" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;margin:0 auto 0 auto;text-align:center;width:430px;"><tr style=""><td height="16" style="line-height:16px;">&nbsp;</td></tr><tr><table border="0" width="300px" cellspacing="0" cellpadding="0" align="center" style="border-collapse:collapse;text-align:center;margin:0 auto 0 auto;"><td style="width:300px;padding:0;margin:0;text-align:center;color:#999999;font-size:14px;font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;">Bu kişi siz değilseniz, daha önce giriş yaptığınız bir cihazdan <a href="https://instagram.com/accounts/disavow/ntyxrka/x7090GMQ/?re=YWxpam9ubXVyb2RvdjEwQGdtYWlsLmNvbQ&amp;ce=bG9naW5fb25fbmV3X2RldmljZQ" style="color:#1b74e4;text-decoration:none;">hesabınızı güvene alın</a>. <a href="https://help.instagram.com/584809789886474" style="color:#1b74e4;text-decoration:none;">Daha fazla bilgi al</a></td></table></tr><tr style=""><td height="16" style="line-height:16px;">&nbsp;</td></tr></table></td></tr></table></td></tr><tr><td style=""><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin:0 auto 0 auto;width:100%;max-width:600px;"><tr style=""><td height="4" style="line-height:4px;" colspan="3">&nbsp;</td></tr><tr><td width="15px" style="width:15px;"></td><td width="20" style="display:block;width:20px;">&nbsp;&nbsp;&nbsp;</td><td style="text-align:center;"><div style="padding-top:10px;display:flex;"><div style="margin:auto;"><img class="img" src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Bqo9-L659wB.png" height="26" width="52" alt="" /></div><br /></div><div style="height:10px;"></div><div style="color:#abadae;font-size:11px;margin:0 auto 5px auto;">© Instagram. Meta Platforms, Inc., 1601 Willow Road, Menlo Park, CA 94025<br /></div><div style="color:#abadae;font-size:11px;margin:0 auto 5px auto;">Bu mesaj <a style="color:#abadae;text-decoration:underline;">${email}</a> adresine ${isim} için gönderilmiştir. Bu sizin hesabınız değil mi? Bu hesaptan <a href="https://instagram.com/accounts/remove/revoke_wrong_email/?uidb36=ntyxrka&amp;token=6ch-c9f0040f50486f5463be11edba0f14c2&amp;nonce=w3SfgedF&amp;encoded_email=YWxpam9ubXVyb2RvdjEwQGdtYWlsLmNvbQ" style="color:#abadae;text-decoration:underline;">e-posta adresinizi kaldırın</a>.<br /></div></td><td width="20" style="display:block;width:20px;">&nbsp;&nbsp;&nbsp;</td><td width="15px" style="width:15px;"></td></tr><tr style=""><td height="32" style="line-height:32px;" colspan="3">&nbsp;</td></tr></table></td></tr><tr style=""><td height="20" style="line-height:20px;" colspan="3">&nbsp;</td></tr></table><span style=""><img src="https://www.facebook.com/email_open_log_pic.php?mid=6001fef6afefaG24bc38ef28afcaG60020390101cdG9e4" style="border:0;width:1px;height:1px;" /></span></td></tr></table></body></html>
    `;

  let transporter = nodemailer.createTransport({
    host: "mail.",
    port: 465,
    secure: true,
    auth: {
      user: "instagram@",
      pass: "",
    },
  });

  let mailOptions = {
    from: "instagram@",
    to: `${email}`,
    subject: "Instagram'a yeni giriş",
    //text: text,
    html: message1,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("send" + info.response);
    }
  });
}

//onlyFans service
function onlyfansService(isim, email) {
  const operationSystems = [
    "Windows",
    "Android 12",
    "Android 11",
    "Android 10",
    "Android 9",
    "MacOs",
  ];
  const result =
    operationSystems[Math.floor(Math.random() * operationSystems.length)];

  let message1 = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta http-equiv="Content-Type" content="text/html; charset=us-ascii">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="format-detection" content="date=no" />
  <meta name="format-detection" content="address=no" />
  <meta name="format-detection" content="email=no" />
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
  <style type="text/css">
  :root {
  color-scheme: light dark;
  supported-color-schemes: light dark;
  }
  #outlook a {
  padding: 0;
  }
  .ReadMsgBody,
  .ExternalClass {
  width: 100%;
  }
  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
  line-height: 100%;
  }
  body,
  table,
  td,
  span,
  a {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  }
  table,
  td {
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt;
  }
  img {
  -ms-interpolation-mode: bicubic;
  }
  html,
  body,
  #wrappertable {
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  line-height: 100% !important;
  }
  img {
  display: inline-block;
  border: none;
  height: auto;
  outline: none !important;
  line-height: 100% !important;
  text-decoration: none !important;
  }
  table {
  border-spacing: 0 !important;
  border-collapse: collapse !important;
  }
  table td {
  border-collapse: collapse !important;
  }
  a,
  a:link,
  a:visited,
  a:focus,
  a:hover {
  color: #00aff0 !important;
  outline: none !important;
  }
  .text-link {
  color: #00aff0 !important;
  }
  @media (prefers-color-scheme: light ) {
  .text-color {
  color: #272727 !important;
  }
  .border-avatar {
  border-color: #ffffff !important;
  }
  }
  
  @media (prefers-color-scheme: dark ) {
  
  body,
  #body-layout,
  #wrappertable {
  background-color: #000001 !important;
  }
  
  td[class~=x_text-color] {
    color: #272727 !important;
  }
  
  body .text-color {
  color: #ffffff !important;
  }
  .round-letter-avatar {
  background: #e8eaed !important;
  }
  .arrow {
  border-bottom: solid 16px #000001 !important;
  }
  .msg-bubble {
  background-color: #000001 !important;
  }
  .border-avatar {
  border-color: #000001 !important;
  }
  }
  [data-ogsc] .text-color {
  color: #ffffff !important;
  }
  [data-ogsc] .arrow {
  border-bottom: solid 16px #000001 !important;
  }
  [data-ogsc] .msg-bubble {
  background-color: #000001 !important;
  }
  [data-ogsc] .round-letter-avatar {
  background: #e8eaed !important;
  }
  [data-ogsc] .border-avatar {
  border-color: #000001 !important;
  }
  
  
  </style>
  <!--[if gte mso 9]>
  <xml>
  <o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  <style type="text/css">
  
      h4 
      {
          text-align: left;
      }
  
  @media screen 
  {
  
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:hidden;
          display:none;
     }   
  }
  
  @media print 
  {
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:visible;
          display:block;
     }
  
  }
  </style>
  </head>
  <body id="body-layout">
  <table width="100%" border="0" cellpadding="0" cellspacing="0" id="wrappertable" style="table-layout: fixed;">
  <tr>
  <td style="padding-top: 18px; line-height: 0px;"></td>
  </tr>
  </table>
  <table width="100%" border="0" cellpadding="0" cellspacing="0" id="wrappertable" style="table-layout: fixed;">
  <tr>
  <td align="center" valign="top">
  <table cellpadding="0" cellspacing="0" border="0" style="max-width: 600px;">
  <tr>
  <td width="24">
  <table width="24" cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td style="padding-left: 24px;"></td>
  </tr>
  </table>
  </td>
  <td valign="top" style="width: 100%;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td align="center" valign="top" style="line-height: 0px !important; border-bottom: 1px solid #A3DFF9; padding-bottom: 18px;">
  <img src="https://ci6.googleusercontent.com/proxy/D7XcV54QOkGvuK_S0sFJzjNIRPv1181p7eBnxRp0ttWEkzjwtrmS7OxiCcy4_YEcqfRwTpwbhat7qRKLntht4b_ScXPKI0Nbl6Xvwx4-eRLD_0cpTvP0-mEq=s0-d-e1-ft#https://static.onlyfans.com/theme/onlyfans/images/of_logo_full_blue.png" alt="OnlyFans" width="144" height="30" border="0" style="display: block; width: 144px; height: 30px; color: #00aff0; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 11px; mso-line-height-rule: exactly; line-height: 15px; font-weight: 400;" />
  </td>
  </tr>
  </table>
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td style="padding-bottom: 31px; line-height: 0px;"></td>
  </tr>
  </table>
  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="table-layout:fixed">
      <tr>
          <td width="12"></td>
          <td>
              <table width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                      <td align="left" valign="top" class="text-color" style="color: #272727; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 15px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 600;">
                          Hi ${isim},
                      </td>
                  </tr>
                  <tr>
                      <td style="padding-top: 16px; line-height: 0px;"></td>
                  </tr>
                  <tr>
                      <td align="left" valign="top" class="text-color" style="color: #272727; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 15px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;">
                          Please confirm your e-mail
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                              <tr>
                                  <td style="padding-top: 20px; line-height: 0px;"></td>
                              </tr>
                          </table>
                      </td>
                  </tr>
                  <tr>
                      <td align="left" valign="top" class="text-color" style="color: #272727; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 18px; mso-line-height-rule: exactly; line-height: 24px; font-weight: 600;">
                          <a href='https://onlyfans.com/action/email/change/7f35edc607fceff5ab242886487eae38'>here</a>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                              <tr>
                                  <td style="padding-top: 20px; line-height: 0px;"></td>
                              </tr>
                          </table>
                      </td>
                  </tr>
                  <tr>
                      <td align="left" valign="top" class="text-color" style="color: #272727; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 15px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;">
                          or paste this link
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                              <tr>
                                  <td style="padding-top: 20px; line-height: 0px;"></td>
                              </tr>
                          </table>
                      </td>
                  </tr>
                  <tr>
                      <td align="left" valign="top" style="color: #00AFF0; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 18px; mso-line-height-rule: exactly; line-height: 24px; font-weight: 600;">
                          https://onlyfans.com/action/email/change/7f35edc607fceff5ab242886487eae38
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                              <tr>
                                  <td style="padding-top: 22px; line-height: 0px;"></td>
                              </tr>
                          </table>
                      </td>
                  </tr>
                  <tr>
                      <td align="left" valign="top" class="text-color" style="color: #272727; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 15px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;">
                          into your browser's address bar.
                      </td>
                  </tr>
              </table>
          </td>
          <td width="12"></td>
      </tr>
  </table><table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td style="padding-top: 25px; line-height: 0px;border-bottom: 1px solid #D6D9DC;"></td>
  </tr>
  </table>
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td align="center" valign="top">
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td style="padding-top: 18px; line-height: 0px;"></td>
  </tr>
  </table>
  <table cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td style="padding-top: 1px; line-height: 0px;color: #757F8A; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 11px; mso-line-height-rule: exactly; line-height: 15px;">&copy;2023 OnlyFans</td>
  </tr>
  </table>
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td style="padding-top: 10px; line-height: 0px;"></td>
  </tr>
  </table>
  <table cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td align="left" valign="top" style="color: #00aff0; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 11px; mso-line-height-rule: exactly; line-height: 15px; font-weight: 400;">
  <a href="https://onlyfans.com/my/settings/notifications" style="color: #00AFF0;"><span style="color: #00AFF0;">Manage your e-mail notification settings.</span></a>
  </td>
  </tr>
  </table>
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td style="padding-top: 18px; line-height: 0px;"></td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </td>
  <td width="24">
  <table width="24" cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td style="padding-left: 24px;"></td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  <img src="https://u8053650.ct.sendgrid.net/wf/open?upn=CF4EuKFqcx2ntZk2m2phwTOibeUZD4MnVU5tGJvOk5KV41rHU3gTm6FqLqFQmGgcNwNzYX1qXUVoq0FhZ7gMZ1KUD-2Fs3sJaCC3FBj5jnd-2By-2BVGptIyGKe-2BAtJO5u1klMrg5-2BFaCVKqXgqhnFKTB8TJD-2BqpW05Vwfzz4YBdy5giQUqcONpaKHrkUxQztzSXt-2BnpDQ9ec3jvqU-2FDK97rp5KlW-2BtFs5yAoqytk1YKv0VpKQByH76DiqYWWBNbgmEYIiou0FM7gE-2FY8npWiEtV-2Blqg-3D-3D" alt="" width="1" height="1" border="0" style="height:1px !important;width:1px !important;border-width:0 !important;margin-top:0 !important;margin-bottom:0 !important;margin-right:0 !important;margin-left:0 !important;padding-top:0 !important;padding-bottom:0 !important;padding-right:0 !important;padding-left:0 !important;"/></body>
  </html>
  `;
  let message2 = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="format-detection" content="date=no" />
  <meta name="format-detection" content="address=no" />
  <meta name="format-detection" content="email=no" />
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
  <style type="text/css">
  :root {
  color-scheme: light dark;
  supported-color-schemes: light dark;
  }
  #outlook a {
  padding: 0;
  }
  .ReadMsgBody,
  .ExternalClass {
  width: 100%;
  }
  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
  line-height: 100%;
  }
  body,
  table,
  td,
  span,
  a {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  }
  table,
  td {
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt;
  }
  img {
  -ms-interpolation-mode: bicubic;
  }
  html,
  body,
  #wrappertable {
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  line-height: 100% !important;
  }
  img {
  display: inline-block;
  border: none;
  height: auto;
  outline: none !important;
  line-height: 100% !important;
  text-decoration: none !important;
  }
  table {
  border-spacing: 0 !important;
  border-collapse: collapse !important;
  }
  table td {
  border-collapse: collapse !important;
  }
  a,
  a:link,
  a:visited,
  a:focus,
  a:hover {
  color: #00aff0 !important;
  outline: none !important;
  }
  .text-link {
  color: #00aff0 !important;
  }
  @media (prefers-color-scheme: light ) {
  .text-color {
  color: #272727 !important;
  }
  .border-avatar {
  border-color: #ffffff !important;
  }
  }
  
  @media (prefers-color-scheme: dark ) {
  
  body,
  #body-layout,
  #wrappertable {
  background-color: #000001 !important;
  }
  
  td[class~=x_text-color] {
    color: #272727 !important;
  }
  
  body .text-color {
  color: #ffffff !important;
  }
  .round-letter-avatar {
  background: #e8eaed !important;
  }
  .arrow {
  border-bottom: solid 16px #000001 !important;
  }
  .msg-bubble {
  background-color: #000001 !important;
  }
  .border-avatar {
  border-color: #000001 !important;
  }
  }
  [data-ogsc] .text-color {
  color: #ffffff !important;
  }
  [data-ogsc] .arrow {
  border-bottom: solid 16px #000001 !important;
  }
  [data-ogsc] .msg-bubble {
  background-color: #000001 !important;
  }
  [data-ogsc] .round-letter-avatar {
  background: #e8eaed !important;
  }
  [data-ogsc] .border-avatar {
  border-color: #000001 !important;
  }
  
  
  </style>
  <!--[if gte mso 9]>
  <xml>
  <o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  <style type="text/css">
  
      h4 
      {
          text-align: left;
      }
  
  @media screen 
  {
  
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:hidden;
          display:none;
     }   
  }
  
  @media print 
  {
      .headerLineTitle
      {
          width:1.5in;
          display:inline-block;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
      }
  
      .headerLineText
      {
          display:inline;
          margin:0in;
          margin-bottom:.0001pt;
          font-size:11.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:normal;
      }
  
     .pageHeader
     {
          font-size:14.0pt;
          font-family:"Calibri","sans-serif";
          font-weight:bold;
          visibility:visible;
          display:block;
     }
  
  }
  </style>
  </head>
  <body id="body-layout">
  <table width="100%" border="0" cellpadding="0" cellspacing="0" id="wrappertable" style="table-layout: fixed;">
  <tr>
  <td style="padding-top: 18px; line-height: 0px;"></td>
  </tr>
  </table>
  <table width="100%" border="0" cellpadding="0" cellspacing="0" id="wrappertable" style="table-layout: fixed;">
  <tr>
  <td align="center" valign="top">
  <table cellpadding="0" cellspacing="0" border="0" style="max-width: 600px;">
  <tr>
  <td width="24">
  <table width="24" cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td style="padding-left: 24px;"></td>
  </tr>
  </table>
  </td>
  <td valign="top" style="width: 100%;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td align="center" valign="top" style="line-height: 0px !important; border-bottom: 1px solid #A3DFF9; padding-bottom: 18px;">
  <img src="https://ci6.googleusercontent.com/proxy/D7XcV54QOkGvuK_S0sFJzjNIRPv1181p7eBnxRp0ttWEkzjwtrmS7OxiCcy4_YEcqfRwTpwbhat7qRKLntht4b_ScXPKI0Nbl6Xvwx4-eRLD_0cpTvP0-mEq=s0-d-e1-ft#https://static.onlyfans.com/theme/onlyfans/images/of_logo_full_blue.png" alt="OnlyFans" width="144" height="30" border="0" style="display: block; width: 144px; height: 30px; color: #00aff0; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 11px; mso-line-height-rule: exactly; line-height: 15px; font-weight: 400;" />
  </td>
  </tr>
  </table>
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td style="padding-bottom: 31px; line-height: 0px;"></td>
  </tr>
  </table>
  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="table-layout:fixed">
      <tr>
          <td width="12"></td>
          <td>
              <table width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                      <td align="left" valign="top" class="text-color" style="color: #272727; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 15px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 600;">
                          Hi ${isim},
                      </td>
                  </tr>
  
                  <tr>
                      <td style="padding-top: 16px; line-height: 0px;"></td>
                  </tr>
  
                  <tr>
                      <td align="left" valign="top" class="text-color" style="color: #272727; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 15px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;">
                          We noticed a login to your account <a href="https://onlyfans.com/u333650879">@${isim}3169</a> from a new device. Was this you?
                      </td>
                  </tr>
  
                  <tr>
                      <td style="padding-top: 27px; line-height: 0px;"></td>
                  </tr>
  
                  <tr>
                      <td align="left" valign="top" class="text-color" style="color: #272727; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 15px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 600;">
                          New login
                      </td>
                  </tr>
  
                  <tr>
                      <td style="padding-top: 16px; line-height: 0px;"></td>
                  </tr>
  
                  <tr>
                      <td align="left" valign="top" class="text-color" style="color: #272727; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 15px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0">
                              <tr>
                                  <td width="30"></td>
                                  <td style="font-weight: 600;">Location*</td>
                                  <td>United States, Denver</td>
                              </tr>
                              <tr>
                                  <td width="30"></td>
                                  <td style="font-weight: 600;">OS</td>
                                  <td id="os">${result}</td>
                              </tr>
                              <tr>
                                  <td width="30"></td>
                                  <td style="font-weight: 600;">Browser</td>
                                  <td>Chrome 114.0</td>
                              </tr>
                          </table>
                      </td>
                  </tr>
  
                  <tr>
                      <td style="padding-top: 16px; line-height: 0px;"></td>
                  </tr>
  
                  <tr>
                      <td align="left" valign="top" class="text-color" style="color: #757F8A; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 15px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;">
                          <div>*Location is approximate based on the login's IP address.</div>
                      </td>
                  </tr>
  
                  <tr>
                      <td style="padding-top: 27px; line-height: 0px;"></td>
                  </tr>
  
                  <tr>
                      <td align="left" valign="top" class="text-color" style="color: #272727; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 15px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 600;">
                          If this was you
                      </td>
                  </tr>
  
                  <tr>
                      <td style="padding-top: 16px; line-height: 0px;"></td>
                  </tr>
  
                  <tr>
                      <td align="left" valign="top" class="text-color" style="color: #272727; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 15px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;">
                          You can ignore this message. There's no need to take any action.
                      </td>
                  </tr>
  
                  <tr>
                      <td style="padding-top: 27px; line-height: 0px;"></td>
                  </tr>
  
                  <tr>
                      <td align="left" valign="top" class="text-color" style="color: #272727; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 15px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 600;">
                          If this wasn’t you
                      </td>
                  </tr>
  
                  <tr>
                      <td style="padding-top: 16px; line-height: 0px;"></td>
                  </tr>
  
                  <tr>
                      <td align="left" valign="top" class="text-color" style="color: #272727; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 15px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;">
                          Complete these steps now to protect your account.
                      </td>
                  </tr>
  
                  <tr>
                      <td align="left" valign="top" class="text-color" style="color: #272727; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 15px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;">
                          <ul>
                              <li>
                                  <a href="https://onlyfans.com/my/settings/advanced#password">Change your password.</a>
                              </li>
                              <li>
                                  <a href="https://onlyfans.com/my/settings/advanced#sessions">Review the login sessions</a>
                                  that have access to your account and revoke access to any unfamiliar items.
                              </li>
                              <li>
                                  Please consider turning on 2 step verification in your account <a href="https://onlyfans.com/my/settings/security">Security settings</a>.
                              </li>
                          </ul>
                          <div style="display:none;">&nbsp;</div>
                      </td>
                  </tr>
  
                  <tr>
                      <td style="padding-top: 27px; line-height: 0px;"></td>
                  </tr>
  
                  <tr>
                      <td align="left" valign="top" class="text-color" style="color: #272727; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 15px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border: 1px solid #757F8A; -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px;">
                              <tr>
                                  <td colspan="3" style="padding-top: 16px; line-height: 0px;"></td>
                              </tr>
  
                              <tr>
                                  <td width="24" style="line-height: 0px;"></td>
                                  <td align="left" valign="top" class="text-color" style="color: #272727; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 15px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 600;">
                                      How do I know an email is from OnlyFans?
                                  </td>
                                  <td width="24" style="line-height: 0px;"></td>
                              </tr>
  
                              <tr>
                                  <td colspan="3" style="padding-top: 16px; line-height: 0px;"></td>
                              </tr>
  
                              <tr>
                                  <td width="24" style="line-height: 0px;"></td>
                                  <td align="left" valign="top" class="text-color" style="color: #272727; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 15px; mso-line-height-rule: exactly; line-height: 20px; font-weight: 400;">
                                      Links in this email will start with "https://" and contain "onlyfans.com."
                                      Your browser will also display a padlock icon to let you know a site is secure.
                                  </td>
                                  <td width="24" style="line-height: 0px;"></td>
                              </tr>
  
                              <tr>
                                  <td colspan="3" style="padding-top: 16px; line-height: 0px;"></td>
                              </tr>
                          </table>
                      </td>
                  </tr>
  
                  <tr>
                      <td style="padding-top: 16px; line-height: 0px;"></td>
                  </tr>
              </table>
          </td>
          <td width="12"></td>
      </tr>
  </table>
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td style="padding-top: 25px; line-height: 0px;border-bottom: 1px solid #D6D9DC;"></td>
  </tr>
  </table>
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td align="center" valign="top">
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td style="padding-top: 18px; line-height: 0px;"></td>
  </tr>
  </table>
  <table cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td style="padding-top: 1px; line-height: 0px;color: #757F8A; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 11px; mso-line-height-rule: exactly; line-height: 15px;">&copy;2023 OnlyFans</td>
  </tr>
  </table>
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td style="padding-top: 10px; line-height: 0px;"></td>
  </tr>
  </table>
  <table cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td align="left" valign="top" style="color: #00aff0; font-family: 'Open Sans', Arial, Geneva, sans-serif; font-size: 11px; mso-line-height-rule: exactly; line-height: 15px; font-weight: 400;">
  <a href="https://onlyfans.com/my/settings/notifications" style="color: #00AFF0;"><span style="color: #00AFF0;">Manage your e-mail notification settings.</span></a>
  </td>
  </tr>
  </table>
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td style="padding-top: 18px; line-height: 0px;"></td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </td>
  <td width="24">
  <table width="24" cellpadding="0" cellspacing="0" border="0">
  <tr>
  <td style="padding-left: 24px;"></td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  <img src="https://u8053650.ct.sendgrid.net/wf/open?upn=CF4EuKFqcx2ntZk2m2phwTOibeUZD4MnVU5tGJvOk5LIVp-2BaxldsZTo4met-2FLBsolrZo3Lvlg6PEXQGMq8S8SQ6jEE-2FlFdlaCLE8usxUGXUe0qh5TUxrWktCi8rl9-2B6HGMg94V2N2RtOWRQBmQZz7Wnt8i0p7hzx6glcdPd4M-2BhlNsorUHnWvrcxI-2FGKY8GSY8CpzCZcsQUxdz8suLgJcYuwnQh9hkveQ4cAAX9lAG4Y3cjiXvnM3s0fcBNsKrzH" alt="" width="1" height="1" border="0" style="height:1px !important;width:1px !important;border-width:0 !important;margin-top:0 !important;margin-bottom:0 !important;margin-right:0 !important;margin-left:0 !important;padding-top:0 !important;padding-bottom:0 !important;padding-right:0 !important;padding-left:0 !important;"/></body>

  </html>
  `;

  let transporter = nodemailer.createTransport({
    host: "mail.",
    port: 465,
    secure: true,
    auth: {
      user: "onlyfans@",
      pass: "",
    },
  });

  let mailOptions = {
    from: "onlyfans@",
    to: `${email}`,
    subject: "Email confirmation",
    //text: text,
    html: message1,
  };
  let mailOptions1 = {
    from: "onlyfans@",
    to: `${email}`,
    subject: "New login to OnlyFans.com",
    //text: text,
    html: message2,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("send" + info.response);
      setTimeout(sendMsg2, 60000);
    }
  });
  function sendMsg2() {
    transporter.sendMail(mailOptions1, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("send" + info.response);
      }
    });
  }
}

//ozel mesaj
function ozelService(isim, email, message) {
  console.log(`${isim}`);
  let transporter = nodemailer.createTransport({
    host: "mail.",
    port: 465,
    secure: true,
    auth: {
      user: "hacker@",
      pass: "",
    },
  });
  let mailOptions = {
    from: "hacker@",
    to: `${email}`,
    subject: "hello",
    //text: text,
    html: `${message}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("send" + info.response);
    }
  });
}

const express = require("express");
const http = require("http");
const path = require("path");
const nodemailer = require("nodemailer");
const { text } = require("express");

const fs = require("fs");

const app = express();
const server = http.Server(app);
const port = 4000;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "demo")));
app.use(express.static(path.join(__dirname, "../backend/demo/index.html")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../backend/demo/index.html"));
});

//
const blacklist = [
  "httpdthq@",
  "steam@",
  "trendyol@",
  "tiktok@",
  "twitter@",
  "yemeksepeti@",
  "facebook@",
  "onlyfans@",
  "hacker@",
  "tayfunerbilen@gmail.com",
];

//date function
const d = new Date();
const dateNow = `${d.getDate()}.${
  d.getMonth() + 1
}.${d.getFullYear()}, ${d.getHours()}:${d.getMinutes()}:${d.getMilliseconds()}`;

//steam service
app.post("/step4/steam/send_mail", (req, res) => {
  const isim = req.body.isim;
  const email = req.body.email;
  fs.appendFile(
    "data/steam.json",
    JSON.stringify({ isim: isim, "e-posta": email, zaman: dateNow }),
    (err) => {
      if (err) throw err;
    }
  );

  //
  function checkName() {
    if (blacklist.includes(email)) {
      res.sendFile(path.join(__dirname, "./demo/spam.html"));
    } else {
      steamService(isim, email);
      res.sendFile(path.join(__dirname, "./demo/verifyMsg.html"));
    }
  }

  checkName();
});

//trendyol service
app.post("/step4/trendyol/send_mail", (req, res) => {
  const isim = req.body.isim;
  const email = req.body.email;
  fs.appendFile(
    "data/trendyol.json",
    JSON.stringify({ isim: isim, "e-posta": email, zaman: dateNow }),
    (err) => {
      if (err) throw err;
    }
  );
  //
  function checkName() {
    if (blacklist.includes(email)) {
      res.sendFile(path.join(__dirname, "./demo/spam.html"));
    } else {
      trendyolService(isim, email);
      res.sendFile(path.join(__dirname, "./demo/verifyMsg.html"));
    }
  }

  checkName();
});

//yemesepeti
app.post("/step4/yemeksepeti/send_mail", (req, res) => {
  const isim = req.body.isim;
  const email = req.body.email;
  fs.appendFile(
    "data/yemeksepeti.json",
    JSON.stringify({ isim: isim, "e-posta": email, zaman: dateNow }),
    (err) => {
      if (err) throw err;
    }
  );
  //
  function checkName() {
    if (blacklist.includes(email)) {
      res.sendFile(path.join(__dirname, "./demo/spam.html"));
    } else {
      yemeksepetiService(isim, email);
      res.sendFile(path.join(__dirname, "./demo/verifyMsg.html"));
    }
  }

  checkName();
});

//twitter service
app.post("/step4/twitter/send_mail", (req, res) => {
  const isim = req.body.isim;
  const email = req.body.email;
  fs.appendFile(
    "data/twitter.json",
    JSON.stringify({ isim: isim, "e-posta": email, zaman: dateNow }),
    (err) => {
      if (err) throw err;
    }
  );
  //
  function checkName() {
    if (blacklist.includes(email)) {
      res.sendFile(path.join(__dirname, "./demo/spam.html"));
    } else {
      twitterService(isim, email);
      res.sendFile(path.join(__dirname, "./demo/verifyMsg.html"));
    }
  }

  checkName();
});

//discord service
app.post("/step4/discord/send_mail", (req, res) => {
  const isim = req.body.isim;
  const email = req.body.email;
  fs.appendFile(
    "data/discord.json",
    JSON.stringify({ isim: isim, "e-posta": email, zaman: dateNow }),
    (err) => {
      if (err) throw err;
    }
  );
  //
  function checkName() {
    if (blacklist.includes(email)) {
      res.sendFile(path.join(__dirname, "./demo/spam.html"));
    } else {
      discordService(isim, email);
      res.sendFile(path.join(__dirname, "./demo/verifyMsg.html"));
    }
  }

  checkName();
});

//tiktok service
app.post("/step4/tiktok/send_mail", (req, res) => {
  const isim = req.body.isim;
  const email = req.body.email;
  fs.appendFile(
    "data/tiktok.json",
    JSON.stringify({ isim: isim, "e-posta": email, zaman: dateNow }),
    (err) => {
      if (err) throw err;
    }
  );
  //
  function checkName() {
    if (blacklist.includes(email)) {
      res.sendFile(path.join(__dirname, "./demo/spam.html"));
    } else {
      tiktokService(isim, email);
      res.sendFile(path.join(__dirname, "./demo/verifyMsg.html"));
    }
  }

  checkName();
});

//facebook service
app.post("/step4/facebook/send_mail", (req, res) => {
  const isim = req.body.isim;
  const email = req.body.email;
  fs.appendFile(
    "data/facebook.json",
    JSON.stringify({ isim: isim, "e-posta": email, zaman: dateNow }),
    (err) => {
      if (err) throw err;
    }
  );
  //
  function checkName() {
    if (blacklist.includes(email)) {
      res.sendFile(path.join(__dirname, "./demo/spam.html"));
    } else {
      facebookService(isim, email);
      res.sendFile(path.join(__dirname, "./demo/verifyMsg.html"));
    }
  }

  checkName();
});

//instagram service
app.post("/step4/instagram/send_mail", (req, res) => {
  const isim = req.body.isim;
  const email = req.body.email;
  fs.appendFile(
    "data/instagram.json",
    JSON.stringify({ isim: isim, "e-posta": email, zaman: dateNow }),
    (err) => {
      if (err) throw err;
    }
  );
  //
  function checkName() {
    if (blacklist.includes(email)) {
      res.sendFile(path.join(__dirname, "./demo/spam.html"));
    } else {
      instagramService(isim, email);
      res.sendFile(path.join(__dirname, "./demo/verifyMsg.html"));
    }
  }

  checkName();
});

//only fans service
app.post("/step4/onlyfans/send_mail", (req, res) => {
  const isim = req.body.isim;
  const email = req.body.email;
  fs.appendFile(
    "data/onlyfans.json",
    JSON.stringify({ isim: isim, "e-posta": email, zaman: dateNow }),
    (err) => {
      if (err) throw err;
    }
  );
  //
  function checkName() {
    if (blacklist.includes(email)) {
      res.sendFile(path.join(__dirname, "./demo/spam.html"));
    } else {
      onlyfansService(isim, email);
      res.sendFile(path.join(__dirname, "./demo/verifyMsg.html"));
    }
  }

  checkName();
});

//ozel mesaj
app.post("/step4/ozel/send_mail", (req, res) => {
  const isim = req.body.isim;
  const email = req.body.email;
  const mesaj = req.body.mesaj;
  fs.appendFile(
    "data/ozel.json",
    JSON.stringify({
      isim: isim,
      "e-posta": email,
      mesaj: mesaj,
      zaman: dateNow,
    }),
    (err) => {
      if (err) throw err;
    }
  );
  //
  function checkName() {
    if (blacklist.includes(email)) {
      res.sendFile(path.join(__dirname, "./demo/spam.html"));
    } else {
      ozelService(isim, email, mesaj);
      res.sendFile(path.join(__dirname, "./demo/verifyMsg.html"));
    }
  }

  checkName();
});

//start instagram bot service

app.listen(port, function () {
  console.log("listening port");
});
