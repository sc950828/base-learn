const Router = require("@koa/router");
const router = new Router({ prefix: "/user" });
const jwt = require("jsonwebtoken");
const {
  create,
  query,
  login,
  testData,
} = require("../controller/userController");

// 洋葱模型
router.get(
  "/select",
  async (ctx, next) => {
    console.log("我是单独中间件 start");
    const result = await Promise.resolve(123);
    console.log(result);
    await next();
    // const result = await Promise.resolve(123);
    // console.log(result);
    console.log("我是单独中间件 end");
  },
  async (ctx) => {
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

router.post("/create", create);
router.get("/query", query);
router.post("/login", login);
router.get("/testData", testData);

module.exports = router;
