function MemoHook1({ count }) {
  console.log("MemoHook1 render");
  return <div>我也依赖count，count:{count}</div>;
}

export default MemoHook1;
