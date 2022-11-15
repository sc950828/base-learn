"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

// import "@babel/polyfill";
// "useBuiltIns": "entry"的时候需要选择配置
// core-js 2.0中是使用"@babel/polyfill"
// import "@babel/polyfill";
// core-js3.0版本中变化成为了下面两个包
// import "core-js/stable";
// import "regenerator-runtime/runtime";
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
var result1 = (0, _includes["default"])(arr1).call(arr1, 8);
console.log(result1);