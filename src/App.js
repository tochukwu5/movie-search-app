import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { MyContext } from './components/MyContext';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import MovieInfo from './components/MovieInfo';
import Loading from './components/Loading';


function App() {
const [loading, setLoading] = useState(false)
const [searchTerm, setSearchTerm] = useState('')

const [movies, setMovies] = useState([])

async function fetchMovie(query) {
  setLoading(true)
  let response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=6d414ead&s=${query}`);
  let data = await response.json();
  setMovies(data.Search)
  setLoading(false)

}

useEffect(() => {
  fetchMovie('avengers')
}, [])

if (loading) {
  return <Loading />; 
}else


  return (
    <div className="App bg-[#212121] pb-12 ">
      <MyContext.Provider value={{ searchTerm, setSearchTerm, fetchMovie, movies, setMovies, loading, setLoading }}>
        <Router basename='movie-search-app'>
    <Navbar  />
    <Switch>
    <Route exact path= "/movie-search-app">
          <Home />
          </Route>
          <Route path= "/movies/:id">           
            <MovieInfo/>
          </Route>
          <Route path= "*">           
            <NotFoundPage/>
          </Route>

    </Switch>
    </Router>
    </MyContext.Provider>
    </div>
  );
}

export default App;
