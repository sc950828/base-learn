const person = {};
// 报错
person.name;

interface Person {
  name: string;
  age: number;
}

const person2 = {} as Person;
person2.name;

// 双重断言
const person3 = "randy" as any as Person;
person3.name;

// 类型断言
// 你会比 TypeScript 更了解某个值的详细信息。告诉编译器是什么类型. 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。TypeScript 会假设你，程序员，已经进行了必须的检查。
// 两种表示法 尖括号<>或者 as。当你在 TypeScript 里使用 JSX 时，只有 as 语法断言是被允许的。
const person4 = {};
(<Person>person4).name;

let str2: string;
// 非空断言
console.log(str2!.substring(0, 1));
// ts里面的非空是！而不是es中的?
console.log(str2?.substring(0, 1));
