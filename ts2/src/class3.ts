class Parent {
  constructor(public name: string) {
    this.name = name;
  }
}

abstract class A1 {
  abstract age: number;
  sex: string = "male";

  say() {
    console.log("say");
  }

  abstract hi(): void;
  abstract hi2(num: number): number;
  // abstract hi3: (num: number) => number;
}

interface Inter1 {
  name: string;

  hello(): void;
}

interface Inter2 {
  name2: string;

  hello2: () => void;
}

// 无法创建抽象类的实例。
// const a1 = new A1()

class Son extends A1 implements Inter1, Inter2 {
  age: number;
  name: string;
  name2: string;

  hi() {
    console.log("hi");
  }

  hi2(num: number) {
    return num + 1;
  }

  hello() {
    console.log("hello");
  }

  hello2() {
    console.log("hello2");
  }
}

const s1 = new Son();
console.log(s1);
s1.say();
s1.hi2(1);

abstract class A2 {
  abstract info: string;
}

class A3 {}

// 抽象类可以继承抽象类，并且不需要把抽象属性和方法实现。
abstract class A4 extends A2 {}
// 抽象类可以继承普通类
abstract class A5 extends A3 {}
