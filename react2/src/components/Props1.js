import React, { Component } from "react";
// 不用安装 直接使用
import PropTypes from "prop-types";

export class Props1 extends Component {
  // 当传入的 prop 值类型不正确时，JavaScript 控制台将会显示警告。
  // 出于性能方面的考虑，propTypes 仅在开发模式下进行检查。

  static propTypes = {
    // https://react.docschina.org/docs/typechecking-with-proptypes.html
    name: PropTypes.string,
    optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    optionalNumber: PropTypes.number,
    optionalObject: PropTypes.object,
    optionalString: PropTypes.string,
    optionalSymbol: PropTypes.symbol,
  };

  render() {
    return (
      <div>
        <div>{this.props.name}</div>
      </div>
    );
  }
}

export default Props1;
