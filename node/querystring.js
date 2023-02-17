const querystring = require("querystring");

const str = "nick=randy&age=24&nick2=%E4%B8%AD%E6%96%87";
const obj = querystring.parse(str);
console.log(obj); // { nick: 'randy', age: '24', nick2: '中文' }

// 再来看下sep、eq有什么作用。相当于可以替换&、=为自定义字符，对于下面的场景来说还是挺省事的。
const str1 = "name-randy|country-cn";
const obj1 = querystring.parse(str1);
console.log(obj1); // { 'name-randy|country-cn': '' }
const obj2 = querystring.parse(str1, "|", "-");
console.log(obj2); // { name: 'randy', country: 'cn' }

const obj3 = {
  nick: "randy",
  age: "24",
};
const str4 = querystring.stringify(obj3);
console.log(str4); // nick=randy&age=24

const obj5 = {
  name: "randy",
  country: "cn",
};
const str6 = querystring.stringify(obj5, "|", "-");
console.log(str6); // name-randy|country-c
