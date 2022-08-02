import Image from 'next/image'
import React from 'react'
import classes from "./description.module.css"
import arrow from "../public/images/arrow.png"

const Description = () => {
  return (
    <div className={classes.container}>
         <div className={classes.paragraph}>
            <p>if you always have some complications about choosing now playing movies.</p>
            <Image src={arrow} width={200} height={200}/>
         </div>
         <div className={classes.paragraphTwo}>
            <p><span className={classes.mainword}>Fresh Movie</span> is the best way to choose one of them randomly</p>
         </div>
    </div>
  )
}

export default Description