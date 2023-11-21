import React, { useState } from "react";
import "./playBtn.css";
import MovieModal from "./MovieModal";

function PlayBtn({ movie }) {
  const [modal, setModal] = useState(false);
  const ToogleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div
        className={`trailer d-flex align-items-center justify-content-center ${
          movie.active ? "active" : undefined
        }`}
      >
        <a
          href="#"
          className="playBtn  d-flex align-items-center justify-content-center"
          onClick={ToogleModal}
        >
          <ion-icon name="play-outline"></ion-icon>
        </a>
        <p>Watch Trailer</p>
      </div>
      {movie.active && (
        <MovieModal movie={movie} status={modal} toogleModal={ToogleModal} />
      )}
    </>
  );
}

export default PlayBtn;
