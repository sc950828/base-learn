"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.example = exports.isString = void 0;
var test1 = {
    baz: [1, "randy"],
    bar: true,
};
// is关键字，方法返回ture就代表is表达式成立
// function isString(test: any): boolean {
function isString(test) {
    return typeof test === "string";
}
exports.isString = isString;
function example(foo) {
    if (isString(foo)) {
        console.log("it is a string" + foo);
        console.log(foo.length); // string function
    }
    // 使用类型守卫
    // if (typeof foo === "string") {
    //   console.log(foo.length); // string function
    // }
}
exports.example = example;
example("hello world");
var x = f(Math.random() < 0.5);
var y = f(false);
var z = f(true);
