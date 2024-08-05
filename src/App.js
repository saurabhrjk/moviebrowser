import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import Searchview from './components/Searchview';
import MovieView from './components/MovieView';
import NotFound from './components/Pagenotfound';  // Import the NotFound component
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  // API key for TMDB
  const apiKey = '7e51cb0a1147e866594926f59e17bc02';

  useEffect(() => {
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutView />} />
        <Route path='/search' element={<Searchview keyword={searchText} searchResults={searchResults} />} />
        <Route path='/movie/:id' element={<MovieView />} />
        <Route path='*' element={<NotFound />} /> {/* Wildcard route for 404 */}
      </Routes>
    </div>
  );
}

export default App;
