import React, { Component } from "react";

export class LifeChild3 extends Component {
  constructor() {
    super();
    this.state = {
      name: "randy",
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // this.props和this.state还是之前的
    console.log(this.props, this.state);
    console.log(nextProps, nextState);

    if (this.props.title !== nextProps.title) {
      return true;
    }
    if (this.state.name !== nextState.name) {
      return true;
    }
    return false;
  }

  render() {
    console.log("子组件3 render");
    return <div>LifeChild3</div>;
  }
}

export default LifeChild3;
