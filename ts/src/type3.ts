type Foo = {
  baz: [number, "randy"];
  bar: true;
};

const test1: Foo = {
  baz: [1, "randy"],
  bar: true,
};

// is关键字，方法返回ture就代表is表达式成立
// function isString(test: any): boolean {
export function isString(test: any): test is string {
  return typeof test === "string";
}

export function example(foo: number | string) {
  if (isString(foo)) {
    console.log("it is a string" + foo);
    console.log(foo.length); // string function
  }

  // 使用类型守卫
  // if (typeof foo === "string") {
  //   console.log(foo.length); // string function
  // }
}
example("hello world");

declare function f<T extends boolean>(x: T): T extends true ? string : number;

const x = f(Math.random() < 0.5);
const y = f(false);
const z = f(true);
