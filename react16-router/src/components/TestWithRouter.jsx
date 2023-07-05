import React from "react";
import { withRouter } from "react-router-dom";

function TestWithRouter(props) {
  console.log("TestWithRouter", props);
  return <div>TestWithRouter</div>;
}

export default withRouter(TestWithRouter);
