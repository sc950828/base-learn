import React, { Component, Fragment } from "react";

export class FragmentTest extends Component {
  // 支持长短两种语法
  render() {
    return (
      <div className="fragment-test">
        <Fragment>FragmentTest1</Fragment>
        <>FragmentTest2</>
      </div>
    );
  }
}

export default FragmentTest;
