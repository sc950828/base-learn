import React from "react";
import Error1Child from "../components/Error1Child";

class Error1 extends React.Component {
  //   错误边界无法捕获以下场景中产生的错误：

  // 事件处理 自己使用try catch处理
  // 异步代码（例如 setTimeout 或 requestAnimationFrame 回调函数）
  // 服务端渲染
  // 它自身抛出来的错误（并非它的子组件

  constructor() {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 你同样可以将错误日志上报给服务器
    console.log(error);
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    // 它自身抛出来的错误（并非它的子组件）是处理不了的哦
    // throw new Error("I crashed!");
    if (this.state.hasError) {
      return <div>出错啦</div>;
    }
    return <Error1Child></Error1Child>;
  }
}

export default Error1;
