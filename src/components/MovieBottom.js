import { useSelector } from "react-redux";
import useSimilarMovies from "../custom hooks/useSimilarMovies";
import MovieList from "./MovieList"

const MovieBottom = ({id}) => {
    useSimilarMovies(id);
    const similar = useSelector((store) => store.movie.similarMovies);
    if (!similar) return;
 
 

  console.log(similar);
  return (
    <div>
      {similar.map((similar) => (
        <MovieList key={similar?.id} title={"Similar Movies"} movie={similar?.movie}/>
      ))}
    </div>
  );
};
export default MovieBottom;
