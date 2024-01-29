import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowtrailer:null,
  },
  reducers: {
    addnowPlayingMovies: (state, action) => {
      //add data of movies inside nowPlayingMovies
      state.nowPlayingMovies = action.payload;
    },
    addnowtrailer: (state, action) => {
        //add data of movies inside nowPlayingMovies
        state.nowtrailer = action.payload;
      },
  },
});

export default moviesSlice.reducer;
export const { addnowPlayingMovies, addnowtrailer } = moviesSlice.actions;
