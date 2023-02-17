// 父组件
import React, { useState } from "react";
import Children3 from "../components/Children3";

export default function Parent1() {
  const [name, setName] = useState("hello world");
  const say = () => {
    console.log("hello world");
  };
  return (
    <div>
      <Children3 value={name} handleClick={say}></Children3>
    </div>
  );
}
