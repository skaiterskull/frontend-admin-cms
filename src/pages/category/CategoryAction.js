import {
  reqPending,
  fetchCategoriesSuccess,
  addCatSuccess,
  reqFail,
} from "./CategorySlice";
import { fetchCategory, addCategory } from "../../apis/categoryApi";

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
