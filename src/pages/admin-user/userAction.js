import {
  pendingResp,
  resSuccess,
  loginSuccess,
  autoLoginSlice,
  logoutUserSuccessSlice,
  resFail,
  emailVerificationSuccess,
  autoLoginPendingSlice,
} from "../admin-user/userSlice";
import {
  createNewUser,
  verifyNewUserEmail,
  loginAdmin,
} from "../../apis/userApi";
import { newAccessJWTApi } from "../../apis/tokenApi";

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
  console.log(result);
  if (result.status === "Success") {
    window.sessionStorage.setItem("accessJWT", result?.tokens?.accessJWT);
    window.localStorage.setItem("refreshJWT", result?.tokens?.refreshJWT);
    return dispatch(loginSuccess(result.user));
  }
  dispatch(resFail(result));
};

export const autoLoginAction = () => async (dispatch) => {
  dispatch(autoLoginPendingSlice());

  const accessJWT = window.sessionStorage.getItem("accessJWT");
  const refreshJWT = window.localStorage.getItem("refreshJWT");

  if (accessJWT && refreshJWT) {
    return dispatch(autoLoginSlice());
  }

  if (!accessJWT && refreshJWT) {
    const data = await newAccessJWTApi();
    if (data?.accessJWT) {
      window.sessionStorage.setItem("accessJWT", data.accessJWT);
      return dispatch(autoLoginSlice());
    }
  }

  dispatch(userLogoutAction());
};

export const userLogoutAction = () => (dispatch) => {
  window.sessionStorage.removeItem("accessJWT");
  window.localStorage.removeItem("refreshJWT");
  dispatch(logoutUserSuccessSlice());
};
