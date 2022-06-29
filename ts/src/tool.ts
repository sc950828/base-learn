type E1 = Exclude<string | number, string>; // 排除string剩下number

type E5 = Exclude<string | number | boolean, string | boolean>; // 排除string和boolean剩下number

type E2 = Extract<string | number, string>; // 提取string

type E6 = Extract<string | number | boolean, string | boolean>; // 提取string和boolean

type E3 = NonNullable<string | number | null | undefined>; // string | number

let e1: E3 = 1;
let e2: E3 = "1";

function getUserInfo() {
  return { name: "randy", age: 24 };
}

// 通过 ReturnType 将 getUserInfo 的返回值类型赋给了 UserInfo
type E4 = ReturnType<typeof getUserInfo>;

const userA: E4 = {
  name: "hello",
  age: 10,
};

type T0 = Parameters<() => string>; // []
type T1 = Parameters<(s: string) => void>; // [string]
type T2 = Parameters<<T>(arg: T) => T>; // [unknown]

interface A {
  a1: string;
  a2: number;
  a3: boolean;
}

type aPartial = Partial<A>;
const a: aPartial = {}; // 不会报错

interface Person {
  name: string;
  age: number;
  gender?: "male" | "female";
}

type p = Required<Person>;

const person: p = {
  name: "randy",
  age: 24,
  gender: "male",
};

// interface Person {
//   name: string;
//   age: number;
//   gender?: "male" | "female";
// }
// type p2 = Readonly<Person>;
// const person4: p2 = {
//   name: "randy",
//   age: 24,
// };
// person4.name = "demi"; // error

interface Todo {
  title: string;
  description: string;
  done: boolean;
}

type TodoBase = Pick<Todo, "title" | "done">;

const todo1: TodoBase = {
  title: "todo1",
  done: true,
};

type Point = "x" | "y";
type PointList = Record<Point, { value: number }>;
const cars: PointList = {
  x: { value: 10 },
  y: { value: 20 },
};

type User8 = {
  id: string;
  name: string;
  email: string;
};

type UserWithoutEmail = Omit<User8, "email">; // UserWithoutEmail ={id: string;name: string;}

const user9: UserWithoutEmail = {
  id: "1",
  name: "randy",
};
