import React from "react";
import Context1 from "../components/Context1";
import { UserContext, AgeContext } from "../utils/contexts";

class ContextTest extends React.Component {
  render() {
    // 可以嵌套多个
    // 相同的话，后面的覆盖前面的
    return (
      <UserContext.Provider value="demi">
        <UserContext.Provider value="jack">
          <AgeContext.Provider value={{ age: 27 }}>
            <Context1></Context1>
          </AgeContext.Provider>
        </UserContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default ContextTest;
