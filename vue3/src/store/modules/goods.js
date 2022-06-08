export default {
  // namespaced 的模块  getters mutations actions都会带上模块名
  namespaced: true,

  state: {
    name: "good",
  },

  getters: {
    getterGoodsName(state, getters, rootState, rootGetters) {
      console.log("goods getters: ", state, getters, rootState, rootGetters);
      return state.name;
    },
  },

  mutations: {
    setGoodsNameMutation(state, payload) {
      state.name = payload;
    },
  },

  actions: {
    // 只能提交自身的mutation和action
    setGoodsNameAction({ dispatch, commit, getters, rootGetters }, payload) {
      commit("setGoodsNameMutation", payload);
    },

    // namespaced 不能提交其他模块的mutation和action
    // 如果想提交也可以，添加第三个参数root: true
    setUserMutation(
      { dispatch, commit, state, rootState, getters, rootGetters },
      payload
    ) {
      console.log("goods actions: ", state, rootState, getters, rootGetters);
      // commit("setUserNameMutation", payload);
      commit("setUserNameMutation", payload, { root: true });
    },

    setUserAction(
      { dispatch, commit, state, rootState, getters, rootGetters },
      payload
    ) {
      console.log("goods actions: ", state, rootState, getters, rootGetters);
      // dispatch("setUserNameAction", payload);
      dispatch("setUserNameAction", payload, { root: true });
    },

    // 注册非命名空间的action
    // root: true,
    setGlobalGoodsAction: {
      root: true,
      handler: ({ commit }) => {
        commit("setGoodsNameMutation", "我是全局action，提交我不用带命名空间");
      },
    },
  },
};
