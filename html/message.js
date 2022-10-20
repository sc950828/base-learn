// 由此可见 postMessage是一个宏任务
console.log("开始post");
postMessage(123);
console.log("结束post");

Promise.resolve(456).then((res) => {
  console.log(res);
});
