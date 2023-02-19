// 全局模块
// console.log(process);

console.log(process.env);

// NODE_ENV=production node process.js
console.log(process.env.NODE_ENV); // production

// 参数
// NODE_ENV=dev node process.js --env production
console.log(process.argv);
// 输出
// [
//   '/Users/randy/.nvm/versions/node/v14.15.5/bin/node',
//   '/Users/randy/myproject/base-learn/node/process.js',
//   '--env',
//   'production'
// ]

// 特殊参数
console.log(process.execArgv);

// 当前工作路径
console.log(process.cwd()); // /Users/randy/myproject/base-learn/node
// 切换工作目录
process.chdir("../npm");
console.log(process.cwd()); // /Users/randy/myproject/base-learn/npm
