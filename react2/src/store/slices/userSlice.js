import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userThunk = createAsyncThunk(
  "user/thunk",
  async (payload, thunkAPI) => {
    console.log(payload);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${payload}`
    );
    const response = await res.json();
    thunkAPI.dispatch(ageIncremented(8));
    return response;
  }
);

const userSlice = createSlice({
  name: "user",

  initialState: {
    name: "randy",
    age: 24,
  },

  reducers: {
    nameIncrement: (state) => {
      state.name += "!";
    },
    nameDecrement: (state) => {
      state.name += state.name.slice(0, state.name.length - 1);
    },
    ageIncremented: (state, action) => {
      state.age += action.payload;
    },
    ageDecremented: (state, action) => {
      state.age -= action.payload;
    },
  },

  // createAsyncThunk创建成功后，return出去的值，会在extraReducers中接收，有三种状态：

  // pending: 'fetchCustomer/requestStatus/pending'，运行中；
  // fulfilled: 'fetchCustomer/requestStatus/fulfilled'，完成；
  // rejected: 'fetchCustomer/requestStatus/rejected'，拒绝；
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(userThunk.pending, (state, action) => {
        console.log(state, action);
      })
      .addCase(userThunk.fulfilled, (state, action) => {
        console.log(state, action);
      })
      .addCase(userThunk.rejected, (state, action) => {
        console.log(state, action);
      });
  },
});

// 相当于以前的actions
export const { nameIncrement, nameDecrement, ageIncremented, ageDecremented } =
  userSlice.actions;

// 相当于以前的reducers
export default userSlice.reducer;
