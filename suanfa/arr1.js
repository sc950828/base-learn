function count(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
  }

  return sum;
}

function say(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      arr[i][j] = j;
    }
  }

  return arr;
}

console.log(say(10));
