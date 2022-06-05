import React, { Component } from "react";

export class Route2 extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  // 动态参数组件 参数修改会触发 componentDidUpdate componentWillReceiveProps

  componentDidMount() {
    console.log("route2 componentDidMount");
  }

  componentWillUpdate() {
    console.log("route2 componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("route2 componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("route2 componentWillUnmount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("route2 componentWillReceiveProps", nextProps, this.props);
  }

  render() {
    return (
      <div>
        <div>this.props.match.params.id： {this.props.match.params.id}</div>
      </div>
    );
  }
}

export default Route2;
