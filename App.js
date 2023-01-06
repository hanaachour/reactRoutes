import './App.css';
import MovieList from './Components/MovieList';
import Data from './Components/Data.js';
import AddMovie from './Components/AddMovie';
import { useState } from 'react';
import Filter from './Components/Filter';
function App() {
const [newData,setNewData]=useState(Data);

const Adding=(newMovie)=>{
setNewData([...newData,newMovie]);

};
console.log(Data);
const[search,setSearch]=useState("");
const[rating,setRating]=useState(0);
console.log(search);
console.log(rating);

  return (
    <div className="App">
      <Filter defaultRate={rating} getSearch={setSearch} getRating={setRating}/>
      <AddMovie Adding={Adding}/>
   <MovieList Data={newData.filter((el)=>el.title.trim().toLocaleLowerCase().includes(search)&& el.rating>=rating) }/>
    </div>
  );
}

export default App;
