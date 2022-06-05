import React, { Component } from "react";

export class Route3 extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <div>this.props.location.search: {this.props.location.search}</div>
        <div>this.props.location.hash: {this.props.location.hash}</div>
        <div>
          this.props.location.state?.fromDashboard:
          {this.props.location.state?.fromDashboard}
        </div>
      </div>
    );
  }
}

export default Route3;
