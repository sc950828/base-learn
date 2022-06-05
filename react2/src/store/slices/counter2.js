import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0,
  },

  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
    add: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incremented, decremented, add } = counterSlice.actions;

export default counterSlice.reducer;
