interface User {
  name: string; // 必须属性
  age?: number; // 可选属性
  readonly isMale: boolean; // 只读属性
  hi: (num: number) => number; // 必须函数
  say?: (str: string) => string; // 可选函数
  readonly say2: (str: string) => string; // 只读函数
  hi2(): void; // 没有返回值的方法
  hi3: () => void; // 没有返回值的方法
  [prop1: string]: any; // 任意属性
}

let user1: User = {
  name: "randy",
  isMale: false,
  hi: (num: number) => {
    return num;
  },
  hi2: () => {},
  hi3: () => {
    console.log("hi3");
  },
  say2: (str: string) => {
    return str;
  },
};

user1.hi2 = () => {
  console.log("update hi2");
};

user1.hi2();
user1.hi3();

// user1.say2 = (str: string) => {
//   return str + "hi";
// };

user1.count = 1;
user1.count2 = 1;
user1.count3 = 1;
user1.haha = () => {
  console.log("haha");
};

// const sy: symbol = Symbol("test");
// user1[sy] = 123;

console.log(user1);

// 接口定义函数
interface Say {
  (words: string): string;
}

const say: Say = (str) => str;

// 支持多次定义
interface User2 {
  name: string;
}
interface User2 {
  age: number;
}

const user2: User2 = { name: "randy", age: 24 };

// type不能重复定义
// type User2 = { name: string };

// type User2 = { age: number };

// const user2: User2 = { name: "randy", age: 24 };

// 接口可以被实现
// class People implements User2 {
//   name = "randy";
//   age = 24;
// }

// 类型别名 定义原始类型别名
// type newstring = string;

// const str2: newstring = "randy";

// console.log(str2);
