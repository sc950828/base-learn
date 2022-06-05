import { createStore } from "vuex";
import goods from "./modules/goods";
import user from "./modules/user";

export default createStore({
  state: {
    name: "randy",
  },
  getters: {
    getName: (state) => state.name,
  },
  mutations: {
    changeName(state, payload) {
      state.name = payload;
    },
  },
  actions: {
    // 只要返回东西，就会被promise包裹
    async getCommentAction() {
      // return 1;
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      // 所以返回的东西 就不需要使用promise包裹
      return response.json();
    },
  },
  modules: {
    goods,
    user,
  },
});
