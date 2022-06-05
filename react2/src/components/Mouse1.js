import React from "react";
// import CatImg from "./CatImg";
import CatImg2 from "./CatImg2";

class Mouse1 extends React.Component {
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
        {/* 这里太死板，我们需要动态 */}
        {/* <CatImg mouse={this.state}></CatImg> */}
        <CatImg2 mouse={this.state}></CatImg2>
      </div>
    );
  }
}

export default Mouse1;
