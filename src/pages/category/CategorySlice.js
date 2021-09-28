import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPending: false,
  categoryRes: {},
  categories: [],
  selectedCat: {},
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

    updateCatSuccess: (state, { payload }) => {
      state.isPending = false;
      state.categoryRes = payload;
    },

    deleteCatSuccess: (state, { payload }) => {
      state.isPending = false;
      state.categoryRes = payload;
    },

    onCategorySelect: (state, { payload }) => {
      state.selectedCat = payload;
    },

    onDeSelectCategory: (state) => {
      state.selectedCat = {};
    },

    reqFail: (state, { payload }) => {
      state.isPending = false;
      state.categoryRes = payload;
    },
  },
});

const { reducer, actions } = catSlice;
export const {
  reqPending,
  fetchCategoriesSuccess,
  addCatSuccess,
  updateCatSuccess,
  deleteCatSuccess,
  onCategorySelect,
  onDeSelectCategory,
  reqFail,
} = actions;

export default reducer;
