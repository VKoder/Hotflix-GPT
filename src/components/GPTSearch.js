import { useRef } from "react";
import openai from "../utils/openai";
import { FETCH_OPTIONS } from "../utils/constants";
import { addgptMovieReult } from "../store/gptSlice";
import { useDispatch, useSelector } from "react-redux";


const GPTSearch = () => {
    const input = useRef()
    const dispatch  = useDispatch()
   
    
    const movieSearch =async  (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', FETCH_OPTIONS)
        const json = await data.json()
        return json;
    }

    const handleGPTSearch =  async  () => {
        const gptSearch = "Act as a movie recommendation system and suggest some movies for the query " + input.current.value + ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result : Hera pheri, 3 idiots, hulk, dunki, red";
        const data = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptSearch }],
            model: 'gpt-3.5-turbo',
          });

          if(!data?.choices) return null;

        //   console.log(data?.choices?.[0]?.message?.content)
          const gptMovies = data?.choices?.[0]?.message?.content.split(",");
        //   console.log(gptMovies)

          const promiseArray = gptMovies.map(movie => movieSearch(movie));
          const tmdbResults = await Promise.all(promiseArray);
          console.log(gptMovies)
          console.log(tmdbResults)
          dispatch(addgptMovieReult({movieNames: gptMovies,movieResults: tmdbResults}))

       }
   
    return (
        
            <form onSubmit={(e)=> e.preventDefault()} className=" w-1/2 mx-auto">
            <input type="text" className="text-base rounded-l-full font-normal text-black border-black pl-5 py-3 w-9/12" placeholder="Search any type of movie you want?" ref={input}></input>
            <button onClick={handleGPTSearch} className="bg-red-700 py-2.5 px-8 font-semibold text-lg w-3/12 rounded-r-full">Search</button>
            </form>
    )
}
export default GPTSearch;