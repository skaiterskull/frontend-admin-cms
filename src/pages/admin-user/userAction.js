import { pendingResp, resSuccess, resFail } from "../admin-user/userSlice";
import { createNewUser } from "../../apis/userApi";

export const createUser = (userInfo) => async (dispatch) => {
  dispatch(pendingResp());

  const result = await createNewUser(userInfo);
  if (result.status === "success") {
    dispatch(resSuccess(result));
  }

  dispatch(resFail(result));
};
