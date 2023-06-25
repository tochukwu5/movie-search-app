import React, { useContext } from 'react'
import { MyContext } from './MyContext';



function InputForm() {

  const {searchTerm, setSearchTerm, fetchMovie} = useContext(MyContext)
  

  return (
    <div className="seach flex my-auto ">
    <input 
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    type="text" placeholder='search movies' className='outline-none text-sm p-3 h-8 rounded-l-lg text-black'/>
     <button className='bg-[#3434bb] w-[40px] rounded-r-lg'>
    
     <svg 
     onClick={()=> { setSearchTerm(searchTerm); fetchMovie(searchTerm); setSearchTerm('')}}
     className='text-lg ml-2' fill='white'
         height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button>
</div>
  )
}

export default InputForm