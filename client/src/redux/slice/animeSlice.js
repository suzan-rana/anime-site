import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomQuotes } from "../../api/Anime";

const animeSlice = createSlice({
  name: "anime",
  initialState: {
    quotes: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getRandomQuotesThunk.fulfilled, (state, action) => {
      state.quotes = action?.payload;
    });
  },
});

export const getRandomQuotesThunk = createAsyncThunk(
  "anime/getrandomquotes",
  async () => {
    try {
      const { data } = await getRandomQuotes();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export default animeSlice.reducer;
