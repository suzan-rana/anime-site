import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import postSlice from './slice/postSlice';
const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postSlice,

    }
})
export default store;