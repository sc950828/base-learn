import React, { Component } from "react";

export class Profiler1 extends Component {
  callback = () => {};

  render() {
    return (
      <div>
        {/* 没明白识别不了 */}
        {/* <Profiler id="test" onRender={this.callback}>
          <div>Profiler1</div>
        </Profiler> */}
      </div>
    );
  }
}

export default Profiler1;
