import React, { useEffect, useState } from 'react'
import "./Banner.css"
 import axios from './axios';
 import requests from './Request';
const Banner = () => {

    const [movies , setMovies] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginal);
            setMovies(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, [])
    console.log(movies)
    function trunncate(string, n){
        return string?.length > n ?string.substring(0, n-1) + '...': string;
    }
  return (
   <header className='banner' style={{
    backgroundSize:"cover",
    backgroundPosition:"center center",
    backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`
   }}>

    <div className="banner_contents">
        <h1 className="banner_title">{movies?.title || movies?. name || movies?.original_name}</h1>
        <div className="banner_buttons">
            <button className='banner_button'>Play</button> 
            <button className='banner_button'>My list</button>
        </div>
        <h1 className='banner_description'>{ trunncate(movies?.overview, 150)}</h1>
    </div>
    <div className="banner--fadeButton" />
    
   </header>
  )
}

export default Banner
