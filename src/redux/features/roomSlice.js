import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const roomSlice = createSlice({
  name: "Room",
  initialState,
  reducers: {
    addRoom: (state, action) => {
      state.value.push(action.payload);
    },
    getRoom: (state, action) => {
      state.value = action.payload;
    },
    setRoom: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = [];
    },
  },
});

export const { addRoom, getRoom, setRoom, reset } = roomSlice.actions;

export default roomSlice.reducer;
