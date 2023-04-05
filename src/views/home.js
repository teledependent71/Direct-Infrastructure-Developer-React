import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Infrastructure Developer</title>
        <meta property="og:title" content="Direct Infrastructure Developer" />
      </Helmet>
    </div>
  )
}

export default Home
