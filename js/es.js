// 解构数组
// 按下标解构
const [a, b, c] = [1, 2, 3];
console.log("解构数组: ", a, b, c);

const [d, ...other1] = [1, 2, 3];
console.log("解构数组: ", d, other1);

const [e, f, g, h = 6] = [1, 2, 3];
console.log("解构数组: ", e, f, g, h);

// 解构对象
// 按key解构
const user1 = {
  name: "randy",
  age: 24,
  address: { province: "湖南", city: "岳阳", area: "汨罗" },
};
// 默认参数 剩余参数
const { name, phone = "17673485272", ...other2 } = user1;
console.log("解构对象: ", name, phone, other2);
// 嵌套解构
const {
  address: { city },
} = user1;
console.log("解构对象: ", city);
// 取别名
const { name: _name } = user1;
console.log("解构对象: ", _name);

// 箭头函数
// 箭头函数中this指向定义时所在的对象，而不是调用时所在的对象。只取决包裹箭头函数的第一个普通函数的 this，否则 this 的值则被设置为全局对象。
// 箭头函数不可以当作构造函数
// 箭头函数不可以使用arguments对象
let user2 = {
  name: "randy",
  say: () => {
    return this.name;
  },
};
let user3 = {
  name: "demi",
  say: function () {
    return this.name;
  },
};
console.log("箭头函数:", user2.say(), user3.say());

// Symbol
// Symbol.for() 接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局。
const s1 = Symbol.for("test1");
console.log("Symbol: ", s1);
// Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的key。
const msg1 = Symbol.keyFor(s1);
console.log("Symbol.keyFor: ", msg1);
// description 返回Symbol的描述
const msg2 = s1.description;
console.log("description: ", msg2);

// Set
// 它类似于数组，但是成员的值都是唯一的，没有重复的值。
const set1 = new Set(["a", "b", "c", "c", "d", "e"]);
// 添加
set1.add(6);
// 删除
set1.delete(6);
// 大小
console.log("size: ", set1.size);
// 是否有某值
console.log("has: ", set1.has(1));
// 清空
// set1.clear();

// 不能通过下标访问 只能遍历
// 遍历
// keys()：返回的是键，只不过set的键值是一样的
// values()：返回的是值
// entries()：返回键值对的遍历器
// forEach()：使用回调函数遍历每个成员
// for...of：可以直接遍历每个成员
for (const item of set1) {
  console.log("set: ", item);
}
for (const item of set1.keys()) {
  console.log("set keys: ", item);
}
for (const item of set1.values()) {
  console.log("set values: ", item);
}
for (const item of set1.entries()) {
  console.log("set entries: ", item);
}
set1.forEach((item) => {
  console.log("set forEach: ", item);
});

// WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
// WeakSet 的成员只能是对象，而不能是其他类型的值。
// WeakSet 没有size属性，没有办法遍历它的成员。
// WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用。
// 也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
// const wset1 = new WeakSet([{ name: "randy" }]);

// Map
// ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串或Symbol，各种类型的值（包括对象）都可以当作键。
// 也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
// 如果你需要“键值对”的数据结构，Map 比 Object 更合适。
const map1 = new Map([
  ["name", "randy"],
  ["age", 24],
]);
// 添加
map1.set("sex", "male");
// 判断是否有
console.log("has: ", map1.has("sex"));
// 获取
console.log("get: ", map1.get("sex"));
// 删除
map1.delete("sex");
// 清除
// map1.clear();
console.log("map: ", map1);
// 遍历
// keys() 返回一个新的 Iterator 对象。它包含按照顺序插入 Map 对象中每个元素的 key 值
// values() 方法返回一个新的 Iterator 对象。它包含按顺序插入Map对象中每个元素的 value 值
// entries() 方法返回一个新的包含 [key, value] 对的 Iterator ? 对象，返回的迭代器的迭代顺序与 Map 对象的插入顺序相同
// forEach() 得到的是值
// for...of 得到 [key, value]
map1.forEach((item) => {
  console.log("map forEach:", item);
});
for (const item of map1) {
  console.log("map forof:", item);
}
for (const item of map1.keys()) {
  console.log("map keys: ", item);
}
for (const item of map1.values()) {
  console.log("map values: ", item);
}
for (const item of map1.entries()) {
  console.log("map entries: ", item);
}

// WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。
// WeakMap的键名所指向的对象，不计入垃圾回收机制。

// globalThis 获取不同环境下的this window、global
// console.log(globalThis);

// ?
const user4 = {
  name: "randy",
  // address: {
  //   province: "湖南",
  // },
  age: 24,
};
// console.log(user4.address.province);
console.log(user4?.address?.province);

// 空值合并运算符
// 空值合并运算符（??）是一个逻辑运算符。当左侧操作数为 null 或 undefined 时，其返回右侧的操作数。否则返回左侧的操作数。
console.log(1 ?? "a");
console.log(0 ?? "a");
console.log("" ?? "a");
console.log(NaN ?? "a");
// 只有null和undefined才会返回右边的数
console.log(null ?? "a");
console.log(undefined ?? "a");

// function
// name 获取方法名
// length 获取参数个数
const say = (name, age) => {
  return `我是${name}, 今年${age}岁啦`;
};
console.log("function: ", say.name);
console.log("function: ", say.length);

// proxy 代理
const user5 = {
  name: "randy",
  _name: "秘密",
};
const handler = {
  // 获取操作
  get(obj, key) {
    return Reflect.has(obj, key) ? obj[key] : "";
  },
  // 设置操作
  set(obj, key, value) {
    if (key === "age") {
      Reflect.set(obj, key, value);
      return true;
    }
    return false;
  },
  // 拦截propKey in proxy的操作，返回一个布尔值。
  has(obj, key) {
    if (key === "age") {
      return false;
    }
    return Reflect.has(obj, key);
  },
  // ownKeys
  // 拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、Object.values(proxy)、Object.entries(proxy)、for...in循环，返回一个数组。
  ownKeys(obj) {
    return Object.keys(obj).filter((key) => !key.startsWith("_"));
  },
  // 拦截delete proxy[propKey]的操作，返回一个布尔值。
  deleteProperty(obj, key) {
    if (key === "age") {
      return false;
    }
    delete obj[key];
  },
  // apply() 拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
  // construct() 拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)
};
let _user5 = new Proxy(user5, handler);
console.log(_user5.name);
_user5.age = 24;
_user5.phone = "17673485272";
console.log(_user5);
console.log("name" in _user5); // true
console.log("age" in _user5); // false
// 删除
// delete _user5.name;
console.log(_user5);

// 循环
for (const key in _user5) {
  console.log("in: ", key);
}
for (const key of Object.keys(_user5)) {
  console.log("Object.keys: ", key);
}
for (const value of Object.values(_user5)) {
  console.log("Object.values: ", value);
}
for (const entry of Object.entries(_user5)) {
  console.log("Object.entries: ", entry);
}

// Reflect对象与Proxy对象一样，也是 ES6 为了操作对象而提供的新 API。
