import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const handleSignUp = createAsyncThunk(
  "auth/handleSignUp",
  async ({ username, password, email, firstName, lastName }) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        email,
        firstName,
        lastName,
      }),
    });
    const result = await response.json();
    return result;
  }
);
export const handleLogin = createAsyncThunk(
  "auth/handleLogin",
  async ({ email, password }) => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const result = await response.json();
    return result;
  }
);
const initialState = {
  isLoggedIn: false,
  user: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.status = "idle";
      state.error = null;
      localStorage.removeItem("token");
      toast.success("Logout successful!");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(handleSignUp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(handleSignUp.fulfilled, (state, action) => {
        if (action.payload.errors) {
          state.status = "error";
          state.error = "User name already exists!";
          toast.error(state.error);
        } else {
          state.status = "succeeded";
          state.user = action.payload.createdUser;
          state.isLoggedIn = true;
          localStorage.setItem("token", action.payload.encodedToken);
          state.error = null;
          toast.success("Signup successful!");
        }
      })
      .addCase(handleSignUp.rejected, (state) => {
        state.status = "error";
        state.error = "Something went wrong. Try again!";
        toast.error(state.error);
      })
      .addCase(handleLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(handleLogin.fulfilled, (state, action) => {
        if (action.payload.errors) {
          state.status = "error";
          state.error = "User not found!";
          toast.error(state.error);
        } else {
          state.status = "succeeded";
          state.user = action.payload.foundUser;
          state.isLoggedIn = true;
          state.error = null;
          localStorage.setItem("token", action.payload.encodedToken);
          toast.success(`Welcome back ${state.user.firstName}!`);
        }
      })
      .addCase(handleLogin.rejected, (state) => {
        state.status = "error";
        state.error = "Something went wrong. Try again!";
        toast.error(state.error);
      });
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
