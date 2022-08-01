import classes from "../styles/main.module.css"
import Layout from '../components/Ui/Layout'
import { useState } from 'react';
import  Axios from "axios"
import Button from "../components/Ui/Button";
import MainPageItem from "../components/MainPageItem";



export default function Home({data}) {
const [items, setItems] = useState(data.results)
const [randomValue, setRandomValue] = useState()
const [isClicked, setIsClicked] = useState(false)
console.log(items.length)

const generateRandomMovie = () => {
  const randomIndex = Math.floor(Math.random() * items.length)
  const getGeneratedValue = items[randomIndex].backdrop_path
  setRandomValue(getGeneratedValue)
  setIsClicked(true)
  console.log(getGeneratedValue)
}


console.log(randomValue)

  return (

    <Layout title="Home">
        <div className={classes.container}>
          <Button onClick={generateRandomMovie}>Generate</Button>
         { isClicked ? <MainPageItem image={randomValue}/> : null}
        </div>
    </Layout>

  )
}


export async function getServerSideProps(){
  const res = await Axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=a744e90192258110f06f7ef476ad1c88")


  return {props: {data: res.data} }
}
