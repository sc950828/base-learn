"use strict";
function isString(test) {
    return typeof test === "string";
}
function example(foo) {
    if (isString(foo) && typeof foo === "string") {
        console.log(foo.length); // string类型才有length属性
    }
}
example("hello world");
