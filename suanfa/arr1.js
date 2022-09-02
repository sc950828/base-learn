// 真题描述： 给定一个整数数组 nums 和一个目标值 target，
// 请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例: 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]

const nums = [2, 7, 11, 15];
const target = 9;

// 双重循环 时间复杂度O(n平方)
function indexfun() {
  for (let index = 0; index < nums.length; index++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[index] + nums[j] === target) {
        return [index, j];
      }
    }
  }
}
console.log(indexfun()); // [0, 1]

// 利用对象、时间复杂度为O(n)
function indexFun2() {
  const obj = {};
  for (let index = 0; index < nums.length; index++) {
    // 获取对象的key
    if (obj[target - nums[index]] !== undefined) {
      return [obj[target - nums[index]], index];
    }
    // 值 :下标
    obj[nums[index]] = index;
  }
}
console.log(indexFun2());

// 利用map、时间复杂度为O(n)
function indexFun3() {
  const map = new Map();
  for (let index = 0; index < nums.length; index++) {
    // 获取对象的key
    if (map.has(target - nums[index])) {
      return [map.get(target - nums[index]), index];
    }
    // 值 :下标
    map.set(nums[index], index);
  }
}
console.log(indexFun3());
