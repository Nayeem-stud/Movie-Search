import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Recommendations from './components/Recommendations';

const API_KEY = "api_key=1cf50e6248dc270629e802686245c2c8";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const searchURL = BASE_URL + "/search/movie?" + API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  const getMovies = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // Set movies only if results are found
        if (data.results.length > 0) {
          setMovies(data.results);
        } else {
          setMovies([]); // Clear movies if no results
        }
      });
  };

  const getRecommendations = (movieId) => {
    const recommendationsURL = `${BASE_URL}/movie/${movieId}/recommendations?${API_KEY}&language=en-US&page=1`;
    fetch(recommendationsURL)
      .then(res => res.json())
      .then(data => setRecommendations(data.results));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(searchURL + "&query=" + searchTerm);
    } else {
      // If the search term is empty, you can choose to reset the movie list or keep it as is
      getMovies(API_URL); // Reset to default movies
    }
  };

  return (
    <div>
      <Header onSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {movies.length > 0 ? ( // Check if movies exist before rendering MovieList
        <MovieList movies={movies} onMovieClick={getRecommendations} />
      ) : (
        <p>No movies found. Please try a different search.</p> // Display a message if no movies
      )}
      {recommendations.length > 0 && <Recommendations recommendations={recommendations} />}
    </div>
  );
}

export default App;
