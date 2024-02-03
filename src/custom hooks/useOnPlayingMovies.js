import { useEffect } from "react";
import { FETCH_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addnowPlayingMovies } from "../store/moviesSlice";

const useOnPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(store => store.movie.nowPlayingMovies)

  const fetchMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      FETCH_OPTIONS
    );

    const json = await data.json();
    dispatch(addnowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && fetchMovie();
  }, []);
};
export default useOnPlayingMovies;
