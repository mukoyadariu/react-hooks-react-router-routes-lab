import React from "react";
import { actors } from "../data"; // Make sure to import the actors data

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Actors;
