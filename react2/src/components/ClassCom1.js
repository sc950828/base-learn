import React from "react";

class ClassCom1 extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <div>user.name: {this.props.user.name}</div>
        <div>user.age: {this.props.user.age}</div>
      </div>
    );
  }
}

export default ClassCom1;
