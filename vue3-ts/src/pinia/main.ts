import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      name: "randy man",
      age: 24,
    };
  },
  getters: {
    getterName(state) {
      return state.name.toUpperCase() + "-----" + state.age;
    },
    // 这种方式也可以，不过需要自己手动指定返回值类型
    getterAge(): number {
      return this.age;
    },
  },
  actions: {
    // 直接使用this修改state
    changeName(payload: string) {
      this.name = payload;
      return "success";
    },

    // 异步action
    async fetchData(payload: number) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${payload}`
      );
      const res = response.json();

      // 调用其他action
      // this.changeName("xxx");

      return res;
    },
  },
});
