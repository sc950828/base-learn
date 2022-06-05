import { counterIncrementType, counterDecrementType } from "../types";

export default function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case counterIncrementType:
      return { value: state.value + 1 };
    case counterDecrementType:
      return { value: state.value - 1 };
    default:
      return state;
  }
}
