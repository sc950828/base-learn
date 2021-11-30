import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 不同模块只有state通过模块区分访问，getters、mutations、actions会放到一起，同名的会被一起触发。getters不许同名
// 默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。

// 如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。
// 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。 模块名/方法名
export default new Vuex.Store({
  state: {
    name: "randy",
  },
  getters: {
    getterName: (state) => state.name,
  },
  mutations: {
    SET_NAME(state, payload) {
      state.name = payload;
    },
  },
  actions: {
    setName({ commit }, payload) {
      commit("SET_NAME", payload);
    },
    setOtherMutation({ commit }, payload) {
      // 可以提交其他模块的mutation
      // commit("people/SET_NAME", payload);
      commit("SET_NAME2", payload);
    },
    setOtherAction({ dispatch }, payload) {
      // 可以提交其他模块的action
      // dispatch("people/setName", payload);
      dispatch("setName", payload);
    },
  },
  modules: {
    user: {
      state: {
        name: "user下的randy",
      },
      getters: {
        // 当前模块的getters，由于没有使用命名空间所以拿到的是所有的getters
        getterUserName(state, getters, rootState, rootGetters) {
          // 模块state和全局rootState
          // 没有命名空间 模块getters和全局rootGetters事相同得
          console.log(state, getters, rootState, rootGetters);
          return state.name;
        },
      },
      mutations: {
        SET_NAME(state, payload) {
          state.name = payload;
        },
        SET_NAME2(state, payload) {
          state.name = payload;
        },
      },
      actions: {
        setName(context, payload) {
          // dispatch commit getters rootGetters state rootState
          // 不按模块区分后 getters rootGetters相同 state rootState分别代表模块和全局的state
          console.log(context);
          context.commit("SET_NAME", payload);
        },
      },
    },
    people: {
      namespaced: true,
      state: {
        name: "people下的randy",
      },
      getters: {
        // 当前模块的getters，启用了命名空间，拿到的是当前模块的getters
        getterPeopleName(state, getters, rootState, rootGetters) {
          // 模块state和全局rootState
          // 有了命名空间 模块getters和全局rootGetters
          console.log(state, getters, rootState, rootGetters);
          return state.name;
        },
      },
      mutations: {
        SET_NAME(state, payload) {
          state.name = payload;
        },
      },
      actions: {
        setName(context, payload) {
          // dispatch commit getters rootGetters state rootState
          // 按模块区分后 getters rootGetters state rootState分别代表全局和模块内部的state和getters
          console.log(context);
          context.commit("SET_NAME", payload);
        },
        submitOther({ commit }, payload) {
          // 按模块区分后 commit dispatch也被局部话了 只能提交本模块的action和mutation 如果需要提交全局的需要加第三个参数{root: true}
          commit("SET_NAME2", payload, { root: true });
        },
        submitOther2({ dispatch }, payload) {
          // 按模块区分后 commit dispatch也被局部话了 只能提交本模块的action和mutation 如果需要提交全局的需要加第三个参数{root: true}
          dispatch("setOtherAction", payload, { root: true });
        },
        // 若需要在带命名空间的模块注册全局 action，你可添加 root: true，并将这个 action 的定义放在函数 handler 中。
        someAction: {
          root: true,
          handler(namespacedContext, payload) {},
        },
      },
    },
  },
});
