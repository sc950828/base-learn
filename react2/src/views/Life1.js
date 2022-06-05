import React, { Component } from "react";
import LifeChild1 from "../components/LifeChild1";

export class Life1 extends Component {
  // 默认属性值，可以在此指定属性默认值
  // static defaultProps = {
  //   say: "say father",
  // };

  constructor() {
    super();
    console.log("父组件 constructor");
    this.state = {
      title: "父组件",
    };
  }

  // 初始会运行 props或state改变时也会调用
  // 里面的props和state是最新的，
  // 返回一个对象来更新 state 或者返回 null 来表示接收到的 props 没有变化，不需要更新 state
  static getDerivedStateFromProps(props, state) {
    console.log("父组件 getDerivedStateFromProps", props, state);
    // 静态方法没有this
    // console.log(this);
    return null;
  }

  componentDidMount() {
    console.log("父组件 componentDidMount");
  }

  // 初始不会运行 props或state改变时调用
  // 当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。
  shouldComponentUpdate(nextProps, nextState) {
    console.log("父组件 shouldComponentUpdate", nextProps, nextState);
    // 必须返回true或false true表示更新 false表示不更新
    return true;
    // return false;
  }

  // 初始不会运行 props或state改变时调用
  // 被调用于 render 之后、更新 DOM 和 refs 之前。
  // 此生命周期钩子必须有返回值，返回值将作为componentDidUpdate第三个参数。
  // 必须和 componentDidUpdate 一起使用，否则会报错。
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("父组件 getSnapshotBeforeUpdate", prevProps, prevState);
    // 这里的state和props已经是最新的了
    // console.log("父组件", this.props, this.state);
    return 456;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("父组件 componentDidUpdate", prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log("父组件 componentWillUnmount");
  }

  changeTitle = () => {
    console.log("父组件 changeTitle");
    this.setState({
      title: "新的父组件title",
    });
  };

  render() {
    console.log("父组件 render");
    return (
      <div>
        <h3>{this.state.title}</h3>
        <div>
          <button onClick={this.changeTitle}>改变父组件title</button>
        </div>
        <LifeChild1></LifeChild1>
        {/* <LifeChild1 value={this.state.title}></LifeChild1> */}
      </div>
    );
  }
}

export default Life1;
