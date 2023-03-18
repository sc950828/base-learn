// 使用define定义模块
define(function () {
  console.log("amd2.js");
  require(["./amd3.js"], function (m) {
    console.log(m);
  });
  return {
    name: "amd2",
  };
});

// console.log(define.amd);
