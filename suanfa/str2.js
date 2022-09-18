// 字符串反转
function reverseStr() {
  const str = "juejin";

  return str.split("").reverse().join("");
}

console.log(reverseStr("juejin"));

// 回文字符串，就是正着读和倒着读都一🐱一样的字符串
// 反转一样法
function isPalindrome1(str) {
  const newStr = str.split("").reverse().join("");

  return str === newStr;
}

console.log("yessey:", isPalindrome1("yessey"));
console.log("randy:", isPalindrome1("randy"));

// 左右对称法
function isPalindrome2(str) {
  const len = str.length;
  for (let index = 0; index < len / 2; index++) {
    if (str[index] !== str[len - 1 - index]) {
      return false;
    }
  }
  return true;
}
console.log("yessey:", isPalindrome2("yessey"));
console.log("randy:", isPalindrome2("randy"));
console.log("-121:", isPalindrome2("-121"));
console.log("1231:", isPalindrome2("1231"));

// 双指针
function isPalindrome3(str) {
  const len = str.length;
  let l = 0;
  let r = len - 1;
  while (l < r) {
    if (str[l] !== str[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}
console.log("yessey:", isPalindrome3("yessey"));
console.log("randy:", isPalindrome3("randy"));

// 删除某个字符后是否还是回文字符串
function delpalindrome(str) {
  const len = str.length;
  let l = 0;
  let r = len - 1;

  while (l < r && str[l] === str[r]) {
    l++;
    r--;
  }

  if (isPalindrome(l + 1, r)) {
    return true;
  }

  if (isPalindrome(l, r - 1)) {
    return true;
  }

  function isPalindrome(i, j) {
    while (i < j) {
      if (str[i] !== str[j]) {
        return false;
      }
      i++;
      j--;
    }

    return true;
  }

  return false;
}

console.log(delpalindrome("acbca"));
