import React from 'react'

function MovieCard( {movie} ) {
  return (
    <div className='card mt-7 mx-auto md:mb-4'>
        <div className="image w-[215px] h-auto">
            <img src={movie.Poster == 'N/A' ? 'https://react-movie-search-app99.netlify.app/static/media/errorImage.0b19f0b7.png' : movie.Poster} alt="" />
        </div>
        <div className='mt-[-2px] max-w-[215px] text-[#ffffffcc] text-[16px] font-semibold tracking-[1px]'>
           { movie.Title }
            </div>
        <h2 className='mt-[-2px] text-[#ffffffcc] text-[16px] font-semibold tracking-[1px]'>
            { movie.Year }
            </h2>
    </div>
  )
}

export default MovieCard