import React from "react";
import ClassCom1 from "../components/ClassCom1";
import FunCom1 from "../components/FunCom1";

class Com1 extends React.Component {
  user = {
    name: "randy",
    age: "24",
  };
  render() {
    return (
      <div>
        <ClassCom1 title="class 组件" user={this.user}></ClassCom1>
        <FunCom1 title="function 组件" user={this.user}></FunCom1>
      </div>
    );
  }
}

export default Com1;
