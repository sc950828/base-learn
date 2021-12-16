// 类装饰器
// 当装饰器作为修饰类的时候，会把构造器传递进去。
function addAge(constructor: Function) {
  constructor.prototype.age = 18;
}

@addAge
class Test4 {
  public name = "";
  // 明确赋值断言是一项功能，它允许将!放置在实例属性和变量声明之后，来表明此属性已经确定它已经被赋值了:
  age!: number;
}

const test4_1 = new Test4();
console.log(test4_1.age);

// 属性方法装饰器
// 声明装饰器修饰方法/属性

// 普通函数的装饰器接收的参数第一个是类的原型第二个是方法名第三个是修饰符
// static 函数的装饰器接收的参数第一个是类的构造函数第二个是方法名第三个是修饰符
// 函数的装饰器运行是在类初始化的时候
function method(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log(target);
  console.log("prop " + propertyKey);
  console.log("desc " + JSON.stringify(descriptor) + "\n\n");
  // 设置不能编辑或删除
  descriptor.writable = false;
}

// 属性的装饰器接收的参数第一个是类的原型第二个是属性名
// 属性的装饰器运行是在类初始化的时候
function prop(target: any, key: string): any {
  console.log(target);
  console.log("prop " + key);
  const descriptor: PropertyDescriptor = {
    writable: false,
  };

  return descriptor;
}

class Test5 {
  @prop
  name: string;
  constructor() {
    this.name = "randy";
  }

  @method
  say() {
    return "instance method";
  }

  @method
  static run() {
    return "static method";
  }
}
const test5_1 = new Test5();

// 修改实例方法say
test5_1.say = function () {
  return "edit";
};
test5_1.name = "demi";

// 打印结果,检查是否成功修改实例方法
console.log(test5_1.say());
