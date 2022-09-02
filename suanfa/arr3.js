// 真题描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
// 请你找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

// 示例： 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]

// 双指针对撞法

// 固定一个数
// 左右双指针

let nums = [-1, 0, 1, 2, -1, -4];

function sumFun() {
  const arr = [];

  // 先排序
  nums = nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i <= nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;

    // 重复数跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    while (l < r) {
      if (nums[i] + nums[l] + nums[r] < 0) {
        l++;

        // 重复就跳过
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r--;

        // 重复就跳过
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
      } else {
        arr.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;

        // 重复就跳过
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        // 重复就跳过
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
      }
    }
  }

  return arr;
}

console.log(sumFun());
