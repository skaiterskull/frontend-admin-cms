import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPending: false,
  userResp: {},
  emailVerificationResp: {},
  isLoggedIn: false,
  user: {},
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

    loginSuccess: (state, { payload }) => {
      state.isPending = false;
      state.userResp = {};
      state.isLoggedIn = true;
      state.user = payload;
    },

    autoLoginSlice: (state) => {
      state.isLoggedIn = true;
    },

    logoutUserSuccessSlice: (state) => {
      state.isLoggedIn = false;
      state.user = {};
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
  autoLoginSlice,
  logoutUserSuccessSlice,
  resFail,
  emailVerificationSuccess,
} = actions;
export default reducer;
