// 全局模块
// console.log(process);

// 环境变量
// console.log("process.env", process.env);

// NODE_ENV=production node process.js
console.log(process.env.NODE_ENV); // production

// 参数
// aaa=dev node process.js name randy
console.log(process.argv);
console.log(process.env.aaa); // dev
// 输出
// [
//   'C:\\Users\\lq\\AppData\\Roaming\\nvm\\v14.21.1\\node.exe',
//   'D:\\myworkspace\\base-learn\\node\\process.js'
//   'name',
//   'randy'
// ]

// 特殊参数
// node --harmony process.js --name randy
console.log(process.execArgv);
// 输出
// [ '--harmony' ]

// 当前工作路径
console.log(process.cwd()); // /Users/randy/myproject/base-learn/node
// 切换工作目录
// process.chdir("../npm");
// console.log(process.cwd()); // /Users/randy/myproject/base-learn/npm

// 跟node的编译配置参数有关
// console.log("process.config", process.config);

// 输入输出
process.stdin.setEncoding("utf8");
// 监听读取
process.stdin.on("readable", () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});

// 读关闭
process.stdin.on("end", () => {
  process.stdout.write("stdin end");
});

// 当前进程信息
console.log(process.pid);
process.title = "主进程";
console.log(process.title);
// 当前node进程已经运行了多长时间（单位是秒）。
console.log(process.uptime()); // 0.0291715
// 返回进程占用的内存，单位为字节。输出内容大致如下
console.log(process.memoryUsage());
// {
//   rss: 31883264,
//   heapTotal: 6057984, // V8占用的内容
//   heapUsed: 3449728, // V8实际使用了的内存
//   external: 1129337,
//   arrayBuffers: 9898
// }

console.log(process.version); // v14.21.1
console.log(process.versions);
// {
//   node: '14.21.1',
//   v8: '8.4.371.23-node.87',
//   uv: '1.42.0',
//   zlib: '1.2.11',
//   brotli: '1.0.9',
//   ares: '1.18.1',
//   modules: '83',
//   nghttp2: '1.42.0',
//   napi: '8',
//   llhttp: '2.1.6',
//   openssl: '1.1.1q',
//   cldr: '40.0',
//   icu: '70.1',
//   tz: '2022e',
//   unicode: '14.0'
// }

// node可执行程序的绝对路径
console.log(process.execPath); // C:\Users\lq\AppData\Roaming\nvm\v14.21.1\node.exe
console.log(process.arch); // x64,比如'arm', 'ia32', or 'x64'
console.log(process.platform); // win32

// 子进程
const childProcess = require("child_process");

childProcess.exec(
  "ls -al",
  { encoding: "utf8" },
  function (error, stdout, stderr) {
    if (error) {
      console.error("error: " + error);
      return;
    }
    console.log("stdout: " + stdout);
    console.log("stderr: " + typeof stderr);
  }
);

childProcess.execFile("node", ["--version"], function (error, stdout, stderr) {
  if (error) {
    throw error;
  }
  console.log("execFile", stdout);
});

childProcess.fork("./fstest.js");

childProcess.fork("./fstest.js", {
  silent: true,
});

const ls = childProcess.spawn("ls", ["-al"]);

ls.stdout.on("data", function (data) {
  console.log("data from child: " + data);
});

ls.stderr.on("data", function (data) {
  console.log("error from child: " + data);
});

ls.on("close", function (code) {
  console.log("child exists with code: " + code);
});

const forked = childProcess.fork("./connectedChild.js");

forked.send({ hello: "world" });

forked.on("message", (msg) => {
  console.log("Message from child", msg);
});

setTimeout(() => {
  console.log("setTimeout");
}, 0);

process.nextTick(() => {
  console.log("process.nextTick");
});
