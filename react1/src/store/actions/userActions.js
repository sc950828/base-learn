import {
  userNameIncrementType,
  userNameDecrementType,
  userAgeIncrementType,
  userAgeDecrementType,
} from "../types";

export const userNameIncrementAction = () => {
  return {
    type: userNameIncrementType,
  };
};

export const userNameDecrementAction = () => {
  return {
    type: userNameDecrementType,
  };
};

export const userAgeIncrementAction = (payload) => {
  return {
    type: userAgeIncrementType,
    payload,
  };
};

export const userAgeDecrementAction = (payload) => {
  return {
    type: userAgeDecrementType,
    payload,
  };
};

export const userThunk = (payload) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const result = await response.json();
    console.log(result);
    dispatch(userAgeIncrementAction(5));
    return result;
  };
};
