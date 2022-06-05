import React from "react";
import { AgeContext } from "../utils/contexts";

class Context3 extends React.Component {
  static contextType = AgeContext;

  render() {
    return <div>{this.context.age}</div>;
  }
}

export default Context3;
