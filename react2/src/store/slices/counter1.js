import { createAction, createReducer } from "@reduxjs/toolkit";

// 创建action
const increment = createAction("counter/increment");
const decrement = createAction("counter/decrement");
const add1 = createAction("counter/add1");

const initialState = { value: 0 };

// const counterReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state, action) => {
//       state.value++;
//     })
//     .addCase(decrement, (state, action) => {
//       state.value--;
//     })
//     .addCase(add1, (state, action) => {
//       state.value += action.payload;
//     });
// });

// 选项式写法
const counterReducer = createReducer(initialState, {
  [increment]: (state, action) => {
    state.value++;
  },
  [decrement]: (state, action) => {
    state.value--;
  },
  // 这种写法也可以
  [add1.type]: (state, action) => {
    state.value += action.payload;
  },
});

export { increment, decrement, add1 };

export default counterReducer;
