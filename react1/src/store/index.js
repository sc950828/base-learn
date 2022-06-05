import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";
import reducers from "./reducers";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   redicers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk, promiseMiddleware, sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
