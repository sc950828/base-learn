const Koa = require("koa");
const app = new Koa();
const userRouter = require("./routes/user");
const fileRouter = require("./routes/file");
const { koaBody } = require("koa-body");
const path = require("path");
const koaStatic = require("koa-static");

// post参数
app.use(
  koaBody({
    // 处理文件上传
    multipart: true,
    formidable: {
      // 使用oss上传就注释 上传到本地就打开。路径必须事先存在
      uploadDir: path.join(__dirname, "./uploads"),
      keepExtensions: true,
    },
  })
);

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    // 响应用户
    ctx.status = error.status || 500;
    ctx.body = error.message || "服务端错误";
    // ctx.app.emit("error", error); // 触发应用层级error事件
  }
});

// 全局中间件
app.use(async (ctx, next) => {
  console.log(
    "start In comes a " + ctx.request.method + " to " + ctx.request.url
  );
  await next();
  console.log(
    "end In comes a " + ctx.request.method + " to " + ctx.request.url
  );
  // throw new Error(123);
  // ctx.body = "Hello World";
});

// app.use(userRouter.routes()).use(userRouter.allowedMethods());
// app.use(fileRouter.routes()).use(fileRouter.allowedMethods());

const registerRoutes = require("./routes/index");
registerRoutes(app);

app.use(koaStatic(path.join(__dirname, "uploads")));

app.listen(3000, () => {
  console.log("serve running on 3000");
});

// app.on("error", (err, ctx) => {
//   console.error("server error", err, ctx);
// });
