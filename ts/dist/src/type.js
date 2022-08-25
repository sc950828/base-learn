"use strict";
var num1 = 123;
var str1 = "randy";
var bool1 = true;
var null1 = null;
var undef1 = undefined;
var symbol1 = Symbol(1);
// 使用 BigInt 需要在lib 配置 "ESNext"
var bigint1 = BigInt("11111111111111");
// 目标低于 ES2020 时，bigInt 文本不可用
// let bigint2: bigint = 222222222222222222n;
// void
var v2 = undefined;
var fun1 = function () {
    console.log(1);
};
// strictNullChecks 设置为false后 null 可以赋值给任何类型的变量
// num1 = null;
// str1 = undefined;
// undef1 = null;
// let v1: void = null;
// 数组
var arr1 = [1, 2, 3];
var arr2 = ["1", "2", "3"];
var arr3 = ["1", "2", "3", 4, 5, 6];
var arr4 = [1, 2, 3];
var arr5 = ["1", "2", "3"];
var arr6 = ["1", "2", "3", 4, 5, 6];
// any he unknown
var value;
value = true; // OK
value = 1; // OK
value = "Hello World"; // OK
value = Symbol("type"); // OK
value = {}; // OK
value = []; // OK
var value2;
value = true; // OK
value = 1; // OK
value = "Hello World"; // OK
value = Symbol("type"); // OK
value = {}; // OK
value = []; // OK
var value3;
value3.foo.bar; // OK
value3(); // OK
new value3(); // OK
value3[0][1]; // OK
var value4;
var flag3 = {
    x: 1,
    y: "hello",
};
var user = { name: "randy", age: 24 };
console.log(user);
// 字面量类型
var flag1 = "hello";
var flag2 = 1;
var flag4 = true;
// flag1 = 'randy' // error 不能将类型“"randy"”分配给类型“"hello"”。
// flag2 = 2 // error 不能将类型“2”分配给类型“1”
// flag4 = false // error 不能将类型“false”分配给类型“true”
// 字面量类型 联合类型
// type Direction2 = "up" | "down";
// function move(dir: Direction2) {
//   // ...
// }
// move("up"); // ok
// move("right"); // 类型“"right"”的参数不能赋给类型“Direction2”的参数
// 非空断言
var flag;
flag.toString(); // ok
// flag.toString(); // error
