const express = require("express");
const router = express.Router();
const {
  create,
  query,
  login,
  testData,
} = require("../controller/userController");

router.get("/select", (req, res, next) => {
  res.end("get");
});

router.post("/add", (req, res, next) => {
  res.end("post");
});

router.delete("/delete", (req, res, next) => {
  res.end("deleted");
});

router.put("/update", (req, res, next) => {
  res.end("put");
});

router.all("/userall", (req, res) => {
  res.send("所有请求都可以？" + req.method);
});

router.post("/create", create);
router.get("/query", query);
router.post("/login", login);
router.get("/testData", testData);

module.exports = router;
