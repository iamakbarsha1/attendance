import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "Student",
  initialState: {
    value: null,
  },
  reducers: {
    getStudents: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getStudents } = studentSlice.actions;

export default studentSlice.reducer;
