import React, { Component } from "react";

export class Children3 extends Component {
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <button onClick={this.props.changeName}>changeName</button>
      </div>
    );
  }
}

export default Children3;
