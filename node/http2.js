const http = require("http");

const server = http.createServer(function (serverReq, serverRes) {
  const url = serverReq.url;
  serverRes.end("您访问的地址是：" + url);
});

server.on("close", () => {
  console.log("服务关闭啦");
});

server.listen(3000, () => {
  console.log("服务器端开始监听!");
  // server.close();
});

// server.close();

// http client 例子
// var client = http.get("http://127.0.0.1:3000", function (clientRes) {
//   clientRes.pipe(process.stdout);
// });

server.on("error", (e) => {
  console.log(e);
});
