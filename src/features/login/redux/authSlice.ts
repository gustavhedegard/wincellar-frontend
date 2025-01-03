import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "./types";
import { RootState } from "../../../app/store";

const initialState: AuthState = {
  user: {
    username: null,
    email: null,
    accessToken: null,
    refreshToken: null,
  },
};

const userLocalStorage = localStorage.getItem("user");
if (userLocalStorage != null)
  initialState.user = JSON.parse(localStorage.getItem("user") || "{}");

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },
    resetUser: (state) => {
      state.user = {
        username: null,
        email: null,
        accessToken: null,
        refreshToken: null,
      };
    },
  },
});

export const { setUser, resetUser } = authSlice.actions;
export const userSelector = (state: RootState): AuthState => state.authState;
export default authSlice.reducer;
