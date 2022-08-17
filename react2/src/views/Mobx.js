import React from "react";
import { observer } from "mobx-react";
import testStore from "../store/mobx/testStore";
import { autorun, reaction, when } from "mobx";

class Mobx extends React.PureComponent {
  componentDidMount() {
    // autorun(() => {
    //   console.log(testStore.count);
    // });

    // reaction(
    //   () => {
    //     return testStore.count + 10;
    //   },
    //   (value, previousValue, reaction) => {
    //     console.log(value, previousValue, reaction);
    //   }
    // );

    when(
      () => {
        return testStore.count > 20;
      },
      () => {
        console.log("满足条件执行");
      }
    );
  }

  changeCount = () => {
    testStore.count = 20;
  };

  render() {
    return (
      <div>
        <div>count: {testStore.count}</div>
        <div>double: {testStore.double}</div>
        <button onClick={() => testStore.increment()}>increment</button>
        <button onClick={() => testStore.decrement()}>decrement</button>
        <button onClick={this.changeCount}>changeCount</button>
        <div>
          <button onClick={() => testStore.fetch()}>异步操作</button>
        </div>
      </div>
    );
  }
}

export default observer(Mobx);
