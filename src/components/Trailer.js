import React from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";

function Trailer({movies}) {
  const params=useParams();
  const movie=movies.filter((el)=>el.id==params.id)[0];
  console.log(movie);
  return (
    <div style={{marginLeft:"20px"}}>
         <img  src={movie.posterurl} style={{width:"100%"}}/>
        <h1 style={{color:"white",marginTop:"20px"}}>{movie.name}</h1>
        <p style={{color:"white",width:"250px"}}>{movie.description}</p>
        <ReactStars
    count={5}
    size={24}
    edit={false}
    activeColor="#ffd700"
    value={movie.rating}
  />
           
    </div>
  )
}

export default Trailer
