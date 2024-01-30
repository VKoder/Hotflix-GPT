import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import configReducer from "./configApp"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    configApp: configReducer,
  },
});

export default appStore;
