import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowtrailer:null,
    PopularMovies: null,
    TopRatedMovies: null,
    UpcomingMovies: null,
    movieInfo: null,
    cast: null,
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
      addPopularMovies: (state, action) => {
        //add data of movies inside nowPlayingMovies
        state.PopularMovies = action.payload;
      },
      addTopRatedMovies: (state, action) => {
        //add data of movies inside nowPlayingMovies
        state.TopRatedMovies = action.payload;
      },
      addUpcomingMovies: (state, action) => {
        //add data of movies inside nowPlayingMovies
        state.UpcomingMovies = action.payload;
      },
      addMovieInfo: (state, action) => {
        //add data of movies inside nowPlayingMovies
        state.movieInfo = action.payload;
      },
      addCast: (state, action) => {
        //add data of movies inside nowPlayingMovies
        state.cast = action.payload;
      },
  },
});

export default moviesSlice.reducer;
export const { addnowPlayingMovies, addnowtrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addMovieInfo, addCast } = moviesSlice.actions;
