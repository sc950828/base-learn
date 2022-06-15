"use strict";
// 类是对对象的抽象；抽象类是对类的抽象；接口是对行为的抽象
// 相对es中的类 扩充了访问修饰符 public private protected
class People1 {
    constructor(name) {
        this.count = 1;
        this.num = 10;
        console.log("parent constructor");
        this.name = name;
        // 构造函数里面定义的属性和方法会挂载到实例上
        // 外部定义的属性会挂载到实例上，定义的方法会挂载在原型上
        // this.info = "哈哈";
        // this.hi = () => {
        //   console.log("hi");
        // };
    }
    get sex() {
        return this._sex;
    }
    set sex(val) {
        this._sex = val;
    }
    say() {
        console.log("say");
    }
    say1() {
        console.log(this.name + " say");
    }
    say2() {
        console.log("say");
    }
    sayCount() {
        // 能访问到
        console.log(this.count);
    }
}
class Child1 extends People1 {
    // 构造函数是先调用子类再调用父类
    constructor(name, age) {
        console.log("child constructor");
        // 调用父类的构造函数
        super(name);
        this.age = age;
    }
    sayCount2() {
        // 能访问到
        console.log(this.count);
    }
}
// console.log(People1);
// console.log(People1.prototype);
const p1 = new People1("randy");
console.log(p1);
p1.say1();
p1.sayCount();
// 无法分配到 "num" ，因为它是只读属性。
// p1.num = 100;
console.log(p1.num);
// 属性“_sex”为私有属性，只能在类“People1”中访问
// console.log(p1._sex);
// 提供get set 方法就能访问和设置值啦
p1.sex = "男";
console.log(p1.sex);
// 属性“count”受保护，只能在类“People1”及其子类中访问
// 本实例和子实例都不能访问
// p1.count = 1
// console.log(p1.count)
// 不显示定义构造函数 默认会调用父类构造函数
// const c1 = new Child1("demi");
// console.log(c1);
const c2 = new Child1("demi", 24);
console.log(c2);
c2.sayCount2();
// 无法分配到 "num" ，因为它是只读属性。
// c2.num = 11
console.log(c2.num);
// 本实例和子实例都不能访问
// c2.count = 1;
// console.log(c2.count);
