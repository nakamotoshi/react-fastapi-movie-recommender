import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import UserProfile from './components/UserProfile.jsx';


import MovieCard from './components/MovieCard.jsx';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
// const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


function App() {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect( () => {
        getMovies(FEATURED_API);
    },[]);

    const getMovies = (API) => {

        fetch(API)
            .then( (response) => response.json())
            .then( (data) => {
                setMovies(data.results);
            });

    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
     
        if (searchTerm){
            getMovies(SEARCH_API + searchTerm);
        } 
        setSearchTerm('');
    }
    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <>
        <Router>
          <AuthProvider>
            <header>
              <form onSubmit={handleOnSubmit} >
                    <input 
                        className='search'
                        type="search" 
                        placeholder="Search"
                        value ={searchTerm}
                        onChange={handleOnChange}
                    />
              </form>
              <nav>
                <Link to="/register">Register</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/login">Login</Link>
              </nav>

            </header>          
            <main>
              <Routes>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/profile" element={<UserProfile/>}/>
              </Routes>
              <div className='movie-container'>
                {movies.length > 0 && 
                  movies.map((movie) => 
                    <MovieCard key={movie.id} {...movie}/>)}
              </div>
            </main>

          </AuthProvider>
        </Router>
        </>
    );
};

export default App;