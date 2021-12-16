// 泛型
// 这个变量代表了传入的类型，然后再返回这个变量，它是一种特殊的变量，只用于表示类型而不是值。

function returnItem<T>(param: T): T {
  return param;
}

function returnItem2<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

// 泛型变量
function getArrayLength<T>(arr1: Array<T>) {
  return arr1.length;
}

function getArrayLength2<T>(arr1: T[]) {
  return arr1.length;
}

// 泛型接口
interface ReturnItem<T> {
  (param: T): T;
}

const returnItem3: ReturnItem<number> = (param) => param;

// 泛型类
class Stack<T> {
  private arr: T[] = [];

  public push(item: T) {
    this.arr.push(item);
  }

  public pop() {
    this.arr.pop();
  }
}

// 泛型约束
type Params = number | string;

class Stack2<T extends Params> {
  private arr: T[] = [];

  public push(item: T) {
    this.arr.push(item);
  }

  public pop() {
    this.arr.pop();
  }
}
const sta1 = new Stack2<string>();
const sta2 = new Stack2<number>();
// 报错
const sta3 = new Stack2<boolean>();

// 索引类型
function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

const user3 = { name: "randy", age: 24 };
getValue(user3, "age");

// new
// 参数 type 的类型 {new(): T} 就表示此泛型 T 是可被构造的，在被实例化后的类型是泛型 T。
function Factory<T>(type: { new (): T }) {
  return new type();
}
