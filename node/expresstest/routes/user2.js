const express = require("express");
const router = express.Router();
const { query, create } = require("../controller/user2Controller");

// 获取用户信息
router.get("/query", query);

router.post("/create", create);

module.exports = router;
