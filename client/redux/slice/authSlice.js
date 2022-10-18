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
      state.userProfile = action.payload?.responseToUser;
      state.token = action.payload?.token;
    });
  },
});

export default authSlice.reducer;

export const registerUserThunk = createAsyncThunk(
  "auth/registeruser",
  async (formData) => {
    try{
      const { data, status} = await registerUser(formData);
      console.log('authSlice and data is: ',)
      console.log(status)
      return data; 
    } catch( error ) {
      console.log(error.response.data)
    }
    
  }
);
