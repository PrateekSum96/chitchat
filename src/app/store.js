import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import userReducer from "../features/userSlice";
import postReducer from "../features/postSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    appUsers: userReducer,
    posts: postReducer,
  },
});

export default store;
