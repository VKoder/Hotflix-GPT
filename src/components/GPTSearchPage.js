import { BACK_IMG } from "../utils/constants";
import GPTSearch from "./GPTSearch";

const GPTSearchPage = () => {
  return (
    <div className="flex justify-start  items-center flex-col w-12/12 ">
        <div className="absolute pt-40 z-10 w-full h-20">
        <GPTSearch/> 
        </div>
      <div className="overflow-hidden w-full">
        <img
          className=" brightness-[.4] lg:scale-110 md:scale-x-125 sm:scale-x-150  sm:scale-y-110 scale-x-[2] scale-y-100 md:h-[600px] sm:h-[600px] h-screen lg:h-[700px]  w-full"
          alt="background"
          src={BACK_IMG}
        ></img>
      </div>
    </div>
  );
};
export default GPTSearchPage;
