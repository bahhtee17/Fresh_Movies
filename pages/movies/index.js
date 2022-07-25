import React, { useState } from 'react'

import MovieList from '../../components/MovieList';
import Layout from './../../components/Ui/Layout';
import  Axios  from 'axios';

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
  const res = await Axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=a744e90192258110f06f7ef476ad1c88")


  return {props: {data: res.data} }
}

export default MoviesListPage