import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser } from "../../api";

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
    builder.addCase(registerUserThunk.fulfilled, (state, action) => {
      state.userProfile = action.payload.newUser;
      state.token = action.payload.token;
    });
  },
});

export default authSlice.reducer;

export const registerUserThunk = createAsyncThunk(
  "auth/registeruser",
  async (formData) => {
    const { data } = await registerUser(formData);
    return data; 
  }
);
