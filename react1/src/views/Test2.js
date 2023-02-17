import React, { useState, useEffect } from "react";

function Test2() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(2);
  const handleClick1 = () => {
    setCount(count + 1);
  };
  const handleClick2 = () => {
    setCount2(count2 + 1);
  };

  // 初始化和更新的时候被调用
  useEffect(() => {
    console.log("我被执行了");
    // 获取数据， api
    // const time = setTimeout(() => {}, 1000)
    // 清除 组件销毁执行，监听数据发生变化执行
    return () => {
      console.log("我被清除了");
      // clearInterval(time)
    };
  }, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClick1}>click1</button>
      <div>{count2}</div>
      <button onClick={handleClick2}>click2</button>
    </div>
  );
}

export default Test2;
