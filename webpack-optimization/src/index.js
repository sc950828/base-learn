// 懒加载
// document.getElementById("btn1").onclick = async () => {
//   const imp = await import(/* webpackChunkName: "btnChunk" */ "./impModule.js");

//   // 暂时没测试出来
//   // const imp = await import(/* webpackPreload: true */ "./impModule.js");

//   // const imp = await import(/* webpackPrefetch: true */ "./impModule.js");
//   imp.default();
// };

// code spliting 将第三方模块单独打包
// import _ from "lodash";
import $ from "jquery";
// import { common } from "./common";

// console.log(_.join(["a", "b", "c"], "-"));
console.log($);
// console.log(common);

setTimeout(() => {
  import(/* webpackChunkName: "impModule" */ "./impModule.js");
});

// tree shaking
// import { increase } from "./treeshak";
// import say from "./impModule";

// console.log(increase(Math.random(), Math.random()));

// say();

// 样式 代码分割 去除无用代码
// import "./index.less";
// import "./index2.less";
// import "./test.css";
// import logo from "./logo.png";
// console.log(logo);

// IgnorePlugin 忽略第三方模块的指定目录文件
// import moment from "moment";

// 设置中文
// moment.locale("zh-cn");
// let time = moment().endOf("day").fromNow();
// console.log(time);

// document.getElementById("root").innerHTML = time;

// 基础代码
// const names = ["randy", "jack"];

// const say = (_name) => {
//   console.log(_name);
// };

// say(Math.random() > 0.5 ? names[1] : names[0]);
