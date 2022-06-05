import React, { Component } from "react";
import LifeChild1 from "../components/LifeChild1";

export class Life extends Component {
  constructor() {
    super();
    this.state = {
      title: "父组件title",
      hasError: false,
    };
    console.log("父组件 constructor");
  }

  componentWillMount() {
    console.log("父组件 componentWillMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "父组件 shouldComponentUpdate",
      nextProps,
      nextState,
      this.props,
      this.state
    );
    // 必须返回true或false true表示更新 false表示不更新
    return true;
    // return false;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "父组件 componentWillUpdate",
      nextProps,
      nextState,
      this.props,
      this.state
    );
  }

  componentWillReceiveProps(nextProps) {
    console.log("父组件 componentWillReceiveProps", nextProps, this.props);
  }

  componentDidCatch() {
    console.log("父组件 componentDidCatch");
  }

  static getDerivedStateFromError(error) {
    // 你同样可以将错误日志上报给服务器
    console.log("父组件 getDerivedStateFromError", error);
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  changeTitle = () => {
    this.setState({
      title: "父组件新的title",
    });
  };

  render() {
    console.log("父组件 render");
    if (this.state.hasError) {
      return <div>出错啦</div>;
    }
    return (
      <div>
        <div ref={(el) => (this.div = el)}>{this.state.title}</div>
        <button onClick={this.changeTitle}>change title</button>
        <LifeChild1 fatherTitle={this.state.title}></LifeChild1>
      </div>
    );
  }

  componentDidMount() {
    console.log("父组件 componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("父组件 componentDidUpdate", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("父组件 componentWillUnmount");
  }
}

export default Life;
