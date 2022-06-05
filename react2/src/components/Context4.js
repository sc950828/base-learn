import React from "react";
import { AgeContext, UserContext } from "../utils/contexts";

class Context4 extends React.Component {
  // 使用Consumer就不需要再定义contextType了

  // 多个context
  render() {
    return (
      <div>
        <h3>class组件 Consumer</h3>
        <UserContext.Consumer>
          {(name) => {
            return (
              <AgeContext.Consumer>
                {({ age }) => {
                  return (
                    <div>
                      {name}, {age}
                    </div>
                  );
                }}
              </AgeContext.Consumer>
            );
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default Context4;
