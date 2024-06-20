import React from 'react'
import search from "../assets/search.png";


const Search = ({term, setTerm, getMovies}) => {

  const searchMovies = (e)=>{
    e.preventDefault();
    getMovies(term)
  }

  return (
      <form className="flex items-center justify-center bg-black w-[100%] sm:w-[71%] mt-5 px-3 py-2 sm:py-3 sm:px-4 rounded-[30px] search" onSubmit={searchMovies}>
    <input
      type="search"
      className="bg-[#1f2123] flex-1 w-[100%] pr-3 text-[#a1a1a1] font-medium font-Raleway search_input"
      value={term}
      onChange={(e)=>setTerm(e.target.value)}
    />
    <button type='submit'><img src={search} alt="" className="w-[30px] h-[30px] cursor-pointer"/></button>
  </form>
  )
}

export default Search
