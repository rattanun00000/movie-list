import React from 'react';
import './MovieCard.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';

function MovieCard({ movie }) {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="card-image">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{movie.Title}</h3>
        <p>Year : {movie.Year}</p>
      </div>
      <div className="button">
        <div
          className="add-movie"
          onClick={() => dispatch(addToCart({ ...movie }))}
        >
          Add movie
        </div>
        <div className="read-more">
          <Link to={`movie/${movie.imdbID}`}>Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
