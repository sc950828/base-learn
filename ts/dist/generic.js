"use strict";
// 泛型
// 这个变量代表了传入的类型，然后再返回这个变量，它是一种特殊的变量，只用于表示类型而不是值。
function returnItem(param) {
    return param;
}
function returnItem2(tuple) {
    return [tuple[1], tuple[0]];
}
// 泛型变量
function getArrayLength(arr1) {
    return arr1.length;
}
function getArrayLength2(arr1) {
    return arr1.length;
}
const returnItem3 = (param) => param;
// 泛型类
class Stack {
    constructor() {
        this.arr = [];
    }
    push(item) {
        this.arr.push(item);
    }
    pop() {
        this.arr.pop();
    }
}
class Stack2 {
    constructor() {
        this.arr = [];
    }
    push(item) {
        this.arr.push(item);
    }
    pop() {
        this.arr.pop();
    }
}
const sta1 = new Stack2();
const sta2 = new Stack2();
// 报错
const sta3 = new Stack2();
// 索引类型
function getValue(obj, key) {
    return obj[key];
}
const user3 = { name: "randy", age: 24 };
getValue(user3, "age");
// new
// 参数 type 的类型 {new(): T} 就表示此泛型 T 是可被构造的，在被实例化后的类型是泛型 T。
function Factory(type) {
    return new type();
}
