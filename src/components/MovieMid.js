import { useDispatch, useSelector } from "react-redux";
import useCast from "../custom hooks/useCast";
import { IMG_LINK } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieMid = ({ id, info }) => {
    const dispatch = useDispatch()

  useCast(id);
  const castInfo = useSelector((store) => store.movie.cast);
  if (!castInfo) return
  const { cast, crew } = castInfo;

  const budgetCss = "xl:text-lg lg:text-lg md:text-base sm:text-sm text-sm font-bold"
  const priceCss ="xl:text-base lg:text-base md:text-sm  text-xs xs:text-sm font-normal"

  return (
    <div className="xl:px-10 lg:px-10 md:px-8 sm:px-6 px-4 xl:pt-4 lg:py-4 md:py-3 py-1.5 sm:py-2  w-12/12 bg-black">
    <div className="xl:mb-6 lg:mb-5 md:mb-4 sm:mb-3 mb-2">
    <span className="text-white font-bold xl:text-3xl lg:text-3xl text-xl sm:text-xl md:text-2xl"> Cast</span>
  </div>
    <div className=" flex  justify-between  items-start xl:gap-16 lg:gap-14 md:gap-12 sm:gap-10 gap-5">
              
      <div className="w-9/12 py-2">

        <div className="overflow-x-scroll overflow-y-hidden no-scrollbar xl:gap-5 lg:gap-5 md:gap-4 sm:gap-3 gap-2  px-4 flex flex-row">
          {cast?.map((cast) => ( 
            <div key={cast?.character} className="flex justify-between items-center rounded-lg  flex-col bg-zinc-700">
              <div className="stroke animate 800 xl:h-[190px] lg:h-[180px] md:h-[170px] sm:h-[150px] h-[130px] overflow-hidden  rounded-t-lg xl:w-[170px] md:w-[150px] sm:w-[130px] w-[90px] lg:w-[160px]">
                <img
                  className="w-full "
                  src={IMG_LINK + cast?.profile_path}
                  alt="Loading.."
                ></img>
              </div>
              <div className="lg:h-16 md:h-14 sm:h-12 h-14 xl:h-16 rounded-b-lg w-full flex flex-col xl:px-2 lg:px-2 md:px-1.5 sm:px-1 px-0.5 lg:py-1 sm:py-0.5 py-0.5 xl:py-1">
                <span className="text-white font-semibold xl:text-base lg:text-base md:text-sm sm:text-sm text-xs">
                  {cast?.name}
                </span>
                <span className="text-gray-300 font-light xl:text-sm md:text-xs sm:text-xs text-[8px] lg:text-sm">
                  {cast?.character}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" w-3/12 flex justify-start flex-col items-start md:gap-6 gap-0.5 text-white">
        <div className="flex flex-row xl:gap-10 gap-0.5 flex-wrap">
        <div className="flex justify-evenly md:gap-4 gap-3 lg:gap-5 items-center flex-row flex-wrap">
                <Link target="_blank" to={"https://www.instagram.com/_vivekkhule_/"}><span className="text-white lg:text-2xl text-xl md:text-2xl"><i class="ri-instagram-line"></i></span></Link>
                <Link target="_blank" to={"https://github.com/VKoder"}><span className="text-white lg:text-2xl text-xl md:text-2xl"><i class="ri-github-fill"></i></span></Link>
                <Link target="_blank" to={"https://www.linkedin.com/in/vivek-khule-237682250/"}><span className="text-white lg:text-2xl text-xl md:text-2xl"><i class="ri-linkedin-box-fill"></i></span></Link>
                <Link target="_blank" to={"https://twitter.com/VivekKhule"}><span className="text-white lg:text-2xl text-xl md:text-2xl"><i class="ri-twitter-x-fill"></i></span></Link>
                </div>
        <div className="flex flex-col">
          <span className={budgetCss}>Budget: </span>
          <span className={priceCss}>{info?.budget}</span>
        </div>
        <div className="flex flex-col">
          <span className={budgetCss}>Revenue: </span>
          <span  className={priceCss}>{info?.revenue}</span>
        </div>
        </div>
        <div className="flex flex-row xl:gap-14 gap-0.5 flex-wrap">
        <div className="flex flex-col">
          <span className={budgetCss}>Status: </span>
          <span  className={priceCss}>{info?.status}</span>
        </div>
        <div className="flex flex-col">
          <span className={budgetCss}>Ratings:</span>
          <span  className={priceCss}> {info?.vote_average}</span>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default MovieMid;
