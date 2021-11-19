// Object.create(proto，[propertiesObject])
// 创建一个指定原型的对象
const proto = { msg: "原型" };
const obj1 = Object.create(proto, {
  // value的默认值是undefined
  // writable、enumerable、configurable、默认值都是false
  name: {
    // value: "randy", // 属性值
    // writable: true, // 是否能修改或删除
    // enumerable: true, // 是否枚举
    // configurable: true, // 是否能进行配置
  },
  age: {
    value: 24,
    enumerable: true,
    writable: false,
    configurable: false,
  },
  [Symbol("a")]: {
    value: "symboltest",
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

console.log("create: ", obj1);

// Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
Object.defineProperty(obj1, "sex", {
  value: "male",
  writable: true,
  enumerable: true,
  configurable: true,
});
// configurable为false 不能进行配置 会报错
// Object.defineProperty(obj1, "age", {
//   value: "male",
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

// writable为false不能进行修改 不能删除
obj1.age = 26;
delete obj1.age;

console.log("defineProperty: ", obj1);

// Object.defineProperties() 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
Object.defineProperties(obj1, {
  address: {
    value: "汨罗",
    enumerable: true,
  },
  phone: {
    value: "17673485272",
    enumerable: true,
  },
});

console.log("defineProperties: ", obj1);

// Object.getOwnPropertyDescriptor() 方法返回指定对象上一个自有属性对应的属性描述符。
console.log(
  "getOwnPropertyDescriptor: ",
  Object.getOwnPropertyDescriptor(obj1, "name")
);
// Object.getOwnPropertyDescriptors() 方法用来获取一个对象的所有自身属性的描述符。
console.log(
  "getOwnPropertyDescriptors: ",
  Object.getOwnPropertyDescriptors(obj1)
);

// 循环 Object.entries() Object.keys() Object.values()
// 其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。
// Symbol属性循环不出来
console.log("entries: ", Object.entries(obj1)); // [[key1, value1], [key2, value2]]
console.log("keys: ", Object.keys(obj1)); // [key1, key2]
console.log("values: ", Object.values(obj1)); // [value1, value2]
// Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。
console.log("getOwnPropertyNames: ", Object.getOwnPropertyNames(obj1));
// Object.getOwnPropertySymbols() 方法返回一个给定对象自身的所有 Symbol 属性的数组。
console.log("getOwnPropertySymbols: ", Object.getOwnPropertySymbols(obj1));
// propertyIsEnumerable() 方法返回一个布尔值，表示指定的属性是否可枚举。
console.log("propertyIsEnumerable: ", obj1.propertyIsEnumerable("age"));
// hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。
console.log("hasOwnProperty: ", obj1.hasOwnProperty("age"));

// Object.fromEntries() 方法把键值对列表转换为一个对象。
console.log("fromEntries: ", Object.fromEntries(Object.entries(obj1)));

// 原型相关
// Object.setPrototypeOf() 方法设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null。
// Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。
console.log("getPrototypeOf: ", Object.getPrototypeOf(obj1));
// isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。
console.log("isPrototypeOf: ", proto.isPrototypeOf(obj1));

// Object.is() 方法判断两个值是否为同一个值。
const objIs1 = { name: "randy" };
const objIs2 = { name: "randy" };
const objIs3 = objIs1;
console.log("is: ", Object.is(objIs1, objIs2), Object.is(objIs1, objIs3));

// Object.assign(target, source) 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
// 是浅拷贝 会改变原对象
// 如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。
const obj2 = { name: "demi", phone: "17673485272" };
const obj3 = { name: "tom", address: "上海" };
const obj4 = { name: "jack", age: 24 };
obj3.address = "汨罗";
obj4.age = 25;
console.log("assign: ", obj2, obj3, obj4, Object.assign(obj2, obj3, obj4));

// Object.freeze() 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，
// 不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。
// 也就是将writable、configurable置为了false
// freeze() 返回和传入的参数相同的对象。
// Object.isFrozen()方法判断一个对象是否被冻结。
const obj5 = { name: "rose" };
console.log(
  "getOwnPropertyDescriptors: ",
  Object.getOwnPropertyDescriptors(obj5)
);
console.log("isFrozen: ", Object.isFrozen(obj5));
// 冻结
Object.freeze(obj5);
console.log("isFrozen: ", Object.isFrozen(obj5));
obj5.age = 25; // 不能添加属性
obj5.name = "rose2"; // 不能修改属性
delete obj5.name; // 不能删除属性
// configurable置为了false 不能修改该对象已有属性的可枚举性、可配置性、可写性 会报错
// Object.defineProperty(obj5, "name", {
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });
console.log(
  "getOwnPropertyDescriptors: ",
  Object.getOwnPropertyDescriptors(obj5)
);
console.log("freeze: ", obj5);

// Object.seal()方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变。
// 也就是将configurable置为了false
// Object.isSealed() 方法判断一个对象是否被密封。
const obj6 = { name: "timi", age: 24 };
console.log(
  "getOwnPropertyDescriptors: ",
  Object.getOwnPropertyDescriptors(obj6)
);
console.log("isSealed: ", Object.isSealed(obj6));
Object.seal(obj6);
// configurable置为了false 不能修改该对象已有属性的可枚举性、可配置性、可写性 会报错
// Object.defineProperty(obj6, "name", {
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });
delete obj6.age; // 不能删除值
obj6.phone = "17673485272"; // 不能添加新属性
obj6.age = 25; // 能修改以前是可写的值
console.log(
  "getOwnPropertyDescriptors: ",
  Object.getOwnPropertyDescriptors(obj6)
);
console.log("isSealed: ", Object.isSealed(obj6));
console.log("seal: ", obj6);

// Object.isExtensible() 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。
console.log("isExtensible: ", Object.isExtensible(obj5), "冻结的对象不能扩展");
console.log("isExtensible: ", Object.isExtensible(obj6), "密封的对象不能扩展");

// Object.preventExtensions()方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。
const obj7 = { name: "amy" };
console.log(
  "getOwnPropertyDescriptors: ",
  Object.getOwnPropertyDescriptors(obj7)
);
Object.preventExtensions(obj7);
obj7.age = 24; // 不能新增
obj7.name = "amy2"; //能修改
delete obj7.name; //能删除
console.log(
  "getOwnPropertyDescriptors: ",
  Object.getOwnPropertyDescriptors(obj7)
);
console.log("preventExtensions: ", obj7);

console.log(
  "isExtensible: ",
  Object.isExtensible(obj7),
  "阻止扩展的对象不能扩展"
);