import React, { Component } from "react";
import withRouter from "./withRouter";

export class Route1 extends Component {
  constructor(props) {
    super(props);

    // props不再注入 history location match
    // withRouter去掉了 需要自己封装，这样类组件才会有 history location match
    console.log("route1 props", this.props);
  }

  render() {
    return <div>Route1</div>;
  }
}

// export default Route1;
export default withRouter(Route1);
