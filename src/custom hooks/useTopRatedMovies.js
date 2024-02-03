// 

import { useEffect } from "react";
import { FETCH_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {  addTopRatedMovies } from "../store/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const TopRatedMovies = useSelector(store => store.movie.TopRatedMovies)

  const fetchMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated",
      FETCH_OPTIONS
    );

    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !TopRatedMovies && fetchMovie();
  }, []);
};
export default useTopRatedMovies;
