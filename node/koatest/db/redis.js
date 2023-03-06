const { createClient } = require("redis");

const client = createClient();

// 开启连接
client.connect();

// 连接成功事件
client.on("connect", () => console.log("Redis Client Connect Success"));
// 错误事件
client.on("error", (err) => console.log("Redis Client Error", err));

module.exports = client;
