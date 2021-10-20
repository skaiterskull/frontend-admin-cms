import { configureStore } from "@reduxjs/toolkit";
import adminUserReducer from "./pages/admin-user/userSlice";
import categoryReducer from "./pages/category/CategorySlice";
import productReducer from "./pages/product/productSlice";
import paymentReducer from "./pages/payment/paymentOptionSlice";

const store = configureStore({
  reducer: {
    user: adminUserReducer,
    category: categoryReducer,
    product: productReducer,
    payment: paymentReducer,
  },
});

export default store;
