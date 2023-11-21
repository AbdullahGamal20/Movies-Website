import React from "react";
import "./modal.css";

function MovieModal({ movie, status, toogleModal }) {
  return (
    <div className={`movieModal ${status ? "active" : undefined}`}>
      <a href="#" className="modalClose" onClick={toogleModal}>
        <ion-icon name="close-circle-outline"></ion-icon>
      </a>
      <iframe
        src={movie.video}
        title={`${movie.title} | Official Trailer`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope ; picture-in-picture , web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MovieModal;
