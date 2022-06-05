import { useState } from "react";
import Memo1 from "../components/Memo1";
import Memo2 from "../components/Memo2";

// React.memo和PureComponent作用类似，可以用作性能优化，React.memo 是高阶组件，函数组件和类组件都可以使用，
//  和区别PureComponent是 React.memo只能对props的情况确定是否渲染，而PureComponent是针对props和state。

function MemoTest() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("randy");

  return (
    <div>
      {/* memo */}
      <Memo1 count={count}></Memo1>
      <Memo2 name={name}></Memo2>

      <div>
        <button onClick={() => setCount(count + 1)}>add count</button>
      </div>

      {/* Memo1不依赖name，但是name改变 还是会触发 Memo1 重新渲染 */}
      {/* 我们在Memo1里面使用memo就可以解决这个问题 */}
      <div>
        {/* <button onClick={() => setName(name)}>add name</button> */}
        <button onClick={() => setName(name + "!")}>add name</button>
      </div>
    </div>
  );
}

export default MemoTest;
