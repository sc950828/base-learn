define(function (require, exports, module) {
  console.log("cmd2.js");
  // 需要用到的时候再去加载 cmd3.js
  // 同步加载
  const num = require("./cmd3.js");
  const add = () => {
    return num.a + num.b;
  };
  exports.add = add;
});

// console.log(define.cmd);
