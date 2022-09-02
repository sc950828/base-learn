/* 裁剪相关 */
const str1 = "randy";
// 从指定位置提取指定个数元素，不改变原字符串
console.log(str1.substr(1, 2), str1);

const str2 = "randy";
// 提取指定位置到指定位置的元素，不改变原字符串
// 第二个参数是一个非负的整数
console.log(str2.substring(1, 2), str2);

const str3 = "randy";
// 提取指定位置到指定位置的元素，不改变原字符串
// 第二个参数可以是负数，表示从后面开始算
console.log(str3.slice(1, -1), str3);

/* 正则相关 */
var str = "The rain in SPAIN stays mainly in the plain";
// 正则带g返回数组，不带返回一个详细数组，没找到返回null
console.log(str.match(/ain/));
/* [
  'ain',
  index: 5,
  input: 'The rain in SPAIN stays mainly in the plain',
  groups: undefined
] */
console.log(str.match(/ain/g)); // [ 'ain', 'ain', 'ain' ]
console.log(str.match(/123/g)); // null

// search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。
// 只会返回第一个匹配下标
// 如果没有找到任何匹配的子串，则返回 -1。
console.log(str.search(/ain/g)); // 5
console.log(str.search(/123/g)); // -1

// 正则
// test() 方法用于检测一个字符串是否匹配某个模式.
// 如果字符串中有匹配的值返回 true ，否则返回 false。
console.log(/ain/g.test(str)); // true
console.log(/123/g.test(str)); // false

// exec和match差不多，只是match带g的时候返回的不是一个而是所有
console.log(/ain/g.exec(str));
/* [
  'ain',
  index: 5,
  input: 'The rain in SPAIN stays mainly in the plain',
  groups: undefined
] */
console.log(/123/g.exec(str)); // null
