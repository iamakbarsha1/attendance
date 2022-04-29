import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
  isError: false,
  isSucces: false,
  isLoading: false,
  message: "",
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    getStudents: (state, action) => {
      state.value = action.payload;
    },
    setSingleStudent: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => initialState,
  },
});

export const { getStudents } = studentSlice.actions;

export default studentSlice.reducer;
