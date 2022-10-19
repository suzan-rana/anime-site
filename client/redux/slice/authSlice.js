import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "../../api";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userProfile: {
      name: "",
      email: "",
    },
    token: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.userProfile = action.payload?.responseToUser;
        state.token = action.payload?.token;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.userProfile = action.payload?.responseToUser;
        state.token = action.payload?.token;
      });
  },
});

export default authSlice.reducer;

export const registerUserThunk = createAsyncThunk(
  "auth/registeruser",
  async (formData) => {
    try {
      const { data, status } = await registerUser(formData);
      console.log("authSlice and data is: ");
      console.log(status);

      return data;
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  "auth/loginuser",
  async (formData) => {
    try {
      const { data, status } = await loginUser(formData);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
