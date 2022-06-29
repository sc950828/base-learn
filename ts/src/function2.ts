function isString(test: any): boolean {
  return typeof test === "string";
}

function example(foo: number | string) {
  if (isString(foo) && typeof foo === "string") {
    console.log(foo.length); // string类型才有length属性
  }
}

example("hello world");
