const Router = require("@koa/router");
const router = new Router({ prefix: "/user" });

// 洋葱模型
router.get(
  "/select",
  (ctx, next) => {
    console.log("我是单独中间件 start");
    next();
    console.log("我是单独中间件 end");
  },
  (ctx) => {
    console.log("send result start");
    ctx.body = "get method!";
    console.log("send result end");
  }
);

router.get("/", (ctx) => {
  // const query = ctx.query;
  const query = ctx.request.query;
  ctx.body = query;
});

router.post("/", (ctx) => {
  const body = ctx.request.body;
  ctx.body = body;
});

router.put("/:male", (ctx) => {
  const params = ctx.params;
  // const params = ctx.request.params;
  ctx.body = params;
});

router.del("/", (ctx) => {
  const query = ctx.query;
  ctx.body = query;
});

router.all("/userall", (ctx) => {
  ctx.body = "所有请求都可以？" + ctx.method;
});

module.exports = router;
