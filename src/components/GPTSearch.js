import { useRef } from "react";
import openai from "../utils/openai";
import { FETCH_OPTIONS } from "../utils/constants";
import { addgptMovieReult } from "../store/gptSlice";
import { useDispatch, useSelector } from "react-redux";
import ShimmerUI from "./ShimmerUI";

const GPTSearch = () => {
  const input = useRef();
  const dispatch = useDispatch();

  const movieSearch = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false",
      FETCH_OPTIONS
    );
    const json = await data.json();
    return json;
  };

  const handleGPTSearch = async () => {
    const gptSearch =
      "Act as a movie recommendation system and suggest some movies for the query " +
      input.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result : Hera pheri, 3 idiots, hulk, dunki, red";
    const data = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptSearch }],
      model: "gpt-3.5-turbo",
    });

    if (!data) return <ShimmerUI />;
    const gptMovies = data?.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => movieSearch(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addgptMovieReult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-11/12 xl:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 mx-auto"
    >
      <input
        type="text"
        className="xl:text-base lg:text-base md:text-sm sm:text-sm text-xs rounded-l-full font-normal text-black border-black xl:pl-5 md:pl-4 sm:pl-4 pl-3 lg:pl-5 xl:py-3 lg:py-3 md:py-2.5 sm:py-2 py-1.5 xl:w-9/12 md:w-10/12 w-9/12 sm:w-10/12 lg:w-9/12"
        placeholder="Search any type of movie you want?"
        ref={input}
      ></input>
      <button
        onClick={handleGPTSearch}
        className="bg-red-700 xl:py-3 lg:py-3 md:py-2.5 sm:py-2 py-1.5 xl:px-8 sm:px-4 px-2 md:px-6 lg:px-8 font-semibold xl:text-base lg:text-base md:text-sm sm:text-sm text-xs  xl:w-3/12 md:w-2.5/12 sm:w-2/12 w-1.5/12 lg:w-3/12 rounded-r-full"
      >
        Search
      </button>
    </form>
  );
};
export default GPTSearch;
