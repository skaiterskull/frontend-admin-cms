import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:8000";
const tokenAPI = rootUrl + "/api/v1/token";
const otpAPI = tokenAPI + "/request-otp";

export const newAccessJWTApi = async () => {
  try {
    window.sessionStorage.removeItem("accessJWT");
    const { data } = await axios.get(tokenAPI, {
      headers: { Authorization: window.localStorage.getItem("refreshJWT") },
    });
    data && window.sessionStorage.setItem("accessJWT", data?.accessJWT);
    return window.sessionStorage.getItem("accessJWT");
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const requestPasswordRequestOTP = async (email) => {
  try {
    const { data } = await axios.post(otpAPI, email);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
