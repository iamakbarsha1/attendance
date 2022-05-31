import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "../redux/features/studentSlice";
import RoomReducer from "../redux/features/roomSlice";

export default configureStore({
  reducer: {
    student: StudentReducer,
    room: RoomReducer,
  },
});
