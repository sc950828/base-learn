const { createClient } = require("redis");

const client = createClient();

// 开启连接
client.connect();

client.on("connect", () => console.log("Redis Has Connect"));
client.on("error", (err) => console.log("Redis Client Error", err));

module.exports = client;
