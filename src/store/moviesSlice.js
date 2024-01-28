import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null
    },
    reducers: {
        addnowPlayingMovies:(state, action)=>{

            //add data of movies inside nowPlayingMovies
            state.nowPlayingMovies = action.payload;
        }
    }
})

export default moviesSlice.reducer
export const {addnowPlayingMovies} = moviesSlice.actions;