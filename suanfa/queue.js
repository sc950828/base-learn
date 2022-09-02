// 只允许从尾部添加元素
// 只允许从头部移除元素

const queue = [];

// 入队过程
queue.push("东北大板");
queue.push("可爱多");
queue.push("巧乐兹");
queue.push("冰工厂");
queue.push("光明奶砖");

while (queue.length) {
  console.log("当前取出的是：", queue.shift());
}

console.log(queue);
