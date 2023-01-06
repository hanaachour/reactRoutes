import React from 'react'
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';
 function Filter({defaultRate,getSearch,getRating}){
    const handleChangeTitle=(e)=>{
getSearch(e.target.value)
    }
  return (
    <div>
        <form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Welcome to HANAFLIX</Form.Label>
              <Form.Control
              onChange={handleChangeTitle}
                type="text"
                name='title'
                placeholder="Enter the movie's Name"
                autoFocus
              />
            </Form.Group> 
            </form>
            <Rating
        name="simple-controlled"
         max={10}
         defaultValue={defaultRate}
         onChange={(event,newValue)=>{
            getRating(newValue);
            
         }}
       />
        </div>
  )
}
export default Filter;
