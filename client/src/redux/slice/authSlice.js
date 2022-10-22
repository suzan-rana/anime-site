import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "../../api";
import { useNavigate } from "react-router-dom";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userProfile: {
      name: "",
      email: "",
    },
    token: "",
  },
  reducers: {
    logout: (state) => {
      localStorage.clear();
      state = null;
    },
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

      localStorage.setItem("user", JSON.stringify(data));
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
      const { data } = await loginUser(formData);

      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const { logout } = authSlice.actions;
