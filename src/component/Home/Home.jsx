import React, { useState, useEffect } from 'react';
import movieApi from '../../api/MovieApi';
import { APIKey } from '../../api/MovieApiKey';
import MovieCard from '../MovieCard/MovieCard';
import './Home.scss';
// Components

function Home() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const searchKey = search ? search : 'man';
      const res = await movieApi
        .get(`?apikey=${APIKey}&s=${searchKey}`)
        .catch((error) => {
          console.log(error);
        });
      setTimeout(() => {
        setMovies(res.data.Search);
      }, 500);
    };
    fetchMovies();
  }, [search]);
  console.log(movies);

  return (
    <>
      <div className="home">
        <div className="home-container">
          <div className="home-top">
            <h3 style={{ margin: '1rem 0' }}>Movies</h3>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="movie-container">
            {movies &&
              movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
                /*<div key={movie.imdbID}>
              <div className="card-image">
                <img src={movie.Poster} alt={movie.Title} />
              </div>
              <div>{movie.Title}</div>
              <p>Year : {movie.Year}</p>
            </div>*/
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
