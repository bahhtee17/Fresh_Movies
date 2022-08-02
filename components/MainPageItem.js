import Image from 'next/image'
import React from 'react'
import classes from "./mainpage.module.css"
import clickhere from "../public/images/clickhere.png"

const MainPageItem = (props) => {
  return (
    <div className={classes.container}>
       <Image className={classes.image} src={`https://image.tmdb.org/t/p/w1280/${props.image}`} width={1280} height={700}/>
       <Image src={clickhere} width={300} height={300}/>
    </div>
  )
}

export default MainPageItem