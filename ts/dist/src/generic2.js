"use strict";
// 索引查询操作符
var User6 = /** @class */ (function () {
    function User6(name, age) {
        this.name = name;
        this.age = age;
    }
    return User6;
}());
var user8 = {
    username: "randy",
    id: 2300002033333333,
    token: "230000201922222",
    avatar: "http://randy.jpg",
    role: "admin",
};
function pick(o, names) {
    return names.map(function (n) { return o[n]; });
}
var res = pick(user8, ["id"]);
