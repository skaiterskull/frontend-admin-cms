import {
  fetchPaymentOption,
  newPaymentOption,
  deletePaymentOption,
} from "../../apis/paymentOptionApi";
import {
  resPending,
  addPayOptSuccess,
  deletePayOptSuccess,
  resFail,
  getPayOpt,
} from "./paymentOptionSlice";
import { newAccessJWTApi } from "../../apis/tokenApi";
import { userLogoutAction } from "../admin-user/userAction";

export const getPaymentOption = () => async (dispatch) => {
  dispatch(resPending());

  const data = await fetchPaymentOption();
  if (data?.message === "JWT expired") {
    const token = await newAccessJWTApi();
    if (token) {
      dispatch(getPaymentOption());
    } else {
      dispatch(userLogoutAction());
    }
  }

  data?.status === "Success"
    ? dispatch(getPayOpt(data.result))
    : dispatch(resFail(data.result));
};
