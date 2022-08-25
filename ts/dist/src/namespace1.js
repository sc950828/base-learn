"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeNameSpace2 = exports.SomeNameSpace1 = void 0;
var SomeNameSpace1;
(function (SomeNameSpace1) {
    SomeNameSpace1.a1 = 1;
    SomeNameSpace1.str1 = "randy";
    SomeNameSpace1.say = function () {
        console.log("SomeNameSpace1");
    };
})(SomeNameSpace1 = exports.SomeNameSpace1 || (exports.SomeNameSpace1 = {}));
var SomeNameSpace2;
(function (SomeNameSpace2) {
    SomeNameSpace2.a1 = 1;
    SomeNameSpace2.str1 = "randy";
    SomeNameSpace2.say = function () {
        console.log("SomeNameSpace2");
    };
})(SomeNameSpace2 = exports.SomeNameSpace2 || (exports.SomeNameSpace2 = {}));
console.log(SomeNameSpace2.a1);
