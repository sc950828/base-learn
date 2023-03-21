import React from "react";
import Ref1 from "../components/Ref1";
import Ref2 from "../components/Ref2";
import Ref3 from "../components/Ref3";
import Ref4 from "../components/Ref4";
import Ref5 from "../components/Ref5";
import Ref6 from "../components/Ref6";
import Ref7 from "../components/Ref7";

const ref1 = React.createRef();
const ref2 = React.createRef();

class RefTest extends React.Component {
  constructor() {
    super();
    // 还可以在这里定义
    this.ref4 = React.createRef();
    this.ref5 = React.createRef();
    this.ref7 = React.createRef();
    this.ref8 = React.createRef();
    this.ref9 = React.createRef();
    this.refItems = [];
    console.log(this);
  }

  componentDidMount() {
    // ref转发 获取的是具体dom元素
    console.log(ref1.current);

    // 获取的是组件
    console.log(ref2.current);
    console.log(ref2.current.say());
    // 回调的方式不需要.current
    console.log(this.ref3);

    // 你不能在函数组件上使用 ref 属性，因为它们没有实例
    // ref4是函数式组件所以不能使用ref
    // console.log(this.ref4);

    // 这种也是ref转发，能获取到组件内部的dom元素
    console.log(this.ref5.current);
    // 回调的方式不需要.current
    console.log(this.ref6);
    console.log(this.ref7.current);

    // 自定义暴露给父组件的ref对象
    this.ref7.current.focus();
    // this.ref7.current.changeValue();
    console.log(this.ref8.current); // <div>普通元素</div>
    console.log(this.ref9.current); // <div>2: 3</div>
    console.log(this.refItems); // [div, div, div]
  }

  setItems = (el) => {
    if (el) {
      this.refItems.push(el);
    }
  };

  render() {
    return (
      <div>
        <div ref="testRef">字符串ref，可以直接通过this.refs.xxx获取</div>
        <div ref={this.ref8}>普通元素</div>
        {[1, 2, 3].map((item, index) => (
          <div key={index} ref={this.ref9}>
            {index}: {item}
          </div>
        ))}
        {[1, 2, 3].map((item, index) => (
          <div key={index} ref={this.setItems}>
            {index}: {item}
          </div>
        ))}
        {/* 这是ref转发，能获取到组件里面的dom元素 */}
        <Ref1 ref={ref1}></Ref1>
        {/* 这是获取组件 */}
        <Ref2 ref={ref2}></Ref2>
        {/* 这种方式也可以 */}
        <Ref3 ref={(el) => (this.ref3 = el)}></Ref3>

        {/* 函数式组件不能通过ref获取到 组件对象 */}
        {/* <Ref4 ref={this.ref4}></Ref4> */}

        <Ref5 customRef={this.ref5}></Ref5>

        <Ref6 customRef2={(el) => (this.ref6 = el)}></Ref6>

        <Ref7 ref={this.ref7}></Ref7>
      </div>
    );
  }
}

export default RefTest;
