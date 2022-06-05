import React, { Component } from "react";

export class ClassState extends Component {
  static defaultProps = {
    name: "class state",
  };

  constructor() {
    super();
    this.state = {
      user: { name: "randy", age: 24 },
    };
  }

  changeUserName = async () => {
    // this.setState((state, props) => {
    //   console.log(state, props);
    //   return {
    //     user: { ...state.user, name: "demi" },
    //   };
    // });

    // this.setState(
    //   (state, props) => {
    //     console.log(state, props);
    //     return {
    //       user: { ...state.user, name: "demi" },
    //     };
    //   },
    //   () => {
    //     console.log(this.state.user);
    //   }
    // );

    await this.setState((state, props) => {
      console.log(state, props);
      return {
        user: { ...state.user, name: "demi" },
      };
    });

    console.log(this.state.user);
  };

  render() {
    return (
      <div>
        <div>
          user.name: {this.state.user.name}, user.age: {this.state.user.age}
        </div>
        <div>
          <button onClick={this.changeUserName}>change user name</button>
        </div>
      </div>
    );
  }
}

export default ClassState;
