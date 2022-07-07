import {
  ADD_CART,
  DEL_CART,
  SELECT_CART,
  SELECT_ALL_CART,
  SET_NUM,
} from "../types";

export const addCartAction = (payload) => {
  return {
    type: ADD_CART,
    payload,
  };
};

export const delCartAction = (payload) => {
  return {
    type: DEL_CART,
    payload,
  };
};

export const setCartNumAction = (payload) => {
  return {
    type: SET_NUM,
    payload,
  };
};

export const selectCartAction = (payload) => {
  return {
    type: SELECT_CART,
    payload,
  };
};
export const selectAllCartAction = (payload) => {
  return {
    type: SELECT_ALL_CART,
    payload,
  };
};
