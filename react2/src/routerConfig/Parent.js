import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export class Parent extends Component {
  render() {
    return (
      <div>
        Parent
        <div>
          <Link to="child1">child1</Link>
          <Link to="child2">child2</Link>
        </div>
        <Outlet></Outlet>
      </div>
    );
  }
}

export default Parent;
