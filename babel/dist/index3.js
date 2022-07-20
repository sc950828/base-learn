"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
var result1 = (0, _includes["default"])(arr1).call(arr1, 8);
console.log(result1);