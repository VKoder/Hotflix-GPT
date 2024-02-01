import { useParams } from "react-router-dom";
import useMovieInfo from "../custom hooks/useMovieInfo";
import Header from "./Header";
import { useSelector } from "react-redux";
import { IMG_LINK } from "../utils/constants";

const MovieInfo = () => {
  const { id } = useParams();
  useMovieInfo(id);

  const info = useSelector((store) => store.movie.movieInfo);
  if (!info) return console.log("movieInfo is coming");

  console.log(info);

  //if we want we can access it by using state variable(like return the state var after data storing) but we r using redux store here

  return (
    <div className="relative w-full">
      <Header />
      <div className="h-[100vh] w-[100%] top-0 absolute -z-10 overflow-hidden bg-black">
        <img
          className="w-12/12 mx-auto brightness-[.3] scale-125  xl:scale-105"
          src={IMG_LINK + (info?.belongs_to_collection?.backdrop_path || info?.backdrop_path)}
          alt="movieinfobg"
        ></img>
      </div>
      <div className="flex flex-row justify-between xl:gap-1 gap-6 h-[100vh] w-[100%] items-start xl:pt-28 xl:px-20 pt-14 px-3"  >
        <div className="xl:w-3.5/12 w-4/12">
          <img
            className="w-72 rounded-2xl"
            src={IMG_LINK + info?.poster_path}
            alt="movieicon"
          ></img>
        </div>


        <div className="xl:w-8/12 w-9/12 flex flex-col justify-start items-start">

          <div className="">
            <span className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl text-xl font-extrabold text-gray-50">
              {info?.title}
            </span>
            <span className="xl:text-xl text-sm xl:pl-4 pl-2 font-normal text-gray-300">
              ({info?.release_date.slice(0, 4)})
            </span>
          </div>

          <div className=" xl:pt-7 pt-1 xl:gap-6 gap-0.5 text-white flex flex-wrap flex-row">
            <div>
            <span className="font-semibold text-white xl:pr-2 pr-0.5 text-[8px] xl:text-base">Date:</span>
            <span className="xl:px-4 px-2 py-0.5 xl:text-base text-[8px] xl:py-1 text-white bg-black  opacity-70 border rounded-2xl border-black">{info?.release_date}</span>
            </div>
            <div className="">
                <span className="font-semibold text-white xl:pr-2 pr-0.5 text-[8px] xl:text-base">Genure:</span>
            {info?.genres.map((gen) => (
              <span className="xl:px-4 px-2 py-0.5 xl:text-base text-[8px] xl:py-1 text-white bg-black  opacity-70 border rounded-2xl border-black">{gen?.name}</span>
            ))}
            </div>
            <div>
            <span className="font-semibold text-white xl:pr-2 pr-0.5 text-[8px] xl:text-base">Runtime:</span>
            <span className="xl:px-4 px-2 py-0.5 xl:text-base text-[8px] xl:py-1 text-white bg-black  opacity-70 border rounded-2xl border-black">{info?.runtime/60}Hrs</span>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center py-1 xl:py-6">
            <span className="xl:text-xl text-xs font-semibold  text-white xl:pr-2 pr-0.5">Tagline: </span>
            <span className="text-gray-400 xl:text-2xl text-[9px] italic">"{info?.tagline}"</span>
          </div>

<div className="flex flex-col justify-start items-start w-12/12 xl:w-8/12">
    <span className="text-white font-semibold  text-xs xl:text-xl">Overview: </span>
    <span className="text-white text-[7px] xl:text-lg tracking-wider xl:tracking-wide">{info?.overview}</span>
</div>


        </div>
      </div>
    </div>
  );
};
export default MovieInfo;
