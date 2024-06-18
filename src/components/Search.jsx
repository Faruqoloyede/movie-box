import React from 'react'
import search from "../assets/search.png";
import { useState } from 'react';

const Search = ({ searchText }) => {
  const [text, setTex] = useState('');

  return (
    
      <div className="flex items-center justify-center bg-black w-[100%] sm:w-[71%] mt-5 px-3 py-2 sm:py-3 sm:px-4 rounded-[30px] search ">
    <input
      type="search"
      className="bg-[#1f2123] flex-1 w-[100%] pr-3 text-[#a1a1a1] font-medium font-Raleway search_input"
      onChange={(e)=> setTex(e.target.value)}
    />
    <img src={search} alt="" className="w-[30px] h-[30px] cursor-pointer" />
  </div>
  )
}

export default Search
