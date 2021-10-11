import {
  pendingResp,
  resSuccess,
  loginSuccess,
  autoLoginSlice,
  logoutUserSuccessSlice,
  resFail,
  emailVerificationSuccess,
  autoLoginPendingSlice,
  getAdminProfile,
  updateAdminProfile,
  updateAdminPassword,
  requestOTPSuccess,
} from "../admin-user/userSlice";
import {
  createNewUser,
  verifyNewUserEmail,
  loginAdmin,
  fetchUserProfile,
  updateUserProfile,
  updateUserPassword,
  resetUserPassword,
} from "../../apis/userApi";
import {
  newAccessJWTApi,
  requestPasswordRequestOTP,
} from "../../apis/tokenApi";

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
    if (data) {
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

export const getUserProfile = () => async (dispatch) => {
  dispatch(pendingResp());
  const result = await fetchUserProfile();
  if (result?.message === "JWT expired") {
    const token = await newAccessJWTApi();
    if (token) {
      return dispatch(getUserProfile());
    } else {
      return dispatch(userLogoutAction());
    }
  }

  if (result?.status === "Success") {
    return dispatch(getAdminProfile(result.user));
  }

  dispatch(resFail(result));
};

export const updateUserProfileAction = (obj) => async (dispatch) => {
  dispatch(pendingResp());
  const result = await updateUserProfile(obj);
  if (result?.message === "JWT expired") {
    const token = await newAccessJWTApi();
    if (token) {
      return dispatch(updateUserProfileAction(obj));
    } else {
      return dispatch(userLogoutAction());
    }
  }

  if (result?.status === "Success") {
    dispatch(updateAdminProfile(result));
    return dispatch(getUserProfile());
  }

  dispatch(resFail(result));
};

export const updateUserPasswordAction = (obj) => async (dispatch) => {
  dispatch(pendingResp());
  const result = await updateUserPassword(obj);
  if (result?.message === "JWT expired") {
    const token = await newAccessJWTApi();
    if (token) {
      return dispatch(updateUserPasswordAction(obj));
    } else {
      return dispatch(userLogoutAction());
    }
  }

  if (result?.status === "Success") {
    return dispatch(updateAdminPassword(result));
  }

  dispatch(resFail(result));
};

export const requestOTPAction = (email) => async (dispatch) => {
  dispatch(pendingResp());

  const data = await requestPasswordRequestOTP({ email });
  data?.status === "Success"
    ? dispatch(requestOTPSuccess({ data, email }))
    : dispatch(resFail(data));
};

export const resetPasswordAction = (obj) => async (dispatch) => {
  dispatch(pendingResp());

  const data = await resetUserPassword(obj);
  data?.status === "Success"
    ? dispatch(updateAdminPassword(data))
    : dispatch(resFail(data));
};
