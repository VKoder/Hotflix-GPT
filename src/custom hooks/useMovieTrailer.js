import { FETCH_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addnowtrailer } from "../store/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieid) => {
  const dispatch = useDispatch();
  

  const fetchVideo = async () => {
    const data = await fetch(
      //id se video api ka array mil rha hai
      "https://api.themoviedb.org/3/movie/" + movieid + "/videos?language=en-US",
      FETCH_OPTIONS
    );
    // usme se sirf "trailer " ko filter kro or by chance tralier nahi hoga to 0th elem select kro ek hi obj milega
    // once it done us obj ko redux me bhej do
    //  or in the end store ko sub krke us obj me se key ko nikl ke api me add krdo thats it
    const json = await data.json();
    const filtervideo = json?.results.filter(
      (video) => video.type === "Trailer"
    );
    const finalvideo = filtervideo.length ? filtervideo[0] : json?.results?.[0];
    dispatch(addnowtrailer(finalvideo));
  };
  useEffect(() => {
    fetchVideo();
  }, []);
};
export default useMovieTrailer;
