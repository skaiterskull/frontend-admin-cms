import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPending: false,
  paymentOptRes: {},
  paymentOptList: [],
};

const paymentOptionSlice = createSlice({
  name: "paymentOptionSlice",
  initialState,
  reducers: {
    resPending: (state) => {
      state.isPending = true;
    },

    getPayOpt: (state, { payload }) => {
      state.isPending = false;
      state.paymentOptList = payload;
    },

    addPayOptSuccess: (state, { payload }) => {
      state.isPending = false;
      state.paymentOptRes = payload;
    },
    deletePayOptSuccess: (state, { payload }) => {
      state.isPending = false;
      state.paymentOptRes = payload;
    },
    resFail: (state, { payload }) => {
      state.isPending = false;
      state.paymentOptRes = payload;
    },
  },
});

const { reducer, actions } = paymentOptionSlice;

export const {
  resPending,
  addPayOptSuccess,
  deletePayOptSuccess,
  resFail,
  getPayOpt,
} = actions;
export default reducer;
