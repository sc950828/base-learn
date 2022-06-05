import React from "react";
import { UserContext } from "../utils/contexts";
// import name3, { run, say, user, name1, name2 } from "../utils/contexts";

class Context2 extends React.Component {
  // static contextType = UserContext;

  componentDidMount() {
    // console.log(this.context);
    // run();
    // say();
    // user.run();
    // console.log(name1, name2, name3);
  }

  render() {
    return <div>{this.context}</div>;
  }
}

// 这种写法也是一样的
Context2.contextType = UserContext;

export default Context2;
