import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./features/counterSlice";
import UserReducer from "./features/userSlice";

export default configureStore({
  reducer: {
    Counter: CounterReducer,
    User: UserReducer,
  },
});
