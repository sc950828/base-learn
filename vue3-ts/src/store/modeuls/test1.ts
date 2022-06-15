import { Module, Store } from "vuex";
import { InjectionKey } from "vue";
import { User, ITest1 } from "../interfaces";

const Test1: Module<ITest1, User> = {
  state: {
    name: "test1",
    count: 0,
  },
  getters: {
    getTest1Name(state) {
      return state.name;
    },
    getAllName(state, getters, rootState, rootGetters) {
      return state.name + rootState.age;
    },
  },
};

export const key: InjectionKey<Store<ITest1>> = Symbol();

export default Test1;
