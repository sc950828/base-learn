"use strict";
let user1 = {
    name: "randy",
    isMale: false,
    hi: (num) => {
        return num;
    },
    hi2: () => { },
    hi3: () => {
        console.log("hi3");
    },
    say2: (str) => {
        return str;
    },
};
user1.hi2 = () => {
    console.log("update hi2");
};
user1.hi2();
user1.hi3();
// user1.say2 = (str: string) => {
//   return str + "hi";
// };
user1.count = 1;
user1.count2 = 1;
user1.count3 = 1;
user1.haha = () => {
    console.log("haha");
};
// const sy: symbol = Symbol("test");
// user1[sy] = 123;
console.log(user1);
const say = (str) => str;
const user2 = { name: "randy", age: 24 };
// type不能重复定义
// type User2 = { name: string };
// type User2 = { age: number };
// const user2: User2 = { name: "randy", age: 24 };
// 接口可以被实现
// class People implements User2 {
//   name = "randy";
//   age = 24;
// }
// 类型别名 定义原始类型别名
// type newstring = string;
// const str2: newstring = "randy";
// console.log(str2);
