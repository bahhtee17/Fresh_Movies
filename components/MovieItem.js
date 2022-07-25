import React from 'react'
import Image from "next/image"
import classes from "./movie_item.module.css"
import Link from 'next/link'
import MovieDetailsList from './MovieId/MovieDetailsList';
const MovieItem = (props) => {

  //https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  return (
    <div className={classes.container}>
       <div className={classes.poster}>
        <Link href={`/movies/${props.movie_id}`}>
        <a>
            <Image src={`https://image.tmdb.org/t/p/w500/${props.poster}`} width={200} height={300}/>
        </a>
        </Link>
       </div>
       <div className={classes.details}>
          <h1 className={classes.title}>{props.title}</h1>

          <p><em>Release Date:</em> {props.releaseDate}</p>
          <button>Comments</button>

       </div>
    </div>
  )
}

export default MovieItem