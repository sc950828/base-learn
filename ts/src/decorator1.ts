// 需要开启 "experimentalDecorators": true

// 类装饰器
// 参数是类本身
function addAge(constructor: Function) {
  console.log("类装饰器", constructor);
  constructor.prototype.age = 18;
}

// 参数装饰器
function logParameter(target: Object, propertyKey: string, index: number) {
  console.log("参数装饰器", target, propertyKey, index);
}

// 声明装饰器修饰方法
// 普通函数的装饰器接收的参数第一个是类的原型第二个是方法名第三个是修饰符
// static 函数的装饰器接收的参数第一个是类的构造函数第二个是方法名第三个是修饰符
// 函数的装饰器运行是在类初始化的时候
function method(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log("方法装饰器", target);
  console.log("prop " + propertyKey);
  console.log("desc " + JSON.stringify(descriptor) + "\n\n");
  descriptor.writable = false;
}

function prop2(target: any, key: string): any {
  console.log("属性装饰器2", target);
  console.log("prop " + key);
  const descriptor: PropertyDescriptor = {
    writable: true,
    configurable: true,
    enumerable: true,
    value: "jack",
  };

  // return 123;
  // {"writable":true,"enumerable":false,"configurable":true}

  return descriptor;
}

// 属性的装饰器接收的参数第一个是类的原型第二个是属性名
// 属性的装饰器运行是在类初始化的时候
function prop(target: any, key: string): any {
  console.log("属性装饰器", target);
  console.log("prop " + key);
  const descriptor: PropertyDescriptor = {
    writable: true,
    configurable: true,
    enumerable: true,
    value: "jack",
  };

  // return 123;
  // {"writable":true,"enumerable":false,"configurable":true}

  return descriptor;
}

@addAge
class Person10 {
  // 同时定义 先执行参数装饰器
  @method
  greet(@logParameter message: string, @logParameter name: string): string {
    return `${message} ${name}`;
  }

  @prop2
  @prop
  name!: string;
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

const person2 = new Person10();

// 修改实例方法say
// person2.say = function () {
//   return "edit";
// };

// 打印结果,检查是否成功修改实例方法
console.log(person2.say());

// person2.name = "demi";
console.log(person2);

// console.log(1, Person10.prototype);
// console.log(2, Person10);
