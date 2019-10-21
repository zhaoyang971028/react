let express = require("express");
let mysql = require("mysql");
let app = express();
let bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({
    extended: false
});
app.use(express.static("public"));
//6,设置跨域访问
app.all("*", function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://192.168.3.187:3000");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
//设置固定值
let ip = "http://192.168.3.187:";
let port = 8888;

let indexController = require("./controllers/indexController");
app.get("/reactdata", indexController.index);

/*app.get("/imgs", function(req, res) {
  let imgs = [
    {
      id: 0,
      url: ip + port + "/imgs/pre_icon.png",
    },
    {
      id: 1,
      url: ip + port + "/imgs/O(09ZK~8(`2@TIE(_`PDRNV.png",
    },
    {
      id: 2,
      url: ip + port + "/imgs/OY]QC]5`VL4@~~@JR]G_A[B.png",
    },
    {
      id: 3,
      url: ip + port + "/imgs/search (1).png",
    },
    {
      id: 4,
      url: ip + port + "/imgs/camera.png",
    },
    {
      id: 5,
      url: ip + port + "/imgs/jichu (1).png",
    },
    {
      id: 6,
      url: ip + port + "/imgs/shipin.png",
    },
    {
      id: 7,
      url: ip + port + "/imgs/comfirm.png",
    },
    {
      id: 8,
      url: ip + port + "/imgs/donghua.png",
    },
    {
      id: 9,
      url: ip + port + "/imgs/book (3).png",
    },
    {
      id: 10,
      url: ip + port + "/imgs/tiku (1).png",
    },
    {
      id: 11,
      url: ip + port + "/imgs/faxian (2).png",
    },
    {
      id: 12,
      url: ip + port + "/imgs/geren (1).png",
    },
    {
      id: 13,
      url: ip + port + "/imgs/center.jpg",
    },
    {
      id: 14,
      url: ip + port + "/imgs/back.png",
    },
    {
      id: 15,
      url: ip + port + "/imgs/news-1.jpg",
    },
    {
      id: 16,
      url: ip + port + "/imgs/news-2.jpg",
    },
    {
      id: 17,
      url: ip + port + "/imgs/news-3.jpg",
    },
    {
      id: 18,
      url: ip + port + "/imgs/news-4.jpg",
    },
    {
      id: 19,
      url: ip + port + "/imgs/back.png",
    },
    {
      id: 20,
      url: ip + port + "/imgs/TUC@TO7W6@MR1}9O_PT(`JA.png",
    },
    {
      id: 21,
      url: ip + port + "/imgs/W)HI2K)0O[Y{GDA_[)X0F@P.png",
    },
    {
      id: 22,
      url: ip + port + "/imgs/news-2.jpg",
    },
    {
      id: 23,
      url: ip + port + "/imgs/news-3.jpg",
    }
  ];

  res.json({ imgs: imgs});
});*/
//4,进行监听
app.listen(port, function() {
  console.log("启动");
});