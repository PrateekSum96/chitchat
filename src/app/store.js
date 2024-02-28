import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    appUsers: userReducer,
  },
});

export default store;
