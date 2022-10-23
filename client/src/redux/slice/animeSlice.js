import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomQuotes } from "../../api/Anime";

const animeSlice = createSlice({
  name: "anime",
  initialState: {
    quotes: []
  },
  extraReducers: (builder) => {
    builder.addCase(getRandomQuotesThunk.fulfilled, (state, action) => {
        state.quotes = action?.payload
    });
  },
});

export const getRandomQuotesThunk = createAsyncThunk(
  "anime/getrandomquotes",
  async () => {
    const { quotes } = await getRandomQuotes()
    return quotes;
  }
);
export default animeSlice.reducer;