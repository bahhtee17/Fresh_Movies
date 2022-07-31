import classes from "../styles/main.module.css"
import Layout from '../components/Ui/Layout'
import { useState } from 'react';
import  Axios from "axios"



export default function Home({data}) {
const [items, setItems] = useState(data.results)
const [randomValue, setRandomValue] = useState()
console.log(items.length)

const generateRandomMovie = () => {
  const randomIndex = Math.floor(Math.random() * items.length)
  const getGeneratedValue = items[randomIndex].title
  setRandomValue(getGeneratedValue)
  console.log(getGeneratedValue)
}




  return (

    <Layout title="Home">
        <div className={classes.container}>
          <button onClick={generateRandomMovie}>Generate</button>
          <div>{randomValue}</div>
        </div>
    </Layout>

  )
}


export async function getServerSideProps(){
  const res = await Axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=a744e90192258110f06f7ef476ad1c88")


  return {props: {data: res.data} }
}
