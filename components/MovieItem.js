import React from 'react'
import Image from "next/image"

const MovieItem = (props) => {

  //https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  return (
    <div>
       <div>
        <a>
            <Image src={`https://image.tmdb.org/t/p/w500/${props.poster}`} width={500} height={800}/>
        </a>
       </div>
       <div>
          <h1>{props.title}</h1>
          <h3>{props.releaseDate}</h3>
       </div>
    </div>
  )
}

export default MovieItem