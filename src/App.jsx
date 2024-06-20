import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import MovieList from './components/MovieList';

function App() {
 const [movies, setMovies] = useState([]);
 const [isloading, setIsloading] = useState(true);
 const [term, setTerm] = useState("");

//  const getMovies = async ()=>{
//     try {
//       const url = `http://www.omdbapi.com/?s=avengers&apikey=7fe4c5c5`;
//       const res = await fetch(url);
//       const resJson = await res.json();
//       // console.log(resJson);

//       setMovies(resJson.Search);
      
//       setIsloading(false)
//     } catch(error) {
//       console.log(error);
//       setIsloading(false);
//     }
//  };

 useEffect(()=>{
  fetch("https://www.omdbapi.com/?s=avengers&apikey=7fe4c5c5")
  .then(res => res.json())
  .then((data)=>{
    setMovies(data.Search)
    setIsloading(false)
  })
  .catch((err)=>{
    console.log(err);
  })
 }, [])

  return (
    <div className="flex flex-col justify-center items-center px-6 sm:px-16">
      <h1 className="text-[3rem] text-white">MovieBox</h1>
      <Search />
      {isloading ? <h1 className='text-white text-3xl text-center'>Loading....</h1> : <div className='grid grid-rows sm:grid-cols-3 gap-5'>
        {movies.map((movie)=>(
          <div>
            <MovieList key={movie.imdbID} movie={movie} />
          </div>
        ))}
      </div>}
    </div>
  );
}

export default App;
