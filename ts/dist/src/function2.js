"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.example = exports.isString = void 0;
function isString(test) {
    return typeof test === "string";
}
exports.isString = isString;
function example(foo) {
    if (isString(foo) && typeof foo === "string") {
        console.log(foo.length); // string类型才有length属性
    }
}
exports.example = example;
example("hello world");
