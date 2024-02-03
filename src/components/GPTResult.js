import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import search from "../Image/search.svg";

const GPTResult = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames && !movieResults) {
    return (
      <div className="h-1/12 xl:pt-2 md:pt-8 sm:pt-16 pt-20 w-12/12 flex gap-4 justify-center flex-col items-center">
        <img
          className="xl:w-80 md:w-72 sm:w-64 w-52 lg:w-80"
          src={search}
          alt="Search Img"
        ></img>
        <h1 className="xl:text-2xl lg:text-2xl sm:text-lg text-lg md:text-xl font-semibold">
          No Search Results..!
        </h1>
      </div>
    );
  }

  return (
    <div className="xl:px-16 md:px-8 sm:px-4 px-1.5 lg:px-12">
      {movieNames?.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movie={movieResults?.[index]?.results}
        />
      ))}
    </div>
  );
};
export default GPTResult;
