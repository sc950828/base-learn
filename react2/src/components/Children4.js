import React from "react";
class Children4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: "子组件数据",
    };
  }
  render() {
    return <div>{this.props.element(this.state.info)}</div>;
  }
}
export default Children4;
