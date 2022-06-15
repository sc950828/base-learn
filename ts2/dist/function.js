"use strict";
function fun_1(num1, num2) {
    return num1 + num2;
}
const fun_2 = (num1, str1) => {
    return num1 + str1;
};
function fun_3() {
    console.log("fun_3");
}
const fun_4 = (num1, str1) => {
    return num1 + str1;
};
// 没返回值的函数
const fun_6 = () => { };
const fun_5 = (num1, str1) => {
    return num1 + str1;
};
let add = (arg1, arg2, arg3) => arg1 + arg2 + arg3;
add(1, 2); // success   3
add(1, 2, 3); // success   6
let add2 = (arg1, arg2) => arg1 + arg2;
add2(1);
// 默认参数
const add3 = (x = 2, y) => {
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
