import React from 'react';
import MovieCard from "./MovieCard";
import "./MovieLi.css"
 function MovieList ({Data}){
  return (
    <div className='movielis'>
       {Data.map((el)=>(
       <MovieCard Data={el}/>
       ))}

    </div>
  );
}

export default MovieList;