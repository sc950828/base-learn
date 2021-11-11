const type = "a";

// break 或者 return 都会阻止switch
const switchTest = () => {
  switch (type) {
    case "a":
      console.log("A");
      // break;
      return;
    case "b":
      console.log("B");
      break;
    case "c":
      console.log("C");
      break;
    default:
      console.log("default");
  }
};

const forTest = () => {
  for (var i = 1; i <= 10; i++) {
    if (i === 5) {
      // break终止循环
      break;
      // continue 跳过此次循环
      // continue;
    }
    console.log(i);
  }
};

switchTest();
forTest();
