import { memo } from "react";

function Memo2({ name }) {
  console.log("memo2 render");
  return <div>{name}</div>;
}

const controlIsRender = (preProps, nextProps) => {
  console.log(preProps, nextProps);
  if (preProps.name === nextProps.name) {
    return true;
  }
  return false;
};

// React.memo 接受两个参数，第一个参数原始组件本身，第二个参数是一个函数，
// 可以根据一次更新中props是否相同决定原始组件是否重新渲染。是一个返回布尔值，
// true 证明组件无须重新渲染，false证明组件需要重新渲染，
// 这个和类组件中的shouldComponentUpdate()正好相反

export default memo(Memo2, controlIsRender);
