// 这个由 mode 定义，只能是development和production
// new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") })
// new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
console.log(process.env.NODE_ENV);

// 有 development staging production三种模式
console.log(process.env.MODE);

fetch("/user")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

// 热更新
// if (module && module.hot) {
//   module.hot.accept();
// }

console.log("lala123");

// 定义一个错误
// console.log(e);
