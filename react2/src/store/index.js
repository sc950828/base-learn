import { configureStore } from "@reduxjs/toolkit";
import counter1 from "./slices/counter1";
import counter2 from "./slices/counter2";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    counter1: counter1,
    counter2: counter2,
    user: userSlice,
  },
});

export default store;
