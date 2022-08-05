export const num: number = 1;

console.log(num);

import logo from "./logo.png";
console.log(logo);

// 图片处理不了
const img = document.createElement("img");
img.src = logo;
// img.src = "./logo.png";

document.body.appendChild(img);
