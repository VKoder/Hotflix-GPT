import { IMG_LINK } from "../utils/constants";

const MovieInfoTop =({info}) => {
    return (
        <div className="flex flex-row justify-between xl:gap-1 gap-3 h-[100vh] w-[100%] items-start xl:pt-28 xl:px-20 pt-[13%] px-3"  >
        <div className="xl:w-3.5/12 w-4/12">
          <img
            className="w-72 rounded-2xl"
            src={IMG_LINK + info?.poster_path}
            alt="movieicon"
          ></img>
        </div>


        <div className="xl:w-8/12 w-9/12 flex flex-col justify-start items-start">

          <div className="">
            <span className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl text-lg font-extrabold text-gray-50">
              {info?.title}
            </span>
            <span className="xl:text-xl text-sm xl:pl-4 pl-2 font-normal text-gray-300">
              ({info?.release_date.slice(0, 4)})
            </span>
          </div>

          <div className=" xl:pt-7 pt-0 xl:gap-6 gap-0 text-white flex flex-wrap flex-row">
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
            <span className="xl:px-4 px-2 py-0.5 xl:text-base text-[8px] xl:py-1 text-white bg-black  opacity-70 border rounded-2xl border-black">{Math.floor(info?.runtime / 60)} Hrs</span>

            </div>
          </div>

          <div className="flex flex-row justify-center items-center py-0.5 xl:py-5">
            <span className="xl:text-xl text-[9px] font-semibold  text-white xl:pr-2 pr-0.5">Tagline: </span>
            <span className="text-gray-400 xl:text-2xl text-[9px] italic">"{info?.tagline}"</span>
          </div>

<div className="flex flex-col justify-start items-start w-12/12 xl:w-11/12">
    <span className="text-white font-semibold  text-[9px] xl:text-xl">Overview: </span>
    <span className="text-white text-[7px] hidden sm:block xl:text-lg tracking-wider xl:tracking-wide">{info?.overview}</span>
    <span className="text-white text-[7px] sm:hidden xl:text-lg tracking-wider xl:tracking-wide">{info?.overview.length > 120 ? `${info?.overview.slice(0, 120)}...` : info?.overview}</span>
</div>


        </div>
      </div>
    )
}
export default MovieInfoTop;