"use strict";
// 需要开启 "experimentalDecorators": true
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 类装饰器
// 参数是类本身
function addAge(constructor) {
    console.log("类装饰器", constructor);
    constructor.prototype.age = 18;
}
// 参数装饰器
function logParameter(target, propertyKey, index) {
    console.log("参数装饰器", target, propertyKey, index);
}
// 声明装饰器修饰方法
// 普通函数的装饰器接收的参数第一个是类的原型第二个是方法名第三个是修饰符
// static 函数的装饰器接收的参数第一个是类的构造函数第二个是方法名第三个是修饰符
// 函数的装饰器运行是在类初始化的时候
function method(target, propertyKey, descriptor) {
    console.log("方法装饰器", target);
    console.log("prop " + propertyKey);
    console.log("desc " + JSON.stringify(descriptor) + "\n\n");
    descriptor.writable = false;
}
function prop2(target, key) {
    console.log("属性装饰器2", target);
    console.log("prop " + key);
    const descriptor = {
        writable: true,
        configurable: true,
        enumerable: true,
        value: "jack",
    };
    // return 123;
    // {"writable":true,"enumerable":false,"configurable":true}
    return descriptor;
}
// 属性的装饰器接收的参数第一个是类的原型第二个是属性名
// 属性的装饰器运行是在类初始化的时候
function prop(target, key) {
    console.log("属性装饰器", target);
    console.log("prop " + key);
    const descriptor = {
        writable: true,
        configurable: true,
        enumerable: true,
        value: "jack",
    };
    // return 123;
    // {"writable":true,"enumerable":false,"configurable":true}
    return descriptor;
}
let Person10 = class Person10 {
    constructor() {
        this.name = "randy";
    }
    // 同时定义 先执行参数装饰器
    greet(message, name) {
        return `${message} ${name}`;
    }
    say() {
        return "instance method";
    }
    static run() {
        return "static method";
    }
};
__decorate([
    method,
    __param(0, logParameter),
    __param(1, logParameter)
], Person10.prototype, "greet", null);
__decorate([
    prop2,
    prop
], Person10.prototype, "name", void 0);
__decorate([
    method
], Person10.prototype, "say", null);
__decorate([
    method
], Person10, "run", null);
Person10 = __decorate([
    addAge
], Person10);
const person2 = new Person10();
// 修改实例方法say
// person2.say = function () {
//   return "edit";
// };
// 打印结果,检查是否成功修改实例方法
console.log(person2.say());
// person2.name = "demi";
console.log(person2);
// console.log(1, Person10.prototype);
// console.log(2, Person10);
