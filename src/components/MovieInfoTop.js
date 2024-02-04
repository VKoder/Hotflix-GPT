import { IMG_LINK } from "../utils/constants";

const dateCSS =
  "font-semibold text-white xl:pr-2 lg:pr-2 md:pr-1.5 sm:pr-1 pr-0.5 text-[8px] lg:text-base md:text-sm sm:text-sm xl:text-base";
const valueCSS =
  "xl:px-4 lg:px-4 md:px-3 sm:px-2 px-2 py-0.5 xl:text-base lg:text-base md:text-sm sm:text-sm text-[8px] xl:py-1 text-white bg-black  opacity-70 border rounded-2xl border-black";

const MovieInfoTop = ({ info }) => {
  return (
    <div className="flex flex-row justify-between xl:gap-1 gap-3 xl:h-[100vh] lg:h-[100vh] md:h-[100vh] sm:h-[80vh] xs:h-[50vh] h-[30vh] w-[100%] items-start xl:pt-28 xl:px-20 pt-[15%] px-3">
      <div className="xl:w-3.5/12 w-4/12">
        <img
          className="xl:w-72 lg:w-64 md:w-60 sm:w-48 w-28  rounded-2xl"
          src={IMG_LINK + info?.poster_path}
          alt="movieicon"
        ></img>
      </div>

      <div className="xl:w-8/12 w-9/12 flex flex-col justify-start items-start">
        <div className="">
          <span className="xl:text-6xl lg:text-6xl md:text-4xl sm:text-4xl text-lg font-extrabold text-gray-50">
            {info?.title}
          </span>
          <span className="xl:text-xl text-sm xl:pl-4 pl-2 font-normal text-gray-300">
            ({info?.release_date?.slice(0, 4)})
          </span>
        </div>

        <div className=" xl:pt-7 lg:pt-6 md:pt-5 sm:pt-3 pt-0 xl:gap-6 gap-0 text-white flex flex-wrap flex-row">
          <div>
            <span className={dateCSS}>Date:</span>
            <span className={valueCSS}>{info?.release_date}</span>
          </div>
          <div className="">
            <span className={dateCSS}>Genure:</span>
            {info?.genres?.map((gen) => (
              <span key={gen?.name} className={valueCSS}>{gen?.name}</span>
            ))}
          </div>
          <div>
            <span className={dateCSS}>Runtime:</span>
            <span className={valueCSS}>
              {Math.floor(info?.runtime / 60)} Hrs
            </span>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center py-0.5 lg:py-4 md:py-3 sm:py-2 xl:py-5">
          <span className="xl:text-xl lg:text-xl md:text-lg sm:text-base text-[9px] font-semibold  text-white xl:pr-2 lg:pr-2 md:pr-1 sm:pr-1 pr-0.5">
            Tagline:{" "}
          </span>
          <span className="text-gray-400 xl:text-2xl lg:text-2xl md:text-xl sm:text-base text-[9px] italic">
            "{info?.tagline}"
          </span>
        </div>

        <div className="flex flex-col justify-start items-start w-12/12 xl:w-11/12">
          <span className="text-white font-semibold  text-[9px] lg:text-xl md:text-lg sm:text-base  xl:text-xl">
            Overview:{" "}
          </span>
          <span className="text-white text-[7px] hidden sm:block lg:text-lg md:text-base text-sm  xl:text-lg tracking-wider xl:tracking-wide">
            {info?.overview}
          </span>
          <span className="text-white text-[7px] sm:hidden xl:text-lg tracking-wider xl:tracking-wide">
            {info?.overview?.length > 180
              ? `${info?.overview?.slice(0, 180)}...`
              : info?.overview}
          </span>
        </div>
      </div>
    </div>
  );
};
export default MovieInfoTop;
