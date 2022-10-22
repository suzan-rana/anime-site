import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPosts } from "../../api";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPostsThunk.fulfilled, (state, action) => {
      state.posts = action?.payload;
    });
  },
});
export default postSlice.reducer;

export const fetchPostsThunk = createAsyncThunk("post/fetchposts", async () => {
  const { data } = await fetchPosts();
  return data;
});
