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

export const getCategories = () => async (dispatch) => {
  //call api
  dispatch(reqPending());
  const result = await fetchCategory();

  if (result?.status === "Success") {
    return dispatch(fetchCategoriesSuccess(result));
  }

  dispatch(reqFail());
};

export const addNewCat = (catObj) => async (dispatch) => {
  dispatch(reqPending());
  const result = await addCategory(catObj);

  if (result.status === "Success") {
    dispatch(addCatSuccess(result));
    return dispatch(getCategories());
  }
  dispatch(reqFail(result));
};

export const categoryDelete = (id) => async (dispatch) => {
  dispatch(reqPending());
  const result = await deleteCategory(id);

  if (result.status === "Success") {
    dispatch(deleteCatSuccess(result));
    return dispatch(getCategories());
  }
  dispatch(reqFail(result));
};

export const categoryUpdate = (catObj) => async (dispatch) => {
  dispatch(reqPending());
  const result = await updateCategory(catObj);

  if (result.status === "Success") {
    dispatch(updateCatSuccess(result));
    return dispatch(getCategories());
  }
  dispatch(reqFail(result));
};
