import {
  makeAutoObservable,
  makeObservable,
  observable,
  computed,
  action,
  flow,
} from "mobx";

class testStore {
  // observable
  count = 10;

  constructor() {
    // 将参数对象中的属性设置为 observable state
    // 将参数对象中的方法设置为 action
    makeAutoObservable(this);
    // makeObservable(this, {
    //   count: observable,
    //   double: computed,
    //   increment: action,
    //   decrement: action,
    //   fetch: flow,
    // });
  }
  // action
  increment() {
    this.count += 1;
  }
  // action
  decrement() {
    this.count -= 1;
  }
  //computed
  get double() {
    return this.count * 2;
  }

  //flow
  *fetch() {
    const response = yield fetch(
      "https://jsonplaceholder.typicode.com/todos/100"
    );
    const jsonResult = yield response.json();
    console.log(jsonResult);
    this.count = jsonResult.id;
  }
}

export default new testStore();
