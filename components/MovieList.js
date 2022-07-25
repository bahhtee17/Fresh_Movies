
import React from 'react'
import MovieItem from './MovieItem';


const MovieList = (props) => {
//<MovieItem poster={props.poster} title={props.title} releaseDate={props.releaseDate}/>
  return (
    <>
      {props.movies.map((movie) => { return <MovieItem key={movie.id} movie_id={movie.id} poster={movie.poster_path} title={movie.original_title} releaseDate={movie.release_date} />
       })}

    </>
  )
}
//https://api.themoviedb.org/3/movie/now_playing?api_key=a744e90192258110f06f7ef476ad1c88


export default MovieList