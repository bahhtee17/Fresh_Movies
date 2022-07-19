import React, { useState } from 'react'
import MovieList from '../../components/MovieList';
import Layout from './../../components/Ui/Layout';

const MoviesListPage = ({data}) => {
  const [movies, setMovies] = useState(data.results)
  console.log(movies)
  return (
    <Layout title={"Movies"}>
      <MovieList movies={movies} />
    </Layout>
  )
}

export async function getServerSideProps(){
  const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=a744e90192258110f06f7ef476ad1c88")
  const data = await res.json();
  if (!data) {
      return {
        notFound: true,
      }
    }
  return {props: {data: data}}
}

export default MoviesListPage