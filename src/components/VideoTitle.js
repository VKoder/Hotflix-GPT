const VideoTitle = ({original_title, overview}) => {
    return (
        <div className="w-screen aspect-video pt-[20%] lg:px-20 md:px-16 px-6 overflow-hidden bg-gradient-to-r from-black ">
            <div className="flex justify-start items-start flex-col">
            <span className="lg:w-6/12 md:w-7/12 sm:w-7/12 w-7/12 lg:text-5xl md:text-3xl text-lg sm:text-3xl text-white font-bold">{original_title}</span>
            <span className="lg:w-4/12 md:w-5/12 sm:w-6/12 w-7/12 text-white lg:text-sm md:text-xs text-[8px] tracking-wide font-normal lg:pt-3 pt-1 md:pt-2">{overview.length > 160 ? `${overview.slice(0, 160)}...` : overview }</span>
            <div className="flex justify-evenly items-start flex-row gap-2 lg:pt-6 pt-3 md:pt-5">
            <button className="md:px-4 md:py-1.5 px-2 py-0.5 lg:px-4 lg:py-1.5 rounded-md text-black  bg-white hover:opacity-80 font-semibold "><i className="ri-play-fill pr-1 lg:text-lg md:text-base text-xs" ></i>Play Now</button>
            <button className="md:px-4 md:py-1.5 px-2 py-0.5 lg:px-4 lg:py-1.5 rounded-md  text-white  bg-zinc-600 hover:opacity-80 font-semibold "><i className="ri-information-line pr-1 lg:text-xl  md:text-base text-xs"></i>More Info</button>
            </div>
            </div>
        </div>
    )
}
export default VideoTitle;