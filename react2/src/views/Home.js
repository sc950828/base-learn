import React from "react";

// 组件名称必须以大写字母开头。React 会将以小写字母开头的组件视为原生 DOM 标签。
class Home extends React.Component {
  formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  user = {
    firstName: "randy",
    lastName: "su",
  };

  arr = [];

  render() {
    return (
      <div>
        <h1>{this.formatName(this.user)}</h1>
      </div>
    );
  }
}

export default Home;
