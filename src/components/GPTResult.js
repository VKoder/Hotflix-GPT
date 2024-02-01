import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTResult = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames && !movieResults) {
    return console.log("jkjhj");
  }

  return (
   
      <div className="lg:px-8 md:px-8 sm:px-6 px-4 z-20">
        { movieNames?.map((movieName,index) => <MovieList key={movieName} title={movieName} movie={movieResults?.[index]?.results} />)
        
}
      </div>
  );
};
export default GPTResult;
