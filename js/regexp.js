// 正则表达式
// 创建两种方式
const reg1 = new RegExp("\\d");
const reg2 = /\d/gim;

// 返回正则表达式的匹配模式
console.log(reg1.source); // \d
// 返回正则表达式的字符串。
console.log(reg1.toString()); // /\d/

// exec() 检索字符串中指定的值。返回找到的值，并确定其位置。
// 类似String的match方法
// 只会找第一个匹配的，使用g无效这是跟match的区别
const str1 = "abc123_";
console.log("---exec---", reg1.exec(str1)); // [ '1', index: 3, input: 'abc123_', groups: undefined ]
console.log("---exec---", reg2.exec(str1)); // [ '1', index: 3, input: 'abc123_', groups: undefined ]

// test() 检索字符串中指定的值。返回 true 或 false。
const str2 = "abc123_";
const str3 = "abc";
console.log("---test---", reg2.test(str2)); // true
console.log("---test---", reg2.test(str3)); // false

// 修饰符有i g m
// i 执行对大小写不敏感的匹配。
// g 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
// m 执行多行匹配。
const reg3 = /[a-z]/;
const reg4 = /[a-z]/i; // 忽略大小写
const str4 = "ABC123_";
console.log("---i---", reg3.test(str4)); // false
console.log("---i---", reg4.test(str4)); // true

const str5 = "abc123dfg";
const reg5 = new RegExp("[a-z]");
const reg6 = new RegExp("[a-z]", "g");
console.log("---g---", str5.match(reg5)); // [ 'a', index: 0, input: 'abc123dfg', groups: undefined ]
console.log("---g---", str5.match(reg6)); // [ 'a', 'b', 'c', 'd', 'f', 'g' ]

// 多行匹配暂时测不出来
const str6 = "abc123lkj";
const reg7 = /[a-z]/;
const reg8 = /[a-z]/m;
console.log("---m---", str6.match(reg7));
console.log("---m---", str6.match(reg8));
