import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPosts, likePost, disLikePost } from "../../api";
import { current } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  // reducers: {
  //   like: (state, action) => {
  //     const id = action.payload.id;
  //     const post = state.posts.find((item) => item._id === id);
  //     console.log('id and post', id, post)
  //     post.likeStatus = true;
  //   },
  //   dislike: (state, action) => {
  //     console.log(action.payload.id)
  //     const id = action.payload.id;
  //     const post = state.posts.find((item) => item._id === id);
  //     console.log('id and post', id, post)
  //     post.likeStatus = false;
  //   },
  // },

  extraReducers: (builder) => {
    builder.addCase(fetchPostsThunk.fulfilled, (state, action) => {
      state.posts = action?.payload;
      
    });
    // .addCase(likePostThunk.fulfilled, (state, action) => {
    //   console.log("HI", action.payload);

    //   const currentState = current(state.posts).map((post) => {
    //     if (post._id === action.payload) {
    //       return {
    //         ...post,
    //         likeStatus: true,
    //       };
    //     } else {
    //       return post;
    //     }
    //   });
    //   return (state =   {
    //     currentState
    //   });
    // })
    // .addCase(disLikePostThunk.fulfilled, (state, action) => {
    //   const currentState = current(state.posts).map((post) => {
    //     if (post._id === action.payload) {
    //       return {
    //         ...post,
    //         likeStatus: false,
    //       };
    //     } else {
    //       return post;
    //     }
    //   });
    //   return (state =   {
    //     currentState
    //   });
    // });
  },
});
export default postSlice.reducer;
// export const { like, dislike } = postSlice.actions;

export const fetchPostsThunk = createAsyncThunk("post/fetchposts", async () => {
  const { data } = await fetchPosts();
  return data;
});

// export const likePostThunk = createAsyncThunk(
//   "posts/likepostthunk",
//   async (id) => {
//     try {
//       await likePost(id);
//       console.log(id);
//     } catch (error) {
//       console.log("AT dislike,", error);
//     }
//     return {
//       id,
//     };
//   }
// );
// export const disLikePostThunk = createAsyncThunk(
//   "posts/dislikepostthunk",
//   async (id) => {
//     try {
//       await disLikePost(id);
//       console.log(id);
//     } catch (error) {
//       console.log("AT dislike,", error);
//     }
//     return {
//       id,
//     };
//   }
// );
