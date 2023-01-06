import React from 'react'
import { useParams } from 'react-router-dom';
import Data from './Data';
import ReactPlayer from 'react-player/youtube';

const Description = () => {
   
let {id}= useParams();
let myMovie = Data.filter((el)=>el.id===id);

  return (
    <div>
        <h1>This is a Description</h1>
    {myMovie && myMovie.map((el)=> <div><h3>Read Description:</h3>
    <h2>{el.title.toUpperCase()}</h2>
    <h4>{el.desription}</h4>
    <h3>Watch the trailer</h3>
    <h3>Rating:{el.rating}</h3>
    <ReactPlayer url={el.videoUrl}></ReactPlayer>
    
    </div>)}
  

   
    
    
    
    




    
    
    
    
    </div>
  )
}
export default Description;