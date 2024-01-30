import { createSlice } from "@reduxjs/toolkit";

const configApp = createSlice({
  name: "configapp",
  initialState: { lang: "en" },
  reducers: {
    addLang: (state, action)=>{
        state.lang = action.payload
    }
  },
});

export default configApp.reducer;
export const {addLang} = configApp.actions;