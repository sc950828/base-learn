"use strict";
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
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.name = name;
        this.name = name;
    }
    return Parent;
}());
var A1 = /** @class */ (function () {
    function A1() {
        this.sex = "male";
        // abstract hi3: (num: number) => number;
    }
    A1.prototype.say = function () {
        console.log("say");
    };
    return A1;
}());
// 无法创建抽象类的实例。
// const a1 = new A1()
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.age = 20;
        _this.name = "demi";
        _this.name2 = "randy";
        return _this;
    }
    Son.prototype.hi = function () {
        console.log("hi");
    };
    Son.prototype.hi2 = function (num) {
        return num + 1;
    };
    Son.prototype.hello = function () {
        console.log("hello");
    };
    Son.prototype.hello2 = function () {
        console.log("hello2");
    };
    return Son;
}(A1));
var s1 = new Son();
console.log(s1);
s1.say();
s1.hi2(1);
var A2 = /** @class */ (function () {
    function A2() {
    }
    return A2;
}());
var A3 = /** @class */ (function () {
    function A3() {
    }
    return A3;
}());
// 抽象类可以继承抽象类，并且不需要把抽象属性和方法实现。
var A4 = /** @class */ (function (_super) {
    __extends(A4, _super);
    function A4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return A4;
}(A2));
// 抽象类可以继承普通类
var A5 = /** @class */ (function (_super) {
    __extends(A5, _super);
    function A5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return A5;
}(A3));
