import React, { Component } from "react";

export class LifeChild1 extends Component {
  // static defaultProps = {
  //   say: "say child",
  // };

  constructor() {
    super();
    console.log("子组件 constructor");
    this.state = {
      title: "子组件",
    };
  }

  // 初始会运行 props或state改变时也会调用
  // 里面的props和state是最新的，
  // 返回一个对象来更新 state 或者返回 null 来表示接收到的 props 没有变化，不需要更新 state
  static getDerivedStateFromProps(props, state) {
    console.log("子组件 getDerivedStateFromProps", props, state);
    return null;
  }

  componentDidMount() {
    console.log("子组件 componentDidMount");
  }

  // 当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。
  // 初始不会运行
  shouldComponentUpdate(nextProps, nextState) {
    console.log("子组件 shouldComponentUpdate", nextProps, nextState);
    // 必须返回true或false true表示更新 false表示不更新
    return true;
    // return false;
  }

  // 被调用于 render 之后、更新 DOM 和 refs 之前。
  // 此生命周期钩子必须有返回值，返回值将作为componentDidUpdate第三个参数。
  // 必须和 componentDidUpdate 一起使用，否则会报错。
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("子组件 getSnapshotBeforeUpdate", prevProps, prevState);
    // 这里的state和props已经是最新的了
    // console.log("子组件", this.props, this.state);
    return 123;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("子组件 componentDidUpdate", prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log("子组件 componentWillUnmount");
  }

  changeTitle = () => {
    console.log("子组件 changeTitle");
    this.setState({
      title: "新的子组件title",
    });
  };

  render() {
    console.log("子组件 render");
    return (
      <div>
        <h3>
          {this.props.value},{this.state.title}
        </h3>
        <div>
          <button onClick={this.changeTitle}>改变子组件title</button>
        </div>
      </div>
    );
  }
}

export default LifeChild1;
