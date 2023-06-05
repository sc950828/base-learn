const express = require("express");
const app = express();
var cors = require("cors");

// 允许跨域
app.use(cors());
// 通过 express.urlencoded() 这个中间件,解析表单中 application/x-www-form-urlencoded 格式的数据
app.use(express.urlencoded({ extended: false }));
// 解析表单中application/json格式的数据
app.use(express.json());
// 解析表单中text/plain格式的数据
app.use(express.text());

// 解析表单中multipart/form-data格式的数据
const multer = require("multer");
const upload = multer();

app.get("/testGet", function (req, res, next) {
  // res.type("application/json");
  // console.log(req.headers);
  // res.status(500);
  res.json(req.query);
});

app.post("/testPost2", upload.none(), function (req, res, next) {
  console.log(req.headers);
  console.log(req.body);
  res.send(req.body);
});

app.post("/testPost", function (req, res, next) {
  console.log(req.headers);
  console.log(req.body);
  // res.status(401);
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("serve running on 3000");
});
