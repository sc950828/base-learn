"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 类装饰器
// 当装饰器作为修饰类的时候，会把构造器传递进去。
function addAge(constructor) {
    constructor.prototype.age = 18;
}
let Test4 = class Test4 {
    constructor() {
        this.name = "";
    }
};
Test4 = __decorate([
    addAge
], Test4);
const test4_1 = new Test4();
console.log(test4_1.age);
// 属性方法装饰器
// 声明装饰器修饰方法/属性
// 普通函数的装饰器接收的参数第一个是类的原型第二个是方法名第三个是修饰符
// static 函数的装饰器接收的参数第一个是类的构造函数第二个是方法名第三个是修饰符
// 函数的装饰器运行是在类初始化的时候
function method(target, propertyKey, descriptor) {
    console.log(target);
    console.log("prop " + propertyKey);
    console.log("desc " + JSON.stringify(descriptor) + "\n\n");
    // 设置不能编辑或删除
    descriptor.writable = false;
}
// 属性的装饰器接收的参数第一个是类的原型第二个是属性名
// 属性的装饰器运行是在类初始化的时候
function prop(target, key) {
    console.log(target);
    console.log("prop " + key);
    const descriptor = {
        writable: false,
    };
    return descriptor;
}
class Test5 {
    constructor() {
        this.name = "randy";
    }
    say() {
        return "instance method";
    }
    static run() {
        return "static method";
    }
}
__decorate([
    prop
], Test5.prototype, "name", void 0);
__decorate([
    method
], Test5.prototype, "say", null);
__decorate([
    method
], Test5, "run", null);
const test5_1 = new Test5();
// 修改实例方法say
test5_1.say = function () {
    return "edit";
};
test5_1.name = "demi";
// 打印结果,检查是否成功修改实例方法
console.log(test5_1.say());
