"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 成员都默认为 public
    say() {
        console.log("Animal say");
    }
}
const dog = new Animal("dog", 24);
console.log(dog);
console.log(dog.age);
// 不能访问私有变量
console.log(dog.name);
// 不能访问protected修饰的变量
console.log(dog.sex);
dog.say();
class Cat extends Animal {
    constructor(name, age, sex) {
        super(name, age);
        // 第二种定义函数的方法
        this.say2 = (str) => str;
        this.say4 = () => {
            console.log(this);
        };
        this.sex = sex;
    }
    saySex() {
        console.log(this.sex);
    }
    // 重写
    say() {
        console.log("Cat say");
    }
    // 可选参数
    say3(str) {
        console.log(this, str);
    }
    say5() {
        console.log("外面访问不到我哦");
    }
    // 默认值
    say6(str = "say6") {
        console.log(str);
    }
    // 剩余参数
    say7(str1, ...strs) {
        console.log(str1, strs);
    }
}
const cat1 = new Cat("cat", 19, "male");
console.log(cat1);
cat1.say();
cat1.saySex();
console.log(cat1.say2("hello"));
cat1.say3();
cat1.say4();
// 私有方法只能在类内部访问
cat1.say5();
cat1.say6();
cat1.say7("haha", "lala", "xixi");
// 类是对对象的抽象；抽象类是对类的抽象；接口是对行为的抽象
// get set 方法
class Test1 {
    constructor() {
        this._name = "";
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
const test1 = new Test1();
test1.name;
// 静态属性和方法
class Test2 {
    static say() {
        console.log("静态属性num: ", this.num);
    }
}
Test2.num = 0;
Test2.num++;
Test2.say();
const test2 = new Test2();
// 实例访问不到静态属性
test2.num;
test2.say();
// 抽象类
class Test3 {
}
