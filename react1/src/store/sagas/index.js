import { all } from "redux-saga/effects";
import saga1 from "./saga1";
import saga2 from "./saga2";

function* rootSaga() {
  // 同时并发多个
  yield all([...saga1, ...saga2]);
}

export default rootSaga;
