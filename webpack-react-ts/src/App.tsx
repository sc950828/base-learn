import React from "react";
import "./App.css";
import logo from "./logo.png";
import {say} from './help';

const App = () => {
  type IUser = {name: string; age: number}
  const user:IUser = {name: 'randy', age: 24}
  return (
    <div>
      <div className="title">hello world ts</div>
      <img src={logo} className="img" />
      <img src={require("./logo.png")} className="img" />
      <div className="logo"></div>
      <div>{user.name} + {user.age}</div>
      <button onClick={say}>say</button>
    </div>
  );
};

export default App;
