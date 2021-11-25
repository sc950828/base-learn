// 在 js 中我们是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 prototype 属性值，这个属性值是一个对象，
// 这个对象包含了可以由该构造函数的所有实例共享的属性和方法。当我们使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，
// 这个指针指向构造函数的 prototype 属性对应的值，在 ES5 中这个指针被称为对象的原型。

// 我们可以通过obj.__proto__或者 Object.getPrototypeOf(obj)或者 obj.constructor.prototype 获取对象的原型。

function People(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new People("randy", 24);
console.log(
  "p1.__proto__ === People.prototype: ",
  p1.__proto__ === People.prototype
);

console.log(
  "People.__proto__ === Function.prototype: ",
  People.__proto__ === Function.prototype
);

console.log(
  "Function.__proto__ === Function.prototype",
  Function.__proto__ === Function.prototype
);

console.log(
  "Function.prototype.__proto__ === Object.prototype",
  Function.prototype.__proto__ === Object.prototype
);

console.log(
  "Object.prototype.__proto__ === null",
  Object.prototype.__proto__ === null
);
console.log(
  "Object.__proto__ === Function.prototype",
  Object.__proto__ === Function.prototype
);

// 要知道自己的__proto__引用了哪个 prototype，只需要看看是哪个构造函数构造了你，那你的__proto__就是那个构造函数的 prototype。
// 所有的构造函数的原型链最后都会引用 Object 构造函数的原型，即可以理解 Object 构造函数的原型是所有原型链的最底层，即 Object.prototype.__proto__===null

// 对象有__proto__属性，函数有__proto__属性，数组也有__proto__属性，只要是引用类型，就有__proto__属性，指向其原型。

// 只有构造函数有 prototype 属性，指向 new 操作符加调用该函数创建的对象实例的原型对象。
//  Person.prototype == people.__proto__ 对象的__proto__等于其构造函数的 prototype

// 原型链
// 当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，
// 也就是原型链的概念。或者说是由对象的__proto__属性串连起来的直到 Object.prototype.__proto__（为null）的链就是原型链。
