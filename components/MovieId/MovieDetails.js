import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import classes from "./movie-id.module.css"
import {BsFillStarFill} from "react-icons/bs"
import YouTube from 'react-youtube'
/*



    */

    //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=a744e90192258110f06f7ef476ad1c88
    //https://api.themoviedb.org/3/movie/297762?api_key=a744e90192258110f06f7ef476ad1c88&append_to_response=videos
const MovieDetails = (props) => {


/* <div>
        <div>
            <Image src={props.castPhoto} width={100} height={150}/>
        </div>
        <div>
            <h2>{props.castName}</h2>
            <h2>{props.characterName}</h2>
        </div>
    </div>*/


    const opts = {

        playerVars: {

          autoplay: 0,
        },
      };
      //
      const onPauseHandler = (e) => {
        e.target.pauseVideo();
      }



  return (
   <div className={classes.container}>

    <div className={classes.details}>
        <div>
            <h1 className={classes.title}>{props.title}</h1>
            <h3 className={classes.date}>Release Date: {props.release_date}</h3>
        </div>
        <div>
             <BsFillStarFill color='#285D3D' width={150} height={150}/>
            <h2 style={{color: "#285D3D"}}>{props.rate}</h2>
        </div>
    </div>

    <div className={classes.media}>
        <div>
            <Image src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} width={430} height={600}/>

        </div>

        <div>
          <YouTube className={classes.video} videoId={props.video} opts={opts} onReady={onPauseHandler}/>
        </div>

    </div>

    <div>
        <p className={classes.paragraph}>Overview: {props.overview}</p>
    </div>



  </div>
  )
}



export default MovieDetails