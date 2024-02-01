import { useEffect } from "react";
import { FETCH_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {  addMovieInfo } from "../store/moviesSlice";

const useMovieInfo = (id) => {
  const dispatch = useDispatch();

  const fetchMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+ id +"?language=en-US",
      FETCH_OPTIONS
    );

    const json = await data.json();
    dispatch(addMovieInfo(json));
  };

  useEffect(() => {
    fetchMovie();
  }, []);
};
export default useMovieInfo;
