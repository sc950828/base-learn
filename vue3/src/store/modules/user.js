export default {
  state: {
    name: "user",
  },

  // 模块化
  // state会按模块分
  // rootState 是对象
  // getters 和 rootGetters 是所有的 getters，并且一样

  getters: {
    getterUserName(state, getters, rootState, rootGetters) {
      console.log("user getters: ", state, getters, rootState, rootGetters);
      return state.name;
    },
  },

  mutations: {
    setUserNameMutation(state, payload) {
      state.name = payload;
    },
  },

  actions: {
    setUserNameAction(
      { dispatch, commit, state, rootState, getters, rootGetters },
      payload
    ) {
      console.log("user actions: ", state, rootState, getters, rootGetters);
      commit("setUserNameMutation", payload);
    },

    // 非namespace 可以提交其他模块（namespaced的也可以）的mutation和action
    setGoodsMutation(
      { dispatch, commit, state, rootState, getters, rootGetters },
      payload
    ) {
      console.log("user actions: ", state, rootState, getters, rootGetters);
      // commit("setGoodsNameMutation", payload);
      commit("goods/setGoodsNameMutation", payload);
    },

    setGoodsAction(
      { dispatch, commit, state, rootState, getters, rootGetters },
      payload
    ) {
      console.log("user actions: ", state, rootState, getters, rootGetters);
      // dispatch("setGoodsNameAction", payload);
      dispatch("goods/setGoodsNameAction", payload);
    },
  },
};
