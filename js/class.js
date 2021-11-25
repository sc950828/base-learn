class People {
  count = 10;
  static num = 0;
  static hi() {
    console.log(this.num);
  }

  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }

  say() {
    console.log(`hi ${this.name}`);
  }
}

const p1 = new People("randy");
const p2 = new People("randy2");
console.log(p1);
console.log(p1.name); //randy
p1.say();

// get set方法
p1.name = "demi";
console.log(p1.name); //demi

// 对象属性互不影响
p1.count++;
console.log(p1.count);
console.log(p2.count);

// 静态属性 通过类调用，不能通过实例调用
People.num++;
console.log(People.num);
// 静态方法 通过类调用，不能通过实例调用
People.hi();

// 继承
class Animal {
  count = 10;
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(`Animal say ${this.name}`);
  }
  static hi() {
    console.log("Animal hi");
  }
  static num = 1;
  static str1 = "animal";
}

class Dog extends Animal {
  constructor(name, age) {
    super(name);
    // this.name = name;

    this.age = age;
  }
  // 重写父类方法
  say() {
    console.log(`Dog say ${this.name}`);
  }

  say2() {
    // 调用父类方法
    super.say();
  }

  // 静态方法才能调用父类静态属性方法
  static say3() {
    // 调用父类静态方法
    super.hi();
    // 调用父类静态属性
    console.log("super.num: ", super.num);
  }

  // 重写静态属性
  static str1 = "dog";
}

const d1 = new Dog("dog1", 24);
console.log(d1);
console.log("d1.count: ", d1.count);
d1.say();
d1.say2();

// 静态方法
Dog.say3();

// 静态方法 静态属性都能被继承
Dog.hi();
console.log(Dog.num);
console.log(Dog.str1);

// 类的所有方法都定义在类的prototype属性上面。
// super
// 作为函数调用，代表父类的构造函数
// 作为对象调用，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
