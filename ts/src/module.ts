// 全局空间
// const a1 = 1 // 无法重新声明块范围变量“a1”。

// 局部空间
export const a1 = 1;

const moduleTest1 = "randy";
// export default 必须先定义再导出
// export default moduleTest1;

// 或者直接导出一个对象
export default {
  name: "randy",
};
