import React from "react";

// 第二个参数 ref 只在使用 React.forwardRef 定义组件时存在。
// 常规函数和 class 组件不接收 ref 参数，且 props 中也不存在 ref。
const Ref1 = React.forwardRef((props, ref) => {
  return (
    <div>
      <div className="class1">ref1 content1</div>
      {/* <div className="class2" >ref1 content2</div> */}

      {/* ref挂在哪个元素上面就会是哪个元素 */}
      <div className="class2" ref={ref}>
        ref1 content2
      </div>
    </div>
  );
});

export default Ref1;
