import React from "react";
import Children1 from "../components/Children1";
import Children2 from "../components/Children2";
import Children3 from "../components/Children3";
import Children4 from "../components/Children4";

class Parent1 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "randy",
    };
  }

  changeName = () => {
    this.setState({
      name: "demi",
    });
  };

  info = (data) => {
    return <span>{data}</span>;
  };

  render() {
    return (
      <div>
        <Children1 name="children test1">
          <div>child内容1</div>
          <div>child内容2</div>
        </Children1>

        <Children1 name="children test2">
          <div>单个子元素</div>
        </Children1>

        <Children2 children="哈哈">我会被覆盖吗</Children2>

        <Children3
          name={this.state.name}
          changeName={this.changeName}
        ></Children3>

        <Children4 element={this.info}></Children4>
      </div>
    );
  }
}

export default Parent1;
