import React from 'react'
import "./HomeScreen.css"
import Nav from '../Nav'
import Banner from '../Banner'
import requests from '../Request'
import Row from '../Row'
const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <Nav/>

      
      <Banner/>
      <Row title =" NETFLIX ORIGINAL " fetchUrl ={requests.fetchNetflixOriginal} isLargeRow/>
      <Row title =" trending now " fetchUrl ={requests.fetchTopRated} />
      <Row title =" Top rated " fetchUrl ={requests.fetchTopRated} />
      <Row title =" Action Movies " fetchUrl ={requests.fetchActionMovies} />
      <Row title =" Comedy Movies " fetchUrl ={requests.fetchComedyMovies} />
      <Row title =" Horror Movies " fetchUrl ={requests.fetchHorrorMovies} />
      <Row title =" Romance Movies " fetchUrl ={requests.fetchRomanceMovies} />
      <Row title =" Documentaries " fetchUrl ={requests.fetchDocumentaries} />

    </div>
  )
}

export default HomeScreen
