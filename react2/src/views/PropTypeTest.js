import React, { Component } from "react";
import Props1 from "../components/Props1";

export class PropTypeTest extends Component {
  render() {
    return (
      <div>
        <Props1 name="randy"></Props1>
        {/* <Props1 name={72}></Props1> */}
      </div>
    );
  }
}

export default PropTypeTest;
