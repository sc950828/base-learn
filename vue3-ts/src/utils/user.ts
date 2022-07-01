import Request from "./request";

const request = new Request({});

export const getTodo = () => {
  return request.get("https://jsonplaceholder.typicode.com/todos/1");
};
