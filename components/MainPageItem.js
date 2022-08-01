import Image from 'next/image'
import React from 'react'
import classes from "./mainpage.module.css"

const MainPageItem = (props) => {
  return (
    <div className={classes.container}>
       <Image src={`https://image.tmdb.org/t/p/w1280/${props.image}`} width={1280} height={700}/>
    </div>
  )
}

export default MainPageItem