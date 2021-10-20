import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? process.env.ROOT_URL
    : "http://localhost:8000";
const paymentOptApi = rootUrl + "/api/v1/payment-option";

export const fetchPaymentOption = async () => {
  try {
    const { data } = await axios.get(paymentOptApi, {
      headers: { Authorization: window.localStorage.getItem("refreshJWT") },
    });
    return data;
  } catch (error) {
    console.log(error);
    return error.response?.data || { status: "error", message: error.message };
  }
};

export const newPaymentOption = async (frmDt) => {
  try {
    const { data } = await axios.post(paymentOptApi, frmDt, {
      headers: { Authorization: window.sessionStorage.getItem("accessJWT") },
    });
    return data;
  } catch (error) {
    console.log(error);
    return error.response?.data || { status: "error", message: error.message };
  }
};

export const deletePaymentOption = async (_id) => {
  try {
    const { data } = await axios.delete(paymentOptApi + "/" + _id, {
      headers: { Authorization: window.sessionStorage.getItem("accessJWT") },
    });
    return data;
  } catch (error) {
    console.log(error);
    return error.response?.data || { status: "error", message: error.message };
  }
};
