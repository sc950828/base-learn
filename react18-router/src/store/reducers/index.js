import { combineReducers } from "redux";
import userReducer from "./userReducer";

const redicers = combineReducers({
  user: userReducer,
});

export default redicers;
