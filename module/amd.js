console.log("adm1开始执行啦");

// 异步加载，使用require导入模块
require(["./amd2.js"], function (m) {
  // 模块加载完才会进入，也就是依赖前置
  console.log("amd1.js");
  console.log(m);
});

console.log("adm1执行结束啦");
