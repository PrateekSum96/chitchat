import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  const response = await fetch("/api/posts", {
    method: "GET",
  });
  const result = await response.json();
  return result;
});

const initialState = {
  posts: [],
  status: "idle", // "loading"||"error"||"succeeded"
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.posts = action.payload.posts;
      })
      .addCase(getAllPosts.rejected, (state) => {
        state.status = "error";
        state.error = "Failed to get all users.";
      });
  },
});

export default postSlice.reducer;
