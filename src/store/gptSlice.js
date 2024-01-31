import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gptslice',
    initialState: {
        gptSearchView : false,
    },
    reducers: {
        addGptToggle : (state, action) =>{
            state.gptSearchView = !state.gptSearchView
        },
    }

})

export default gptSlice.reducer;
export const {addGptToggle} = gptSlice.actions;