// abs
const m1 = Math.abs(-10);
console.log("---Math.abs取绝对值---", m1);

// ceil()向上取整
const m2 = Math.ceil(12.56); // 13
const m3 = Math.ceil(12.46); // 13
console.log("---Math.ceil向上取整", m2);
console.log("---Math.ceil向上取整", m3);

// floor()向下取整
const m4 = Math.floor(12.56); // 12
const m5 = Math.floor(12.46); // 12
console.log("---Math.floor向下取整---", m4);
console.log("---Math.floor向下取整---", m5);

// max() min() 获取最大值或者最小值
console.log("---Math.max---", Math.max(1, 2, 3, 4, 5, 6)); // 6
console.log("---Math.min---", Math.min(1, 2, 3, 4, 5, 6)); // 1

// pow(x, y) 返回 x 的 y 次幂。
const m6 = Math.pow(2, 4); // 16
console.log("---Math.pow---", m6);

// random() 返回0-1之间的随机数
const m7 = Math.random();
console.log("---Math.random---", m7);

// round() 取整并且会四舍五入
const m8 = Math.round(123.45); // 123
const m9 = Math.round(123.56); // 124
console.log("---Math.round---", m8);
console.log("---Math.round---", m9);

// trunc() 取整但是不会四舍五入
const m10 = Math.trunc(123.45);
const m11 = Math.trunc(123.56);
console.log("---Math.trunc取整---", m10); // 123
console.log("---Math.trunc取整---", m11); // 123
