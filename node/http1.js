const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  // console.log("1、客户端请求url：" + req.url);
  // console.log("2、http版本：" + req.httpVersion);
  // console.log("3、http请求方法：" + req.method);
  // console.log("4、http请求头部" + JSON.stringify(req.headers));

  // 获取get请求参数
  // const params = url.parse(req.url, true);
  // console.log(params.query);

  // 获取post请求参数
  // let body = "";
  // req.on("data", function (thunk) {
  //   body += thunk;
  // });

  // req.on("end", function () {
  //   console.log("post body is: " + body);
  //   res.end("ok");
  // });

  // 设置头部，只能在writeHead的前面，不能在后面。但是writeHead可以覆盖setHeader
  res.setHeader("Content-Type", "text-plain");
  // 查
  console.log(res.getHeader("content-type")); //text-plain
  // 删除
  res.removeHeader("Content-Type");

  // res.writeHead() 可以提供额外的功能，比如设置响应头部。
  res.writeHead(200, "ok", {
    "Content-Type": "text/plain",
  });

  // 简写 res.writeHead(200, "ok")
  // res.statusCode = 200;
  // res.statusMessage = "ok";

  res.write("hello");
  res.end("world");
});

server.listen(3000, () => {
  console.log("server runing on 3000");
});

server.on("error", (err) => {
  console.log("server error", err);
});
