import React, { Component } from "react";

export class Home extends Component {
  say = () => {
    const all = "randy" + 27;
    console.log(all);
  };
  render() {
    return (
      <div>
        <div>Home</div>
        <button onClick={this.say}>say</button>
      </div>
    );
  }
}

export default Home;
