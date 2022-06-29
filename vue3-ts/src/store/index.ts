import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey } from "vue";
import { IRootState, ITest1State } from "./interfaces";
import test1 from "./modeuls/test1";

export default createStore<IRootState>({
  // export default createStore({
  state: {
    name: "root",
    age: 0,
    info: { address: "" },
  },
  getters: {
    getRootName(state) {
      return state.name;
    },
    getRootInfo(state) {
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
  test1: ITest1State;
};

// 使用联合类型
export const key: InjectionKey<Store<IRootState & Modules>> = Symbol();
// export const key: InjectionKey<Store<IRootState>> = Symbol();

// 定义自己的 `useStore` 组合式函数
// 这样我们使用的时候就不需要再每次传递key了
export function useStore() {
  return baseUseStore(key);
}
