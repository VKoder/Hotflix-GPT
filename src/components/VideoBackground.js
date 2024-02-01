import { useSelector } from "react-redux";
import useMovieTrailer from "../custom hooks/useMovieTrailer";

const VideoBackground = ({ movieid }) => {
  useMovieTrailer(movieid);
  const trailer = useSelector((store) => store.movie?.nowtrailer);

  return (
    <div className="w-screen overflow-hidden ">
      <div className="">
        <iframe
          className="w-screen aspect-[16/9]"
          src={
            "https://www.youtube.com/embed/" +
            trailer?.key +
            "?autoplay=1&mute=1&controls=0&modestbranding=1"
          }
          title="YouTube video player"
          frameBorder="0"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
