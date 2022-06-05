import React from "react";

class Ref2 extends React.Component {
  say() {
    console.log("ref say");
  }

  render() {
    return (
      <div>
        <div className="class1">ref2 content1</div>
        <div className="class2">ref2 content2</div>
      </div>
    );
  }
}
export default Ref2;
