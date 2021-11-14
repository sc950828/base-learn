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
// 如果 number 是 NaN（非数字），或者是正、负无穷大的数，则返回 false。
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(0)); // true
console.log(Number.isFinite("123")); // false

console.log(isFinite("123")); // true
