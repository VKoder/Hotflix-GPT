import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movie)

    if (!movies) return;

     return  (
        <div className="bg-black">
        <div className="lg:px-12 md:px-8 sm:px-6 px-4 lg:-mt-60 xl:-mt-64 md:-mt-2  sm:mt-4  relative z-20">
            <MovieList title={"Now Playing"} movie={movies?.nowPlayingMovies} />
            
            <MovieList title={"Top Rated"} movie={movies?.TopRatedMovies} />
            <MovieList title={"Popular Movies"} movie={movies?.PopularMovies} />
            <MovieList title={"Upcoming Movies"} movie={movies?.PopularMovies} />

</div>
        </div>
    )
}
export default SecondaryContainer;