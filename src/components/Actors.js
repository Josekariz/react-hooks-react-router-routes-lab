import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => {
        return (
          <div key={index}>
            <h1>{actor.name}</h1>
            <ul>
              {actor.movies.map((movieName, index) => {
                return <li key={index}>{movieName}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Actors;
