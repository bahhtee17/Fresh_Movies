import React from 'react'
import Layout from './../components/Ui/Layout';
import classes from "../styles/about.module.css"
const AboutUsPage = () => {
  return (
    <Layout>
        <div className={classes.container}>
          <div>
          <p>
            The Fresh Movie is a portfolio project that gets data from TMDB API.
          </p>
          </div>

        </div>
    </Layout>
  )
}

export default AboutUsPage