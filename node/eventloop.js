// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout 1");
// });

// setTimeout(() => {
//   console.log("setTimeout 2");
// });

// console.log("end");

// setTimeout(() => {
//   console.log("setTimeout");
// });

// setImmediate(() => {
//   console.log("setImmediate");
// });

// const sleep = (delay) => {
//   const startTime = +new Date();
//   while (+new Date() - startTime < delay) {
//     continue;
//   }
// };

// sleep(2000);

// fs.readFile("./fstest.js", "utf8", (err, data) => {
//   setTimeout(() => {
//     console.log("setTimeout");
//   });

//   setImmediate(() => {
//     console.log("setImmediate");
//   });
// });

// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout");
// });

// setImmediate(() => {
//   console.log("setImmediate");
// });

// Promise.resolve().then(() => {
//   console.log("Promise.resolve");
// });

// process.nextTick(() => {
//   console.log("process.nextTick");
// });

// console.log("end");

// timers阶段
// setTimeout(() => {
//   console.log("setTimeout");

//   Promise.resolve().then(() => {
//     console.log("setTimeout Promise.resolve");
//   });
// });

// // check阶段
// setImmediate(() => {
//   console.log("setImmediate");
//   Promise.resolve().then(() => {
//     console.log("setImmediate Promise.resolve");
//   });
// });

// // 微任务
// Promise.resolve().then(() => {
//   console.log("Promise.resolve");
// });

// // 微任务
// process.nextTick(() => {
//   console.log("process.nextTick");
//   Promise.resolve().then(() => {
//     console.log("nextTick Promise.resolve");
//   });
// });
