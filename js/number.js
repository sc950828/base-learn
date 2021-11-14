const num1 = 123;
console.log(num1); // 123
const num2 = new Number("123"); // [Number: 123]
console.log(num2);
console.log(num2.toString(), num2.valueOf()); // '123' 123
const num3 = Number("123");
console.log(num3); // 123

console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);

// Number.isFinite() 与全局的 isFinite() 函数不同，
// 全局的 isFinite() 会先把检测值转换为 Number ，然后在检测。
// Number.isFinite() 不会将检测值转换为 Number对象，如果检测值不是 Number 类型，则返回 false。
// 如果 number 是 NaN、非数字或者是正、负无穷大的数，则返回 false。
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(0)); // true
console.log(Number.isFinite("123")); // false

console.log(isFinite("123")); // true

// toExponential(x) 把对象的值转换为指数计数法。
console.log((123456789).toExponential()); // 1.23456789e+8 也就是1.23456789乘以10的8次方

// toFixed() 把数字转换为字符串，结果的小数点后有指定位数的数字
// 会四舍五入
console.log((123.456).toFixed(2)); // 123.46
