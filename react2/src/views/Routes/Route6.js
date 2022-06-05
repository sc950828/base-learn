import React, { Component } from "react";
import withRouter from "./withRouter";

export class Route6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("route6 getDerivedStateFromProps", props, state);

    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("route6 getSnapshotBeforeUpdate", prevProps, prevState);
    // 这里的state和props已经是最新的了
    // console.log("父组件", this.props, this.state);
    return 456;
  }

  componentDidUpdate() {
    console.log("route6 componentDidUpdate");
  }

  render() {
    return <div>Route6</div>;
  }
}

// export default Route6;
export default withRouter(Route6);
