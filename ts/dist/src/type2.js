"use strict";
// 类型守卫
var Person = /** @class */ (function () {
    function Person() {
        this.name = "xiaomuzhu";
        this.age = 20;
    }
    return Person;
}());
var Animal3 = /** @class */ (function () {
    function Animal3() {
        this.name = "petty";
        this.color = "pink";
    }
    return Animal3;
}());
function getSometing(arg) {
    // 不类型守卫 不管使用啥属性都报错。
    // console.log(arg.age); // Error
    // console.log(arg.color); // Error
    // 类型细化为 Person
    if (arg instanceof Person) {
        // console.log(arg.color); // Error，因为arg被细化为Person，而Person上不存在 color属性
        console.log(arg.age); // ok
    }
    // 类型细化为 Person
    if (arg instanceof Animal3) {
        // console.log(arg.age); // Error，因为arg被细化为Animal，而Animal上不存在 age 属性
        console.log(arg.color); // ok
    }
}
// in
var Person4 = /** @class */ (function () {
    function Person4() {
        this.name = "randy";
        this.age = 24;
    }
    return Person4;
}());
var Animal4 = /** @class */ (function () {
    function Animal4() {
        this.name = "dog";
        this.color = "green";
    }
    return Animal4;
}());
function getSometing2(arg) {
    // 不类型守卫 不管使用啥属性都报错。
    // console.log(arg.age); // Error
    // console.log(arg.color); // Error
    if ("age" in arg) {
        // console.log(arg.color); // Error
        console.log(arg.age); // ok
    }
    if ("color" in arg) {
        // console.log(arg.age); // Error
        console.log(arg.color); // ok
    }
}
