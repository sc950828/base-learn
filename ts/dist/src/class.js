"use strict";
// 类是对对象的抽象；抽象类是对类的抽象；接口是对行为的抽象
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 相对es中的类 扩充了访问修饰符 public private protected
var People1 = /** @class */ (function () {
    function People1(name) {
        this._sex = "male";
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
    Object.defineProperty(People1.prototype, "sex", {
        get: function () {
            return this._sex;
        },
        set: function (val) {
            this._sex = val;
        },
        enumerable: false,
        configurable: true
    });
    People1.prototype.say = function () {
        console.log("say");
    };
    People1.prototype.say1 = function () {
        console.log(this.name + " say");
    };
    People1.prototype.say2 = function () {
        console.log("say");
    };
    People1.prototype.sayCount = function () {
        // 能访问到
        console.log(this.count);
    };
    return People1;
}());
var Child1 = /** @class */ (function (_super) {
    __extends(Child1, _super);
    // 构造函数是先调用子类再调用父类
    function Child1(name, age) {
        var _this = this;
        console.log("child constructor");
        // 调用父类的构造函数
        _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    Child1.prototype.sayCount2 = function () {
        // 能访问到
        console.log(this.count);
    };
    return Child1;
}(People1));
// console.log(People1);
// console.log(People1.prototype);
var p1 = new People1("randy");
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
var c2 = new Child1("demi", 24);
console.log(c2);
c2.sayCount2();
// 无法分配到 "num" ，因为它是只读属性。
// c2.num = 11
console.log(c2.num);
// 本实例和子实例都不能访问
// c2.count = 1;
// console.log(c2.count);
