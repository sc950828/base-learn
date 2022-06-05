import React from "react";

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src="/logo512.png"
        style={{ position: "absolute", left: mouse.x, top: mouse.y }}
        alt="cat"
      />
    );
  }
}

export default Cat;
