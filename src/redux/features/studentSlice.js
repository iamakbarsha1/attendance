import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  // isError: false,
  // isSucces: false,
  // isLoading: false,
  // message: "",
};

export const studentSlice = createSlice({
  name: "Student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.value.push(action.payload);
    },
    getStudents: (state, action) => {
      state.value = action.payload;
    },
    setStudent: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = [];
    },
  },
});

export const { addStudent, getStudents, setStudent, reset } =
  studentSlice.actions;

export default studentSlice.reducer;
