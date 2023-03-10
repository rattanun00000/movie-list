import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieApi from '../../api/MovieApi';
import { APIKey } from '../../api/MovieApiKey';
import './MovieDetail.scss';

function MovieDetail() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetail = async () => {
      const resp = await movieApi
        .get(`?apikey=${APIKey}&i=${id}&plot=full`)
        .catch((error) => {
          console.log('error', error);
        });
      setMovie(resp.data);
      setLoading(true);
    };

    fetchDetail();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="movie-detail-con">
          <div className="movie-detail-top">
            <div className="movie-detail-title-con">
              <div className="movie-detail-title">{movie.Title}</div>
              <div className="movie-detail-genre"> ({movie.Genre})</div>
            </div>
            <div className="imdb-rate">
              <div className="logo">IMDb</div>
              <div className="rate">{movie.imdbRating}</div>
            </div>
          </div>
          <div className="movie-detail-bottom">
            <div className="movie-detail-img">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="movie-detail-info">
              <div className="movie-detail-plot">{movie.Plot}</div>
              <div>
                <strong>Released : {movie.Released}</strong>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 style={{ margin: '1rem 0' }}>Loading...</h4>
      )}
    </div>
  );
}

export default MovieDetail;
