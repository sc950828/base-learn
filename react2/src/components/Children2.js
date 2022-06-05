import React from "react";

class Children2 extends React.Component {
  // this.props.children 是一个数组
  constructor(props) {
    super();
  }

  componentDidMount() {
    // 同名属性会被插槽元素覆盖
    console.log(this.props.children);
  }

  render() {
    return (
      <div>
        <div>当我传递了一个名为children的属性会怎么样</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Children2;
