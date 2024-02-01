import MovieCard from "./MovieCard";

const MovieList = ({ title, movie }) => {
  if (!movie) {
    return console.log("no");
  }

  return (
    <div className="lg:py-4 md:py-3 sm:py-2 py-2">
      <span className="lg:text-xl md:text-lg sm:text-base text-base font-semibold ">
        {title}
      </span>
      <div className="flex overflow-x-auto whitespace-nowrap lg:pt-4 md:pt-3 sm:pt-2 pt-2">
        <div className="flex lg:gap-4 md:gap-3 gap-2 sm:gap-2">
          {movie?.map((movie) => (
            <MovieCard
              key={movie?.id}
              poster={movie?.poster_path || movie?.profile_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
