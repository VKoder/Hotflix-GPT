import { useSelector } from "react-redux";

import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies) return null; // Return null or some loading indicator while waiting for movies

  const movieInfo = movies[3];
  const { original_title, overview, id } = movieInfo;

  return (
    <div className="relative ">
      <div className="overflow-hidden">
        <VideoBackground movieid={id} />
      </div>
      <div className="absolute top-0 ">
        <VideoTitle original_title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
