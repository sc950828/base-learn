import React, { Component } from "react";

export class Route9 extends Component {
  goPage1 = () => {
    this.props.history.push("route1");
  };

  goPage2 = () => {
    this.props.history.push("/router/route1");
  };

  goPage3 = () => {
    this.props.history.push({
      pathname: "route3",
      search: "?sort=name",
      hash: "#the-hash",
      state: { fromDashboard: 1 },
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.goPage1}>goPage1 字符串跳转</button>
        <button onClick={this.goPage2}>goPage2 字符串绝对路径跳转</button>
        <button onClick={this.goPage3}>goPage3 对象跳转</button>
      </div>
    );
  }
}

export default Route9;
