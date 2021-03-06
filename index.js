const generateHTML = (pageName) => {
  return `
<div class='c'>
    <div class='_404'>404</div>
    <hr>
    <div class='_1'>GET BACK TO WORK</div>
    <div class='_2'>Leave ${pageName}!</div>
</div>`;
};

const generateSTYLING = () => {
  return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
    body {
      background: #33cc99;
      color: #fff;
      font-family: "Open Sans", sans-serif;
      max-height: 700px;
      overflow: hidden;
    }
    .c {
      text-align: center;
      display: block;
      position: relative;
      width: 80%;
      margin: 100px auto;
    }
    ._404 {
      font-size: 220px;
      position: relative;
      display: inline-block;
      z-index: 2;
      height: 250px;
      letter-spacing: 15px;
    }
    ._1 {
      text-align: center;
      display: block;
      position: relative;
      letter-spacing: 12px;
      font-size: 4em;
      line-height: 80%;
    }
    ._2 {
      text-align: center;
      display: block;
      position: relative;
      font-size: 20px;
    }
    hr {
      padding: 0;
      border: none;
      border-top: 5px solid #fff;
      color: #fff;
      text-align: center;
      margin: 0px auto;
      width: 420px;
      height: 10px;
      z-index: -10;
    }
     </style>`;
};

switch (window.location.hostname) {
  case "www.whatsapp.com":
    document.head.innerHTML = generateSTYLING();
    document.body.innerHTML = generateHTML("Whatsapp");
    break;
  case "www.facebook.com":
    document.head.innerHTML = generateSTYLING();
    document.body.innerHTML = generateHTML("Facebook");
    break;
  case "www.netflix.com":
    document.head.innerHTML = generateSTYLING();
    document.body.innerHTML = generateHTML("Netflix");
    break;
  case "www.instagram.com":
    document.head.innerHTML = generateSTYLING();
    document.body.innerHTML = generateHTML("Instagram");
    break;
  case "web.whatsapp.com":
    document.head.innerHTML = generateSTYLING();
    document.body.innerHTML = generateHTML("Whatsapp");
    break;
  case "www.telegram.org":
    document.head.innerHTML = generateSTYLING();
    document.body.innerHTML = generateHTML("Telegram");
    break;

  case "www.primevideo.com":
    document.head.innerHTML = generateSTYLING();
    document.body.innerHTML = generateHTML("Prime Video");
    break;
  case "www.reddit.com":
    document.head.innerHTML = generateSTYLING();
    document.body.innerHTML = generateHTML("Reddit");
    break;
  case "web.telegram.org":
    document.head.innerHTML = generateSTYLING();
    document.body.innerHTML = generateHTML("Telegram");
    break;
}
