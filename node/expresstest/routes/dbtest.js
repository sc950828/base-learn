const express = require("express");
const router = express.Router();
const client = require("../db/redis");

router.get("/redis", async (req, res) => {
  await client.set("name", "randy");
  const name = await client.get("name");
  await client.disconnect();
  res.json({ name });
});

module.exports = router;
