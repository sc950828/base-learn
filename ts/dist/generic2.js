"use strict";
// 索引查询操作符
class User6 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user8 = {
    username: "randy",
    id: 2300002033333333,
    token: "230000201922222",
    avatar: "http://randy.jpg",
    role: "admin",
};
function pick(o, names) {
    return names.map((n) => o[n]);
}
const res = pick(user8, ["id"]);
