import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css'; // Import the new CSS file for MovieList styles

function MovieList({ movies, onMovieClick }) {
  return (
    <div className="movie-list"> {/* Added a wrapping div */}
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={() => onMovieClick(movie.id)} />
      ))}
    </div>
  );
}

export default MovieList;
