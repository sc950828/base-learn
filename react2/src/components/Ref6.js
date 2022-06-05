import React, { Component } from "react";

export class Ref6 extends Component {
  render() {
    return (
      <div>
        <div ref={this.props.customRef2}>Ref6</div>
      </div>
    );
  }
}

export default Ref6;
