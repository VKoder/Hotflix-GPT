import work from "../Image/work.svg"
import Header from "./Header"
const MovieDemo = () => {
    return (
        <div>
            <Header/>
        <div className="h-screen w-12/12 flex justify-center items-center flex-col bg-zinc-200">
            <img className="xl:w-80 lg:w-72 md:w-64 sm:-48 w-42" alt="WORKING" src={work}></img>
        <h1 className="font-semibold lg:text-xl text-black">Still Working on this Route...!</h1>
        </div>
        </div>
    )
}
export default MovieDemo