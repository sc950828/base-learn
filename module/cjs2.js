// module.exports = {
//   name: "我是cjs2.js 我通过module.exports导出",
// };

// exports.name = "我是cjs2.js 我通过exports导出";

// exports = {
//   name: "我是cjs2.js 我通过exports导出",
// };

// 只能有一个 module.exports
// module.exports = say = () => {
//   return "say";
// };

// exports.getName = () => {
//   return "我是common.js";
// };

// let count = 1;

// const incCount = () => {
//   count++;
// };

// let user = { age: 24 };

// const incAge = () => {
//   user.age++;
// };

// module.exports = {
//   count,
//   incCount,
//   user,
//   incAge,
// };

require("./cjs3.js");
console.log("我是cjs2模块");

module.exports = function say() {
  console.log("cjs2");
};
