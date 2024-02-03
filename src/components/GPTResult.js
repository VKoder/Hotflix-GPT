import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTResult = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames && !movieResults) {
   return <h1>Search Anything You Want</h1>
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
