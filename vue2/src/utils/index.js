// 非立即执行版
export function debounce1(func, delay) {
  let timer = null;
  // 需要arguments 获取参数列表，所以这里必须是普通函数而不是箭头函数
  return function () {
    const context = this;
    const args = arguments;
    if (timer) clearTimeout(timer);

    // timer = setTimeout(() => {
    //   // func.apply(context, args);
    //   func.call(context, ...args);
    // }, delay);

    timer = setTimeout(function () {
      func.apply(context, args);
      // func.call(context, ...args);
    }, delay);
  };
}
