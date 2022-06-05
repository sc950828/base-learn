import React, { Component } from "react";
import Portal1 from "../components/Portal1";
import Portal2 from "../components/Portal2";

export class Portal extends Component {
  render() {
    return (
      <div>
        <Portal1></Portal1>
        <Portal2></Portal2>
      </div>
    );
  }
}

export default Portal;
