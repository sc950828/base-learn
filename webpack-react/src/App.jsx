// import React from "react";
import "./App.css";
import logo from "./logo.png";

const App = () => {
  return (
    <div>
      <div className="title">hello world</div>
      <img src={logo} className="img" />
      <img src={require("./logo.png")} className="img" />
      <div className="logo"></div>
    </div>
  );
};

export default App;
