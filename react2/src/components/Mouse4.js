import React from "react";

class Mouse4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {/* 传递函数过来 动态渲染 */}
        {this.props.children(this.state)}
      </div>
    );
  }
}

export default Mouse4;
