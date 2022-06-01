import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const tokenSlice = createSlice({
  name: "Token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
    },
    clearToken: (state) => {
      state.value = null;
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;

export default tokenSlice.reducer;
