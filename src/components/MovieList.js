import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import ShimmerUI from "./ShimmerUI";

const MovieList = ({ title, movie }) => {
  if (!movie) {
    return <ShimmerUI/>
  }
  return (
    <div className="lg:py-5 md:py-4 sm:py-3 py-2.5">
      <span className="lg:text-2xl md:text-xl sm:text-base text-base font-semibold md:pl-3 pl-2 lg:pl-4">
        {title}
      </span>
      <div className="flex overflow-x-auto no-scrollbar  lg:pt-5 md:pt-4 sm:pt-2.5 pt-2.5">
        <div className="flex lg:gap-4 md:gap-3 gap-2 sm:gap-2">
          {movie?.map((movie) => (
            <Link to={"/movieinfo/" + movie?.id}>
            <MovieCard
              key={movie?.id}
              poster={movie?.poster_path || movie?.profile_path} title={movie?.title || movie?.original_name}
            />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
