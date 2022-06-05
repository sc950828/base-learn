import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  userNameIncrementAction,
  userNameDecrementAction,
  userAgeIncrementAction,
  userAgeDecrementAction,
} from "../store/actions/userActions";
import {
  counterIncrementAction,
  counterDecrementAction,
} from "../store/actions/counterActions";

function FuncStore() {
  const counter = useSelector((state) => state.counter.value);
  const age = useSelector((state) => state.user.age);
  const dispatch = useDispatch();

  const userAgeIncremented = () => {
    dispatch(userAgeIncrementAction(5));
  };

  return (
    <div>
      <div>counter: {counter}</div>
      <div>age: {age}</div>
      <button onClick={userAgeIncremented}>userAgeIncremented</button>
    </div>
  );
}

export default FuncStore;
