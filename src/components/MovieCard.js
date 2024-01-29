import { IMG_LINK } from "../utils/constants";
const MovieCard =({poster}) => {
    
    return (
        <div className="lg:w-[160px] md:w-[120px] sm:w-[100px] w-[80px] ">
            <img className="w-full rounded-sm" src={IMG_LINK + poster} alt="Card"></img>
        </div>
    )
}
export default MovieCard;