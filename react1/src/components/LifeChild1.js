import React, { Component } from "react";

export class LifeChild1 extends Component {
  constructor() {
    super();
    this.state = {
      title: "子组件title",
    };
    console.log("子组件 constructor");
  }

  componentWillMount() {
    console.log("子组件 componentWillMount");
  }

  componentDidMount() {
    console.log("子组件 componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("子组件 shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "子组件 componentWillUpdate",
      nextProps,
      nextState,
      this.props,
      this.state
    );
  }

  componentDidUpdate() {
    console.log("子组件 componentDidUpdate");
  }

  componentWillReceiveProps(nextProps) {
    console.log("子组件 componentWillReceiveProps", nextProps, this.props);
  }

  componentWillUnmount() {
    console.log("子组件 componentWillUnmount");
  }

  componentDidCatch() {
    console.log("子组件 componentDidCatch");
  }

  changeTitle = () => {
    this.setState({
      title: "子组件新的title",
    });
  };

  render() {
    console.log("子组件 render");
    // throw new Error("render error");
    return (
      <div>
        <div>{this.state.title}</div>
        <div>{this.props.fatherTitle}</div>
        <button onClick={this.changeTitle}>change title</button>
      </div>
    );
  }
}

export default LifeChild1;
