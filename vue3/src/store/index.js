import { createStore } from "vuex";

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
  actions: {},
  modules: {},
});
