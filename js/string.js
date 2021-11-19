const str1 = "randy";
console.log(str1); // randy
const str2 = new String("randy"); // [String: 'randy']
console.log(str2);
const str3 = String(123);
console.log(str3); // 123

// charAt() 返回指定位置的字符。找不到返回空
const str4 = "randy";
console.log("---charAt---", str4.charAt(1)); // a
console.log("---charAt---", str4.charAt(9)); //

// charCodeAt() 返回指定位置的字符Unicode编码
const str5 = "randy";
console.log("---charCodeAt---", str5.charCodeAt(1)); // 97

// String.fromCharCode() 将Unicode字符转成字符串
const str6 = "97";
const str7 = "98";
console.log("---fromCharCode---", String.fromCharCode(str6, str7));
// 用于从 Unicode 码点返回对应字符，并且可以识别大于0xFFFF的字符。es6新增
console.log("---fromCodePoint---", String.fromCodePoint(str6, str7));

// indexOf 返回指定字符位置 从前往后找 没找到返回-1
// lastIndexOf 返回指定字符位置 从后往前找 没找到返回-1
const str8 = "123321";
console.log("---indexOf---", str8.indexOf("3")); //2
console.log("---lastIndexOf---", str8.lastIndexOf("3")); //3
console.log("---lastIndexOf---", str8.indexOf("5")); //-1
console.log("---lastIndexOf---", str8.lastIndexOf("5")); //-1

// includes 查找字符串中是否包含指定的子字符串。
const str9 = "123321";
console.log("---includes---", str9.includes("3")); //true
console.log("---includes---", str9.includes("123")); //true
console.log("---includes---", str9.includes("1234")); //false

// startWith endsWith 判断是以什么开头或以什么结尾
// 记住区分大小写
const str10 = "randy";
console.log("---startsWith", str10.startsWith("ran")); // true
console.log("---startsWith", str10.startsWith("Ran")); // false
console.log("---endsWith", str10.endsWith("ran")); // false
console.log("---endsWith", str10.endsWith("y")); // true
console.log("---endsWith", str10.endsWith("Y")); // false

// valueOf toString
const str11 = "123456";
console.log("---toString---", str11.toString());
console.log("---valueOf---", str11.valueOf());

// toUpperCase() toLowerCase() 返回字符串的大写和小写
const str12 = "Randy";
console.log("---toLowerCase---", str12.toLowerCase()); // randy
console.log("---toUpperCase---", str12.toUpperCase()); // RANDY

// trim trimLeft() trimRight trimStart trimEnd 去除左右空格或者单独去除左边或右边空格
const str13 = " hi randy ! ";
console.log("---trim---", str13.trim(), str13.trim().length);
console.log("---trimLeft---", str13.trimLeft(), str13.trimLeft().length);
console.log("---trimRight---", str13.trimRight(), str13.trimRight().length);

// concat 连接两个字符串 不改变原字符串
const str14 = "hi ";
const str15 = "randy";
console.log("---concat---", str14.concat(str15));

// slice(start, end) 提取字符串的片断，并返回被提取的部分。包含开始下标不包含结束下标
// 不会改变原字符串
// 不写end代表从start截取到最后
// end负数代表从开始截取到倒数第几位，不包括结束位。
const str16 = "randy";
const str17 = str16.slice(1, 4);
console.log("---slice---", str16, str17); // randy and
console.log("---slice---", str16.slice(1)); // andy
console.log("---slice---", str16.slice(1, -1)); // and

// substr(index, length) 从起始索引位置提取指定长度字符串。不会改变原字符串
// index为负数代表从后面多少位开始截取 -1代表倒数第一位 -2代表倒数第二位
// length不写代表从下标开始截取到最后
const str18 = "randy";
const str19 = str18.substr(1, 2); // an
const str20 = str18.substr(-2, 2); // dy 从倒数第二位开始往后截取2位
const str21 = str18.substr(-3, 5); // ndy 从倒数第三位开始往后截取5位， 总共三个字符所以只会返回3个字符
const str22 = str18.substr(1); // andy
console.log("---substr---", str19);
console.log("---substr---", str20);
console.log("---substr---", str21);
console.log("---substr---", str22);

// substring(start, end)提取字符串中两个指定的索引号之间的字符。包含开始下标不包含结束下标。
// 不会改变原字符串
// end不能是负数 这是与slice的区别
const str23 = "randy";
const str24 = str23.substring(1, 2); // a
const str25 = str23.substring(1, -1); // r end不能是负数 这个返回值是有问题的
const str26 = str23.substring(1, 5); // andy
console.log("---substring---", str23, str24);
console.log("---substring---", str25);
console.log("---substring---", str26);

// split()把字符串按指定字符分割成数组
const str27 = "hi randy !";
const arr1 = str27.split(" "); //[ 'hi', 'randy', '!' ]
console.log("---split---", arr1);

// repeat(n) 复制字符串指定次数，并将它们连接在一起返回。
// 不会改变原数组
const str28 = "randy";
const str29 = str28.repeat(2);
const str30 = str28.repeat();
console.log("---repeat---", str28, str29);
console.log("---repeat---", str28, str30);

// replace(string/regexp) replaceAll(string/regexp) 替换字符串
// replace()从左往右查，只会替换第一个，如果使用的是regexp并且使用了g修饰符，则全部替换。g代表全局匹配。
// replaceAll()从左往右查，会替换所有。兼容性要求较高。
const str31 = "hello randy hi";
const str32 = str31.replace("h", "H");
const str32_1 = str31.replace(/h/g, "H");
// const str33 = str31.replaceAll("h", "H");
console.log("---replace---", str31, str32); // hello randy hi Hello randy hi
console.log("---replace---", str31, str32_1); // hello randy hi Hello randy Hi
// console.log("---replaceAll---", str31, str33); // hello randy hi Hello randy Hi

// match(string/regexp) 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
// 如果 regexp 没有标志 g，那么 match() 方法就只能在 stringObject 中执行一次匹配。如果没有找到任何匹配的文本， match() 将返回 null。
// 否则，它将返回一个数组，其中存放了与它找到的匹配文本有关的信息。
const str34 = "hello randy hi";
const str35 = str34.match("h"); // [ 'h', index: 0, input: 'hello randy hi', groups: undefined ]
const str35_1 = str34.match("l"); // [ 'l', index: 2, input: 'hello randy hi', groups: undefined ]
const str36 = str34.match("u"); // null
const str37 = str34.match(/h/g); // [ 'h', 'h' ]
console.log("---match---", str35);
console.log("---match---", str35_1);
console.log("---match---", str36);
console.log("---match---", str37);

// matchAll 查找多个 不支持可能需要编译
// const matchAllStr = str34.matchAll(/h/); // [ 'h', 'h' ]
// console.log("---matchAll---", matchAllStr);

// search(string/regexp) 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。
// 返回与指定查找的字符串或者正则表达式相匹配的 String 对象起始位置。
// 只会返回找到的第一个匹配的下标，不管是否使用g修饰符。
// 找不到返回-1
const str38 = "hello randy hi";
const index1 = str38.search("hi"); // 12
const index2 = str38.search("h"); // 0
const index3 = str38.search(/h/g); // 0
const index4 = str38.search("u"); // -1
console.log("---search---", index1);
console.log("---search---", index2);
console.log("---search---", index3);
console.log("---search---", index4);

// 填充
// str.padStart(targetLength [, padString])
// str.padEnd(targetLength [, padString])
const str39 = "randy";
console.log("---padStart: ", str39.padStart(10, "*"));
console.log("---padEnd: ", str39.padEnd(10, "*"));
