import {
  getTodoByIdType,
  fetchTodoByIdType,
  fetchTodoByIdType2,
} from "../types";

export const getTodoByIdAction = (payload) => {
  return {
    type: getTodoByIdType,
    payload,
  };
};

const getTodoById = async (payload) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${payload}`
  );
  const response = await res.json();
  return response;
};

// thunk
export const getTodoByIdThunkAction = (payload) => {
  return async (dispatch) => {
    const response = await getTodoById(payload);
    dispatch(getTodoByIdAction(response));
  };
};

// redux-promise
export const getTodoByIdPromiseAction = (payload) => {
  return {
    type: getTodoByIdType,
    payload: getTodoById(payload),
  };
};

// saga
export const fetchTodoByIdAction = (payload) => {
  return {
    type: fetchTodoByIdType,
    payload,
  };
};

export const fetchTodoByIdAction2 = (payload) => {
  return {
    type: fetchTodoByIdType2,
    payload,
  };
};
