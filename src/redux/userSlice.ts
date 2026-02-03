import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isAuthLoading: true, // 👈 AJOUT
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.isAuthLoading = false; // 👈 important
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.isAuthLoading = false;
      state.firstName = "";
      state.lastName = "";
      state.token = "";
      localStorage.removeItem("token");
    },
    authChecked: (state) => {
      state.isAuthLoading = false;
    },
  },
});

export const { login, logout, authChecked } = userSlice.actions;
export default userSlice.reducer;
