const { Buffer } = require("buffer");

// 创建
// 通过 new Buffer(array)
// Creates a new Buffer containing the ASCII bytes of the string 'buffer'
const buf = new Buffer([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf);

var buf1 = Buffer.alloc(10); // 长度为10的buffer，初始值为0x0
var buf2 = Buffer.alloc(10, 1); // 长度为10的buffer，初始值为0x1
console.log(buf1);
console.log(buf2);

var buf3 = Buffer.allocUnsafe(10); // 长度为10的buffer，初始值不确定
console.log(buf3);

var buf4 = Buffer.from([1, 2, 3]); // 长度为3的buffer，初始值为 0x01, 0x02, 0x03
console.log(buf4);

var buf5 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf5.toString()); // buffer

var array = "buffer".split("").map(function (v) {
  return "0x" + v.charCodeAt(0).toString(16);
});
console.log(array.join()); // 输出：0x62,0x75,0x66,0x66,0x65,0x72

// buffer比较
// 要比较的两者内容相同,`buf.equals(otherBuffer)` 就返回true
// 例子一：编码一样，内容相同
var buf1 = Buffer.from("A");
var buf2 = Buffer.from("A");

console.log(buf1.equals(buf2)); // true

// 例子二：编码一样，内容不同
var buf3 = Buffer.from("A");
var buf4 = Buffer.from("B");

console.log(buf3.equals(buf4)); // false

// 例子三：编码不一样，内容相同
var buf5 = Buffer.from("ABC"); // <Buffer 41 42 43>
var buf6 = Buffer.from("414243", "hex");

console.log(buf5.equals(buf6)); //true

// buffer连接
var buff1 = Buffer.alloc(10);
var buff2 = Buffer.alloc(20);

var totalLength = buff1.length + buff2.length;

console.log(totalLength); // 30

var buff3 = Buffer.concat([buff1, buff2], totalLength);

console.log(buff3); // <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
console.log(buff3.length); // 30
