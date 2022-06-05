import React from "react";
import ReactDOM from "react-dom";

class Portal1 extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div>我是 portal2</div>,
      document.getElementById("root")
    );
  }
}

export default Portal1;
