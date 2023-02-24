const http = require("http");

// const options = {
//   protocol: "http:",
//   hostname: "www.baidu.com",
//   port: "80",
//   path: "/",
//   method: "GET",
// };

// const client = http.request(options, function (req) {
//   let data = "";
//   req.setEncoding("utf8");
//   req.on("data", function (chunk) {
//     data += chunk;
//   });
//   req.on("end", function () {
//     console.log(data);
//   });
// });

// client.end();

http.get("http://jsonplaceholder.typicode.com/todos/1", function (req) {
  let data = "";
  req.setEncoding("utf8");
  req.on("data", function (chunk) {
    data += chunk;
  });
  req.on("end", function () {
    console.log(data);
  });
  console.log(req.statusCode);
  console.log(req.statusMessage);
});

const options = {
  method: "POST",
  protocol: "http:",
  hostname: "jsonplaceholder.typicode.com",
  port: "80",
  path: "/posts",
  headers: {
    connection: "keep-alive",
    "content-type": "application/json; charset=UTF-8",
  },
};

// 发送给服务端的数据
const postBody = {
  title: "foo",
  body: "bar",
  userId: 1,
};

// 创建客户端请求
const client = http.request(options, function (req) {
  let data = "";
  req.on("data", function (chunk) {
    data += chunk;
  });
  req.on("end", function () {
    console.log(data);
  });
});

client.write(JSON.stringify(postBody));
client.end();
