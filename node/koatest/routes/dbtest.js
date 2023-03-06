const Router = require("@koa/router");
const router = new Router({ prefix: "/dbtest" });
const client = require("../db/redis");

router.get("/redis", async (ctx) => {
  await client.set("name", "jack");
  const name = await client.get("name");
  ctx.body = { name };
});

module.exports = router;
