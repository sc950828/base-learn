import promiseMiddleware from "redux-promise";
import { createStore, applyMiddleware, compose } from "redux";

import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(promiseMiddleware))
);

export default store;
