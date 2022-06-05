import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";
import todoReducer from "./todoReducer";

const redicers = combineReducers({
  counter: counterReducer,
  user: userReducer,
  todo: todoReducer,
});

export default redicers;
