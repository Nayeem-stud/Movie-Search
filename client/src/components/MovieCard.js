import React from 'react';
import './MovieCard.css'; // Import the CSS file for styles

function MovieCard({ movie, onClick }) {
  const { title, poster_path, vote_average, overview } = movie;

  return (
    <div className="movie" onClick={onClick}>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <span className={`rating ${getColor(vote_average)}`}>{vote_average}</span>
      </div>
      <div className="overview">
        <h3 className="overview-title">Overview</h3>
        <p className="overview-text">{overview}</p>
      </div>
    </div>
  );
}

function getColor(vote) {
  if (vote >= 8) return "green";
  else if (vote >= 5) return "orange";
  return "red";
}

export default MovieCard;
