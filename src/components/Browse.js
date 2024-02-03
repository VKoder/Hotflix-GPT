import { useDispatch, useSelector } from "react-redux";
import useOnPlayingMovies from "../custom hooks/useOnPlayingMovies";
import usePopularMovies from "../custom hooks/usePopularMovies";
import useTopRatedMovies from "../custom hooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearchPage from "./GPTSearchPage";
import { removegptMovieResult } from "../store/gptSlice";

const Browse = () => {
  useOnPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  const gptview = useSelector((store) => store.gpt.gptSearchView);
  const dispatch = useDispatch();
  if (!gptview) {
    dispatch(removegptMovieResult());
  }

  return (
    <div className="text-white w-screen">
      <Header />
      {gptview ? (
        <GPTSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
