"use strict";
const user1 = {
    name: "randy",
    age: 24,
    isMale: true,
    hi: (num) => {
        return num;
    },
    hi2: () => { },
    // 没有该属性， 除非加上任意属性
    wu1: 123,
    wu2: "haha",
};
user1.age = 25;
// 只读属性不能被修改
// user1.isMale = false
const getUserName = (user) => user.name;
const user2 = {
    say(str) {
        return str;
    },
    concat: {
        email: "qq.com",
        phone: "17673485272",
        // phone: 17673485272,
    },
};
const child1 = {
    name: "randy",
    say(str) {
        return str;
    },
    concat: {
        phone: "17673485272",
    },
};
const user4 = { name: "randy", age: 25 };
