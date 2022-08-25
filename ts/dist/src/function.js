"use strict";
function fun_1(num1, num2) {
    return num1 + num2;
}
var fun_2 = function (num1, str1) {
    return num1 + str1;
};
function fun_3() {
    console.log("fun_3");
}
var fun_4 = function (num1, str1) {
    return num1 + str1;
};
// 没返回值的函数
var fun_6 = function () { };
var fun_5 = function (num1, str1) {
    return num1 + str1;
};
var add = function (arg1, arg2, arg3) {
    if (arg3) {
        return arg1 + arg2 + arg3;
    }
    return arg1 + arg2;
};
add(1, 2); // success   3
add(1, 2, 3); // success   6
var add2 = function (arg1, arg2) {
    if (arg2) {
        return arg1 + arg2;
    }
    return arg1;
};
add2(1);
// 默认参数
var add3 = function (x, y) {
    if (x === void 0) { x = 2; }
    return x + y;
};
console.log(add3(undefined, 10));
// 方法完整的实现
function assigned(a, b, c, d) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d,
    };
}
assigned(1);
assigned(1, 2);
// assigned(1, 2, 3); // 没有定义三个参数的函数，编译阶段直接报错
assigned(1, 2, 3, 4);
