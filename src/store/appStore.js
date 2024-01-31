import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import configReducer from "./configApp"
import gptReducer from  "./gptSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    configApp: configReducer,
    gpt: gptReducer,
  },
});

export default appStore;
