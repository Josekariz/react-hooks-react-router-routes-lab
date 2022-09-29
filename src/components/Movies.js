import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => {
        return (
          <div key={index}>
            <h2>{movie.title}</h2>
            <time>{movie.time}</time>
            <ul>
              {movie.genres.map((genre, i) => {
                return <li key={i}>{genre}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Movies;
