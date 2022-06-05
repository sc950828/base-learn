import React, { Component } from "react";

export class Jsx1 extends Component {
  // 0会被当成true渲染

  arr = [];

  render() {
    return (
      <div>
        <div>
          {false}转成string:{String(false)}
        </div>
        <div>
          {true}转成string:{String(true)}
        </div>
        <div>
          {null}转成string:{String(null)}
        </div>
        <div>
          {undefined}转成string:{String(undefined)}
        </div>

        {/* 数字0会被渲染 不需要转成字符串*/}
        <div>
          {0}转成string:{String(0)}
        </div>
      </div>
    );
  }
}

export default Jsx1;
