import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey } from "vue";
import { User, ITest1 } from "./interfaces";
import test1 from "./modeuls/test1";

export default createStore<User>({
  state: {
    name: "root",
    age: 0,
    info: { address: "" },
  },
  getters: {
    getUserName(state) {
      return state.name;
    },
    getUserInfo(state) {
      return state.info;
    },
  },
  mutations: {},
  actions: {},
  modules: {
    test1: test1,
  },
});

// 定义模块
type Modules = {
  test1: ITest1;
};

// 使用联合类型
export const key: InjectionKey<Store<User & Modules>> = Symbol();

// 定义自己的 `useStore` 组合式函数
// 这样我们使用的时候就不需要再每次传递key了
export function useStore() {
  return baseUseStore(key);
}
