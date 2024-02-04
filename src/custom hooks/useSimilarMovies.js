import { useEffect } from "react";
import { FETCH_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {  addSimilarMovies } from "../store/moviesSlice";

const useSimilarMovies = (id) => {
  const dispatch = useDispatch();

    const similarMovies = useSelector(store => store.movie.similarMovies)

  const fetchMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+ id +"/similar?language=en-US",
      FETCH_OPTIONS
    );

    const json = await data.json();
    dispatch(addSimilarMovies(json?.results));
  };

  useEffect(() => {
    !similarMovies && fetchMovie();
  }, []);
};
export default useSimilarMovies;
