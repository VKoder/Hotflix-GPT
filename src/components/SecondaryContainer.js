import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movie)

    if (!movies) return;

     return  (
        <div className="lg:px-8 md:px-8 sm:px-6 px-4 lg:-mt-28 md:-mt-8  sm:mt-4  relative z-20">
            <MovieList title={"Now Playing"} movie={movies?.nowPlayingMovies} />
            
            <MovieList title={"Top Rated"} movie={movies?.TopRatedMovies} />
            <MovieList title={"Popular Movies"} movie={movies?.PopularMovies} />
            <MovieList title={"Popular Movies"} movie={movies?.PopularMovies} />


        </div>
    )
}
export default SecondaryContainer;