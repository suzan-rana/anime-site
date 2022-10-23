import { configureStore } from "@reduxjs/toolkit";
import animeSlice from "./slice/animeSlice";
import authReducer from "./slice/authSlice";
import postSlice from "./slice/postSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postSlice,
    anime: animeSlice,
  },
});
export default store;
