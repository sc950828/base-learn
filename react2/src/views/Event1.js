import React from "react";

class Event1 extends React.Component {
  //React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
  // this 问题 解决 this 问题主要有四种方法
  // e可以不用传递 都能获取到
  constructor() {
    super();
    this.click1 = this.click1.bind(this);
  }

  state = { name: "randy" };

  click1(e) {
    // 普通函数不在constructor bind this，this就是undefined
    console.log(e, this);
    console.log("我是 constructor bind 的 this");
  }

  click2 = (e) => {
    // 箭头函数方式 可以不用绑定this
    console.log(e, this);
    console.log("我是通过箭头函数绑定的this");
  };

  click3(e) {
    // 普通函数，通过函数返回的形式绑定this
    console.log(e, this);
    console.log("我通过函数返回");
  }

  click4(e) {
    // 普通函数，直接bind this
    console.log(e, this);
    console.log("我通过函数里面bind this");
  }

  // 传递参数只能使用后面两种
  click5(e, name) {
    // 返回函数的方式 需要显示传递 事件 e
    console.log(e, this);
    console.log(name);
  }

  click6(e, name) {
    // bind 方式不用个传递 事件 e
    console.log(e, this);
    console.log(name);
  }

  updateName = () => {
    this.setState({
      name: "demi",
    });
  };

  // 回调函数的方式在更新的时候会调用两次
  refclick = (e) => {
    this.ref1 = e;
    console.log("@", e);
  };

  render() {
    return (
      <div>
        <button onClick={this.click1}>bind 绑定 this</button>
        <button onClick={this.click2}>箭头函数 绑定 this</button>
        <button onClick={() => this.click3()}>
          普通函数 函数返回 不传递参数
        </button>
        <button onClick={(e) => this.click3(e)}>
          普通函数 函数返回 传递参数
        </button>
        <button onClick={this.click4.bind(this)}>函数里面bind this</button>
        <button onClick={(e) => this.click5(e, "randy")}>
          带参数 函数返回
        </button>
        <button onClick={this.click6.bind(this, "demi")}>
          带参数 函数里面bind this
        </button>

        {/* 如果 `ref` 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数 `null`，然后第二次会传入参数 DOM 元素。
        这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的。
        通过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免上述问题，但是大多数情况下它是无关紧要的。 */}
        {/* <div ref={(e) => this.refclick(e)}>{this.state.name}</div> */}

        {/* 改成这种方式避免两次渲染 */}
        <div ref={this.refclick}>{this.state.name}</div>
        <button
          onClick={() => {
            this.setState({
              name: "demi",
            });
          }}
        >
          修改name
        </button>
      </div>
    );
  }
}

export default Event1;
