import { useContext, useEffect } from "react"
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom";
import InputForm from "./InputForm";
import { MyContext } from "./MyContext"

function Navbar() {
  const location = useLocation();

  return (
    <div className='flex md:block bg-[#212121]'>
        <div className="navbar bg-[#212121] mx-auto  md:flex md:justify-between	pt-5 h-20 text-white md:px-[150px] drop-shadow-2xl">
          <Link to='/'>
              <h1 className='text-[#ffffffcc] ml-5 mb-5  my-auto font-bold md:font-extrabold text-[25px] md:text-[25px] cursor-pointer '>Movie Search App </h1>
          </Link>  
          {location.pathname === "/movie-search-app" ? (
          <InputForm />
        ) : (
          <Link to="/movie-search-app" >
            <div className="mx-auto bg-blue-600 p-2 font-medium rounded-xl w-[110px] text-center"> Home page</div>
          </Link>
        )}        
           
        </div>
        
    </div>
  )
}

export default Navbar