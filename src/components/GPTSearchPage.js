import { BACK_IMG } from "../utils/constants";
import GPTResult from "./GPTResult";
import GPTSearch from "./GPTSearch";

const GPTSearchPage = () => {
  return (
    <div className="flex justify-center relative  items-center flex-col h-full xl:pt-40  lg:pt-40 md:pt-28 sm:pt-24 pt-20 w-screen overflow-hidden ">
      <div className="z-30 w-full h-20">
        <GPTSearch />
      </div>
      <div className="w-11/12">
        <GPTResult />
      </div>
      <div className="overflow-hidden fixed -z-10 top-0 left-0 w-full">
        <img
          className=" brightness-[.4] lg:scale-110 md:scale-x-125 sm:scale-x-150  sm:scale-y-110 object-cover md:h-[600px] sm:h-[600px] h-screen lg:h-[700px]  w-full"
          alt="background"
          src={BACK_IMG}
        ></img>
      </div>
    </div>
  );
};
export default GPTSearchPage;
