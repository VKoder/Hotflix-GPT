import { useEffect } from "react";
import { FETCH_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store/moviesSlice";
import { json } from "react-router-dom";
import ShimmerUI from "../components/ShimmerUI";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular",
      FETCH_OPTIONS
    );

    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    fetchMovie();
  }, []);

};
export default usePopularMovies;
