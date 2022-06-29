import { Module } from "vuex";
import { IRootState, ITest1State } from "../interfaces";

const Test1: Module<ITest1State, IRootState> = {
  state: {
    name: "test1",
    count: 0,
  },
  getters: {
    getTest1Name(state) {
      return state.name;
    },
    getAllName(state, rootState) {
      return state.name + rootState.age;
    },
  },
};

export default Test1;
