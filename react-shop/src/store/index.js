import { createStore } from "redux";
import goods from "./reducers/goods";

const store = createStore(goods);

export default store;
