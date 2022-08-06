import classes from "../styles/main.module.css"
import Layout from '../components/Ui/Layout'
import { useState } from 'react';
import  Axios from "axios"
import Button from "../components/Ui/Button";
import MainPageItem from "../components/MainPageItem";
import Link from "next/link";
import Description from "../components/Description";



export default function Home({data}) {
const [items, setItems] = useState(data.results)
const [randomValue, setRandomValue] = useState([])
const [isClicked, setIsClicked] = useState(false)


const generateRandomMovie = () => {
  const randomIndex = Math.floor(Math.random() * items.length)

  setRandomValue( items[randomIndex])
  setIsClicked(true)



}




  return (

    <Layout title="Home">
        <div className={classes.container}>
          <Description/>
          <Button onClick={generateRandomMovie}>Generate</Button>

         { isClicked ? <Link href={`/movies/${randomValue.id}`}>
           <a>
             <MainPageItem image={randomValue.backdrop_path}/>
           </a>

  </Link>: null}
        </div>
    </Layout>

  )
}


export async function getServerSideProps(){
  const res = await Axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=a744e90192258110f06f7ef476ad1c88")


  return {props: {data: res.data} }
}
