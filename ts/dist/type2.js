"use strict";
// 类型守卫
class Person {
    constructor() {
        this.name = "xiaomuzhu";
        this.age = 20;
    }
}
class Animal3 {
    constructor() {
        this.name = "petty";
        this.color = "pink";
    }
}
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
class Person4 {
    constructor() {
        this.name = "randy";
        this.age = 24;
    }
}
class Animal4 {
    constructor() {
        this.name = "dog";
        this.color = "green";
    }
}
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
