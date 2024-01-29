import { useSelector } from "react-redux";

import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies) return;
  const movieInfo = movies[4];
  const { original_title, overview, id } = movieInfo;

  return (
    <div>
      <span>MainContainer</span>
      <VideoBackground movieid={id} />
      <VideoTitle original_title={original_title} overview={overview} />
    </div>
  );
};
export default MainContainer;
