import React from "react";

const UserContext = React.createContext("randy");
const AgeContext = React.createContext({ age: 24 });

export { UserContext, AgeContext };

// 测试模块导出
// export function say() {
//   console.log("say");
// }

// export const run = () => {
//   console.log("run");
// };

// export const name1 = "randy";
// const name2 = "demi";

// export { name2 };

// export default const name3 = 'jack'

// const name3 = "jack";
// export default name3;
// export default { name3 };

// export const user = { run };
