// import "@babel/polyfill";
// import Promise from "babel-runtime/core-js/promise";

// "useBuiltIns": "entry"的时候需要选择配置

// core-js 2.0中是使用"@babel/polyfill"
// import "@babel/polyfill";

// core-js3.0版本中变化成为了下面两个包
// import "core-js/stable";
// import "regenerator-runtime/runtime";

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const result1 = arr1.includes(8);

console.log(result1);
