// 只允许从尾部添加元素
// 只允许从尾部取出元素

// 初始状态，栈空
const stack = [];

// 入栈过程
stack.push("东北大板");
stack.push("可爱多");
stack.push("巧乐兹");
stack.push("冰工厂");
stack.push("光明奶砖");

while (stack.length) {
  console.log("当前取出的是：", stack.pop());
}

console.log(stack);
