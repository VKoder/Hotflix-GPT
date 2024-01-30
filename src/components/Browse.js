import useOnPlayingMovies from "../custom hooks/useOnPlayingMovies";
import usePopularMovies from "../custom hooks/usePopularMovies";
import useTopRatedMovies from "../custom hooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useOnPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div className="bg-black text-white w-screen">
      <Header />
      <MainContainer />

      <SecondaryContainer />
    </div>
  );
};
export default Browse;
