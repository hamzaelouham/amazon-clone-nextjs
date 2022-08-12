import { createSlice } from "@reduxjs/toolkit";

let user = null;

const initialState = { loggedIn: user === null ? false : true, user };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {},
    logout: (state, action) => {},
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
