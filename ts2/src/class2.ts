// class 和 function 的区别

// let Animal = function (type) {
//   this.type = type;
//   this.say = function () {
//     console.log("say");
//   };
// };

// Animal.prototype.info = "动物";
// Animal.prototype.walk = function () {
//   console.log("walk");
// };

class Animal {
  type: string;
  say: () => void;

  constructor(type: string) {
    this.type = type;
    this.say = function () {
      console.log("say");
    };
  }

  walk() {
    console.log("walk");
  }
}

const a1 = new Animal("dog");
console.log(a1);

// 静态属性 function 和 class

// let Animal2 = function (type) {
//   this.type = type;
// };

// Animal2.count = 1;
// Animal2.say = () => {
//   console.log("say");
// };

class Animal2 {
  public type: string;

  static count: number = 1;

  constructor(type: string) {
    this.type = type;
  }

  static say() {
    console.log("say");
  }
}

const a2 = new Animal2("cat");
console.log(a2);

// 这种写法也是支持的，只是在ts中会报错
// Animal2.count2 = 2;
// Animal2.say2 = () => {
//   console.log("say2");
// };
console.log(Animal2.count);
console.log(Animal2.say());
// console.log(Animal2.count2);
// console.log(Animal2.say2());
// console.log(a2.count);
// console.log(a2.say());
