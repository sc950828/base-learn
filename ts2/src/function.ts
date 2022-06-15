function fun_1(num1: number, num2: number): number {
  return num1 + num2;
}

const fun_2 = (num1: number, str1: string): string => {
  return num1 + str1;
};

function fun_3(): void {
  console.log("fun_3");
}

const fun_4: (num1: number, str1: string) => string = (
  num1: number,
  str1: string
) => {
  return num1 + str1;
};

// 没返回值的函数
const fun_6: () => void = () => {};

type fun5Type = (num1: number, str1: string) => string;

const fun_5: fun5Type = (num1: number, str1: string) => {
  return num1 + str1;
};

// 可选参数
type Add = (x: number, y: number, z?: number) => number;
let add: Add = (arg1, arg2, arg3) => arg1 + arg2 + arg3;
add(1, 2); // success   3
add(1, 2, 3); // success   6

type Add2 = (y: number, x?: number) => number;
let add2: Add2 = (arg1, arg2) => arg1 + arg2;

add2(1);

// 默认参数
const add3 = (x: number = 2, y: number) => {
  return x + y;
};
console.log(add3(undefined, 10));

// 重载
interface Direction {
  top: number;
  bottom?: number;
  left?: number;
  right?: number;
}

// 参数列表可能的情况 1个参数 2个参数 4个参数
function assigned(all: number): Direction;
function assigned(topAndBottom: number, leftAndRight: number): Direction;
function assigned(
  top: number,
  right: number,
  bottom: number,
  left: number
): Direction;

// 方法完整的实现
function assigned(a: number, b?: number, c?: number, d?: number) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d,
  };
}

assigned(1);
assigned(1, 2);
// assigned(1, 2, 3); // 没有定义三个参数的函数，编译阶段直接报错
assigned(1, 2, 3, 4);
