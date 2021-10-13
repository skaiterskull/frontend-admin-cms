import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPending: false,
  productRes: {},
  productList: [],
  selectedProduct: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reqPending: (state) => {
      state.isPending = true;
    },

    getProduct: (state, { payload }) => {
      state.isPending = false;
      state.productList = payload;
    },

    getSingleProduct: (state, { payload = [] }) => {
      state.isPending = false;
      state.selectedProduct = payload;
    },

    deleteProductSlice: (state, { payload = {} }) => {
      state.isPending = false;
      state.productRes = payload;
    },

    addProductSlice: (state, { payload = {} }) => {
      state.isPending = false;
      state.productRes = payload;
    },

    reqFail: (state, { payload = {} }) => {
      state.isPending = false;
      state.productRes = payload;
    },
  },
});

const { reducer, actions } = productSlice;
export const {
  reqPending,
  getProduct,
  getSingleProduct,
  reqFail,
  deleteProductSlice,
  addProductSlice,
} = actions;
export default reducer;
