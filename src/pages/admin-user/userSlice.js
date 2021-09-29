import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPending: false,
  userResp: {},
  emailVerificationResp: {},
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    pendingResp: (state) => {
      state.isPending = true;
    },

    resSuccess: (state, { payload }) => {
      state.isPending = false;
      state.userResp = payload;
    },

    emailVerificationSuccess: (state, { payload }) => {
      state.isPending = false;
      state.emailVerificationResp = payload;
    },

    loginSuccess: (state) => {
      state.isLoggedIn = true;
    },

    resFail: (state, { payload }) => {
      state.isPending = false;
      state.userResp = payload;
    },
  },
});

const { reducer, actions } = userSlice;

export const {
  pendingResp,
  resSuccess,
  loginSuccess,
  resFail,
  emailVerificationSuccess,
} = actions;
export default reducer;
