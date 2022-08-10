// const module1 = require("./cjs2");

// console.log(module1.name);
// console.log(module1());
// console.log(module1.getName());

// console.log(module1.count);
// module1.incCount();
// console.log(module1.count);

// console.log(module1.user);
// module1.incAge();
// console.log(module1.user);

// console.log(this); // {}

// if (true) {
//   const module1 = require("./cjs2");
//   console.log(module1.count);
// }

console.log("cjs1开始执行");
require("./cjs2.js");
require("./cjs3.js");
console.log("cjs1执行完毕");
