const express = require("express");
const router = express.Router();
const client = require("../db/redis");

router.get("/redis", async (req, res) => {
  await client.set("name", "randy");
  const name = await client.get("name");
  res.json({ name });
});

module.exports = router;
