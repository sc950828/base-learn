import {
  userNameIncrementType,
  userNameDecrementType,
  userAgeIncrementType,
  userAgeDecrementType,
} from "../types";

export default function userReducer(
  state = { name: "randy", age: 24 },
  action
) {
  switch (action.type) {
    case userNameIncrementType:
      return { ...state, name: state.name + "!" };
    case userNameDecrementType:
      return { ...state, name: state.name.slice(0, state.name.length - 1) };
    case userAgeIncrementType:
      return { ...state, age: state.age + action.payload };
    case userAgeDecrementType:
      return { ...state, age: -action.payload };
    default:
      return state;
  }
}
