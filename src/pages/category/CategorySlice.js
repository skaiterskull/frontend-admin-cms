import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPending: false,
  categoryRes: {},
  categories: [],
};

const catSlice = createSlice({
  name: "catSlice",
  initialState,
  reducers: {
    reqPending: (state) => {
      state.isPending = true;
    },

    fetchCategoriesSuccess: (state, { payload = [] }) => {
      state.isPending = false;
      state.categories = payload.result;
    },

    addCatSuccess: (state, { payload }) => {
      state.isPending = false;
      state.categoryRes = payload;
    },

    reqFail: (state, { payload }) => {
      state.isPending = false;
      state.categoryRes = payload;
    },
  },
});

const { reducer, actions } = catSlice;
export const { reqPending, fetchCategoriesSuccess, addCatSuccess, reqFail } =
  actions;

export default reducer;
