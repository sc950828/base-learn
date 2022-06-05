import { call, takeEvery, takeLatest, put, select } from "redux-saga/effects";
import { getTodoByIdType, fetchTodoByIdType } from "../types";

const getTodoById = async (payload) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${payload}`
  );
  const response = await res.json();
  return response;
};

// action会自动接收
function* fetchTodo(action) {
  console.log(action);
  try {
    // 调用接口方法
    const todo = yield call(getTodoById, action.payload);
    console.log("todo", todo);

    // 获取state
    let item1 = yield select((state) => state.todo.item);
    console.log(item1);

    // 提交 action
    yield put({ type: getTodoByIdType, payload: todo });

    // 获取state
    let item2 = yield select((state) => state.todo.item);
    console.log(item2);
  } catch (e) {
    // 请求错误置空处理
    yield put({ type: getTodoByIdType, payload: {} });
  }
}

function* listenGetTodo() {
  yield takeEvery(fetchTodoByIdType, fetchTodo); // 始终监听
  // yield takeLatest(fetchTodoByIdType, fetchuserr); // 监听最新的一次
}

// 使用数组导出
const saga1 = [listenGetTodo()];

export default saga1;
