const express = require("express");
const app = express();
// Multer 不会处理任何非 multipart/form-data 类型的表单数据。
const multer = require("multer");
const path = require("path");
const logger = require("./utils/log");
const { expressjwt } = require("express-jwt");

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

// 连接mongodb
// const runmongodb = require("./db/mongodb.js");
// runmongodb();

// const db = require("./db/mysql2.js");
// db.sequelize.sync();

// 洋葱模型
// use使用中间件，这里是全局使用中间件
app.use(function (request, response, next) {
  console.log("start In comes a " + request.method + " to " + request.url);
  next();
  console.log("end In comes a " + request.method + " to " + request.url);
});

// 静态资源处理，放token上面
app.use("/static", express.static(path.join(__dirname, "uploads")));

// token验证中间件
app.use(
  expressjwt({ secret: "miyao", algorithms: ["HS256"] }).unless({
    path: ["/user/login", "/static"],
  })
);

// 单独中间件
app.get(
  "/",
  async (req, res, next) => {
    console.log("我是单独中间件 start");
    // next();
    // 异步会打乱中间件执行顺序
    // const result = await Promise.resolve(123);
    // console.log(result);
    next();
    console.log("我是单独中间件 end");
  },
  async (req, res, next) => {
    console.log("send result start");
    res.send("get method!");
    console.log("send result end");
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

// 重定向
app.get("/testredirect", (req, res) => {
  res.redirect("/user");
});

// 异步
app.get("/testasync", async (req, res) => {
  let str = "hello";
  str += await Promise.resolve("world");
  res.send(str);
});

// 单文件上传，不固定表单字段名字
app.post("/file", upload.single(), (req, res) => {
  res.json(req.file);
});

// 字单文件上传，段名必须为avatar
app.post("/file2", upload.single("avatar"), (req, res) => {
  res.json(req.file);
});

// 多文件上传，不固定表单字段名字
app.post("/files", upload.array(), (req, res) => {
  res.json(req.files);
});

// 多文件上传，段名必须为avatars，不超过三张
app.post("/files2", upload.array("avatars", 3), (req, res) => {
  res.json(req.files);
});

// 多文件上传，段名必须为avatar、banner，不超过2张的3张
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

// 日志
app.get("/logtest", (req, res) => {
  logger.debug("Some debug messages");
  logger.info("Some info messages");
  logger.warn("Some warn messages");
  logger.error("Some error messages");
  res.send("test log");
});

// 路由，模块化处理
// router可以看做是app的一个子应用，app对象所具有的功能基本上router对象也都可以使用
// const userRouter = require("./routes/user");
// app.use("/user", userRouter);

const dbtestRouter = require("./routes/dbtest.js");
app.use("/db", dbtestRouter);

// const registerRoute = require("./routes/index");
// registerRoute(app);

// 错误处理，模拟错误
app.get("/error", function (req, res, next) {
  // 新建错误
  // 同步错误可以直接捕获
  throw new Error("抛出一个错误");
});

app.get("/error2", async function (req, res, next) {
  // 新建异步错误
  // 异步错误需要显示调用next
  // setImmediate(() => {
  //   // throw new Error("异步抛出一个错误");
  //   // 报告异步错误必须通过 next()
  //   next(new Error("异步抛出一个错误"));
  // });

  try {
    await Promise.reject({ message: "异步抛出一个错误" });
  } catch (error) {
    next(error);
  }
});

// 错误处理中间件，定义在最后
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "服务端错误",
  });
});

app.listen(3000, () => {
  console.log("serve running on 3000");
});
