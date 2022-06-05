import React, { PureComponent } from "react";

export class LifeChild2 extends PureComponent {
  render() {
    console.log("子组件2 render");
    return <div>LifeChild2</div>;
  }
}

export default LifeChild2;
