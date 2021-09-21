import { configureStore } from "@reduxjs/toolkit";
import adminUserReducer from "./pages/admin-user/userSlice";

const store = configureStore({
  reducer: {
    user: adminUserReducer,
  },
});

export default store;
