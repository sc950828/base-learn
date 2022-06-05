import React from "react";

class Children1 extends React.Component {
  // this.props.children 是一个数组
  constructor(props) {
    super();
    // console.log(props);
    // 如果你在 constructor 中要使用 this.props，就必须给 super 加参数：super(props)
    // super(props);
    // console.log(this.props);
  }

  componentDidMount() {
    // children可能是数组或者是单个对象
    console.log(this.props.children);
  }

  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>
          {Array.isArray(this.props.children)
            ? this.props.children[0]
            : this.props.children}
        </div>
      </div>
    );
  }
}

export default Children1;
