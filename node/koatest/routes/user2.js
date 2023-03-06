const Router = require("@koa/router");
const router = new Router({ prefix: "/user2" });
const { create, query } = require("../controller/user2Controller.js");

router.post("/create", create);
router.get("/query", query);

module.exports = router;
