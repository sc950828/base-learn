"use strict";
// class 和 function 的区别
// let Animal = function (type) {
//   this.type = type;
//   this.say = function () {
//     console.log("say");
//   };
// };
// Animal.prototype.info = "动物";
// Animal.prototype.walk = function () {
//   console.log("walk");
// };
var Animal = /** @class */ (function () {
    function Animal(type) {
        this.type = type;
        this.say = function () {
            console.log("say");
        };
    }
    Animal.prototype.walk = function () {
        console.log("walk");
    };
    return Animal;
}());
var a1 = new Animal("dog");
console.log(a1);
// 静态属性 function 和 class
// let Animal2 = function (type) {
//   this.type = type;
// };
// Animal2.count = 1;
// Animal2.say = () => {
//   console.log("say");
// };
var Animal2 = /** @class */ (function () {
    function Animal2(type) {
        this.type = type;
    }
    Animal2.say = function () {
        console.log("say");
    };
    Animal2.count = 1;
    return Animal2;
}());
var a2 = new Animal2("cat");
console.log(a2);
// 这种写法也是支持的，只是在ts中会报错
// Animal2.count2 = 2;
// Animal2.say2 = () => {
//   console.log("say2");
// };
console.log(Animal2.count);
console.log(Animal2.say());
// console.log(Animal2.count2);
// console.log(Animal2.say2());
// console.log(a2.count);
// console.log(a2.say());
