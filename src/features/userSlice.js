import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getAllUsers = createAsyncThunk(
  "appUsers/getAllUsers",
  async () => {
    const response = await fetch("api/users", {
      method: "GET",
    });
    const result = await response.json();

    return result;
  }
);

export const getAUser = createAsyncThunk(
  "appUsers/getAUser",
  async (username) => {
    const response = await fetch(`/api/users/${username}`, {
      method: "GET",
    });
    const result = await response.json();

    return result;
  }
);

export const getAUserPost = createAsyncThunk(
  "appUsers/getAUserPost",
  async (username) => {
    const response = await fetch(`/api/posts/user/${username}`, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  }
);

const initialState = {
  allUsers: [],
  userInfo: null,
  userPosts: null,
  status: "idle", // "loading"||"error"||"succeeded"
  error: null,
};

const userSlice = createSlice({
  name: "appUsers",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.allUsers = action.payload.users;
      })
      .addCase(getAllUsers.rejected, (state) => {
        state.status = "error";
        state.error = "Failed to get all users.";
        toast.error(state.error);
      })
      .addCase(getAUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        console.log(action.payload);
        // state.userInfo = action.payload.users;
      })
      .addCase(getAUser.rejected, (state) => {
        state.status = "error";
        state.error = "Failed to get the user.";
        toast.error(state.error);
      })
      .addCase(getAUserPost.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAUserPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        console.log(action.payload);
        // state.userPosts = action.payload.users;
      })
      .addCase(getAUserPost.rejected, (state) => {
        state.status = "error";
        state.error = "Failed to get the user's post.";
        toast.error(state.error);
      });
  },
});

export default userSlice.reducer;
