const Router = require("@koa/router");
const router = new Router();

router.post("/file", (ctx) => {
  const files = ctx.request.files;
  ctx.body = files;
});

router.post("/file2", (ctx) => {
  const files = ctx.request.files;
  ctx.body = files;
});

router.post("/files", (ctx) => {
  const files = ctx.request.files;
  ctx.body = files;
});

router.post("/files2", (ctx) => {
  const files = ctx.request.files;
  ctx.body = files;
});

router.post("/files3", (ctx) => {
  const files = ctx.request.files;
  ctx.body = files;
});

// 异步
router.get("/testasync", async (ctx) => {
  let str = "hello";
  str += await Promise.resolve("world");
  ctx.body = str;
});

// 重定向
router.get("/testredirect", (ctx) => {
  ctx.redirect("/user");
});

// 错误处理，模拟错误
router.get("/error", function (ctx, next) {
  // 新建错误
  // 同步错误可以直接捕获
  throw new Error("同步错误");
});

router.get("/error2", async function (ctx, next) {
  // 新建异步错误
  await Promise.reject(new Error("异步错误"));
});

module.exports = router;
