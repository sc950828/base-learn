import React, { Component } from "react";

export class ClassState extends Component {
  static defaultProps = {
    name: "class state",
  };

  constructor() {
    super();
    this.state = {
      user: { name: "randy", age: 24 },
    };
  }

  changeUserName = async () => {
    this.setState((state, props) => {
      // 函数获取的是老值
      console.log(state, props);
      return {
        user: { ...state.user, name: "demi" },
      };
    });

    // 第二个函数能拿到最新值
    // this.setState(
    //   (state, props) => {
    //     // 函数里面是老值
    //     console.log(state, props);
    //     return {
    //       user: { ...state.user, name: "demi" },
    //     };
    //   },
    //   () => {
    //     console.log(this.state.user);
    //   }
    // );
    // 函数能拿到之前的状态
    // 通过await 能拿到最新值
    // await this.setState((state, props) => {
    //   console.log(state, props);
    //   return {
    //     user: { ...state.user, name: "demi" },
    //   };
    // });

    // console.log(this.state.user);
  };

  changeUserAge = () => {
    // 虽然调用三次，只会改变一次
    // this.setState({
    //   user: { ...this.state.user, age: this.state.user.age + 1 },
    // });
    // this.setState({
    //   user: { ...this.state.user, age: this.state.user.age + 1 },
    // });
    // this.setState({
    //   user: { ...this.state.user, age: this.state.user.age + 1 },
    // });

    // 要实现三次累加，需要传递函数，每次拿到上一次的值进行累加
    const increaseAge = (state, props) => {
      return { user: { ...state.user, age: state.user.age + 1 } };
    };

    this.setState(increaseAge);
    this.setState(increaseAge);
    this.setState(increaseAge);
  };

  render() {
    return (
      <div>
        <div>
          user.name: {this.state.user.name}, user.age: {this.state.user.age}
        </div>
        <div>
          <button onClick={this.changeUserName}>change user name</button>
          <button onClick={this.changeUserAge}>change user name</button>
        </div>
      </div>
    );
  }
}

export default ClassState;
