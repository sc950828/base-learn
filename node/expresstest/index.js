const express = require("express");
const app = express();
// Multer 不会处理任何非 multipart/form-data 类型的表单数据。
const multer = require("multer");
const path = require("path");

// 自定义存储，比如重命名
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 注意这种方式文件夹必须事先存在
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniquePrefix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// const upload = multer({ dest: "uploads/" });

// use使用中间件，这里是全局使用中间件
app.use(function (request, response, next) {
  console.log("In comes a " + request.method + " to " + request.url);
  next();
});

// 单独中间件
app.get(
  "/",
  (req, res, next) => {
    console.log("我是单独中间件");
    next();
  },
  (req, res) => {
    res.send("get method!");
  }
);

app.get("/user", (req, res) => {
  // get 参数获取
  const params = req.query;
  res.send(params);
});

app.get("/user2/:name/:age", (req, res) => {
  // 路径参数获取
  const params = req.params;
  res.send(params);
});

// 路径参数监听
app.param("name", (req, res, next, name) => {
  console.log(name);
  next();
});

// 请求体参数获取

// 老版本写法 不推荐
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// 4.16以后的写法 推荐
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/user", (req, res) => {
  const params = req.body;
  res.send(params);
});

// 获取了两种参数
app.put("/user/:sex", (req, res) => {
  const params = req.body;
  params.sex = req.params.sex;
  res.send(params);
});

app.delete("/user", (req, res) => {
  const params = req.query;
  res.send(params);
});

// 所有请求，但是是当没有匹配到的时候才会进入该方法，否则不会进入
app.all("/testall", (req, res) => {
  res.send("所有请求都可以？" + req.method);
});

app.post("/file", upload.single(), (req, res) => {
  res.json(req.file);
});

// 字段名必须为avatar
app.post("/file2", upload.single("avatar"), (req, res) => {
  res.json(req.file);
});

// 多张，不命名
app.post("/files", upload.array(), (req, res) => {
  res.json(req.files);
});

// 多张，命名。最大三张
app.post("/files2", upload.array("avatars", 3), (req, res) => {
  res.json(req.files);
});

// 多张，多命名。最大三张
app.post(
  "/files3",
  upload.fields([
    { name: "avatar", macCount: 2 },
    { name: "banner", maxCount: 3 },
  ]),
  (req, res) => {
    res.json(req.files);
  }
);

// 讲台资源处理
app.use("/static", express.static(path.join(__dirname, "uploads")));

// 路由，模块化处理
// router可以看做是app的一个子应用，app对象所具有的功能基本上router对象也都可以使用
const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("serve runing on 3000");
});
