// export let count = 1;

// export const incCount = () => {
//   count++;
// };

// export const name = "我是esm2.js 我通过export导出";

// const name = "我是esm2.js 我通过export default导出";
// export default name;

// console.log(this); // undefined

import "./esm3.js";
console.log("我是esm2模块");

export default function say() {
  console.log("esm2");
}

export const name = "randy";
