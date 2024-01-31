import { useSelector } from "react-redux";
import useOnPlayingMovies from "../custom hooks/useOnPlayingMovies";
import usePopularMovies from "../custom hooks/usePopularMovies";
import useTopRatedMovies from "../custom hooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearchPage from "./GPTSearchPage";

const Browse = () => {
  useOnPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  const gptview = useSelector(store => store.gpt.gptSearchView)

  return (
    <div className="bg-black text-white w-screen">
      <Header />
      {gptview ? <GPTSearchPage/> :
      <><MainContainer />
      <SecondaryContainer /></>
      }
    </div>
  );
};
export default Browse;
