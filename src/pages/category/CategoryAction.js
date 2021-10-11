import {
  reqPending,
  fetchCategoriesSuccess,
  addCatSuccess,
  updateCatSuccess,
  deleteCatSuccess,
  reqFail,
} from "./CategorySlice";
import {
  fetchCategory,
  addCategory,
  deleteCategory,
  updateCategory,
} from "../../apis/categoryApi";
import { newAccessJWTApi } from "../../apis/tokenApi";
import { userLogoutAction } from "../admin-user/userAction";

export const getCategories = () => async (dispatch) => {
  //call api
  dispatch(reqPending());
  const result = await fetchCategory();
  if (result?.message === "JWT expired") {
    const token = await newAccessJWTApi();
    if (token) {
      return dispatch(getCategories());
    } else {
      return dispatch(userLogoutAction());
    }
  }

  if (result?.status === "Success") {
    return dispatch(fetchCategoriesSuccess(result));
  }

  dispatch(reqFail(result));
};

export const addNewCat = (catObj) => async (dispatch) => {
  dispatch(reqPending());
  const result = await addCategory(catObj);

  if (result?.message === "JWT expired") {
    const token = await newAccessJWTApi();
    if (token) {
      dispatch(addNewCat(catObj));
    } else {
      dispatch(userLogoutAction());
    }
  }

  if (result.status === "Success") {
    dispatch(addCatSuccess(result));
    return dispatch(getCategories());
  }
  dispatch(reqFail(result));
};

export const categoryDelete = (id) => async (dispatch) => {
  dispatch(reqPending());
  const result = await deleteCategory(id);
  if (result?.message === "JWT expired") {
    const token = await newAccessJWTApi();
    if (token) {
      dispatch(categoryDelete(id));
    } else {
      dispatch(userLogoutAction());
    }
  }

  if (result.status === "Success") {
    dispatch(deleteCatSuccess(result));
    return dispatch(getCategories());
  }
  dispatch(reqFail(result));
};

export const categoryUpdate = (catObj) => async (dispatch) => {
  dispatch(reqPending());
  const result = await updateCategory(catObj);
  if (result?.message === "JWT expired") {
    const token = await newAccessJWTApi();
    if (token) {
      dispatch(categoryUpdate(catObj));
    } else {
      dispatch(userLogoutAction());
    }
  }

  if (result.status === "Success") {
    dispatch(updateCatSuccess(result));
    return dispatch(getCategories());
  }
  dispatch(reqFail(result));
};
