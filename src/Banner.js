import React,{useState,useEffect} from "react"
import "./Banner.css"
import axios from "./axios"
import requests from "./request"


function Banner(){
    const[movie,setMovie] = useState([])
    
    useEffect(()=>{
        async function getData(){
            const request =await axios.get(requests.fetchnetflixoriginal)
            //setMovie(request.data.results)
            //console.log(movie)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1)])
           
            return request;
            

        }
        getData();


    },[])
    console.log(movie)

    return(
    <header className="banner" style={{
        backgroundSize:'cover',
        backgroundPosition:"center center",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
    }}>
        <div className="banner_contents">
            <h1 className="banner_title"> {movie?.title || movie?.name || movie?.original_name}</h1>
                   <div className="banner_buttons">
                      <button classNmae="banner_button">Play</button>
                     <button className="banner_button">My List</button>
                   </div>
                   <h1 className="banner_description">
                       {movie?.overview}
                   </h1>
        </div>

    </header>
    )
}
export default Banner