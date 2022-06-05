import React from "react";

class For extends React.Component {
  // for循环使用map
  constructor() {
    super();
    this.state = { lists: ["a", "b", "c"] };
  }

  render() {
    const listItems = this.state.lists.map((item, index) => (
      <div key={index}>
        {index} : {item}
      </div>
    ));

    // if 语句以及 for 循环不是 JavaScript 表达式，所以不能在 JSX 中直接使用。
    const listItems2 = [];
    for (const index in this.state.lists) {
      listItems2.push(
        <div key={index}>
          {index} : {this.state.lists[index]}
        </div>
      );
    }
    return (
      <div>
        <div>{listItems}</div>
        <div>{listItems2}</div>
        {/* map能直接使用 */}
        <div>
          {this.state.lists.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default For;
