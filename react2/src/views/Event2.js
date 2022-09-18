import React from "react";

class Event2 extends React.Component {
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
    this.childRef = React.createRef();
  }

  componentDidMount() {
    console.log("React componentDidMount！");
    this.parentRef.current?.addEventListener("click", (e) => {
      console.log("原生事件：父元素 DOM 事件监听！", e);
    });
    this.childRef.current?.addEventListener("click", (e) => {
      console.log("原生事件：子元素 DOM 事件监听！", e);
    });
    document.addEventListener("click", (e) => {
      console.log("原生事件：document DOM 事件监听！", e);
    });
  }

  parentClickFun = (e) => {
    // 合成事件，通过nativeEvent获取原生事件对象
    console.log("React 事件：父元素事件监听！", e);
  };
  childClickFun = (e) => {
    // 合成事件，通过nativeEvent获取原生事件对象
    console.log("React 事件：子元素事件监听！", e);
  };
  render() {
    return (
      <div ref={this.parentRef} onClick={this.parentClickFun}>
        <div ref={this.childRef} onClick={this.childClickFun}>
          分析事件执行顺序
        </div>
      </div>
    );
  }
}
export default Event2;
