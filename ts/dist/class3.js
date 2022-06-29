"use strict";
class Parent {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
class A1 {
    constructor() {
        this.sex = "male";
        // abstract hi3: (num: number) => number;
    }
    say() {
        console.log("say");
    }
}
// 无法创建抽象类的实例。
// const a1 = new A1()
class Son extends A1 {
    hi() {
        console.log("hi");
    }
    hi2(num) {
        return num + 1;
    }
    hello() {
        console.log("hello");
    }
    hello2() {
        console.log("hello2");
    }
}
const s1 = new Son();
console.log(s1);
s1.say();
s1.hi2(1);
class A2 {
}
class A3 {
}
// 抽象类可以继承抽象类，并且不需要把抽象属性和方法实现。
class A4 extends A2 {
}
// 抽象类可以继承普通类
class A5 extends A3 {
}
