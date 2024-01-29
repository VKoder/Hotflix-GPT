import { useSelector } from "react-redux";
import useMovieTrailer from "../custom hooks/useMovieTrailer";

const VideoBackground = ({ movieid }) => {
  const trailer = useSelector((store) => store.movie?.nowtrailer);

  useMovieTrailer(movieid);

  return (
    <div>
      <iframe
        width="600"
        height="400"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?si=DIRrTAyTupAY1Pth"
        }
        title="YouTube video player"
        frameBorder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default VideoBackground;
