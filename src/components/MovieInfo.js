import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Loading from './Loading'
import { MyContext } from './MyContext'

function MovieInfo() {

  const [loading, setLoading] = useState(false)
  const [movie, setMovie] = useState({})
  const { id } = useParams()

  async function fetchMovie() {
    setLoading(true)
    let response = await fetch(`https://www.omdbapi.com/?apikey=6d414ead&i=${id}`);
    let data = await response.json();
    setMovie(data)
    setLoading(false)
    
  }
  
  useEffect(() =>{
       fetchMovie()
  },[])

  if (loading) {
    return <Loading />; 
  }else
  


  return (
    <div className='md:px-[120px] md:pt-[40px] pb-12  md:grid '>
     <div className="infohero md:flex justify-between mt-[100px] md:mt-0 mx-auto ">
        <div className="flex md:grid"><img className='mx-auto md:mx-0' src={movie.Poster == 'N/A' ? 'https://react-movie-search-app99.netlify.app/static/media/errorImage.0b19f0b7.png' : movie.Poster} alt="" /></div>

        <div className="text-[#ffffffcc] md:mr-[100px] flex flex-col md:ml-5">  
              <h1 className='font-bold text-[2em] px-5 mt-5'>
                 {movie.Title}
                 </h1>
            <h3 className='px-5'>
              {movie.imdbRating} IMDB • {movie.Runtime} • {movie.Year}
              </h3>
            <p className='my-8 mx-auto px-5
            max-w-[540px]'>
              {movie.Plot}
            </p>
            
            <div className="px-5">
              <p className='mb-1'> <span className='font-bold'>Genres:</span> {movie.Genre}</p>
              <p className='mb-1'> <span className='font-bold'>Actors:</span>  {movie.Actors}</p>
              <p className='mb-1'> <span className='font-bold'>Director:</span>  {movie.Director}</p>
              <p className='mb-1'> <span className='font-bold'>Production:</span> {movie.Website}</p>
              <p className='mb-1'> <span className='font-bold'>Countries:</span>  {movie.Country}</p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default MovieInfo