import useOnPlayingMovies from "../custom hooks/useOnPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useOnPlayingMovies();
  return (
    <div className="bg-gray-600 h-screen">
      <Header />
      Browse
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};
export default Browse;
