import React, { useEffect, useLayoutEffect, useState } from 'react'
import Layout from './../../components/Ui/Layout';
import {useRouter} from 'next/router';
import MovieDetails from '../../components/MovieId/MovieDetails';
import Axios from "axios"




const MovieIdPage = ({data}) => {
  const [movies, setMovies] = useState(data.results)
  const [selectedMovie, setSelectedMovie] = useState()
  const [videoData, setVideoData] = useState()


const router = useRouter();
const query = router.query.movieId;



const getValueById = (id) => {
 return movies.find(movie => movie.id.toString() === id)
}
const movie = getValueById(query)




useEffect(() => {
 const fetchHandler = async() => {
    const res = await Axios.get(`https://api.themoviedb.org/3/movie/${query}/videos?api_key=a744e90192258110f06f7ef476ad1c88`)
    const data = await res.data;
   setVideoData(data.results)
   const castData = await Axios.get(`https://api.themoviedb.org/3/movie/${query}/credits?api_key=a744e90192258110f06f7ef476ad1c88`)
   const credits = await castData.data;
   console.log(credits)
  }

 fetchHandler()
}, [])









//
  return (
    <Layout title={"Movie"}>
      {movie && videoData ? <MovieDetails overview={movie.overview} video={videoData[0].key} key={movie.id}  title={movie.original_title} release_date={movie.release_date} rate={movie.vote_average} poster_path={movie.poster_path}/> : <p>Loading...</p>}

    </Layout>
  )
}

export async function getServerSideProps(context){







  const res = await Axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=a744e90192258110f06f7ef476ad1c88")






  return {

      props: {data: res.data}
  }


}




export default MovieIdPage