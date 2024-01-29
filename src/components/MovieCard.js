import { IMG_LINK } from "../utils/constants";
const MovieCard =({poster}) => {
    
    return (
        <div className="lg:w-[160px] md:w-[130px] sm:w-[120px] w-[100px] ">
            <img className="w-full rounded-sm" src={IMG_LINK + poster} alt="Card"></img>
        </div>
    )
}
export default MovieCard;