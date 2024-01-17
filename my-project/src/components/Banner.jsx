import React, { useEffect , useState} from 'react'
import axios from '../axios'
import {API_KEY,baseImage} from '../constants/constants'

const generateRandomIndex = () => {
    return Math.floor(Math.random() * 20);
};

const Banner = () => {
    const [movie,setMovie] = useState()
    useEffect(()=>{
        axios.get(`/trending/all/day?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[0]);
            setMovie(response.data.results[generateRandomIndex()])
        })
    },[])

    const bannerStyle = {
        backgroundImage: movie && movie.backdrop_path ? `url(${baseImage + movie.backdrop_path})` : '',
      };

  return (
    <div className={`bg-cover h-4/5`} style={bannerStyle}>
        <div className='text-white flex flex-col p-32 '>
            <h1 className='font-extrabold text-4xl font-sans'>{movie ? movie.title : ""}</h1>
            <div className='mt-6 font-bold'>
                <button className='border px-8 hover:bg-gray-500 py-2 rounded-lg' >play</button>
                <button className='border px-8 hover:bg-gray-500 py-2 rounded-lg ml-5'>mylist</button>
            </div>
            <h1 className='mt-5 text-wrap w-64 text-start font-bold'>{movie ? movie.overview : ""}</h1>
        </div>
    </div>
  )
}

export default Banner