const path = require("path");

// 获取当前文件目录
console.log(__dirname); // D:\myworkspace\base-learn\node
// 获取当前文件完整路径
console.log(__filename); // D:\myworkspace\base-learn\node\path.js

// 获取文件或文件夹路径
console.log(path.dirname("D:/myworkspace/base-learn/node/path.js")); // D:/myworkspace/base-learn/node
console.log(path.dirname("D:/myworkspace/base-learn/node")); // D:/myworkspace/base-learn

// 获取文件或文件夹名
console.log(path.basename("D:/myworkspace/base-learn/node/path.js")); // path.js
console.log(path.basename("/tmp/demo/js/test/")); // 输出：test
console.log(path.basename("/tmp/demo/js/test")); // 输出：test

// 如果只想获取文件名，单不包括文件扩展呢？可以用上第二个参数。
console.log(path.basename("/tmp/demo/js/test.js", ".js")); // 输出：test

// 获取扩展名
console.log(path.extname("D:/myworkspace/base-learn/node/path.js")); // .js
// 获取扩展名的时候需要注意下面的特殊情况
console.log(path.extname("index.html")); // returns '.html'
console.log(path.extname("index.coffee.md")); // returns '.md'
console.log(path.extname("index.")); // returns '.'
console.log(path.extname("index")); // returns ''
console.log(path.extname(".index")); // returns ''

//返回当前系统的分隔符
console.log(path.sep); // 当前是windows系统，返回的是\。如果是linux上是/

// 根据当前系统格式化路径
console.log(path.normalize("D:/myworkspace/base-learn/node/path.js")); // D:\myworkspace\base-learn\node\path.js

// 路径连接, 将多个路径组合成一个路径
// .表示当前目录，..表示返回上层目录
console.log(path.join("/foo", "bar", "baz/asdf", "quux", "..")); // \foo\bar\baz\asdf
console.log(path.join("/foo", "bar", "baz/asdf", "quux", "..", "..")); // \foo\bar\baz
console.log(path.join("/foo", "bar", "baz/asdf", "/quux")); // \foo\bar\baz\asdf\quux
console.log(path.join("/foo", "bar", "baz/asdf/", "/quux")); // \foo\bar\baz\asdf\quux
console.log(path.join("/foo", "bar", "baz/asdf", "quux", ".")); // \foo\bar\baz\asdf\quux

// 从后往前组合,组合成第一个绝对路径就停止
// 若直到要第一个参数都组合不出来绝对路径,那么就会连接上当前脚本所在结对路径,组合成一个完整的绝对路径
console.log(path.resolve("/www", "/res", "index.php")); // D:\res\index.php
console.log(path.resolve("/www", "res", "index.php")); // D:\www\res\index.php
console.log(path.resolve("www", "res", "index.php")); // D:\myworkspace\base-learn\node\www\res\index.php

// 判断是不是绝对路径
console.log(path.isAbsolute("/myworkspace/base-learn/node/path.js")); // true
console.log(path.isAbsolute("myworkspace/base-learn/node/path.js")); // false

//返回第二个参数相对于第一个参数的所在路径
console.log(path.relative("c:/a/b/c", "c:/houdunren/her")); // ..\..\..\houdunren\her

// path.format(pathObject)
// 将pathObject的root、dir、base、name、ext属性，按照一定的规则，组合成一个文件路径。
// root vs dir：两者可以互相替换，区别在于，路径拼接时，root后不会自动加/，而dir会。
// base vs name+ext：两者可以互相替换。
console.log(
  path.format({
    dir: "a/b/c",
    name: "path.js",
  })
); // a/b/c\path.js

// path.parse(filepath) 是path.format(pathObject)的逆向操作
console.log(path.parse("a/b/c/path.js")); // { root: '', dir: 'a/b/c', base: 'path.js', ext: '.js', name: 'path' }
