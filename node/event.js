var EventEmitter = require("events");

class Man extends EventEmitter {}

var man = new Man();

man.on("wakeup", function () {
  console.log("man has woken up"); // 代码1
});

man.emit("wakeup");

console.log("woman has woken up"); // 代码2
