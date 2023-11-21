import React from "react";
import titleImg from "../images/transformer-title.png";

import "./movieContent.css";

function MovieContent({ movie }) {
  return (
    <div className={`content ${movie.active ? "active" : undefined}`}>
      <img src={movie.titleImg} alt="movie_title" className="movie_title" />
      <h4>
        <span>{movie.year}</span>
        <span>
          <i>{movie.ageLimit}</i>
        </span>
        <span>{movie.length}</span>
        <span>{movie.category}</span>
      </h4>
      <p>{movie.description}</p>
      <div className="button">
        <a href="#" className=" secondBtn">
          <ion-icon name="bookmark-outline"></ion-icon> Book
        </a>
        <a href="#" className="mainBtn">
          <ion-icon name="add-outline"></ion-icon> My List
        </a>
      </div>
    </div>
  );
}

export default MovieContent;
