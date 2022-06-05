import React, { Component } from "react";
import LifeChild2 from "../components/LifeChild2";
import LifeChild3 from "../components/LifeChild3";

export class Life2 extends Component {
  // 当我们改变父组件state的时候，该值并没传递给子组件，但是子组件还是会更新
  // 使用shouldComponentUpdate或者PureComponent能解决这个问题
  // React.PureComponent 以代替手写 shouldComponentUpdate()。
  // 它用当前与之前 props 和 state 的浅比较覆写了 shouldComponentUpdate() 的实现。

  constructor() {
    super();
    this.state = {
      title: "父组件title",
    };
  }

  changeTitle = async () => {
    // 这样不会响应式
    // this.state.title = "新的父组件title";

    // await this.setState({
    //   title: "新的父组件title",
    // });
    // // 能获取到最新的state
    // console.log(this.state);

    // 能获取之前的state
    this.setState((state, props) => {
      // console.log(state, props);
      return {
        title: "新的父组件title",
      };
    });

    // 老state
    // console.log(this.state);
  };

  render() {
    return (
      <div>
        <div>title: {this.state.title}</div>
        <div>
          <button onClick={this.changeTitle}>改变title</button>
        </div>
        <LifeChild2></LifeChild2>
        <LifeChild3></LifeChild3>
        {/* <LifeChild3 title={this.state.title}></LifeChild3> */}
      </div>
    );
  }
}

export default Life2;
