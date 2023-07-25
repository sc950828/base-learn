import { SET_USERINFO_TYPE } from "../types";

export default function userReducer(state = { userinfo: null }, action) {
  switch (action.type) {
    case SET_USERINFO_TYPE:
      return { ...state, userinfo: action.payload };
    default:
      return state;
  }
}
