import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResult: null,
    movieNames: null,
  },

  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },

    addGptMovies: (state, action) => {
      const { movieNames, movieResult } = action.payload;
      state.movieNames = movieNames;
      state.movieResult = movieResult;
    },
  },
});

export const { toggleGptSearchView, addGptMovies } = gptSlice.actions;

export default gptSlice.reducer;
