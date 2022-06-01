import { configureStore } from "@reduxjs/toolkit";

import TokenReducer from "../redux/features/tokenSlice";
import StudentReducer from "../redux/features/studentSlice";
import RoomReducer from "../redux/features/roomSlice";

export default configureStore({
  reducer: {
    Token: TokenReducer,
    Student: StudentReducer,
    Room: RoomReducer,
  },
});
