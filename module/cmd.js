console.log("cmd1开始执行啦");

// 使用模块
seajs.use(["./cmd2.js"], function (math) {
  console.log("seajs");
  const sum = math.add();
  console.log(sum);
});

console.log("cmd1执行结束啦");
