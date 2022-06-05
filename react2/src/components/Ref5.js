import React, { Component } from "react";

export class Ref5 extends Component {
  render() {
    return (
      <div>
        <div ref={this.props.customRef}>Ref5</div>
      </div>
    );
  }
}

export default Ref5;
