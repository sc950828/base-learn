import { useCallback, useState } from "react";
import CallbackHook1 from "../components/CallbackHook1";

function MemoHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("randy");

  // useMemo 和 useCallback 接收的参数都是一样，都是在其依赖项发生变化后才执行，都是返回缓存的值，
  // 区别在于 useMemo 返回的是函数运行的结果， useCallback 返回的是函数。

  // 这种写法是实时的
  const callback1 = () => {
    console.log(count + name);
  };

  // 相当于只有count发生变化的时候 callback返回的函数才会重新计算
  // 不是实时的
  const callback2 = useCallback(() => {
    console.log(count + name);
  }, [count]);

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>add count</button>
      </div>

      <CallbackHook1 count={count} say={callback1}></CallbackHook1>

      {/* 可以被缓存 */}
      <CallbackHook1 count={count} say={callback2}></CallbackHook1>

      <div>{name}</div>
      <div>
        <button onClick={() => setName(name + "!")}>改变name</button>
      </div>
    </div>
  );
}

export default MemoHook;
