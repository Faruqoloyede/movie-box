import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import MovieList from './components/MovieList';

function App() {
 const [movies, setMovies] = useState([]);
 const [isloading, setIsloading] = useState(true);
 const [term, setTerm] = useState("");



  const getMovies = async (title)=>{
    const url = `https://www.omdbapi.com/?s=${title}&apikey=7fe4c5c5`;
    const response = await fetch(url);
    const resJson = await response.json();
    if(resJson.Search) {
      setMovies(resJson.Search);
      setIsloading(false)
    }else {
      setMovies([])
    }
  }

  useEffect(()=>{
    getMovies("Batman")
  }, [term])

  return (
    <div className="flex flex-col justify-center items-center px-6 sm:px-16">
      <h1 className="text-[3rem] text-white">MovieBox</h1>
      <Search term={term} setTerm={setTerm} getMovies={getMovies}  />
      {!isloading && movies.length === 0 && <h1 className='text-white text-3xl text-center mt-5'>No movies found</h1> }
      {isloading ? <h1 className='text-white text-3xl text-center'>Loading....</h1> : <div className='grid grid-rows sm:grid-cols-3 gap-5'>
        {movies.map((movie)=>(
          <div>
            <MovieList key={movies.imdbID} movie={movie} />
          </div>
        ))}
      </div>}
    </div>
  );
}

export default App;
