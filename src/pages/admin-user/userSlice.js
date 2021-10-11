import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPending: false,
  isAutoLoginPending: false,
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

    autoLoginPendingSlice: (state) => {
      state.isAutoLoginPending = true;
    },

    autoLoginSlice: (state) => {
      state.isLoggedIn = true;
      state.isAutoLoginPending = false;
    },

    logoutUserSuccessSlice: (state) => {
      state.isLoggedIn = false;
      state.isAutoLoginPending = false;
      state.user = {};
    },

    getAdminProfile: (state, { payload = {} }) => {
      state.isPending = false;
      state.user = payload;
    },

    updateAdminProfile: (state, { payload = {} }) => {
      state.isPending = false;
      state.userResp = payload;
    },

    updateAdminPassword: (state, { payload = {} }) => {
      state.isPending = false;
      state.userResp = payload;
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
  pageLoadingSuccess,
  logoutUserSuccessSlice,
  resFail,
  emailVerificationSuccess,
  autoLoginPendingSlice,
  getAdminProfile,
  updateAdminProfile,
  updateAdminPassword,
} = actions;
export default reducer;
