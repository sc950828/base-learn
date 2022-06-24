import React from "react";

function debounce1(func, delay) {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    if (timer) clearTimeout(timer);
    const canCall = !timer;
    timer = setTimeout(() => {
      timer = null;
    }, delay);

    // if(canCall) func.apply(context, args)
    if (canCall) func.call(context, ...args);
  };
}

class Debounce extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  debounce2 = (func, delay) => {
    let timer = null;
    return function () {
      const context = this;
      const args = arguments;
      if (timer) clearTimeout(timer);
      const canCall = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);

      if (canCall) func.call(context, ...args);
    };
  };

  // 类组件 普通函数作为回调函数需要绑定this，不然获取不到this

  // handleClick = debounce1(function () {
  //   console.log("click", this);
  // }, 2000);

  // handleClick = debounce1(() => {
  //   console.log("click", this);
  // }, 2000);

  handleScroll = () => {
    console.log("scroll");
  };

  // handleClick = this.debounce2(function () {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  //   console.log(this.state.count);
  // }, 2000);

  handleClick = this.debounce2(() => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  }, 2000);

  componentDidMount() {
    window.addEventListener("scroll", debounce1(this.handleScroll, 1000));
    // window.addEventListener("scroll", this.debounce2(this.handleScroll, 1000));
  }

  render() {
    return (
      <div style={{ height: "1000px" }}>
        <div>{this.state.count}</div>
        {/* <button onClick={this.handleClick.bind(this)}> */}
        <button onClick={this.handleClick}>
          防抖，单位时间内重复触发重复计时
        </button>
      </div>
    );
  }
}

export default Debounce;
