import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';

function MovieCard ({Data}){
  console.log(Data.id);
  const navigate= useNavigate();
  return (
    <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Data.posterUrl} />
      <Card.Body>
        <Card.Title>{Data.title}</Card.Title>
        <Card.Text>
          {Data.desription}
        </Card.Text>  
        <Button variant="primary" onClick={()=>navigate(`/movie/${Data.id}`)}>Go </Button>
      
        <Rating name="read-only" value={Data.rating} max={10} readOnly />
      </Card.Body>
    </Card>
    </div>
  );
}
export default MovieCard;
