import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './PopularMovie.css'; // Import the CSS for styling

const PopularMovie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: '7e51cb0a1147e866594926f59e17bc02',
            language: 'en-US',
            page: 1, // Get the first page of popular movies
          },
        });
        setMovies(response.data.results.slice(0, 20)); // Get only the top 10 results
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="latest-movies background">
      <h2>Popular Movies</h2>
      <div className="movies-grid ">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-image"
              />
            )}
            <div className="movie-content">
              <h3 className="movie-title">{movie.title}</h3>
              <Link to={`/movie/${movie.id}`} className="btn btn-primary butt">Show details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovie;
