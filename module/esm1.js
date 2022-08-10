// import { count, incCount } from "./esm2.js";

// console.log(count); // 1
// incCount();
// console.log(count); // 2

// import { name } from "./esm2.js";

// console.log(name); // 我是esm2.js 我通过export导出

// import name from "./esm2.js";

// console.log(name); // 我是esm2.js 我通过export导出

// 只导入
// import "./esm2.js";

// 动态导入
if (true) {
  import("./esm2.js").then((res) => {
    console.log(res);
  });
}

console.log("esm1开始执行");
import "./esm2.js";
import "./esm3.js";
console.log("esm1执行完毕");
