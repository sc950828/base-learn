// TypeScript的原始类型包括: boolean、number、string、void、undefined、null、symbol、bigint。
const num1: number = 123;
const str1: string = "123";
const bool1: boolean = true;
const null1: null = null;
const undefined1: undefined = undefined;
// symbol
const symbol1: symbol = Symbol("test");
// bigint
const big1: bigint = BigInt("1111111111111111111111111111111");

// void
const fun1 = (str: string): void => {
  console.log(str);
};

// 不能将null赋值给void类型，除非将strictNullCheck设置为false
// const void1: void = null;
const void2: void = undefined;

// any
let any1: any = 123;
any1 = "hello";

// unknown 是 TypeScript 3.0 引入了新类型,是 any 类型对应的安全类型。
let any2: any = 123;
console.log(any2.name);

let unknown1: unknown = 123;
// 没问题，和any一样可以随意赋值
unknown1 = "hello";

// 虽然它们都可以是任何类型,但是当 unknown 类型被确定是某个类型之前,它不能被进行任何操作比如实例化、getter、函数执行等等。
// 报错
// console.log(unknown1.name);

// never 类型表示的是那些永不存在的值的类型，never 类型是任何类型的子类型，也可以赋值给任何类型；
// 抛出异常的函数永远不会有返回值
function error(message: string): never {
  throw new Error(message);
}

// 数组
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [4, 5, 6];

// 元祖
// 元组类型与数组类型非常相似，表示一个已知元素数量和类型的数组，各元素的类型不必相同。
const tuple1: [number, string] = [1, "a"];
// 元组中包含的元素，必须与声明的类型一致，而且不能多、不能少，甚至顺序不能不符。
// const tuple2: [number, string] = ["b", "a"];

// 插入不报错
tuple1.push("b");
// 访问就会报错
// console.log(tuple1[2]);

// 联合类型
let lianhe1: number | string = 123;
lianhe1 = "hello";

// 对象
const obj1: object = { name: "randy", age: 12 };

// 函数
function fun2(str: string): void {
  console.log(str);
}

const fun3 = (str: string): void => {
  console.log(str);
};

function fun4(num: number): number {
  return num;
}

const fun5 = (num: number): number => {
  return num;
};

const fun6: (num: number) => number = (num: number) => {
  return num;
};

// 枚举
enum Direction {
  left,
  right,
  up,
  down,
}
console.log(Direction.left); // 0
console.log(Direction.right); // 1
console.log(Direction.up); // 2
console.log(Direction.down); // 3
// 可以按下标取
console.log(Direction[0]); // left

enum Direction2 {
  left = 10,
  right,
  up,
  down,
}
console.log(Direction2.left); // 10
console.log(Direction2.right); // 11
console.log(Direction2.up); // 12
console.log(Direction2.down); // 13
// 可以按下标取
console.log(Direction[0]); // left

// 字符串枚举
enum Direction3 {
  left = "LEFT",
  right = "RIGHT",
  up = "UP",
  down = "DOWN",
}
console.log(Direction3.left); // LEFT
console.log(Direction3.right); // RIGHT
console.log(Direction3.up); // UP
console.log(Direction3.down); // DOWN
// 可以按下标取
console.log(Direction[0]); // left
