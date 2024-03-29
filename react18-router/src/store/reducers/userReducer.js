import { SET_USERINFO_TYPE, SET_USERMENUS_TYPE } from "../types";

export default function userReducer(
  state = { userinfo: null, menus: [] },
  action
) {
  switch (action.type) {
    case SET_USERINFO_TYPE:
      return { ...state, userinfo: action.payload };
    case SET_USERMENUS_TYPE:
      return { ...state, menus: action.payload };
    default:
      return state;
  }
}
