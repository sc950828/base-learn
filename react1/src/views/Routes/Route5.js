import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class Route5 extends Component {
  constructor(props) {
    super(props);
    console.log("Route5: ", this.props);
  }

  render() {
    return (
      <div>
        <div>Route5 我不是路由组件 获取不到路由相关参数</div>
        <div>
          类组件只能使用widthRouter包裹，函数组件可以使用hook或者withRouter
        </div>
      </div>
    );
  }
}

// export default Route5;
export default withRouter(Route5);
