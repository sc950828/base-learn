import React from "react";
import { AgeContext, UserContext } from "../utils/contexts";

const Context6 = () => {
  // 多个context
  return (
    <div>
      <h3>函数组件 Consumer</h3>
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
};

export default Context6;
