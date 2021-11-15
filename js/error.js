// try 语句测试代码块的错误。
// catch 语句处理错误。
// throw 语句创建自定义错误。
// finally 语句在 try 和 catch 语句之后，无论是否有触发异常，该语句都会执行。

// 错误对象有三个属性：
// message:带有错误消息的字符串
// name：错误的类型
// stack：函数执行的堆栈跟踪

const error1 = new Error("我创建的错误");

try {
  console.log(error1.message); // 创建的错误
  console.log(error1.name); // Error
  console.log(error1.stack);
} catch (e) {
  console.log(e);
} finally {
  console.log("finally");
}

// 错误的类型
// EvalError 与 eval() 有关。
// InternalError Javascript引擎内部错误的异常抛出的实例。 如: "递归太多".
// RangeError 数值变量或参数超出其有效范围。
// ReferenceError 无效引用。
// SyntaxError 语法错误。
// TypeError 不属于有效类型。
// URIError 给 encodeURI()或  decodeURl()传递的参数无效。

// 可以不使用关键字new
const error2 = Error("我创建的错误2");

try {
  // 抛出错误
  // throw error2;
  throw "出错啦"; // 出错啦
} catch (e) {
  console.log(e);
} finally {
  console.log("finally");
}

// 创建一个类型错误
const error3 = TypeError("我创建的错误3");

try {
  // 抛出错误
  throw error3;
} catch (e) {
  console.log(e);
} finally {
  console.log("finally");
}
