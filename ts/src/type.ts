let num1: number = 123;

let str1: string = "randy";

let bool1: boolean = true;

let null1: null = null;

let undef1: undefined = undefined;

let symbol1: symbol = Symbol(1);

// 使用 BigInt 需要在lib 配置 "ESNext"
let bigint1: bigint = BigInt("11111111111111");
// 目标低于 ES2020 时，bigInt 文本不可用
// let bigint2: bigint = 222222222222222222n;

// void
let v2: void = undefined;

let fun1 = (): void => {
  console.log(1);
};

// strictNullChecks 设置为false后 null 可以赋值给任何类型的变量
// num1 = null;
// str1 = undefined;
// undef1 = null;
// let v1: void = null;

// 数组
let arr1: number[] = [1, 2, 3];
let arr2: string[] = ["1", "2", "3"];
let arr3: (string | number)[] = ["1", "2", "3", 4, 5, 6];
let arr4: Array<number> = [1, 2, 3];
let arr5: Array<string> = ["1", "2", "3"];
let arr6: Array<string | number> = ["1", "2", "3", 4, 5, 6];

// any he unknown
let value: any;

value = true; // OK
value = 1; // OK
value = "Hello World"; // OK
value = Symbol("type"); // OK
value = {}; // OK
value = []; // OK

let value2: unknown;

value = true; // OK
value = 1; // OK
value = "Hello World"; // OK
value = Symbol("type"); // OK
value = {}; // OK
value = []; // OK

let value3: any;

value3.foo.bar; // OK
value3(); // OK
new value3(); // OK
value3[0][1]; // OK

let value4: unknown;

// value4.foo.bar; // ERROR
// value4(); // ERROR
// new value4(); // ERROR
// value4[0][1]; // ERROR

// 联合类型
type Flag1 = { x: number };
type Flag2 = Flag1 & { y: string };

let flag3: Flag2 = {
  x: 1,
  y: "hello",
};

// 交叉类型
export interface User1 {
  name: string;
}

export interface User2 {
  age: number;
}

type User3 = User1 & User2;

const user: User3 = { name: "randy", age: 24 };
console.log(user);

// 字面量类型
let flag1: "hello" = "hello";
let flag2: 1 = 1;
let flag4: true = true;

// flag1 = 'randy' // error 不能将类型“"randy"”分配给类型“"hello"”。
// flag2 = 2 // error 不能将类型“2”分配给类型“1”
// flag4 = false // error 不能将类型“false”分配给类型“true”

// 字面量类型 联合类型
// type Direction2 = "up" | "down";

// function move(dir: Direction2) {
//   // ...
// }
// move("up"); // ok
// move("right"); // 类型“"right"”的参数不能赋给类型“Direction2”的参数

// 非空断言
let flag: null | undefined | string;
flag!.toString(); // ok
// flag.toString(); // error
