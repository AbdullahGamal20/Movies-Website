import React, { useEffect, useState } from "react";
import MovieContent from "../../Components/MovieContent";
import MovieDate from "../../Components/MovieDate";
import PlayBtn from "../../Components/PlayBtn";
import MovieSwiper from "../../Components/MovieSwiper";
import "./banner.css";

function Banner() {
  const [movies, setMovies] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:3000/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSlideChange = (id) => {
    const newMovie = movies.map((movie) => {
      movie.active = false;
      if (movie._id === id) {
        movie.active = true;
      }
      return movie;
    });
    setMovies(newMovie);
  };

  return (
    <div className="banner">
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => {
          return (
            <div className="movie" key={movie._id}>
              <img
                src={movie.bgImg}
                alt="Background Image"
                className={`bgImg ${movie.active ? "active" : undefined}`}
              />
              <div className="container-fluid banner_data ">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12 movie_content_banner">
                    <MovieContent movie={movie} />
                  </div>

                  <div className="col-lg-6 col-md-12 col-sm-12 movie_date_banner">
                    <MovieDate movie={movie} />
                    <PlayBtn movie={movie} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      {movies && movies.length > 0 && (
        <MovieSwiper slides={movies} slidesChange={handleSlideChange} />
      )}
    </div>
  );
}

export default Banner;
