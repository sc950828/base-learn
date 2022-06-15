function returnItem<T>(para: T): T {
  return para;
}

console.log(returnItem<string>("randy"));
console.log(returnItem<number>(1));

// 多个类型
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

console.log(swap<number, string>([7, "seven"])); // ['seven', 7]

// 默认类型
type Gen1 = {
  name: string;
};

async function genfun1() {
  // async function fetchApi<T>(path: string): Promise<T> {
  async function fetchApi<T = Gen1>(path: string): Promise<T> {
    const response = await fetch(`https://example.com/api${path}`);
    return response.json();
  }

  const result = await fetchApi("/users");

  // console.log(result.name) // Error
  console.log(result.name); // OK
}

class Stack<T> {
  private arr: T[] = [];

  public push(item: T) {
    this.arr.push(item);
  }

  public pop() {
    this.arr.pop();
  }
}

const stack1 = new Stack<number>();
stack1.push(1);

// 泛型约束
type Union1 = string | number;

class Stack2<T extends Union1> {
  private arr: T[] = [];

  public push(item: T) {
    this.arr.push(item);
  }

  public pop() {
    this.arr.pop();
  }
}

const stack2 = new Stack2<string>();
const stack3 = new Stack2<number>();
// const stack4 = new Stack2<boolean>(); // 类型“boolean”不满足约束“Union1”

// interface Inter4<T> {
//   param: T
// }

// const param1: Inter4<string> = {param: 123} // Error 不能将类型“number”分配给类型“string”。
// const param2: Inter4<string> = {param: 'randy'} // OK
