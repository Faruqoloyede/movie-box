import React from 'react'


const MovieList = ({ movie }) => {
  return (
    <div>
        <div className='max-w-sm rounded-[12px] overflow-wrap cursor-pointer movies my-7'>
      <img src={movie.Poster} alt="poster"/>
      <div className='max-w-[300px] px-3 py-4 bg-black'>
        <div className='font-normal text-[#9ef3fc] text-[18px] mb-2 font-roboto'>
            Title: {movie.Title} <br />
        </div>
        <ul className='list-none text-[#a1a1a1] font-roboto'>
            <li>
                <span>Type: {movie.Type}</span>
            </li>
            <li>
                <span>Year: {movie.Year}</span>
            </li>
        </ul>
      </div>
    </div>

    
    </div>
  )
}

export default MovieList
