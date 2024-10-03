import React from 'react';

const Recommendations = ({ movies }) => {
  return (
    <div className="recommendations">
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <div className="movie" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <span>{Math.round(movie.vote_average * 10) / 10}</span>
            </div>
            <div className="overview">
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No recommendations available</p>
      )}
    </div>
  );
};

export default Recommendations;
