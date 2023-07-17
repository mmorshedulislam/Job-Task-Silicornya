import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { email: "", full_name: "", position: "" },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getLoginData: (state, { payload }) => {
      state.user.full_name = payload?.full_name;
      state.user.position = payload?.position;
    },
  },
});

export const { getLoginData } = authSlice.actions;

export default authSlice.reducer;
