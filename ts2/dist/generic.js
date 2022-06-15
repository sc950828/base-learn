"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function returnItem(para) {
    return para;
}
console.log(returnItem("randy"));
console.log(returnItem(1));
// 多个类型
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
console.log(swap([7, "seven"])); // ['seven', 7]
function genfun1() {
    return __awaiter(this, void 0, void 0, function* () {
        // async function fetchApi<T>(path: string): Promise<T> {
        function fetchApi(path) {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield fetch(`https://example.com/api${path}`);
                return response.json();
            });
        }
        const result = yield fetchApi("/users");
        // console.log(result.name) // Error
        console.log(result.name); // OK
    });
}
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
const stack1 = new Stack();
stack1.push(1);
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
const stack2 = new Stack2();
const stack3 = new Stack2();
// const stack4 = new Stack2<boolean>(); // 类型“boolean”不满足约束“Union1”
// interface Inter4<T> {
//   param: T
// }
// const param1: Inter4<string> = {param: 123} // Error 不能将类型“number”分配给类型“string”。
// const param2: Inter4<string> = {param: 'randy'} // OK
