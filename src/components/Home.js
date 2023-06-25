import React, { useContext, useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { MyContext } from './MyContext';
import { Link } from "react-router-dom";
import Loading from './Loading';



function Home() {
const { movies, loading, setLoading} = useContext(MyContext)

if (loading) {
  return <Loading />; 
}

if (!movies) {
  return <div className="font-bold text-center text-[#e2dadafd] text-[30px] mt-[30vh]"> No movie found 😐 </div>
}

  return (
     
     
        <div className='h-full bg-[#212121] flex md:block hero mt-10 md:mt-0'>
        <div className="pt-8 mx-auto md:px-[12%] grid md:grid-cols-4 ">

      {   movies.length > 0 ? ( 
         movies.map((movie, index) => (

        

          <Link to={`/movies/${movie.imdbID}`}>

           <MovieCard key={index} movie={movie} />
           </Link>
          ) ) 
        ) 
        
        
        : ('no movie found')   
   
         }
        
            
        </div>
    </div> 
         
    
            
      
  ) 
}

export default Home