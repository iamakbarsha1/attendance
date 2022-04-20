import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: {
    value: {
      // email: "",
      // password: "",
      value: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    deleteUser: (state, action) => {
      state.value = null;
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
