import React, { useRef } from "react";
import Home from "./Home";

function Test3() {
  const ref = useRef();
  const ref2 = useRef();

  const handleClick = () => {
    console.log(ref);
    console.log(ref.current);
    console.log(ref.current.innerText);
  };

  const handleClick2 = () => {
    console.log(ref2);
    console.log(ref2.current);
    ref2.current.say();
  };

  return (
    <div>
      <div ref={ref}>hello world</div>
      <Home ref={ref2}></Home>
      <button onClick={handleClick}>click</button>
      <button onClick={handleClick2}>click2</button>
    </div>
  );
}

export default Test3;
