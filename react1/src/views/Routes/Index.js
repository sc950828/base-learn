import React, { Component } from "react";

export class Index extends Component {
  constructor(props) {
    super(props);
    console.log("index", this.props);
  }
  render() {
    return <div>Index</div>;
  }
}

export default Index;
