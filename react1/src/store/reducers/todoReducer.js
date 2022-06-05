import { getTodoByIdType } from "../types";

export default function counterReducer(state = { item: {} }, action) {
  console.log(action);
  switch (action.type) {
    case getTodoByIdType:
      return { item: action.payload };
    default:
      return state;
  }
}
