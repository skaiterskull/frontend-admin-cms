import {
  pendingResp,
  resSuccess,
  loginSuccess,
  resFail,
  emailVerificationSuccess,
} from "../admin-user/userSlice";
import { createNewUser, verifyNewUserEmail } from "../../apis/userApi";

export const createUser = (userInfo) => async (dispatch) => {
  dispatch(pendingResp());

  const result = await createNewUser(userInfo);
  if (result.status === "success") {
    dispatch(resSuccess(result));
  }

  dispatch(resFail(result));
};

export const verifyUserEmail = (userInfo) => async (dispatch) => {
  dispatch(pendingResp());
  const result = await verifyNewUserEmail(userInfo);

  dispatch(emailVerificationSuccess(result));
};

export const adminLogin = () => (dispatch) => {
  dispatch(loginSuccess());
};
