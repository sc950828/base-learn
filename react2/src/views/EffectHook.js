import { useState, useEffect } from "react";

// 你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
function EffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("randy");

  // 初始会运行，在更新的时候也会运行
  // 在更新完 DOM 后执行它。这个过程在每次渲染时都会发生，包括首次渲染。
  // 与vue3 watchEffect的区别是，vue3只有在依赖数据快画才运行，而react是组件更新就运行
  // 如果需要仅在数据变更运行，需要传递第二个参数，这个在vue3中是不需要的，可以自动识别
  // useEffect(() => {
  //   console.log(count);
  //   document.title = `${count} times`;

  //   // 该方法会在更新和组件卸载的时候运行，也就是只有首次不运行
  //   return () => {
  //     // 通常用来清除监听和定时器
  //     console.log("可以清除一些东西啦");
  //   };
  // });

  // 依赖count变化才运行
  // 有依赖的useEffect不管里面是否使用到了依赖首次都会执行
  // 如果依赖没变，清除副作用仅在组件卸载的时候运行
  // 总结
  // 所以有依赖的useEffect，如果依赖没变的话，（仅在组件挂载和卸载时执行）
  // 类似下面说的传递[]
  useEffect(() => {
    console.log("仅在name变化时运行", name);
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    // 该方法会在依赖数据更新和组件卸载的时候运行，也就是只有首次不运行
    return () => {
      console.log("依赖数据更新和组件卸载的时候运行");
      clearInterval(timer);
      setCount(0);
    };
  }, [name]);

  // 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行）
  // 可以传递一个空数组（[]）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。
  // useEffect(() => {
  //   console.log("仅在组件挂载时执行");

  //   return () => {
  //     console.log("仅在组件卸载时执行");
  //   };
  // }, []);

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>add count</button>
      </div>
      <div>{name}</div>
      <div>
        <button onClick={() => setName(name + "!")}>add name</button>
      </div>
    </div>
  );
}

export default EffectHook;
