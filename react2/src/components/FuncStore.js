import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, add1 } from "../store/slices/counter1";
import { add } from "../store/slices/counter2";

function FuncStore() {
  const counter1 = useSelector((state) => state.counter1.value);
  const counter2 = useSelector((state) => state.counter2.value);
  const dispatch = useDispatch();

  const counter1Increment = () => {
    dispatch(increment());
  };

  const counter2Add = () => {
    dispatch(add(10));
  };

  return (
    <div>
      <div>counter1: {counter1}</div>
      <div>counter2: {counter2}</div>
      <button onClick={counter1Increment}>counter1Increment</button>
      <button onClick={counter2Add}>counter2Add</button>
    </div>
  );
}

export default FuncStore;
