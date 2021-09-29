import {
  pendingResp,
  resSuccess,
  loginSuccess,
  resFail,
  emailVerificationSuccess,
} from "../admin-user/userSlice";
import {
  createNewUser,
  verifyNewUserEmail,
  loginAdmin,
} from "../../apis/userApi";

export const createUser = (userInfo) => async (dispatch) => {
  dispatch(pendingResp());

  const result = await createNewUser(userInfo);
  if (result.status === "Success") {
    return dispatch(resSuccess(result));
  }

  dispatch(resFail(result));
};

export const verifyUserEmail = (userInfo) => async (dispatch) => {
  dispatch(pendingResp());
  const result = await verifyNewUserEmail(userInfo);
  dispatch(emailVerificationSuccess(result));
};

export const adminLogin = (loginInfo) => async (dispatch) => {
  dispatch(pendingResp());
  const result = await loginAdmin(loginInfo);
  if (result.status === "Success") {
    return dispatch(loginSuccess(result.user));
  }
  dispatch(resFail(result));
};
