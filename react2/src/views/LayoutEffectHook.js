import { useState, useEffect, useLayoutEffect } from "react";

// https://blog.csdn.net/qq_38164763/article/details/113532855

// useEffect 是异步执行的，而useLayoutEffect是同步执行的。
// useEffect 的执行时机是浏览器完成渲染后再异步调用
// 而 useLayoutEffect 的执行时机是浏览器把内容真正渲染到界面之前，和 componentDidMount 等价。
// 所以 useLayoutEffect先于useEffect执行，但是可能会导致阻塞

// 优先使用 useEffect，因为它是异步执行的，不会阻塞渲染
// 会影响到渲染的操作尽量放到 useLayoutEffect中去，避免出现闪烁问题
// useLayoutEffect和componentDidMount是等价的，会同步调用，阻塞渲染
// useLayoutEffect在服务端渲染的时候使用会有一个 warning，因为它依赖dom操作，所以不可能被执行。

function LayoutEffectHook() {
  const [text, setText] = useState("hello world");
  const [count, setCount] = useState(0);

  // useEffect是异步操作
  // 会闪烁
  // useEffect(() => {
  //   let i = 0;
  //   while (i <= 100000000) {
  //     i++;
  //   }
  //   setText("world hello");
  // }, []);

  // useLayoutEffect是同步操作
  // 换成 useLayoutEffect 之后闪烁现象就消失了
  useLayoutEffect(() => {
    let i = 0;
    while (i <= 100000000) {
      i++;
    }
    setText("world hello");
  }, [count]);

  // 执行顺序
  // 不管里面是否有依赖，第一次总会运行
  // useLayoutEffect是同步调用，所以先于useEffect
  useEffect(() => {
    console.log("useEffect");
  }, [count]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, [count]);

  return (
    <div>
      <div>{text}</div>
      <div>
        <div>{count}</div>
        <div>
          <button onClick={() => setCount(count + 1)}>add</button>
        </div>
      </div>
    </div>
  );
}

export default LayoutEffectHook;
