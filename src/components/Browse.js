import useOnPlayingMovies from "../custom hooks/useOnPlayingMovies";
import Header from "./Header";

const Browse = () => {
  useOnPlayingMovies();
  return (
    <div className="bg-gray-600 h-screen">
      <Header />
      Browse
    </div>
  );
};
export default Browse;
