import React, { useEffect, useState } from 'react';
import axios from '../axios';
import { baseImage, trialer_base_url, API_KEY } from '../constants/constants';
import Youtube from 'react-youtube';

const RowPost = (props) => {
  const [movies, setMovie] = useState([]);
  const [urlId, setUrlId] = useState(null); // Initialize with null
  const [showTrailer, setShowTrailer] = useState(false); // State to control the visibility of the trailer

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovie(response.data.results);
    }).catch(err => {
      // alert("network error")
    });
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    axios.get(`${trialer_base_url}${id}/videos?api_key=${API_KEY}`).then(response => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0]);
        setShowTrailer(true); // Set showTrailer to true when video is available
      }
    }).catch(error => {
      console.error("Error fetching trailer:", error);
    });
  }

  const closeTrailer = () => {
    setUrlId(null); // Reset urlId to null
    setShowTrailer(false); // Set showTrailer to false when closing the trailer
  }

  return (
    <div className='bg-black'>
      <h2 className='text-white ml-6 mt-5 mb-5 font-bold text-xl'>{props.title}</h2>
      <div className='flex flex-row overflow-x-scroll '>
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            src={`${baseImage + obj.backdrop_path}`}
            alt="poster"
            className='h-36 ml-6 mb-6 hover:scale-110 transition-all ease-in-out duration-300'
          />
        ))}
      </div>
      {/* Check if showTrailer is true before rendering the Youtube component */}
      {showTrailer && (
        <>
          <Youtube opts={opts} videoId={urlId.key} />
          {/* Add a close button to close the trailer */}
          <button
            onClick={closeTrailer}
            className='text-white bg-red-500 px-4 py-2 mt-4 ml-6 rounded hover:bg-red-600 transition-all ease-in-out duration-300'
          >
            Close Trailer
          </button>
        </>
      )}
    </div>
  );
}

export default RowPost;
