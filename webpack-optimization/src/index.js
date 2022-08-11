// 懒加载
// document.getElementById("btn1").onclick = async () => {
//   // const imp = await import("./impModule.js");

//   // 暂时没测试出来
//   // const imp = await import(/* webpackPreload: true */ "./impModule.js");

//   const imp = await import(/* webpackPrefetch: true */ "./impModule.js");
//   imp.default();
// };

// code spliting 将第三方模块单独打包
import _ from "lodash";

console.log(_.join(["a", "b", "c"], "-"));

// tree shaking
// import { increase } from "./treeshak";

// console.log(increase(1, 2));

// 样式 代码分割 去除无用代码
import "./index.less";
import "./index2.less";

// IgnorePlugin 忽略第三方模块的指定目录文件
// import moment from "moment";

// // 设置中文
// moment.locale("zh-cn");
// let time = moment().endOf("day").fromNow();

// document.getElementById("root").innerHTML = time;
