import { useEffect } from "react";
import { FETCH_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addnowPlayingMovies } from "../store/moviesSlice";

const useOnPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      FETCH_OPTIONS
    );

    const json = await data.json();
    dispatch(addnowPlayingMovies(json.results));
  };

  useEffect(() => {
    fetchMovie();
  }, []);
};
export default useOnPlayingMovies;
