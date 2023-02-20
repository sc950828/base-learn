const fs = require("fs");
const path = require("path");

// 同步读取
// const data = fs.readFileSync("./path.js");// 默认格式是buffer
const data = fs.readFileSync("./path.js", "utf8");
// console.log(data);

// 异步读取
fs.readFile("./path.js", "utf8", (err, data) => {
  if (err) throw err;
  // console.log(data);
});

// 通过文件流读取
const readStream = fs.createReadStream("./path.js", "utf8");
readStream
  .on("data", function (chunk) {
    // console.log("读取数据: " + chunk);
  })
  .on("error", function (err) {
    console.log("出错: " + err.message);
  })
  .on("end", function () {
    // 没有数据了
    console.log("没有数据了");
  })
  .on("close", function () {
    // 已经关闭，不会再有事件抛出
    console.log("已经关闭");
  });

// 文件写入 (如果文件不存在，则创建文件；如果文件存在，则覆盖文件内容)
// 同步写入
// fs.writeFileSync("./fstest.js", "console.log(123)", "utf8");

// // 异步写入
// fs.writeFile("./fstest.js", "console.log(123456)", "utf8", (err) => {
//   if (err) throw err;
//   console.log("writeFile", "文件写入成功");
// });

// 通过文件流写入
// const writeStream = fs.createWriteStream("./fstest.js", "utf8");

// writeStream.on("close", function () {
//   // 已经关闭，不会再有事件抛出
//   console.log("已经关闭");
// });

// writeStream.write("console.log(123);");
// writeStream.write("console.log(456);");
// writeStream.end();

// 文件同步追加写入
// fs.appendFileSync("./fstest.js", "console.log('appendFileSync');");
// 文件异步追加写入
// fs.appendFile("./fstest.js", "console.log('appendFile');", (err) => {
//   if (err) throw err;
//   console.log("appendFile", "文件追加写入成功");
// });

// 拷贝，只能拷贝文件，不能拷贝目录
// 第一个参数为被拷贝的源文件路径，第二个参数为拷贝到的目标文件路径，
// 如果目标文件不存在，则会创建并拷贝。如果存在则只复制内容
fs.copyFileSync("./fstest.js", "./fstest2.js");
fs.copyFile("./fstest.js", "./fstest3.js", (err) => {
  if (err) throw err;
  console.log("copyFile", "文件复制成功");
});

// 判断文件是否存在
// 同步判断
// 如果成功，则返回undefined，如果失败，则抛出错误
try {
  fs.accessSync("./fstest.js");
  console.log("accessSync", "fstest.js存在");
} catch (e) {
  throw e;
}

// 异步判断
fs.access("./fstest.js", (err) => {
  if (err) throw err;
  console.log("access", "fstest.js存在");
});
// 判断文件夹
fs.access("./fstest", (err) => {
  if (err) throw err;
  console.log("access", "fstest存在");
});

// 删除文件（只能删除文件，不能删除目录。如果文件不存在则会报错）
// 同步删除文件
// fs.unlinkSync("./fstest.js");

// 异步删除文件
// fs.unlink("./fstest.js", (err) => {
//   if (err) throw err;
//   console.log("文件删除成功");
// });

// 创建目录 （如果目录已存在，会报错）
// 同步创建
// fs.mkdirSync("fstest");

// 异步创建目录
// fs.mkdir("fstest", (err) => {
//   if (err) throw err;
//   console.log("目录创建成功");
// });

// 删除目录，如果目录不存在则会报错
// fs.rmdirSync("fstest");
// fs.rmdir("fstest", (err) => {
//   if (err) throw err;
//   console.log("目录删除成功");
// });

// 遍历目录，只能遍历到第一层，如果需要多层就需要递归
const files = fs.readdirSync(__dirname, "utf8");
console.log("readdirSync:", files); // [ 'fs.js', 'fstest', 'fstest.js', 'path.js' ]

// 异步遍历目录
fs.readdir(__dirname, "utf8", (err) => {
  if (err) throw err;
  console.log("readdir:", files); // [ 'fs.js', 'fstest', 'fstest.js', 'path.js' ]
});

// 文件重命名，既可以修改文件也可以修改目录
// fs.renameSync("fstest.js", "fstest1.js");
// fs.renameSync("fstest", "fstest1");

// 异步重命名
// fs.rename("fstest.js", "fstest1.js", (err) => {
//   if (err) throw err;
//   console.log("rename", "文件名/目录修改成功");
// });

// 监听文件改动
// fs.watchFile("./fstest.js", { interval: 2000 }, (curr, prev) => {
//   console.log('watchFile', curr, prev);
// });

// fs.watch("./fstest.js", {}, (event, filename) => {
//   console.log('watch', event, filename);
// });

// 获取文件或目录的 stats 对象
// 文件目录的 Stats 对象存储着关于这个文件或文件夹的一些重要信息，如创建时间、最后一次访问的时间、最后一次修改的时间、文章所占字节和判断文件类型的多个方法等等。
console.log("statSync", fs.statSync("./fstest.js"));
console.log("isFile", fs.statSync("./fstest.js").isFile()); // true
console.log("isDirectory", fs.statSync("./fstest").isDirectory()); // true

// 异步获取文件信息
fs.stat("./fstest.js", (err, statObj) => {
  if (err) throw err;
  console.log("stat", statObj.size); // 34
});

// 修改文件和文件夹权限
// 同步修改
fs.chmodSync("./fstest.js", "777");
// 异步修改
fs.chmod("./fstest", "777", (err) => {
  if (err) console.log(err);
  console.log("权限修改成功");
});
