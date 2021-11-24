const type = "a";

// break 或者 return 都会阻止switch
const switchTest = () => {
  switch (type) {
    case "a":
      console.log("A");
      // break;
      return;
    case "b":
      console.log("B");
      break;
    case "c":
      console.log("C");
      break;
    default:
      console.log("default");
  }
};

const forTest = () => {
  for (var i = 1; i <= 10; i++) {
    if (i === 5) {
      // break终止循环
      break;
      // continue 跳过此次循环
      // continue;
    }
    console.log(i);
  }
};

switchTest();
forTest();

const obj1 = Object.create(
  { msg: "原型属性值" },
  {
    name: {
      value: "randy",
      writable: true,
      configurable: true,
      enumerable: true,
    },
    age: {
      value: 25,
      writable: true,
      configurable: true,
      enumerable: false,
    },
    [Symbol("test")]: {
      value: "symboltest",
      writable: true,
      configurable: true,
      enumerable: true,
    },
  }
);

// 对象不能直接用for of 循环
// for (const property of obj1) {
//   console.log(property);
// }
// 对象不能直接用forEach 循环
// obj1.forEach((key) => {
//   console.log(key);
// });
// entries keys values不能获取Symbol属性 不能获取不可枚举属性 不能获取原型链属性
for (const entry of Object.entries(obj1)) {
  console.log("entries: ", entry);
}
for (const key of Object.keys(obj1)) {
  console.log("keys: ", key);
}
for (const value of Object.values(obj1)) {
  console.log("values: ", value);
}
// 能获取不可枚举属性 不能获取Symbol属性 不能获取原型链属性
for (const name of Object.getOwnPropertyNames(obj1)) {
  console.log("getOwnPropertyNames: ", name);
}
// 只能获取Symbol属性
for (const symbol of Object.getOwnPropertySymbols(obj1)) {
  console.log("getOwnPropertySymbols: ", symbol);
}
// 不能获取Symbol属性 不能获取不可枚举属性 但能获取原型链上的属性
// 获取的是键
for (const key in obj1) {
  console.log("for in: ", key);
}
// 不但能获取自身不可枚举属性 还能获取Symbol类型的键 但不能获取原型链上的属性
// 它的返回值等同于 Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))
console.log("--- Reflect ownKeys ---");
for (const key of Reflect.ownKeys(obj1)) {
  console.log("Reflect.ownKeys: ", key);
}

// 数组遍历
const arr1 = ["a", "b", "c", "d"];
for (let i = 0; i < arr1.length; i++) {
  console.log("for: ", arr1[i]);
}
// 获取的是下标
for (const key in arr1) {
  if (key == 2) {
    // continue; // 跳过当次
    // break; // 跳出循环
    // return; // 跳出循环并且后面语句不执行
  }
  console.log("for in: ", key);
}
// 获取的是值
// 能通过条件跳出循环
for (const value of arr1) {
  if (value == "c") {
    // continue; // 跳过当次
    // break; // 跳出循环
    // return; // 跳出循环并且后面语句不执行
  }
  console.log("for of: ", value);
}
// 获取的是值
arr1.forEach((item) => {
  if (item == "c") {
    // continue; // 不支持会报错
    // break; // 不支持会报错
    // return; // 跳过当次循环
    // throw "error"; // 抛错能终止但是需要自己处理错误
  }
  console.log("forEach: ", item);
});

function Gen(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

// for await of 一定会按顺序执行
// 先执行同步代码 到了异步代码等待执行完毕后再执行
async function test() {
  let arr = [Gen(2000), Gen(100), Gen(3000)];
  for (let item of arr) {
    console.log(Date.now());
    const res = await item;
    console.log(res);
  }
}

// 整个代码块都不执行，等待 arr 当前的值（Promise状态）发生变化之后，才执行代码块的内容。
async function test() {
  let arr = [Gen(2000), Gen(100), Gen(3000)];
  for await (let item of arr) {
    console.log(Date.now());
    const res = item;
    console.log(res);
  }
}

test();
