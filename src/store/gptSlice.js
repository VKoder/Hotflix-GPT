import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gptslice',
    initialState: {
        gptSearchView : false,
        movieNames:null,
        movieResults:null
    },
    reducers: {
        addGptToggle : (state, action) =>{
            state.gptSearchView = !state.gptSearchView
        },
        addgptMovieReult : (state, action) =>{
            const {movieNames, movieResults} = action.payload
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        removegptMovieResult:(state, action)=>{
            state.movieNames = null;
            state.movieResults = null;
        }

    }

})

export default gptSlice.reducer;
export const {addGptToggle, addgptMovieReult, removegptMovieResult} = gptSlice.actions;