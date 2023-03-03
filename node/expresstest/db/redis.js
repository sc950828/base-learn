const { createClient } = require("redis");

const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

client.connect(); // 开启连接

module.exports = client;
