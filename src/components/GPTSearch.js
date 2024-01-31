import { useRef } from "react";

const GPTSearch = () => {
    const input = useRef()

    const handleGPTSearch = () => {
        console.log(input.current.value)
    }   

    return (
        
            <form onSubmit={(e)=> e.preventDefault()} className=" w-1/2 mx-auto">
            <input type="text" className="text-base rounded-l-full font-normal text-black border-black pl-5 py-3 w-9/12" placeholder="Search any type of movie you want?" ref={input}></input>
            <button onClick={handleGPTSearch} className="bg-red-700 py-2.5 px-8 font-semibold text-lg w-3/12 rounded-r-full">Search</button>
            </form>
    )
}
export default GPTSearch;