// js引入图片
import logo from "./logo.png";

var element = document.createElement("div");

var myIcon = new Image();
myIcon.src = logo;

element.appendChild(myIcon);

document.body.appendChild(element);

// 样式图片
import "./index.css";

// text
import text from "./test.txt";
console.log(text);

// // json
// // json-loader 加载 JSON 文件（默认包含）
// import json from "./test.json";
// console.log(json);

// // xml
// import xml from "./test.xml";
// console.log(xml);

// // csv
// import csv from "./test.csv";
// console.log(csv);
