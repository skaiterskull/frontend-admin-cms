import { configureStore } from "@reduxjs/toolkit";
import adminUserReducer from "./pages/admin-user/userSlice";
import categoryReducer from "./pages/category/CategorySlice";

const store = configureStore({
  reducer: {
    user: adminUserReducer,
    category: categoryReducer,
  },
});

export default store;
