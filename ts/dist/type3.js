"use strict";
const test1 = {
    baz: [1, "randy"],
    bar: true,
};
// is关键字，方法返回ture就代表is表达式成立
// function isString(test: any): boolean {
function isString(test) {
    return typeof test === "string";
}
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
example("hello world");
const x = f(Math.random() < 0.5);
const y = f(false);
const z = f(true);
