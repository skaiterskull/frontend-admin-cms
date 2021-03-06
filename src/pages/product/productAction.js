import {
  reqPending,
  getProduct,
  getSingleProduct,
  deleteProductSlice,
  addProductSlice,
  updateProductSuccess,
  reqFail,
} from "./productSlice";
import {
  fetchProduct,
  deleteProduct,
  addProduct,
  updateProduct,
} from "../../apis/productApi";
import { newAccessJWTApi } from "../../apis/tokenApi";
import { userLogoutAction } from "../admin-user/userAction";

export const getProductsAction = () => async (dispatch) => {
  dispatch(reqPending());

  const data = await fetchProduct();
  if (data?.message === "JWT expired") {
    const token = await newAccessJWTApi();
    if (token) {
      dispatch(getProductsAction());
    } else {
      dispatch(userLogoutAction());
    }
  }

  data?.status === "Success"
    ? dispatch(getProduct(data.result))
    : dispatch(reqFail(data.result));
};

export const getSingleProductAction = (slug) => async (dispatch) => {
  dispatch(reqPending());

  const data = await fetchProduct(slug);
  if (data?.message === "JWT expired") {
    const token = await newAccessJWTApi();
    if (token) {
      dispatch(getSingleProduct(slug));
    } else {
      dispatch(userLogoutAction());
    }
  }

  data?.status === "Success"
    ? dispatch(getSingleProduct(data.result))
    : dispatch(reqFail(data.result));
};

export const deleteProductsAction = (_id) => async (dispatch) => {
  dispatch(reqPending());

  const data = await deleteProduct(_id);
  if (data?.message === "JWT expired") {
    const token = await newAccessJWTApi();
    if (token) {
      dispatch(deleteProductsAction(_id));
    } else {
      dispatch(userLogoutAction());
    }
  }

  if (data?.status === "Success") {
    dispatch(deleteProductSlice(data));
    return dispatch(getProductsAction());
  }
  dispatch(reqFail(data));
};

export const addProductsAction = (productInfo) => async (dispatch) => {
  dispatch(reqPending());

  const data = await addProduct(productInfo);
  if (data?.message === "JWT expired") {
    const token = await newAccessJWTApi();
    if (token) {
      dispatch(addProductsAction(productInfo));
    } else {
      dispatch(userLogoutAction());
    }
  }

  if (data?.status === "Success") {
    console.log(data);
    return dispatch(addProductSlice(data));
  }
  dispatch(reqFail(data));
};

export const updateProductsAction = (slug, productInfo) => async (dispatch) => {
  dispatch(reqPending());

  const data = await updateProduct(productInfo);
  if (data?.message === "JWT expired") {
    const token = await newAccessJWTApi();
    if (token) {
      dispatch(updateProductsAction(slug, productInfo));
    } else {
      dispatch(userLogoutAction());
    }
  }

  if (data?.status === "Success") {
    dispatch(updateProductSuccess(data));
    return dispatch(getSingleProductAction(slug));
  }
  dispatch(reqFail(data));
};
